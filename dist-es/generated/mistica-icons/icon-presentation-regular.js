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
import { jsx as a } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as n } from "../../theme-variant-context.js";
import { vars as l } from "../../skins/skin-contract.css-mistica.js";
const s = (_param)=>{
    var { color: r, size: c = 24 } = _param, o = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = n(), t = r !== null && r !== void 0 ? r : e ? l.colors.inverse : l.colors.neutralHigh;
    return /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "M20.737 6.152c.179.16.277.378.286.602l-.009.689c0 .395-.294.714-.759.865l.006.037a1 1 0 0 1 .016.129l-.008 8.384c0 .644-.594 1.176-1.33 1.176l-6.379-.008v1.403c.415.168.737.546.737 1.157 0 .849-.63 1.244-1.255 1.258h-.098c-.616-.009-1.25-.401-1.25-1.267 0-.619.323-.988.74-1.157v-1.394H5.098c-.52.02-.835-.177-1.017-.342a1.1 1.1 0 0 1-.361-.82V8.476q.001-.057.01-.114l.004-.038a1.3 1.3 0 0 1-.482-.263.83.83 0 0 1-.277-.61v-.69c0-.56.594-.966 1.406-.966H7.02l3.722-1.992a1.5 1.5 0 0 1-.053-.386c0-.857.63-1.25 1.255-1.258v.008h.098c.616.006 1.25.407 1.25 1.258q0 .197-.045.35l3.481 2.025h2.835c.504-.02.919.11 1.174.35m-9.065-2.734c0 .16.023.32.294.32.353-.01.353-.189.353-.312 0-.118 0-.314-.3-.32l-.061-.002c-.263.008-.286.151-.286.314m-.129 1.199L9.348 5.793l5.19.008L12.494 4.6a1.3 1.3 0 0 1-.45.081h-.085c-.134 0-.277-.022-.415-.064m8.345 2.66.008-.363c-.103-.023-.21-.028-.316-.023L4.387 6.883a.8.8 0 0 0-.28.045v.364c.061.014.165.028.308.022h.518q.035 0 .066-.004l.054-.004 13.849.008a.3.3 0 0 1 .092.002q.026.003.05.004h.564a.8.8 0 0 0 .28-.042m-.745 9.583.008-8.383c-.022-.042-.075-.056-.15-.065L5.007 8.404c-.09.014-.16.056-.16.078v8.376c.023.058.09.08.22.08l13.87.01c.13 0 .197-.068.205-.088m-6.824 3.729c0-.118 0-.314-.3-.32h-.058c-.264 0-.286.152-.286.311-.003.126-.003.314.291.32.353-.009.353-.188.353-.311m3.521-5.255c0-.227-.187-.4-.414-.4H8.49l1.168-1.768 2.527.946a.45.45 0 0 0 .473-.126l1.827-2.224.045.289a.41.41 0 0 0 .406.341q.016 0 .033-.004t.034-.004a.413.413 0 0 0 .347-.46l-.18-1.162a.42.42 0 0 0-.414-.336h-1.339a.406.406 0 0 0-.414.395v.003c.005.224.19.403.414.398h.446l-1.664 2.028-2.557-.953a.41.41 0 0 0-.496.154L7.95 14.27v-3.787a.405.405 0 0 0-.415-.398c-.235 0-.414.171-.414.398v4.855c.005.224.19.403.414.397h7.89a.41.41 0 0 0 .415-.4"
        })
    }));
}, m = s;
export { m as default };
