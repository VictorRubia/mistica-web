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
    SkipLinkNav: function() {
        return x;
    },
    default: function() {
        return C;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _button = require("./button.js");
const _skiplinkcssmistica = require("./skip-link.css-mistica.js");
const _hooks = require("./hooks.js");
const _texttokens = require("./text-tokens.js");
const _dom = require("./utils/dom.js");
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
const h = (param)=>{
    let { targetId: a, children: r, "aria-label": e, dataAttributes: t } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        className: _skiplinkcssmistica.skipLinkContainer
    }, (0, _dom.getPrefixedDataAttributes)(t, "SkipLink")), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_button.ButtonLink, {
            "aria-label": e,
            href: `#${a}`,
            withChevron: !1,
            children: r
        })
    }));
}, x = (param)=>{
    let { children: a, "aria-label": r, dataAttributes: e } = param;
    const { texts: t, t: o } = (0, _hooks.useTheme)(), l = r || t.skipLinkNavLabel || o(_texttokens.skipLinkNavLabel);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("nav", _object_spread_props(_object_spread({
        "aria-label": l
    }, (0, _dom.getPrefixedDataAttributes)(e, "SkipLinkNav")), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("ul", {
            className: _skiplinkcssmistica.skipLinkList,
            children: _react.Children.map(a, (s)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("li", {
                    children: s
                }))
        })
    }));
}, C = h;
