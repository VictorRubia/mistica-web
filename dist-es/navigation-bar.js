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
import { jsxs as C, jsx as e, Fragment as le } from "react/jsx-runtime";
import * as o from "react";
import { CSSTransition as Ae } from "react-transition-group";
import y from "classnames";
import Q, { ResetResponsiveLayout as de } from "./responsive-layout.js";
import X from "./inline.js";
import Re, { BaseTouchable as J } from "./touchable.js";
import { Text3 as me, Text2 as pe } from "./text.js";
import { useTheme as _, useScreenSize as fe } from "./hooks.js";
import xe from "./generated/mistica-icons/icon-menu-regular.js";
import Te from "./generated/mistica-icons/icon-close-regular.js";
import Le from "./generated/mistica-icons/icon-chevron-left-regular.js";
import { IconButton as ye } from "./icon-button.js";
import { RowList as he, Row as ge } from "./list.js";
import { ThemeVariant as w, useIsInverseOrMediaVariant as De } from "./theme-variant-context.js";
import ve from "./focus-trap.js";
import { Portal as Pe } from "./portal.js";
import He from "./grid-layout.js";
import { useSetModalState as Fe } from "./modal-context-provider.js";
import { Logo as Me } from "./logo.js";
import { vars as H } from "./skins/skin-contract.css-mistica.js";
import { navigationBarContent as _e, desktopOnly as $, navigationBarContentRightExpanded as we, navigationBarContentRight as $e, spacer as ee, burgerMenuButton as We, logoContainer as Ve, spacerLarge as Ge, lineHeightFix as Se, navigationBarAction as Ue, textWrapperVariants as Ne, burgerIconContainer as Xe, iconCloseOpen as Ke, iconCloseHidden as qe, iconMenuHidden as je, iconMenuOpen as ze, topFixed as Ye, BURGER_MENU_ANIMATION_DURATION_MS as Ze, burgerMenuTransition as Je, burgerMenu as Qe, burgerMenuContainer as en, burgerMenuContentContainer as se, DESKTOP_MENU_ANIMATION_DURATION_MS as be, desktopMenuWrapper as nn, desktopMenuBackgroundContainer as tn, mainNavigationBarContentWrapper as on, navbarBorderColorVariants as Z, mainNavBarSectionsContainer as rn, desktopMenuSectionWithArrowWrapper as an, desktopMenuSectionContainer as sn, desktopMenuFirstSection as cn, desktopMenuLastSection as un, section as ln, selectedSectionVariantes as dn, desktopMenuSectionArrowContainer as mn, desktopMenuSectionArrow as pn, desktopMenuContainer as fn, desktopMenu as hn, desktopMenuContentFadeIn as gn, desktopSmallMenuContainer as vn, DESKTOP_SMALL_MENU_WIDTH as ce, desktopMenuColumnItem as Mn } from "./navigation-bar.css-mistica.js";
import { getPrefixedDataAttributes as Sn, cancelEvent as V } from "./utils/dom.js";
import F from "./stack.js";
import K from "./box.js";
import { isRunningAcceptanceTest as ne } from "./utils/platform.js";
import { backNavigationBar as te, closeNavigationMenu as Nn, openNavigationMenu as bn, mainNavigationBarSectionSeeAll as Cn, mainNavigationBarOpenSectionMenu as ue } from "./text-tokens.js";
import { NAVBAR_HEIGHT_DESKTOP_LARGE as q, NAVBAR_HEIGHT_DESKTOP as j } from "./theme.js";
import Bn from "./text-link.js";
import { Title3 as kn, Title1 as In } from "./title.js";
import { ButtonLink as On } from "./button.js";
import { Grid as En, GridItem as An } from "./grid.js";
import { ESC as Rn, UP as Ce, DOWN as Be } from "./utils/keys.js";
import { debounce as xn, isEqual as Tn } from "./utils/helpers.js";
import Ln from "./negative-box.js";
const yn = 120, Dn = (param)=>{
    let { size: n = 24, color: t = H.colors.neutralHigh, style: i, className: r } = param;
    return /* @__PURE__ */ e("svg", {
        width: n,
        height: n,
        viewBox: "0 0 8 8",
        style: i,
        className: r,
        children: /* @__PURE__ */ e("path", {
            d: "M6.32595 3.46071L3.03801 0.158595L3.03292 0.153747L3.032 0.152903L3.02931 0.150463L3.02848 0.149738L3.02248 0.144353C2.88533 0.021206 2.71386 -0.0126731 2.56343 0.00394249C2.41648 0.0201739 2.27272 0.0856702 2.16886 0.18711C2.06893 0.281844 2.01209 0.42816 2.00175 0.567065C1.99083 0.71377 2.02925 0.889583 2.16869 1.02392L5.24446 4.00145L2.15859 6.96199L2.15375 6.96708L2.1529 6.968L2.15046 6.97069L2.14974 6.97152L2.14435 6.97752C2.02121 7.11467 1.98733 7.28614 2.00394 7.43657C2.02017 7.58352 2.08567 7.72728 2.18711 7.83114C2.28184 7.93107 2.42816 7.98791 2.56706 7.99825C2.71377 8.00917 2.88958 7.97075 3.02392 7.83132L6.32595 4.5422V4.5422C6.6246 4.24355 6.6246 3.75935 6.32595 3.46071V3.46071Z",
            fill: t
        })
    });
}, Pn = (param)=>{
    let { isOpen: n } = param;
    return /* @__PURE__ */ C("div", {
        className: Xe,
        role: "presentation",
        "data-component-name": "BurgerMenuIcon",
        children: [
            /* @__PURE__ */ e("div", {
                className: n ? Ke : qe,
                children: /* @__PURE__ */ e(Te, {})
            }),
            /* @__PURE__ */ e("div", {
                className: n ? je : ze,
                children: /* @__PURE__ */ e(xe, {})
            })
        ]
    });
}, oe = (param)=>{
    let { children: n, topFixed: t, withBorder: i, isBurgerMenuOpen: r, variant: a = "default", dataAttributes: p } = param;
    const { isDarkMode: c } = _(), d = ()=>a === "inverse" && !c || !i ? Z.noBorder : r ? Z.menuOpen : Z.default, l = {
        default: H.colors.background,
        inverse: H.colors.navigationBarBackground,
        alternative: H.colors.backgroundAlternative,
        media: H.colors.navigationBarBackground
    };
    return /* @__PURE__ */ e("header", _object_spread_props(_object_spread({
        className: y(d(), {
            [Ye]: t
        }),
        style: {
            background: l[a]
        }
    }, Sn(p)), {
        children: n
    }));
}, G = /*#__PURE__*/ o.forwardRef((param, a)=>{
    let { right: n, children: t, desktopOnly: i, expandRightContent: r } = param;
    return /* @__PURE__ */ C("div", {
        ref: a,
        className: y(_e, {
            [$]: i
        }),
        children: [
            t,
            n && /* @__PURE__ */ e("div", {
                className: r ? we : $e,
                children: n
            })
        ]
    });
}), z = (param)=>{
    let { children: n, wide: t } = param;
    if (!t) return /* @__PURE__ */ e(Q, {
        children: n
    });
    const i = {
        mobile: 16,
        tablet: 24,
        desktop: 24
    };
    return /* @__PURE__ */ e(K, {
        width: "100%",
        paddingX: t === !0 ? i : typeof t.paddingX == "number" ? t.paddingX : _object_spread({}, i, t.paddingX),
        children: n
    });
}, Hn = (param)=>{
    let { onBack: n, title: t, titleAs: i, right: r, variant: a = "default", topFixed: p = !0, paddingX: c = 0, withBorder: d = !0, wide: l = !1 } = param;
    const { texts: u, t: f } = _(), m = /* @__PURE__ */ e(G, {
        right: r,
        expandRightContent: !0,
        children: /* @__PURE__ */ C(X, {
            space: 24,
            alignItems: "center",
            children: [
                n && /* @__PURE__ */ e(ye, {
                    "aria-label": u.backNavigationBar || f(te),
                    onPress: n,
                    Icon: Le,
                    bleedLeft: !0,
                    bleedRight: !0
                }),
                /* @__PURE__ */ e(me, {
                    regular: !0,
                    truncate: !0,
                    as: i,
                    children: t
                })
            ]
        })
    });
    return /* @__PURE__ */ C(w, {
        variant: a,
        children: [
            /* @__PURE__ */ e(oe, {
                topFixed: p,
                withBorder: d,
                variant: a,
                dataAttributes: {
                    "component-name": "NavigationBar"
                },
                children: p ? /* @__PURE__ */ e(z, {
                    wide: l,
                    children: m
                }) : /* @__PURE__ */ e(K, {
                    width: "100%",
                    paddingX: (()=>{
                        var _l_paddingX;
                        return l !== void 0 ? typeof l != "object" ? 0 : (_l_paddingX = l.paddingX) !== null && _l_paddingX !== void 0 ? _l_paddingX : 0 : c;
                    })(),
                    children: m
                })
            }),
            p && /* @__PURE__ */ e("div", {
                className: ee
            })
        ]
    });
}, U = (n, t)=>n.href === void 0 && n.onPress === void 0 && n.to === void 0 ? {
        onPress: t
    } : n.onPress ? {
        onPress: ()=>{
            n.onPress(), t();
        }
    } : _object_spread_props(_object_spread({}, n), {
        onNavigate: ()=>t()
    }), Fn = {
    opening: {
        close: "closing",
        finishOpen: "opened"
    },
    opened: {
        close: "closing"
    },
    closing: {
        open: "opening",
        finishClose: "closed"
    },
    closed: {
        open: "opening"
    }
}, _n = (n, t)=>Fn[n][t] || n, wn = (param)=>{
    let { section: n, closeSubMenu: t, closeMenu: i } = param;
    const { texts: r, t: a } = _(), { title: p, menu: c } = n, d = _object_without_properties(n, [
        "title",
        "menu"
    ]), l = (c == null ? void 0 : c.columns) || [], u = c == null ? void 0 : c.content, f = d.href !== void 0 || d.onPress !== void 0 || d.to !== void 0;
    return /* @__PURE__ */ e(Q, {
        children: /* @__PURE__ */ C(F, {
            space: 32,
            children: [
                /* @__PURE__ */ C(F, {
                    space: 16,
                    children: [
                        /* @__PURE__ */ e(Hn, {
                            title: r.backNavigationBar || a(te),
                            onBack: t,
                            topFixed: !1,
                            withBorder: !1
                        }),
                        /* @__PURE__ */ e(kn, {
                            right: f ? /* @__PURE__ */ e(On, _object_spread_props(_object_spread({
                                small: !0,
                                bleedY: !0,
                                bleedRight: !0,
                                withChevron: !0
                            }, U(d, i)), {
                                children: r.mainNavigationBarSectionSeeAll || a(Cn)
                            })) : void 0,
                            children: p
                        })
                    ]
                }),
                u ? /* @__PURE__ */ e(K, {
                    paddingBottom: 16,
                    children: typeof u == "function" ? u({
                        closeMenu: i
                    }) : u
                }) : l.map((m, s)=>/* @__PURE__ */ C(F, {
                        space: 8,
                        children: [
                            /* @__PURE__ */ C(In, {
                                children: [
                                    " ",
                                    m.title
                                ]
                            }),
                            /* @__PURE__ */ e(Ln, {
                                children: /* @__PURE__ */ e(he, {
                                    children: m.items.map((_param, M)=>{
                                        var { title: g } = _param, v = _object_without_properties(_param, [
                                            "title"
                                        ]);
                                        return /* @__PURE__ */ e(ge, _object_spread({
                                            title: g
                                        }, U(v, i)), M);
                                    })
                                })
                            })
                        ]
                    }, s))
            ]
        })
    });
}, $n = (param)=>{
    let { sections: n, extra: t, closeMenu: i, open: r, id: a, disableFocusTrap: p, setDisableFocusTrap: c } = param;
    const { isDarkMode: d, texts: l, t: u } = _(), [f, m] = o.useState(-1), [s, g] = o.useState(!1), [v, M] = o.useReducer(_n, "closed"), O = o.useRef(null), B = d ? 1 : 0.2, N = ne() ? 0 : Ze;
    o.useEffect(()=>{
        let b;
        return s ? (M("open"), b = setTimeout(()=>M("finishOpen"), N)) : (M("close"), b = setTimeout(()=>M("finishClose"), N)), ()=>clearTimeout(b);
    }, [
        s,
        N
    ]);
    const k = o.useRef(null);
    return o.useEffect(()=>{
        var b;
        if (v === "opening") {
            const I = (b = k.current) == null ? void 0 : b.querySelector(`button[aria-label="${l.backNavigationBar || u(te)}"]`);
            I == null || I.focus();
        }
    }, [
        v,
        u,
        l
    ]), /* @__PURE__ */ e(Pe, {
        children: /* @__PURE__ */ e(ve, {
            disabled: p,
            group: "burger-menu-lock",
            children: /* @__PURE__ */ e(Ae, {
                onEntered: ()=>c(!1),
                onExiting: ()=>c(!0),
                onExited: ()=>{
                    g(!1), m(-1);
                },
                classNames: Je,
                in: r,
                nodeRef: O,
                timeout: N,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: /* @__PURE__ */ e("nav", {
                    className: Qe,
                    style: {
                        boxShadow: `6px 0 4px -4px rgba(0, 0, 0, ${B})`
                    },
                    id: a,
                    ref: O,
                    children: /* @__PURE__ */ C("div", {
                        className: en,
                        children: [
                            /* @__PURE__ */ e("div", {
                                className: se,
                                style: {
                                    transform: `translate(${s ? "-100vw" : "0"})`
                                },
                                children: v !== "opened" && /* @__PURE__ */ C(Q, {
                                    children: [
                                        /* @__PURE__ */ e(de, {
                                            children: /* @__PURE__ */ e(he, {
                                                children: n.map((_param, R)=>{
                                                    var { title: b, menu: I } = _param, h = _object_without_properties(_param, [
                                                        "title",
                                                        "menu"
                                                    ]);
                                                    return /* @__PURE__ */ e(ge, _object_spread({
                                                        title: b
                                                    }, I ? {
                                                        onPress: ()=>{
                                                            g(!0), m(R);
                                                        }
                                                    } : // Close the menu when one of the rows is pressed
                                                    U(h, i)), R);
                                                })
                                            })
                                        }),
                                        t && /* @__PURE__ */ e(K, {
                                            paddingY: 16,
                                            children: t
                                        })
                                    ]
                                })
                            }),
                            /* @__PURE__ */ e("div", {
                                className: se,
                                ref: k,
                                style: {
                                    transform: `translate(${s ? "0" : "100vw"})`
                                },
                                children: v !== "closed" && f !== -1 && /* @__PURE__ */ e(wn, {
                                    section: n[f],
                                    closeMenu: i,
                                    closeSubMenu: ()=>g(!1)
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}, Wn = {
    opening: {
        close: "closing",
        finishOpen: "opened"
    },
    opened: {
        close: "closing"
    },
    closing: {
        // If a section was opened while the menu was closing, the menu should be considered as
        // already open. This is useful for example to avoid the new content's fade-in animation
        open: "opened",
        finishClose: "closed"
    },
    closed: {
        open: "opening"
    }
}, Vn = (n, t)=>Wn[n][t] || n, ke = /*#__PURE__*/ o.createContext({
    isMenuOpen: !1,
    openedSection: -1,
    menuHeight: "0px",
    menuStatus: "closed",
    openSectionMenu: ()=>{},
    closeMenu: ()=>{},
    setMenuHeight: ()=>{},
    setIsMenuHovered: ()=>{},
    setFocusedItem: ()=>{},
    debouncedOpenSectionMenu: ()=>{},
    cancelDebouncedOpenSectionMenu: ()=>{}
}), Gn = (param)=>{
    let { children: n, sections: t, isLargeMenu: i } = param;
    const { isTabletOrSmaller: r } = fe(), [a, p] = o.useState(!1), [c, d] = o.useState("0px"), [l, u] = o.useReducer(Vn, "closed"), [f, m] = o.useState(-1), [s, g] = o.useState(), [v, M] = o.useState(!1), [O, B] = o.useState(!1), [N, k] = o.useState(-1), b = o.useCallback((S)=>{
        var E;
        m(-1), (E = t == null ? void 0 : t[S]) != null && E.menu ? (B(!0), k(S)) : (M(!1), B(!1));
    }, [
        t
    ]), I = o.useMemo(()=>xn(b, yn), [
        b
    ]), h = o.useCallback(()=>{
        M(!1), B(!1), I.cancel(), m(-1);
    }, [
        I
    ]);
    o.useEffect(()=>{
        r && h();
    }, [
        r,
        h
    ]), o.useEffect(()=>{
        !O && !v ? (p(!1), d("0px")) : p(!0);
    }, [
        v,
        O
    ]), o.useEffect(()=>{
        const S = ne() || !i ? 0 : be;
        let E;
        return a ? (u("open"), E = setTimeout(()=>u("finishOpen"), S)) : (u("close"), E = setTimeout(()=>u("finishClose"), S)), ()=>clearTimeout(E);
    }, [
        a,
        i
    ]), o.useEffect(()=>{
        l === "closed" && k(-1);
    }, [
        l
    ]);
    const R = o.useCallback((S)=>{
        Tn(s, S) || g(S);
    }, [
        s
    ]);
    return o.useEffect(()=>{
        const S = (A)=>{
            if (s) {
                const x = document.querySelector("[data-navigation-bar-menu-items]"), T = Array.from((x == null ? void 0 : x.querySelectorAll("a,button")) || []), P = T.findIndex((L)=>L.hasAttribute(`data-navigation-bar-menu-item-${s.column}-${s.index}`)), Y = A ? P - 1 : P + 1;
                T[(Y + T.length) % T.length].focus();
            }
        }, E = (A)=>{
            switch(A.key){
                case Be:
                    s && (V(A), S());
                    break;
                case Ce:
                    s && (V(A), S(!0));
                    break;
                case Rn:
                    h();
                    break;
            }
        };
        return document.addEventListener("keydown", E, !1), ()=>{
            document.removeEventListener("keydown", E, !1);
        };
    }, [
        h,
        s
    ]), o.useEffect(()=>{
        g(void 0);
    }, [
        N
    ]), /* @__PURE__ */ e(ke.Provider, {
        value: {
            isMenuOpen: a,
            openedSection: N,
            menuHeight: c,
            menuStatus: l,
            openSectionMenu: b,
            debouncedOpenSectionMenu: (S)=>{
                m(S), I(S);
            },
            cancelDebouncedOpenSectionMenu: (S)=>{
                S === f && (I.cancel(), m(-1));
            },
            closeMenu: h,
            setMenuHeight: d,
            setIsMenuHovered: M,
            setFocusedItem: R
        },
        children: n
    });
}, D = ()=>o.useContext(ke), Ie = (param)=>{
    let { column: n, columnIndex: t } = param;
    const { setFocusedItem: i, closeMenu: r } = D();
    return /* @__PURE__ */ C(F, {
        space: 24,
        children: [
            /* @__PURE__ */ e(pe, {
                medium: !0,
                color: H.colors.textSecondary,
                transform: "uppercase",
                children: n.title
            }),
            /* @__PURE__ */ e(F, {
                space: 16,
                role: "list",
                children: n.items.map((_param, c)=>{
                    var { title: a } = _param, p = _object_without_properties(_param, [
                        "title"
                    ]);
                    return(// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    /* @__PURE__ */ e("div", {
                        onFocus: ()=>i({
                                column: t,
                                index: c
                            }),
                        onBlur: ()=>i(void 0),
                        role: "listitem",
                        children: /* @__PURE__ */ e(Bn, _object_spread_props(_object_spread({
                            underline: "on hover",
                            className: Mn,
                            dataAttributes: {
                                [`navigation-bar-menu-item-${t}-${c}`]: "true"
                            }
                        }, U(p, r)), {
                            children: a
                        }))
                    }, c));
                })
            })
        ]
    });
}, Un = (param)=>{
    let { section: n, index: t, isLargeNavigationBar: i, wide: r } = param;
    var b, I;
    const a = o.useRef(null), [p, c] = o.useState(!1), d = ne() ? 0 : be, l = i ? q : j, u = 40, { menuStatus: f, isMenuOpen: m, openedSection: s, closeMenu: g, setIsMenuHovered: v, setMenuHeight: M } = D();
    o.useEffect(()=>{
        if (a.current && m && (a.current.scrollTop = 0), c(!1), m) {
            const h = setTimeout(()=>c(!0), d);
            return ()=>clearTimeout(h);
        }
    }, [
        m,
        s,
        d
    ]);
    const [O, B] = o.useState(!0);
    o.useEffect(()=>{
        if (s === t) if (f === "opening") {
            B(!1);
            const h = requestAnimationFrame(()=>B(!0));
            return ()=>cancelAnimationFrame(h);
        } else B(!0);
    }, [
        f,
        s,
        t
    ]), o.useEffect(()=>{
        f === "closing" && c(!1);
    }, [
        f
    ]);
    const N = ((b = n.menu) == null ? void 0 : b.columns) || [], k = (I = n == null ? void 0 : n.menu) == null ? void 0 : I.content;
    return /* @__PURE__ */ e("div", {
        className: $,
        children: /* @__PURE__ */ e(w, {
            variant: "default",
            children: s === t && /* @__PURE__ */ e(de, {
                children: /* @__PURE__ */ e("div", {
                    className: fn,
                    onMouseEnter: ()=>v(!0),
                    onMouseLeave: ()=>v(!1),
                    style: {
                        // disable pointer events when menu is closing
                        pointerEvents: f === "closed" || f === "closing" ? "none" : void 0,
                        top: l,
                        maxHeight: `calc(100vh - ${l}px - ${u}px)`,
                        overflowY: p ? "auto" : "hidden"
                    },
                    children: /* @__PURE__ */ e(z, {
                        wide: r,
                        children: /* @__PURE__ */ e("div", {
                            className: y(hn, {
                                [gn]: O
                            }),
                            ref: (h)=>{
                                h && m && M(`min(${h.scrollHeight}px, calc(100vh - ${l}px - ${u}px))`);
                            },
                            children: k ? typeof k == "function" ? k({
                                closeMenu: g
                            }) : k : /* @__PURE__ */ e(En, {
                                rows: 1,
                                columns: 12,
                                gap: [
                                    24,
                                    40
                                ],
                                dataAttributes: {
                                    "navigation-bar-menu-items": "true"
                                },
                                children: N.map((h, R)=>/* @__PURE__ */ e(An, {
                                        columnSpan: 2,
                                        children: /* @__PURE__ */ e(Ie, {
                                            column: h,
                                            columnIndex: R
                                        })
                                    }, R))
                            })
                        })
                    })
                })
            })
        })
    });
}, Xn = (param)=>{
    let { isLargeNavigationBar: n } = param;
    const t = n ? q : j, { menuHeight: i } = D();
    return /* @__PURE__ */ e("div", {
        className: $,
        children: /* @__PURE__ */ e("div", {
            className: nn,
            style: {
                top: t
            },
            children: /* @__PURE__ */ e("div", {
                className: tn,
                style: {
                    height: i
                }
            })
        })
    });
}, Kn = (param)=>{
    let { section: n, isLargeNavigationBar: t, leftPosition: i, index: r } = param;
    var s, g;
    const a = t ? q : j, p = 40, c = ((s = n.menu) == null ? void 0 : s.columns) || [], d = (g = n == null ? void 0 : n.menu) == null ? void 0 : g.content, { openedSection: l, menuStatus: u, setIsMenuHovered: f, closeMenu: m } = D();
    return /* @__PURE__ */ e("div", {
        className: $,
        children: r === l && /* @__PURE__ */ e(w, {
            variant: "default",
            children: /* @__PURE__ */ e("div", {
                className: vn,
                onMouseEnter: ()=>f(!0),
                onMouseLeave: ()=>f(!1),
                style: {
                    // disable pointer events when menu is closing
                    pointerEvents: u === "closed" || u === "closing" ? "none" : void 0,
                    top: a,
                    left: i,
                    maxHeight: `calc(100vh - ${a}px - ${p}px)`
                },
                children: d ? typeof d == "function" ? d({
                    closeMenu: m
                }) : d : /* @__PURE__ */ e(F, {
                    space: 40,
                    dataAttributes: {
                        "navigation-bar-menu-items": "true"
                    },
                    children: c.map((v, M)=>/* @__PURE__ */ e(Ie, {
                            column: v,
                            columnIndex: M
                        }, M))
                })
            })
        })
    });
}, qn = (param)=>{
    let { section: n, index: t, selectedIndex: i, isFirstSection: r, isLastSection: a, navigationBarRef: p, variant: c, isLargeNavigationBar: d, desktopLargeMenu: l, wide: u } = param;
    const { texts: f, t: m } = _(), { title: s, menu: g } = n, v = _object_without_properties(n, [
        "title",
        "menu"
    ]), M = o.useRef(null), [O, B] = o.useState(0), [N, k] = o.useState(!1), { isMenuOpen: b, openedSection: I, openSectionMenu: h, debouncedOpenSectionMenu: R, cancelDebouncedOpenSectionMenu: S, closeMenu: E } = D(), A = v.href !== void 0 || v.onPress !== void 0 || v.to !== void 0, x = o.useCallback((L)=>{
        l || B((()=>{
            var re, ae;
            const { left: ie, right: Oe } = ((re = M.current) == null ? void 0 : re.getBoundingClientRect()) || {
                left: 0,
                right: 0
            }, Ee = (((ae = p.current) == null ? void 0 : ae.getBoundingClientRect().right) || 0) - ce;
            return ie <= Ee ? ie : Oe - ce;
        })()), L ? R(t) : h(t);
    }, [
        l,
        t,
        h,
        R,
        p
    ]);
    o.useEffect(()=>{
        const L = (W)=>{
            switch(W.key){
                case Be:
                    N && (V(W), x());
                    break;
                case Ce:
                    N && (V(W), E());
                    break;
            }
        };
        return document.addEventListener("keydown", L, !1), ()=>{
            document.removeEventListener("keydown", L, !1);
        };
    }, [
        t,
        N,
        x,
        E,
        g,
        A
    ]);
    const T = b && I === t, P = o.useCallback(()=>{
        T ? E() : x();
    }, [
        T,
        x,
        E
    ]), Y = o.useCallback((L)=>A ? L : {
            onPress: P
        }, [
        A,
        P
    ]);
    return /* @__PURE__ */ C("div", {
        className: an,
        children: [
            /* @__PURE__ */ e("div", {
                ref: M,
                className: y(sn, {
                    [cn]: r,
                    [un]: a
                }),
                onMouseEnter: ()=>x(!0),
                onMouseLeave: ()=>S(t),
                onFocus: ()=>{
                    g && !A && k(!0);
                },
                onBlur: ()=>{
                    g && !A && k(!1);
                },
                children: /* @__PURE__ */ e(J, _object_spread_props(_object_spread({}, Y(v)), {
                    "aria-label": A ? void 0 : `${n.title}, ${f.mainNavigationBarOpenSectionMenu || m(ue)}`,
                    "aria-haspopup": !A,
                    "aria-expanded": A ? void 0 : T,
                    className: y(ln, {
                        [dn[c === "inverse" ? "inverse" : "default"]]: t === i
                    }, Ne[c === "inverse" ? "inverse" : "default"]),
                    children: /* @__PURE__ */ e(me, {
                        regular: !0,
                        color: "inherit",
                        children: s
                    })
                }))
            }),
            g && /* @__PURE__ */ C(le, {
                children: [
                    A && /* @__PURE__ */ e("div", {
                        className: mn,
                        onFocus: ()=>k(!0),
                        onBlur: ()=>k(!1),
                        children: /* @__PURE__ */ e(J, {
                            className: pn,
                            "aria-label": `${n.title}, ${f.mainNavigationBarOpenSectionMenu || m(ue)}`,
                            "aria-haspopup": !0,
                            "aria-expanded": T,
                            onPress: ()=>{
                                N && P();
                            },
                            style: {
                                pointerEvents: N ? "auto" : "none",
                                opacity: N ? 1 : 0,
                                // We are using the same chevron as in ButtonLink, and that svg has
                                // some extra space on the left that we want to ignore in this case
                                marginTop: -2
                            },
                            children: /* @__PURE__ */ e(Dn, {
                                size: 8,
                                style: {
                                    transform: `rotate(${T ? -90 : 90}deg)`
                                }
                            })
                        })
                    }),
                    l ? /* @__PURE__ */ e(Un, {
                        section: n,
                        isLargeNavigationBar: d,
                        index: t,
                        wide: u
                    }) : /* @__PURE__ */ e(Kn, {
                        section: n,
                        isLargeNavigationBar: d,
                        leftPosition: O,
                        index: t
                    })
                ]
            })
        ]
    });
}, jn = (param)=>{
    let { sections: n, selectedIndex: t, navigationBarRef: i, variant: r, isLargeNavigationBar: a, hasRightContent: p, desktopLargeMenu: c, wide: d } = param;
    const { openSectionMenu: l, openedSection: u, closeMenu: f } = D();
    return(// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ e("nav", {
        className: y($, rn),
        style: {
            paddingLeft: a ? 0 : 48,
            paddingRight: !a && p ? 136 : 0
        },
        onMouseEnter: ()=>{
            u !== -1 && l(u);
        },
        onMouseLeave: f,
        children: /* @__PURE__ */ e(X, {
            space: 32,
            children: n.map((m, s)=>/* @__PURE__ */ e(qn, {
                    index: s,
                    selectedIndex: t,
                    navigationBarRef: i,
                    isFirstSection: s === 0,
                    isLastSection: s === n.length - 1,
                    variant: r,
                    section: m,
                    isLargeNavigationBar: a,
                    desktopLargeMenu: c,
                    wide: d
                }, s))
        })
    }));
}, zn = (param)=>{
    let { children: n, isLargeNavigationBar: t, desktopLargeMenu: i } = param;
    const { menuHeight: r } = D(), a = t ? q : j;
    return /* @__PURE__ */ e("div", {
        className: on,
        style: i ? {
            clipPath: `rect(0 100% calc(${a}px + ${r}) 0)`,
            WebkitClipPath: `rect(0 100% calc(${a}px + ${r}) 0)`
        } : void 0,
        children: n
    });
}, xt = (param)=>{
    let { sections: n = [], selectedIndex: t, right: i, variant: r = "default", topFixed: a = !0, withBorder: p = !0, burgerMenuExtra: c, logo: d, large: l = !1, desktopLargeMenu: u = !1, wide: f = !1 } = param;
    const { texts: m, t: s } = _(), g = o.useId(), { isTabletOrSmaller: v } = fe(), M = d || /* @__PURE__ */ e(Me, {
        size: {
            mobile: 40,
            desktop: 48
        }
    }), O = l && n.length > 0, [B, N] = o.useState(!1), [k, b] = o.useState(!0), I = o.useRef(null), h = Fe(), R = /* @__PURE__ */ e(jn, {
        sections: n,
        selectedIndex: t,
        navigationBarRef: I,
        variant: r,
        hasRightContent: !!i,
        isLargeNavigationBar: O,
        desktopLargeMenu: u,
        wide: f
    }), S = ()=>{
        N(!0), h({
            isModalOpen: !0
        });
    }, E = ()=>{
        N(!1), h({
            isModalOpen: !1
        });
    }, A = n.length > 1, x = /* @__PURE__ */ C(w, {
        variant: r,
        children: [
            /* @__PURE__ */ C(oe, {
                topFixed: a,
                withBorder: p,
                isBurgerMenuOpen: B,
                variant: r,
                dataAttributes: {
                    "component-name": "MainNavigationBar"
                },
                children: [
                    u && /* @__PURE__ */ e(Xn, {
                        isLargeNavigationBar: O
                    }),
                    /* @__PURE__ */ e(zn, {
                        isLargeNavigationBar: O,
                        desktopLargeMenu: u,
                        children: /* @__PURE__ */ C(z, {
                            wide: f,
                            children: [
                                /* @__PURE__ */ C(G, {
                                    ref: I,
                                    right: i,
                                    expandRightContent: O,
                                    children: [
                                        A && /* @__PURE__ */ e(Re, {
                                            className: We,
                                            "aria-live": "polite",
                                            "aria-label": B ? m.closeNavigationMenu || s(Nn) : m.openNavigationMenu || s(bn),
                                            "aria-expanded": B,
                                            "aria-controls": g,
                                            onPress: B ? E : S,
                                            children: /* @__PURE__ */ e(Pn, {
                                                isOpen: B
                                            })
                                        }),
                                        /* @__PURE__ */ e("div", {
                                            className: Ve,
                                            children: M
                                        }),
                                        !O && R
                                    ]
                                }),
                                O && /* @__PURE__ */ e(G, {
                                    desktopOnly: !0,
                                    children: R
                                })
                            ]
                        })
                    })
                ]
            }),
            a && /* @__PURE__ */ e("div", {
                className: O ? Ge : ee
            })
        ]
    });
    return /* @__PURE__ */ e(Gn, {
        sections: n,
        isLargeMenu: u,
        children: v ? /* @__PURE__ */ C(le, {
            children: [
                /* @__PURE__ */ e(ve, {
                    disabled: k,
                    group: "burger-menu-lock",
                    children: x
                }),
                /* @__PURE__ */ e($n, {
                    open: B,
                    id: g,
                    sections: n,
                    extra: c,
                    closeMenu: E,
                    disableFocusTrap: k,
                    setDisableFocusTrap: b
                })
            ]
        }) : x
    });
}, Tt = (param)=>{
    let { logo: n, right: t, variant: i = "default", topFixed: r = !0, withBorder: a = !0, wide: p = !1 } = param;
    return n = n !== null && n !== void 0 ? n : /* @__PURE__ */ e(Me, {
        size: {
            mobile: 40,
            desktop: 48
        }
    }), /* @__PURE__ */ C(w, {
        variant: i,
        children: [
            /* @__PURE__ */ e(oe, {
                topFixed: r,
                withBorder: a,
                variant: i,
                dataAttributes: {
                    "component-name": "FunnelNavigationBar"
                },
                children: /* @__PURE__ */ e(z, {
                    wide: p,
                    children: /* @__PURE__ */ e(He, {
                        template: "10",
                        children: /* @__PURE__ */ e(G, {
                            right: t,
                            expandRightContent: !0,
                            children: n
                        })
                    })
                })
            }),
            r && /* @__PURE__ */ e("div", {
                className: ee
            })
        ]
    });
}, Lt = (param)=>{
    let { children: n } = param;
    return /* @__PURE__ */ e("div", {
        className: Se,
        "data-component-name": "NavigationBarActionGroup",
        children: /* @__PURE__ */ e(X, {
            space: 24,
            alignItems: "center",
            children: n
        })
    });
}, yt = (_param)=>{
    var { children: n } = _param, t = _object_without_properties(_param, [
        "children"
    ]);
    const i = De();
    return /* @__PURE__ */ e(J, _object_spread_props(_object_spread({}, t), {
        className: y(Ue, Se, Ne[i ? "inverse" : "default"]),
        dataAttributes: {
            "component-name": "NavigationBarAction"
        },
        children: /* @__PURE__ */ e(X, {
            space: 16,
            alignItems: "center",
            children: o.Children.map(n, (r)=>typeof r == "string" ? /* @__PURE__ */ e(pe, {
                    regular: !0,
                    color: "inherit",
                    children: r
                }) : r)
        })
    }));
};
export { Tt as FunnelNavigationBar, xt as MainNavigationBar, Hn as NavigationBar, yt as NavigationBarAction, Lt as NavigationBarActionGroup, D as useMainNavigationBarDesktopMenuState };
