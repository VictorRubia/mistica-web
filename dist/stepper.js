"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return de;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _text = require("./text.js");
const _hooks = require("./hooks.js");
const _texttokens = require("./text-tokens.js");
const _iconsuccess = /*#__PURE__*/ _interop_require_default(require("./icons/icon-success.js"));
const _steppercssmistica = require("./stepper.css-mistica.js");
const _css = require("./utils/css.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _dom = require("./utils/dom.js");
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
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
const ee = (param)=>{
    let { steps: c, currentIndex: n, "aria-label": v, "aria-labelledby": y, "aria-description": N, "aria-describedby": x, dataAttributes: C } = param;
    const { texts: h, t: u, textPresets: g } = (0, _hooks.useTheme)(), { height: A, ref: $ } = (0, _hooks.useElementDimensions)(), T = A, [r, P] = _react.useState(Math.ceil(n)), [i, R] = _react.useState(!1);
    _react.useEffect(()=>{
        const s = Math.ceil(n);
        r !== s && (R(s < r), P(s));
    }, [
        n,
        c,
        r
    ]);
    const k = h.stepperCompletedStep || u(_texttokens.stepperCompletedStep), w = h.stepperCurrentStep || u(_texttokens.stepperCurrentStep);
    return(// aria-description is not supported by the eslint rule
    // eslint-disable-next-line jsx-a11y/no-redundant-roles, jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ (0, _jsxruntime.jsx)("ol", _object_spread_props(_object_spread({
        role: "list",
        className: _steppercssmistica.stepper,
        style: (0, _css.applyCssVars)({
            [_steppercssmistica.vars.stepperMinHeight]: (0, _css.pxToRem)(40 + T)
        })
    }, (0, _dom.getPrefixedDataAttributes)(C, "Stepper")), {
        "aria-label": v,
        "aria-labelledby": y,
        "aria-description": N,
        "aria-describedby": x,
        children: c.map((s, a)=>{
            const t = a === r, f = a === c.length - 1, o = a < r, m = a === r - 1;
            return /* @__PURE__ */ (0, _jsxruntime.jsxs)("li", {
                className: _steppercssmistica.listItem,
                style: f ? void 0 : {
                    flex: 1
                },
                "aria-current": t ? "step" : void 0,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        className: _steppercssmistica.step,
                        children: [
                            o ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: (0, _classnames.default)(_steppercssmistica.stepIconNumber, {
                                    [_steppercssmistica.iconAnimation]: m && !i
                                }),
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsuccess.default, {
                                    color: _skincontractcssmistica.vars.colors.controlActivated,
                                    size: "100%",
                                    skipAnimation: !m || i
                                })
                            }) : /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: (0, _classnames.default)(_steppercssmistica.stepIconNumber, _steppercssmistica.number, {
                                    [_steppercssmistica.currentNumber]: t || t
                                }),
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text1, {
                                    as: "span",
                                    weight: g.indicator.weight,
                                    color: t ? _skincontractcssmistica.vars.colors.textPrimaryInverse : _skincontractcssmistica.vars.colors.textSecondary,
                                    "aria-hidden": "true",
                                    children: a + 1
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _steppercssmistica.textContainer,
                                "aria-hidden": "true",
                                ref: $,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                    as: "div",
                                    regular: !0,
                                    color: o || t ? _skincontractcssmistica.vars.colors.textPrimary : _skincontractcssmistica.vars.colors.textSecondary,
                                    children: s
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                                    children: `${o ? `${k}: ` : t ? `${w}: ` : ""}${s}`
                                })
                            })
                        ]
                    }),
                    !f && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _steppercssmistica.bar,
                        "aria-hidden": "true",
                        children: (o || t) && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: (0, _classnames.default)({
                                [_steppercssmistica.barFilled]: i && t || o,
                                [_steppercssmistica.barFilledAnimation]: m && !i,
                                [_steppercssmistica.barFilledReverseAnimation]: t && i
                            })
                        })
                    })
                ]
            }, a);
        })
    })));
}, de = ee;
