"use client";
import * as d from "react";
import { useTheme as A } from "./hooks.js";
import { formFieldErrorIsMandatory as D } from "./text-tokens.js";
const G = /*#__PURE__*/ d.createContext({
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
}), P = ()=>d.useContext(G), K = (param)=>{
    let { name: r, label: v, value: s, defaultValue: u, onChange: f, disabled: R } = param;
    const { setRawValue: i, setValue: E, rawValues: o, setFormError: c, register: p, formStatus: x } = P();
    var _o_r;
    return d.useEffect(()=>{
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
    const { texts: j, t: q } = A(), { setRawValue: T, setValue: I, rawValues: w, values: N, formErrors: y, formStatus: b, setFormError: F, register: k } = P(), S = (_ref1 = (_ref = s !== null && s !== void 0 ? s : u) !== null && _ref !== void 0 ? _ref : w[r]) !== null && _ref1 !== void 0 ? _ref1 : "", z = d.useRef(f);
    var _w_r;
    return d.useEffect(()=>{
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
    ]), d.useEffect(()=>{
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
            !w[r] && !i ? e = j.formFieldErrorIsMandatory || q(D) : p && (e = p(N[r], w[r])), F({
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
export { G as FormContext, K as useControlProps, L as useFieldProps, P as useForm };
