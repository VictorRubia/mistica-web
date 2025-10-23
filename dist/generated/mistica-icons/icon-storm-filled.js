"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return f;
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
const a = (_param)=>{
    var { color: l, size: o = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), i = l !== null && l !== void 0 ? l : s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: i,
            d: "M11.081 2.155c.82 0 4.866.19 6.11 3.863 2.324.227 4.655 1.714 4.652 5.31 0 3.956-2.835 5.362-5.269 5.362l-.975.008-6.775 5.062a.36.36 0 0 1-.233.081.42.42 0 0 1-.252-.09.42.42 0 0 1-.112-.498l1.826-4.204-3.546-.28c-2.387-.143-4.347-1.194-4.347-4.485 0-2.583 1.378-3.647 2.45-4.09.194-5.748 5.407-6.039 6.471-6.039M9.583 20.172l6.325-4.897a.44.44 0 0 0 .095-.409.42.42 0 0 0-.3-.29s-3.028-.603-3.062-.707c-.042-.131 1.78-4.711 1.78-4.711.064-.182 0-.4-.169-.507a.4.4 0 0 0-.507.075l-5.938 6.592a.41.41 0 0 0-.09.406c.04.14.149.246.289.282 0 0 2.994.664 3.061.706.021.016.006.045-.011.078a.4.4 0 0 0-.022.049z"
        })
    }));
}, f = a;
