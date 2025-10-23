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
    var { color: e, size: l = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = s(), c = e !== null && e !== void 0 ? e : t ? r.colors.inverse : r.colors.neutralHigh;
    return /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ o("path", {
            fill: c,
            d: "M15.8 2.16c1.378-.027 2.784.628 4.1 1.945 2.555 2.552 2.594 5.367.11 7.927l-7.93 7.933-.004.003c-.063.066-.12.127-.187.182-1.207 1.129-2.476 1.694-3.75 1.694-1.365 0-2.734-.65-4.034-1.95-1.32-1.316-1.972-2.694-1.95-4.094.026-1.348.678-2.673 1.944-3.939l.146-.151c.12-.126.238-.247.361-.353l6.776-6.779c.078-.094.198-.208.32-.325l.002-.003.154-.145C13.124 2.842 14.45 2.186 15.8 2.16m.126 12.225 3.213-3.213c2.016-2.081 1.986-4.112-.104-6.199-1.053-1.053-2.115-1.588-3.154-1.588h-.056c-1.023.017-2.065.552-3.098 1.585l-.174.168a4 4 0 0 0-.269.272L9.777 7.917l-.004.034a.2.2 0 0 1-.007.047c-.445 1.367.148 2.84 1.815 4.507 1.123 1.124 2.768 2.364 4.25 1.891a.2.2 0 0 1 .057-.008q.019 0 .038-.003"
        })
    }));
}, m = n;
export { m as default };
