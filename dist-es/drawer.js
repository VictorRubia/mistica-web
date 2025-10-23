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
import { jsx as e, jsxs as k } from "react/jsx-runtime";
import * as t from "react";
import W from "./stack.js";
import { Text5 as X, Text4 as G, Text3 as K } from "./text.js";
import { vars as L } from "./skins/skin-contract.css-mistica.js";
import { IconButton as j } from "./icon-button.js";
import Y from "./generated/mistica-icons/icon-close-regular.js";
import E from "./box.js";
import { ANIMATION_DURATION_MS as $, overlay as z, overlayOpen as U, overlayClosed as V, container as q, open as H, closed as J, drawer as Q, closeButtonContainer as Z, titleContainer as F, scrollableSection as ee } from "./drawer.css-mistica.js";
import N from "classnames";
import { Portal as te } from "./portal.js";
import { useScreenSize as re, useTheme as oe, useIsInViewport as x } from "./hooks.js";
import ae from "./focus-trap.js";
import { useSetModalStateEffect as se } from "./modal-context-provider.js";
import ne from "./button-layout.js";
import { ButtonPrimary as ie, ButtonSecondary as le, ButtonLink as ce } from "./button.js";
import de from "./divider.js";
import { getPrefixedDataAttributes as me } from "./utils/dom.js";
import { modalClose as ue } from "./text-tokens.js";
const P = 40, A = 32, fe = 16, R = 388, pe = R + P * 2, ve = R + A * 2, D = (param)=>{
    let { show: i } = param;
    return i ? /* @__PURE__ */ e(de, {}) : /* @__PURE__ */ e("div", {
        style: {
            borderBottom: "1px solid transparent"
        }
    });
}, he = ()=>{
    const i = t.useRef(document.activeElement);
    t.useEffect(()=>{
        const r = i.current;
        return ()=>{
            var l;
            (l = r == null ? void 0 : r.focus) == null || l.call(r);
        };
    }, []);
}, Ee = /*#__PURE__*/ t.forwardRef((param, S)=>{
    let { width: i, children: r, onClose: l, onDismiss: d } = param;
    se(), he();
    const { isMobile: p, isTablet: T } = re(), [u, v] = t.useState(!1), a = p ? "none" : T ? ve : pe, s = p ? "auto" : i, n = t.useCallback((o)=>{
        o && setTimeout(()=>{
            v(!0);
        }, 50);
    }, []), f = t.useCallback(()=>(v(!1), new Promise((o)=>{
            setTimeout(o, $);
        }).then(l)), [
        l
    ]), c = t.useCallback(()=>f().then(()=>d == null ? void 0 : d()), [
        d,
        f
    ]);
    return t.useImperativeHandle(S, ()=>({
            close: f,
            dismiss: c
        })), t.useEffect(()=>{
        const o = (h)=>{
            h.key === "Escape" && c();
        };
        return document.addEventListener("keydown", o), ()=>{
            document.removeEventListener("keydown", o);
        };
    }, [
        c
    ]), /* @__PURE__ */ e(te, {
        children: /* @__PURE__ */ k(ae, {
            children: [
                /* @__PURE__ */ e("div", {
                    "data-testid": "drawerOverlay",
                    onClick: d ? c : void 0,
                    className: N(z, u ? U : V)
                }),
                /* @__PURE__ */ e("div", {
                    "data-testid": "drawerLayout",
                    ref: n,
                    style: {
                        width: s,
                        minWidth: a
                    },
                    className: N(q, u ? H : J),
                    children: r
                })
            ]
        })
    });
}), ke = (param)=>{
    let { title: i, subtitle: r, description: l, titleAs: d = "h2", dismissLabel: S, width: p, onClose: T, onDismiss: u, children: v, button: a, secondaryButton: s, buttonLink: n, dataAttributes: f } = param;
    const c = t.useRef(null), o = !!(a || s || n), [h, _] = t.useState(null), g = t.useRef(null), y = t.useRef(null), { t: B, texts: C } = oe(), w = {
        mobile: fe,
        tablet: A,
        desktop: P
    }, I = (m)=>{
        var b;
        (b = c.current) == null || b.close().then(()=>m == null ? void 0 : m());
    }, O = !x(g, !0, {
        root: h
    }), M = !x(y, !0, {
        rootMargin: "1px",
        // bottomScrollSignal div has 0px height so we need a 1px margin to trigger the intersection observer
        root: h
    });
    return /* @__PURE__ */ e(Ee, {
        width: p,
        ref: c,
        onClose: T,
        onDismiss: u,
        children: /* @__PURE__ */ k("section", _object_spread_props(_object_spread({
            role: "dialog",
            "aria-modal": "true",
            className: Q,
            ref: _
        }, me(f, "Drawer")), {
            children: [
                u && /* @__PURE__ */ e("div", {
                    className: Z,
                    children: /* @__PURE__ */ e(j, {
                        dataAttributes: {
                            testid: "dismissButton"
                        },
                        onPress: ()=>{
                            var m;
                            return (m = c.current) == null ? void 0 : m.dismiss();
                        },
                        Icon: Y,
                        "aria-label": S || C.modalClose || B(ue),
                        type: "neutral",
                        backgroundType: "transparent"
                    })
                }),
                i && /* @__PURE__ */ e("div", {
                    className: F,
                    children: /* @__PURE__ */ e(E, {
                        paddingX: w,
                        children: /* @__PURE__ */ e(X, {
                            as: d,
                            dataAttributes: {
                                testid: "title"
                            },
                            children: i
                        })
                    })
                }),
                /* @__PURE__ */ e(D, {
                    show: O
                }),
                /* @__PURE__ */ k("div", {
                    className: ee,
                    children: [
                        /* @__PURE__ */ e("div", {
                            ref: g
                        }),
                        /* @__PURE__ */ e(E, {
                            paddingX: w,
                            children: /* @__PURE__ */ k(W, {
                                space: 16,
                                children: [
                                    r && /* @__PURE__ */ e(G, {
                                        regular: !0,
                                        dataAttributes: {
                                            testid: "subtitle"
                                        },
                                        children: r
                                    }),
                                    l && /* @__PURE__ */ e(K, {
                                        regular: !0,
                                        color: L.colors.textSecondary,
                                        dataAttributes: {
                                            testid: "description"
                                        },
                                        children: l
                                    }),
                                    v
                                ]
                            })
                        }),
                        !o && /* @__PURE__ */ e(E, {
                            paddingBottom: {
                                mobile: 16,
                                desktop: 24
                            }
                        }),
                        /* @__PURE__ */ e("div", {
                            ref: y
                        })
                    ]
                }),
                /* @__PURE__ */ e(D, {
                    show: o && M
                }),
                o && /* @__PURE__ */ e(E, {
                    paddingX: w,
                    paddingY: {
                        mobile: 16,
                        desktop: 24
                    },
                    children: /* @__PURE__ */ e(ne, {
                        primaryButton: a && /* @__PURE__ */ e(ie, {
                            trackEvent: a.trackEvent,
                            trackingEvent: a.trackingEvent,
                            onPress: ()=>I(a.onPress),
                            disabled: a.disabled,
                            children: a.text
                        }),
                        secondaryButton: s && /* @__PURE__ */ e(le, {
                            trackEvent: s.trackEvent,
                            trackingEvent: s.trackingEvent,
                            onPress: ()=>I(s.onPress),
                            disabled: s.disabled,
                            children: s.text
                        }),
                        link: n && /* @__PURE__ */ e(ce, {
                            trackEvent: n.trackEvent,
                            trackingEvent: n.trackingEvent,
                            onPress: ()=>I(n.onPress),
                            bleedY: !0,
                            disabled: n.disabled,
                            children: n.text
                        })
                    })
                })
            ]
        }))
    });
}, We = ke;
export { We as default };
