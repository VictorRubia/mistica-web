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
    default: function() {
        return N;
    },
    useIsDismissable: function() {
        return M;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _hooks = require("./hooks.js");
const _iconbutton = require("./icon-button.js");
const _maybedismissablecssmistica = require("./maybe-dismissable.css-mistica.js");
const _themevariantcontext = require("./theme-variant-context.js");
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
const a = /*#__PURE__*/ _react.createContext(!1), M = ()=>_react.useContext(a), C = (param)=>{
    let { children: e, width: r, onClose: s, "aria-label": i, variant: m } = param;
    const { texts: l, t: n } = (0, _hooks.useTheme)();
    return s ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("section", {
        className: _maybedismissablecssmistica.dismissableContainer,
        "aria-label": i,
        style: {
            width: r || "100%",
            minHeight: "100%"
        },
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(a.Provider, {
                value: !0,
                children: e
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
                variant: m,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _maybedismissablecssmistica.dismissableButton,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, {
                        dataAttributes: {
                            testid: "closeButton"
                        },
                        onPress: s,
                        "aria-label": l.closeButtonLabel || n(_texttokens.closeButtonLabel),
                        small: !0,
                        Icon: _iconcloseregular.default
                    })
                })
            })
        ]
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: e
    });
}, N = C;
