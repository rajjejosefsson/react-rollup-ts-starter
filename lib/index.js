import { createElement } from 'react';
var __assign =
  Object.assign ||
  function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++)
      for (var o in (t = arguments[n]))
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    return e;
  };
function __rest(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
  }
  return n;
}
function styleInject(e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
    (o.type = 'text/css'),
      'top' === n && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
}
var css = '.TextInput_e-input__2lJT0{height:70px}';
styleInject(css);
var TextInput$1 = function(e) {
    return createElement('input', __assign({}, e));
  },
  css$1 = '.Button_button__2a549{border-radius:4px;background:violet}';
styleInject(css$1);
var Button$1 = function(e) {
  var t = e.children,
    n = (e.color, e.disabled),
    r = void 0 !== n && n,
    o = e.onClick,
    i = (e.size, e.type),
    s = void 0 === i ? 'button' : i,
    a = __rest(e, ['children', 'color', 'disabled', 'onClick', 'size', 'type']);
  return createElement(
    'button',
    __assign(
      {
        disabled: r,
        name: name,
        onClick: function(e) {
          return o && o({ event: e });
        },
        type: s,
      },
      a,
    ),
    t,
  );
};
export { TextInput$1 as TextInput, Button$1 as Button };
