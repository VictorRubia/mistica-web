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
import { jsx as r, jsxs as s } from "react/jsx-runtime";
import p from "./box.js";
import { Boxed as S } from "./boxed.js";
import { useTheme as y } from "./hooks.js";
import c from "./stack.js";
import { Text as E, Text2 as N } from "./text.js";
import { text4 as u } from "./text-props.js";
import B from "./button-group.js";
import { container as C, assetContainer as T, image as k } from "./empty-state-card.css-mistica.js";
import { vars as v } from "./skins/skin-contract.css-mistica.js";
const j = (param)=>{
    let { title: d, titleAs: n = "h3", description: f, button: e, secondaryButton: o, buttonLink: t, asset: a, imageUrl: i, "aria-label": h, dataAttributes: x } = param;
    var l;
    const { textPresets: g } = y();
    let m;
    return i && (m = /* @__PURE__ */ r("img", {
        className: k,
        alt: "",
        src: i
    })), process.env.NODE_ENV !== "production" && e && !((l = e == null ? void 0 : e.props) != null && l.small) && console.error("button property in EmptyStateCard must be a a small Button. Set small prop to true"), /* @__PURE__ */ r(S, {
        dataAttributes: x,
        children: /* @__PURE__ */ r(p, {
            paddingY: {
                mobile: 24,
                desktop: 40
            },
            paddingX: {
                mobile: 16,
                desktop: 40
            },
            children: /* @__PURE__ */ r("section", {
                className: C,
                "aria-label": h,
                children: /* @__PURE__ */ s(c, {
                    space: 16,
                    children: [
                        m !== null && m !== void 0 ? m : a && /* @__PURE__ */ r("div", {
                            className: T,
                            children: a
                        }),
                        /* @__PURE__ */ r(p, {
                            children: /* @__PURE__ */ s(c, {
                                space: 8,
                                children: [
                                    /* @__PURE__ */ r(E, _object_spread_props(_object_spread({}, u), {
                                        weight: g.cardTitle.weight,
                                        as: n,
                                        children: d
                                    })),
                                    /* @__PURE__ */ r(N, {
                                        regular: !0,
                                        color: v.colors.textSecondary,
                                        children: f
                                    })
                                ]
                            })
                        }),
                        (e || o || t) && /* @__PURE__ */ r(B, {
                            primaryButton: e,
                            secondaryButton: o,
                            link: t
                        })
                    ]
                })
            })
        })
    });
}, q = j;
export { q as default };
