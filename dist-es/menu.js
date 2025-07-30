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
import { jsx as e, jsxs as E, Fragment as W } from "react/jsx-runtime";
import * as s from "react";
import ne from "classnames";
import { TAB as oe, ENTER as G, SPACE as K, ESC as se, UP as re, LEFT as ie, DOWN as j, RIGHT as ce } from "./utils/keys.js";
import { getPrefixedDataAttributes as le, cancelEvent as S } from "./utils/dom.js";
import ae from "./overlay.js";
import { menuItem as ue, menuItemEnabled as me, menuItemDisabled as de, menuItemHovered as fe, menuSectionDivider as pe, menuTransitionClasses as he, vars as b, itemContent as X, iconContainer as Y, menuContainer as ge } from "./menu.css-mistica.js";
import { useWindowSize as xe } from "./hooks.js";
import { Portal as be } from "./portal.js";
import w from "./box.js";
import Ie from "./inline.js";
import ve from "./touchable.js";
import { Text3 as q } from "./text.js";
import { vars as V } from "./skins/skin-contract.css-mistica.js";
import Me from "./divider.js";
import Oe from "./checkbox.js";
import { CSSTransition as Te } from "react-transition-group";
import { combineRefs as Se } from "./utils/common.js";
import { applyCssVars as Ee } from "./utils/css.js";
import { isRunningAcceptanceTest as Ce } from "./utils/platform.js";
const ke = 120, Z = /*#__PURE__*/ s.createContext({
    focusedItem: null,
    isMenuOpen: !1,
    setFocusedItem: ()=>{},
    closeMenu: ()=>{}
}), Ne = ()=>s.useContext(Z), y = (i)=>i ? Array.from(i.querySelectorAll("[role=menuitem],[role=menuitemcheckbox]")) : [], Ae = (i, d)=>{
    if (!d) return null;
    const f = y(i).indexOf(d);
    return f < 0 ? null : f;
}, qe = (param)=>{
    let { label: i, Icon: d, destructive: f, disabled: a, onPress: C, controlType: r, checked: p, dataAttributes: o } = param;
    const { focusedItem: k, setFocusedItem: c, closeMenu: N, isMenuOpen: u } = Ne(), m = s.useRef(null), x = f ? V.colors.textLinkDanger : V.colors.neutralHigh, h = m == null ? void 0 : m.current, A = (h == null ? void 0 : h.closest("[role=menu]")) || null, t = Ae(A, h), M = _object_spread({
        testid: "MenuItem"
    }, o), I = ()=>r === "checkbox" ? /* @__PURE__ */ e(Oe, {
            ref: m,
            name: i,
            checked: p,
            onChange: ()=>{
                u && t !== null && (C(t), N());
            },
            disabled: a,
            role: "menuitemcheckbox",
            dataAttributes: M,
            render: (param)=>{
                let { controlElement: D } = param;
                return /* @__PURE__ */ e(w, {
                    paddingX: 8,
                    paddingY: 12,
                    children: /* @__PURE__ */ E(Ie, {
                        space: "between",
                        alignItems: "center",
                        children: [
                            /* @__PURE__ */ E("div", {
                                className: X,
                                children: [
                                    d && /* @__PURE__ */ e("div", {
                                        className: Y,
                                        children: /* @__PURE__ */ e(d, {
                                            size: 24,
                                            color: x
                                        })
                                    }),
                                    /* @__PURE__ */ e(q, {
                                        regular: !0,
                                        color: x,
                                        children: i
                                    })
                                ]
                            }),
                            /* @__PURE__ */ e(w, {
                                paddingLeft: 16,
                                children: D
                            })
                        ]
                    })
                });
            }
        }) : /* @__PURE__ */ e(ve, {
            ref: m,
            onPress: ()=>{
                u && t !== null && (C(t), N());
            },
            disabled: a,
            role: "menuitem",
            dataAttributes: M,
            children: /* @__PURE__ */ e(w, {
                paddingX: 8,
                paddingY: 12,
                children: /* @__PURE__ */ E("div", {
                    className: X,
                    children: [
                        d && /* @__PURE__ */ e("div", {
                            className: Y,
                            children: /* @__PURE__ */ e(d, {
                                size: 24,
                                color: x
                            })
                        }),
                        /* @__PURE__ */ e(q, {
                            regular: !0,
                            color: x,
                            children: i
                        })
                    ]
                })
            })
        });
    return /* @__PURE__ */ e("div", {
        className: ne(ue, {
            [me]: !a,
            [de]: a,
            [fe]: !a && t !== null && k === t
        }),
        onMouseMove: ()=>c(a ? null : t),
        onMouseLeave: ()=>c(null),
        children: I()
    });
}, Ve = (param)=>{
    let { children: i } = param;
    return i ? /* @__PURE__ */ E(W, {
        children: [
            i,
            /* @__PURE__ */ e("div", {
                className: pe,
                children: /* @__PURE__ */ e(Me, {})
            })
        ]
    }) : /* @__PURE__ */ e(W, {});
}, J = 12, Q = 8, Je = (param)=>{
    let { renderTarget: i, renderMenu: d, width: f, position: a = "left", dataAttributes: C } = param;
    const [r, p] = s.useState(!1), [o, k] = s.useState(null), [c, N] = s.useState(null), [u, m] = s.useState(null), [x, h] = s.useState(!1), A = s.useRef(null), [t, M] = s.useState(null), I = xe();
    s.useEffect(()=>{
        const l = o == null ? void 0 : o.getBoundingClientRect();
        if (!c || !l || !r) return;
        const { top: n, right: O, left: g, bottom: R } = l, T = c.scrollHeight, v = a === "left" ? g : void 0, F = a === "right" ? I.width - O : void 0, $ = n - Q, B = R + Q, H = I.height - B - J, P = $ - J, z = H > T, U = P > T, te = z || !U && H > P;
        M(te ? {
            left: v,
            right: F,
            top: `${B}px`,
            bottom: "auto",
            maxHeight: z ? void 0 : H,
            transformOrigin: "center top"
        } : {
            left: v,
            right: F,
            top: "auto",
            bottom: `${I.height - $}px`,
            maxHeight: U ? void 0 : P,
            transformOrigin: "center bottom"
        });
    }, [
        a,
        r,
        c,
        o,
        f,
        I
    ]);
    const D = s.useMemo(()=>({
            ref: k,
            onPress: ()=>{
                p(!r);
            }
        }), [
        k,
        r
    ]), ee = {
        ref: Se(N, A),
        className: ge,
        close: ()=>p(!1)
    }, _ = s.useCallback(()=>{
        const n = y(c).findIndex((O)=>!O.getAttribute("aria-disabled"));
        m(n < 0 ? null : n);
    }, [
        c
    ]), L = s.useCallback((l)=>{
        var T;
        const n = y(c);
        l && n.reverse();
        const O = u === null ? -1 : l ? n.length - 1 - u : u;
        let g = n.findIndex((v, F)=>!v.getAttribute("aria-disabled") && F > O);
        g === -1 && (g = n.findIndex((v)=>!v.getAttribute("aria-disabled")));
        const R = l && g !== -1 ? n.length - 1 - g : g;
        m(R < 0 ? null : R), (T = n[g]) == null || T.focus();
    }, [
        u,
        c
    ]);
    return s.useEffect(()=>{
        r ? x && c && (_(), h(!1)) : m(null);
    }, [
        r,
        _,
        x,
        c
    ]), s.useEffect(()=>{
        const l = (n)=>{
            if (r) switch(n.key){
                case ce:
                case j:
                    S(n), L();
                    break;
                case ie:
                case re:
                    S(n), L(!0);
                    break;
                case se:
                    p(!1);
                    break;
                case K:
                case G:
                    S(n), u !== null && y(c)[u].click();
                    break;
                case oe:
                    S(n);
                    break;
            }
            else switch(n.key){
                case G:
                case K:
                    h(!0);
                    break;
                case j:
                    o === document.activeElement && (h(!0), p(!0));
                    break;
            }
        };
        return document.addEventListener("keydown", l, !1), ()=>{
            document.removeEventListener("keydown", l, !1);
        };
    }), s.useEffect(()=>{
        o == null || o.setAttribute("aria-haspopup", "menu"), o == null || o.setAttribute("aria-expanded", String(r));
    }, [
        o,
        r
    ]), /* @__PURE__ */ E("div", _object_spread_props(_object_spread({}, le(C, "Menu")), {
        children: [
            i(_object_spread_props(_object_spread({}, D), {
                isMenuOpen: r
            })),
            /* @__PURE__ */ e(be, {
                children: /* @__PURE__ */ e(Te, {
                    in: r,
                    nodeRef: A,
                    timeout: Ce() ? 0 : ke,
                    classNames: he,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    onExit: ()=>o == null ? void 0 : o.focus(),
                    children: /* @__PURE__ */ e(ae, {
                        onPress: (l)=>{
                            S(l), p(!1);
                        },
                        disableScroll: !0,
                        children: /* @__PURE__ */ e("div", {
                            style: _object_spread({}, Ee(_object_spread({}, t ? _object_spread({
                                [b.top]: t.top,
                                [b.bottom]: t.bottom,
                                [b.transformOrigin]: t.transformOrigin
                            }, t.left !== void 0 && {
                                [b.left]: `${t.left}px`
                            }, t.right !== void 0 && {
                                [b.right]: `${t.right}px`
                            }, t.maxHeight !== void 0 && {
                                [b.maxHeight]: `${t.maxHeight}px`
                            }, f !== void 0 && {
                                [b.width]: f ? `${f}px` : ""
                            }) : {}))),
                            role: "menu",
                            children: /* @__PURE__ */ e(Z.Provider, {
                                value: {
                                    isMenuOpen: r,
                                    focusedItem: u,
                                    setFocusedItem: m,
                                    closeMenu: ()=>p(!1)
                                },
                                children: d(ee)
                            })
                        })
                    })
                })
            })
        ]
    }));
};
export { Je as Menu, qe as MenuItem, Ve as MenuSection };
