"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return fe;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _formcontext = require("./form-context.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _formcssmistica = require("./form.css-mistica.js");
const _texttokens = require("./text-tokens.js");
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
const _platform = require("./utils/platform.js");
const _dom = require("./utils/dom.js");
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
process.env.NODE_ENV !== "test" && typeof document < "u" && !("scrollBehavior" in document.documentElement.style) && Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("scroll-behavior-polyfill"))).finally(()=>{});
const te = (param)=>{
    let { children: M, className: A, onSubmit: g, initialValues: O = {}, autoJump: k = !1, onValidationErrors: a, getErrorMessageForScreenReader: F, id: P, dataAttributes: T } = param;
    const f = _react.useRef(!0), [u, V] = _react.useState(O), [i, w] = _react.useState(O), [D, m] = _react.useState("filling"), [d, I] = _react.useState({}), l = _react.useRef(/* @__PURE__ */ new Map()), p = _react.useRef(null), { texts: b, t: h, platformOverrides: v } = (0, _hooks.useTheme)(), L = _react.useId(), C = P || L;
    _react.useEffect(()=>(f.current = !0, ()=>{
            f.current = !1;
        }), []);
    const W = _react.useCallback((e, param)=>{
        let { input: s, validator: o, focusableElement: t, label: r } = param;
        s || t ? l.current.set(e, {
            input: s,
            validator: o,
            focusableElement: t,
            label: r
        }) : l.current.delete(e);
    }, []), B = _react.useCallback((param)=>{
        let { name: e, error: s } = param;
        return I((o)=>_object_spread_props(_object_spread({}, o), {
                [e]: s
            }));
    }, []), N = _react.useCallback((e)=>(0, _platform.isIos)(v) ? !(e.tagName === "SELECT" || [
            "date",
            "datetime-local",
            "month"
        ].includes(e.type)) : !0, [
        v
    ]), E = _react.useCallback(()=>{
        var o;
        const e = {};
        for (const [t, { input: r, validator: c }] of l.current)if (r) {
            if (r.disabled) continue;
            if (r.required && !((o = i[t]) != null && o.trim())) e[t] = b.formFieldErrorIsMandatory || h(_texttokens.formFieldErrorIsMandatory);
            else {
                const j = c == null ? void 0 : c(u[t], i[t]);
                j && (e[t] = j);
            }
        }
        const s = Object.keys(e).map((t)=>{
            const r = l.current.get(t);
            return (r == null ? void 0 : r.focusableElement) || (r == null ? void 0 : r.input);
        }).filter(Boolean);
        if (s.length) {
            s.sort((r, c)=>r.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
            const t = s[0];
            N(t) && t.focus();
            try {
                t.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                });
            } catch (e) {}
        }
        return I(e), a && Object.keys(e).length > 0 && a(e), e;
    }, [
        a,
        i,
        b.formFieldErrorIsMandatory,
        h,
        u,
        N
    ]), _ = _react.useCallback((e)=>{
        setTimeout(()=>{
            var s;
            if (k && p.current) {
                const o = Array.from(p.current.querySelectorAll("input, select")), t = (s = l.current.get(e)) == null ? void 0 : s.input, r = o.indexOf(t);
                if (r >= 0) {
                    const c = o[r + 1];
                    c ? c.focus() : t == null || t.blur();
                }
            }
        }, 100);
    }, [
        k
    ]), x = (e)=>[
            ...l.current.keys()
        ].reduce((s, o)=>{
            var t, r;
            return (r = (t = l.current.get(o)) == null ? void 0 : t.input) != null && r.disabled ? s : _object_spread_props(_object_spread({}, s), {
                [o]: e[o]
            });
        }, {}), S = _react.useCallback((e)=>(e == null || e.preventDefault(), m("sending"), Object.keys(E()).length > 0 ? (m("filling"), Promise.resolve()) : Promise.resolve(g(x(u), x(i))).finally(()=>{
            f.current && m("filling");
        })), [
        g,
        i,
        E,
        u
    ]), $ = _react.useCallback((param)=>{
        let { name: e, value: s } = param;
        V((o)=>_object_spread_props(_object_spread({}, o), {
                [e]: s
            }));
    }, []), q = _react.useCallback((param)=>{
        let { name: e, value: s } = param;
        w((o)=>_object_spread_props(_object_spread({}, o), {
                [e]: s
            }));
    }, []), R = Object.entries(d).map((param)=>{
        let [e, s] = param;
        var o;
        return s && ((o = l.current.get(e)) == null ? void 0 : o.label);
    }).filter(Boolean), G = R.length > 1;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_formcontext.FormContext.Provider, {
        value: {
            formStatus: D,
            values: u,
            setValue: $,
            rawValues: i,
            setRawValue: q,
            formErrors: d,
            setFormError: B,
            register: W,
            jumpToNext: _,
            validate: E,
            submit: S,
            formId: C
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("form", _object_spread_props(_object_spread({
            id: C,
            onSubmit: S,
            ref: p,
            className: (0, _classnames.default)(_formcssmistica.form, A),
            noValidate: !0
        }, (0, _dom.getPrefixedDataAttributes)(T, "Form")), {
            children: [
                G ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                        role: "alert",
                        children: F ? F(d) : `${b.formErrorsAlertMessage || h(_texttokens.formErrorsAlertMessage)} ${R.join(", ")}`
                    })
                }) : null,
                M
            ]
        }))
    });
}, fe = te;
