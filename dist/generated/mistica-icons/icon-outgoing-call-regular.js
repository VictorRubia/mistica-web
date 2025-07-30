"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return u;
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
const i = (_param)=>{
    var { color: o, size: c = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), t = o !== null && o !== void 0 ? o : e ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M21.84 17.508c-.016-.963-.467-1.89-1.341-2.764a5.5 5.5 0 0 0-1.05-.832c-.785-.485-1.603-.662-2.435-.521-.804.137-1.58.574-2.302 1.297-.093.09-.166.168-.236.246a3.6 3.6 0 0 1-.549-.32c-.784-.537-1.73-1.456-2.37-2.095l-.08-.08c-.645-.64-1.56-1.583-2.099-2.37a3.6 3.6 0 0 1-.319-.55q.127-.11.246-.232c.726-.723 1.16-1.499 1.297-2.303.14-.829-.036-1.65-.512-2.42a5.4 5.4 0 0 0-.838-1.067c-.874-.871-1.804-1.322-2.764-1.342-.998-.014-1.975.426-2.916 1.325-.328.314-.63.731-.762.916-.869 1.26-.874 3.143-.012 5.3.838 2.11 2.454 4.398 4.673 6.63q.027.036.061.065l.076.075c2.25 2.25 4.56 3.885 6.69 4.734 1.072.429 2.072.644 2.974.644.913 0 1.697-.22 2.386-.7.152-.11.552-.4.858-.72.899-.938 1.344-1.921 1.325-2.916m-1.26.023c.014.652-.314 1.33-.975 2.022-.227.238-.571.487-.72.594-.89.616-2.383.571-4.12-.12-1.97-.785-4.135-2.326-6.266-4.454l-.045-.045-.03-.034c-2.13-2.129-3.67-4.294-4.455-6.263-.7-1.754-.745-3.219-.098-4.149q.329-.457.572-.691c.692-.661 1.375-.992 2.022-.975.625.011 1.263.339 1.894.969q.375.368.647.824c.325.523.44 1.036.35 1.56-.09.543-.41 1.09-.944 1.624-.146.146-.241.233-.412.367a.6.6 0 0 0-.16.185c-.232.42-.075 1.003.496 1.838.6.874 1.569 1.874 2.244 2.546l.081.081c.678.675 1.68 1.647 2.55 2.244.834.571 1.42.728 1.834.493a.6.6 0 0 0 .185-.157q.17-.217.367-.412c.535-.535 1.084-.851 1.624-.944.519-.084 1.045.031 1.578.359.296.176.568.392.809.639.633.635.96 1.274.972 1.899m-6.501-8.869 2.45-2.16.003-.002a.63.63 0 0 0 .048-.89l-.451-.505 3.597-.28.01.003-.761 3.568-.468-.515a.63.63 0 0 0-.88-.053l-2.462 2.114a.4.4 0 0 1-.05.026c-.023.01-.046.02-.05.025-.045-.003-.073-.028-.124-.093l-.924-1.03a.12.12 0 0 1-.028-.096c.006-.03.02-.058.09-.112m-.998 1.054.888.983c.238.313.597.515.99.546.377.036.75-.09 1.027-.347l1.997-1.717.132.145c.314.35.776.493 1.207.376.434-.115.762-.471.86-.928l.79-3.689a1.25 1.25 0 0 0-.277-1.092 1.26 1.26 0 0 0-.947-.423l-.1.003-3.74.288a1.2 1.2 0 0 0-1.042.742c-.166.42-.073.9.243 1.253l.112.123-1.93 1.7q-.058.043-.109.09c-.566.51-.61 1.38-.1 1.947"
        })
    }));
}, u = i;
