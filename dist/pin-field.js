"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return he;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _textfieldbasecssmistica = require("./text-field-base.css-mistica.js");
const _pinfieldcssmistica = require("./pin-field.css-mistica.js");
const _hooks = require("./hooks.js");
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
const _integerfield = require("./integer-field.js");
const _formcontext = require("./form-context.js");
const _dom = require("./utils/dom.js");
const _textfieldcomponents = require("./text-field-components.js");
const _reactdom = require("react-dom");
const _texttokens = require("./text-tokens.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
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
let R = !1;
const te = (param)=>{
    let { length: i = 6, hideCode: n = !1, readSms: d, disabled: h, readOnly: g, value: y, defaultValue: b, onChange: f, inputRef: S } = param;
    var _ref;
    const { texts: C, t: T } = (0, _hooks.useTheme)(), [k, v] = _react.useState((_ref = b == null ? void 0 : b.slice(0, i)) !== null && _ref !== void 0 ? _ref : ""), [F, w] = _react.useState(void 0), l = _react.useRef(Array.from({
        length: i
    }, ()=>null)).current, u = typeof y < "u", r = u ? y : k, p = _react.useCallback((s)=>{
        if (s === r) return;
        u || v(s);
        const e = l[0];
        e && (f == null || f((0, _dom.createChangeEvent)(_object_spread({}, e), s)));
    }, [
        r,
        l,
        u,
        f
    ]);
    _react.useEffect(()=>{
        p(r.slice(0, i));
    }, [
        i,
        r,
        p
    ]), _react.useEffect(()=>{
        if (d && "OTPCredential" in window && !R) {
            R = !0;
            const s = new AbortController();
            return navigator.credentials.get({
                // @ts-expect-error: otp is not in the types yet
                otp: {
                    transport: [
                        "sms"
                    ]
                },
                signal: s.signal
            }).then((e)=>{
                if (e) {
                    const t = e.code.slice(0, i);
                    p(t);
                }
            }).catch(()=>{}).finally(()=>{
                R = !1;
            }), ()=>{
                R = !1, s.abort();
            };
        }
    }, [
        p,
        i,
        d
    ]);
    const $ = (s)=>(e)=>{
            var V;
            const t = e.target.value;
            if (t === "") return;
            const o = r[s];
            let m = t;
            !o || o === t ? m = t : o === t[0] ? m = t.slice(1) : o === t[t.length - 1] && (m = t.slice(0, -1));
            let I = s, P = r;
            if (m.length >= 2) {
                const N = m.slice(0, i - s);
                P = r.slice(0, s) + N, I = Math.min(s + N.length, i - 1);
            } else P = r.slice(0, s) + m + r.slice(s + 1), I = s + 1;
            P !== r && ((0, _reactdom.flushSync)(()=>{
                p(P);
            }), I !== s && I <= i - 1 && ((V = l[I]) == null || V.focus()));
        };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
        space: 8,
        wrap: !0,
        verticalSpace: 16,
        children: Array.from({
            length: i
        }).map((s, e)=>/* @__PURE__ */ {
            var _r_e;
            return (0, _jsxruntime.jsxs)("div", {
                className: g ? _pinfieldcssmistica.readOnlyField : e === F ? _pinfieldcssmistica.focusedField : _pinfieldcssmistica.field,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_integerfield.IntegerInput, {
                        "aria-label": (C.pinFieldInputLabel || T(_texttokens.pinFieldInputLabel)).replace("1$s", String(e + 1)).replace("2$s", String(i)),
                        type: n ? "password" : "text",
                        tabIndex: e > r.length ? -1 : void 0,
                        required: !0,
                        onFocus: ()=>{
                            var o;
                            const t = r.length === i ? -1 : r.length;
                            t >= 0 && t < e ? (o = l[t]) == null || o.focus() : w(e);
                        },
                        onBlur: ()=>{
                            w(void 0);
                        },
                        inputRef: (t)=>{
                            l[e] = t, e === 0 && S(t);
                        },
                        className: (0, _classnames.default)(_textfieldbasecssmistica.input, _pinfieldcssmistica.input, {
                            [_pinfieldcssmistica.passwordInput]: n
                        }),
                        style: {
                            lineHeight: _pinfieldcssmistica.pinInputLineHeight,
                            fontSize: _pinfieldcssmistica.pinInputLineHeight,
                            height: `calc(${_pinfieldcssmistica.pinInputLineHeight} * 3 - 2px)`,
                            borderRadius: _skincontractcssmistica.vars.borderRadii.input
                        },
                        disabled: h,
                        readOnly: g,
                        autoComplete: d ? "one-time-code" : void 0,
                        value: (_r_e = r[e]) !== null && _r_e !== void 0 ? _r_e : "",
                        onChange: $(e),
                        onKeyDown: (t)=>{
                            switch(t.key){
                                case "Backspace":
                                case "Delete":
                                    if (t.currentTarget.value && p(r.slice(0, e) + r.slice(e + 1)), e > 0 && e >= r.length - 1) {
                                        const o = l[e - 1];
                                        o == null || o.focus();
                                    }
                                    break;
                                case "ArrowLeft":
                                    if (e > 0) {
                                        const o = l[e - 1];
                                        o && o.focus();
                                    }
                                    break;
                                case "ArrowRight":
                                    if (e < i - 1) {
                                        const o = l[e + 1];
                                        o && o.focus();
                                    }
                                    break;
                            }
                        }
                    }),
                    n && r[e] && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        "aria-hidden": !0,
                        className: _pinfieldcssmistica.passwordDot,
                        children: "•"
                    })
                ]
            }, e);
        })
    });
}, re = (param)=>{
    let { length: i = 6, hideCode: n = !1, readSms: d = !n, disabled: h, readOnly: g, name: y, value: b, defaultValue: f, helperText: S, error: C, onChangeValue: T, onChange: k, "aria-label": v, "aria-labelledby": F, dataAttributes: w } = param;
    const l = (0, _formcontext.useFieldProps)({
        name: y,
        label: v !== null && v !== void 0 ? v : "",
        value: b,
        defaultValue: f,
        processValue: (r)=>r,
        helperText: S,
        optional: !1,
        error: C,
        disabled: h,
        onChangeValue: T,
        onChange: k
    }), u = _react.useId();
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        role: "group",
        "aria-labelledby": F !== null && F !== void 0 ? F : u,
        className: (0, _classnames.default)(_pinfieldcssmistica.fieldContainer, {
            [_pinfieldcssmistica.disabled]: h
        })
    }, (0, _dom.getPrefixedDataAttributes)(w, "PinField")), {
        children: [
            v && !F && /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    id: u,
                    children: v
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(te, {
                inputRef: l.inputRef,
                length: i,
                hideCode: n,
                readSms: d,
                value: l.value,
                defaultValue: l.defaultValue,
                disabled: l.disabled,
                onChange: l.onChange,
                readOnly: g
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldcomponents.HelperText, {
                error: l.error,
                leftText: l.helperText
            })
        ]
    }));
}, he = re;
