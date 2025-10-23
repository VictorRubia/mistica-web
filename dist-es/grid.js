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
import R from "classnames";
import * as u from "react";
import { grid as N, gap as E, gridTemplateColumns as J, gridTemplateColumnsAutoRepeat as j, gridTemplateRows as D, gridTemplateRowsAutoRepeat as F, gridAutoFlow as I, gridJustifyItems as P, gridAlignItems as h, gridJustifyContent as q, gridAlignContent as w, fullColumns as B, spanColumns as H, fullRows as K, spanRows as L, columnStart as O, rowStart as Q, justifySelf as U, alignSelf as W, gapVars as z, vars as d } from "./grid.css-mistica.js";
import { applyCssVars as A } from "./utils/css.js";
import { getPrefixedDataAttributes as S } from "./utils/dom.js";
const X = (t, e)=>{
    const i = {}, o = (r)=>typeof r == "number" ? `min(${r}px, 100%)` : r, a = (r)=>typeof r == "number" ? `${r}px` : r;
    return t && typeof t != "number" && (typeof t.minSize < "u" && (i[d.rowMinSize] = o(t.minSize)), typeof t.maxSize < "u" && (i[d.rowMaxSize] = a(t.maxSize))), e && typeof e != "number" && (typeof e.minSize < "u" && (i[d.columnMinSize] = o(e.minSize)), typeof e.maxSize < "u" && (i[d.columnMaxSize] = a(e.maxSize))), i;
}, $ = /*#__PURE__*/ u.forwardRef((param, C)=>{
    let { rows: t, columns: e, gap: i = 0, flow: o, justifyItems: a, alignItems: r, justifyContent: l, alignContent: p, height: b, minHeight: y, children: s, as: g = "div", "aria-label": G, "aria-labelledby": V, dataAttributes: M } = param;
    const [f, m] = Array.isArray(i) ? i : [
        i,
        i
    ], k = typeof f == "object" ? f : {
        mobile: f,
        tablet: f,
        desktop: f
    }, T = typeof m == "object" ? m : {
        mobile: m,
        tablet: m,
        desktop: m
    }, c = (x, n)=>{
        var _n_tablet;
        return A({
            [x.mobile]: `${n.mobile}px`,
            [x.tablet]: `${(_n_tablet = n.tablet) !== null && _n_tablet !== void 0 ? _n_tablet : n.mobile}px`,
            [x.desktop]: `${n.desktop}px`
        });
    };
    return /*#__PURE__*/ u.createElement(g, _object_spread_props(_object_spread({
        ref: C,
        className: R(N, E, e ? typeof e == "number" ? J[e] : j : "", t ? typeof t == "number" ? D[t] : F : "", o ? I[o] : "", a ? P[a] : "", r ? h[r] : "", l ? q[l] : "", p ? w[p] : ""),
        style: _object_spread({
            height: b,
            minHeight: y
        }, c(z.columnGap, k), c(z.rowGap, T), A(_object_spread({}, X(t, e))))
    }, S(M), g === "ul" ? {
        role: "list"
    } : {}), {
        "aria-label": G,
        "aria-labelledby": V
    }), s);
}), ee = /*#__PURE__*/ u.forwardRef((param, s)=>{
    let { rowStart: t, rowSpan: e, columnStart: i, columnSpan: o, span: a, justifySelf: r, alignSelf: l, children: p, as: b = "div", dataAttributes: y } = param;
    return a && (Array.isArray(a) ? (o = a[0], e = a[1]) : (o = a, e = a)), /*#__PURE__*/ u.createElement(b, _object_spread({
        ref: s,
        className: R(o ? o === "full" ? B : H[o] : "", e ? e === "full" ? K : L[e] : "", i ? O[i] : "", t ? Q[t] : "", r ? U[r] : "", l ? W[l] : "")
    }, S(y)), p);
});
export { $ as Grid, ee as GridItem };
