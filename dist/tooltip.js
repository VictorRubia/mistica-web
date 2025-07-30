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
    BaseTooltip: function() {
        return Zt;
    },
    default: function() {
        return be;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _portal = require("./portal.js");
const _reacttransitiongroup = require("react-transition-group");
const _tooltipcssmistica = require("./tooltip.css-mistica.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _text = require("./text.js");
const _dom = require("./utils/dom.js");
const _keys = require("./utils/keys.js");
const _environment = require("./utils/environment.js");
const _helpers = require("./utils/helpers.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _common = require("./utils/common.js");
const _tooltipcontextprovider = require("./tooltip-context-provider.js");
const _platform = require("./utils/platform.js");
const _iconbutton = require("./icon-button.js");
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _texttokens = require("./text-tokens.js");
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const pt = (t)=>({
        border: `1px solid ${t ? _skincontractcssmistica.vars.colors.backgroundContainer : _skincontractcssmistica.vars.colors.border}`
    }), dt = 496, Kt = 300, Ut = 500, jt = 100, d = 20, E = 6, R = E + d / 2 + 1, qt = (t)=>{
    switch(t){
        case "left":
            return `translateX(-${E}px)`;
        case "right":
            return `translateX(${E}px)`;
        case "top":
            return `translateY(-${E}px)`;
        case "bottom":
            return `translateY(${E}px)`;
        default:
            return "";
    }
}, mt = (t)=>{
    const m = parseFloat(getComputedStyle(t, null).paddingLeft) + parseFloat(getComputedStyle(t, null).paddingRight), T = parseFloat(getComputedStyle(t, null).paddingTop) + parseFloat(getComputedStyle(t, null).paddingBottom), g = t.offsetWidth - m, c = t.offsetHeight - T;
    return {
        width: g,
        height: c
    };
}, ut = (t, m, T, g, c)=>{
    if (!t || !m) return;
    const { top: v, bottom: _, left: D, right: W } = t, b = g - _, S = c - W, o = v, O = D, { width: X, height: z } = mt(m), f = X + R, N = z + R, w = f <= Math.max(O, S), I = N <= Math.max(b, o);
    if (!(!I && !w)) switch(T){
        case "left":
            return w ? f <= O ? "left" : "right" : b > o ? "bottom" : "top";
        case "right":
            return w ? f <= S ? "right" : "left" : b > o ? "bottom" : "top";
        case "top":
            return I ? N <= o ? "top" : "bottom" : O > S ? "left" : "right";
        case "bottom":
            return I ? N <= b ? "bottom" : "top" : O > S ? "left" : "right";
        default:
            return;
    }
}, Zt = (param)=>{
    let { content: t, target: m, targetStyle: T, width: g, position: c = "top", dataAttributes: v, delay: _ = !0, centerContent: D, open: W, onClose: b, closeButtonLabel: S, hasPointerInteractionOnly: o = !1, trackingEvent: O } = param;
    const { texts: X, t: z } = (0, _hooks.useTheme)(), f = _react.useId(), { openTooltipId: N } = (0, _tooltipcontextprovider.useTooltipState)(), { openTooltip: w, closeTooltip: I } = (0, _tooltipcontextprovider.useSetTooltipState)(), [V, P] = _react.useState(), [Y, G] = _react.useState(), K = _react.useRef(null), U = _react.useRef(null), [y, ht] = _react.useState(null), u = (0, _environment.isTouchableDevice)(), j = _ ? Ut : 0, [rt, q] = _react.useState(!1), [Z, C] = _react.useState(!1), J = W !== void 0, [it, Q] = _react.useState(!1), x = J ? W : f === N, tt = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), p = (0, _hooks.useBoundingRect)(K, x), H = (0, _hooks.useBoundingRect)(U, x, !0), a = (0, _hooks.useWindowSize)(), M = _react.useCallback(()=>{
        Q(!1), q(!1), C(!1);
    }, []);
    _react.useEffect(()=>{
        x || M();
    }, [
        x,
        M
    ]), _react.useEffect(()=>{
        if (!y || !x) return;
        const i = ut(p, y, c, a.height, a.width);
        if (!i || !p) {
            P(void 0), G(void 0), M();
            return;
        }
        let s, e;
        var _parseInt;
        const { left: l, right: L, top: k, bottom: $ } = p, { width: A, height: F } = mt(y), nt = a.width - A, at = a.height - F, h = (_parseInt = parseInt((0, _dom.getCssVarValue)(_skincontractcssmistica.vars.borderRadii.popup))) !== null && _parseInt !== void 0 ? _parseInt : 8;
        switch(i){
            case "top":
                s = {
                    left: Math.max(0, Math.min(nt, (l + L - A) / 2)),
                    top: k - F - d / 2,
                    padding: `0px 0px ${R}px 0px`
                }, e = {
                    left: Math.max(h, Math.min(a.width - h - d, (l + L - d) / 2)),
                    top: "100%"
                };
                break;
            case "bottom":
                s = {
                    left: Math.max(0, Math.min(nt, (l + L - A) / 2)),
                    top: $ - E,
                    padding: `${R}px 0px 0px 0px`
                }, e = {
                    left: Math.max(h, Math.min(a.width - h - d, (l + L - d) / 2)),
                    bottom: "100%",
                    transform: "rotate(180deg)"
                };
                break;
            case "left":
                s = {
                    left: l - A - d / 2,
                    top: Math.max(0, Math.min(at, (k + $ - F) / 2)),
                    padding: `0px ${R}px 0px 0px`
                }, e = {
                    top: Math.max(h, Math.min(a.height - h - d, (k + $ - d) / 2)),
                    left: "100%",
                    transform: "rotate(-90deg)",
                    transformOrigin: "bottom"
                };
                break;
            case "right":
            default:
                s = {
                    left: L - E,
                    top: Math.max(0, Math.min(at, (k + $ - F) / 2)),
                    padding: `0px 0px 0px ${R}px`
                }, e = {
                    top: Math.max(h, Math.min(a.height - h - d, (k + $ - d) / 2)),
                    right: "100%",
                    transform: "rotate(90deg)",
                    transformOrigin: "bottom"
                };
                break;
        }
        typeof e.top == "number" && (e.top -= s.top, e.top = `${e.top / F * 100}%`), typeof e.left == "number" && (e.left -= s.left, e.left = `${e.left / A * 100}%`), (0, _helpers.isEqual)(s, V) || P(s), (0, _helpers.isEqual)(e, Y) || G(e);
    }, [
        y,
        p,
        H,
        x,
        c,
        a,
        V,
        Y,
        tt,
        u,
        f,
        M
    ]);
    const et = _react.useRef(!1);
    _react.useEffect(()=>{
        const i = (l)=>{
            switch(l.key){
                case _keys.ESC:
                    o || M();
                    break;
                case _keys.TAB:
                    et.current = !0;
                    break;
            }
        }, s = ()=>et.current = !1, e = (l)=>{
            !o && u && p && (l.clientX < p.left || l.clientX > p.right || l.clientY < p.top || l.clientY > p.bottom) && M();
        };
        return document.addEventListener("keydown", i, !1), document.addEventListener("keyup", s, !1), document.addEventListener("click", e, !1), ()=>{
            document.removeEventListener("keydown", i, !1), document.removeEventListener("keyup", s, !1), document.removeEventListener("click", e, !1);
        };
    }, [
        u,
        M,
        p,
        o
    ]), _react.useEffect(()=>{
        J || (Z || rt || it ? w(f) : I(f));
    }, [
        Z,
        rt,
        it,
        f,
        w,
        I,
        J
    ]);
    const Tt = ut(p, y, c, a.height, a.width), gt = D !== void 0 ? D : (H == null ? void 0 : H.width) === _tooltipcssmistica.CONTENT_MIN_WIDTH;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: T,
                ref: (i)=>{
                    const s = i == null ? void 0 : i.firstElementChild;
                    s && s !== K.current && (K.current = s);
                },
                onMouseOver: ()=>{
                    !u && !o && C(!0);
                },
                onMouseLeave: ()=>{
                    !u && !o && C(!1);
                },
                onClick: ()=>{
                    (u || o) && C(o ? !Z : !0);
                },
                onFocus: ()=>{
                    et.current && !o && Q(!0);
                },
                onBlur: ()=>{
                    !u && !o && Q(!1);
                },
                "aria-describedby": f,
                children: m
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_reacttransitiongroup.Transition, {
                    in: x,
                    nodeRef: U,
                    timeout: (0, _platform.isRunningAcceptanceTest)() ? 0 : {
                        enter: Kt + j,
                        exit: jt
                    },
                    onExited: ()=>{
                        P(void 0), G(void 0);
                    },
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    children: (i)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
                            style: {
                                /**
               * Hack to prevent text from wrapping automatically when touching the viewport's edges,
               * even if the content's width didn't reach the max width.
               * https://stackoverflow.com/questions/66106629/how-to-disable-text-wrapping-when-viewport-border-is-reached
               */ width: `calc(100vw + ${dt}px)`,
                                top: 0,
                                left: 0,
                                position: "fixed",
                                visibility: V ? "visible" : "hidden"
                            }
                        }, v), {
                            role: "tooltip",
                            "aria-label": f,
                            tabIndex: -1,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: (0, _classnames.default)(_tooltipcssmistica.container),
                                style: _object_spread_props(_object_spread({
                                    pointerEvents: i === "entered" ? "auto" : "none",
                                    transform: qt(Tt)
                                }, V, _tooltipcssmistica.tooltipTransitionClasses[i]), {
                                    transition: i === "entering" ? `opacity .1s linear ${j}ms,transform .3s cubic-bezier(0.215,0.61,0.335,1) ${j}ms` : "opacity .1s linear"
                                }),
                                ref: (0, _common.combineRefs)(ht, U),
                                onMouseEnter: ()=>{
                                    !u && i === "entered" && !o && q(!0);
                                },
                                onMouseLeave: ()=>{
                                    !u && !o && q(!1);
                                },
                                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                    className: _tooltipcssmistica.tooltip,
                                    style: _object_spread_props(_object_spread({
                                        width: g
                                    }, pt(tt)), {
                                        maxWidth: Math.min(dt, a.width)
                                    }),
                                    children: [
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: (0, _classnames.default)(_tooltipcssmistica.contentContainer, {
                                                [_tooltipcssmistica.tooltipCenter]: gt
                                            }),
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
                                                isInverse: !1,
                                                children: [
                                                    t,
                                                    b && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                        className: _tooltipcssmistica.closeButtonIcon,
                                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, {
                                                            onPress: ()=>{
                                                                C(!1), b();
                                                            },
                                                            trackingEvent: O,
                                                            "aria-label": S || X.closeButtonLabel || z(_texttokens.closeButtonLabel),
                                                            Icon: _iconcloseregular.default,
                                                            small: !0
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: _tooltipcssmistica.arrowContainer,
                                            style: Y,
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                className: (0, _classnames.default)(_tooltipcssmistica.arrow),
                                                style: pt(tt)
                                            })
                                        })
                                    ]
                                })
                            })
                        }))
                })
            })
        ]
    });
}, Jt = (_param)=>{
    var { centerContent: t, extra: m, children: T, dataAttributes: g, title: c, description: v } = _param, _ = _object_without_properties(_param, [
        "centerContent",
        "extra",
        "children",
        "dataAttributes",
        "title",
        "description"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(Zt, _object_spread({
        content: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
            className: _tooltipcssmistica.content,
            children: [
                (c || v) && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                    space: 4,
                    children: [
                        c && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            medium: !0,
                            children: c
                        }),
                        v && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            regular: !0,
                            children: v
                        })
                    ]
                }),
                m !== null && m !== void 0 ? m : T
            ]
        }),
        centerContent: t,
        dataAttributes: _object_spread({
            "component-name": "Tooltip"
        }, g)
    }, _));
}, be = Jt;
