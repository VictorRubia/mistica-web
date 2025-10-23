"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Portal", {
    enumerable: true,
    get: function() {
        return u;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactdom = /*#__PURE__*/ _interop_require_default(require("react-dom"));
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
const u = (param)=>{
    let { children: n, className: o } = param;
    const [t, s] = _react.useState(null);
    return _react.useEffect(()=>{
        const e = document.createElement("div");
        return e.style.isolation = "isolate", s(e), document.body.appendChild(e), ()=>{
            document.body.removeChild(e);
        };
    }, []), _react.useEffect(()=>{
        const e = (o == null ? void 0 : o.split(" ")) || [];
        return t == null || t.classList.add(...e), ()=>{
            t == null || t.classList.remove(...e);
        };
    }, [
        o,
        t
    ]), t && /*#__PURE__*/ _reactdom.default.createPortal(n, t);
};
