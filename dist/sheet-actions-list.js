"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return C;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _sheetcommon = /*#__PURE__*/ _interop_require_wildcard(require("./sheet-common.js"));
const _hooks = require("./hooks.js");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _text = require("./text.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _sheetactionrowcssmistica = require("./sheet-action-row.css-mistica.js");
const _image = /*#__PURE__*/ _interop_require_default(require("./image.js"));
const _negativebox = /*#__PURE__*/ _interop_require_default(require("./negative-box.js"));
const _touchable = /*#__PURE__*/ _interop_require_default(require("./touchable.js"));
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
const b = /*#__PURE__*/ _react.forwardRef((param, d)=>{
    let { title: m, subtitle: a, description: c, items: h, onClose: l, onSelect: e, dataAttributes: n } = param;
    const { isDarkMode: p } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sheetcommon.default, {
        onClose: l,
        ref: d,
        dataAttributes: _object_spread({
            "component-name": "ActionsListSheet"
        }, n),
        children: (param)=>{
            let { closeModal: u, modalTitleId: f } = param;
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sheetcommon.SheetBody, {
                title: m,
                subtitle: a,
                description: c,
                modalTitleId: f,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_negativebox.default, {
                    children: h.map((param)=>{
                        let { id: i, style: s, title: x, icon: t } = param;
                        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, {
                            onPress: ()=>{
                                e == null || e(i), u();
                            },
                            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                className: _sheetactionrowcssmistica.sheetActionRow,
                                children: [
                                    t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                        paddingRight: 16,
                                        children: t.Icon ? /* @__PURE__ */ (0, _jsxruntime.jsx)(t.Icon, {
                                            size: 24,
                                            color: s === "destructive" ? _skincontractcssmistica.vars.colors.textLinkDanger : _skincontractcssmistica.vars.colors.neutralHigh
                                        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_image.default, {
                                            circular: !0,
                                            src: p && t.urlDark ? t.urlDark : t.url,
                                            width: 40
                                        })
                                    }),
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                        regular: !0,
                                        color: s === "destructive" ? _skincontractcssmistica.vars.colors.textLinkDanger : _skincontractcssmistica.vars.colors.textPrimary,
                                        children: x
                                    })
                                ]
                            })
                        }, i);
                    })
                })
            });
        }
    });
}), C = b;
