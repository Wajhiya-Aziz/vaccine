/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            n: (t) => {
                var o = t && t.__esModule ? () => t.default : () => t;
                return e.d(o, { a: o }), o;
            },
            d: (t, o) => {
                for (var r in o) e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    e.r(t), e.d(t, { __unstableAwaitPromise: () => p, apiFetch: () => i, controls: () => u, dispatch: () => d, select: () => a, syncSelect: () => l });
    const o = window.wp.apiFetch;
    var r = e.n(o);
    const n = window.wp.data,
        s = window.wp.deprecated;
    var c = e.n(s);
    function i(e) {
        return { type: "API_FETCH", request: e };
    }
    function a(e, t, ...o) {
        return c()("`select` control in `@wordpress/data-controls`", { since: "5.7", alternative: "built-in `resolveSelect` control in `@wordpress/data`" }), n.controls.resolveSelect(e, t, ...o);
    }
    function l(e, t, ...o) {
        return c()("`syncSelect` control in `@wordpress/data-controls`", { since: "5.7", alternative: "built-in `select` control in `@wordpress/data`" }), n.controls.select(e, t, ...o);
    }
    function d(e, t, ...o) {
        return c()("`dispatch` control in `@wordpress/data-controls`", { since: "5.7", alternative: "built-in `dispatch` control in `@wordpress/data`" }), n.controls.dispatch(e, t, ...o);
    }
    const p = function (e) {
            return { type: "AWAIT_PROMISE", promise: e };
        },
        u = { AWAIT_PROMISE: ({ promise: e }) => e, API_FETCH: ({ request: e }) => r()(e) };
    (window.wp = window.wp || {}).dataControls = t;
})();