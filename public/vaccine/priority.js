/*! This file is auto-generated */
(() => {
    var e = {
            5033: (e, t, n) => {
                var o, r, i;
                (r = []),
                    void 0 ===
                        (i =
                            "function" ==
                            typeof (o = function () {
                                "use strict";
                                var e,
                                    t,
                                    o,
                                    r,
                                    i = "undefined" != typeof window ? window : null != typeof n.g ? n.g : this || {},
                                    u = (i.cancelRequestAnimationFrame && i.requestAnimationFrame) || setTimeout,
                                    a = i.cancelRequestAnimationFrame || clearTimeout,
                                    c = [],
                                    l = 0,
                                    s = !1,
                                    d = 7,
                                    f = 35,
                                    m = 125,
                                    b = 0,
                                    p = 0,
                                    w = 0,
                                    v = {
                                        get didTimeout() {
                                            return !1;
                                        },
                                        timeRemaining: function () {
                                            var e = d - (Date.now() - p);
                                            return e < 0 ? 0 : e;
                                        },
                                    },
                                    y = g(function () {
                                        (d = 22), (m = 66), (f = 0);
                                    });
                                function g(e) {
                                    var t,
                                        n,
                                        o = 99,
                                        r = function () {
                                            var i = Date.now() - n;
                                            i < o ? (t = setTimeout(r, o - i)) : ((t = null), e());
                                        };
                                    return function () {
                                        (n = Date.now()), t || (t = setTimeout(r, o));
                                    };
                                }
                                function h() {
                                    s && (r && a(r), o && clearTimeout(o), (s = !1));
                                }
                                function k() {
                                    125 != m && ((d = 7), (m = 125), (f = 35), s && (h(), C())), y();
                                }
                                function T() {
                                    (r = null), (o = setTimeout(D, 0));
                                }
                                function q() {
                                    (o = null), u(T);
                                }
                                function C() {
                                    s || ((t = m - (Date.now() - p)), (e = Date.now()), (s = !0), f && t < f && (t = f), t > 9 ? (o = setTimeout(q, t)) : ((t = 0), q()));
                                }
                                function D() {
                                    var n,
                                        r,
                                        i,
                                        u = d > 9 ? 9 : 1;
                                    if (((p = Date.now()), (s = !1), (o = null), l > 2 || p - t - 50 < e)) for (r = 0, i = c.length; r < i && v.timeRemaining() > u; r++) (n = c.shift()), w++, n && n(v);
                                    c.length ? C() : (l = 0);
                                }
                                function I(e) {
                                    return b++, c.push(e), C(), b;
                                }
                                function O(e) {
                                    var t = e - 1 - w;
                                    c[t] && (c[t] = null);
                                }
                                if (i.requestIdleCallback && i.cancelIdleCallback)
                                    try {
                                        i.requestIdleCallback(function () {}, { timeout: 0 });
                                    } catch (e) {
                                        !(function (e) {
                                            var t, n;
                                            if (
                                                ((i.requestIdleCallback = function (t, n) {
                                                    return n && "number" == typeof n.timeout ? e(t, n.timeout) : e(t);
                                                }),
                                                i.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
                                            ) {
                                                if (!(n = Object.getOwnPropertyDescriptor(t, "timeRemaining")) || !n.configurable || !n.get) return;
                                                Object.defineProperty(t, "timeRemaining", {
                                                    value: function () {
                                                        return n.get.call(this);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                });
                                            }
                                        })(i.requestIdleCallback);
                                    }
                                else
                                    (i.requestIdleCallback = I),
                                        (i.cancelIdleCallback = O),
                                        i.document &&
                                            document.addEventListener &&
                                            (i.addEventListener("scroll", k, !0),
                                            i.addEventListener("resize", k),
                                            document.addEventListener("focus", k, !0),
                                            document.addEventListener("mouseover", k, !0),
                                            ["click", "keypress", "touchstart", "mousedown"].forEach(function (e) {
                                                document.addEventListener(e, k, { capture: !0, passive: !0 });
                                            }),
                                            i.MutationObserver && new MutationObserver(k).observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }));
                                return { request: I, cancel: O };
                            })
                                ? o.apply(t, r)
                                : o) || (e.exports = i);
            },
        },
        t = {};
    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var i = (t[o] = { exports: {} });
        return e[o](i, i.exports, n), i.exports;
    }
    (n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
        (n.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var o = {};
    (() => {
        "use strict";
        n.r(o), n.d(o, { createQueue: () => t });
        n(5033);
        const e =
                "undefined" == typeof window
                    ? (e) => {
                          setTimeout(() => e(Date.now()), 0);
                      }
                    : window.requestIdleCallback,
            t = () => {
                const t = new Map();
                let n = !1;
                const o = (r) => {
                    for (const [e, n] of t) if ((t.delete(e), n(), "number" == typeof r || r.timeRemaining() <= 0)) break;
                    0 !== t.size ? e(o) : (n = !1);
                };
                return {
                    add: (r, i) => {
                        t.set(r, i), n || ((n = !0), e(o));
                    },
                    flush: (e) => {
                        const n = t.get(e);
                        return void 0 !== n && (t.delete(e), n(), !0);
                    },
                    cancel: (e) => t.delete(e),
                    reset: () => {
                        t.clear(), (n = !1);
                    },
                };
            };
    })(),
        ((window.wp = window.wp || {}).priorityQueue = o);
})();
