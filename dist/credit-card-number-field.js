"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Er;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _formcontext = require("./form-context.js");
const _hooks = require("./hooks.js");
const _creditcard = require("./utils/credit-card.js");
const _textfieldbase = require("./text-field-base.js");
const _iconcreditcardvisaregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-credit-card-visa-regular.js"));
const _iconvisa = /*#__PURE__*/ _interop_require_default(require("./icons/icon-visa.js"));
const _iconmastercard = /*#__PURE__*/ _interop_require_default(require("./icons/icon-mastercard.js"));
const _iconamex = /*#__PURE__*/ _interop_require_default(require("./icons/icon-amex.js"));
const _rifm = require("rifm");
const _dom = require("./utils/dom.js");
const _common = require("./utils/common.js");
const _creditcardnumberfieldcssmistica = require("./credit-card-number-field.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _iconbuttoncssmistica = require("./icon-button.css-mistica.js");
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
const er = (r)=>{
    var i;
    const n = String(r !== null && r !== void 0 ? r : "").replace(/[^\d]/g, "");
    var _ref;
    return (_ref = (i = n.match(/.{1,4}/g)) == null ? void 0 : i.join(" ")) !== null && _ref !== void 0 ? _ref : n;
}, tr = (_param)=>{
    var { inputRef: r, value: n, defaultValue: i, onChange: e } = _param, c = _object_without_properties(_param, [
        "inputRef",
        "value",
        "defaultValue",
        "onChange"
    ]);
    const [N, m] = _react.useState(i !== null && i !== void 0 ? i : ""), f = _react.useRef(null), u = typeof n < "u", h = u ? n : N, T = _react.useCallback((d)=>{
        u || m(d), f.current && (e == null || e((0, _dom.createChangeEvent)(f.current, d)));
    }, [
        u,
        e
    ]), a = (0, _rifm.useRifm)({
        format: er,
        value: h,
        onChange: T,
        accept: /[\d]+/g
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("input", _object_spread_props(_object_spread({}, c), {
        type: "text",
        inputMode: "decimal",
        maxLength: (0, _creditcard.getCreditCardNumberLength)(a.value) + 3,
        onChange: a.onChange,
        value: a.value,
        ref: (0, _common.combineRefs)(r, f)
    }));
}, ir = (r)=>(0, _creditcard.isVisa)(r) ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconvisa.default, {
        size: _iconbuttoncssmistica.iconSize.default
    }) : (0, _creditcard.isMasterCard)(r) ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconmastercard.default, {
        size: _iconbuttoncssmistica.iconSize.default
    }) : (0, _creditcard.isAmericanExpress)(r) ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconamex.default, {
        size: _iconbuttoncssmistica.iconSize.default
    }) : null, nr = {
    showBackface: !1,
    animationTarget: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcreditcardvisaregular.default, {
        size: _iconbuttoncssmistica.iconSize.default
    }),
    isAnimating: !1
}, or = (r, param)=>{
    let { type: n, value: i } = param;
    if (n === "INPUT") {
        const e = ir(i);
        if (e && !r.showBackface) return {
            animationTarget: e,
            showBackface: !0,
            isAnimating: !0
        };
        if (!(0, _creditcard.isVisa)(i) && !(0, _creditcard.isMasterCard)(i) && !(0, _creditcard.isAmericanExpress)(i) && r.showBackface) return {
            animationTarget: r.animationTarget,
            showBackface: !1,
            isAnimating: !0
        };
        if (e && r.showBackface) return _object_spread_props(_object_spread({}, r), {
            animationTarget: e
        });
    }
    return n === "TRANSITION_END" ? _object_spread_props(_object_spread({}, r), {
        isAnimating: !1
    }) : r;
}, sr = (param)=>{
    let { value: r } = param;
    const [{ showBackface: n, animationTarget: i, isAnimating: e }, c] = _react.useReducer(or, nr);
    return _react.useEffect(()=>{
        c({
            type: "INPUT",
            value: r
        });
    }, [
        r
    ]), /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _creditcardnumberfieldcssmistica.flip,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
            className: _creditcardnumberfieldcssmistica.variants[n ? "backface" : "default"],
            onTransitionEnd: ()=>e && c({
                    type: "TRANSITION_END"
                }),
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _creditcardnumberfieldcssmistica.flipFront,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcreditcardvisaregular.default, {
                        size: _iconbuttoncssmistica.iconSize.default,
                        color: _skincontractcssmistica.vars.colors.neutralMedium
                    })
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _creditcardnumberfieldcssmistica.flipBack,
                    children: i
                })
            ]
        })
    });
}, ar = (_param)=>{
    var { disabled: r, error: n, helperText: i, name: e, label: c, optional: N, validate: m, validateOnBlurInsideForm: f, onChange: u, onChangeValue: h, onBlur: T, acceptedCards: a = {
        americanExpress: !0,
        visa: !0,
        masterCard: !0
    }, value: d, autoComplete: w = "cc-number", defaultValue: F, dataAttributes: R } = _param, z = _object_without_properties(_param, [
        "disabled",
        "error",
        "helperText",
        "name",
        "label",
        "optional",
        "validate",
        "validateOnBlurInsideForm",
        "onChange",
        "onChangeValue",
        "onBlur",
        "acceptedCards",
        "value",
        "autoComplete",
        "defaultValue",
        "dataAttributes"
    ]);
    const { texts: S, t: j } = (0, _hooks.useTheme)(), { jumpToNext: y, rawValues: M, setFormError: D } = (0, _formcontext.useForm)(), g = (t, C)=>{
        const s = S.formCreditCardNumberError || j(_texttokens.formCreditCardNumberError);
        return (0, _creditcard.isAmericanExpress)(t) && !a.americanExpress || (0, _creditcard.isVisa)(t) && !a.visa || (0, _creditcard.isMasterCard)(t) && !a.masterCard || !(0, _creditcard.isValidCreditCardNumber)(t) || (0, _creditcard.getCreditCardNumberLength)(t) !== (t == null ? void 0 : t.length) ? s : m == null ? void 0 : m(t, C);
    }, E = (t)=>t.replace(/\s/g, ""), k = (0, _formcontext.useFieldProps)({
        name: e,
        label: c,
        value: d,
        defaultValue: F,
        processValue: E,
        helperText: i,
        optional: N,
        error: n,
        disabled: r,
        onBlur: T,
        validate: g,
        validateOnBlurInsideForm: f,
        onChange: u,
        onChangeValue: h
    });
    var _ref;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({}, z, k), {
        onChange: (t)=>{
            k.onChange(t);
            const C = t.currentTarget.value, s = E(C);
            if (s.length >= (0, _creditcard.getCreditCardNumberLength)(s)) {
                const B = g == null ? void 0 : g(s, C);
                B ? D({
                    name: e,
                    error: B
                }) : y(e);
            }
        },
        inputComponent: tr,
        autoComplete: w,
        endIcon: /* @__PURE__ */ (0, _jsxruntime.jsx)(sr, {
            value: (_ref = d !== null && d !== void 0 ? d : M[e]) !== null && _ref !== void 0 ? _ref : ""
        }),
        dataAttributes: _object_spread({
            "component-name": "CreditCardNumberField",
            testid: "CreditCardNumberField"
        }, R)
    }));
}, Er = ar;
