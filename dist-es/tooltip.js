"use client";
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
import { jsx as n, jsxs as B, Fragment as vt } from "react/jsx-runtime";
import * as r from "react";
import { useTheme as bt, useBoundingRect as lt, useWindowSize as xt } from "./hooks.js";
import { Portal as Mt } from "./portal.js";
import { Transition as Et } from "react-transition-group";
import { content as St, CONTENT_MIN_WIDTH as Ot, container as wt, tooltipTransitionClasses as It, tooltip as Rt, contentContainer as _t, tooltipCenter as Nt, closeButtonIcon as yt, arrowContainer as Ct, arrow as Lt } from "./tooltip.css-mistica.js";
import kt from "./stack.js";
import { Text2 as ct } from "./text.js";
import { getCssVarValue as $t } from "./utils/dom.js";
import { TAB as At, ESC as Ft } from "./utils/keys.js";
import { isTouchableDevice as Bt } from "./utils/environment.js";
import { isEqual as ft } from "./utils/helpers.js";
import ot from "classnames";
import { vars as st } from "./skins/skin-contract.css-mistica.js";
import { useIsInverseOrMediaVariant as Dt, ThemeVariant as Wt } from "./theme-variant-context.js";
import { combineRefs as Vt } from "./utils/common.js";
import { useTooltipState as Ht, useSetTooltipState as Xt } from "./tooltip-context-provider.js";
import { isRunningAcceptanceTest as zt } from "./utils/platform.js";
import { IconButton as Pt } from "./icon-button.js";
import Yt from "./generated/mistica-icons/icon-close-regular.js";
import { closeButtonLabel as Gt } from "./text-tokens.js";
const pt = (t)=>({
        border: `1px solid ${t ? st.colors.backgroundContainer : st.colors.border}`
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
    const { texts: X, t: z } = bt(), f = r.useId(), { openTooltipId: N } = Ht(), { openTooltip: w, closeTooltip: I } = Xt(), [V, P] = r.useState(), [Y, G] = r.useState(), K = r.useRef(null), U = r.useRef(null), [y, ht] = r.useState(null), u = Bt(), j = _ ? Ut : 0, [rt, q] = r.useState(!1), [Z, C] = r.useState(!1), J = W !== void 0, [it, Q] = r.useState(!1), x = J ? W : f === N, tt = Dt(), p = lt(K, x), H = lt(U, x, !0), a = xt(), M = r.useCallback(()=>{
        Q(!1), q(!1), C(!1);
    }, []);
    r.useEffect(()=>{
        x || M();
    }, [
        x,
        M
    ]), r.useEffect(()=>{
        if (!y || !x) return;
        const i = ut(p, y, c, a.height, a.width);
        if (!i || !p) {
            P(void 0), G(void 0), M();
            return;
        }
        let s, e;
        var _parseInt;
        const { left: l, right: L, top: k, bottom: $ } = p, { width: A, height: F } = mt(y), nt = a.width - A, at = a.height - F, h = (_parseInt = parseInt($t(st.borderRadii.popup))) !== null && _parseInt !== void 0 ? _parseInt : 8;
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
        typeof e.top == "number" && (e.top -= s.top, e.top = `${e.top / F * 100}%`), typeof e.left == "number" && (e.left -= s.left, e.left = `${e.left / A * 100}%`), ft(s, V) || P(s), ft(e, Y) || G(e);
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
    const et = r.useRef(!1);
    r.useEffect(()=>{
        const i = (l)=>{
            switch(l.key){
                case Ft:
                    o || M();
                    break;
                case At:
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
    ]), r.useEffect(()=>{
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
    const Tt = ut(p, y, c, a.height, a.width), gt = D !== void 0 ? D : (H == null ? void 0 : H.width) === Ot;
    return /* @__PURE__ */ B(vt, {
        children: [
            /* @__PURE__ */ n("div", {
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
            /* @__PURE__ */ n(Mt, {
                children: /* @__PURE__ */ n(Et, {
                    in: x,
                    nodeRef: U,
                    timeout: zt() ? 0 : {
                        enter: Kt + j,
                        exit: jt
                    },
                    onExited: ()=>{
                        P(void 0), G(void 0);
                    },
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    children: (i)=>/* @__PURE__ */ n("div", _object_spread_props(_object_spread({
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
                            children: /* @__PURE__ */ n("div", {
                                className: ot(wt),
                                style: _object_spread_props(_object_spread({
                                    pointerEvents: i === "entered" ? "auto" : "none",
                                    transform: qt(Tt)
                                }, V, It[i]), {
                                    transition: i === "entering" ? `opacity .1s linear ${j}ms,transform .3s cubic-bezier(0.215,0.61,0.335,1) ${j}ms` : "opacity .1s linear"
                                }),
                                ref: Vt(ht, U),
                                onMouseEnter: ()=>{
                                    !u && i === "entered" && !o && q(!0);
                                },
                                onMouseLeave: ()=>{
                                    !u && !o && q(!1);
                                },
                                children: /* @__PURE__ */ B("div", {
                                    className: Rt,
                                    style: _object_spread_props(_object_spread({
                                        width: g
                                    }, pt(tt)), {
                                        maxWidth: Math.min(dt, a.width)
                                    }),
                                    children: [
                                        /* @__PURE__ */ n("div", {
                                            className: ot(_t, {
                                                [Nt]: gt
                                            }),
                                            children: /* @__PURE__ */ B(Wt, {
                                                isInverse: !1,
                                                children: [
                                                    t,
                                                    b && /* @__PURE__ */ n("div", {
                                                        className: yt,
                                                        children: /* @__PURE__ */ n(Pt, {
                                                            onPress: ()=>{
                                                                C(!1), b();
                                                            },
                                                            trackingEvent: O,
                                                            "aria-label": S || X.closeButtonLabel || z(Gt),
                                                            Icon: Yt,
                                                            small: !0
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /* @__PURE__ */ n("div", {
                                            className: Ct,
                                            style: Y,
                                            children: /* @__PURE__ */ n("div", {
                                                className: ot(Lt),
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
    return /* @__PURE__ */ n(Zt, _object_spread({
        content: /* @__PURE__ */ B("div", {
            className: St,
            children: [
                (c || v) && /* @__PURE__ */ B(kt, {
                    space: 4,
                    children: [
                        c && /* @__PURE__ */ n(ct, {
                            medium: !0,
                            children: c
                        }),
                        v && /* @__PURE__ */ n(ct, {
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
export { Zt as BaseTooltip, be as default };
