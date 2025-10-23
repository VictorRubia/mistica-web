"use client";
import * as r from "react";
import d from "react-dom";
const u = (param)=>{
    let { children: n, className: o } = param;
    const [t, s] = r.useState(null);
    return r.useEffect(()=>{
        const e = document.createElement("div");
        return e.style.isolation = "isolate", s(e), document.body.appendChild(e), ()=>{
            document.body.removeChild(e);
        };
    }, []), r.useEffect(()=>{
        const e = (o == null ? void 0 : o.split(" ")) || [];
        return t == null || t.classList.add(...e), ()=>{
            t == null || t.classList.remove(...e);
        };
    }, [
        o,
        t
    ]), t && /*#__PURE__*/ d.createPortal(n, t);
};
export { u as Portal };
