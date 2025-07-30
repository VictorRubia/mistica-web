"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FormContext: function() {
        return G;
    },
    useControlProps: function() {
        return K;
    },
    useFieldProps: function() {
        return L;
    },
    useForm: function() {
        return P;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _texttokens = require("./text-tokens.js");
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
const G = /*#__PURE__*/ _react.createContext({
    values: {},
    setValue: ()=>{},
    rawValues: {},
    setRawValue: ()=>{},
    formStatus: "filling",
    register: ()=>{},
    formErrors: {},
    setFormError: ()=>{},
    jumpToNext: ()=>{},
    submit: ()=>{},
    validate: ()=>({}),
    formId: ""
}), P = ()=>_react.useContext(G), K = (param)=>{
    let { name: r, label: v, value: s, defaultValue: u, onChange: f, disabled: R } = param;
    const { setRawValue: i, setValue: E, rawValues: o, setFormError: c, register: p, formStatus: x } = P();
    var _o_r;
    return _react.useEffect(()=>{
        if (o[r] === void 0) {
            var _ref;
            const t = (_ref = s !== null && s !== void 0 ? s : u) !== null && _ref !== void 0 ? _ref : !1;
            E({
                name: r,
                value: t
            }), i({
                name: r,
                value: t
            });
        }
    }, [
        s,
        r,
        u,
        o,
        E,
        i
    ]), {
        name: r,
        label: v,
        value: s,
        defaultValue: u !== null && u !== void 0 ? u : s === void 0 ? (_o_r = o[r]) !== null && _o_r !== void 0 ? _o_r : !1 : void 0,
        focusableRef: (t)=>p(r, {
                focusableElement: t,
                label: v
            }),
        onChange: (t)=>{
            i({
                name: r,
                value: t
            }), E({
                name: r,
                value: t
            }), c({
                name: r,
                error: ""
            }), f == null || f(t);
        },
        disabled: x === "sending" || R
    };
}, L = (param)=>{
    let { name: r, label: v, value: s, defaultValue: u, processValue: f, helperText: R, optional: i, error: E, disabled: o, onBlur: c, validate: p, validateOnBlurInsideForm: x = !0, onChange: t, onChangeValue: V } = param;
    var _ref, _ref1;
    const { texts: j, t: q } = (0, _hooks.useTheme)(), { setRawValue: T, setValue: I, rawValues: w, values: N, formErrors: y, formStatus: b, setFormError: F, register: k } = P(), S = (_ref1 = (_ref = s !== null && s !== void 0 ? s : u) !== null && _ref !== void 0 ? _ref : w[r]) !== null && _ref1 !== void 0 ? _ref1 : "", z = _react.useRef(f);
    var _w_r;
    return _react.useEffect(()=>{
        T({
            name: r,
            value: S
        }), I({
            name: r,
            value: z.current(S)
        });
    }, [
        r,
        S,
        T,
        I
    ]), _react.useEffect(()=>{
        o && F({
            name: r,
            error: void 0
        });
    }, [
        o,
        r,
        F
    ]), {
        value: s,
        defaultValue: u !== null && u !== void 0 ? u : s === void 0 ? (_w_r = w[r]) !== null && _w_r !== void 0 ? _w_r : "" : void 0,
        name: r,
        label: v,
        helperText: y[r] || R,
        required: !i,
        error: E || !!y[r],
        disabled: o || b === "sending",
        onBlur: x ? (l)=>{
            let e;
            !w[r] && !i ? e = j.formFieldErrorIsMandatory || q(_texttokens.formFieldErrorIsMandatory) : p && (e = p(N[r], w[r])), F({
                name: r,
                error: e
            }), c == null || c(l);
        } : c,
        inputRef: (l)=>k(r, {
                input: l,
                validator: p,
                label: v
            }),
        onChange: (l)=>{
            const e = l.currentTarget.value, M = f(e);
            T({
                name: r,
                value: e
            }), I({
                name: r,
                value: M
            }), F({
                name: r,
                error: ""
            }), t == null || t(l), V == null || V(M, e);
        }
    };
};
