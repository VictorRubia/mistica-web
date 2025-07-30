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
import { jsx as a, jsxs as H } from "react/jsx-runtime";
import * as o from "react";
import { createElement as tt } from "react";
import ot from "./generated/mistica-icons/icon-chevron-left-regular.js";
import st from "./generated/mistica-icons/icon-chevron-right-regular.js";
import { useScreenSize as We, useTheme as ce, useIsInViewport as lt } from "./hooks.js";
import Y from "./inline.js";
import k from "classnames";
import { useIsInverseOrMediaVariant as rt, useThemeVariant as nt, ThemeVariant as Le } from "./theme-variant-context.js";
import { getPrefixedDataAttributes as me, listenResize as Ve } from "./utils/dom.js";
import { isAndroid as De, isIos as at, isRunningAcceptanceTest as ct } from "./utils/platform.js";
import { useDocumentVisibility as it } from "./utils/document-visibility.js";
import { bulletsScrollableContainerBase as ut, bulletsScrollableContainer as ft, VISIBLE_BULLETS as z, scrollableBullet as dt, bulletButton as Ie, bulletVisibility as ht, bulletVisibilityMobile as pt, bulletVisibilityTablet as mt, bulletVisibilityDesktop as bt, slideshowBulletsContainer as gt, slideshowContainer as Ct, slideshowWithBullets as vt, slideshowControlsContainer as Re, slideshowControlsContainerSingleItem as Pt, slideshowAutoplayControlContainer as yt, slideshow as St, slideshowItem as Et, bulletActiveInverse as At, bulletInverse as Lt, bulletActive as It, bullet as Rt, bulletActiveSizing as Tt, bulletInactiveSizing as Te, bulletInactiveMediumSizing as Me, bulletInactiveSmallSizing as ke, vars as x, LARGE_BULLET_FULL_SIZE as Mt, SMALL_BULLET_FULL_SIZE as kt, carouselBullets as wt, noCarouselBulletsDesktop as xt, noCarouselBulletsTablet as Nt, noCarouselBulletsMobile as Bt, carouselComponentContainer as Wt, carouselControlsVisibility as Vt, carouselControlsVisibilityMobile as Dt, carouselControlsVisibilityTablet as Ot, carouselControlsVisibilityDesktop as zt, carouselControlsContainer as we, carouselAutoplayControlContainer as _t, carouselPagesControlsContainer as Gt, carouselContainer as Ft, carousel as Ut, centeredCarousel as $t, carouselWithScrollMobile as jt, carouselWithScrollTablet as Kt, carouselItem as Zt } from "./carousel.css-mistica.js";
import { vars as Ht } from "./image.css-mistica.js";
import { useDesktopContainerType as Yt } from "./desktop-container-type-context.js";
import { VIVO_NEW_SKIN as qt } from "./skins/constants.js";
import { applyCssVars as be } from "./utils/css.js";
import { ResetResponsiveLayout as Jt } from "./responsive-layout.js";
import { IconButton as xe, ToggleIconButton as Qt } from "./icon-button.js";
import Xt from "./generated/mistica-icons/icon-pause-filled.js";
import eo from "./generated/mistica-icons/icon-play-filled.js";
import to from "./generated/mistica-icons/icon-reload-regular.js";
import { carouselPrevButton as oo, carouselNextButton as so, carouselPauseAutoplay as lo, carouselReloadAutoplay as ro, carouselEnableAutoplay as no, carouselRegion as ao } from "./text-tokens.js";
import { isClientSide as co } from "./utils/environment.js";
const Oe = (e, t)=>{
    const r = co() ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, [s, f] = o.useState(!!e && !r), i = it(), m = lt(t, !1);
    return {
        isAutoplayEnabled: s && !!e,
        shouldAutoplay: m && i && !!e && s,
        setShouldAutoPlay: f
    };
}, w = ()=>{
    throw new Error("You must wrap your component with a CarouselContextProvider to use CarouselContext");
}, ze = {
    currentIndex: 0,
    numPages: 0
}, _e = {
    isAutoplayEnabled: !1,
    isAtLastPage: !1,
    onAutoplayChanged: w
}, Ge = {
    setShouldAutoplay: w,
    prevArrowEnabled: !1,
    nextArrowEnabled: !1
}, ge = /*#__PURE__*/ o.createContext({
    goPrev: w,
    goNext: w,
    goToPage: w,
    bulletsProps: ze,
    autoplayControlProps: _e,
    pageControlsProps: Ge
}), Ce = /*#__PURE__*/ o.createContext(null), Wo = (param)=>{
    let { children: e } = param;
    const [t, r] = o.useState(ze), [s, f] = o.useState(_e), [i, m] = o.useState(Ge), v = o.useRef(w), h = o.useRef(w), l = o.useRef(w), u = o.useRef(w), A = o.useMemo(()=>({
            goPrev: ()=>{
                v.current();
            },
            goNext: ()=>{
                h.current();
            },
            goToPage: function(d) {
                let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                l.current(d, _);
            },
            bulletsProps: t,
            autoplayControlProps: s,
            pageControlsProps: i
        }), [
        t,
        s,
        i
    ]);
    return /* @__PURE__ */ a(ge.Provider, {
        value: A,
        children: /* @__PURE__ */ a(Ce.Provider, {
            value: {
                setGoPrev: (d)=>{
                    v.current = d;
                },
                setGoNext: (d)=>{
                    h.current = d;
                },
                setGoToPage: (d)=>{
                    l.current = d;
                },
                setBulletsProps: r,
                setAutoplayControlProps: f,
                setPageControlsProps: m,
                setIsAutoplayEnabledSetter: (d)=>{
                    u.current = d;
                }
            },
            children: e
        })
    });
}, Vo = ()=>o.useContext(ge), Do = ge.Consumer, Fe = (param)=>{
    let { currentIndex: e, numPages: t } = param;
    var _t_tablet;
    const r = rt(), { isTablet: s, isDesktopOrBigger: f } = We(), i = typeof t == "number" ? t : f ? t.desktop : s ? (_t_tablet = t.tablet) !== null && _t_tablet !== void 0 ? _t_tablet : t.mobile : t.mobile, m = (h)=>{
        const l = {};
        if (r ? l[e === h ? At : Lt] = !0 : l[e === h ? It : Rt] = !0, e === h) return l[Tt] = !0, l;
        const u = Math.abs(h - e);
        return i <= z || u === 1 ? (l[Te] = !0, l) : e === 0 || e === i - 1 ? (l[Te] = u === 2, l[Me] = u === 3, l[ke] = u > 3, l) : (l[Me] = u === 2, l[ke] = u > 2, l);
    }, v = (h)=>e + 2 < z ? h : i - e + 1 < z ? h - (i - z) : h - (e - 2);
    return /* @__PURE__ */ a("div", _object_spread_props(_object_spread({}, me({
        "component-name": "PageBullets"
    })), {
        className: k(ut, {
            [ft]: i > z
        }),
        children: Array.from({
            length: i
        }, (h, l)=>{
            const u = v(l);
            var _t_tablet;
            return /* @__PURE__ */ a("div", {
                className: k({
                    [dt]: i > z
                }, typeof t == "number" ? {
                    [Ie]: !0,
                    [ht]: l < t
                } : {
                    [Ie]: !0,
                    [pt]: l < t.mobile,
                    [mt]: l < ((_t_tablet = t.tablet) !== null && _t_tablet !== void 0 ? _t_tablet : t.mobile),
                    [bt]: l < t.desktop
                }),
                style: _object_spread({}, be({
                    [x.desktopBulletLeftPosition]: `${u * Mt}px`,
                    [x.mobileBulletLeftPosition]: `${u * kt}px`
                })),
                children: /* @__PURE__ */ a("div", {
                    className: k(m(l))
                })
            }, l);
        })
    }));
}, Ue = (param)=>{
    let { bleedLeft: e, bleedRight: t, goPrev: r, goNext: s, setShouldAutoplay: f, prevArrowEnabled: i, nextArrowEnabled: m } = param;
    const { texts: v, t: h } = ce(), l = nt();
    return /* @__PURE__ */ H(Y, {
        space: l === "media" ? 16 : 8,
        children: [
            /* @__PURE__ */ a(xe, {
                Icon: ot,
                "aria-label": v.carouselPrevButton || h(oo),
                type: "neutral",
                backgroundType: l === "media" ? "transparent" : "soft",
                small: !0,
                bleedLeft: e,
                onPress: ()=>{
                    r(), f(!1);
                },
                disabled: !i
            }),
            /* @__PURE__ */ a(xe, {
                Icon: st,
                "aria-label": v.carouselNextButton || h(so),
                type: "neutral",
                backgroundType: l === "media" ? "transparent" : "soft",
                small: !0,
                bleedRight: t,
                onPress: ()=>{
                    s(), f(!1);
                },
                disabled: !m
            })
        ]
    });
}, $e = (param)=>{
    let { isAutoplayEnabled: e, isAtLastPage: t, onAutoplayChanged: r, bleedLeft: s = !1, bleedRight: f = !1 } = param;
    const { texts: i, t: m } = ce();
    return /* @__PURE__ */ a(Qt, {
        checkedProps: {
            Icon: Xt,
            type: "neutral",
            "aria-label": i.carouselPauseAutoplay || m(lo)
        },
        uncheckedProps: {
            Icon: t ? to : eo,
            type: "neutral",
            "aria-label": t ? i.carouselReloadAutoplay || m(ro) : i.carouselEnableAutoplay || m(no)
        },
        small: !0,
        bleedLeft: s,
        bleedRight: f,
        onChange: r,
        checked: e
    });
}, Ne = (e, t, r)=>r ? typeof r == "number" ? r : r[e] || t[e] : t[e], io = (e, t)=>{
    const r = {
        mobile: 1,
        tablet: 2,
        desktop: {
            small: 1,
            medium: 2,
            large: 3
        }
    };
    if (!t) return _object_spread_props(_object_spread({}, r), {
        desktop: Ne(e, r.desktop)
    });
    if (typeof t == "number") return {
        mobile: t,
        tablet: t,
        desktop: t
    };
    const s = Ne(e, r.desktop, t.desktop);
    return _object_spread_props(_object_spread({}, r, t), {
        desktop: s
    });
}, Be = (e, t)=>{
    if (e.length === 0) return [];
    const r = Math.ceil(e.length / t), s = [];
    for(let f = 0; f < e.length; f += r)s.push(e[f]);
    return s[s.length - 1] = e[e.length - r], s;
}, uo = (e, t)=>{
    const r = [];
    for(let s = 0; s < t.length; s++)s === 0 ? r.push(t[0]) : r.push((t[s] + t[s - 1]) / 2);
    for(let s = r.length - 1; s >= 0; s--)if (e - r[s] >= -1) return s;
    return 0;
}, je = 5e3, Ke = (param)=>{
    let { items: e, itemStyle: t, itemClassName: r, withBullets: s, renderBullets: f, initialActiveItem: i, itemsPerPage: m, itemsToScroll: v, mobilePageOffset: h, gap: l, free: u, centered: A, autoplay: d, withControls: _ = !0, onPageChange: G, dataAttributes: ie, "aria-label": N, "aria-labelledby": B } = param;
    const { platformOverrides: W, skinName: P, texts: ue, t: q } = ce(), D = Yt(), b = io(D || "large", m), { isDesktopOrBigger: V, isTablet: J } = We(), F = J ? b.tablet : b.mobile, T = Math.max(Math.floor(V ? b.desktop : F), 1), L = o.useRef(null), n = Math.ceil(e.length / Math.max(Math.floor(b.mobile), 1)), g = Math.ceil(e.length / Math.max(Math.floor(b.tablet), 1)), y = Math.ceil(e.length / Math.max(Math.floor(b.desktop), 1)), I = Math.ceil(e.length / T), [{ scrollLeft: Q, scrollRight: O }, fe] = o.useState({
        scrollLeft: 0,
        scrollRight: 1
    }), [de, Ye] = o.useState([]), X = o.useMemo(()=>Be(de, I), [
        de,
        I
    ]), ee = v ? Be(de, Math.ceil(e.length / v)) : X, U = O !== 0, te = Q !== 0, { isAutoplayEnabled: oe, shouldAutoplay: ve, setShouldAutoPlay: E } = Oe(!!d, L);
    o.useEffect(()=>{
        if (L.current) {
            const c = L.current, p = ()=>{
                const { scrollWidth: re, clientWidth: Z } = c, ne = Math.round(c.scrollLeft), ae = Math.round(re - (ne + Z));
                fe({
                    scrollLeft: ne,
                    scrollRight: ae
                });
            }, C = ()=>{
                const re = c.scrollWidth - c.clientWidth;
                Ye(Array.from(c.querySelectorAll("[data-item]")).map((Z, ne)=>{
                    if (ne === e.length - 1) return re;
                    const ae = Z.offsetLeft, Xe = parseInt(getComputedStyle(Z).scrollMargin), et = A && !V ? ae - Z.clientWidth / 2 : ae;
                    return Math.min(et - Xe - c.offsetLeft, re);
                }));
            };
            p(), C(), c.addEventListener("scroll", p);
            const R = Ve(c, ()=>{
                p(), C();
            });
            return ()=>{
                c.removeEventListener("scroll", p), R();
            };
        }
        return ()=>{};
    }, [
        b.desktop,
        b.tablet,
        b.mobile,
        I,
        l,
        A,
        V,
        e.length
    ]);
    const $ = o.useCallback(function(c) {
        let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        const C = L.current;
        if (C) {
            const R = X[c];
            C.scrollTo({
                left: R,
                behavior: p ? "smooth" : "auto"
            });
        }
    }, [
        X
    ]), he = o.useCallback(()=>{
        const c = L.current;
        if (c) {
            const { scrollLeft: p } = c, C = [
                ...ee
            ].reverse().find((R)=>R - p < -1);
            c.scrollTo({
                left: C,
                behavior: "smooth"
            });
        }
    }, [
        ee
    ]), j = o.useCallback(()=>{
        const c = L.current;
        if (c) {
            const { scrollLeft: p } = c, C = ee.find((R)=>R - p > 1);
            c.scrollTo({
                left: C,
                behavior: "smooth"
            });
        }
    }, [
        ee
    ]);
    o.useEffect(()=>{
        i !== void 0 && $(Math.floor(i / T), !1);
    }, [
        i,
        $,
        T
    ]);
    const se = typeof d == "object" && d.loop || !1, K = o.useRef({
        interacting: !1,
        left: 0
    });
    o.useEffect(()=>{
        if (ve && d) {
            const c = typeof d == "boolean" ? je : d.time, p = setInterval(()=>{
                var C;
                K.current.interacting || (O !== 0 ? j() : se && ((C = L.current) == null || C.scrollTo({
                    left: 0,
                    behavior: "smooth"
                })));
            }, c);
            return ()=>clearInterval(p);
        }
    }, [
        d,
        j,
        O,
        ve,
        se
    ]);
    const S = uo(Q, X), qe = 20;
    o.useEffect(()=>{
        S === I - 1 && !se && E(!1);
    }, [
        S,
        I,
        E,
        se
    ]);
    const Pe = o.useRef(!i), ye = o.useRef(0);
    o.useEffect(()=>{
        if (G) {
            const c = Math.min((S + 1) * T - 1, e.length - 1), p = [];
            for(let C = 0; C < T; C++){
                const R = c - C;
                R >= 0 && p.unshift(R);
            }
            Pe.current ? ye.current !== S && G({
                pageIndex: S,
                shownItemIndexes: p
            }) : Pe.current = p.includes(i || 0), ye.current = S;
        }
    }, [
        S,
        e.length,
        T,
        i,
        G
    ]);
    const M = o.useContext(Ce), pe = o.useMemo(()=>({
            currentIndex: S,
            numPages: {
                mobile: n,
                tablet: g,
                desktop: y
            }
        }), [
        S,
        y,
        n,
        g
    ]), Se = o.useMemo(()=>({
            isAutoplayEnabled: oe,
            isAtLastPage: S === I - 1,
            onAutoplayChanged: E
        }), [
        oe,
        S,
        I,
        E
    ]), Ee = o.useMemo(()=>({
            setShouldAutoplay: E,
            prevArrowEnabled: te,
            nextArrowEnabled: U
        }), [
        E,
        te,
        U
    ]);
    o.useEffect(()=>{
        M && (M.setGoPrev(he), M.setGoNext(j), M.setGoToPage($), M.setBulletsProps(pe), M.setAutoplayControlProps(Se), M.setPageControlsProps(Ee), M.setIsAutoplayEnabledSetter(E));
    }, [
        M,
        j,
        he,
        pe,
        Se,
        Ee,
        $,
        te,
        U,
        d,
        oe,
        E
    ]);
    let le = null;
    f ? le = f({
        numPages: I,
        currentIndex: S
    }) : s && (le = /* @__PURE__ */ a(Fe, _object_spread({}, pe)));
    const Je = "64px", Qe = "36px", Ae = /* @__PURE__ */ a("div", {
        className: k(wt, // when renderBullets is provided, we let the consumer decide if the bullets should be hidden
        !f && {
            [xt]: y <= 1,
            [Nt]: g <= 1,
            [Bt]: n <= 1
        }),
        children: le
    });
    return /* @__PURE__ */ H("div", _object_spread_props(_object_spread({}, me(_object_spread({
        "component-name": "Carousel"
    }, ie))), {
        className: Wt,
        role: "region",
        "aria-label": N ? `${N}, ${ue.carouselRegion || q(ao)}` : void 0,
        "aria-labelledby": N ? void 0 : B,
        children: [
            /* @__PURE__ */ a("div", {
                className: k(Vt, {
                    [Dt]: n > 1,
                    [Ot]: g > 1,
                    [zt]: y > 1
                }),
                children: _ ? /* @__PURE__ */ H(Y, {
                    space: "between",
                    alignItems: "center",
                    className: we,
                    children: [
                        !!d && /* @__PURE__ */ a("div", {
                            className: _t,
                            children: /* @__PURE__ */ a($e, {
                                isAutoplayEnabled: oe,
                                isAtLastPage: S === I - 1,
                                onAutoplayChanged: (c)=>{
                                    !U && c && $(0), E(c);
                                }
                            })
                        }),
                        Ae,
                        /* @__PURE__ */ a("div", {
                            className: Gt,
                            children: /* @__PURE__ */ a(Ue, {
                                goNext: j,
                                goPrev: he,
                                setShouldAutoplay: E,
                                prevArrowEnabled: te,
                                nextArrowEnabled: U
                            })
                        })
                    ]
                }) : le && /* @__PURE__ */ a(Y, {
                    space: "around",
                    className: we,
                    children: Ae
                })
            }),
            /* @__PURE__ */ a("div", {
                className: Ft,
                children: /* @__PURE__ */ a("div", {
                    className: k(Ut, {
                        [$t]: A,
                        [jt]: n > 1,
                        [Kt]: g > 1
                    }),
                    role: "list",
                    style: _object_spread_props(_object_spread({}, be(_object_spread({
                        [x.itemsPerPageDesktop]: String(b.desktop),
                        [x.itemsPerPageTablet]: String(b.tablet),
                        [x.itemsPerPageMobile]: String(b.mobile)
                    }, h === "large" ? {
                        [x.mobilePageOffset]: Je
                    } : P === qt ? {
                        [x.mobilePageOffset]: Qe
                    } : {}, l !== void 0 ? {
                        [x.gap]: String(l)
                    } : {}))), {
                        scrollSnapType: u ? "initial" : "x mandatory",
                        // Hack to fix https://jira.tid.es/browse/NOVUMCC-8988
                        // there is a webkit rendering bug that causes a half pixel white line to appear at
                        // the bottom of the scrollable area in retina displays when it has a height with
                        // decimals. This extra padding avoids that line to partially cover the carousel
                        // slides border:
                        paddingBottom: at(W) && !ct(W) ? 0.5 : void 0
                    }),
                    ref: L,
                    onTouchStart: (c)=>{
                        K.current.left = c.currentTarget.scrollLeft, K.current.interacting = !0;
                    },
                    onTouchEnd: (c)=>{
                        K.current.interacting = !1, Math.abs(c.currentTarget.scrollLeft - K.current.left) > qe && E(!1);
                    },
                    onKeyDown: ()=>{
                        E(!1);
                    },
                    children: e.map((c, p)=>/* @__PURE__ */ a("div", {
                            className: k(Zt, r),
                            style: _object_spread_props(_object_spread({}, t), {
                                scrollSnapStop: De(W) ? "always" : "normal"
                            }),
                            role: "listitem",
                            "data-item": !0,
                            children: c
                        }, p))
                })
            })
        ]
    }));
}, Ze = ()=>{
    const [e, t] = o.useState(1);
    return o.useEffect(()=>{
        const r = ()=>{
            window.innerWidth !== 0 && (t((s)=>s + 1), window.removeEventListener("resize", r));
        };
        return window.innerWidth === 0 && window.addEventListener("resize", r), ()=>{
            window.removeEventListener("resize", r);
        };
    }, []), e;
}, Oo = (e)=>{
    const t = Ze();
    return /* @__PURE__ */ /*#__PURE__*/ tt(Ke, _object_spread_props(_object_spread({}, e), {
        key: t
    }));
}, zo = (param)=>{
    let { items: e, itemStyle: t, itemClassName: r, withBullets: s, renderBullets: f, withControls: i = !0, initialActiveItem: m, onPageChange: v, dataAttributes: h, "aria-label": l, "aria-labelledby": u } = param;
    const A = Ze();
    return /* @__PURE__ */ a(Ke, {
        items: e,
        itemStyle: t,
        itemClassName: r,
        itemsPerPage: {
            mobile: 1,
            tablet: 1,
            desktop: 3
        },
        centered: !0,
        itemsToScroll: 1,
        gap: 0,
        withBullets: s,
        renderBullets: f,
        withControls: i,
        initialActiveItem: m,
        onPageChange: v,
        dataAttributes: h,
        "aria-label": l,
        "aria-labelledby": u
    }, A);
}, He = /*#__PURE__*/ o.createContext(void 0), _o = ()=>o.useContext(He), Go = (param)=>{
    let { items: e, withBullets: t, withControls: r = !0, autoplay: s, initialPageIndex: f = 0, onPageChange: i, dataAttributes: m, inverseBullets: v = !0 } = param;
    const { platformOverrides: h } = ce(), l = o.useContext(Ce), u = o.useRef(null), [{ scrollLeft: A, scrollRight: d }, _] = o.useState({
        scrollLeft: 0,
        scrollRight: 1
    }), G = d !== 0, ie = A !== 0, N = o.useCallback(()=>{
        const n = u.current;
        n && n.scrollBy({
            left: -n.clientWidth,
            behavior: "smooth"
        });
    }, []), B = o.useCallback(()=>{
        const n = u.current;
        n && n.scrollBy({
            left: n.clientWidth,
            behavior: "smooth"
        });
    }, []), W = o.useCallback(function(n) {
        let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        const y = u.current;
        y && y.scrollTo({
            left: y.clientWidth * n,
            behavior: g ? "smooth" : "auto"
        });
    }, [
        u
    ]), P = u.current ? Math.floor((A + u.current.clientWidth / 2) / u.current.clientWidth) : 0;
    o.useLayoutEffect(()=>{
        const n = u.current;
        if (n) {
            const g = ()=>{
                const { scrollWidth: I, clientWidth: Q } = n, O = Math.round(n.scrollLeft), fe = Math.round(I - (O + Q));
                _({
                    scrollLeft: O,
                    scrollRight: fe
                });
            };
            g(), n.addEventListener("scroll", g);
            const y = Ve(n, g);
            return ()=>{
                n.removeEventListener("scroll", g), y();
            };
        }
    }, [
        e.length
    ]);
    const { isAutoplayEnabled: ue, shouldAutoplay: q, setShouldAutoPlay: D } = Oe(!!s, u), b = typeof s == "object" && s.loop || !1;
    o.useEffect(()=>{
        if (q && s) {
            const n = typeof s == "boolean" ? je : s.time, g = setInterval(()=>{
                var y;
                d !== 0 ? B() : b && ((y = u.current) == null || y.scrollTo({
                    left: 0,
                    behavior: "smooth"
                }));
            }, n);
            return ()=>clearInterval(g);
        }
    }, [
        s,
        B,
        d,
        q,
        b
    ]), o.useEffect(()=>{
        P === e.length - 1 && !b && D(!1);
    }, [
        P,
        e.length,
        D,
        b
    ]);
    const V = o.useRef(!1), J = o.useRef(0);
    o.useEffect(()=>{
        i && (V.current ? J.current !== P && i(P) : V.current = f === P), J.current = P;
    }, [
        P,
        f,
        i
    ]), o.useEffect(()=>{
        const n = u.current;
        f !== void 0 && n && !V.current && n.scrollTo({
            left: n.clientWidth * f
        });
    }, [
        f
    ]);
    const F = o.useMemo(()=>({
            currentIndex: P,
            numPages: e.length
        }), [
        P,
        e.length
    ]);
    o.useEffect(()=>{
        l && (l.setGoPrev(N), l.setGoNext(B), l.setGoToPage(W), l.setBulletsProps(F));
    }, [
        l,
        B,
        N,
        F,
        W
    ]);
    const T = t && /* @__PURE__ */ a("div", {
        className: gt,
        children: /* @__PURE__ */ a(Le, {
            variant: v ? "inverse" : "default",
            children: /* @__PURE__ */ a(Fe, _object_spread({}, F))
        })
    }), L = !t && !s;
    return /* @__PURE__ */ a(He.Provider, {
        value: {
            withBullets: !!t
        },
        children: /* @__PURE__ */ a(Jt, {
            skipDesktop: !0,
            children: /* @__PURE__ */ H("div", _object_spread_props(_object_spread({
                className: k(Ct, {
                    [vt]: !!t
                })
            }, me(m, "SlideShow")), {
                children: [
                    e.length > 1 && (r ? /* @__PURE__ */ a(Le, {
                        variant: "media",
                        children: /* @__PURE__ */ H(Y, {
                            space: L ? 0 : "between",
                            alignItems: "center",
                            className: k(Re, {
                                [Pt]: L
                            }),
                            children: [
                                !!s && /* @__PURE__ */ a("div", {
                                    className: yt,
                                    children: /* @__PURE__ */ a($e, {
                                        isAutoplayEnabled: ue,
                                        isAtLastPage: P === e.length - 1,
                                        onAutoplayChanged: (n)=>{
                                            P === e.length - 1 && n && W(0), D(n);
                                        }
                                    })
                                }),
                                T,
                                /* @__PURE__ */ a(Ue, {
                                    goNext: B,
                                    goPrev: N,
                                    setShouldAutoplay: D,
                                    prevArrowEnabled: ie,
                                    nextArrowEnabled: G
                                })
                            ]
                        })
                    }) : t && /* @__PURE__ */ a(Y, {
                        space: "around",
                        className: Re,
                        children: T
                    })),
                    /* @__PURE__ */ a("div", {
                        style: be({
                            [Ht.mediaBorderRadius]: "0px"
                        }),
                        children: /* @__PURE__ */ a("div", {
                            className: St,
                            ref: u,
                            children: e.map((n, g)=>/* @__PURE__ */ a("div", {
                                    className: Et,
                                    style: {
                                        scrollSnapStop: De(h) ? "always" : "normal"
                                    },
                                    children: n
                                }, g))
                        })
                    })
                ]
            }))
        })
    });
};
export { Oo as Carousel, $e as CarouselAutoplayControl, Do as CarouselContextConsumer, Wo as CarouselContextProvider, Ue as CarouselPageControls, zo as CenteredCarousel, Fe as PageBullets, Go as Slideshow, Vo as useCarouselContext, _o as useSlideshowContext };
