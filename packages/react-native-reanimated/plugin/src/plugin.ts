import type { PluginItem, NodePath } from '@babel/core';
import type {
  CallExpression,
  JSXAttribute,
  Program,
  ObjectExpression,
} from '@babel/types';
import {
  processIfAutoworkletizableCallback,
  processCalleesAutoworkletizableCallbacks,
} from './autoworkletization';
import { WorkletizableFunction } from './types';
import type { ReanimatedPluginPass } from './types';
import { processIfWithWorkletDirective } from './workletSubstitution';
import { processInlineStylesWarning } from './inlineStylesWarning';
import { addCustomGlobals } from './utils';
import { initializeGlobals } from './globals';
import { substituteWebCallExpression } from './webOptimization';
import { processIfWorkletFile } from './file';
import { processIfWorkletContextObject } from './contextObject';

module.exports = function (): PluginItem {
  function runWithTaggedExceptions(fun: () => void) {
    try {
      fun();
    } catch (e) {
      throw new Error(`[Reanimated] Babel plugin exception: ${e as string}`);
    }
  }

  return {
    pre(state: ReanimatedPluginPass) {
      runWithTaggedExceptions(() => {
        // Initialize worklet number.
        state.workletNumber = 1;
        initializeGlobals();
        addCustomGlobals.call(this);
      });
    },
    visitor: {
      CallExpression: {
        enter(path: NodePath<CallExpression>, state: ReanimatedPluginPass) {
          runWithTaggedExceptions(() => {
            processCalleesAutoworkletizableCallbacks(path, state);
            if (state.opts.substituteWebPlatformChecks) {
              substituteWebCallExpression(path);
            }
          });
        },
      },
      [WorkletizableFunction]: {
        enter(
          path: NodePath<WorkletizableFunction>,
          state: ReanimatedPluginPass
        ) {
          runWithTaggedExceptions(() => {
            processIfWithWorkletDirective(path, state) ||
              processIfAutoworkletizableCallback(path, state);
          });
        },
      },
      ObjectExpression: {
        enter(path: NodePath<ObjectExpression>, state: ReanimatedPluginPass) {
          runWithTaggedExceptions(() => {
            processIfWorkletContextObject(path, state);
          });
        },
      },
      Program: {
        enter(path: NodePath<Program>, state: ReanimatedPluginPass) {
          runWithTaggedExceptions(() => {
            // Reset worklet number.
            state.workletNumber = 1;
            processIfWorkletFile(path, state);
          });
        },
      },
      JSXAttribute: {
        enter(path: NodePath<JSXAttribute>, state: ReanimatedPluginPass) {
          runWithTaggedExceptions(() =>
            processInlineStylesWarning(path, state)
          );
        },
      },
    },
  };
};
