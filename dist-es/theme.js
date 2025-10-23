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
import { jsx as r } from "react/jsx-runtime";
const a = 56, s = 80, m = 2 * s, d = {
    headerMobileHeight: a,
    headerDesktopHeight: s
}, h = (_param)=>{
    var { to: e, innerRef: t } = _param, n = _object_without_properties(_param, [
        "to",
        "innerRef"
    ]);
    return /* @__PURE__ */ r("a", _object_spread_props(_object_spread({
        ref: t,
        href: typeof e == "string" ? e : e == null ? void 0 : e.pathname
    }, n), {
        children: n.children
    }));
}, i = (e)=>e, f = (e)=>(_param)=>{
        var { innerRef: t } = _param, n = _object_without_properties(_param, [
            "innerRef"
        ]);
        return /* @__PURE__ */ r(e, _object_spread({
            ref: t
        }, n));
    }, p = (e)=>(_param)=>{
        var { to: t, innerRef: n, children: o } = _param, c = _object_without_properties(_param, [
            "to",
            "innerRef",
            "children"
        ]);
        return /* @__PURE__ */ r(e, {
            href: t,
            children: /* @__PURE__ */ r("a", _object_spread_props(_object_spread({
                ref: n
            }, c), {
                children: o
            }))
        });
    }, u = (e)=>(_param)=>{
        var { to: t, innerRef: n, children: o } = _param, c = _object_without_properties(_param, [
            "to",
            "innerRef",
            "children"
        ]);
        return /* @__PURE__ */ r(e, _object_spread_props(_object_spread({
            href: t,
            ref: n
        }, c), {
            children: o
        }));
    }, g = (e)=>{
    if (!e) return h;
    if (typeof e == "function" || e.$$typeof) return e;
    switch(e.type){
        case "ReactRouter5":
            return i(e.Component);
        case "ReactRouter6":
            return f(e.Component);
        case "Next12":
            return p(e.Component);
        case "Next13":
        case "Next14":
            return u(e.Component);
        default:
            const t = e.type;
            throw new Error(`Invalid Link type: ${t}`);
    }
};
export { s as NAVBAR_HEIGHT_DESKTOP, m as NAVBAR_HEIGHT_DESKTOP_LARGE, a as NAVBAR_HEIGHT_MOBILE, d as dimensions, g as getMisticaLinkComponent };
