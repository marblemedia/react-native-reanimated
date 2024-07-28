#import <RNReanimated/NativeMethods.h>
#import <RNReanimated/REAUIKit.h>
#import <React/RCTEventDispatcher.h>
#import <React/RCTScrollView.h>

namespace reanimated {

std::vector<std::pair<std::string, double>> measure(int viewTag, RCTUIManager *uiManager)
{
  REAUIView *view = [uiManager viewForReactTag:@(viewTag)];

  REAUIView *rootView = view;

  if (view == nil) {
    return std::vector<std::pair<std::string, double>>(1, std::make_pair("x", -1234567.0));
  }

  while (rootView.superview && ![rootView isReactRootView]) {
    rootView = rootView.superview;
  }

  if (rootView == nil) {
    return std::vector<std::pair<std::string, double>>(1, std::make_pair("x", -1234567.0));
  }

  CGRect frame = view.frame;
  CGRect globalBounds = [view convertRect:view.bounds toView:rootView];

  return {
      {"x", frame.origin.x},
      {"y", frame.origin.y},
      {"width", globalBounds.size.width},
      {"height", globalBounds.size.height},
      {"pageX", globalBounds.origin.x},
      {"pageY", globalBounds.origin.y},
  };
}

std::vector<std::pair<std::string, double>> hitTest(int viewTag, RCTUIManager *uiManager, double x, double y)
{
  REAUIView *view = [uiManager viewForReactTag:@(viewTag)];

  if (view == nil) {
    return std::vector<std::pair<std::string, double>>(1, std::make_pair("viewTag", -1));
  }
//  REAUIView *rootView = view;
//
//  while (rootView.superview && ![rootView isReactRootView]) {
//    rootView = rootView.superview;
//  }
//
//  if (rootView == nil) {
//    return std::vector<std::pair<std::string, double>>(1, std::make_pair("x", -1234567.0));
//  }

  UIView *target = [view hitTest:CGPointMake(x, y) withEvent:nil];
  CGRect frame = [target convertRect:target.bounds toView:view];

  while (target.reactTag == nil && target.superview != nil && target!=view) {
      target = target.superview;
  }

  return {
      {"viewTag", [target.reactTag doubleValue]},
      {"width", frame.size.width},
      {"height", frame.size.height},
      {"pageX", frame.origin.x},
      {"pageY", frame.origin.y},
  };
}

void scrollTo(int scrollViewTag, RCTUIManager *uiManager, double x, double y, bool animated)
{
  REAUIView *view = [uiManager viewForReactTag:@(scrollViewTag)];
  RCTScrollView *scrollView = (RCTScrollView *)view;
  [scrollView scrollToOffset:(CGPoint){(CGFloat)x, (CGFloat)y} animated:animated];
}

void setGestureState(id<RNGestureHandlerStateManager> gestureHandlerStateManager, int handlerTag, int newState)
{
  if (gestureHandlerStateManager != nil) {
    [gestureHandlerStateManager setGestureState:newState forHandler:handlerTag];
  }
}

} // namespace reanimated
