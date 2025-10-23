const t = [
    "en",
    "es",
    "pt",
    "de"
], o = (n)=>{
    const e = n.split("-")[0];
    return t.includes(e) ? e : "en";
};
export { o as localeToLanguage };
