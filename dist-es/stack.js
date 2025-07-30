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
import { jsx as l } from "react/jsx-runtime";
import * as p from "react";
import b from "classnames";
import { getPrefixedDataAttributes as d } from "./utils/dom.js";
import { flexStack as u, marginStack as k, vars as a } from "./stack.css-mistica.js";
import { applyCssVars as y } from "./utils/css.js";
const e = (t)=>typeof t == "number" ? `${t}px` : `space-${t}`, v = (t)=>{
    if (typeof t == "number" || typeof t == "string") return {
        [a.space]: e(t)
    };
    const r = {
        [a.spaceMobile]: e(t.mobile),
        [a.spaceDesktop]: e(t.desktop)
    };
    return t.tablet && (r[a.spaceTablet] = e(t.tablet)), r;
}, x = (param)=>{
    let { space: t, className: r, children: o, role: i, "aria-labelledby": s, "aria-live": m, "aria-atomic": n, dataAttributes: c } = param;
    return /* @__PURE__ */ l("div", _object_spread_props(_object_spread({
        className: b(r, typeof t == "string" ? u : k),
        style: y(v(t)),
        role: i,
        "aria-labelledby": s,
        "aria-live": m,
        "aria-atomic": n
    }, d(c)), {
        children: p.Children.map(o, (f)=>/* @__PURE__ */ l("div", {
                role: i === "list" ? "listitem" : void 0,
                children: f
            }))
    }));
}, D = x;
export { D as default };
