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
    for (var t, n = 1, a = arguments.length; n < a; n++)
      for (var r in (t = arguments[n]))
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e;
  };
function __rest(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (n[a] = e[a]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
      t.indexOf(a[r]) < 0 && (n[a[r]] = e[a[r]]);
  }
  return n;
}
function styleInject(e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && 'undefined' != typeof document) {
    var a = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style');
    (r.type = 'text/css'),
      'top' === n && a.firstChild
        ? a.insertBefore(r, a.firstChild)
        : a.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = e)
        : r.appendChild(document.createTextNode(e));
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
    a = void 0 === n ? 'primary' : n,
    r = e.size;
  return createElement(
    'button',
    {
      className:
        'btn btn--' + Sizes[void 0 === r ? 'big' : r] + ' btn--' + Types[a],
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
      (t.displayName = 'TabPanel'),
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
          var a = e.onInternalTabChange,
            r = e.internalActiveTab;
          return createElement(
            'div',
            {
              onClick: function() {
                return a(n);
              },
              className: 'tab ' + (n === r ? 'active' : ''),
            },
            t,
          );
        });
      }),
      t
    );
  })(Component);
(TabPanel.TabBar.displayName = 'TabPanel.TabBar'),
  (TabPanel.Tab.displayName = 'TabPanel.Tab'),
  (TabPanel.Content.displayName = 'TabPanel.Content');
export { TextInput, Button, TabPanel };
