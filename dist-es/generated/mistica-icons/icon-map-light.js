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
import { jsx as o } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as s } from "../../theme-variant-context.js";
import { vars as r } from "../../skins/skin-contract.css-mistica.js";
const n = (_param)=>{
    var { color: a, size: l = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = s(), i = a !== null && a !== void 0 ? a : e ? r.colors.inverse : r.colors.neutralHigh;
    return /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ o("path", {
            fill: i,
            d: "m16.919 2.16 4.583.754a.41.41 0 0 1 .341.406V20.68a.409.409 0 0 1-.476.403l-4.487-.74-4.76 1.48a.4.4 0 0 1-.246-.003l-4.56-1.476-4.68.736-.007.001-.058.005a.41.41 0 0 1-.41-.409V3.32a.41.41 0 0 1 .348-.406l4.776-.753.014.001.014.001.016-.004.02-.004q.028.001.053.01l.029.007h.019a.1.1 0 0 1 .026.003l4.532 1.467 4.728-1.47a.1.1 0 0 1 .026-.003h.019l.03-.007a.2.2 0 0 1 .046-.007l.018.004.018.004.01-.001a.04.04 0 0 1 .018-.001M2.981 3.67v16.527l3.958-.625V3.046zm18.045 16.524V3.668l-3.762-.62v16.527zM16.443 3.121l-4.031 1.255v16.496l4.03-1.252zm-8.684.009v16.493l3.835 1.243V4.374z"
        })
    }));
}, m = n;
export { m as default };
