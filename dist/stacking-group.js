"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return G;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _themevariantcontext = require("./theme-variant-context.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _stackinggroupcssmistica = require("./stacking-group.css-mistica.js");
const _imagecssmistica = require("./image.css-mistica.js");
const _css = require("./utils/css.js");
const _avatar = require("./avatar.js");
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
const x = (param)=>{
    let { moreItemsStyle: s, stacked: t = !0, maxItems: o = 1 / 0, children: n } = param;
    const c = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), e = _react.Children.count(n), m = e - o + 1, p = t ? -8 : 8, i = s.size, a = s.type === "circle" ? "50%" : _skincontractcssmistica.vars.borderRadii.mediaSmall, u = c ? _skincontractcssmistica.vars.colors.textPrimaryInverse : _skincontractcssmistica.vars.colors.textBrand;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: (0, _css.applyCssVars)({
            [_imagecssmistica.vars.mediaBorderRadius]: a
        }),
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: p,
            children: [
                _react.Children.toArray(n).slice(0, e > o ? o - 1 : o),
                e > o && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _stackinggroupcssmistica.moreItems,
                    style: {
                        width: i,
                        height: i,
                        color: u,
                        borderRadius: a,
                        backgroundColor: c ? _skincontractcssmistica.vars.colors.brandHigh : _skincontractcssmistica.vars.colors.brandLow,
                        border: t ? `1px solid ${_skincontractcssmistica.vars.colors.borderLow}` : "none"
                    },
                    children: (0, _avatar.renderText)(i, `+${m}`)
                })
            ]
        })
    });
}, G = x;
