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
import { jsx as C } from "react/jsx-runtime";
import * as D from "react";
import S from "classnames";
import { box as q, vars as l } from "./box.css-mistica.js";
import { applyCssVars as w } from "./utils/css.js";
import { getPrefixedDataAttributes as B } from "./utils/dom.js";
const E = /*#__PURE__*/ D.forwardRef((param, n)=>{
    let { className: p, children: x, as: y = "div", width: m, padding: c = 0, paddingX: f = c, paddingY: i = c, paddingTop: e = i, paddingBottom: o = i, paddingLeft: t = f, paddingRight: r = f, role: k, id: V, dataAttributes: j, "aria-label": u, "aria-hidden": $ } = param;
    const N = typeof e == "object" ? e : {
        mobile: e,
        tablet: e,
        desktop: e
    }, P = typeof o == "object" ? o : {
        mobile: o,
        tablet: o,
        desktop: o
    }, z = typeof t == "object" ? t : {
        mobile: t,
        tablet: t,
        desktop: t
    }, A = typeof r == "object" ? r : {
        mobile: r,
        tablet: r,
        desktop: r
    }, s = (a, b)=>{
        var _b_tablet;
        return w({
            [a.mobile]: `${b.mobile}px`,
            [a.tablet]: `${(_b_tablet = b.tablet) !== null && _b_tablet !== void 0 ? _b_tablet : b.mobile}px`,
            [a.desktop]: `${b.desktop}px`
        });
    };
    return /* @__PURE__ */ C(y, _object_spread_props(_object_spread({}, B(j)), {
        role: k,
        "aria-label": u,
        "aria-hidden": $,
        ref: n,
        className: S(p, q),
        style: _object_spread({}, s(l.paddingTop, N), s(l.paddingBottom, P), s(l.paddingLeft, z), s(l.paddingRight, A), m !== void 0 ? {
            width: m,
            boxSizing: "border-box"
        } : {}),
        id: V,
        children: x
    }));
}), K = E;
export { K as default };
