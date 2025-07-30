"use client";
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
import { jsx as r } from "react/jsx-runtime";
import * as A from "react";
import R, { SheetBody as u } from "./sheet-common.js";
import { ButtonPrimary as l, ButtonSecondary as y, ButtonLink as P } from "./button.js";
const v = /*#__PURE__*/ A.forwardRef((param, S)=>{
    let { title: c, subtitle: s, description: d, button: f, secondaryButton: m, buttonLink: a, onClose: h, dataAttributes: p, onPressButton: o } = param;
    const n = (e, t)=>()=>{
            o == null || o(t), e();
        }, i = (_param)=>{
        var { text: e } = _param, t = _object_without_properties(_param, [
            "text"
        ]);
        return _object_spread({
            children: e
        }, t);
    };
    return /* @__PURE__ */ r(R, {
        onClose: h,
        ref: S,
        dataAttributes: _object_spread({
            "component-name": "ActionsSheet"
        }, p),
        children: (param)=>{
            let { modalTitleId: e, closeModal: t } = param;
            return /* @__PURE__ */ r(u, {
                title: c,
                subtitle: s,
                description: d,
                modalTitleId: e,
                button: /* @__PURE__ */ r(l, _object_spread_props(_object_spread({}, i(f)), {
                    onPress: n(t, "PRIMARY")
                })),
                secondaryButton: m ? /* @__PURE__ */ r(y, _object_spread_props(_object_spread({}, i(m)), {
                    onPress: n(t, "SECONDARY")
                })) : void 0,
                link: a ? /* @__PURE__ */ r(P, _object_spread_props(_object_spread({
                    small: !0
                }, i(a)), {
                    onPress: n(t, "LINK")
                })) : void 0
            });
        }
    });
}), Y = v;
export { Y as default };
