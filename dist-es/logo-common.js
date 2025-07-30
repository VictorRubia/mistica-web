import { vars as e } from "./logo.css-mistica.js";
const p = (t)=>{
    if (typeof t == "number") return {
        [e.size]: `${t}px`
    };
    const r = {
        [e.sizeMobile]: `${t.mobile}px`,
        [e.sizeDesktop]: `${t.desktop}px`
    };
    return t.tablet && (r[e.sizeTablet] = `${t.tablet}px`), r;
};
export { p as calcInlineVars };
