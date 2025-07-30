"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Z;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _keys = require("./utils/keys.js");
const _formcontext = require("./form-context.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _text = require("./text.js");
const _hooks = require("./hooks.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _dom = require("./utils/dom.js");
const _checkboxcssmistica = require("./checkbox.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _common = require("./utils/common.js");
const _themevariantcontext = require("./theme-variant-context.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const M = (param)=>{
    let { isChecked: e, disabled: s } = param;
    const { isIos: c } = (0, _hooks.useTheme)(), i = (0, _themevariantcontext.useIsInverseVariant)(), t = e ? "checked" : c ? "ios" : "rest", h = c ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        viewBox: "0 0 10 8",
        width: "10",
        height: "8",
        className: (0, _classnames.default)(_checkboxcssmistica.check, {
            [_checkboxcssmistica.checkChecked]: e
        }),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            d: "M2.659 7.724c.33.366.92.368 1.254.005L9.79 1.336A.782.782 0 009.719.202a.858.858 0 00-1.178.069l-5.236 5.72-1.841-2.038a.857.857 0 00-1.177-.078.782.782 0 00-.082 1.133l2.454 2.716z",
            fill: i ? _skincontractcssmistica.vars.colors.controlKnobInverse : _skincontractcssmistica.vars.colors.inverse
        })
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", {
        viewBox: "0 0 14 10",
        width: "14",
        height: "10",
        className: (0, _classnames.default)(_checkboxcssmistica.check, {
            [_checkboxcssmistica.checkChecked]: e
        }),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            d: "M5 10L0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z",
            fill: i ? _skincontractcssmistica.vars.colors.controlKnobInverse : _skincontractcssmistica.vars.colors.inverse
        })
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(i ? _checkboxcssmistica.inverseBoxVariant[t] : _checkboxcssmistica.boxVariant[t], {
            [_checkboxcssmistica.disabled]: s
        }),
        children: h
    });
}, T = /*#__PURE__*/ _react.forwardRef((e, s)=>{
    const c = _react.useId(), i = e["aria-labelledby"] || c, t = e["aria-label"], h = t || e["aria-labelledby"], { defaultValue: I, value: r, onChange: f, focusableRef: w, disabled: o } = (0, _formcontext.useControlProps)({
        name: e.name,
        value: e.checked,
        defaultValue: e.defaultChecked,
        onChange: e.onChange,
        disabled: e.disabled
    }), [l, y] = _react.useState(!!I), v = ()=>{
        r === void 0 ? (y(!l), f(!l)) : f(!r);
    }, N = (n)=>{
        n.key === _keys.SPACE && (n.preventDefault(), n.stopPropagation(), v());
    }, u = /* @__PURE__ */ (0, _jsxruntime.jsx)(M, {
        disabled: o,
        isChecked: r !== null && r !== void 0 ? r : l
    });
    return(// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        id: e.id,
        role: e.role || "checkbox",
        "aria-checked": r !== null && r !== void 0 ? r : l,
        onKeyDown: o ? void 0 : N,
        onClick: (n)=>{
            n.stopPropagation(), o || v();
        },
        tabIndex: o ? void 0 : 0,
        ref: (0, _common.combineRefs)(s, w),
        className: o ? _checkboxcssmistica.checkboxContainerDisabled : _checkboxcssmistica.checkboxContainer,
        "aria-label": t,
        "aria-labelledby": t ? void 0 : i,
        "aria-disabled": o
    }, (0, _dom.getPrefixedDataAttributes)(e.dataAttributes, "Checkbox")), {
        children: e.render ? e.render({
            controlElement: u,
            labelId: i,
            checked: r !== null && r !== void 0 ? r : l,
            disabled: !!o
        }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: 16,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                    regular: !0,
                    as: "div",
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            position: "relative",
                            top: -2
                        },
                        children: u
                    })
                }),
                e.children && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                    regular: !0,
                    as: "div",
                    id: i,
                    role: h ? "presentation" : void 0,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                        className: o ? _checkboxcssmistica.disabled : "",
                        children: e.children
                    })
                })
            ]
        })
    })));
}), Z = T;
