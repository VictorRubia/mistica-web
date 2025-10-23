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
import { jsxs as m, Fragment as V, jsx as e } from "react/jsx-runtime";
import d from "classnames";
import { useTheme as z } from "./hooks.js";
import x from "./badge.js";
import D from "./box.js";
import { Text2 as $ } from "./text.js";
import F from "./generated/mistica-icons/icon-close-regular.js";
import { pxToRem as n } from "./utils/css.js";
import { iconNavigationInverse as M, iconNavigation as O, iconActive as W, icon as k, chipVariants as u, chipWrapper as h, leftPadding as a, rightPadding as v, button as q, wrappedContent as E, interactive as G, interactiveChipOverlay as H } from "./chip.css-mistica.js";
import { vars as J } from "./skins/skin-contract.css-mistica.js";
import { useThemeVariant as K } from "./theme-variant-context.js";
import Q, { BaseTouchable as S } from "./touchable.js";
import { closeButtonLabel as U } from "./text-tokens.js";
import { getPrefixedDataAttributes as A } from "./utils/dom.js";
const X = (t)=>{
    const { Icon: o, children: w, id: B, dataAttributes: N, badge: r, active: c, onClose: s, closeButtonLabel: T } = t, { texts: P, textPresets: y, t: L } = z(), f = K(), p = f === "alternative", g = f === "inverse", i = t.href || t.onPress || t.to, b = c !== void 0 || i, C = /* @__PURE__ */ m(V, {
        children: [
            o && /* @__PURE__ */ e("div", {
                className: c ? i ? g ? M : O : W : k,
                children: /* @__PURE__ */ e(o, {
                    color: "currentColor",
                    size: n(16)
                })
            }),
            /* @__PURE__ */ e(D, {
                paddingRight: r ? 8 : s ? 4 : 0,
                children: /* @__PURE__ */ e($, {
                    id: B,
                    weight: y.indicator.weight,
                    truncate: 1,
                    color: "currentColor",
                    children: w
                })
            })
        ]
    }), l = _object_spread({
        "component-name": "Chip"
    }, N);
    if (s) return /* @__PURE__ */ m("div", _object_spread_props(_object_spread({
        className: d(p ? u.overAlternative : u.default, h, o ? a.withIcon : a.default, v.withIcon)
    }, A(l)), {
        children: [
            C,
            /* @__PURE__ */ e(Q, {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: n(24),
                    height: n(24)
                },
                "aria-label": T || P.closeButtonLabel || L(U),
                onPress: ()=>s(),
                children: /* @__PURE__ */ e(F, {
                    size: n(16),
                    color: J.colors.neutralMedium
                })
            })
        ]
    }));
    const j = ()=>r ? r === !0 ? /* @__PURE__ */ e(x, {}) : /* @__PURE__ */ e(x, {
            value: r
        }) : null, I = (R)=>/* @__PURE__ */ m("div", _object_spread_props(_object_spread({
            className: d(u[c ? i ? g ? "navigationActiveInverse" : "navigationActive" : "active" : p ? "overAlternative" : "default"], i ? E : h, {
                [G]: b
            }, o ? a.withIcon : a.default, r ? v.withIcon : v.default)
        }, A(R)), {
            children: [
                b && /* @__PURE__ */ e("div", {
                    className: H
                }),
                C,
                j()
            ]
        }));
    return i ? /* @__PURE__ */ e(S, _object_spread_props(_object_spread({}, t), {
        className: d(h, q),
        dataAttributes: l,
        children: I()
    })) : I(l);
}, de = X;
export { de as default };
