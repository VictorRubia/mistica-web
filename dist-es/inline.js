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
import { jsx as f } from "react/jsx-runtime";
import * as S from "react";
import g from "classnames";
import { getPrefixedDataAttributes as v } from "./utils/dom.js";
import { inline as y, wrap as h, fullWidth as k, noFullWidth as I, stringSpaceWithWrap as V, stringSpace as W, marginInline as x, vars as r } from "./inline.css-mistica.js";
import { applyCssVars as T } from "./utils/css.js";
import { isIos as D, isRunningAcceptanceTest as A } from "./utils/platform.js";
import { useTheme as C } from "./hooks.js";
const s = (e)=>typeof e == "number" ? `${e}px` : `space-${e}`, M = (e, a)=>{
    const o = (t, i)=>{
        if (typeof t == "number" || typeof t == "string") return {
            [i.default]: s(t)
        };
        const l = {
            [i.mobile]: s(t.mobile),
            [i.desktop]: s(t.desktop)
        };
        return t.tablet && (l[i.tablet] = s(t.tablet)), l;
    }, n = o(e, {
        default: r.space,
        mobile: r.spaceMobile,
        tablet: r.spaceTablet,
        desktop: r.spaceDesktop
    });
    if (a) {
        const t = o(a, {
            default: r.verticalSpace,
            mobile: r.verticalSpaceMobile,
            tablet: r.verticalSpaceTablet,
            desktop: r.verticalSpaceDesktop
        });
        return _object_spread({}, n, t);
    }
    return n;
}, R = (param)=>{
    let { space: e, verticalSpace: a, className: o, children: n, role: t, alignItems: i = "stretch", "aria-label": l, "aria-labelledby": d, fullWidth: b, wrap: c, dataAttributes: u } = param;
    const { platformOverrides: m } = C();
    return /* @__PURE__ */ f("div", _object_spread_props(_object_spread({
        className: g(o, y, c ? h : b ? k : I, typeof e == "string" ? c ? V : W : x),
        style: _object_spread_props(_object_spread({}, T(M(e, a))), {
            alignItems: i
        }),
        role: t,
        "aria-label": l,
        "aria-labelledby": l ? void 0 : d
    }, v(u, "Inline")), {
        children: S.Children.map(n, (p)=>p || p === 0 ? /* @__PURE__ */ f("div", {
                role: t === "list" ? "listitem" : void 0,
                style: {
                    // Hack to fix https://jira.tid.es/browse/WEB-1683
                    // In iOS the inline component sometimes cuts the last line of the content
                    paddingBottom: D(m) && !A(m) ? 1 : void 0
                },
                children: p
            }) : null)
    }));
}, z = R;
export { z as default };
