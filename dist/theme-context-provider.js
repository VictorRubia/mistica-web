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
    default: function() {
        return De;
    },
    useIsOsDarkModeEnabled: function() {
        return se;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _dynamic = require("@vanilla-extract/dynamic");
const _dialogcontext = require("./dialog-context.js");
const _screensizecontextprovider = /*#__PURE__*/ _interop_require_default(require("./screen-size-context-provider.js"));
const _theme = require("./theme.js");
const _platform = require("./utils/platform.js");
const _themecontext = /*#__PURE__*/ _interop_require_default(require("./theme-context.js"));
const _hooks = require("./hooks.js");
const _tabfocus = /*#__PURE__*/ _interop_require_default(require("./tab-focus.js"));
const _modalcontextprovider = /*#__PURE__*/ _interop_require_default(require("./modal-context-provider.js"));
const _tooltipcontextprovider = /*#__PURE__*/ _interop_require_default(require("./tooltip-context-provider.js"));
const _documentvisibility = require("./utils/document-visibility.js");
const _aspectratiosupport = require("./utils/aspect-ratio-support.js");
const _analytics = require("./utils/analytics.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _color = require("./utils/color.js");
const _defaults = require("./skins/defaults.js");
const _environment = require("./utils/environment.js");
const _packageversion = require("./package-version.js");
const _snackbarcontext = require("./snackbar-context.js");
const _text = require("./text.js");
const _mediaqueriescssmistica = require("./media-queries.css-mistica.js");
const _themecontextcssmistica = require("./theme-context.css-mistica.js");
const _locale = require("./utils/locale.js");
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
if (process.env.NODE_ENV !== "production" && (0, _environment.isClientSide)()) {
    if (window.__mistica_version__ && window.__mistica_version__ !== _packageversion.PACKAGE_VERSION) throw new Error("There is more than one version of @telefonica/mistica running on the same page");
    window.__mistica_version__ = _packageversion.PACKAGE_VERSION;
}
const oe = "(prefers-color-scheme: dark)", se = ()=>{
    const [e, c] = _react.useState(!1);
    return (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        if (!window.matchMedia) return;
        const a = window.matchMedia(oe), i = ()=>{
            c(a.matches);
        };
        return a.addEventListener("change", i), i(), ()=>{
            a.removeEventListener("change", i);
        };
    }, []), e;
}, ie = ()=>(e)=>e, ne = (e)=>({
        headerMobileHeight: (e == null ? void 0 : e.headerMobileHeight) === "mistica" ? _theme.NAVBAR_HEIGHT_MOBILE : e == null ? void 0 : e.headerMobileHeight
    }), ae = ()=>{
    const e = _react.useRef(null), [c, a] = _react.useState(!1), [i, v] = _react.useState(!0);
    return (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        var d;
        if (i) v(!1);
        else {
            const u = (d = e.current) == null ? void 0 : d.parentElement;
            u && (u.style.isolation = "isolate", a(!0));
        }
    }, [
        i
    ]), c || !(0, _environment.isClientSide)() || i ? null : /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        ref: e,
        style: {
            display: "none"
        }
    });
}, le = (param)=>{
    let { theme: e, children: c, as: a, withoutStyles: i = !1 } = param;
    var _e_colorScheme, _e_skin_borderRadii;
    const v = se(), d = (_e_colorScheme = e.colorScheme) !== null && _e_colorScheme !== void 0 ? _e_colorScheme : "auto", u = e.skin.colors, H = _object_spread({}, e.skin.colors, e.skin.darkModeColors), g = d === "auto" && v || d === "dark", p = g ? H : u, x = (0, _locale.localeToLanguage)(e.i18n.locale), b = _react.useCallback(function(o) {
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
    ]), m = _react.useMemo(()=>{
        const o = _object_spread({
            platform: (0, _platform.getPlatform)(),
            insideNovumNativeApp: (0, _platform.isInsideNovumNativeApp)()
        }, e.platformOverrides), s = Object.entries(_defaults.defaultTextPresetsConfig).map((param)=>{
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
            dimensions: _object_spread({}, _theme.dimensions, ne(e.dimensions)),
            borderRadii: (_e_skin_borderRadii = e.skin.borderRadii) !== null && _e_skin_borderRadii !== void 0 ? _e_skin_borderRadii : _defaults.defaultBorderRadiiConfig,
            textPresets: t,
            themeVariants: (_e_skin_themeVariants = e.skin.themeVariants) !== null && _e_skin_themeVariants !== void 0 ? _e_skin_themeVariants : _defaults.defaultThemeVariantsConfig,
            Link: (0, _theme.getMisticaLinkComponent)(e.Link),
            isDarkMode: g,
            isIos: (0, _platform.getPlatform)(o) === "ios",
            useHrefDecorator: (_e_useHrefDecorator = e.useHrefDecorator) !== null && _e_useHrefDecorator !== void 0 ? _e_useHrefDecorator : ie,
            t: b,
            preventCopyInFormFields: (_e_preventCopyInFormFields = e.preventCopyInFormFields) !== null && _e_preventCopyInFormFields !== void 0 ? _e_preventCopyInFormFields : !1
        };
    }, [
        p,
        e,
        g,
        b
    ]), D = _react.useMemo(()=>Object.fromEntries(Object.entries(p).map((param)=>{
            let [o, s] = param;
            let t = "";
            if (s.startsWith("#")) {
                const [l, k, f] = (0, _color.fromHexToRgb)(s);
                t = `${l}, ${k}, ${f}`;
            }
            return [
                o,
                t
            ];
        })), [
        p
    ]), I = _react.useMemo(()=>{
        const o = Object.entries(m.textPresets).map((param)=>{
            let [s, t] = param;
            return {
                [s]: _object_spread({}, t.weight && {
                    weight: String(_text.mapToWeight[t.weight])
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
    ]), C = _react.useMemo(()=>{
        const o = Object.entries(m.textPresets).map((param)=>{
            let [s, t] = param;
            return {
                [s]: _object_spread({}, t.weight && {
                    weight: String(_text.mapToWeight[t.weight])
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
        borderRadii: (_e_skin_borderRadii = e.skin.borderRadii) !== null && _e_skin_borderRadii !== void 0 ? _e_skin_borderRadii : _defaults.defaultBorderRadiiConfig
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_tabfocus.default, {
                disabled: !e.enableTabFocus,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_modalcontextprovider.default, {
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_tooltipcontextprovider.default, {
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_themecontext.default.Provider, {
                            value: m,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_analytics.TrackingConfig, {
                                eventFormat: m.analytics.eventFormat,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_aspectratiosupport.AspectRatioSupportProvider, {
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_documentvisibility.DocumentVisibilityProvider, {
                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_screensizecontextprovider.default, {
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_dialogcontext.DialogRoot, {
                                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_snackbarcontext.SnackbarRoot, {
                                                    children: a ? /*#__PURE__*/ _react.createElement(a, {
                                                        style: _object_spread({
                                                            isolation: "isolate"
                                                        }, (0, _dynamic.assignInlineVars)(_themecontextcssmistica.themeVarsContract, M), (0, _dynamic.assignInlineVars)(_themecontextcssmistica.textPresetResponsiveVarsContract, C)),
                                                        className: i ? void 0 : _themecontextcssmistica.themeVars
                                                    }, c) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                                        children: [
                                                            !i && (process.env.NODE_ENV !== "test" || process.env.SSR_TEST) && /* @__PURE__ */ (0, _jsxruntime.jsx)("style", {
                                                                children: `
                                                                                :root {${(0, _dynamic.assignInlineVars)(_skincontractcssmistica.vars, M)}}
                                                                                @media ${_mediaqueriescssmistica.tabletOrSmaller} {
                                                                                    :root {${(0, _dynamic.assignInlineVars)(_skincontractcssmistica.vars.textPresets, C)}}
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
            !a && /* @__PURE__ */ (0, _jsxruntime.jsx)(ae, {})
        ]
    });
}, De = le;
