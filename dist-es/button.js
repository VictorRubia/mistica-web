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
import { jsx as e, jsxs as T, Fragment as W } from "react/jsx-runtime";
import * as r from "react";
import E from "classnames";
import F from "./spinner.js";
import { BaseTouchable as L } from "./touchable.js";
import { useIsInverseOrMediaVariant as M } from "./theme-variant-context.js";
import { useForm as j } from "./form-context.js";
import { applyCssVars as Y, pxToRem as Z } from "./utils/css.js";
import { Text as H, Text3 as K } from "./text.js";
import X from "./box.js";
import { getTextFromChildren as D } from "./utils/common.js";
import { useTrackingConfig as q, eventNames as G, eventCategories as J, eventActions as V } from "./utils/analytics.js";
import { useTheme as N } from "./hooks.js";
import { flattenChildren as Q } from "./skins/utils.js";
import { linkMinWidth as U, buttonMinWidth as p, inverseButtonVariants as tt, buttonVariants as et, small as nt, isLoading as it, buttonVars as at, borderSize as B, buttonPaddingX as y, buttonPaddingY as w, smallLink as O, textContent as rt, iconMargin as C, chevronMarginLeft as ot, loadingFiller as lt, loadingContent as st, iconSize as z, spinnerSize as A } from "./button.css-mistica.js";
import { VIVO_NEW_SKIN as dt } from "./skins/constants.js";
const ct = (param)=>{
    let { element: t, small: i } = param;
    const { textPresets: n } = N();
    return i ? /* @__PURE__ */ e(H, {
        size: 14,
        lineHeight: 20,
        weight: n.button.weight,
        truncate: 1,
        color: "inherit",
        as: "div",
        children: t
    }) : /* @__PURE__ */ e(K, {
        weight: n.button.weight,
        truncate: 1,
        color: "inherit",
        as: "div",
        children: t
    });
}, $ = (param)=>{
    let { small: t, content: i, defaultIconSize: n } = param;
    const a = Q(i), g = a.length, l = [];
    let d = [];
    const m = ()=>{
        l.push(/* @__PURE__ */ e(r.Fragment, {
            children: /* @__PURE__ */ e(ct, {
                element: d,
                small: t
            })
        }, l.length)), d = [];
    };
    return a.forEach((o, c)=>{
        const u = c === 0, f = c === g - 1;
        if (/*#__PURE__*/ r.isValidElement(o)) {
            d.length && m();
            const I = o.props.size !== void 0 ? Z(o.props.size) : n;
            l.push(/* @__PURE__ */ e("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    marginLeft: u ? 0 : C,
                    marginRight: f ? 0 : C
                },
                children: /*#__PURE__*/ r.cloneElement(o, {
                    size: I
                })
            }, l.length));
        } else d.push(o), f && m();
    }), l;
}, ut = ()=>{
    const { skinName: t } = N();
    return t === dt ? /* @__PURE__ */ e("svg", {
        width: "0.5em",
        height: "0.5em",
        viewBox: "0 0 8 8",
        fill: "none",
        children: /* @__PURE__ */ e("path", {
            d: "M5.11111 3.68886L2.73534 1.30383C2.63671 1.21526 2.51339 1.1909 2.4052 1.20285C2.29952 1.21452 2.19613 1.26162 2.12144 1.33458C2.04957 1.40271 2.00869 1.50793 2.00126 1.60783C1.9934 1.71334 2.02104 1.83978 2.12131 1.93639L4.33333 4.07775L2.11406 6.20689L2.11057 6.21056L2.10821 6.21315L2.10381 6.21806C2.01525 6.31669 1.99089 6.44001 2.00284 6.5482C2.01451 6.65388 2.06161 6.75727 2.13456 6.83196C2.20269 6.90383 2.30792 6.94471 2.40782 6.95215C2.51332 6.96 2.63976 6.93237 2.73638 6.83209L5.11111 4.46664C5.32589 4.25186 5.32589 3.90364 5.11111 3.68886Z",
            fill: "currentColor"
        })
    }) : /* @__PURE__ */ e("svg", {
        width: "0.5em",
        height: "0.5em",
        viewBox: "0 0 8 8",
        children: /* @__PURE__ */ e("path", {
            d: "M6.32595 3.46071L3.03801 0.158595L3.03292 0.153747L3.032 0.152903L3.02931 0.150463L3.02848 0.149738L3.02248 0.144353C2.88533 0.021206 2.71386 -0.0126731 2.56343 0.00394249C2.41648 0.0201739 2.27272 0.0856702 2.16886 0.18711C2.06893 0.281844 2.01209 0.42816 2.00175 0.567065C1.99083 0.71377 2.02925 0.889583 2.16869 1.02392L5.24446 4.00145L2.15859 6.96199L2.15375 6.96708L2.1529 6.968L2.15046 6.97069L2.14974 6.97152L2.14435 6.97752C2.02121 7.11467 1.98733 7.28614 2.00394 7.43657C2.02017 7.58352 2.08567 7.72728 2.18711 7.83114C2.28184 7.93107 2.42816 7.98791 2.56706 7.99825C2.71377 8.00917 2.88958 7.97075 3.02392 7.83132L6.32595 4.5422V4.5422C6.6246 4.24355 6.6246 3.75935 6.32595 3.46071V3.46071Z",
            fill: "currentColor"
        })
    });
}, mt = (param)=>{
    let { showSpinner: t, children: i, small: n, loadingText: a, shouldRenderSpinner: g, setShouldRenderSpinner: l, StartIcon: d, EndIcon: m, withChevron: o } = param;
    const c = n ? z.small : z.default, u = n ? A.small : A.default, f = $({
        small: n,
        content: i,
        defaultIconSize: c
    }), s = $({
        small: n,
        content: a,
        defaultIconSize: c
    });
    return /* @__PURE__ */ T(W, {
        children: [
            /* @__PURE__ */ T("div", {
                "aria-hidden": t ? !0 : void 0,
                className: rt,
                children: [
                    d && /* @__PURE__ */ e("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginRight: C
                        },
                        "data-testid": "startIcon",
                        children: /* @__PURE__ */ e(d, {
                            size: c,
                            color: "currentColor"
                        })
                    }),
                    /* @__PURE__ */ T("div", {
                        style: {
                            display: "flex",
                            alignItems: "baseline"
                        },
                        children: [
                            f,
                            o && /* @__PURE__ */ e("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: ot
                                },
                                children: /* @__PURE__ */ e(ut, {})
                            })
                        ]
                    }),
                    m && !o && /* @__PURE__ */ e("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginLeft: C
                        },
                        "data-testid": "endIcon",
                        children: /* @__PURE__ */ e(m, {
                            size: c,
                            color: "currentColor"
                        })
                    })
                ]
            }),
            /* @__PURE__ */ e("div", {
                className: lt,
                "aria-hidden": !0,
                style: a ? {
                    paddingLeft: u,
                    paddingRight: `calc(${C} + 2 * ${n ? y.small : y.default})`
                } : void 0,
                children: s
            }),
            /* @__PURE__ */ T("div", {
                "aria-hidden": t ? void 0 : !0,
                className: st,
                onTransitionEnd: ()=>{
                    t !== g && l(t);
                },
                children: [
                    g ? /* @__PURE__ */ e(F, {
                        "aria-hidden": !!a,
                        color: "currentcolor",
                        delay: "0s",
                        size: u
                    }) : /* @__PURE__ */ e("div", {
                        style: {
                            display: "inline-block",
                            width: u,
                            height: u
                        }
                    }),
                    a ? /* @__PURE__ */ e(X, {
                        paddingLeft: 8,
                        dataAttributes: {
                            testid: "loadingText"
                        },
                        children: s
                    }) : null
                ]
            })
        ]
    });
}, k = /*#__PURE__*/ r.forwardRef((t, i)=>{
    var _t_withChevron;
    const { eventFormat: n } = q(), { formStatus: a, formId: g } = j(), l = M(), { loadingText: d } = t, m = !!t.submit, o = a === "sending", { isDarkMode: c } = N(), [u, f] = r.useState(!1), s = t.showSpinner || o && m || u, I = (_t_withChevron = t.withChevron) !== null && _t_withChevron !== void 0 ? _t_withChevron : t.buttonType.startsWith("link") && (!!t.href || !!t.to), [x, P] = r.useState(!!s);
    r.useEffect(()=>{
        s && !x && P(!0);
    }, [
        s,
        x,
        a
    ]);
    var _t_trackingEvent;
    const _ = ()=>{
        let b, h;
        switch(t.buttonType){
            case "link":
                b = "link", h = V.linkTapped;
                break;
            case "linkDanger":
                b = "danger_link", h = V.linkTapped;
                break;
            default:
                b = `${t.buttonType}_button`, h = `${t.buttonType}_button_tapped`;
                break;
        }
        return n === "google-analytics-4" ? {
            name: G.userInteraction,
            component_type: b,
            component_copy: D(t.children)
        } : {
            category: J.userInteraction,
            action: h,
            label: D(t.children)
        };
    }, R = t.buttonType.startsWith("link") ? U : p, S = t.buttonType === "linkDanger" && c && l ? "linkDangerDark" : t.buttonType, v = {
        ref: i,
        className: E(l ? tt[S] : et[S], t.className, {
            [nt]: t.small,
            [it]: s
        }),
        style: _object_spread(_object_spread_props(_object_spread({}, Y({
            [at.minWidth]: t.small ? R.small : R.default
        }), t.bleedLeft ? {
            marginLeft: `calc(-1 * (${B} + ${t.small ? y.small : y.default}))`
        } : void 0, t.bleedRight ? {
            marginRight: `calc(-1 * (${B} + ${t.small ? y.small : y.default}))`
        } : void 0, t.bleedY ? {
            marginTop: `calc(-1 * (${B} + ${t.small ? w.small : w.default}))`,
            marginBottom: `calc(-1 * (${B} + ${t.small ? w.small : w.default}))`
        } : void 0), {
            cursor: t.fake ? "pointer" : void 0
        }), t.style),
        trackingEvent: (_t_trackingEvent = t.trackingEvent) !== null && _t_trackingEvent !== void 0 ? _t_trackingEvent : t.trackEvent ? _() : void 0,
        dataAttributes: t.dataAttributes,
        "aria-label": t["aria-label"],
        "aria-labelledby": t["aria-labelledby"],
        "aria-controls": t["aria-controls"],
        "aria-expanded": t["aria-expanded"],
        "aria-haspopup": t["aria-haspopup"],
        "aria-current": t["aria-current"],
        "aria-description": t["aria-description"],
        "aria-describedby": t["aria-describedby"],
        tabIndex: t.tabIndex,
        children: mt({
            showSpinner: s,
            shouldRenderSpinner: x,
            setShouldRenderSpinner: P,
            children: t.children,
            loadingText: d,
            small: t.small,
            StartIcon: t.StartIcon,
            EndIcon: t.EndIcon,
            withChevron: I
        }),
        disabled: t.disabled || s || o,
        role: t.role
    };
    if (process.env.NODE_ENV !== "production" && (t.to === "" || t.href === "")) throw Error("to or href props are empty strings");
    if (t.fake) return /* @__PURE__ */ e(L, _object_spread({
        maybe: !0
    }, v));
    if (t.submit) return /* @__PURE__ */ e(L, _object_spread({
        type: "submit",
        formId: g,
        onPress: ()=>{}
    }, v));
    if (t.onPress) return /* @__PURE__ */ e(L, _object_spread_props(_object_spread({}, v), {
        onPress: (b)=>{
            const h = t.onPress(b);
            h && (f(!0), h.finally(()=>f(!1)));
        }
    }));
    if (t.to || t.to === "") return /* @__PURE__ */ e(L, _object_spread_props(_object_spread({}, v), {
        to: t.to,
        newTab: t.newTab,
        fullPageOnWebView: t.fullPageOnWebView,
        onNavigate: t.onNavigate
    }));
    if (t.href || t.href === "") return /* @__PURE__ */ e(L, _object_spread_props(_object_spread({}, v), {
        href: t.href,
        newTab: t.newTab,
        loadOnTop: t.loadOnTop,
        onNavigate: t.onNavigate
    }));
    if (process.env.NODE_ENV !== "production") throw Error("Bad button props");
    return null;
}), Nt = /*#__PURE__*/ r.forwardRef((_param, a)=>{
    var { dataAttributes: t, className: i } = _param, n = _object_without_properties(_param, [
        "dataAttributes",
        "className"
    ]);
    return /* @__PURE__ */ e(k, _object_spread_props(_object_spread({
        dataAttributes: _object_spread({
            "component-name": "ButtonLink",
            testid: "ButtonLink"
        }, t),
        className: E(i, {
            [O]: n.small
        })
    }, n), {
        ref: a,
        buttonType: "link"
    }));
}), Pt = /*#__PURE__*/ r.forwardRef((_param, a)=>{
    var { dataAttributes: t, className: i } = _param, n = _object_without_properties(_param, [
        "dataAttributes",
        "className"
    ]);
    return /* @__PURE__ */ e(k, _object_spread_props(_object_spread({
        dataAttributes: _object_spread({
            "component-name": "ButtonLinkDanger",
            testid: "ButtonLinkDanger"
        }, t),
        className: E(i, {
            [O]: n.small
        })
    }, n), {
        withChevron: !1,
        ref: a,
        buttonType: "linkDanger"
    }));
}), Rt = /*#__PURE__*/ r.forwardRef((_param, n)=>{
    var { dataAttributes: t } = _param, i = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ e(k, _object_spread_props(_object_spread({
        dataAttributes: _object_spread({
            "component-name": "ButtonPrimary",
            testid: "ButtonPrimary"
        }, t)
    }, i), {
        ref: n,
        buttonType: "primary"
    }));
}), St = /*#__PURE__*/ r.forwardRef((_param, n)=>{
    var { dataAttributes: t } = _param, i = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ e(k, _object_spread_props(_object_spread({
        dataAttributes: _object_spread({
            "component-name": "ButtonSecondary",
            testid: "ButtonSecondary"
        }, t)
    }, i), {
        ref: n,
        buttonType: "secondary"
    }));
}), Dt = /*#__PURE__*/ r.forwardRef((_param, n)=>{
    var { dataAttributes: t } = _param, i = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ e(k, _object_spread_props(_object_spread({
        dataAttributes: _object_spread({
            "component-name": "ButtonDanger",
            testid: "ButtonDanger"
        }, t)
    }, i), {
        ref: n,
        buttonType: "danger"
    }));
});
export { Dt as ButtonDanger, Nt as ButtonLink, Pt as ButtonLinkDanger, Rt as ButtonPrimary, St as ButtonSecondary };
