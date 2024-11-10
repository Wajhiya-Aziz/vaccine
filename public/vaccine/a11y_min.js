/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            n: (t) => {
                var n = t && t.__esModule ? () => t.default : () => t;
                return e.d(n, { a: n }), n;
            },
            d: (t, n) => {
                for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    e.r(t), e.d(t, { setup: () => d, speak: () => p });
    const n = window.wp.domReady;
    var o = e.n(n);
    const i = window.wp.i18n;
    function a(e = "polite") {
        const t = document.createElement("div");
        (t.id = `a11y-speak-${e}`),
            (t.className = "a11y-speak-region"),
            t.setAttribute(
                "style",
                "position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
            ),
            t.setAttribute("aria-live", e),
            t.setAttribute("aria-relevant", "additions text"),
            t.setAttribute("aria-atomic", "true");
        const { body: n } = document;
        return n && n.appendChild(t), t;
    }
    let r = "";
    function d() {
        const e = document.getElementById("a11y-speak-intro-text"),
            t = document.getElementById("a11y-speak-assertive"),
            n = document.getElementById("a11y-speak-polite");
        null === e &&
            (function () {
                const e = document.createElement("p");
                (e.id = "a11y-speak-intro-text"),
                    (e.className = "a11y-speak-intro-text"),
                    (e.textContent = (0, i.__)("Notifications")),
                    e.setAttribute(
                        "style",
                        "position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"
                    ),
                    e.setAttribute("hidden", "hidden");
                const { body: t } = document;
                t && t.appendChild(e);
            })(),
            null === t && a("assertive"),
            null === n && a("polite");
    }
    function p(e, t) {
        !(function () {
            const e = document.getElementsByClassName("a11y-speak-region"),
                t = document.getElementById("a11y-speak-intro-text");
            for (let t = 0; t < e.length; t++) e[t].textContent = "";
            t && t.setAttribute("hidden", "hidden");
        })(),
            (e = (function (e) {
                return (e = e.replace(/<[^<>]+>/g, " ")), r === e && (e += "Â "), (r = e), e;
            })(e));
        const n = document.getElementById("a11y-speak-intro-text"),
            o = document.getElementById("a11y-speak-assertive"),
            i = document.getElementById("a11y-speak-polite");
        o && "assertive" === t ? (o.textContent = e) : i && (i.textContent = e), n && n.removeAttribute("hidden");
    }
    o()(d), ((window.wp = window.wp || {}).a11y = t);
})();
