"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return c;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _fixedfooterlayout = /*#__PURE__*/ _interop_require_default(require("./fixed-footer-layout.js"));
const _buttonlayout = /*#__PURE__*/ _interop_require_default(require("./button-layout.js"));
const _responsivelayout = require("./responsive-layout.js");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const f = (param)=>{
    let { isFooterVisible: r = !0, button: t, secondaryButton: e, link: i, children: n, footerBgColor: a, containerBgColor: s, onChangeFooterHeight: u } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_fixedfooterlayout.default, {
        onChangeFooterHeight: u,
        isFooterVisible: (!!t || !!e) && r,
        footerBgColor: a,
        containerBgColor: s,
        footer: /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.InternalResponsiveLayout, {
            shouldExpandWhenNested: "desktop",
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingY: {
                    mobile: 16,
                    tablet: 32,
                    desktop: 0
                },
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttonlayout.default, {
                    primaryButton: t,
                    secondaryButton: e,
                    align: "full-width",
                    link: i
                })
            })
        }),
        children: n
    });
}, c = f;
