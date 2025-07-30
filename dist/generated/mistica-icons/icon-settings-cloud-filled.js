"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return d;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _themevariantcontext = require("../../theme-variant-context.js");
const _skincontractcssmistica = require("../../skins/skin-contract.css-mistica.js");
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
const n = (_param)=>{
    var { color: r, size: l = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), s = r !== null && r !== void 0 ? r : t ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: s,
            d: "M21.841 13.854c0-4.216-3.28-4.922-4.697-5.028-1.177-3.608-5.26-3.793-6.084-3.793-1.06 0-6.292.286-6.404 5.877-1.05.384-2.501 1.364-2.501 3.885 0 3.084 2.185 4.182 4.23 4.182l10.285-.056c.866 0 5.171-.246 5.171-5.067m-5.625-1.064a.695.695 0 0 1-.697.692h-.485a3 3 0 0 1-.143.459l.395.395a.696.696 0 0 1-.002.986l-.437.434a.71.71 0 0 1-.997 0l-.396-.395q-.22.092-.462.146v.482a.696.696 0 0 1-.697.691h-.597a.695.695 0 0 1-.697-.691v-.482a3 3 0 0 1-.462-.143l-.395.392a.7.7 0 0 1-.496.204h-.003a.7.7 0 0 1-.499-.204l-.437-.434-.005-.006a.69.69 0 0 1 .005-.983l.393-.39a3 3 0 0 1-.14-.461h-.485a.697.697 0 0 1-.7-.692v-.597a.7.7 0 0 1 .7-.695h.485q.05-.235.14-.462l-.393-.39-.005-.005a.69.69 0 0 1 .005-.983l.443-.431a.7.7 0 0 1 .499-.205h.002c.185 0 .364.073.496.205l.395.392q.227-.09.462-.143v-.482c0-.384.314-.692.698-.692h.596a.695.695 0 0 1 .698.692v.482q.235.054.462.143l.395-.392a.71.71 0 0 1 .997 0l.437.434.006.005a.695.695 0 0 1-.009.984l-.394.392q.087.222.142.456h.485c.384 0 .695.311.697.695zm-4.218-2.126c1.151 0 1.84.683 1.84 1.826 0 1.146-.686 1.826-1.84 1.826s-1.84-.683-1.84-1.826.689-1.826 1.84-1.826"
        })
    }));
}, d = n;
