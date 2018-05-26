import { createElement } from 'react';
function styleInject(t, e) {
  void 0 === e && (e = {});
  var n = e.insertAt;
  if (t && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
    (o.type = 'text/css'),
      'top' === n && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = t)
        : o.appendChild(document.createTextNode(t));
  }
}
var css = '.TextInput_e-input__2lJT0{height:70px}';
styleInject(css);
var TextInput$1 = function() {
    return createElement('input', null);
  },
  __assign =
    Object.assign ||
    function(t) {
      for (var e, n = 1, r = arguments.length; n < r; n++)
        for (var o in (e = arguments[n]))
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t;
    };
function __rest(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]]);
  }
  return n;
}
var css$1 =
  '.Button_c-modal--backdrop__3QmQ-{width:100%;height:100%;background-color:#555;opacity:.75}';
styleInject(css$1);
var Button$1 = function(t) {
  var e = t.children,
    n = __rest(t, ['children']);
  return createElement('button', __assign({}, n), e);
};
export { TextInput$1 as TextInput, Button$1 as Button };
