import { createElement, Component } from 'react';
var extendStatics =
  Object.setPrototypeOf ||
  ({ __proto__: [] } instanceof Array &&
    function(e, t) {
      e.__proto__ = t;
    }) ||
  function(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  };
function __extends(e, t) {
  function n() {
    this.constructor = e;
  }
  extendStatics(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var __assign =
    Object.assign ||
    function(e) {
      for (var t, n = 1, o = arguments.length; n < o; n++)
        for (var a in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e;
    },
  Backdrop = function(e) {
    var t = e.backdropStyles,
      n = e.backdropClassName,
      o = e.onClose;
    return createElement('div', {
      className: 'c-modal--backdrop ' + (n || ''),
      style: __assign({}, t),
      onClick: o,
    });
  },
  CloseIcon = function(e) {
    return createElement(
      'svg',
      __assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          baseProfile: 'tiny',
          width: '24',
          height: '24',
          fill: 'currentColor',
          color: '#37454D',
          viewBox: '0 0 24 24',
        },
        e,
      ),
      createElement(
        'g',
        {
          fill: '#FFF',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '2',
        },
        createElement('path', { d: 'M7 17L17 7M17 17L7 7' }),
      ),
    );
  },
  Window = function(e) {
    var t = e.width,
      n = e.height,
      o = e.animation,
      a = e.animationDurationMS,
      i = e.windowStyles,
      s = e.windowClassName,
      r = e.animationState,
      l = e.showCloseButton,
      c = e.onClose,
      p = e.children,
      d = 'c-modal--window modal-' + o + '-on-' + r + ' ' + s,
      m = __assign({ animationDuration: a + 'ms', width: t, height: n }, i);
    return createElement(
      'div',
      { style: m, className: d },
      l &&
        createElement(
          'button',
          { onClick: c, className: 'c-modal--close' },
          createElement(CloseIcon, null),
        ),
      p,
    );
  },
  Modal = (function(e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.state = { isOpen: !1, animationState: 'leave' }),
        (t.onEsc = function(e) {
          t.props.closeOnEsc && 27 === e.keyCode && t.props.onClose();
        }),
        (t.onAnimationEnd = function(e) {
          t.props.closeOnEsc && t.outerDIV.focus(),
            'leave' === t.state.animationState && t.setState({ isOpen: !1 });
        }),
        (t.setModalRef = function(e) {
          t.outerDIV = e;
        }),
        t
      );
    }
    return (
      __extends(t, e),
      (t.getDerivedStateFromProps = function(e, t) {
        var n = !t.isOpen && e.isOpen,
          o = t.isOpen && !e.isOpen;
        return n
          ? { isOpen: !0, animationState: 'enter' }
          : o
            ? { animationState: 'leave' }
            : null;
      }),
      (t.prototype.render = function() {
        var e = this.props,
          t = e.children,
          n = e.animationDurationMS,
          o = e.className,
          a = e.isBackdrop,
          i = e.closeOnBackdrop,
          s = e.onClose,
          r = e.backdropStyles,
          l = e.backdropClassName,
          c = this.state,
          p = c.isOpen,
          d = c.animationState;
        return p
          ? createElement(
              'div',
              {
                ref: this.setModalRef,
                style: { animationDuration: n + 'ms' },
                className: 'c-modal modal-fade-on-' + d + ' ' + o,
                onAnimationEnd: this.onAnimationEnd,
                tabIndex: -1,
                onKeyUp: this.onEsc,
              },
              a &&
                createElement(Backdrop, {
                  onClose: i ? s : void 0,
                  backdropStyles: r,
                  backdropClassName: l,
                }),
              createElement(
                Window,
                __assign({ animationState: d }, this.props),
                t,
              ),
            )
          : null;
      }),
      (t.defaultProps = {
        isOpen: !1,
        isBackdrop: !0,
        showCloseButton: !0,
        closeOnBackdrop: !0,
        closeOnEsc: !0,
        width: '500px',
        height: '300px',
        animation: 'fade',
        animationDurationMS: 300,
        className: '',
        windowClassName: '',
        windowStyles: {},
        backdropClassName: '',
        backdropStyles: {},
      }),
      t
    );
  })(Component);
export { Modal };
