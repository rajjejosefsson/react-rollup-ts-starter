import { createElement } from 'react';
var __assign =
  Object.assign ||
  function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++)
      for (var a in (t = arguments[n]))
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  };
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
var css = '.TextInput_e-input__2lJT0{height:70px}';
styleInject(css);
var Sizes,
  Types,
  TextInput$1 = function(e) {
    return createElement('input', __assign({}, e));
  },
  css$1 = '.Button_button__2a549{border-radius:4px;background:violet}';
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
var Button$1 = function(e) {
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
export { TextInput$1 as TextInput, Button$1 as Button };
