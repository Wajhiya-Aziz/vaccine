/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            d: (t, n) => {
                for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    let n;
    function o(e) {
        if ("string" != typeof e || -1 === e.indexOf("&")) return e;
        void 0 === n && (n = document.implementation && document.implementation.createHTMLDocument ? document.implementation.createHTMLDocument("").createElement("textarea") : document.createElement("textarea")), (n.innerHTML = e);
        const t = n.textContent;
        return (n.innerHTML = ""), t;
    }
    e.r(t), e.d(t, { decodeEntities: () => o }), ((window.wp = window.wp || {}).htmlEntities = t);
})();
