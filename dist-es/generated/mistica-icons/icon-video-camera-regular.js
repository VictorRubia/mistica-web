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
import { jsx as r, jsxs as h } from "react/jsx-runtime";
import { useTheme as n } from "../../hooks.js";
import { useIsInverseOrMediaVariant as v } from "../../theme-variant-context.js";
import { vars as t } from "../../skins/skin-contract.css-mistica.js";
const m = (_param)=>{
    var { color: l, size: e = 24 } = _param, o = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const c = v(), a = l !== null && l !== void 0 ? l : c ? t.colors.inverse : t.colors.neutralHigh, { skinName: i } = n();
    return i.match(/^vivo-new/i) ? /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ r("path", {
            fill: a,
            d: "M3.277 7.806c0-.579.476-1.048 1.063-1.048h9.362c.588 0 1.064.47 1.064 1.048v8.388c0 .579-.476 1.048-1.064 1.048H4.34c-.587 0-1.063-.47-1.063-1.049zm12.766 2.972V7.806c0-1.273-1.048-2.306-2.34-2.306H4.34C3.048 5.5 2 6.533 2 7.806v8.388C2 17.467 3.048 18.5 4.34 18.5h9.362c1.293 0 2.34-1.033 2.34-2.306v-2.972l4.949 3.484c.194.136.45.155.663.047a.63.63 0 0 0 .346-.56V7.808a.63.63 0 0 0-.346-.56.65.65 0 0 0-.663.048zm4.68 4.193-4.22-2.97 4.22-2.972z"
        })
    })) : i.match(/^o2-new/i) ? /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ r("path", {
            fill: a,
            d: "M21.554 6.062a.71.71 0 0 0-.806.16l-4.672 4.857V7.2c0-.66-.498-1.198-1.11-1.198H3.11c-.612 0-1.11.537-1.11 1.198v9.598c0 .66.498 1.198 1.11 1.198h11.856c.612 0 1.11-.538 1.11-1.198v-3.88l4.672 4.858a.71.71 0 0 0 .801.164.8.8 0 0 0 .45-.738V6.794a.78.78 0 0 0-.445-.732m-6.957 10.33H3.48V7.599h11.117zm2.736-4.397 3.192-3.317v6.634z"
        })
    })) : i.match(/^o2/i) ? /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ r("path", {
            fill: a,
            d: "M21.554 6.062a.71.71 0 0 0-.806.16l-4.672 4.857V7.2c0-.66-.498-1.198-1.11-1.198H3.11c-.612 0-1.11.537-1.11 1.198v9.598c0 .66.498 1.198 1.11 1.198h11.856c.612 0 1.11-.538 1.11-1.198v-3.88l4.672 4.858a.71.71 0 0 0 .801.164.8.8 0 0 0 .45-.738V6.794a.78.78 0 0 0-.445-.732m-6.957 10.33H3.48V7.599h11.117zm2.736-4.397 3.192-3.317v6.634z"
        })
    })) : /* @__PURE__ */ h("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: [
            /* @__PURE__ */ r("path", {
                fill: a,
                d: "M7.455 9.273a.91.91 0 1 1-1.819 0 .91.91 0 0 1 1.819 0"
            }),
            /* @__PURE__ */ r("path", {
                fill: a,
                d: "M20.822 6.934A.797.797 0 0 1 22 7.63v8.741a.794.794 0 0 1-.793.793.8.8 0 0 1-.4-.109l-3.624-2.03v1.915a2.33 2.33 0 0 1-2.33 2.33H4.33A2.33 2.33 0 0 1 2 16.94V7.058a2.33 2.33 0 0 1 2.33-2.33h10.52a2.33 2.33 0 0 1 2.33 2.33v1.914zM14.85 18.03c.6 0 1.087-.488 1.087-1.088h.003V7.061c0-.6-.487-1.087-1.087-1.087H4.33c-.6 0-1.088.487-1.088 1.087v9.882c0 .6.488 1.088 1.088 1.088zm2.336-4.425 3.571 2V8.395l-3.57 2.002z"
            })
        ]
    }));
}, V = m;
export { V as default };
