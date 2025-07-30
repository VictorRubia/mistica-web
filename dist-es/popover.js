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
import { jsx as r, jsxs as t } from "react/jsx-runtime";
import { BaseTooltip as f } from "./tooltip.js";
import h from "./inline.js";
import u from "./stack.js";
import { Text3 as x, Text2 as v } from "./text.js";
import { content as g } from "./popover.css-mistica.js";
import { vars as y } from "./skins/skin-contract.css-mistica.js";
import { iconContainerSize as P } from "./icon-button.css-mistica.js";
const S = (_param)=>{
    var { open: a, extra: c, children: i, onClose: l = ()=>{}, closeButtonLabel: m, dataAttributes: p, trackingEvent: s, title: o, description: e, asset: n } = _param, d = _object_without_properties(_param, [
        "open",
        "extra",
        "children",
        "onClose",
        "closeButtonLabel",
        "dataAttributes",
        "trackingEvent",
        "title",
        "description",
        "asset"
    ]);
    return /* @__PURE__ */ r(f, _object_spread({
        content: /* @__PURE__ */ t("div", {
            className: g,
            children: [
                (o || e || n) && /* @__PURE__ */ r("div", {
                    style: {
                        paddingRight: `calc((${P.small} - 8px)`
                    },
                    children: /* @__PURE__ */ t(h, {
                        space: 16,
                        children: [
                            n,
                            /* @__PURE__ */ t(u, {
                                space: 4,
                                children: [
                                    o && /* @__PURE__ */ r(x, {
                                        regular: !0,
                                        children: o
                                    }),
                                    e && /* @__PURE__ */ r(v, {
                                        regular: !0,
                                        color: y.colors.textSecondary,
                                        children: e
                                    })
                                ]
                            })
                        ]
                    })
                }),
                c !== null && c !== void 0 ? c : i
            ]
        }),
        centerContent: !1,
        open: a,
        hasPointerInteractionOnly: !0,
        delay: !1,
        onClose: l,
        closeButtonLabel: m,
        trackingEvent: s,
        dataAttributes: _object_spread({
            "component-name": "Popover"
        }, p)
    }, d));
}, A = S;
export { A as default };
