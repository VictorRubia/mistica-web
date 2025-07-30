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
import { jsxs as i, jsx as a } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as h } from "../../theme-variant-context.js";
import { vars as e } from "../../skins/skin-contract.css-mistica.js";
const t = (_param)=>{
    var { color: l, size: o = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = h(), r = l !== null && l !== void 0 ? l : s ? e.colors.inverse : e.colors.neutralHigh;
    return /* @__PURE__ */ i("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: [
            /* @__PURE__ */ a("path", {
                fill: r,
                d: "M15.336 13.037c0 1.62-1.292 2.938-2.877 2.938h-.92q-.294 0-.57-.058l-.851.97c.443.17.92.264 1.42.264h.921c2.224 0 4.027-1.842 4.027-4.114V9.649l-1.15 1.308zM8.664 13.037v-6.67c0-1.62 1.291-2.939 2.876-2.939h.92c1.456 0 2.662 1.111 2.852 2.545l.923-1.049c-.572-1.56-2.045-2.674-3.774-2.674h-.92c-2.224 0-4.028 1.842-4.028 4.114v6.67c0 .526.098 1.029.273 1.49l.912-1.037a3 3 0 0 1-.034-.453z"
            }),
            /* @__PURE__ */ a("path", {
                fill: r,
                d: "M8.759 18.811c.822.43 1.711.647 2.643.647v1.116h-.828a.583.583 0 0 0-.576.588c0 .323.26.588.576.588h2.804a.583.583 0 0 0 .576-.588.583.583 0 0 0-.576-.588h-.828v-1.116h.046c.915 0 1.792-.212 2.606-.629a5.9 5.9 0 0 0 2.753-3.003.593.593 0 0 0-.305-.77.57.57 0 0 0-.753.311 4.7 4.7 0 0 1-.607 1.061 4.6 4.6 0 0 1-3.691 1.851h-1.197a4.5 4.5 0 0 1-2.074-.496l-.79.9q.11.065.223.122zM6.35 15.056a.59.59 0 0 0-.304.77q.095.228.207.447l.831-.947a.574.574 0 0 0-.733-.27M5.058 20.419a.558.558 0 0 1-.414-.932L19.062 3.443a.558.558 0 1 1 .828.746L5.471 20.234a.56.56 0 0 1-.413.185"
            })
        ]
    }));
}, d = t;
export { d as default };
