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
import { useTheme as h } from "../../hooks.js";
import { useIsInverseOrMediaVariant as c } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const s = (_param)=>{
    var { color: n, size: e = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const a = c(), l = n !== null && n !== void 0 ? n : a ? i.colors.inverse : i.colors.neutralHigh, { skinName: t } = h();
    return t.match(/^blau/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "m12.002 16.942-7.68-7.2a1 1 0 0 1-.05-1.42c.38-.4 1.02-.43 1.42-.05l6.31 5.91 6.31-5.91a1 1 0 0 1 1.42.05 1 1 0 0 1-.05 1.42z"
        })
    })) : t.match(/^o2-new/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "M12.002 16.571c-.25 0-.49-.09-.69-.27l-6.99-6.56a1 1 0 0 1-.05-1.42c.38-.4 1.02-.43 1.42-.05l6.31 5.91 6.31-5.91a1 1 0 0 1 1.42.05 1 1 0 0 1-.05 1.42l-6.99 6.56c-.19.18-.44.27-.69.27"
        })
    })) : t.match(/^o2/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "M5.266 8.2a.79.79 0 0 0-1.049 0 .64.64 0 0 0 0 .962l7.238 6.639c.15.137.348.204.545.199a.78.78 0 0 0 .545-.2l7.238-6.638a.642.642 0 0 0 0-.963.79.79 0 0 0-1.05 0L12 14.376z"
        })
    })) : /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "M12 16.633a.97.97 0 0 1-.73-.32L4.273 8.876c-.38-.4-.36-1.04.04-1.42.4-.381 1.041-.361 1.422.04L12 14.15l6.266-6.656a1 1 0 0 1 1.42-.04c.401.38.421 1.021.04 1.421l-6.995 7.437c-.19.2-.46.32-.73.32"
        })
    }));
}, p = s;
export { p as default };
