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
import { jsxs as i, jsx as r } from "react/jsx-runtime";
import B from "./box.js";
import { Text as h } from "./text.js";
import { useThemeVariant as C, ThemeVariant as b } from "./theme-variant-context.js";
import { pxToRem as A } from "./utils/css.js";
import { getPrefixedDataAttributes as P } from "./utils/dom.js";
import { tag as w, icon as E, badge as N } from "./tag.css-mistica.js";
import { vars as S } from "./skins/skin-contract.css-mistica.js";
import V from "classnames";
import { useTheme as W } from "./hooks.js";
import R from "./badge.js";
const { colors: e } = S, j = (param)=>{
    let { Icon: t, children: a, dataAttributes: u, type: d = "promo", badge: n, backgroundColor: m, textColor: v } = param;
    const { textPresets: l } = W(), g = C(), s = g === "inverse", o = n === !0 ? void 0 : n || 0;
    if (!a) return null;
    const x = {
        // [textColor, inverseTextColor, backgroundColor, backgroundColorInverse]
        promo: [
            e.tagTextPromo,
            e.tagTextPromoInverse,
            e.tagBackgroundPromo,
            e.tagBackgroundPromoInverse
        ],
        info: [
            e.tagTextInfo,
            e.tagTextInfoInverse,
            e.tagBackgroundInfo,
            e.tagBackgroundInfoInverse
        ],
        active: [
            e.tagTextActive,
            e.tagTextActiveInverse,
            e.tagBackgroundActive,
            e.tagBackgroundActiveInverse
        ],
        inactive: [
            e.tagTextInactive,
            e.tagTextInactiveInverse,
            // TODO: remove logic for alternative variant (https://jira.tid.es/browse/WEB-1803)
            g === "alternative" ? e.neutralLowAlternative : e.tagBackgroundInactive,
            e.tagBackgroundInactiveInverse
        ],
        success: [
            e.tagTextSuccess,
            e.tagTextSuccessInverse,
            e.tagBackgroundSuccess,
            e.tagBackgroundSuccessInverse
        ],
        warning: [
            e.tagTextWarning,
            e.tagTextWarningInverse,
            e.tagBackgroundWarning,
            e.tagBackgroundWarningInverse
        ],
        error: [
            e.tagTextError,
            e.tagTextErrorInverse,
            e.tagBackgroundError,
            e.tagBackgroundErrorInverse
        ]
    }, [T, f, I, p] = x[d], c = v || (s ? f : T), k = m || (s ? p : I);
    return /* @__PURE__ */ i("span", _object_spread_props(_object_spread({}, P(u, "Tag")), {
        className: V(w),
        style: {
            paddingLeft: t ? 8 : 12,
            paddingRight: o !== 0 ? 8 : 12,
            background: k
        },
        children: [
            t && /* @__PURE__ */ r(B, {
                paddingRight: 4,
                children: /* @__PURE__ */ r(t, {
                    color: c,
                    size: A(16),
                    className: E
                })
            }),
            /* @__PURE__ */ i(b, {
                isInverse: !1,
                children: [
                    /* @__PURE__ */ r(h, {
                        color: c,
                        size: 14,
                        lineHeight: 20,
                        weight: l.indicator.weight,
                        truncate: !0,
                        children: a
                    }),
                    o !== 0 && /* @__PURE__ */ r("div", {
                        className: N,
                        children: /* @__PURE__ */ r(R, {
                            value: o
                        })
                    })
                ]
            })
        ]
    }));
}, O = j;
export { O as default };
