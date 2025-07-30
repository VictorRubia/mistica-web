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
import { jsx as r } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as t } from "../../theme-variant-context.js";
import { vars as e } from "../../skins/skin-contract.css-mistica.js";
const l = (_param)=>{
    var { color: c, size: o = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = t(), n = c !== null && c !== void 0 ? c : s ? e.colors.inverse : e.colors.neutralHigh;
    return /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ r("path", {
            fill: n,
            d: "M21.714 8.055c.392-1.53-.081-2.941-1.446-4.314-1.367-1.372-2.77-1.848-4.29-1.45-1.295.336-2.69 1.308-4.525 3.15a30 30 0 0 0-.896.942c-.3.33-.277.846.053 1.146.33.302.84.28 1.14-.054q.39-.428.843-.885c1.6-1.605 2.802-2.47 3.788-2.728.638-.168 1.526-.199 2.745 1.028s1.187 2.118 1.022 2.759c-.255.992-1.118 2.202-2.714 3.807-1.597 1.605-2.799 2.473-3.785 2.728-.638.165-1.526.196-2.745-1.028-.495-.501-.815-.966-.977-1.426a.808.808 0 1 0-1.521.544c.246.692.689 1.355 1.358 2.028 1.056 1.061 2.135 1.585 3.275 1.585q.5 0 1.017-.134c1.29-.337 2.689-1.309 4.52-3.152 1.835-1.843 2.802-3.246 3.138-4.546m-8.4 8.499a.806.806 0 0 0-1.14.039c-.261.283-.536.571-.771.798-3.476 3.493-4.927 3.314-6.532 1.7-1.605-1.613-1.785-3.072 1.692-6.565s4.927-3.314 6.529-1.7c.54.543.874 1.05 1.02 1.548a.81.81 0 1 0 1.552-.457c-.225-.764-.69-1.498-1.426-2.237-2.955-2.972-5.659-1.468-8.813 1.7-1.834 1.843-2.8 3.247-3.137 4.546-.392 1.53.079 2.941 1.445 4.314 1.115 1.118 2.19 1.602 3.272 1.602 1.787 0 3.577-1.327 5.544-3.302.24-.238.529-.544.803-.84a.813.813 0 0 0-.039-1.146"
        })
    }));
}, f = l;
export { f as default };
