"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return q;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _sheetcommon = /*#__PURE__*/ _interop_require_wildcard(require("./sheet-common.js"));
const _hooks = require("./hooks.js");
const _negativebox = /*#__PURE__*/ _interop_require_default(require("./negative-box.js"));
const _button = require("./button.js");
const _radiobutton = require("./radio-button.js");
const _list = require("./list.js");
const _texttokens = require("./text-tokens.js");
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
const D = /*#__PURE__*/ _react.forwardRef((param, l)=>{
    let { title: f, subtitle: h, description: p, items: u, selectedId: c, onClose: R, onSelect: r, button: i, dataAttributes: B } = param;
    const [o, x] = _react.useState(c), a = _react.useRef(!1), { isDesktopOrBigger: m } = (0, _hooks.useScreenSize)(), { texts: g, t: L } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sheetcommon.default, {
        onClose: R,
        ref: l,
        dataAttributes: _object_spread({
            "component-name": "RadioListSheet"
        }, B),
        children: (param)=>{
            let { closeModal: d, modalTitleId: n } = param;
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sheetcommon.SheetBody, {
                title: f,
                subtitle: h,
                description: p,
                modalTitleId: n,
                button: m ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonPrimary, {
                    onPress: ()=>{
                        a.current && (r == null || r(o || "")), d();
                    },
                    children: (i == null ? void 0 : i.text) || g.sheetConfirmButton || L(_texttokens.sheetConfirmButton)
                }) : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_negativebox.default, {
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_radiobutton.RadioGroup, {
                        "aria-labelledby": n,
                        name: "sheetselection",
                        value: o,
                        onChange: (e)=>{
                            x(e), a.current = !0, !m && (r == null || r(e), setTimeout(()=>{
                                d();
                            }, 200));
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_list.RowList, {
                            children: u.map((e)=>/* @__PURE__ */ {
                                var _e_title;
                                return (0, _jsxruntime.jsx)(_list.Row, {
                                    title: (_e_title = e.title) !== null && _e_title !== void 0 ? _e_title : "",
                                    description: e.description,
                                    asset: e.asset,
                                    radioValue: e.id
                                }, e.id);
                            })
                        })
                    })
                })
            });
        }
    });
}), q = D;
