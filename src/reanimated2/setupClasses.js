// @ts-nocheck

export function setupClasses() {
  'worklet';

  function _createSuper(t) {
    return function () {
      var e,
        o = global._getPrototypeOf(t);
      e = o.apply(this, arguments);
      return global._possibleConstructorReturn(this, e);
    };
  }

  function _superPropBase(t, o) {
    for (
      ;
      !{}.hasOwnProperty.call(t, o) && null !== (t = global._getPrototypeOf(t));

    );
    return t;
  }

  function _get(e, t, r) {
    var p = global._superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }

  function _defineProperty(e, r, t) {
    return (
      (r = global._toPropertyKey(r)) in e
        ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[r] = t),
      e
    );
  }

  function _callSuper(t, o, e) {
    return (
      (o = global.__getPrototypeOf(o)),
      global._possibleConstructorReturn(
        t,
        global._isNativeReflectConstruct()
          ? Reflect.construct(o, e || [], global._getPrototypeOf(t).constructor)
          : o.apply(t, e)
      )
    );
  }

  function _possibleConstructorReturn(t, e) {
    if (e && ('object' == global._typeof(e) || 'function' == typeof e))
      return e;
    if (void 0 !== e)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return global._assertThisInitialized(t);
  }

  function _assertThisInitialized(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }

  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch (t) {}
    return (global._isNativeReflectConstruct =
      function _isNativeReflectConstruct() {
        return !!t;
      })();
  }

  function _getPrototypeOf(t) {
    return (
      (global._getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      global._getPrototypeOf(t)
    );
  }

  function _inherits(t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && global._setPrototypeOf(t, e);
  }

  function _setPrototypeOf(t, e) {
    return (
      (global._setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      global._setPrototypeOf(t, e)
    );
  }

  function _typeof(o) {
    '@babel/helpers - typeof';
    return (
      (global._typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (o) {
              return typeof o;
            }
          : function (o) {
              return o &&
                'function' == typeof Symbol &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? 'symbol'
                : typeof o;
            }),
      global._typeof(o)
    );
  }

  function _classCallCheck(a, n) {
    if (!(a instanceof n))
      throw new TypeError('Cannot call a class as a function');
  }

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, global._toPropertyKey(o.key), o);
    }
  }

  function _createClass(e, r, t) {
    return (
      r && global._defineProperties(e.prototype, r),
      t && global._defineProperties(e, t),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }

  function _toPropertyKey(t) {
    var i = global._toPrimitive(t, 'string');
    return 'symbol' == global._typeof(i) ? i : i + '';
  }

  function _toPrimitive(t, r) {
    if ('object' != global._typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || 'default');
      if ('object' != global._typeof(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
  }

  Object.assign(global, {
    _callSuper,
    _possibleConstructorReturn,
    _assertThisInitialized,
    _isNativeReflectConstruct,
    _getPrototypeOf,
    _inherits,
    _setPrototypeOf,
    _typeof,
    _classCallCheck,
    _defineProperties,
    _createClass,
    _toPropertyKey,
    _toPrimitive,
    _createSuper,
    _defineProperty,
    _superPropBase,
    _get,
  });
}
