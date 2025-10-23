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
const a = (_param)=>{
    var { color: t, size: o = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), r = t !== null && t !== void 0 ? t : s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M4.471 18.664c1.493 1.446 3.672 2.18 6.474 2.18 1.902 0 3.526-.34 4.834-1.009a.56.56 0 0 0-.512-.997c-1.146.588-2.6.888-4.322.888-2.502 0-4.418-.628-5.695-1.863-1.322-1.283-1.995-3.252-1.995-5.86s.673-4.58 1.995-5.86C6.527 4.908 8.443 4.28 10.945 4.28c2.5 0 4.417.628 5.694 1.863 1.318 1.28 1.99 3.24 1.995 5.837V12q0 .733-.072 1.402c-.232-.258-.57-.651-1.012-1.164l-.345-.4a.56.56 0 1 0-.849.73l.345.402.075.086c.639.741 1.029 1.194 1.244 1.41.317.316.659.476 1.003.476.347 0 .698-.163 1.025-.485.238-.236.517-.562.792-.884l.068-.08c.278-.327.566-.666.79-.89a.562.562 0 0 0-.793-.793c-.247.247-.54.59-.825.925l-.026.03-.03.034q-.158.186-.315.367a15 15 0 0 0 .045-1.163c0-2.921-.787-5.165-2.336-6.664-1.493-1.445-3.672-2.179-6.473-2.179-2.802 0-4.98.734-6.474 2.18-1.549 1.498-2.336 3.742-2.336 6.663s.787 5.163 2.336 6.661"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M14.51 6.028c-.263-.277-.74-.61-1.53-.61H9.522c-.3 0-.588.12-.798.333L6.55 7.958a1.12 1.12 0 0 0-.322.787v7.239c0 .733.292 1.196.535 1.456.264.277.74.61 1.53.61h4.692c.787 0 1.266-.33 1.529-.61.244-.26.535-.723.535-1.457V7.486c-.003-.734-.294-1.196-.538-1.457m-5.798 7.617V12.56h3.81v1.085zM11.622 12v-1.103h.9V12zm-.563 0h-.896v-1.103h.896zm-2.35 0v-1.103h.894V12zm.003 2.205h.893v1.076h-.893zm2.347 0v1.076h-.896v-1.076zm.56 0h.9v1.076h-.9z"
            })
        ]
    }));
}, d = a;
