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
import { jsx as e, jsxs as p, Fragment as x } from "react/jsx-runtime";
import R from "classnames";
import * as t from "react";
import { transitionDuration as L, overlay as C, closingOverlay as A, SheetContainer as M, closingSheet as P, Sheet as Y, SheetContent as _, sheetTopDraggingArea as O, children as F, modalCloseButton as j, handleContainer as G, handleTouchable as H, handleBar as V, stickyTitle as $, bodyContent as z, stickyButtons as W } from "./sheet-common.css-mistica.js";
import X from "./focus-trap.js";
import { useTheme as q, useIsWithinIFrame as J, useDisableBodyScroll as K, useIsInViewport as y, useScreenSize as Q } from "./hooks.js";
import { useSetModalStateEffect as U } from "./modal-context-provider.js";
import { Portal as Z } from "./portal.js";
import { Text5 as ee, Text3 as te, Text2 as D } from "./text.js";
import { vars as I } from "./skins/skin-contract.css-mistica.js";
import B from "./stack.js";
import T from "./box.js";
import N from "./divider.js";
import { getPrefixedDataAttributes as re, getScrollableParentElement as ne } from "./utils/dom.js";
import oe from "./generated/mistica-icons/icon-close-regular.js";
import { InternalIconButton as se } from "./icon-button.js";
import ie from "./button-layout.js";
import { safeAreaInsetBottom as ae } from "./utils/css.js";
import { MOBILE_SIDE_MARGIN as ce, TABLET_SIDE_MARGIN as le } from "./responsive-layout.css-mistica.js";
import { modalClose as k } from "./text-tokens.js";
import de from "./touchable.js";
const ue = process.env.NODE_ENV === "test" ? 0 : L, w = (n)=>"touches" in n ? n.touches[0].clientY : n.clientY, me = (param)=>{
    let { closeModal: n } = param;
    const [o, s] = t.useState(0), d = t.useRef(!1), u = t.useRef(0), f = t.useRef(0), r = t.useRef(0), a = t.useRef(0), { isDesktopOrBigger: m } = Q(), l = t.useCallback((c)=>{
        d.current = !0, u.current = 0, f.current = Date.now(), r.current = w(c);
    }, []), g = t.useCallback(()=>{
        d.current = !1, s(0);
    }, []);
    return t.useEffect(()=>{
        if (m) return;
        const c = (h)=>{
            if (d.current) {
                if (u.current < 3) {
                    u.current++;
                    return;
                }
                a.current = w(h), s(a.current - r.current);
            }
        }, i = ()=>{
            if (!d.current) return;
            const h = Date.now() - f.current, v = a.current - r.current, S = v / h;
            d.current = !1, s(0), v > 50 && (a.current > window.innerHeight * 0.75 || S > 0.5) && n();
        };
        return document.addEventListener("touchmove", c), document.addEventListener("touchend", i), document.addEventListener("mousemove", c), document.addEventListener("mouseup", i), ()=>{
            document.removeEventListener("touchmove", c), document.removeEventListener("touchend", i), document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", i);
        };
    }, [
        n,
        m
    ]), m ? {} : {
        onTouchStart: l,
        onMouseDown: l,
        style: o ? {
            transform: `translateY(${o}px)`,
            transition: "none"
        } : void 0,
        onScroll: g,
        overlayStyle: o ? {
            // decrease opacity when dragging down the sheet
            opacity: 0.25 + 1 - o / (window.innerHeight - r.current),
            transition: "none"
        } : void 0
    };
}, fe = {
    closed: {
        open: "opening"
    },
    opening: {
        close: "closed",
        transitionEnd: "open"
    },
    open: {
        close: "closing"
    },
    closing: {
        transitionEnd: "closed"
    }
}, he = (n, o)=>fe[n][o] || n, pe = /*#__PURE__*/ t.forwardRef((param, d)=>{
    let { onClose: n, children: o, dataAttributes: s } = param;
    const { texts: u, t: f } = q(), [r, a] = t.useReducer(he, "closed"), m = t.useRef(!1), l = t.useId(), g = J(), c = t.useCallback((E)=>{
        E.target === E.currentTarget && a("transitionEnd");
    }, []), i = ()=>{
        r === "open" && a("close");
    };
    t.useEffect(()=>{
        if (r === "opening" || r === "closing") {
            const E = setTimeout(()=>{
                a("transitionEnd");
            }, ue);
            return ()=>clearTimeout(E);
        }
    }, [
        r
    ]), t.useEffect(()=>{
        r === "closed" ? m.current ? n == null || n() : a("open") : m.current = !0;
    }, [
        r,
        n
    ]);
    const _me = me({
        closeModal: i
    }), { onScroll: h, overlayStyle: v } = _me, S = _object_without_properties(_me, [
        "onScroll",
        "overlayStyle"
    ]);
    return U(), K(r !== "closed"), r === "closed" ? null : /* @__PURE__ */ e(Z, {
        children: /* @__PURE__ */ p(X, {
            disabled: g,
            children: [
                /* @__PURE__ */ e("div", {
                    className: R(C, {
                        [A]: r === "closing"
                    }),
                    style: v,
                    onClick: i
                }),
                /* @__PURE__ */ e("div", _object_spread_props(_object_spread({
                    className: R(M, {
                        [P]: r === "closing"
                    }),
                    onTransitionEnd: c,
                    onAnimationEnd: c
                }, S, re(s, "Sheet")), {
                    ref: d,
                    children: /* @__PURE__ */ e("div", {
                        className: Y,
                        children: /* @__PURE__ */ p("div", {
                            className: _,
                            children: [
                                /* @__PURE__ */ e("div", {
                                    className: O
                                }),
                                /* @__PURE__ */ p("section", {
                                    role: "dialog",
                                    "aria-modal": "true",
                                    "aria-labelledby": l,
                                    onScroll: h,
                                    className: F,
                                    style: {
                                        paddingBottom: ae
                                    },
                                    children: [
                                        typeof o == "function" ? o({
                                            closeModal: i,
                                            modalTitleId: l
                                        }) : o,
                                        /* @__PURE__ */ e("div", {
                                            className: j,
                                            children: /* @__PURE__ */ e(se, {
                                                onPress: i,
                                                "aria-label": u.modalClose || f(k),
                                                Icon: oe,
                                                bleedLeft: !0,
                                                bleedRight: !0,
                                                bleedY: !0
                                            })
                                        }),
                                        /* @__PURE__ */ e("div", {
                                            className: G,
                                            children: /* @__PURE__ */ e(de, {
                                                onPress: i,
                                                className: H,
                                                "aria-label": u.modalClose || f(k),
                                                children: /* @__PURE__ */ e("div", {
                                                    className: V
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }))
            ]
        })
    });
}), b = {
    mobile: ce,
    tablet: le,
    desktop: 40
}, Ye = (param)=>{
    let { title: n, subtitle: o, description: s, modalTitleId: d, button: u, secondaryButton: f, link: r, children: a } = param;
    const m = t.useRef(null), l = t.useRef(null), g = t.useRef(null);
    t.useEffect(()=>{
        l.current && (g.current = ne(l.current));
    }, []);
    const c = !y(m, !0, {
        root: g.current
    }), i = !y(l, !0, {
        rootMargin: "1px",
        // bottomScrollSignal div has 0px height so we need a 1px margin to trigger the intersection observer
        root: g.current
    }), h = !!u || !!f || !!r;
    return /* @__PURE__ */ p(x, {
        children: [
            /* @__PURE__ */ e("div", {
                ref: m
            }),
            /* @__PURE__ */ p("div", {
                className: $,
                children: [
                    n ? /* @__PURE__ */ e(T, {
                        paddingBottom: 8,
                        paddingTop: {
                            mobile: 0,
                            desktop: 40
                        },
                        paddingX: b,
                        children: /* @__PURE__ */ e(ee, {
                            as: "h2",
                            id: d,
                            truncate: !0,
                            children: n
                        })
                    }) : /* @__PURE__ */ e(T, {
                        paddingTop: {
                            mobile: 0,
                            desktop: 40
                        }
                    }),
                    c && /* @__PURE__ */ e(N, {})
                ]
            }),
            /* @__PURE__ */ e("div", {
                className: z,
                children: /* @__PURE__ */ e(T, {
                    paddingBottom: h ? 0 : {
                        desktop: 40,
                        mobile: 0
                    },
                    paddingX: b,
                    children: /* @__PURE__ */ p(B, {
                        space: 8,
                        children: [
                            o || s ? /* @__PURE__ */ p(B, {
                                space: {
                                    mobile: 8,
                                    desktop: 16
                                },
                                children: [
                                    o && /* @__PURE__ */ e(te, {
                                        as: "p",
                                        regular: !0,
                                        children: o
                                    }),
                                    s && (Array.isArray(s) ? /* @__PURE__ */ e(D, {
                                        as: "div",
                                        regular: !0,
                                        color: I.colors.textSecondary,
                                        children: s.map((v, S)=>/* @__PURE__ */ e("p", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: S < s.length - 1 ? "1em" : void 0
                                                },
                                                children: v
                                            }, S))
                                    }) : /* @__PURE__ */ e(D, {
                                        as: "p",
                                        regular: !0,
                                        color: I.colors.textSecondary,
                                        children: s
                                    }))
                                ]
                            }) : null,
                            a
                        ]
                    })
                })
            }),
            h && /* @__PURE__ */ p("div", {
                className: W,
                children: [
                    i && /* @__PURE__ */ e(N, {}),
                    /* @__PURE__ */ e(T, {
                        paddingY: {
                            mobile: 16,
                            desktop: 40
                        },
                        paddingX: b,
                        children: /* @__PURE__ */ e(ie, {
                            align: "full-width",
                            link: r,
                            primaryButton: u,
                            secondaryButton: f
                        })
                    })
                ]
            }),
            /* @__PURE__ */ e("div", {
                ref: l
            })
        ]
    });
}, _e = pe;
export { Ye as SheetBody, _e as default };
