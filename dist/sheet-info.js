"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Q;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _circle = /*#__PURE__*/ _interop_require_default(require("./circle.js"));
const _sheetcommon = /*#__PURE__*/ _interop_require_wildcard(require("./sheet-common.js"));
const _hooks = require("./hooks.js");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _text = require("./text.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _sheetinfocssmistica = require("./sheet-info.css-mistica.js");
const _image = /*#__PURE__*/ _interop_require_default(require("./image.js"));
const _button = require("./button.js");
const _divider = /*#__PURE__*/ _interop_require_default(require("./divider.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
const z = /*#__PURE__*/ _react.forwardRef((param, f)=>{
    let { title: a, subtitle: s, description: m, items: t, onClose: d, button: n, dataAttributes: p } = param;
    const { isDarkMode: h } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sheetcommon.default, {
        onClose: d,
        ref: f,
        dataAttributes: _object_spread({
            "component-name": "InfoSheet"
        }, p),
        children: (param)=>{
            let { closeModal: u, modalTitleId: I } = param;
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sheetcommon.SheetBody, {
                title: a,
                subtitle: s,
                description: m,
                modalTitleId: I,
                button: n ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonPrimary, {
                    onPress: u,
                    children: n.text
                }) : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingBottom: 16,
                    role: "list",
                    children: t.map((r, i)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_react.Fragment, {
                            children: [
                                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _sheetinfocssmistica.itemContainer,
                                    role: "listitem",
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                                        space: 8,
                                        children: [
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                className: _sheetinfocssmistica.infoItemIconContainer,
                                                style: {
                                                    alignItems: r.icon.type !== "bullet" && !r.description ? "center" : void 0
                                                },
                                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                    className: _sheetinfocssmistica.infoItemIcon,
                                                    children: r.icon.type === "bullet" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_circle.default, {
                                                        size: 8,
                                                        backgroundColor: _skincontractcssmistica.vars.colors.textPrimary
                                                    }) : r.icon.Icon ? /* @__PURE__ */ (0, _jsxruntime.jsx)(r.icon.Icon, {
                                                        size: r.icon.type === "small" ? 16 : 24
                                                    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_image.default, {
                                                        src: h && r.icon.urlDark ? r.icon.urlDark : r.icon.url,
                                                        width: r.icon.type === "small" ? 16 : 24,
                                                        height: r.icon.type === "small" ? 16 : 24
                                                    })
                                                })
                                            }),
                                            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                                space: 2,
                                                children: [
                                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                                        regular: !0,
                                                        children: r.title
                                                    }),
                                                    r.description && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                        regular: !0,
                                                        color: _skincontractcssmistica.vars.colors.textSecondary,
                                                        children: r.description
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                i < t.length - 1 && /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {})
                            ]
                        }, r.id || i))
                })
            });
        }
    });
}), Q = z;
