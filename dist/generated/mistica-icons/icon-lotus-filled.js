"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return p;
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
    var { color: c, size: r = 24 } = _param, s = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), l = c !== null && c !== void 0 ? c : e ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: r,
        height: r,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, s), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: l,
                d: "M12 17.97a.2.2 0 0 0 .148-.07c.027-.03.632-.713 1.248-1.824.571-1.033 1.25-2.642 1.25-4.436 0-1.798-.679-3.407-1.25-4.436-.616-1.111-1.22-1.794-1.248-1.823a.19.19 0 0 0-.297 0c-.027.029-.632.712-1.248 1.823-.571 1.033-1.25 2.642-1.25 4.436 0 1.798.679 3.407 1.25 4.436.616 1.111 1.22 1.794 1.248 1.823a.2.2 0 0 0 .148.07"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: l,
                d: "M9.572 16.637q.178.318.349.594l-.205-.1c-1.118-.555-2.638-1.551-3.528-3.115-.89-1.568-.96-3.375-.865-4.613.1-1.285.392-2.222.424-2.325l.002-.008a.27.27 0 0 1 .327-.175q.006 0 .015.004c.16.04 1.09.28 2.209.837q.287.142.602.323c-.399 1.006-.726 2.239-.726 3.581 0 2.073.777 3.882 1.396 4.997"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: l,
                d: "M9.47 18.31h-.1c-1.487 0-2.77-.317-3.81-.943-1.444-.868-2.335-2.308-2.827-3.362-.514-1.1-.708-2-.728-2.089v-.005a.27.27 0 0 1 .195-.31c.079-.022.867-.24 1.965-.315.102 1.046.379 2.211.998 3.302 1.057 1.857 2.817 2.985 4.025 3.585q.143.071.282.136M14.534 18.31l.281-.137c1.208-.6 2.968-1.728 4.025-3.584.62-1.09.896-2.255.999-3.303 1.06.074 1.83.28 1.95.312l.014.004c.137.037.22.173.19.309-.008.04-.198.959-.728 2.094-.489 1.054-1.383 2.494-2.828 3.362-1.04.626-2.323.943-3.809.943z"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: l,
                d: "M14.427 16.637c.619-1.118 1.396-2.927 1.396-4.997 0-1.343-.326-2.575-.724-3.579q.316-.183.604-.325c1.205-.6 2.19-.835 2.232-.843a.27.27 0 0 1 .319.177l.002.008c.033.103.325 1.04.424 2.325.096 1.242.025 3.05-.865 4.613s-2.41 2.56-3.528 3.115q-.106.054-.21.103.172-.277.35-.597"
            })
        ]
    }));
}, p = n;
