import { createElement, createContext, Component } from 'react';
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
    for (var t, n = 1, r = arguments.length; n < r; n++)
      for (var a in (t = arguments[n]))
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  };
function __rest(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && (n[r[a]] = e[r[a]]);
  }
  return n;
}
function styleInject(e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      a = document.createElement('style');
    (a.type = 'text/css'),
      'top' === n && r.firstChild
        ? r.insertBefore(a, r.firstChild)
        : r.appendChild(a),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(document.createTextNode(e));
  }
}
var css = '.e-input{height:70px}';
styleInject(css);
var Sizes,
  Types,
  TextInput = function(e) {
    return createElement('input', __assign({}, e));
  },
  css$1 = '.button{border-radius:4px;background:violet}';
styleInject(css$1),
  (function(e) {
    (e.small = 'small'), (e.regular = 'regular'), (e.big = 'big');
  })(Sizes || (Sizes = {})),
  (function(e) {
    (e.primary = 'primary'),
      (e.secondary = 'secondary'),
      (e.default = 'tertiary'),
      (e.negative = 'negative'),
      (e.deal = 'deal');
  })(Types || (Types = {}));
var Button = function(e) {
  var t = e.children,
    n = e.type,
    r = void 0 === n ? 'primary' : n,
    a = e.size;
  return createElement(
    'button',
    {
      className:
        'btn btn--' + Sizes[void 0 === a ? 'big' : a] + ' btn--' + Types[r],
    },
    t,
  );
};
Button.displayName = 'Button';
var css$2 =
  '.tabBar{display:inline-flex}.tab{display:flex;justify-content:center;align-items:center;height:20px;width:80px;cursor:pointer;font-weight:400;padding:16px 4px;color:#697379;border-bottom:2px solid transparent}.tab:hover{color:#37454d;background-color:#ebeced}.tab.active{color:#37454d;border-bottom-color:#37454d}.tab.disabled{color:#ddd;cursor:not-allowed}';
styleInject(css$2);
var TabPanelContext = createContext({}),
  TabPanel = (function(e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.internalTabChange = function(e) {
          t.setState(
            { internalActiveTab: e },
            t.props.onChangeTab && t.props.onChangeTab(e),
          );
        }),
        (t.state = {
          internalActiveTab: t.props.activeTabIndex || 1,
          onInternalTabChange: t.internalTabChange,
        }),
        t
      );
    }
    return (
      __extends(t, e),
      (t.prototype.render = function() {
        return createElement(
          TabPanelContext.Provider,
          { value: this.state },
          this.props.children,
        );
      }),
      (t.Content = function(e) {
        var t = e.children;
        return createElement(TabPanelContext.Consumer, null, function() {
          return t;
        });
      }),
      (t.TabBar = function(e) {
        var t = e.children,
          n = __rest(e, ['children']);
        return createElement(TabPanelContext.Consumer, null, function() {
          return createElement('div', __assign({ className: 'tabBar' }, n), t);
        });
      }),
      (t.Tab = function(e) {
        var t = e.children,
          n = e.tabIndex;
        return createElement(TabPanelContext.Consumer, null, function(e) {
          var r = e.onInternalTabChange,
            a = e.internalActiveTab;
          return createElement(
            'div',
            {
              onClick: function() {
                return r(n);
              },
              className: 'tab ' + (n === a ? 'active' : ''),
            },
            t,
          );
        });
      }),
      t
    );
  })(Component);
export { TextInput, Button, TabPanel };
