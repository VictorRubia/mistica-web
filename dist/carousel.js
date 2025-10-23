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
    Carousel: function() {
        return Oo;
    },
    CarouselAutoplayControl: function() {
        return $e;
    },
    CarouselContextConsumer: function() {
        return Do;
    },
    CarouselContextProvider: function() {
        return Wo;
    },
    CarouselPageControls: function() {
        return Ue;
    },
    CenteredCarousel: function() {
        return zo;
    },
    PageBullets: function() {
        return Fe;
    },
    Slideshow: function() {
        return Go;
    },
    useCarouselContext: function() {
        return Vo;
    },
    useSlideshowContext: function() {
        return _o;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _iconchevronleftregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-chevron-left-regular.js"));
const _iconchevronrightregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-chevron-right-regular.js"));
const _hooks = require("./hooks.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _themevariantcontext = require("./theme-variant-context.js");
const _dom = require("./utils/dom.js");
const _platform = require("./utils/platform.js");
const _documentvisibility = require("./utils/document-visibility.js");
const _carouselcssmistica = require("./carousel.css-mistica.js");
const _imagecssmistica = require("./image.css-mistica.js");
const _desktopcontainertypecontext = require("./desktop-container-type-context.js");
const _constants = require("./skins/constants.js");
const _css = require("./utils/css.js");
const _responsivelayout = require("./responsive-layout.js");
const _iconbutton = require("./icon-button.js");
const _iconpausefilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-pause-filled.js"));
const _iconplayfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-play-filled.js"));
const _iconreloadregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-reload-regular.js"));
const _texttokens = require("./text-tokens.js");
const _environment = require("./utils/environment.js");
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
const Oe = (e, t)=>{
    const r = (0, _environment.isClientSide)() ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, [s, f] = _react.useState(!!e && !r), i = (0, _documentvisibility.useDocumentVisibility)(), m = (0, _hooks.useIsInViewport)(t, !1);
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
}, ge = /*#__PURE__*/ _react.createContext({
    goPrev: w,
    goNext: w,
    goToPage: w,
    bulletsProps: ze,
    autoplayControlProps: _e,
    pageControlsProps: Ge
}), Ce = /*#__PURE__*/ _react.createContext(null), Wo = (param)=>{
    let { children: e } = param;
    const [t, r] = _react.useState(ze), [s, f] = _react.useState(_e), [i, m] = _react.useState(Ge), v = _react.useRef(w), h = _react.useRef(w), l = _react.useRef(w), u = _react.useRef(w), A = _react.useMemo(()=>({
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
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(ge.Provider, {
        value: A,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Ce.Provider, {
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
}, Vo = ()=>_react.useContext(ge), Do = ge.Consumer, Fe = (param)=>{
    let { currentIndex: e, numPages: t } = param;
    var _t_tablet;
    const r = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), { isTablet: s, isDesktopOrBigger: f } = (0, _hooks.useScreenSize)(), i = typeof t == "number" ? t : f ? t.desktop : s ? (_t_tablet = t.tablet) !== null && _t_tablet !== void 0 ? _t_tablet : t.mobile : t.mobile, m = (h)=>{
        const l = {};
        if (r ? l[e === h ? _carouselcssmistica.bulletActiveInverse : _carouselcssmistica.bulletInverse] = !0 : l[e === h ? _carouselcssmistica.bulletActive : _carouselcssmistica.bullet] = !0, e === h) return l[_carouselcssmistica.bulletActiveSizing] = !0, l;
        const u = Math.abs(h - e);
        return i <= _carouselcssmistica.VISIBLE_BULLETS || u === 1 ? (l[_carouselcssmistica.bulletInactiveSizing] = !0, l) : e === 0 || e === i - 1 ? (l[_carouselcssmistica.bulletInactiveSizing] = u === 2, l[_carouselcssmistica.bulletInactiveMediumSizing] = u === 3, l[_carouselcssmistica.bulletInactiveSmallSizing] = u > 3, l) : (l[_carouselcssmistica.bulletInactiveMediumSizing] = u === 2, l[_carouselcssmistica.bulletInactiveSmallSizing] = u > 2, l);
    }, v = (h)=>e + 2 < _carouselcssmistica.VISIBLE_BULLETS ? h : i - e + 1 < _carouselcssmistica.VISIBLE_BULLETS ? h - (i - _carouselcssmistica.VISIBLE_BULLETS) : h - (e - 2);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)({
        "component-name": "PageBullets"
    })), {
        className: (0, _classnames.default)(_carouselcssmistica.bulletsScrollableContainerBase, {
            [_carouselcssmistica.bulletsScrollableContainer]: i > _carouselcssmistica.VISIBLE_BULLETS
        }),
        children: Array.from({
            length: i
        }, (h, l)=>{
            const u = v(l);
            var _t_tablet;
            return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)({
                    [_carouselcssmistica.scrollableBullet]: i > _carouselcssmistica.VISIBLE_BULLETS
                }, typeof t == "number" ? {
                    [_carouselcssmistica.bulletButton]: !0,
                    [_carouselcssmistica.bulletVisibility]: l < t
                } : {
                    [_carouselcssmistica.bulletButton]: !0,
                    [_carouselcssmistica.bulletVisibilityMobile]: l < t.mobile,
                    [_carouselcssmistica.bulletVisibilityTablet]: l < ((_t_tablet = t.tablet) !== null && _t_tablet !== void 0 ? _t_tablet : t.mobile),
                    [_carouselcssmistica.bulletVisibilityDesktop]: l < t.desktop
                }),
                style: _object_spread({}, (0, _css.applyCssVars)({
                    [_carouselcssmistica.vars.desktopBulletLeftPosition]: `${u * _carouselcssmistica.LARGE_BULLET_FULL_SIZE}px`,
                    [_carouselcssmistica.vars.mobileBulletLeftPosition]: `${u * _carouselcssmistica.SMALL_BULLET_FULL_SIZE}px`
                })),
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: (0, _classnames.default)(m(l))
                })
            }, l);
        })
    }));
}, Ue = (param)=>{
    let { bleedLeft: e, bleedRight: t, goPrev: r, goNext: s, setShouldAutoplay: f, prevArrowEnabled: i, nextArrowEnabled: m } = param;
    const { texts: v, t: h } = (0, _hooks.useTheme)(), l = (0, _themevariantcontext.useThemeVariant)();
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
        space: l === "media" ? 16 : 8,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, {
                Icon: _iconchevronleftregular.default,
                "aria-label": v.carouselPrevButton || h(_texttokens.carouselPrevButton),
                type: "neutral",
                backgroundType: l === "media" ? "transparent" : "soft",
                small: !0,
                bleedLeft: e,
                onPress: ()=>{
                    r(), f(!1);
                },
                disabled: !i
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, {
                Icon: _iconchevronrightregular.default,
                "aria-label": v.carouselNextButton || h(_texttokens.carouselNextButton),
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
    const { texts: i, t: m } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.ToggleIconButton, {
        checkedProps: {
            Icon: _iconpausefilled.default,
            type: "neutral",
            "aria-label": i.carouselPauseAutoplay || m(_texttokens.carouselPauseAutoplay)
        },
        uncheckedProps: {
            Icon: t ? _iconreloadregular.default : _iconplayfilled.default,
            type: "neutral",
            "aria-label": t ? i.carouselReloadAutoplay || m(_texttokens.carouselReloadAutoplay) : i.carouselEnableAutoplay || m(_texttokens.carouselEnableAutoplay)
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
    const { platformOverrides: W, skinName: P, texts: ue, t: q } = (0, _hooks.useTheme)(), D = (0, _desktopcontainertypecontext.useDesktopContainerType)(), b = io(D || "large", m), { isDesktopOrBigger: V, isTablet: J } = (0, _hooks.useScreenSize)(), F = J ? b.tablet : b.mobile, T = Math.max(Math.floor(V ? b.desktop : F), 1), L = _react.useRef(null), n = Math.ceil(e.length / Math.max(Math.floor(b.mobile), 1)), g = Math.ceil(e.length / Math.max(Math.floor(b.tablet), 1)), y = Math.ceil(e.length / Math.max(Math.floor(b.desktop), 1)), I = Math.ceil(e.length / T), [{ scrollLeft: Q, scrollRight: O }, fe] = _react.useState({
        scrollLeft: 0,
        scrollRight: 1
    }), [de, Ye] = _react.useState([]), X = _react.useMemo(()=>Be(de, I), [
        de,
        I
    ]), ee = v ? Be(de, Math.ceil(e.length / v)) : X, U = O !== 0, te = Q !== 0, { isAutoplayEnabled: oe, shouldAutoplay: ve, setShouldAutoPlay: E } = Oe(!!d, L);
    _react.useEffect(()=>{
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
            const R = (0, _dom.listenResize)(c, ()=>{
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
    const $ = _react.useCallback(function(c) {
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
    ]), he = _react.useCallback(()=>{
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
    ]), j = _react.useCallback(()=>{
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
    _react.useEffect(()=>{
        i !== void 0 && $(Math.floor(i / T), !1);
    }, [
        i,
        $,
        T
    ]);
    const se = typeof d == "object" && d.loop || !1, K = _react.useRef({
        interacting: !1,
        left: 0
    });
    _react.useEffect(()=>{
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
    _react.useEffect(()=>{
        S === I - 1 && !se && E(!1);
    }, [
        S,
        I,
        E,
        se
    ]);
    const Pe = _react.useRef(!i), ye = _react.useRef(0);
    _react.useEffect(()=>{
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
    const M = _react.useContext(Ce), pe = _react.useMemo(()=>({
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
    ]), Se = _react.useMemo(()=>({
            isAutoplayEnabled: oe,
            isAtLastPage: S === I - 1,
            onAutoplayChanged: E
        }), [
        oe,
        S,
        I,
        E
    ]), Ee = _react.useMemo(()=>({
            setShouldAutoplay: E,
            prevArrowEnabled: te,
            nextArrowEnabled: U
        }), [
        E,
        te,
        U
    ]);
    _react.useEffect(()=>{
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
    }) : s && (le = /* @__PURE__ */ (0, _jsxruntime.jsx)(Fe, _object_spread({}, pe)));
    const Je = "64px", Qe = "36px", Ae = /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(_carouselcssmistica.carouselBullets, !f && {
            [_carouselcssmistica.noCarouselBulletsDesktop]: y <= 1,
            [_carouselcssmistica.noCarouselBulletsTablet]: g <= 1,
            [_carouselcssmistica.noCarouselBulletsMobile]: n <= 1
        }),
        children: le
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(_object_spread({
        "component-name": "Carousel"
    }, ie))), {
        className: _carouselcssmistica.carouselComponentContainer,
        role: "region",
        "aria-label": N ? `${N}, ${ue.carouselRegion || q(_texttokens.carouselRegion)}` : void 0,
        "aria-labelledby": N ? void 0 : B,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)(_carouselcssmistica.carouselControlsVisibility, {
                    [_carouselcssmistica.carouselControlsVisibilityMobile]: n > 1,
                    [_carouselcssmistica.carouselControlsVisibilityTablet]: g > 1,
                    [_carouselcssmistica.carouselControlsVisibilityDesktop]: y > 1
                }),
                children: _ ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                    space: "between",
                    alignItems: "center",
                    className: _carouselcssmistica.carouselControlsContainer,
                    children: [
                        !!d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _carouselcssmistica.carouselAutoplayControlContainer,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)($e, {
                                isAutoplayEnabled: oe,
                                isAtLastPage: S === I - 1,
                                onAutoplayChanged: (c)=>{
                                    !U && c && $(0), E(c);
                                }
                            })
                        }),
                        Ae,
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _carouselcssmistica.carouselPagesControlsContainer,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Ue, {
                                goNext: j,
                                goPrev: he,
                                setShouldAutoplay: E,
                                prevArrowEnabled: te,
                                nextArrowEnabled: U
                            })
                        })
                    ]
                }) : le && /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
                    space: "around",
                    className: _carouselcssmistica.carouselControlsContainer,
                    children: Ae
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _carouselcssmistica.carouselContainer,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: (0, _classnames.default)(_carouselcssmistica.carousel, {
                        [_carouselcssmistica.centeredCarousel]: A,
                        [_carouselcssmistica.carouselWithScrollMobile]: n > 1,
                        [_carouselcssmistica.carouselWithScrollTablet]: g > 1
                    }),
                    role: "list",
                    style: _object_spread_props(_object_spread({}, (0, _css.applyCssVars)(_object_spread({
                        [_carouselcssmistica.vars.itemsPerPageDesktop]: String(b.desktop),
                        [_carouselcssmistica.vars.itemsPerPageTablet]: String(b.tablet),
                        [_carouselcssmistica.vars.itemsPerPageMobile]: String(b.mobile)
                    }, h === "large" ? {
                        [_carouselcssmistica.vars.mobilePageOffset]: Je
                    } : P === _constants.VIVO_NEW_SKIN ? {
                        [_carouselcssmistica.vars.mobilePageOffset]: Qe
                    } : {}, l !== void 0 ? {
                        [_carouselcssmistica.vars.gap]: String(l)
                    } : {}))), {
                        scrollSnapType: u ? "initial" : "x mandatory",
                        // Hack to fix https://jira.tid.es/browse/NOVUMCC-8988
                        // there is a webkit rendering bug that causes a half pixel white line to appear at
                        // the bottom of the scrollable area in retina displays when it has a height with
                        // decimals. This extra padding avoids that line to partially cover the carousel
                        // slides border:
                        paddingBottom: (0, _platform.isIos)(W) && !(0, _platform.isRunningAcceptanceTest)(W) ? 0.5 : void 0
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
                    children: e.map((c, p)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: (0, _classnames.default)(_carouselcssmistica.carouselItem, r),
                            style: _object_spread_props(_object_spread({}, t), {
                                scrollSnapStop: (0, _platform.isAndroid)(W) ? "always" : "normal"
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
    const [e, t] = _react.useState(1);
    return _react.useEffect(()=>{
        const r = ()=>{
            window.innerWidth !== 0 && (t((s)=>s + 1), window.removeEventListener("resize", r));
        };
        return window.innerWidth === 0 && window.addEventListener("resize", r), ()=>{
            window.removeEventListener("resize", r);
        };
    }, []), e;
}, Oo = (e)=>{
    const t = Ze();
    return /* @__PURE__ */ /*#__PURE__*/ (0, _react.createElement)(Ke, _object_spread_props(_object_spread({}, e), {
        key: t
    }));
}, zo = (param)=>{
    let { items: e, itemStyle: t, itemClassName: r, withBullets: s, renderBullets: f, withControls: i = !0, initialActiveItem: m, onPageChange: v, dataAttributes: h, "aria-label": l, "aria-labelledby": u } = param;
    const A = Ze();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(Ke, {
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
}, He = /*#__PURE__*/ _react.createContext(void 0), _o = ()=>_react.useContext(He), Go = (param)=>{
    let { items: e, withBullets: t, withControls: r = !0, autoplay: s, initialPageIndex: f = 0, onPageChange: i, dataAttributes: m, inverseBullets: v = !0 } = param;
    const { platformOverrides: h } = (0, _hooks.useTheme)(), l = _react.useContext(Ce), u = _react.useRef(null), [{ scrollLeft: A, scrollRight: d }, _] = _react.useState({
        scrollLeft: 0,
        scrollRight: 1
    }), G = d !== 0, ie = A !== 0, N = _react.useCallback(()=>{
        const n = u.current;
        n && n.scrollBy({
            left: -n.clientWidth,
            behavior: "smooth"
        });
    }, []), B = _react.useCallback(()=>{
        const n = u.current;
        n && n.scrollBy({
            left: n.clientWidth,
            behavior: "smooth"
        });
    }, []), W = _react.useCallback(function(n) {
        let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        const y = u.current;
        y && y.scrollTo({
            left: y.clientWidth * n,
            behavior: g ? "smooth" : "auto"
        });
    }, [
        u
    ]), P = u.current ? Math.floor((A + u.current.clientWidth / 2) / u.current.clientWidth) : 0;
    _react.useLayoutEffect(()=>{
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
            const y = (0, _dom.listenResize)(n, g);
            return ()=>{
                n.removeEventListener("scroll", g), y();
            };
        }
    }, [
        e.length
    ]);
    const { isAutoplayEnabled: ue, shouldAutoplay: q, setShouldAutoPlay: D } = Oe(!!s, u), b = typeof s == "object" && s.loop || !1;
    _react.useEffect(()=>{
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
    ]), _react.useEffect(()=>{
        P === e.length - 1 && !b && D(!1);
    }, [
        P,
        e.length,
        D,
        b
    ]);
    const V = _react.useRef(!1), J = _react.useRef(0);
    _react.useEffect(()=>{
        i && (V.current ? J.current !== P && i(P) : V.current = f === P), J.current = P;
    }, [
        P,
        f,
        i
    ]), _react.useEffect(()=>{
        const n = u.current;
        f !== void 0 && n && !V.current && n.scrollTo({
            left: n.clientWidth * f
        });
    }, [
        f
    ]);
    const F = _react.useMemo(()=>({
            currentIndex: P,
            numPages: e.length
        }), [
        P,
        e.length
    ]);
    _react.useEffect(()=>{
        l && (l.setGoPrev(N), l.setGoNext(B), l.setGoToPage(W), l.setBulletsProps(F));
    }, [
        l,
        B,
        N,
        F,
        W
    ]);
    const T = t && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _carouselcssmistica.slideshowBulletsContainer,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
            variant: v ? "inverse" : "default",
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Fe, _object_spread({}, F))
        })
    }), L = !t && !s;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(He.Provider, {
        value: {
            withBullets: !!t
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.ResetResponsiveLayout, {
            skipDesktop: !0,
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
                className: (0, _classnames.default)(_carouselcssmistica.slideshowContainer, {
                    [_carouselcssmistica.slideshowWithBullets]: !!t
                })
            }, (0, _dom.getPrefixedDataAttributes)(m, "SlideShow")), {
                children: [
                    e.length > 1 && (r ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
                        variant: "media",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                            space: L ? 0 : "between",
                            alignItems: "center",
                            className: (0, _classnames.default)(_carouselcssmistica.slideshowControlsContainer, {
                                [_carouselcssmistica.slideshowControlsContainerSingleItem]: L
                            }),
                            children: [
                                !!s && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _carouselcssmistica.slideshowAutoplayControlContainer,
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)($e, {
                                        isAutoplayEnabled: ue,
                                        isAtLastPage: P === e.length - 1,
                                        onAutoplayChanged: (n)=>{
                                            P === e.length - 1 && n && W(0), D(n);
                                        }
                                    })
                                }),
                                T,
                                /* @__PURE__ */ (0, _jsxruntime.jsx)(Ue, {
                                    goNext: B,
                                    goPrev: N,
                                    setShouldAutoplay: D,
                                    prevArrowEnabled: ie,
                                    nextArrowEnabled: G
                                })
                            ]
                        })
                    }) : t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
                        space: "around",
                        className: _carouselcssmistica.slideshowControlsContainer,
                        children: T
                    })),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: (0, _css.applyCssVars)({
                            [_imagecssmistica.vars.mediaBorderRadius]: "0px"
                        }),
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _carouselcssmistica.slideshow,
                            ref: u,
                            children: e.map((n, g)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _carouselcssmistica.slideshowItem,
                                    style: {
                                        scrollSnapStop: (0, _platform.isAndroid)(h) ? "always" : "normal"
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
