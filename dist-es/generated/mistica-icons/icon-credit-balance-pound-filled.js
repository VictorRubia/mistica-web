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
import { jsx as l } from "react/jsx-runtime";
import { useTheme as i } from "../../hooks.js";
import { useIsInverseOrMediaVariant as n } from "../../theme-variant-context.js";
import { vars as o } from "../../skins/skin-contract.css-mistica.js";
const v = (_param)=>{
    var { color: r, size: a = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const h = n(), c = r !== null && r !== void 0 ? r : h ? o.colors.inverse : o.colors.neutralHigh, { skinName: t } = i();
    return t.match(/^o2-new/i) ? /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ l("path", {
            fill: c,
            d: "M6.737 8.009a5.57 5.57 0 0 1 5.569-5.57 5.57 5.57 0 0 1 5.568 5.57 5.57 5.57 0 0 1-5.568 5.568 5.57 5.57 0 0 1-5.57-5.568m3.657 2.089c0 .29.232.521.522.521h2.962a.52.52 0 0 0 .521-.521.52.52 0 0 0-.521-.521h-1.75q.013-.087.013-.174v-.869h.868a.52.52 0 0 0 .522-.521.52.52 0 0 0-.522-.521h-.868v-.869a.522.522 0 0 1 .9-.356.5.5 0 0 0 .378.165.526.526 0 0 0 .379-.882 1.56 1.56 0 0 0-1.14-.495 1.57 1.57 0 0 0-1.569 1.568v.869a.52.52 0 0 0-.52.521c0 .29.23.521.52.521v.869a.17.17 0 0 1-.173.174.52.52 0 0 0-.522.52M7.953 14.272c.388 0 .74.09 1.047.272l.713.428h5.034c.757 0 1.394.485 1.635 1.158l2.191-1.279a1.674 1.674 0 0 1 2.437.931c.245.744-.089 1.582-.793 1.987l-6.076 3.506a2.07 2.07 0 0 1-1.564.214l-3.835-.953H6.545a2.08 2.08 0 0 1-1.55.695h-1.39a.696.696 0 0 1-.695-.695v-5.569c0-.383.312-.695.695-.695zm-.869 1.394v3.48h1.822l4.005.993q.089.021.178.022a.7.7 0 0 0 .352-.093l6.073-3.506c.129-.076.204-.232.164-.348a.286.286 0 0 0-.41-.169l-3.443 2.01c-.299.24-.673.391-1.087.391H10.91a.696.696 0 0 1 0-1.39h3.827a.348.348 0 0 0 0-.695H9.325l-1.033-.619a.7.7 0 0 0-.339-.076z"
        })
    })) : /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ l("path", {
            fill: c,
            d: "M6.737 8.009a5.57 5.57 0 0 1 5.568-5.569 5.57 5.57 0 0 1 5.569 5.569 5.57 5.57 0 0 1-5.569 5.568A5.57 5.57 0 0 1 6.737 8.01m3.657 2.089c0 .29.232.521.521.521h2.963c.29 0 .521-.232.521-.521a.52.52 0 0 0-.521-.521h-1.751a1 1 0 0 0 .013-.174v-.869h.87c.289 0 .52-.231.52-.521a.52.52 0 0 0-.52-.521h-.87v-.869a.522.522 0 0 1 .9-.356.5.5 0 0 0 .379.165.525.525 0 0 0 .379-.883 1.56 1.56 0 0 0-1.14-.494 1.57 1.57 0 0 0-1.569 1.568v.869a.52.52 0 0 0-.521.521c0 .29.232.521.521.521v.869a.17.17 0 0 1-.174.174.52.52 0 0 0-.52.52M7.953 14.272c.387 0 .74.09 1.047.272l.713.428h5.034c.757 0 1.394.485 1.634 1.158l2.192-1.279a1.674 1.674 0 0 1 2.437.931c.245.744-.089 1.582-.793 1.987l-6.076 3.506a2.07 2.07 0 0 1-1.564.214l-3.836-.953H6.545a2.08 2.08 0 0 1-1.55.695h-1.39a.696.696 0 0 1-.695-.695v-5.569c0-.383.312-.695.695-.695zm-.869 1.394v3.48h1.822l4.005.993q.089.022.178.023a.7.7 0 0 0 .352-.094l6.072-3.506c.13-.076.205-.232.165-.348a.286.286 0 0 0-.41-.169l-3.443 2.01c-.299.24-.673.391-1.087.391H10.91a.696.696 0 0 1 0-1.39h3.827a.348.348 0 0 0 0-.695H9.325l-1.034-.619a.7.7 0 0 0-.338-.076z"
        })
    }));
}, p = v;
export { p as default };
