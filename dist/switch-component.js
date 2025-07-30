"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ae;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _helpers = require("./utils/helpers.js");
const _keys = require("./utils/keys.js");
const _formcontext = require("./form-context.js");
const _text = require("./text.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _hooks = require("./hooks.js");
const _dom = require("./utils/dom.js");
const _switchcomponentcssmistica = require("./switch-component.css-mistica.js");
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
const G = (e)=>{
    const { isIos: c, isDarkMode: v } = (0, _hooks.useTheme)(), m = (0, _themevariantcontext.useIsInverseVariant)(), I = _react.useId(), n = e["aria-labelledby"] || I, { defaultValue: V, value: l, onChange: a, focusableRef: N, disabled: i } = (0, _formcontext.useControlProps)({
        name: e.name,
        label: e["aria-label"],
        value: e.checked,
        defaultValue: e.defaultChecked,
        onChange: e.onChange,
        disabled: e.disabled
    }), [r, w] = _react.useState(!!V), d = l !== null && l !== void 0 ? l : r, x = _react.useMemo(()=>process.env.NODE_ENV === "test" ? (t)=>a == null ? void 0 : a(t) : (0, _helpers.debounce)((t)=>{
            a == null || a(t);
        }, 300), [
        a
    ]), b = ()=>{
        l !== void 0 ? a == null || a(!l) : (w(!r), x(!r));
    }, C = (t)=>{
        t.key === _keys.SPACE && (t.preventDefault(), t.stopPropagation(), b());
    }, h = c ? d ? "checkedIos" : v ? "iosDark" : "ios" : d ? "checked" : "default", f = c ? d ? "checkedIos" : "ios" : d ? "checked" : "default", u = /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _switchcomponentcssmistica.checkboxVariants[c ? i ? "disabledIos" : "ios" : i ? "disabled" : "default"],
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            className: _switchcomponentcssmistica.switchCheckboxContainerVariants[c ? "ios" : "default"],
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: _switchcomponentcssmistica.switchCheckboxLabel,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                        className: m ? _switchcomponentcssmistica.inverseBarVariants[h] : _switchcomponentcssmistica.barVariants[h]
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                        className: m ? _switchcomponentcssmistica.inverseBallVariants[f] : _switchcomponentcssmistica.ballVariants[f]
                    })
                ]
            })
        })
    });
    return(// eslint-disable-next-line jsx-a11y/interactive-supports-focus
    /* @__PURE__ */ (0, _jsxruntime.jsx)("span", _object_spread_props(_object_spread({
        role: "switch",
        "aria-checked": l !== null && l !== void 0 ? l : r,
        onClick: (t)=>{
            t.stopPropagation(), i || b();
        },
        onKeyDown: i ? void 0 : C,
        tabIndex: i ? void 0 : 0,
        ref: N,
        className: i ? _switchcomponentcssmistica.containerDisabled : _switchcomponentcssmistica.container,
        "aria-disabled": i,
        "aria-label": e["aria-label"],
        "aria-labelledby": e["aria-label"] ? void 0 : n
    }, (0, _dom.getPrefixedDataAttributes)(e.dataAttributes, "Switch")), {
        children: e.render ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
            children: e.render({
                controlElement: u,
                labelId: n,
                disabled: !!i,
                checked: l !== null && l !== void 0 ? l : r
            })
        }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: 16,
            alignItems: "center",
            className: _switchcomponentcssmistica.interactiveArea,
            children: [
                u,
                e.children && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                    regular: !0,
                    as: "div",
                    id: n,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                        className: i ? _switchcomponentcssmistica.disabled : "",
                        children: e.children
                    })
                })
            ]
        })
    })));
}, ae = G;
