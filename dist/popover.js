"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return A;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _tooltip = require("./tooltip.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _text = require("./text.js");
const _popovercssmistica = require("./popover.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _iconbuttoncssmistica = require("./icon-button.css-mistica.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_tooltip.BaseTooltip, _object_spread({
        content: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
            className: _popovercssmistica.content,
            children: [
                (o || e || n) && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    style: {
                        paddingRight: `calc((${_iconbuttoncssmistica.iconContainerSize.small} - 8px)`
                    },
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                        space: 16,
                        children: [
                            n,
                            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                space: 4,
                                children: [
                                    o && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                        regular: !0,
                                        children: o
                                    }),
                                    e && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                        regular: !0,
                                        color: _skincontractcssmistica.vars.colors.textSecondary,
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
