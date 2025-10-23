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
import { jsx as e, jsxs as p } from "react/jsx-runtime";
import * as H from "react";
import { useTheme as F, useScreenSize as A } from "./hooks.js";
import K from "./button-fixed-footer-layout.js";
import { VIVO_SKIN as y, VIVO_NEW_SKIN as z } from "./skins/constants.js";
import { useSetOverscrollColor as M } from "./overscroll-color-context.js";
import C from "./icons/icon-success.js";
import O from "./icons/icon-success-vivo.js";
import $ from "./icons/icon-error.js";
import G from "./icons/icon-info.js";
import { isWebViewBridgeAvailable as P, requestVibration as U } from "@tef-novum/webview-bridge";
import { isRunningAcceptanceTest as X } from "./utils/platform.js";
import { Text2 as J, Text6 as Q, Text3 as Y } from "./text.js";
import k from "./box.js";
import { InternalBoxed as Z } from "./boxed.js";
import x, { ResetResponsiveLayout as ee } from "./responsive-layout.js";
import u from "./stack.js";
import m from "classnames";
import re from "./button-group.js";
import { vars as n } from "./skins/skin-contract.css-mistica.js";
import { container as te, innerContainer as oe, innerContainerWithButtons as se, backgroundBrand as ce, assetContainer as ae, feedbackData as ie, feedbackTextAppearFast as ne, feedbackTextAppearMedium as B, feedbackTextAppearSlow as de, desktopContainer as le, desktopContent as me, desktopImage as ue } from "./feedback.css-mistica.js";
import R from "./icons/icon-success-vivo-new.js";
const D = (r)=>!X(r), E = (param)=>{
    let { primaryButton: r, secondaryButton: t } = param;
    return !!r || !!t;
}, V = (r)=>{
    P() && U(r).catch(()=>{});
}, W = (r)=>{
    H.useEffect(()=>{
        let t;
        return r === "success" && (t = setTimeout(()=>V("success"), 700)), r === "error" && (t = setTimeout(()=>V("error"), 1e3)), ()=>{
            clearTimeout(t);
        };
    }, [
        r
    ]);
}, _ = (param, c)=>{
    let { asset: r, title: t, description: o, extra: s } = param;
    const a = o && Array.isArray(o) ? /* @__PURE__ */ e(u, {
        space: 16,
        children: o.map((d, l)=>/* @__PURE__ */ e("p", {
                children: d
            }, l))
    }) : o;
    return /* @__PURE__ */ p(u, {
        space: 24,
        children: [
            /* @__PURE__ */ e("div", {
                className: ae,
                "data-testid": "icon",
                children: r
            }),
            /* @__PURE__ */ p(u, {
                space: 16,
                className: m(ie),
                children: [
                    /* @__PURE__ */ e("div", {
                        className: m(c && ne),
                        "data-testid": "title",
                        children: /* @__PURE__ */ e(Q, {
                            as: "h1",
                            children: t
                        })
                    }),
                    a && /* @__PURE__ */ e("div", {
                        className: m(c && B),
                        "data-testid": "description",
                        children: a && /* @__PURE__ */ e(Y, {
                            regular: !0,
                            color: n.colors.textSecondary,
                            children: a
                        })
                    }),
                    s && /* @__PURE__ */ e("div", {
                        className: m(c && (a ? de : B)),
                        "data-testid": "slot",
                        children: s
                    })
                ]
            })
        ]
    });
}, q = (r, t)=>{
    const o = E(t);
    return /* @__PURE__ */ p(u, {
        space: {
            desktop: 40,
            mobile: 24
        },
        children: [
            r,
            o && /* @__PURE__ */ e(re, _object_spread({}, t))
        ]
    });
}, w = (param)=>{
    let { isInverse: r, body: t, imageFit: o, imageUrl: s, dataAttributes: c } = param;
    return /* @__PURE__ */ e(Z, {
        borderRadius: n.borderRadii.legacyDisplay,
        desktopOnly: !0,
        variant: r ? "inverse" : "default",
        dataAttributes: c,
        children: /* @__PURE__ */ p("div", {
            className: le,
            children: [
                /* @__PURE__ */ e("div", {
                    className: me,
                    children: /* @__PURE__ */ e(k, {
                        padding: {
                            desktop: 64,
                            mobile: 0
                        },
                        paddingTop: 0,
                        children: t
                    })
                }),
                s && /* @__PURE__ */ e("div", {
                    className: ue,
                    "data-testid": "image",
                    style: {
                        backgroundImage: `url(${s})`,
                        backgroundPosition: o === "fit" ? "bottom right" : "center right",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: o === "fit" ? "contain" : "cover",
                        flex: 1,
                        maxWidth: 600
                    }
                })
            ]
        })
    });
}, pe = ()=>(M({
        topColor: n.colors.backgroundBrandTop,
        bottomColor: "transparent"
    }), null), I = (param)=>{
    let { title: r, description: t, extra: o, primaryButton: s, secondaryButton: c, link: a, hapticFeedback: d, asset: l, animateText: f = !1, isInverse: i = !1, unstable_inlineInDesktop: h, imageUrl: S, imageFit: N, dataAttributes: g } = param;
    W(d);
    const { platformOverrides: v, isDarkMode: b } = F(), { isTabletOrSmaller: L } = A(), j = E({
        primaryButton: s,
        secondaryButton: c,
        link: a
    }), T = _({
        asset: l,
        title: r,
        description: t,
        extra: o
    }, f && D(v));
    return !L && h ? q(T, {
        primaryButton: s,
        secondaryButton: c,
        link: a
    }) : /* @__PURE__ */ e("div", {
        style: {
            position: "relative"
        },
        children: /* @__PURE__ */ p(x, {
            children: [
                i && /* @__PURE__ */ e(pe, {}),
                /* @__PURE__ */ e(k, {
                    paddingTop: {
                        desktop: 64,
                        mobile: 0
                    },
                    children: w({
                        isInverse: i,
                        body: // We need this reset because the ButtonFixedFooterLayout adds a ResponsiveLayout that
                        // doesn't expand when nested in mobile. This can cause double margin when footer is not fixed
                        /* @__PURE__ */ e(ee, {
                            skipDesktop: !0,
                            children: /* @__PURE__ */ e(K, {
                                isFooterVisible: j,
                                button: s,
                                secondaryButton: c,
                                link: a,
                                footerBgColor: i && !b ? n.colors.backgroundBrandBottom : void 0,
                                containerBgColor: i ? n.colors.backgroundBrand : n.colors.background,
                                children: /* @__PURE__ */ e(x, {
                                    children: /* @__PURE__ */ e("div", {
                                        className: te,
                                        children: /* @__PURE__ */ e("div", {
                                            className: m(oe, {
                                                [se]: s || c || a
                                            }),
                                            children: T
                                        })
                                    })
                                })
                            })
                        }),
                        imageFit: N,
                        imageUrl: S,
                        dataAttributes: g
                    })
                })
            ]
        })
    });
}, Ee = (_param)=>{
    var { dataAttributes: r } = _param, t = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    const { isTabletOrSmaller: o } = A(), { skinName: s, themeVariants: c } = F();
    return /* @__PURE__ */ e(I, _object_spread_props(_object_spread({}, t), {
        isInverse: c.successFeedback === "inverse" && (!t.unstable_inlineInDesktop || o),
        hapticFeedback: "success",
        asset: s === y ? /* @__PURE__ */ e(O, {
            size: "100%"
        }) : s === z ? /* @__PURE__ */ e(R, {
            size: "100%"
        }) : /* @__PURE__ */ e(C, {
            size: "100%"
        }),
        animateText: !0,
        imageUrl: t.imageUrl,
        imageFit: t.imageFit,
        dataAttributes: _object_spread({
            "component-name": "SuccessFeedbackScreen",
            testid: "SuccessFeedbackScreen"
        }, r)
    }));
}, We = (_param)=>{
    var { errorReference: r, dataAttributes: t } = _param, o = _object_without_properties(_param, [
        "errorReference",
        "dataAttributes"
    ]);
    return /* @__PURE__ */ e(I, _object_spread_props(_object_spread({}, o), {
        hapticFeedback: "error",
        asset: /* @__PURE__ */ e($, {
            size: "100%"
        }),
        animateText: !0,
        dataAttributes: _object_spread({
            "component-name": "ErrorFeedbackScreen",
            testid: "ErrorFeedbackScreen"
        }, t),
        extra: /* @__PURE__ */ e(u, {
            space: 16,
            children: r && /* @__PURE__ */ e(J, {
                color: n.colors.textSecondary,
                regular: !0,
                children: r
            })
        })
    }));
}, _e = (_param)=>{
    var { dataAttributes: r, Icon: t = G } = _param, o = _object_without_properties(_param, [
        "dataAttributes",
        "Icon"
    ]);
    return /* @__PURE__ */ e(I, _object_spread({
        dataAttributes: _object_spread({
            "component-name": "InfoFeedbackScreen",
            testid: "InfoFeedbackScreen"
        }, r),
        asset: /* @__PURE__ */ e(t, {
            size: "100%"
        })
    }, o));
}, qe = (param)=>{
    let { title: r, description: t, extra: o, primaryButton: s, secondaryButton: c, link: a, imageUrl: d, imageFit: l, dataAttributes: f } = param;
    W("success");
    const { skinName: i, platformOverrides: h, themeVariants: S } = F(), g = _({
        asset: i === y ? /* @__PURE__ */ e(O, {
            size: "100%"
        }) : i === z ? /* @__PURE__ */ e(R, {
            size: "100%"
        }) : /* @__PURE__ */ e(C, {
            size: "100%"
        }),
        title: r,
        description: t,
        extra: o
    }, D(h)), v = q(g, {
        primaryButton: s,
        secondaryButton: c,
        link: a
    }), b = S.successFeedback === "inverse";
    return w({
        isInverse: b,
        body: /* @__PURE__ */ e("div", {
            className: b ? ce : void 0,
            children: /* @__PURE__ */ e(k, {
                paddingX: {
                    mobile: 16,
                    tablet: 24,
                    desktop: 0
                },
                children: /* @__PURE__ */ e(k, {
                    paddingBottom: {
                        desktop: 0,
                        mobile: 48
                    },
                    paddingTop: 64,
                    children: v
                })
            })
        }),
        imageFit: l,
        imageUrl: d,
        dataAttributes: _object_spread({
            "component-name": "SuccessFeedback",
            testid: "SuccessFeedback"
        }, f)
    });
};
export { We as ErrorFeedbackScreen, I as FeedbackScreen, _e as InfoFeedbackScreen, qe as SuccessFeedback, Ee as SuccessFeedbackScreen };
