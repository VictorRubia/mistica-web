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
import { jsxs as l, jsx as i, Fragment as C } from "react/jsx-runtime";
import * as u from "react";
import { useIsInverseOrMediaVariant as g } from "./theme-variant-context.js";
import y from "./stack.js";
import { BaseTouchable as A } from "./touchable.js";
import { Text as H, Text2 as k } from "./text.js";
import { text4 as T } from "./text-props.js";
import { Boxed as M } from "./boxed.js";
import N, { useIsDismissable as P } from "./maybe-dismissable.js";
import { container as R, textContainerVariant as $, imageContent as D, touchableContainer as O } from "./highlighted-card.css-mistica.js";
import { vars as S } from "./skins/skin-contract.css-mistica.js";
import { useTheme as j } from "./hooks.js";
const B = /*#__PURE__*/ u.forwardRef((s, e)=>{
    var _s_isInverse;
    const { title: o, description: r, imageUrl: a, imageFit: n, imageAlt: c, titleAs: b = "h3", width: m, dataAttributes: f, titleLinesMax: v, descriptionLinesMax: x } = s, t = _object_without_properties(s, [
        "title",
        "description",
        "imageUrl",
        "imageFit",
        "imageAlt",
        "titleAs",
        "width",
        "dataAttributes",
        "titleLinesMax",
        "descriptionLinesMax"
    ]), p = g(), I = (_s_isInverse = s.isInverse) !== null && _s_isInverse !== void 0 ? _s_isInverse : p, h = P(), { textPresets: w } = j(), d = /* @__PURE__ */ l(M, {
        ref: e,
        variant: I ? "inverse" : "default",
        className: R,
        dataAttributes: _object_spread({
            "component-name": "HighlightedCard",
            testid: "HighlightedCard"
        }, f),
        width: m ? `${m}px` : "100%",
        minHeight: "100%",
        children: [
            /* @__PURE__ */ l("div", {
                role: h ? void 0 : "region",
                className: $[a ? "withImage" : "withoutImage"],
                "aria-label": h ? void 0 : t["aria-label"],
                children: [
                    /* @__PURE__ */ l(y, {
                        space: 8,
                        children: [
                            !!o && /* @__PURE__ */ i(H, _object_spread_props(_object_spread({}, T), {
                                truncate: v,
                                weight: w.cardTitle.weight,
                                as: b,
                                hyphens: "auto",
                                dataAttributes: {
                                    testid: "title"
                                },
                                children: o
                            })),
                            !!r && /* @__PURE__ */ i(k, {
                                regular: !0,
                                color: S.colors.textSecondary,
                                truncate: x,
                                as: "p",
                                hyphens: "auto",
                                dataAttributes: {
                                    testid: "description"
                                },
                                children: r
                            })
                        ]
                    }),
                    t.button && /* @__PURE__ */ l(C, {
                        children: [
                            /* @__PURE__ */ i("div", {
                                style: {
                                    minHeight: 16,
                                    flexGrow: 1
                                }
                            }),
                            t.button
                        ]
                    })
                ]
            }),
            a && /* @__PURE__ */ i("div", _object_spread_props(_object_spread({
                "data-testid": "image"
            }, c ? {
                role: "img",
                "aria-label": c
            } : {}), {
                className: D,
                style: {
                    backgroundImage: `url(${a})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: n === "fit" ? "contain" : "cover",
                    backgroundPosition: n === "fit" ? "bottom right" : `center ${n === "fill-center" ? "center" : "right"}`
                }
            }))
        ]
    });
    return t.button ? d : t.onPress || t.to || t.href ? /* @__PURE__ */ i(A, _object_spread_props(_object_spread({}, t), {
        className: O,
        children: d
    })) : d;
}), F = /*#__PURE__*/ u.forwardRef((_param, o)=>{
    var { "aria-label": s } = _param, e = _object_without_properties(_param, [
        "aria-label"
    ]);
    var _e_isInverse;
    const r = s || e.title || e.description, a = g(), n = (_e_isInverse = e.isInverse) !== null && _e_isInverse !== void 0 ? _e_isInverse : a;
    return /* @__PURE__ */ i(N, {
        onClose: e.onClose,
        "aria-label": r,
        width: e.width,
        variant: e.imageUrl ? "media" : n ? "inverse" : void 0,
        children: /* @__PURE__ */ i(B, _object_spread_props(_object_spread({}, e), {
            "aria-label": r,
            ref: o
        }))
    });
}), X = F;
export { X as default };
