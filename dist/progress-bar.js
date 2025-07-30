"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ProgressBar: function() {
        return K;
    },
    ProgressBarStepped: function() {
        return O;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _progressbarcssmistica = require("./progress-bar.css-mistica.js");
const _dom = require("./utils/dom.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _texttokens = require("./text-tokens.js");
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
const K = (param)=>{
    let { progressPercent: r, color: t, "aria-label": g, "aria-labelledby": c, "aria-hidden": o, dataAttributes: m, reverse: s = !1 } = param;
    const { texts: d, t: p } = (0, _hooks.useTheme)(), l = (0, _themevariantcontext.useIsInverseVariant)(), e = Math.max(0, Math.min(100, r)), i = o && o !== "false" ? {
        "aria-hidden": o
    } : {
        role: "progressbar",
        "aria-valuenow": e,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": (()=>{
            const b = d.progressBarCompletedLabel || p(_texttokens.progressBarCompletedLabel);
            return `${e.toFixed(1)}% ${b}`;
        })(),
        "aria-label": c ? void 0 : g || d.loading || p(_texttokens.loading),
        "aria-labelledby": c
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(m, "ProgressBar")), {
        className: _progressbarcssmistica.barBackground[l ? "inverse" : "default"]
    }), i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            className: (0, _classnames.default)(_progressbarcssmistica.bar, s ? _progressbarcssmistica.inverse : _progressbarcssmistica.normal),
            style: {
                maxWidth: `${e}%`,
                backgroundColor: t !== null && t !== void 0 ? t : l ? _skincontractcssmistica.vars.colors.controlActivatedInverse : _skincontractcssmistica.vars.colors.controlActivated
            }
        })
    }));
}, O = (param)=>{
    let { steps: r, currentStep: t = 0, color: g, dataAttributes: c, "aria-label": o, "aria-labelledby": m, "aria-hidden": s } = param;
    const { texts: d, t: p } = (0, _hooks.useTheme)(), l = (0, _themevariantcontext.useIsInverseVariant)(), [e, h] = _react.useState(Math.ceil(t)), [i, b] = _react.useState(!1);
    _react.useEffect(()=>{
        const n = Math.ceil(t);
        e !== n && (b(n < e), h(n));
    }, [
        t,
        r,
        e
    ]);
    const k = s && s !== "false" ? {
        "aria-hidden": s
    } : {
        role: "progressbar",
        "aria-valuenow": e,
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuetext": (()=>(d.progressBarStepLabel || p(_texttokens.progressBarStepLabel)).replace("1$s", String(e)).replace("2$s", String(r)))(),
        "aria-label": m ? void 0 : o,
        "aria-labelledby": m
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(c, "ProgressBarStepped")), {
        role: "progressbar"
    }), k), {
        className: _progressbarcssmistica.progressBarSteppedContainer,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
            space: 8,
            fullWidth: !0,
            children: Array.from({
                length: r
            }, (n, u)=>{
                const x = u === e, B = u < e, S = u === e - 1;
                return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _progressbarcssmistica.barBackground[l ? "inverse" : "default"],
                    "aria-hidden": "true",
                    children: (B || x) && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)(_progressbarcssmistica.bar, {
                            [_progressbarcssmistica.normal]: S && !i,
                            [_progressbarcssmistica.inverse]: x && i
                        }),
                        style: {
                            backgroundColor: g !== null && g !== void 0 ? g : l ? _skincontractcssmistica.vars.colors.controlActivatedInverse : _skincontractcssmistica.vars.colors.controlActivated,
                            maxWidth: B || S && !i ? "100%" : "0"
                        }
                    })
                }, u);
            })
        })
    }));
};
