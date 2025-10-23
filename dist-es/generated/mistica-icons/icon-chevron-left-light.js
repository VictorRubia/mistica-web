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
import { useTheme as a } from "../../hooks.js";
import { useIsInverseOrMediaVariant as h } from "../../theme-variant-context.js";
import { vars as l } from "../../skins/skin-contract.css-mistica.js";
const c = (_param)=>{
    var { color: n, size: e = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = h(), r = n !== null && n !== void 0 ? n : s ? l.colors.inverse : l.colors.neutralHigh, { skinName: i } = a();
    return i.match(/^o2-new/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ o("path", {
            fill: r,
            d: "M6.601 11.997c0-.21.08-.42.23-.58l6.7-7.15c.32-.34.86-.36 1.2-.04s.36.86.04 1.2l-6.16 6.57 6.16 6.57c.32.34.3.88-.04 1.2s-.88.3-1.2-.04l-6.7-7.15a.85.85 0 0 1-.23-.58"
        })
    })) : i.match(/^o2/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ o("path", {
            fill: r,
            d: "M14.889 4.117a.37.37 0 0 0-.538 0l-7.24 7.585a.41.41 0 0 0-.071.46q.028.077.088.14l6.008 6.296c.152.159.398.159.55 0a.42.42 0 0 0 0-.577l-5.765-6.04 6.968-7.3a.41.41 0 0 0 0-.564M13.866 19.41c0-.326.252-.59.563-.59.312 0 .564.264.564.59s-.252.59-.564.59a.577.577 0 0 1-.563-.59"
        })
    })) : /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ o("path", {
            fill: r,
            d: "M5.698 11.997c0-.23.1-.46.27-.62l7.6-7.15c.34-.32.88-.3 1.2.04s.31.88-.04 1.2l-6.94 6.53 6.94 6.53c.34.32.36.86.04 1.2s-.86.36-1.2.04l-7.6-7.15a.85.85 0 0 1-.27-.62"
        })
    }));
}, p = c;
export { p as default };
