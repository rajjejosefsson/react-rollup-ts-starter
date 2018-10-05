import { createElement, createContext, Component } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".e-input{height:70px}";
styleInject(css);

var TextInput = function (props) { return createElement("input", __assign({}, props)); };

var css$1 = ".button{border-radius:4px;background:violet}";
styleInject(css$1);

var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["regular"] = "regular";
    Sizes["big"] = "big";
})(Sizes || (Sizes = {}));
var Types;
(function (Types) {
    Types["primary"] = "primary";
    Types["secondary"] = "secondary";
    Types["default"] = "tertiary";
    Types["negative"] = "negative";
    Types["deal"] = "deal";
})(Types || (Types = {}));

var Button = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'big' : _c;
    return (createElement("button", { className: "btn btn--" + Sizes[size] + " btn--" + Types[type] }, children));
};
Button.displayName = 'Button';

var css$2 = ".tabBar{display:inline-flex}.tab{display:flex;justify-content:center;align-items:center;height:20px;width:80px;cursor:pointer;font-weight:400;padding:16px 4px;color:#697379;border-bottom:2px solid transparent}.tab:hover{color:#37454d;background-color:#ebeced}.tab.active{color:#37454d;border-bottom-color:#37454d}.tab.disabled{color:#ddd;cursor:not-allowed}";
styleInject(css$2);

var TabPanelContext = createContext({});
var TabPanel = /** @class */ (function (_super) {
    __extends(TabPanel, _super);
    function TabPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.internalTabChange = function (index) {
            _this.setState({ internalActiveTab: index }, _this.props.onChangeTab && _this.props.onChangeTab(index)); // Get current tab index
        };
        _this.state = {
            internalActiveTab: _this.props.activeTabIndex || 1,
            onInternalTabChange: _this.internalTabChange
        };
        return _this;
    }
    TabPanel.prototype.render = function () {
        return (createElement(TabPanelContext.Provider, { value: this.state }, this.props.children));
    };
    TabPanel.displayName = 'TabPanel';
    TabPanel.Content = function (_a) {
        var children = _a.children;
        return (createElement(TabPanelContext.Consumer, null, function () { return children; }));
    };
    TabPanel.TabBar = function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (createElement(TabPanelContext.Consumer, null, function () { return (createElement("div", __assign({ className: "tabBar" }, props), children)); }));
    };
    /* <TabPanel.Tab tabIndex={1} >{children}</TabPanel.Tab> */
    TabPanel.Tab = function (_a) {
        var children = _a.children, tabIndex = _a.tabIndex;
        return (createElement(TabPanelContext.Consumer, null, function (_a) {
            var onInternalTabChange = _a.onInternalTabChange, internalActiveTab = _a.internalActiveTab;
            return (createElement("div", { onClick: function () { return onInternalTabChange(tabIndex); }, className: "tab " + (tabIndex === internalActiveTab ? 'active' : '') }, children));
        }));
    };
    return TabPanel;
}(Component));
TabPanel.TabBar.displayName = 'TabPanel.TabBar';
TabPanel.Tab.displayName = 'TabPanel.Tab';
TabPanel.Content.displayName = 'TabPanel.Content';

export { TextInput, Button, TabPanel };
