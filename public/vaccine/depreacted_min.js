/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            d: (n, o) => {
                for (var t in o) e.o(o, t) && !e.o(n, t) && Object.defineProperty(n, t, { enumerable: !0, get: o[t] });
            },
            o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
        },
        n = {};
    e.d(n, { default: () => i });
    const o = window.wp.hooks,
        t = Object.create(null);
    function i(e, n = {}) {
        const { since: i, version: r, alternative: d, plugin: a, link: c, hint: s } = n,
            l = `${e} is deprecated${i ? ` since version ${i}` : ""}${r ? ` and will be removed${a ? ` from ${a}` : ""} in version ${r}` : ""}.${d ? ` Please use ${d} instead.` : ""}${c ? ` See: ${c}` : ""}${s ? ` Note: ${s}` : ""}`;
        l in t || ((0, o.doAction)("deprecated", e, n, l), console.warn(l), (t[l] = !0));
    }
    (window.wp = window.wp || {}).deprecated = n.default;
})();
