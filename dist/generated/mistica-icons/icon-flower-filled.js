"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return m;
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
const s = (_param)=>{
    var { color: e, size: o = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), a = e !== null && e !== void 0 ? e : t ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: a,
            d: "M21.655 9.688c.624 2.291-.342 4.04-2.588 4.678a3.9 3.9 0 0 1-1.47.11l-.144-.012c.569.386 1.073.82 1.392 1.3 1.308 1.972.939 3.944-.991 5.274-.751.521-1.518.787-2.252.787q-.286-.001-.563-.056c-.897-.173-1.712-.776-2.353-1.74-.306-.459-.51-1.06-.653-1.705-.14.652-.347 1.26-.655 1.723-.645.963-1.46 1.565-2.356 1.74a3 3 0 0 1-.555.052c-.737 0-1.507-.269-2.258-.792-.946-.653-1.537-1.482-1.708-2.395-.171-.914.078-1.908.72-2.874.319-.48.826-.92 1.397-1.306l-.106.011a5 5 0 0 1-.496.034c-.39 0-.759-.04-1.09-.134-1.1-.314-1.921-.908-2.37-1.72-.447-.81-.523-1.835-.215-2.958.308-1.126.894-1.961 1.69-2.418.797-.456 1.8-.529 2.901-.212.647.184 1.32.633 1.955 1.179-.361-.796-.613-1.605-.608-2.317 0-2.37 1.393-3.787 3.726-3.787h.003c1.143.006 2.087.359 2.73 1.02.645.66.984 1.627.978 2.793 0 .691-.249 1.487-.605 2.268.636-.543 1.308-.988 1.956-1.173 2.246-.636 3.96.344 4.588 2.63m-9.648 4.802.006.002a.4.4 0 0 1 .132-.034c.98-.033 1.535-.425 1.748-1.224q0-.004.003-.007l.002-.007q.003-.004.002-.01l.001-.01c.056-.215.084-.476.084-.772 0-.796-.218-1.362-.647-1.681a.1.1 0 0 1-.027-.028l-.015-.017-.03-.011a.2.2 0 0 1-.04-.017c-.305-.19-.72-.286-1.232-.286-.507 0-.927.098-1.241.294q-.02.011-.043.014l-.03.006-.013.018q-.014.017-.029.032c-.423.325-.636.891-.636 1.675q0 .446.087.788v.016q.004.008.01.017a.1.1 0 0 1 .012.026c.216.781.807 1.173 1.801 1.196.034 0 .064.01.095.02"
        })
    }));
}, m = s;
