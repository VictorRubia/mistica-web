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
import { jsx as e, jsxs as s, Fragment as J } from "react/jsx-runtime";
import * as I from "react";
import we from "./tag.js";
import me from "./stack.js";
import ie from "./box.js";
import { Text as te, Text2 as F, Text6 as Ye, Text3 as Ze } from "./text.js";
import { text2 as Se, text4 as be } from "./text-props.js";
import { Boxed as pe, InternalBoxed as Be } from "./boxed.js";
import xe from "./button-group.js";
import ge from "./image.js";
import { BaseTouchable as Q } from "./touchable.js";
import { vars as p } from "./skins/skin-contract.css-mistica.js";
import { cardContainer as Le, touchableContainer as U, touchable as Y, boxed as ne, touchableMediaCardOverlay as Pe, mediaCard as Ce, mediaCardContent as ea, mediaCardAsset as ke, touchableNakedMediaOverlay as Ie, circularMediaOverlay as Me, nakedCardContent as Ge, touchableCardOverlay as ue, dataCard as aa, vars as ze, dataCardTopActionsWithoutIcon as da, actions as Oe, snapCard as ra, displayCardContainer as Ae, displayCardBackground as je, displayCardContent as Ve, displayCardContentWrapper as ia, displayCardGradient as De, displayCardContentWithAsset as ta, displayCardContentWithTopContent as na, posterCardContentWrapper as oa, cardContentContainer as sa, flexColumn as Ee, touchableCardOverlayInverse as Ne, touchableCardOverlayMedia as We } from "./card.css-mistica.js";
import { vars as K } from "./image.css-mistica.js";
import { useTheme as ae } from "./hooks.js";
import { IconButton as la, ToggleIconButton as ca } from "./icon-button.js";
import ha from "./generated/mistica-icons/icon-close-regular.js";
import va from "./generated/mistica-icons/icon-pause-filled.js";
import ma from "./generated/mistica-icons/icon-play-filled.js";
import { combineRefs as ua } from "./utils/common.js";
import ya from "./spinner.js";
import fa from "./video.js";
import { useThemeVariant as ba, useIsInverseVariant as Fe, ThemeVariant as Te } from "./theme-variant-context.js";
import ee from "classnames";
import He from "./inline.js";
import { getPrefixedDataAttributes as pa } from "./utils/dom.js";
import { isRunningAcceptanceTest as xa } from "./utils/platform.js";
import { applyCssVars as q } from "./utils/css.js";
import { closeButtonLabel as ga, pauseIconButtonLabel as Ca, playIconButtonLabel as Na } from "./text-tokens.js";
import { isBiggerHeading as Z } from "./utils/headings.js";
const H = ()=>{
    const [a, d] = I.useState(""), r = I.useCallback((n)=>{
        n && d((process.env.NODE_ENV === "test" ? n.textContent : n.innerText) || "");
    }, []);
    return {
        text: a,
        ref: r
    };
}, Xe = (a, d, r)=>{
    const { texts: n, t: v } = ae(), t = a ? [
        ...a
    ] : [];
    return d && t.push({
        label: r || n.closeButtonLabel || v(ga),
        onPress: d,
        Icon: ha
    }), t;
}, Ta = (a)=>{
    const d = ba();
    return a.Icon ? /* @__PURE__ */ e(la, _object_spread_props(_object_spread({}, a), {
        "aria-label": a.label,
        small: !0,
        type: "neutral",
        backgroundType: "transparent"
    })) : /* @__PURE__ */ e(ca, _object_spread_props(_object_spread({}, a), {
        checkedProps: _object_spread_props(_object_spread({}, a.checkedProps), {
            "aria-label": a.checkedProps.label,
            type: d === "media" ? "neutral" : "brand",
            backgroundType: "solid"
        }),
        uncheckedProps: _object_spread_props(_object_spread({}, a.uncheckedProps), {
            "aria-label": a.uncheckedProps.label,
            type: "neutral",
            backgroundType: "transparent"
        }),
        small: !0
    }));
}, oe = (param)=>{
    let { actions: a, padding: d = 16, onClose: r, variant: n = "default", closeButtonLabel: v } = param;
    const t = Xe(a, r, v);
    return t.length > 0 ? /* @__PURE__ */ e(Te, {
        variant: n,
        children: /* @__PURE__ */ e("div", {
            style: {
                position: "absolute",
                right: d,
                top: d,
                zIndex: 3
            },
            children: /* @__PURE__ */ e(He, {
                space: 16,
                dataAttributes: {
                    testid: "topActions"
                },
                children: t.map((l, o)=>"Icon" in l || "checkedProps" in l ? /* @__PURE__ */ e(Ta, _object_spread({}, l), o) : l)
            })
        })
    }) : /* @__PURE__ */ e(J, {});
}, Ra = (a)=>a ? typeof a == "number" ? a : ({
        "1:1": 1,
        "16:9": 16 / 9,
        "7:10": 7 / 10,
        "9:10": 9 / 10,
        auto: 0
    })[a] : 0, L = /*#__PURE__*/ I.forwardRef((param, m)=>{
    let { children: a, width: d, height: r, aspectRatio: n, dataAttributes: v, className: t, "aria-label": i, "aria-labelledby": l, "aria-description": o, "aria-describedby": b } = param;
    const c = d && r ? void 0 : Ra(n);
    return(// aria-description should be vaild, but this eslint rule is complaining about it
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ e("section", _object_spread_props(_object_spread({}, pa(v)), {
        ref: m,
        "aria-label": i,
        "aria-labelledby": l,
        "aria-description": o,
        "aria-describedby": b,
        className: ee(t, Le),
        style: _object_spread({
            width: d || "100%",
            height: r || "100%"
        }, c ? q({
            [ze.aspectRatio]: String(c)
        }) : {}),
        children: a
    })));
}), _e = (a)=>{
    const d = typeof a == "string" ? a : a == null ? void 0 : a.src, r = typeof a == "string" || a == null ? void 0 : a.srcSet;
    return /* @__PURE__ */ e(ge, {
        width: "100%",
        height: "100%",
        src: d || "",
        srcSet: r
    });
}, wa = {
    loading: {
        showSpinner: "loadingTimeout",
        play: "playing",
        pause: "paused",
        fail: "error"
    },
    loadingTimeout: {
        play: "playing",
        pause: "paused",
        fail: "error",
        reset: "loading"
    },
    playing: {
        pause: "paused",
        reset: "loading",
        fail: "error"
    },
    paused: {
        play: "playing",
        reset: "loading",
        fail: "error"
    },
    error: {
        reset: "loading"
    }
}, Sa = (a, d)=>wa[a][d] || a, Ba = (param)=>{
    let { color: a } = param;
    return /* @__PURE__ */ e(ya, {
        color: a,
        size: 16,
        delay: "0"
    });
}, ka = (param)=>{
    let { color: a } = param;
    return /* @__PURE__ */ e(va, {
        color: a,
        size: 12
    });
}, Ia = (param)=>{
    let { color: a } = param;
    return /* @__PURE__ */ e(ma, {
        color: a,
        size: 12
    });
}, $e = (a, d, r)=>{
    const { texts: n, t: v } = ae(), t = I.useRef(null), [i, l] = I.useReducer(Sa, "loading");
    I.useEffect(()=>{
        var f;
        const c = setTimeout(()=>l("showSpinner"), 2e3);
        return (f = t.current) == null || f.load(), ()=>{
            clearTimeout(c), l("reset");
        };
    }, [
        a
    ]);
    const o = I.useMemo(()=>a !== void 0 ? /* @__PURE__ */ e(fa, {
            ref: ua(t, r),
            src: a,
            width: "100%",
            height: "100%",
            poster: d,
            onError: ()=>l("fail"),
            onPause: ()=>l("pause"),
            onPlay: ()=>l("play")
        }) : void 0, [
        r,
        a,
        d
    ]), b = ()=>{
        const c = t.current;
        c && (i === "loading" ? l("showSpinner") : i === "paused" ? c.play() : i === "playing" && c.pause());
    };
    if (i === "error") return {
        video: o
    };
    const m = o ? {
        uncheckedProps: {
            Icon: i === "loadingTimeout" && !xa() ? Ba : ka,
            label: i === "loadingTimeout" ? "" : n.pauseIconButtonLabel || v(Ca)
        },
        checkedProps: {
            Icon: Ia,
            label: n.playIconButtonLabel || v(Na)
        },
        onChange: b,
        disabled: i === "loadingTimeout",
        checked: i === "paused"
    } : void 0;
    return {
        video: o,
        videoAction: m
    };
}, Re = (param)=>{
    let { headline: a, headlineRef: d, pretitle: r, pretitleAs: n, pretitleLinesMax: v, title: t, titleAs: i = "h3", titleLinesMax: l, subtitle: o, subtitleLinesMax: b, description: m, descriptionLinesMax: c, extra: f, extraRef: g, button: T, buttonLink: x, slotAlignment: C } = param;
    const { textPresets: h } = ae();
    return /* @__PURE__ */ s("div", {
        className: sa,
        children: [
            /* @__PURE__ */ s("div", {
                className: Ee,
                style: C ? {
                    height: "100%"
                } : void 0,
                children: [
                    Z(i, n) ? /* @__PURE__ */ s(J, {
                        children: [
                            t && /* @__PURE__ */ e("div", {
                                style: {
                                    paddingBottom: o || m ? 4 : 0
                                },
                                "data-testid": "title",
                                children: /* @__PURE__ */ e(te, _object_spread_props(_object_spread({}, be), {
                                    truncate: l,
                                    weight: h.cardTitle.weight,
                                    as: i,
                                    hyphens: "auto",
                                    children: t
                                }))
                            }),
                            a && /* @__PURE__ */ e("div", {
                                ref: d,
                                style: {
                                    order: -2,
                                    paddingBottom: r || t || o || m ? 8 : 0
                                },
                                "data-testid": "headline",
                                children: typeof a == "string" ? /* @__PURE__ */ e(we, {
                                    type: "promo",
                                    children: a
                                }) : a
                            }),
                            r && /* @__PURE__ */ e("div", {
                                style: {
                                    order: -1,
                                    paddingBottom: 4
                                },
                                "data-testid": "pretitle",
                                children: /* @__PURE__ */ e(F, {
                                    truncate: v,
                                    as: n,
                                    regular: !0,
                                    hyphens: "auto",
                                    children: r
                                })
                            })
                        ]
                    }) : /* @__PURE__ */ e(J, {
                        children: /* @__PURE__ */ s(J, {
                            children: [
                                r && /* @__PURE__ */ e("div", {
                                    style: {
                                        paddingBottom: 4
                                    },
                                    "data-testid": "pretitle",
                                    children: /* @__PURE__ */ e(F, {
                                        truncate: v,
                                        as: n,
                                        regular: !0,
                                        hyphens: "auto",
                                        children: r
                                    })
                                }),
                                a && /* @__PURE__ */ e("div", {
                                    ref: d,
                                    style: {
                                        order: -1,
                                        paddingBottom: r || t || o || m ? 8 : 0
                                    },
                                    "data-testid": "headline",
                                    children: typeof a == "string" ? /* @__PURE__ */ e(we, {
                                        type: "promo",
                                        children: a
                                    }) : a
                                }),
                                t && /* @__PURE__ */ e("div", {
                                    style: {
                                        paddingBottom: o || m ? 4 : 0
                                    },
                                    "data-testid": "title",
                                    children: /* @__PURE__ */ e(te, _object_spread_props(_object_spread({}, be), {
                                        truncate: l,
                                        weight: h.cardTitle.weight,
                                        as: i,
                                        hyphens: "auto",
                                        children: t
                                    }))
                                })
                            ]
                        })
                    }),
                    o && /* @__PURE__ */ e("div", {
                        style: {
                            paddingBottom: m ? 4 : 0
                        },
                        "data-testid": "subtitle",
                        children: /* @__PURE__ */ e(F, {
                            truncate: b,
                            as: "div",
                            regular: !0,
                            hyphens: "auto",
                            children: o
                        })
                    }),
                    m && // this is tricky, when headline exists, the 8px padding is added by it.
                    // Otherwise, only 4px are added by title|pretitle|subtitle, so we need to add 4px more
                    /* @__PURE__ */ e("div", {
                        style: {
                            paddingTop: r || t || o ? 4 : 0
                        },
                        "data-testid": "description",
                        children: /* @__PURE__ */ e(F, {
                            truncate: c,
                            as: "p",
                            regular: !0,
                            color: p.colors.textSecondary,
                            hyphens: "auto",
                            children: m
                        })
                    }),
                    f && /* @__PURE__ */ s("div", {
                        ref: g,
                        style: C ? {
                            display: "flex",
                            flexDirection: "column",
                            height: "100%"
                        } : void 0,
                        "data-testid": "slot",
                        children: [
                            C === "bottom" && /* @__PURE__ */ e("div", {
                                style: {
                                    flexGrow: 1
                                }
                            }),
                            f,
                            C === "content" && /* @__PURE__ */ e("div", {
                                style: {
                                    flexGrow: 1
                                }
                            })
                        ]
                    })
                ]
            }),
            (T || x) && /* @__PURE__ */ e("div", {
                className: Oe,
                children: /* @__PURE__ */ e(xe, {
                    primaryButton: T,
                    link: x
                })
            })
        ]
    });
}, td = /*#__PURE__*/ I.forwardRef((_param, X)=>{
    var { media: a, asset: d, headline: r, pretitle: n, pretitleAs: v, pretitleLinesMax: t, subtitle: i, subtitleLinesMax: l, title: o, titleAs: b = "h3", titleLinesMax: m, description: c, descriptionLinesMax: f, extra: g, actions: T, button: x, buttonLink: C, dataAttributes: h, "aria-label": w, "aria-labelledby": k, "aria-description": u, "aria-describedby": B, onClose: V, closeButtonLabel: G, slotAlignment: z } = _param, R = _object_without_properties(_param, [
        "media",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "actions",
        "button",
        "buttonLink",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "onClose",
        "closeButtonLabel",
        "slotAlignment"
    ]);
    const y = !!(R.href || R.to || R.onPress), { text: S, ref: E } = H(), { text: O, ref: A } = H(), j = w || (k ? void 0 : (Z(b, v) ? [
        o,
        S,
        n,
        i,
        c,
        O
    ] : [
        n,
        S,
        o,
        i,
        c,
        O
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ s(L, {
        dataAttributes: _object_spread({
            "component-name": "MediaCard",
            testid: "MediaCard"
        }, h),
        ref: X,
        "aria-label": y ? void 0 : w,
        "aria-labelledby": y ? void 0 : k,
        "aria-description": y ? void 0 : u,
        "aria-describedby": y ? void 0 : B,
        className: U,
        children: [
            /* @__PURE__ */ e(Q, _object_spread_props(_object_spread({
                maybe: !0
            }, R), {
                className: Y,
                "aria-label": y ? j : void 0,
                "aria-labelledby": y ? k : void 0,
                "aria-description": y ? u : void 0,
                "aria-describedby": y ? B : void 0,
                children: /* @__PURE__ */ s(pe, {
                    className: ne,
                    width: "100%",
                    height: "100%",
                    children: [
                        y && /* @__PURE__ */ e("div", {
                            className: Pe
                        }),
                        /* @__PURE__ */ s("div", {
                            className: Ce,
                            "aria-hidden": y,
                            children: [
                                /* @__PURE__ */ e("div", {
                                    style: q({
                                        [K.mediaBorderRadius]: "0px"
                                    }),
                                    children: a
                                }),
                                /* @__PURE__ */ e("div", {
                                    className: ea,
                                    children: /* @__PURE__ */ e(Re, {
                                        headline: r,
                                        headlineRef: E,
                                        pretitle: n,
                                        pretitleAs: v,
                                        pretitleLinesMax: t,
                                        title: o,
                                        titleAs: b,
                                        titleLinesMax: m,
                                        subtitle: i,
                                        subtitleLinesMax: l,
                                        description: c,
                                        descriptionLinesMax: f,
                                        extra: g,
                                        extraRef: A,
                                        button: x,
                                        buttonLink: C,
                                        slotAlignment: z
                                    })
                                }),
                                d && /* @__PURE__ */ e("div", {
                                    className: ke,
                                    style: q({
                                        [K.mediaBorderRadius]: p.borderRadii.mediaSmall
                                    }),
                                    "data-testid": "asset",
                                    children: d
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ e(oe, {
                onClose: V,
                closeButtonLabel: G,
                actions: T,
                variant: "media"
            })
        ]
    });
}), nd = /*#__PURE__*/ I.forwardRef((_param, X)=>{
    var { media: a, asset: d, headline: r, pretitle: n, pretitleAs: v, pretitleLinesMax: t, subtitle: i, subtitleLinesMax: l, title: o, titleAs: b = "h3", titleLinesMax: m, description: c, descriptionLinesMax: f, extra: g, actions: T, button: x, buttonLink: C, dataAttributes: h, "aria-label": w, "aria-labelledby": k, "aria-description": u, "aria-describedby": B, onClose: V, closeButtonLabel: G, slotAlignment: z } = _param, R = _object_without_properties(_param, [
        "media",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "actions",
        "button",
        "buttonLink",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "onClose",
        "closeButtonLabel",
        "slotAlignment"
    ]);
    const y = !!(R.href || R.to || R.onPress), S = a && a.type === ge && a.props.circular, { text: E, ref: O } = H(), { text: A, ref: j } = H(), N = w || (k ? void 0 : (Z(b, v) ? [
        o,
        E,
        n,
        i,
        c,
        A
    ] : [
        n,
        E,
        o,
        i,
        c,
        A
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ s(L, {
        ref: X,
        dataAttributes: _object_spread({
            "component-name": "NakedCard",
            testid: "NakedCard"
        }, h),
        "aria-label": y ? void 0 : w,
        "aria-labelledby": y ? void 0 : k,
        "aria-description": y ? void 0 : u,
        "aria-describedby": y ? void 0 : B,
        className: y ? U : void 0,
        children: [
            /* @__PURE__ */ e(Q, _object_spread_props(_object_spread({
                maybe: !0
            }, R), {
                className: Y,
                "aria-label": y ? N : void 0,
                "aria-labelledby": y ? k : void 0,
                "aria-description": y ? u : void 0,
                "aria-describedby": y ? B : void 0,
                children: /* @__PURE__ */ s("div", {
                    className: Ce,
                    "aria-hidden": y,
                    children: [
                        /* @__PURE__ */ s("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                y && /* @__PURE__ */ e("div", {
                                    className: ee(Ie, {
                                        [Me]: S
                                    })
                                }),
                                a
                            ]
                        }),
                        /* @__PURE__ */ e("div", {
                            className: Ge,
                            style: {
                                paddingTop: a ? 16 : 0
                            },
                            children: /* @__PURE__ */ e(Re, {
                                headline: r,
                                headlineRef: O,
                                pretitle: n,
                                pretitleAs: v,
                                pretitleLinesMax: t,
                                title: o,
                                titleAs: b,
                                titleLinesMax: m,
                                subtitle: i,
                                subtitleLinesMax: l,
                                description: c,
                                descriptionLinesMax: f,
                                extra: g,
                                extraRef: j,
                                button: x,
                                buttonLink: C,
                                slotAlignment: z
                            })
                        }),
                        d && /* @__PURE__ */ e("div", {
                            className: ke,
                            style: q({
                                [K.mediaBorderRadius]: p.borderRadii.mediaSmall
                            }),
                            "data-testid": "asset",
                            children: d
                        })
                    ]
                })
            })),
            /* @__PURE__ */ e(oe, {
                onClose: V,
                closeButtonLabel: G,
                actions: T,
                variant: "media"
            })
        ]
    });
}), od = /*#__PURE__*/ I.forwardRef((_param, C)=>{
    var { media: a, title: d, titleAs: r = "h3", titleLinesMax: n, subtitle: v, subtitleLinesMax: t, description: i, descriptionLinesMax: l, extra: o, dataAttributes: b, "aria-label": m, "aria-labelledby": c, "aria-description": f, "aria-describedby": g, slotAlignment: T } = _param, x = _object_without_properties(_param, [
        "media",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "slotAlignment"
    ]);
    const h = !!(x.href || x.to || x.onPress), w = a && a.type === ge && a.props.circular, { textPresets: k } = ae(), { text: u, ref: B } = H(), V = m || (c ? void 0 : [
        d,
        v,
        i,
        u
    ].filter(Boolean).join(" "));
    return /* @__PURE__ */ e(L, {
        ref: C,
        dataAttributes: _object_spread({
            "component-name": "SmallNakedCard",
            testid: "SmallNakedCard"
        }, b),
        "aria-label": h ? void 0 : m,
        "aria-labelledby": h ? void 0 : c,
        "aria-description": h ? void 0 : f,
        "aria-describedby": h ? void 0 : g,
        className: h ? U : void 0,
        children: /* @__PURE__ */ e(Q, _object_spread_props(_object_spread({
            maybe: !0
        }, x), {
            className: Y,
            "aria-label": h ? V : void 0,
            "aria-labelledby": h ? c : void 0,
            "aria-description": h ? f : void 0,
            "aria-describedby": h ? g : void 0,
            children: /* @__PURE__ */ s("div", {
                className: Ce,
                "aria-hidden": h,
                children: [
                    a && /* @__PURE__ */ s("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            h && /* @__PURE__ */ e("div", {
                                className: ee(Ie, {
                                    [Me]: w
                                })
                            }),
                            a
                        ]
                    }),
                    /* @__PURE__ */ s("div", {
                        className: Ge,
                        style: {
                            paddingTop: a ? 16 : 0,
                            height: T ? "100%" : void 0
                        },
                        children: [
                            /* @__PURE__ */ e("div", {
                                children: /* @__PURE__ */ s(me, {
                                    space: 4,
                                    children: [
                                        d && /* @__PURE__ */ e(te, _object_spread_props(_object_spread({}, Se), {
                                            truncate: n,
                                            weight: k.cardTitle.weight,
                                            as: r,
                                            hyphens: "auto",
                                            dataAttributes: {
                                                testid: "title"
                                            },
                                            children: d
                                        })),
                                        v && /* @__PURE__ */ e(F, {
                                            truncate: t,
                                            regular: !0,
                                            as: "p",
                                            hyphens: "auto",
                                            dataAttributes: {
                                                testid: "subtitle"
                                            },
                                            children: v
                                        }),
                                        i && /* @__PURE__ */ e(F, {
                                            truncate: l,
                                            regular: !0,
                                            as: "p",
                                            color: p.colors.textSecondary,
                                            hyphens: "auto",
                                            dataAttributes: {
                                                testid: "description"
                                            },
                                            children: i
                                        })
                                    ]
                                })
                            }),
                            o && /* @__PURE__ */ s("div", {
                                ref: B,
                                "data-testid": "slot",
                                style: T ? {
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%"
                                } : void 0,
                                children: [
                                    T === "bottom" && /* @__PURE__ */ e("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    }),
                                    o,
                                    T === "content" && /* @__PURE__ */ e("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }))
    });
}), sd = /*#__PURE__*/ I.forwardRef((_param, X)=>{
    var { asset: a, headline: d, pretitle: r, pretitleAs: n, pretitleLinesMax: v, title: t, titleAs: i = "h3", titleLinesMax: l, subtitle: o, subtitleLinesMax: b, description: m, descriptionLinesMax: c, extra: f, actions: g, button: T, buttonLink: x, dataAttributes: C, "aria-label": h, "aria-labelledby": w, "aria-description": k, "aria-describedby": u, onClose: B, closeButtonLabel: V, aspectRatio: G, slotAlignment: z } = _param, R = _object_without_properties(_param, [
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "actions",
        "button",
        "buttonLink",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "onClose",
        "closeButtonLabel",
        "aspectRatio",
        "slotAlignment"
    ]);
    const y = !!a || !!d, S = !!(R.href || R.to || R.onPress), { text: E, ref: O } = H(), { text: A, ref: j } = H(), N = Xe(g, B), M = h || (w ? void 0 : (Z(i, n) ? [
        t,
        E,
        r,
        o,
        m,
        A
    ] : [
        r,
        E,
        t,
        o,
        m,
        A
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ s(L, {
        dataAttributes: _object_spread({
            "component-name": "DataCard",
            testid: "DataCard"
        }, C),
        ref: X,
        "aria-label": S ? void 0 : h,
        "aria-labelledby": S ? void 0 : w,
        "aria-description": S ? void 0 : k,
        "aria-describedby": S ? void 0 : u,
        className: U,
        aspectRatio: G,
        children: [
            /* @__PURE__ */ e(Q, _object_spread_props(_object_spread({
                maybe: !0
            }, R), {
                className: Y,
                "aria-label": S ? M : void 0,
                "aria-labelledby": S ? w : void 0,
                "aria-description": S ? k : void 0,
                "aria-describedby": S ? u : void 0,
                children: /* @__PURE__ */ s(pe, {
                    className: ne,
                    width: "100%",
                    height: "100%",
                    children: [
                        S && /* @__PURE__ */ e("div", {
                            className: ue
                        }),
                        /* @__PURE__ */ s("div", {
                            className: aa,
                            "aria-hidden": S,
                            style: z ? {
                                height: "100%"
                            } : void 0,
                            children: [
                                /* @__PURE__ */ s(He, {
                                    space: 0,
                                    children: [
                                        /* @__PURE__ */ s(me, {
                                            space: 16,
                                            children: [
                                                a && /* @__PURE__ */ e("div", {
                                                    style: q({
                                                        [K.mediaBorderRadius]: p.borderRadii.mediaSmall
                                                    }),
                                                    "data-testid": "asset",
                                                    children: a
                                                }),
                                                /* @__PURE__ */ e(Re, {
                                                    headline: d,
                                                    headlineRef: O,
                                                    pretitle: r,
                                                    pretitleAs: n,
                                                    pretitleLinesMax: v,
                                                    title: t,
                                                    titleAs: i,
                                                    titleLinesMax: l,
                                                    subtitle: o,
                                                    subtitleLinesMax: b,
                                                    description: m,
                                                    descriptionLinesMax: c
                                                })
                                            ]
                                        }),
                                        !y && /* @__PURE__ */ e("div", {
                                            style: q({
                                                [ze.topActionsCount]: String(N.length)
                                            }),
                                            className: da
                                        })
                                    ]
                                }),
                                f && /* @__PURE__ */ e(J, {
                                    children: /* @__PURE__ */ s("div", {
                                        ref: j,
                                        "data-testid": "slot",
                                        style: z ? {
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%"
                                        } : void 0,
                                        children: [
                                            z === "bottom" && /* @__PURE__ */ e("div", {
                                                style: {
                                                    flexGrow: 1
                                                }
                                            }),
                                            f,
                                            z === "content" && /* @__PURE__ */ e("div", {
                                                style: {
                                                    flexGrow: 1
                                                }
                                            })
                                        ]
                                    })
                                }),
                                (T || x) && /* @__PURE__ */ e("div", {
                                    className: Oe,
                                    children: /* @__PURE__ */ e(xe, {
                                        primaryButton: T,
                                        link: x
                                    })
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ e(oe, {
                onClose: B,
                closeButtonLabel: V,
                actions: g,
                variant: "default"
            })
        ]
    });
}), ld = /*#__PURE__*/ I.forwardRef((_param, w)=>{
    var { asset: a, title: d, titleAs: r = "h3", titleLinesMax: n, subtitle: v, subtitleLinesMax: t, description: i, descriptionLinesMax: l, dataAttributes: o, "aria-label": b, "aria-labelledby": m, "aria-description": c, "aria-describedby": f, extra: g, isInverse: T = !1, aspectRatio: x, slotAlignment: C } = _param, h = _object_without_properties(_param, [
        "asset",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "extra",
        "isInverse",
        "aspectRatio",
        "slotAlignment"
    ]);
    const { textPresets: k } = ae(), u = !!(h.href || h.to || h.onPress), B = T ? Ne : ue, { text: V, ref: G } = H(), z = b || (f ? void 0 : [
        d,
        v,
        i,
        V
    ].filter(Boolean).join(" "));
    return /* @__PURE__ */ e(L, {
        dataAttributes: _object_spread({
            "component-name": "SnapCard",
            testid: "SnapCard"
        }, o),
        ref: w,
        className: U,
        aspectRatio: x,
        "aria-label": u ? void 0 : b,
        "aria-labelledby": u ? void 0 : m,
        "aria-description": u ? void 0 : c,
        "aria-describedby": u ? void 0 : f,
        children: /* @__PURE__ */ e(Q, _object_spread_props(_object_spread({
            maybe: !0
        }, h), {
            className: Y,
            "aria-label": u ? z : void 0,
            "aria-labelledby": u ? m : void 0,
            "aria-description": u ? c : void 0,
            "aria-describedby": u ? f : void 0,
            children: /* @__PURE__ */ s(pe, {
                className: ne,
                variant: T ? "inverse" : "default",
                width: "100%",
                height: "100%",
                children: [
                    u && /* @__PURE__ */ e("div", {
                        className: B
                    }),
                    /* @__PURE__ */ s("section", {
                        className: ra,
                        "aria-hidden": u,
                        style: C ? {
                            height: "100%"
                        } : void 0,
                        children: [
                            /* @__PURE__ */ s("div", {
                                children: [
                                    a && /* @__PURE__ */ e("div", {
                                        style: q({
                                            [K.mediaBorderRadius]: p.borderRadii.mediaSmall
                                        }),
                                        "data-testid": "asset",
                                        children: /* @__PURE__ */ e(ie, {
                                            paddingBottom: 16,
                                            children: a
                                        })
                                    }),
                                    /* @__PURE__ */ s(me, {
                                        space: 4,
                                        children: [
                                            d && /* @__PURE__ */ e(te, _object_spread_props(_object_spread({}, Se), {
                                                truncate: n,
                                                weight: k.cardTitle.weight,
                                                as: r,
                                                hyphens: "auto",
                                                dataAttributes: {
                                                    testid: "title"
                                                },
                                                children: d
                                            })),
                                            v && /* @__PURE__ */ e(F, {
                                                truncate: t,
                                                regular: !0,
                                                color: p.colors.textPrimary,
                                                as: "p",
                                                hyphens: "auto",
                                                dataAttributes: {
                                                    testid: "subtitle"
                                                },
                                                children: v
                                            }),
                                            i && /* @__PURE__ */ e(F, {
                                                truncate: l,
                                                regular: !0,
                                                color: p.colors.textSecondary,
                                                as: "p",
                                                hyphens: "auto",
                                                dataAttributes: {
                                                    testid: "description"
                                                },
                                                children: i
                                            })
                                        ]
                                    })
                                ]
                            }),
                            g && /* @__PURE__ */ s("div", {
                                ref: G,
                                "data-testid": "slot",
                                style: C ? {
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%"
                                } : void 0,
                                children: [
                                    C === "bottom" && /* @__PURE__ */ e("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    }),
                                    g,
                                    C === "content" && /* @__PURE__ */ e("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }))
    });
}), qe = (param)=>{
    let { title: a, titleAs: d = "h3", headline: r, pretitle: n, pretitleAs: v, subtitle: t, description: i, extra: l, headlineRef: o, extraRef: b } = param;
    return /* @__PURE__ */ s("div", {
        className: Ee,
        children: [
            Z(d, v) ? /* @__PURE__ */ s(J, {
                children: [
                    a && /* @__PURE__ */ e("div", {
                        style: {
                            paddingBottom: t || i ? 4 : 0
                        },
                        "data-testid": "title",
                        children: a
                    }),
                    r && /* @__PURE__ */ e("div", {
                        ref: o,
                        style: {
                            order: -2,
                            paddingBottom: n || a || t || i ? 16 : 0
                        },
                        "data-testid": "headline",
                        children: r
                    }),
                    n && /* @__PURE__ */ e("div", {
                        style: {
                            order: -1,
                            paddingBottom: 4
                        },
                        "data-testid": "pretitle",
                        children: n
                    })
                ]
            }) : /* @__PURE__ */ s(J, {
                children: [
                    n && /* @__PURE__ */ e("div", {
                        style: {
                            paddingBottom: 4
                        },
                        "data-testid": "pretitle",
                        children: n
                    }),
                    r && /* @__PURE__ */ e("div", {
                        ref: o,
                        style: {
                            order: -1,
                            paddingBottom: n || a || t || i ? 16 : 0
                        },
                        "data-testid": "headline",
                        children: r
                    }),
                    a && /* @__PURE__ */ e("div", {
                        style: {
                            paddingBottom: t || i ? 4 : 0
                        },
                        "data-testid": "title",
                        children: a
                    })
                ]
            }),
            t && /* @__PURE__ */ e("div", {
                style: {
                    paddingBottom: i ? 4 : 0
                },
                "data-testid": "subtitle",
                children: t
            }),
            i && // this is tricky, the padding between a headline and a description is 16px
            // but the padding between a title|pretitle|subtitle and a description is 8px (4px + 4px)
            /* @__PURE__ */ e("div", {
                style: {
                    paddingTop: n || a || t ? 4 : 0
                },
                "data-testid": "description",
                children: i
            }),
            l && /* @__PURE__ */ e("div", {
                ref: b,
                "data-testid": "slot",
                children: l
            })
        ]
    });
}, Je = /*#__PURE__*/ I.forwardRef((_param, A)=>{
    var { isInverse: a, backgroundImage: d, backgroundVideo: r, backgroundVideoRef: n, poster: v, asset: t, headline: i, pretitle: l, pretitleAs: o, pretitleLinesMax: b, title: m, titleAs: c = "h3", titleLinesMax: f, description: g, descriptionLinesMax: T, extra: x, button: C, secondaryButton: h, onClose: w, closeButtonLabel: k, actions: u, buttonLink: B, dataAttributes: V, width: G, height: z, aspectRatio: R, "aria-label": X, "aria-labelledby": y, "aria-description": S, "aria-describedby": E } = _param, O = _object_without_properties(_param, [
        "isInverse",
        "backgroundImage",
        "backgroundVideo",
        "backgroundVideoRef",
        "poster",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "button",
        "secondaryButton",
        "onClose",
        "closeButtonLabel",
        "actions",
        "buttonLink",
        "dataAttributes",
        "width",
        "height",
        "aspectRatio",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby"
    ]);
    const j = d !== void 0, N = r !== void 0, M = _e(d), { video: ye, videoAction: se } = $e(r, v, n), { text: de, ref: le } = H(), { text: ce, ref: he } = H();
    N && (u = se ? [
        se
    ] : []);
    const ve = Fe(), _ = j || N, $ = _ ? "0 0 16px rgba(0,0,0,0.4)" : void 0, P = (u == null ? void 0 : u.length) || w, D = !!(O.href || O.to || O.onPress), fe = j || N ? We : a ? Ne : ue, W = X || (y ? void 0 : (Z(c, o) ? [
        m,
        de,
        l,
        g,
        ce
    ] : [
        l,
        de,
        m,
        g,
        ce
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ s(L, {
        dataAttributes: V,
        ref: A,
        width: G,
        height: z,
        aspectRatio: R,
        "aria-label": D ? void 0 : X,
        "aria-labelledby": D ? void 0 : y,
        "aria-description": D ? void 0 : S,
        "aria-describedby": D ? void 0 : E,
        className: U,
        children: [
            /* @__PURE__ */ e(Q, _object_spread_props(_object_spread({
                maybe: !0
            }, O), {
                className: Y,
                "aria-label": D ? W : void 0,
                "aria-labelledby": D ? y : void 0,
                "aria-description": D ? S : void 0,
                "aria-describedby": D ? E : void 0,
                children: /* @__PURE__ */ s(Be, {
                    borderRadius: p.borderRadii.legacyDisplay,
                    className: ne,
                    width: "100%",
                    height: "100%",
                    background: j || N ? ve ? p.colors.backgroundContainerBrandOverInverse : p.colors.backgroundContainer : void 0,
                    variant: j || N ? "media" : a ? "inverse" : "default",
                    children: [
                        D && /* @__PURE__ */ e("div", {
                            className: fe
                        }),
                        /* @__PURE__ */ s("div", {
                            className: Ae,
                            "aria-hidden": D,
                            children: [
                                (j || N) && /* @__PURE__ */ e(Te, {
                                    variant: ve ? "inverse" : "default",
                                    children: /* @__PURE__ */ e("div", {
                                        className: je,
                                        children: N ? ye : M
                                    })
                                }),
                                /* @__PURE__ */ s("div", {
                                    className: Ve,
                                    style: {
                                        paddingTop: _ && !t && !P && !N ? 0 : 24
                                    },
                                    children: [
                                        t ? /* @__PURE__ */ e("div", {
                                            style: q({
                                                [K.mediaBorderRadius]: p.borderRadii.mediaSmall
                                            }),
                                            "data-testid": "asset",
                                            children: /* @__PURE__ */ e(ie, {
                                                paddingBottom: _ ? 0 : 40,
                                                paddingX: 24,
                                                children: t
                                            })
                                        }) : /* @__PURE__ */ e(ie, {
                                            paddingBottom: P || N ? _ ? 24 : 64 : 0
                                        }),
                                        /* @__PURE__ */ e("div", {
                                            className: ee(ia, {
                                                [De]: _
                                            }),
                                            children: /* @__PURE__ */ s(me, {
                                                space: 24,
                                                children: [
                                                    /* @__PURE__ */ e(qe, {
                                                        title: m ? /* @__PURE__ */ e(Ye, {
                                                            forceMobileSizes: !0,
                                                            truncate: f,
                                                            as: c,
                                                            textShadow: $,
                                                            hyphens: "auto",
                                                            children: m
                                                        }) : void 0,
                                                        titleAs: c,
                                                        headline: i,
                                                        pretitle: l ? /* @__PURE__ */ e(F, {
                                                            forceMobileSizes: !0,
                                                            truncate: b,
                                                            as: o,
                                                            regular: !0,
                                                            textShadow: $,
                                                            children: l
                                                        }) : void 0,
                                                        pretitleAs: o,
                                                        description: g ? /* @__PURE__ */ e(Ze, {
                                                            forceMobileSizes: !0,
                                                            truncate: T,
                                                            as: "p",
                                                            regular: !0,
                                                            color: _ ? p.colors.textPrimary : p.colors.textSecondary,
                                                            textShadow: $,
                                                            hyphens: "auto",
                                                            children: g
                                                        }) : void 0,
                                                        extra: x,
                                                        headlineRef: le,
                                                        extraRef: he
                                                    }),
                                                    (C || h || B) && /* @__PURE__ */ e(xe, {
                                                        primaryButton: C,
                                                        secondaryButton: h,
                                                        link: B
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ e(oe, {
                onClose: w,
                closeButtonLabel: k,
                actions: u,
                variant: j || N ? "media" : a ? "inverse" : "default"
            })
        ]
    });
}), cd = /*#__PURE__*/ I.forwardRef((_param, r)=>{
    var { dataAttributes: a } = _param, d = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ e(Je, _object_spread_props(_object_spread({}, d), {
        ref: r,
        isInverse: !0,
        dataAttributes: _object_spread({
            "component-name": "DisplayMediaCard",
            testid: "DisplayMediaCard"
        }, a)
    }));
}), hd = /*#__PURE__*/ I.forwardRef((_param, r)=>{
    var { dataAttributes: a } = _param, d = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ e(Je, _object_spread_props(_object_spread({}, d), {
        ref: r,
        dataAttributes: _object_spread({
            "component-name": "DisplayDataCard",
            testid: "DisplayDataCard"
        }, a)
    }));
}), vd = /*#__PURE__*/ I.forwardRef((_param, j)=>{
    var { dataAttributes: a, backgroundImage: d, backgroundVideo: r, poster: n, backgroundVideoRef: v, width: t, height: i, aspectRatio: l = "7:10", "aria-label": o, "aria-labelledby": b, "aria-description": m, "aria-describedby": c, actions: f, onClose: g, closeButtonLabel: T, asset: x, headline: C, pretitle: h, pretitleAs: w, pretitleLinesMax: k, title: u, titleAs: B = "h3", titleLinesMax: V, subtitle: G, subtitleLinesMax: z, description: R, descriptionLinesMax: X, extra: y, variant: S, isInverse: E, backgroundColor: O } = _param, A = _object_without_properties(_param, [
        "dataAttributes",
        "backgroundImage",
        "backgroundVideo",
        "poster",
        "backgroundVideoRef",
        "width",
        "height",
        "aspectRatio",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "actions",
        "onClose",
        "closeButtonLabel",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "variant",
        "isInverse",
        "backgroundColor"
    ]);
    const N = d !== void 0, M = r !== void 0, ye = _e(d), { video: se, videoAction: de } = $e(r, n, v), { text: le, ref: ce } = H(), { text: he, ref: ve } = H();
    M && (f = de ? [
        de
    ] : []);
    const _ = Fe(), $ = N || M, P = $ ? "0 0 16px rgba(0,0,0,0.4)" : void 0, D = (f == null ? void 0 : f.length) || g, { textPresets: fe } = ae(), W = !!(A.href || A.to || A.onPress), re = S || (E ? "inverse" : "default"), Ke = ()=>re === "media" || N || M ? _ ? p.colors.backgroundContainerBrandOverInverse : p.colors.backgroundContainer : O || ({
            default: p.colors.backgroundContainer,
            inverse: _ ? p.colors.backgroundContainerBrandOverInverse : p.colors.backgroundBrand,
            alternative: p.colors.backgroundAlternative
        })[re], Qe = N || M ? We : re === "inverse" ? Ne : ue, Ue = o || (b ? void 0 : (Z(B, w) ? [
        u,
        le,
        h,
        G,
        R,
        he
    ] : [
        h,
        le,
        u,
        G,
        R,
        he
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ s(L, {
        width: t,
        height: i,
        dataAttributes: _object_spread({
            "component-name": "PosterCard",
            testid: "PosterCard"
        }, a),
        ref: j,
        aspectRatio: l,
        className: U,
        "aria-label": W ? void 0 : o,
        "aria-labelledby": W ? void 0 : b,
        "aria-description": W ? void 0 : m,
        "aria-describedby": W ? void 0 : c,
        children: [
            /* @__PURE__ */ e(Q, _object_spread_props(_object_spread({
                maybe: !0
            }, A), {
                className: Y,
                "aria-label": W ? Ue : void 0,
                "aria-labelledby": W ? b : void 0,
                "aria-description": W ? m : void 0,
                "aria-describedby": W ? c : void 0,
                children: /* @__PURE__ */ s(Be, {
                    borderRadius: p.borderRadii.legacyDisplay,
                    className: ne,
                    width: "100%",
                    height: "100%",
                    background: Ke(),
                    variant: N || M ? "media" : N || M || re === "inverse" ? "inverse" : "default",
                    children: [
                        W && /* @__PURE__ */ e("div", {
                            className: Qe
                        }),
                        /* @__PURE__ */ s("div", {
                            className: Ae,
                            "aria-hidden": W,
                            children: [
                                (N || M) && /* @__PURE__ */ e(Te, {
                                    variant: _ ? "inverse" : "default",
                                    children: /* @__PURE__ */ e("div", {
                                        className: je,
                                        children: M ? se : ye
                                    })
                                }),
                                /* @__PURE__ */ s("div", {
                                    className: ee(Ve, $ && !x && !D && !M ? void 0 : x ? ta : na),
                                    children: [
                                        x ? /* @__PURE__ */ e("div", {
                                            style: q({
                                                [K.mediaBorderRadius]: p.borderRadii.mediaSmall
                                            }),
                                            "data-testid": "asset",
                                            children: /* @__PURE__ */ e(ie, {
                                                paddingBottom: $ ? 0 : 40,
                                                paddingX: {
                                                    mobile: 16,
                                                    desktop: 24
                                                },
                                                children: x
                                            })
                                        }) : /* @__PURE__ */ e(ie, {
                                            paddingBottom: D || M ? $ ? 24 : 64 : 0
                                        }),
                                        /* @__PURE__ */ e("div", {
                                            className: ee(oa, {
                                                [De]: $
                                            }),
                                            children: /* @__PURE__ */ e(qe, {
                                                title: u ? /* @__PURE__ */ e(te, _object_spread_props(_object_spread({}, be), {
                                                    truncate: V,
                                                    weight: fe.cardTitle.weight,
                                                    as: B,
                                                    children: u
                                                })) : void 0,
                                                titleAs: B,
                                                headline: C,
                                                pretitle: h ? /* @__PURE__ */ e(F, {
                                                    forceMobileSizes: !0,
                                                    truncate: k,
                                                    as: w,
                                                    regular: !0,
                                                    textShadow: P,
                                                    children: h
                                                }) : void 0,
                                                pretitleAs: w,
                                                subtitle: G ? /* @__PURE__ */ e(F, {
                                                    forceMobileSizes: !0,
                                                    truncate: z,
                                                    as: "div",
                                                    regular: !0,
                                                    textShadow: P,
                                                    children: G
                                                }) : void 0,
                                                description: R ? /* @__PURE__ */ e(F, {
                                                    forceMobileSizes: !0,
                                                    truncate: X,
                                                    as: "p",
                                                    regular: !0,
                                                    textShadow: P,
                                                    color: $ ? p.colors.textPrimary : p.colors.textSecondary,
                                                    children: R
                                                }) : void 0,
                                                headlineRef: ce,
                                                extra: y,
                                                extraRef: ve
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ e(oe, {
                onClose: g,
                closeButtonLabel: T,
                actions: f,
                variant: N || M ? "media" : re === "inverse" ? "inverse" : "default"
            })
        ]
    });
});
export { Ta as CardActionIconButton, Ba as CardActionSpinner, oe as CardActionsGroup, sd as DataCard, hd as DisplayDataCard, cd as DisplayMediaCard, td as MediaCard, nd as NakedCard, vd as PosterCard, od as SmallNakedCard, ld as SnapCard, H as useInnerText, $e as useVideoWithControls };
