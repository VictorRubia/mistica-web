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
    Grid: function() {
        return $;
    },
    GridItem: function() {
        return ee;
    }
});
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _gridcssmistica = require("./grid.css-mistica.js");
const _css = require("./utils/css.js");
const _dom = require("./utils/dom.js");
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
const X = (t, e)=>{
    const i = {}, o = (r)=>typeof r == "number" ? `min(${r}px, 100%)` : r, a = (r)=>typeof r == "number" ? `${r}px` : r;
    return t && typeof t != "number" && (typeof t.minSize < "u" && (i[_gridcssmistica.vars.rowMinSize] = o(t.minSize)), typeof t.maxSize < "u" && (i[_gridcssmistica.vars.rowMaxSize] = a(t.maxSize))), e && typeof e != "number" && (typeof e.minSize < "u" && (i[_gridcssmistica.vars.columnMinSize] = o(e.minSize)), typeof e.maxSize < "u" && (i[_gridcssmistica.vars.columnMaxSize] = a(e.maxSize))), i;
}, $ = /*#__PURE__*/ _react.forwardRef((param, C)=>{
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
        return (0, _css.applyCssVars)({
            [x.mobile]: `${n.mobile}px`,
            [x.tablet]: `${(_n_tablet = n.tablet) !== null && _n_tablet !== void 0 ? _n_tablet : n.mobile}px`,
            [x.desktop]: `${n.desktop}px`
        });
    };
    return /*#__PURE__*/ _react.createElement(g, _object_spread_props(_object_spread({
        ref: C,
        className: (0, _classnames.default)(_gridcssmistica.grid, _gridcssmistica.gap, e ? typeof e == "number" ? _gridcssmistica.gridTemplateColumns[e] : _gridcssmistica.gridTemplateColumnsAutoRepeat : "", t ? typeof t == "number" ? _gridcssmistica.gridTemplateRows[t] : _gridcssmistica.gridTemplateRowsAutoRepeat : "", o ? _gridcssmistica.gridAutoFlow[o] : "", a ? _gridcssmistica.gridJustifyItems[a] : "", r ? _gridcssmistica.gridAlignItems[r] : "", l ? _gridcssmistica.gridJustifyContent[l] : "", p ? _gridcssmistica.gridAlignContent[p] : ""),
        style: _object_spread({
            height: b,
            minHeight: y
        }, c(_gridcssmistica.gapVars.columnGap, k), c(_gridcssmistica.gapVars.rowGap, T), (0, _css.applyCssVars)(_object_spread({}, X(t, e))))
    }, (0, _dom.getPrefixedDataAttributes)(M), g === "ul" ? {
        role: "list"
    } : {}), {
        "aria-label": G,
        "aria-labelledby": V
    }), s);
}), ee = /*#__PURE__*/ _react.forwardRef((param, s)=>{
    let { rowStart: t, rowSpan: e, columnStart: i, columnSpan: o, span: a, justifySelf: r, alignSelf: l, children: p, as: b = "div", dataAttributes: y } = param;
    return a && (Array.isArray(a) ? (o = a[0], e = a[1]) : (o = a, e = a)), /*#__PURE__*/ _react.createElement(b, _object_spread({
        ref: s,
        className: (0, _classnames.default)(o ? o === "full" ? _gridcssmistica.fullColumns : _gridcssmistica.spanColumns[o] : "", e ? e === "full" ? _gridcssmistica.fullRows : _gridcssmistica.spanRows[e] : "", i ? _gridcssmistica.columnStart[i] : "", t ? _gridcssmistica.rowStart[t] : "", r ? _gridcssmistica.justifySelf[r] : "", l ? _gridcssmistica.alignSelf[l] : "")
    }, (0, _dom.getPrefixedDataAttributes)(y)), p);
});
