"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return T;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _skincontractcssmistica = require("../skins/skin-contract.css-mistica.js");
const _css = require("../utils/css.js");
const _iconchevroncssmistica = require("./icon-chevron.css-mistica.js");
const _hooks = require("../hooks.js");
const _constants = require("../skins/constants.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
const L = (param)=>{
    let { size: o, color: r, transform: s, transitionDuration: e, className: n, style: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        className: (0, _classnames.default)(n, _iconchevroncssmistica.chevronRotateTransition),
        style: _object_spread({
            transform: s
        }, a, (0, _css.applyCssVars)({
            [_iconchevroncssmistica.vars.transitionDuration]: `${e}ms`
        })),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            d: "M12.0001 16.6333C11.7199 16.6333 11.4596 16.5232 11.2695 16.3131L4.2733 8.87648C3.89296 8.47613 3.91298 7.83556 4.31333 7.45523C4.71368 7.07489 5.35425 7.09491 5.73459 7.49526L12.0001 14.1511L18.2657 7.49526C18.646 7.0849 19.2866 7.07489 19.6869 7.45523C20.0873 7.83556 20.1073 8.47613 19.7269 8.87648L12.7308 16.3131C12.5406 16.5132 12.2704 16.6333 12.0001 16.6333Z",
            className: _iconchevroncssmistica.chevronColorTransition,
            fill: r
        })
    });
}, N = (param)=>{
    let { size: o, color: r, transform: s, transitionDuration: e, className: n, style: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        className: (0, _classnames.default)(n, _iconchevroncssmistica.chevronRotateTransition),
        style: _object_spread({
            transform: s
        }, a, (0, _css.applyCssVars)({
            [_iconchevroncssmistica.vars.transitionDuration]: `${e}ms`
        })),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            d: "M12.0018 16.571C11.7518 16.571 11.5118 16.481 11.3118 16.301L4.32183 9.74098C3.91183 9.36098 3.89183 8.72098 4.27183 8.32098C4.65183 7.92098 5.29183 7.89098 5.69183 8.27098L12.0018 14.181L18.3118 8.27098C18.7118 7.89098 19.3518 7.91098 19.7318 8.32098C20.1118 8.73098 20.0918 9.36098 19.6818 9.74098L12.6918 16.301C12.5018 16.481 12.2518 16.571 12.0018 16.571Z",
            className: _iconchevroncssmistica.chevronColorTransition,
            fill: r
        })
    });
}, w = (param)=>{
    let { size: o, color: r, transform: s, transitionDuration: e, className: n, style: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        className: (0, _classnames.default)(n, _iconchevroncssmistica.chevronRotateTransition),
        style: _object_spread({
            transform: s
        }, a, (0, _css.applyCssVars)({
            [_iconchevroncssmistica.vars.transitionDuration]: `${e}ms`
        })),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            d: "M12.0021 16.942L4.32208 9.74195C3.91208 9.36195 3.89208 8.72195 4.27208 8.32195C4.65208 7.92195 5.29208 7.89195 5.69208 8.27195L12.0021 14.182L18.3121 8.27195C18.7121 7.89195 19.3521 7.91195 19.7321 8.32195C20.1121 8.73195 20.0921 9.36195 19.6821 9.74195L12.0021 16.942Z",
            className: _iconchevroncssmistica.chevronColorTransition,
            fill: r
        })
    });
}, I = {
    up: -180,
    down: 0,
    left: 90,
    right: -90
}, B = (param)=>{
    let { size: o = 24, color: r, className: s, style: e, transitionDuration: n = 300, direction: a = "right" } = param;
    const { skinName: p } = (0, _hooks.useTheme)(), v = r || _skincontractcssmistica.vars.colors.neutralHigh, i = {
        size: o,
        color: v,
        transform: `rotate(${I[a]}deg)`,
        className: s,
        transitionDuration: n,
        style: e
    };
    switch(p){
        case _constants.O2_NEW_SKIN:
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(N, _object_spread({}, i));
        case _constants.BLAU_SKIN:
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(w, _object_spread({}, i));
        default:
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(L, _object_spread({}, i));
    }
}, T = B;
