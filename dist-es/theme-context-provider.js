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
import { jsxs as P, Fragment as _, jsx as r } from "react/jsx-runtime";
import * as n from "react";
import { assignInlineVars as h } from "@vanilla-extract/dynamic";
import { DialogRoot as $ } from "./dialog-context.js";
import y from "./screen-size-context-provider.js";
import { dimensions as F, getMisticaLinkComponent as N, NAVBAR_HEIGHT_MOBILE as j } from "./theme.js";
import { getPlatform as E, isInsideNovumNativeApp as z } from "./utils/platform.js";
import L from "./theme-context.js";
import { useIsomorphicLayoutEffect as T } from "./hooks.js";
import A from "./tab-focus.js";
import B from "./modal-context-provider.js";
import G from "./tooltip-context-provider.js";
import { DocumentVisibilityProvider as W } from "./utils/document-visibility.js";
import { AspectRatioSupportProvider as q } from "./utils/aspect-ratio-support.js";
import { TrackingConfig as K } from "./utils/analytics.js";
import { vars as w } from "./skins/skin-contract.css-mistica.js";
import { fromHexToRgb as J } from "./utils/color.js";
import { defaultTextPresetsConfig as Q, defaultBorderRadiiConfig as S, defaultThemeVariantsConfig as U } from "./skins/defaults.js";
import { isClientSide as O } from "./utils/environment.js";
import { PACKAGE_VERSION as V } from "./package-version.js";
import { SnackbarRoot as X } from "./snackbar-context.js";
import { mapToWeight as R } from "./text.js";
import { tabletOrSmaller as Y } from "./media-queries.css-mistica.js";
import { themeVarsContract as Z, textPresetResponsiveVarsContract as ee, themeVars as te } from "./theme-context.css-mistica.js";
import { localeToLanguage as re } from "./utils/locale.js";
if (process.env.NODE_ENV !== "production" && O()) {
    if (window.__mistica_version__ && window.__mistica_version__ !== V) throw new Error("There is more than one version of @telefonica/mistica running on the same page");
    window.__mistica_version__ = V;
}
const oe = "(prefers-color-scheme: dark)", se = ()=>{
    const [e, c] = n.useState(!1);
    return T(()=>{
        if (!window.matchMedia) return;
        const a = window.matchMedia(oe), i = ()=>{
            c(a.matches);
        };
        return a.addEventListener("change", i), i(), ()=>{
            a.removeEventListener("change", i);
        };
    }, []), e;
}, ie = ()=>(e)=>e, ne = (e)=>({
        headerMobileHeight: (e == null ? void 0 : e.headerMobileHeight) === "mistica" ? j : e == null ? void 0 : e.headerMobileHeight
    }), ae = ()=>{
    const e = n.useRef(null), [c, a] = n.useState(!1), [i, v] = n.useState(!0);
    return T(()=>{
        var d;
        if (i) v(!1);
        else {
            const u = (d = e.current) == null ? void 0 : d.parentElement;
            u && (u.style.isolation = "isolate", a(!0));
        }
    }, [
        i
    ]), c || !O() || i ? null : /* @__PURE__ */ r("div", {
        ref: e,
        style: {
            display: "none"
        }
    });
}, le = (param)=>{
    let { theme: e, children: c, as: a, withoutStyles: i = !1 } = param;
    var _e_colorScheme, _e_skin_borderRadii;
    const v = se(), d = (_e_colorScheme = e.colorScheme) !== null && _e_colorScheme !== void 0 ? _e_colorScheme : "auto", u = e.skin.colors, H = _object_spread({}, e.skin.colors, e.skin.darkModeColors), g = d === "auto" && v || d === "dark", p = g ? H : u, x = re(e.i18n.locale), b = n.useCallback(function(o) {
        for(var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            s[_key - 1] = arguments[_key];
        }
        const t = o[x] || o.en;
        return s.length ? t.replace(/\d+\$s/g, (l)=>{
            var _s_;
            return String((_s_ = s[parseInt(l) - 1]) !== null && _s_ !== void 0 ? _s_ : l);
        }) : t;
    }, [
        x
    ]), m = n.useMemo(()=>{
        const o = _object_spread({
            platform: E(),
            insideNovumNativeApp: z()
        }, e.platformOverrides), s = Object.entries(Q).map((param)=>{
            let [l, k] = param;
            var f;
            return {
                [l]: _object_spread({}, k, (f = e.skin.textPresets) == null ? void 0 : f[l])
            };
        }), t = Object.assign({}, ...s);
        var _e_skin_borderRadii, _e_skin_themeVariants, _e_useHrefDecorator, _e_preventCopyInFormFields;
        return {
            skinName: e.skin.name,
            i18n: _object_spread({}, e.i18n),
            platformOverrides: o,
            texts: _object_spread({}, e.texts),
            analytics: _object_spread({
                logEvent: ()=>Promise.resolve(),
                eventFormat: "universal-analytics"
            }, e.analytics),
            colorValues: p,
            dimensions: _object_spread({}, F, ne(e.dimensions)),
            borderRadii: (_e_skin_borderRadii = e.skin.borderRadii) !== null && _e_skin_borderRadii !== void 0 ? _e_skin_borderRadii : S,
            textPresets: t,
            themeVariants: (_e_skin_themeVariants = e.skin.themeVariants) !== null && _e_skin_themeVariants !== void 0 ? _e_skin_themeVariants : U,
            Link: N(e.Link),
            isDarkMode: g,
            isIos: E(o) === "ios",
            useHrefDecorator: (_e_useHrefDecorator = e.useHrefDecorator) !== null && _e_useHrefDecorator !== void 0 ? _e_useHrefDecorator : ie,
            t: b,
            preventCopyInFormFields: (_e_preventCopyInFormFields = e.preventCopyInFormFields) !== null && _e_preventCopyInFormFields !== void 0 ? _e_preventCopyInFormFields : !1
        };
    }, [
        p,
        e,
        g,
        b
    ]), D = n.useMemo(()=>Object.fromEntries(Object.entries(p).map((param)=>{
            let [o, s] = param;
            let t = "";
            if (s.startsWith("#")) {
                const [l, k, f] = J(s);
                t = `${l}, ${k}, ${f}`;
            }
            return [
                o,
                t
            ];
        })), [
        p
    ]), I = n.useMemo(()=>{
        const o = Object.entries(m.textPresets).map((param)=>{
            let [s, t] = param;
            return {
                [s]: _object_spread({}, t.weight && {
                    weight: String(R[t.weight])
                }, t.size && {
                    size: `${t.size.desktop}px`
                }, t.lineHeight && {
                    lineHeight: `${t.lineHeight.desktop}px`
                })
            };
        });
        return Object.assign({}, ...o);
    }, [
        m
    ]), C = n.useMemo(()=>{
        const o = Object.entries(m.textPresets).map((param)=>{
            let [s, t] = param;
            return {
                [s]: _object_spread({}, t.weight && {
                    weight: String(R[t.weight])
                }, t.size && {
                    size: `${t.size.mobile}px`
                }, t.lineHeight && {
                    lineHeight: `${t.lineHeight.mobile}px`
                })
            };
        });
        return Object.assign({}, ...o);
    }, [
        m
    ]), M = {
        textPresets: I,
        colors: p,
        rawColors: D,
        borderRadii: (_e_skin_borderRadii = e.skin.borderRadii) !== null && _e_skin_borderRadii !== void 0 ? _e_skin_borderRadii : S
    };
    return /* @__PURE__ */ P(_, {
        children: [
            /* @__PURE__ */ r(A, {
                disabled: !e.enableTabFocus,
                children: /* @__PURE__ */ r(B, {
                    children: /* @__PURE__ */ r(G, {
                        children: /* @__PURE__ */ r(L.Provider, {
                            value: m,
                            children: /* @__PURE__ */ r(K, {
                                eventFormat: m.analytics.eventFormat,
                                children: /* @__PURE__ */ r(q, {
                                    children: /* @__PURE__ */ r(W, {
                                        children: /* @__PURE__ */ r(y, {
                                            children: /* @__PURE__ */ r($, {
                                                children: /* @__PURE__ */ r(X, {
                                                    children: a ? /*#__PURE__*/ n.createElement(a, {
                                                        style: _object_spread({
                                                            isolation: "isolate"
                                                        }, h(Z, M), h(ee, C)),
                                                        className: i ? void 0 : te
                                                    }, c) : /* @__PURE__ */ P(_, {
                                                        children: [
                                                            !i && (process.env.NODE_ENV !== "test" || process.env.SSR_TEST) && /* @__PURE__ */ r("style", {
                                                                children: `
                                                                                :root {${h(w, M)}}
                                                                                @media ${Y} {
                                                                                    :root {${h(w.textPresets, C)}}
                                                                                }
                                                                            `
                                                            }),
                                                            c
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            !a && /* @__PURE__ */ r(ae, {})
        ]
    });
}, De = le;
export { De as default, se as useIsOsDarkModeEnabled };
