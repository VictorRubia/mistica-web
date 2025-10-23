"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return k;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _themevariantcontext = require("./theme-variant-context.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _skeletonscssmistica = require("./skeletons.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const l = (param)=>{
    let { width: r = "100%", height: s = 8, radius: a = _skincontractcssmistica.vars.borderRadii.container, className: o, noBorderRadius: t = !1 } = param;
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(o, i ? _skeletonscssmistica.background.inverse : _skeletonscssmistica.background.default),
        style: {
            borderRadius: t ? 0 : a,
            width: r,
            height: s
        },
        "aria-hidden": !0
    });
}, k = l;
