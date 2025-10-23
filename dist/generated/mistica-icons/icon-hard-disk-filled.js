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
const t = (_param)=>{
    var { color: l, size: c = 24 } = _param, o = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), a = l !== null && l !== void 0 ? l : e ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: a,
            d: "m21.84 15.735-.002-.02q.001-.005-.005-.011l-.009-.078v-.003a1 1 0 0 0-.017-.135l-1.523-12.1c-.132-.718-.681-1.216-1.336-1.216L5.046 2.155c-.692 0-1.253.566-1.25 1.202l-1.638 12.28.001.024.001.023-.002.035q-.003.017-.003.035v4.83c0 .694.56 1.257 1.252 1.257h17.182c.692 0 1.252-.566 1.252-1.257v-4.83zm-.977-1.202a1.2 1.2 0 0 0-.274-.034v-.002H3.409c-.092 0-.184.014-.274.033L4.617 3.41c0-.238.193-.434.431-.434l13.902.017c.252 0 .47.224.527.52zM6.065 4.76c-.484 0-.765-.176-.765-.552 0-.378.283-.554.765-.554s.765.176.765.554c0 .376-.28.552-.765.552m7.68 3.798c0-.414-.17-1.378-1.747-1.378s-1.745.964-1.745 1.378c0 .415.168 1.379 1.745 1.379s1.748-.964 1.748-1.379m-.82.003c0 .165 0 .555-.927.555s-.927-.387-.927-.555 0-.557.927-.557.927.392.927.557m5.384-4.353c0-.378-.283-.554-.765-.554-.485 0-.767.176-.765.554 0 .376.28.552.765.552.482 0 .765-.176.765-.552m.11 9.04c0-.379.282-.555.764-.555s.765.176.765.554c0 .376-.283.552-.765.552-.485.003-.765-.176-.765-.552M16.636 8.56c0-.787 0-3.185-4.64-3.185-4.638 0-4.638 2.398-4.638 3.185a3.4 3.4 0 0 0 .194 1.185c.52-.207.991-.28 1.296-.078a.76.76 0 0 1 .348.59c.022.267-.09.589-.275.925l.023.011c.759.364 1.787.55 3.053.55 4.639 0 4.639-2.396 4.639-3.183m-4.64-4.42c5.107 0 5.87 2.768 5.87 4.417s-.763 4.415-5.87 4.415c-1.45 0-2.657-.224-3.582-.67l-.151-.075a.1.1 0 0 1-.025-.02q-.009-.009-.02-.017a16 16 0 0 1-1.442 1.527c-.353.325-.765.487-1.19.487-.348 0-.707-.109-1.048-.33-.519-.339-.656-.714-.676-.97-.02-.249.045-.627.474-1.019l.004-.004c.076-.066 1.068-.93 2.139-1.587l-.024-.033c-.024-.032-.048-.065-.063-.107a4.6 4.6 0 0 1-.266-1.6c.003-1.646.764-4.414 5.87-4.414m6.466 15.347c-.678 0-1.098-.423-1.098-1.1 0-.681.42-1.101 1.098-1.101s1.098.423 1.098 1.1c0 .681-.42 1.101-1.098 1.101"
        })
    }));
}, d = t;
