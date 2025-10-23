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
    IntegerInput: function() {
        return T;
    },
    default: function() {
        return j;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _formcontext = require("./form-context.js");
const _textfieldbase = require("./text-field-base.js");
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
const T = (_param)=>{
    var { inputRef: o, value: n, defaultValue: r, type: i = "text" } = _param, s = _object_without_properties(_param, [
        "inputRef",
        "value",
        "defaultValue",
        "type"
    ]);
    const t = (e)=>String(e !== null && e !== void 0 ? e : "").replace(/[^\d]/g, "");
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("input", _object_spread_props(_object_spread({}, s), {
        inputMode: "numeric",
        pattern: "[0-9]*",
        onInput: (e)=>{
            e.currentTarget.value = t(e.currentTarget.value);
        },
        ref: o,
        type: i,
        value: n === void 0 ? void 0 : t(n),
        defaultValue: r === void 0 ? void 0 : t(r)
    }));
}, h = (_param)=>{
    var { disabled: o, error: n, helperText: r, name: i, label: s, optional: t, validate: u, validateOnBlurInsideForm: e, onChange: d, onChangeValue: a, onBlur: l, value: c, defaultValue: m, dataAttributes: g } = _param, I = _object_without_properties(_param, [
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
        "value",
        "defaultValue",
        "dataAttributes"
    ]);
    const f = (0, _formcontext.useFieldProps)({
        name: i,
        label: s,
        value: c,
        defaultValue: m,
        processValue: (v)=>v.trim(),
        helperText: r,
        optional: t,
        error: n,
        disabled: o,
        onBlur: l,
        validate: u,
        validateOnBlurInsideForm: e,
        onChange: d,
        onChangeValue: a
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({}, I, f), {
        inputComponent: T,
        dataAttributes: _object_spread({
            "component-name": "IntegerField",
            testid: "IntegerField"
        }, g)
    }));
}, j = h;
