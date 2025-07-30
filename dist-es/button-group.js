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
import { jsxs as f, jsx as i } from "react/jsx-runtime";
import * as b from "react";
import p from "classnames";
import { getPrefixedDataAttributes as L } from "./utils/dom.js";
import { inline as d, containerWithSmallLink as v, container as S, centerInDesktop as x, centerInTablet as I, centerInMobile as C, buttonsWithSmallLink as G, buttons as R, buttonChild as n } from "./button-group.css-mistica.js";
import { smallLink as j } from "./button.css-mistica.js";
import { useIsomorphicLayoutEffect as A } from "./hooks.js";
const D = (param)=>{
    let { primaryButton: t, secondaryButton: s, link: o, align: e = "left", dataAttributes: u } = param;
    const r = b.useRef(null), [m, h] = b.useState(!1);
    A(()=>{
        var a, c;
        (c = (a = r.current) == null ? void 0 : a.getElementsByClassName(j)) != null && c.length && h(!0);
    }, []);
    var _e_mobile, _e_tablet, _ref, _e_desktop;
    const k = !!t || !!s || !!o, N = !!t && !!s, l = typeof e == "string" ? {
        mobile: e,
        tablet: e,
        desktop: e
    } : {
        mobile: (_e_mobile = e.mobile) !== null && _e_mobile !== void 0 ? _e_mobile : "left",
        tablet: (_ref = (_e_tablet = e.tablet) !== null && _e_tablet !== void 0 ? _e_tablet : e.mobile) !== null && _ref !== void 0 ? _ref : "left",
        desktop: (_e_desktop = e.desktop) !== null && _e_desktop !== void 0 ? _e_desktop : "left"
    };
    return k ? /* @__PURE__ */ f("div", _object_spread_props(_object_spread({
        className: p(d, m ? v : S, {
            [x]: l.desktop === "center",
            [I]: l.tablet === "center",
            [C]: l.mobile === "center"
        })
    }, L(u, "ButtonGroup")), {
        children: [
            (t || s) && /* @__PURE__ */ f("div", {
                className: p(d, m ? G : R),
                children: [
                    t && /* @__PURE__ */ i("div", {
                        className: n,
                        children: t
                    }),
                    s && /* @__PURE__ */ i("div", {
                        className: n,
                        children: s
                    })
                ]
            }),
            o && /* @__PURE__ */ i("div", {
                ref: r,
                className: n,
                style: {
                    width: N ? "100%" : "auto"
                },
                children: o
            })
        ]
    })) : null;
}, T = D;
export { T as default };
