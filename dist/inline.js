"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return z;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _dom = require("./utils/dom.js");
const _inlinecssmistica = require("./inline.css-mistica.js");
const _css = require("./utils/css.js");
const _platform = require("./utils/platform.js");
const _hooks = require("./hooks.js");
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
const s = (e)=>typeof e == "number" ? `${e}px` : `space-${e}`, M = (e, a)=>{
    const o = (t, i)=>{
        if (typeof t == "number" || typeof t == "string") return {
            [i.default]: s(t)
        };
        const l = {
            [i.mobile]: s(t.mobile),
            [i.desktop]: s(t.desktop)
        };
        return t.tablet && (l[i.tablet] = s(t.tablet)), l;
    }, n = o(e, {
        default: _inlinecssmistica.vars.space,
        mobile: _inlinecssmistica.vars.spaceMobile,
        tablet: _inlinecssmistica.vars.spaceTablet,
        desktop: _inlinecssmistica.vars.spaceDesktop
    });
    if (a) {
        const t = o(a, {
            default: _inlinecssmistica.vars.verticalSpace,
            mobile: _inlinecssmistica.vars.verticalSpaceMobile,
            tablet: _inlinecssmistica.vars.verticalSpaceTablet,
            desktop: _inlinecssmistica.vars.verticalSpaceDesktop
        });
        return _object_spread({}, n, t);
    }
    return n;
}, R = (param)=>{
    let { space: e, verticalSpace: a, className: o, children: n, role: t, alignItems: i = "stretch", "aria-label": l, "aria-labelledby": d, fullWidth: b, wrap: c, dataAttributes: u } = param;
    const { platformOverrides: m } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(o, _inlinecssmistica.inline, c ? _inlinecssmistica.wrap : b ? _inlinecssmistica.fullWidth : _inlinecssmistica.noFullWidth, typeof e == "string" ? c ? _inlinecssmistica.stringSpaceWithWrap : _inlinecssmistica.stringSpace : _inlinecssmistica.marginInline),
        style: _object_spread_props(_object_spread({}, (0, _css.applyCssVars)(M(e, a))), {
            alignItems: i
        }),
        role: t,
        "aria-label": l,
        "aria-labelledby": l ? void 0 : d
    }, (0, _dom.getPrefixedDataAttributes)(u, "Inline")), {
        children: _react.Children.map(n, (p)=>p || p === 0 ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                role: t === "list" ? "listitem" : void 0,
                style: {
                    // Hack to fix https://jira.tid.es/browse/WEB-1683
                    // In iOS the inline component sometimes cuts the last line of the content
                    paddingBottom: (0, _platform.isIos)(m) && !(0, _platform.isRunningAcceptanceTest)(m) ? 1 : void 0
                },
                children: p
            }) : null)
    }));
}, z = R;
