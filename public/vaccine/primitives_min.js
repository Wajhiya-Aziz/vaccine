/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    function r(e) {
        var t,
            n,
            o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
            if (Array.isArray(e)) {
                var a = e.length;
                for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
            } else for (n in e) e[n] && (o && (o += " "), (o += n));
        return o;
    }
    e.r(t),
        e.d(t, {
            BlockQuotation: () => g,
            Circle: () => i,
            Defs: () => m,
            G: () => l,
            HorizontalRule: () => b,
            Line: () => c,
            LinearGradient: () => u,
            Path: () => s,
            Polygon: () => d,
            RadialGradient: () => p,
            Rect: () => f,
            SVG: () => w,
            Stop: () => y,
            View: () => v,
        });
    const n = function () {
            for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = r(e)) && (o && (o += " "), (o += t));
            return o;
        },
        o = window.wp.element,
        a = window.ReactJSXRuntime,
        i = (e) => (0, o.createElement)("circle", e),
        l = (e) => (0, o.createElement)("g", e),
        c = (e) => (0, o.createElement)("line", e),
        s = (e) => (0, o.createElement)("path", e),
        d = (e) => (0, o.createElement)("polygon", e),
        f = (e) => (0, o.createElement)("rect", e),
        m = (e) => (0, o.createElement)("defs", e),
        p = (e) => (0, o.createElement)("radialGradient", e),
        u = (e) => (0, o.createElement)("linearGradient", e),
        y = (e) => (0, o.createElement)("stop", e),
        w = (0, o.forwardRef)(({ className: e, isPressed: t, ...r }, o) => {
            const i = { ...r, className: n(e, { "is-pressed": t }) || void 0, "aria-hidden": !0, focusable: !1 };
            return (0, a.jsx)("svg", { ...i, ref: o });
        });
    w.displayName = "SVG";
    const b = "hr",
        g = "blockquote",
        v = "div";
    (window.wp = window.wp || {}).primitives = t;
})();
