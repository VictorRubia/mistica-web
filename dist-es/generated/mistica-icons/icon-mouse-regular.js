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
import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as l } from "../../theme-variant-context.js";
import { vars as s } from "../../skins/skin-contract.css-mistica.js";
const n = (_param)=>{
    var { color: c, size: o = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const a = l(), r = c !== null && c !== void 0 ? c : a ? s.colors.inverse : s.colors.neutralHigh;
    return /* @__PURE__ */ i("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: [
            /* @__PURE__ */ e("path", {
                fill: r,
                d: "M11.972 11.734a.55.55 0 0 0 1.098 0V8.857a.55.55 0 0 0-1.098 0z"
            }),
            /* @__PURE__ */ e("path", {
                fill: r,
                d: "M12.003 6.422v-.36c0-.02-.011-.309-.157-.578-.174-.322-.462-.47-.91-.47h-1.92c-.896 0-1.663-.2-2.218-.575-.605-.411-.938-1.025-.938-1.725a.55.55 0 0 1 1.098 0c0 .888 1.064 1.204 2.062 1.204h1.918c.869 0 1.544.39 1.9 1.096.255.501.26.989.26 1.045v.367c1.504.09 2.694.545 3.544 1.352.997.947 1.5 2.356 1.5 4.185v4.311c0 1.897-.439 3.264-1.346 4.174-.922.933-2.32 1.386-4.275 1.386-1.779 0-3.165-.462-4.12-1.37-.998-.946-1.502-2.355-1.502-4.184v-4.314c0-1.829.504-3.238 1.502-4.185.862-.82 2.073-1.276 3.602-1.359m-4.009 6.082c1.481.183 2.986.274 4.477.274h.1a37 37 0 0 0 4.477-.274v-.538c.002-3.003-1.48-4.46-4.527-4.46s-4.527 1.46-4.527 4.463zm0 1.102v2.674c0 3 1.482 4.46 4.527 4.46 1.647 0 2.793-.348 3.499-1.06.692-.697 1.028-1.81 1.028-3.403v-2.671a38 38 0 0 1-4.474.268h-.106c-1.49 0-2.99-.09-4.474-.268"
            })
        ]
    }));
}, u = n;
export { u as default };
