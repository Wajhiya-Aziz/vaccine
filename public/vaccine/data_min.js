/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            66: (e) => {
                var t = function (e) {
                    return (
                        (function (e) {
                            return !!e && "object" == typeof e;
                        })(e) &&
                        !(function (e) {
                            var t = Object.prototype.toString.call(e);
                            return (
                                "[object RegExp]" === t ||
                                "[object Date]" === t ||
                                (function (e) {
                                    return e.$$typeof === r;
                                })(e)
                            );
                        })(e)
                    );
                };
                var r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
                function n(e, t) {
                    return !1 !== t.clone && t.isMergeableObject(e) ? u(((r = e), Array.isArray(r) ? [] : {}), e, t) : e;
                    var r;
                }
                function o(e, t, r) {
                    return e.concat(t).map(function (e) {
                        return n(e, r);
                    });
                }
                function s(e) {
                    return Object.keys(e).concat(
                        (function (e) {
                            return Object.getOwnPropertySymbols
                                ? Object.getOwnPropertySymbols(e).filter(function (t) {
                                      return Object.propertyIsEnumerable.call(e, t);
                                  })
                                : [];
                        })(e)
                    );
                }
                function i(e, t) {
                    try {
                        return t in e;
                    } catch (e) {
                        return !1;
                    }
                }
                function c(e, t, r) {
                    var o = {};
                    return (
                        r.isMergeableObject(e) &&
                            s(e).forEach(function (t) {
                                o[t] = n(e[t], r);
                            }),
                        s(t).forEach(function (s) {
                            (function (e, t) {
                                return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
                            })(e, s) ||
                                (i(e, s) && r.isMergeableObject(t[s])
                                    ? (o[s] = (function (e, t) {
                                          if (!t.customMerge) return u;
                                          var r = t.customMerge(e);
                                          return "function" == typeof r ? r : u;
                                      })(s, r)(e[s], t[s], r))
                                    : (o[s] = n(t[s], r)));
                        }),
                        o
                    );
                }
                function u(e, r, s) {
                    ((s = s || {}).arrayMerge = s.arrayMerge || o), (s.isMergeableObject = s.isMergeableObject || t), (s.cloneUnlessOtherwiseSpecified = n);
                    var i = Array.isArray(r);
                    return i === Array.isArray(e) ? (i ? s.arrayMerge(e, r, s) : c(e, r, s)) : n(r, s);
                }
                u.all = function (e, t) {
                    if (!Array.isArray(e)) throw new Error("first argument should be an array");
                    return e.reduce(function (e, r) {
                        return u(e, r, t);
                    }, {});
                };
                var a = u;
                e.exports = a;
            },
            3249: (e) => {
                function t(e) {
                    return (
                        (t =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  }),
                        t(e)
                    );
                }
                function r(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                function n(e, t) {
                    var r = e._map,
                        n = e._arrayTreeMap,
                        o = e._objectTreeMap;
                    if (r.has(t)) return r.get(t);
                    for (var s = Object.keys(t).sort(), i = Array.isArray(t) ? n : o, c = 0; c < s.length; c++) {
                        var u = s[c];
                        if (void 0 === (i = i.get(u))) return;
                        var a = t[u];
                        if (void 0 === (i = i.get(a))) return;
                    }
                    var l = i.get("_ekm_value");
                    return l ? (r.delete(l[0]), (l[0] = t), i.set("_ekm_value", l), r.set(t, l), l) : void 0;
                }
                var o = (function () {
                    function e(t) {
                        if (
                            ((function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                            this.clear(),
                            t instanceof e)
                        ) {
                            var r = [];
                            t.forEach(function (e, t) {
                                r.push([t, e]);
                            }),
                                (t = r);
                        }
                        if (null != t) for (var n = 0; n < t.length; n++) this.set(t[n][0], t[n][1]);
                    }
                    var o, s, i;
                    return (
                        (o = e),
                        (s = [
                            {
                                key: "set",
                                value: function (r, n) {
                                    if (null === r || "object" !== t(r)) return this._map.set(r, n), this;
                                    for (var o = Object.keys(r).sort(), s = [r, n], i = Array.isArray(r) ? this._arrayTreeMap : this._objectTreeMap, c = 0; c < o.length; c++) {
                                        var u = o[c];
                                        i.has(u) || i.set(u, new e()), (i = i.get(u));
                                        var a = r[u];
                                        i.has(a) || i.set(a, new e()), (i = i.get(a));
                                    }
                                    var l = i.get("_ekm_value");
                                    return l && this._map.delete(l[0]), i.set("_ekm_value", s), this._map.set(r, s), this;
                                },
                            },
                            {
                                key: "get",
                                value: function (e) {
                                    if (null === e || "object" !== t(e)) return this._map.get(e);
                                    var r = n(this, e);
                                    return r ? r[1] : void 0;
                                },
                            },
                            {
                                key: "has",
                                value: function (e) {
                                    return null === e || "object" !== t(e) ? this._map.has(e) : void 0 !== n(this, e);
                                },
                            },
                            {
                                key: "delete",
                                value: function (e) {
                                    return !!this.has(e) && (this.set(e, void 0), !0);
                                },
                            },
                            {
                                key: "forEach",
                                value: function (e) {
                                    var r = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                                    this._map.forEach(function (o, s) {
                                        null !== s && "object" === t(s) && (o = o[1]), e.call(n, o, s, r);
                                    });
                                },
                            },
                            {
                                key: "clear",
                                value: function () {
                                    (this._map = new Map()), (this._arrayTreeMap = new Map()), (this._objectTreeMap = new Map());
                                },
                            },
                            {
                                key: "size",
                                get: function () {
                                    return this._map.size;
                                },
                            },
                        ]),
                        s && r(o.prototype, s),
                        i && r(o, i),
                        e
                    );
                })();
                e.exports = o;
            },
        },
        t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var s = (t[n] = { exports: {} });
        return e[n](s, s.exports, r), s.exports;
    }
    (r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, { a: t }), t;
    }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var n = {};
    (() => {
        r.r(n),
            r.d(n, {
                AsyncModeProvider: () => $e,
                RegistryConsumer: () => He,
                RegistryProvider: () => We,
                combineReducers: () => ut,
                controls: () => L,
                createReduxStore: () => be,
                createRegistry: () => me,
                createRegistryControl: () => I,
                createRegistrySelector: () => _,
                createSelector: () => B,
                dispatch: () => it,
                plugins: () => o,
                register: () => dt,
                registerGenericStore: () => pt,
                registerStore: () => gt,
                resolveSelect: () => at,
                select: () => ct,
                subscribe: () => ft,
                suspendSelect: () => lt,
                use: () => yt,
                useDispatch: () => st,
                useRegistry: () => Ke,
                useSelect: () => Ye,
                useSuspenseSelect: () => Ze,
                withDispatch: () => nt,
                withRegistry: () => ot,
                withSelect: () => tt,
            });
        var e = {};
        r.r(e),
            r.d(e, {
                countSelectorsByStatus: () => re,
                getCachedResolvers: () => ee,
                getIsResolving: () => $,
                getResolutionError: () => Y,
                getResolutionState: () => X,
                hasFinishedResolution: () => J,
                hasResolutionFailed: () => Q,
                hasResolvingSelectors: () => te,
                hasStartedResolution: () => q,
                isResolving: () => Z,
            });
        var t = {};
        r.r(t),
            r.d(t, {
                failResolution: () => se,
                failResolutions: () => ue,
                finishResolution: () => oe,
                finishResolutions: () => ce,
                invalidateResolution: () => ae,
                invalidateResolutionForStore: () => le,
                invalidateResolutionForStoreSelector: () => fe,
                startResolution: () => ne,
                startResolutions: () => ie,
            });
        var o = {};
        r.r(o), r.d(o, { persistence: () => Me });
        const s = window.wp.deprecated;
        var i = r.n(s);
        function c(e) {
            return (
                (c =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          }),
                c(e)
            );
        }
        function u(e) {
            var t = (function (e, t) {
                if ("object" !== c(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== c(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === c(t) ? t : String(t);
        }
        function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                    (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? a(Object(r), !0).forEach(function (t) {
                          var n, o, s;
                          (n = e), (o = t), (s = r[t]), (o = u(o)) in n ? Object.defineProperty(n, o, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (n[o] = s);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : a(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
            }
            return e;
        }
        function f(e) {
            return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
        }
        var p = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
            g = function () {
                return Math.random().toString(36).substring(7).split("").join(".");
            },
            y = {
                INIT: "@@redux/INIT" + g(),
                REPLACE: "@@redux/REPLACE" + g(),
                PROBE_UNKNOWN_ACTION: function () {
                    return "@@redux/PROBE_UNKNOWN_ACTION" + g();
                },
            };
        function d(e) {
            if ("object" != typeof e || null === e) return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t;
        }
        function b(e, t, r) {
            var n;
            if (("function" == typeof t && "function" == typeof r) || ("function" == typeof r && "function" == typeof arguments[3])) throw new Error(f(0));
            if (("function" == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
                if ("function" != typeof r) throw new Error(f(1));
                return r(b)(e, t);
            }
            if ("function" != typeof e) throw new Error(f(2));
            var o = e,
                s = t,
                i = [],
                c = i,
                u = !1;
            function a() {
                c === i && (c = i.slice());
            }
            function l() {
                if (u) throw new Error(f(3));
                return s;
            }
            function g(e) {
                if ("function" != typeof e) throw new Error(f(4));
                if (u) throw new Error(f(5));
                var t = !0;
                return (
                    a(),
                    c.push(e),
                    function () {
                        if (t) {
                            if (u) throw new Error(f(6));
                            (t = !1), a();
                            var r = c.indexOf(e);
                            c.splice(r, 1), (i = null);
                        }
                    }
                );
            }
            function v(e) {
                if (!d(e)) throw new Error(f(7));
                if (void 0 === e.type) throw new Error(f(8));
                if (u) throw new Error(f(9));
                try {
                    (u = !0), (s = o(s, e));
                } finally {
                    u = !1;
                }
                for (var t = (i = c), r = 0; r < t.length; r++) {
                    (0, t[r])();
                }
                return e;
            }
            return (
                v({ type: y.INIT }),
                ((n = {
                    dispatch: v,
                    subscribe: g,
                    getState: l,
                    replaceReducer: function (e) {
                        if ("function" != typeof e) throw new Error(f(10));
                        (o = e), v({ type: y.REPLACE });
                    },
                })[p] = function () {
                    var e,
                        t = g;
                    return (
                        ((e = {
                            subscribe: function (e) {
                                if ("object" != typeof e || null === e) throw new Error(f(11));
                                function r() {
                                    e.next && e.next(l());
                                }
                                return r(), { unsubscribe: t(r) };
                            },
                        })[p] = function () {
                            return this;
                        }),
                        e
                    );
                }),
                n
            );
        }
        function v() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return 0 === t.length
                ? function (e) {
                      return e;
                  }
                : 1 === t.length
                ? t[0]
                : t.reduce(function (e, t) {
                      return function () {
                          return e(t.apply(void 0, arguments));
                      };
                  });
        }
        function h() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function (e) {
                return function () {
                    var r = e.apply(void 0, arguments),
                        n = function () {
                            throw new Error(f(15));
                        },
                        o = {
                            getState: r.getState,
                            dispatch: function () {
                                return n.apply(void 0, arguments);
                            },
                        },
                        s = t.map(function (e) {
                            return e(o);
                        });
                    return (n = v.apply(void 0, s)(r.dispatch)), l(l({}, r), {}, { dispatch: n });
                };
            };
        }
        var S = r(3249),
            O = r.n(S);
        const m = window.wp.reduxRoutine;
        var w = r.n(m);
        const R = window.wp.compose;
        function E(e) {
            const t = Object.keys(e);
            return function (r = {}, n) {
                const o = {};
                let s = !1;
                for (const i of t) {
                    const t = e[i],
                        c = r[i],
                        u = t(c, n);
                    (o[i] = u), (s = s || u !== c);
                }
                return s ? o : r;
            };
        }
        function _(e) {
            const t = new WeakMap(),
                r = (...n) => {
                    let o = t.get(r.registry);
                    return o || ((o = e(r.registry.select)), t.set(r.registry, o)), o(...n);
                };
            return (r.isRegistrySelector = !0), r;
        }
        function I(e) {
            return (e.isRegistryControl = !0), e;
        }
        const T = "@@data/SELECT",
            j = "@@data/RESOLVE_SELECT",
            N = "@@data/DISPATCH";
        function A(e) {
            return null !== e && "object" == typeof e;
        }
        const L = {
                select: function (e, t, ...r) {
                    return { type: T, storeKey: A(e) ? e.name : e, selectorName: t, args: r };
                },
                resolveSelect: function (e, t, ...r) {
                    return { type: j, storeKey: A(e) ? e.name : e, selectorName: t, args: r };
                },
                dispatch: function (e, t, ...r) {
                    return { type: N, storeKey: A(e) ? e.name : e, actionName: t, args: r };
                },
            },
            P = {
                [T]: I((e) => ({ storeKey: t, selectorName: r, args: n }) => e.select(t)[r](...n)),
                [j]: I((e) => ({ storeKey: t, selectorName: r, args: n }) => {
                    const o = e.select(t)[r].hasResolver ? "resolveSelect" : "select";
                    return e[o](t)[r](...n);
                }),
                [N]: I((e) => ({ storeKey: t, actionName: r, args: n }) => e.dispatch(t)[r](...n)),
            },
            x = window.wp.privateApis,
            { lock: M, unlock: F } = (0, x.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
                "I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.",
                "@wordpress/data"
            );
        const U = () => (e) => (t) => {
                return !(r = t) || ("object" != typeof r && "function" != typeof r) || "function" != typeof r.then
                    ? e(t)
                    : t.then((t) => {
                          if (t) return e(t);
                      });
                var r;
            },
            D = (e, t) => () => (r) => (n) => {
                const o = e.select(t).getCachedResolvers();
                return (
                    Object.entries(o).forEach(([r, o]) => {
                        const s = e.stores[t]?.resolvers?.[r];
                        s &&
                            s.shouldInvalidate &&
                            o.forEach((o, i) => {
                                void 0 !== o && (("finished" !== o.status && "error" !== o.status) || (s.shouldInvalidate(n, ...i) && e.dispatch(t).invalidateResolution(r, i)));
                            });
                    }),
                    r(n)
                );
            };
        function k(e) {
            return () => (t) => (r) => ("function" == typeof r ? r(e) : t(r));
        }
        function C(e) {
            if (null == e) return [];
            const t = e.length;
            let r = t;
            for (; r > 0 && void 0 === e[r - 1]; ) r--;
            return r === t ? e : e.slice(0, r);
        }
        const V = ((G = "selectorName"),
        (e) => (t = {}, r) => {
            const n = r[G];
            if (void 0 === n) return t;
            const o = e(t[n], r);
            return o === t[n] ? t : { ...t, [n]: o };
        })((e = new (O())(), t) => {
            switch (t.type) {
                case "START_RESOLUTION": {
                    const r = new (O())(e);
                    return r.set(C(t.args), { status: "resolving" }), r;
                }
                case "FINISH_RESOLUTION": {
                    const r = new (O())(e);
                    return r.set(C(t.args), { status: "finished" }), r;
                }
                case "FAIL_RESOLUTION": {
                    const r = new (O())(e);
                    return r.set(C(t.args), { status: "error", error: t.error }), r;
                }
                case "START_RESOLUTIONS": {
                    const r = new (O())(e);
                    for (const e of t.args) r.set(C(e), { status: "resolving" });
                    return r;
                }
                case "FINISH_RESOLUTIONS": {
                    const r = new (O())(e);
                    for (const e of t.args) r.set(C(e), { status: "finished" });
                    return r;
                }
                case "FAIL_RESOLUTIONS": {
                    const r = new (O())(e);
                    return (
                        t.args.forEach((e, n) => {
                            const o = { status: "error", error: void 0 },
                                s = t.errors[n];
                            s && (o.error = s), r.set(C(e), o);
                        }),
                        r
                    );
                }
                case "INVALIDATE_RESOLUTION": {
                    const r = new (O())(e);
                    return r.delete(C(t.args)), r;
                }
            }
            return e;
        });
        var G;
        const H = (e = {}, t) => {
            switch (t.type) {
                case "INVALIDATE_RESOLUTION_FOR_STORE":
                    return {};
                case "INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR":
                    if (t.selectorName in e) {
                        const { [t.selectorName]: r, ...n } = e;
                        return n;
                    }
                    return e;
                case "START_RESOLUTION":
                case "FINISH_RESOLUTION":
                case "FAIL_RESOLUTION":
                case "START_RESOLUTIONS":
                case "FINISH_RESOLUTIONS":
                case "FAIL_RESOLUTIONS":
                case "INVALIDATE_RESOLUTION":
                    return V(e, t);
            }
            return e;
        };
        var W = {};
        function K(e) {
            return [e];
        }
        function z(e, t, r) {
            var n;
            if (e.length !== t.length) return !1;
            for (n = r; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
        }
        function B(e, t) {
            var r,
                n = t || K;
            function o() {
                r = new WeakMap();
            }
            function s() {
                var t,
                    o,
                    s,
                    i,
                    c,
                    u = arguments.length;
                for (i = new Array(u), s = 0; s < u; s++) i[s] = arguments[s];
                for (
                    t = (function (e) {
                        var t,
                            n,
                            o,
                            s,
                            i,
                            c = r,
                            u = !0;
                        for (t = 0; t < e.length; t++) {
                            if (!(i = n = e[t]) || "object" != typeof i) {
                                u = !1;
                                break;
                            }
                            c.has(n) ? (c = c.get(n)) : ((o = new WeakMap()), c.set(n, o), (c = o));
                        }
                        return (
                            c.has(W) ||
                                (((s = (function () {
                                    var e = {
                                        clear: function () {
                                            e.head = null;
                                        },
                                    };
                                    return e;
                                })()).isUniqueByDependants = u),
                                c.set(W, s)),
                            c.get(W)
                        );
                    })((c = n.apply(null, i))),
                        t.isUniqueByDependants || (t.lastDependants && !z(c, t.lastDependants, 0) && t.clear(), (t.lastDependants = c)),
                        o = t.head;
                    o;

                ) {
                    if (z(o.args, i, 1)) return o !== t.head && ((o.prev.next = o.next), o.next && (o.next.prev = o.prev), (o.next = t.head), (o.prev = null), (t.head.prev = o), (t.head = o)), o.val;
                    o = o.next;
                }
                return (o = { val: e.apply(null, i) }), (i[0] = null), (o.args = i), t.head && ((t.head.prev = o), (o.next = t.head)), (t.head = o), o.val;
            }
            return (s.getDependants = n), (s.clear = o), o(), s;
        }
        function X(e, t, r) {
            const n = e[t];
            if (n) return n.get(C(r));
        }
        function $(e, t, r) {
            i()("wp.data.select( store ).getIsResolving", { since: "6.6", version: "6.8", alternative: "wp.data.select( store ).getResolutionState" });
            const n = X(e, t, r);
            return n && "resolving" === n.status;
        }
        function q(e, t, r) {
            return void 0 !== X(e, t, r);
        }
        function J(e, t, r) {
            const n = X(e, t, r)?.status;
            return "finished" === n || "error" === n;
        }
        function Q(e, t, r) {
            return "error" === X(e, t, r)?.status;
        }
        function Y(e, t, r) {
            const n = X(e, t, r);
            return "error" === n?.status ? n.error : null;
        }
        function Z(e, t, r) {
            return "resolving" === X(e, t, r)?.status;
        }
        function ee(e) {
            return e;
        }
        function te(e) {
            return Object.values(e).some((e) => Array.from(e._map.values()).some((e) => "resolving" === e[1]?.status));
        }
        const re = B(
            (e) => {
                const t = {};
                return (
                    Object.values(e).forEach((e) =>
                        Array.from(e._map.values()).forEach((e) => {
                            var r;
                            const n = null !== (r = e[1]?.status) && void 0 !== r ? r : "error";
                            t[n] || (t[n] = 0), t[n]++;
                        })
                    ),
                    t
                );
            },
            (e) => [e]
        );
        function ne(e, t) {
            return { type: "START_RESOLUTION", selectorName: e, args: t };
        }
        function oe(e, t) {
            return { type: "FINISH_RESOLUTION", selectorName: e, args: t };
        }
        function se(e, t, r) {
            return { type: "FAIL_RESOLUTION", selectorName: e, args: t, error: r };
        }
        function ie(e, t) {
            return { type: "START_RESOLUTIONS", selectorName: e, args: t };
        }
        function ce(e, t) {
            return { type: "FINISH_RESOLUTIONS", selectorName: e, args: t };
        }
        function ue(e, t, r) {
            return { type: "FAIL_RESOLUTIONS", selectorName: e, args: t, errors: r };
        }
        function ae(e, t) {
            return { type: "INVALIDATE_RESOLUTION", selectorName: e, args: t };
        }
        function le() {
            return { type: "INVALIDATE_RESOLUTION_FOR_STORE" };
        }
        function fe(e) {
            return { type: "INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR", selectorName: e };
        }
        const pe = (e) => {
                const t = [...e];
                for (let e = t.length - 1; e >= 0; e--) void 0 === t[e] && t.splice(e, 1);
                return t;
            },
            ge = (e, t) => Object.fromEntries(Object.entries(null != e ? e : {}).map(([e, r]) => [e, t(r, e)])),
            ye = (e, t) => (t instanceof Map ? Object.fromEntries(t) : t instanceof window.HTMLElement ? null : t);
        function de(e) {
            const t = new WeakMap();
            return {
                get(r, n) {
                    let o = t.get(r);
                    return o || ((o = e(r, n)), t.set(r, o)), o;
                },
            };
        }
        function be(r, n) {
            const o = {},
                s = {},
                i = {
                    privateActions: o,
                    registerPrivateActions: (e) => {
                        Object.assign(o, e);
                    },
                    privateSelectors: s,
                    registerPrivateSelectors: (e) => {
                        Object.assign(s, e);
                    },
                },
                c = {
                    name: r,
                    instantiate: (c) => {
                        const u = new Set(),
                            a = n.reducer,
                            l = (function (e, t, r, n) {
                                const o = { ...t.controls, ...P },
                                    s = ge(o, (e) => (e.isRegistryControl ? e(r) : e)),
                                    i = [D(r, e), U, w()(s), k(n)],
                                    c = [h(...i)];
                                "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && c.push(window.__REDUX_DEVTOOLS_EXTENSION__({ name: e, instanceId: e, serialize: { replacer: ye } }));
                                const { reducer: u, initialState: a } = t,
                                    l = E({ metadata: H, root: u });
                                return b(l, { root: a }, (0, R.compose)(c));
                            })(r, n, c, {
                                registry: c,
                                get dispatch() {
                                    return v;
                                },
                                get select() {
                                    return j;
                                },
                                get resolveSelect() {
                                    return L();
                                },
                            });
                        M(l, i);
                        const f = (function () {
                            const e = {};
                            return {
                                isRunning: (t, r) => e[t] && e[t].get(pe(r)),
                                clear(t, r) {
                                    e[t] && e[t].delete(pe(r));
                                },
                                markAsRunning(t, r) {
                                    e[t] || (e[t] = new (O())()), e[t].set(pe(r), !0);
                                },
                            };
                        })();
                        function p(e) {
                            return (...t) => Promise.resolve(l.dispatch(e(...t)));
                        }
                        const g = { ...ge(t, p), ...ge(n.actions, p) },
                            y = de(p),
                            d = new Proxy(() => {}, {
                                get: (e, t) => {
                                    const r = o[t];
                                    return r ? y.get(r, t) : g[t];
                                },
                            }),
                            v = new Proxy(d, { apply: (e, t, [r]) => l.dispatch(r) });
                        M(g, d);
                        const S = n.resolvers
                            ? (function (e) {
                                  return ge(e, (e) => (e.fulfill ? e : { ...e, fulfill: e }));
                              })(n.resolvers)
                            : {};
                        function m(e, t) {
                            e.isRegistrySelector && (e.registry = c);
                            const r = (...t) => {
                                t = ve(e, t);
                                const r = l.__unstableOriginalGetState();
                                return e.isRegistrySelector && (e.registry = c), e(r.root, ...t);
                            };
                            r.__unstableNormalizeArgs = e.__unstableNormalizeArgs;
                            const n = S[t];
                            return n
                                ? (function (e, t, r, n, o) {
                                      function s(e) {
                                          const s = n.getState();
                                          if (o.isRunning(t, e) || ("function" == typeof r.isFulfilled && r.isFulfilled(s, ...e))) return;
                                          const { metadata: i } = n.__unstableOriginalGetState();
                                          q(i, t, e) ||
                                              (o.markAsRunning(t, e),
                                              setTimeout(async () => {
                                                  o.clear(t, e), n.dispatch(ne(t, e));
                                                  try {
                                                      const o = r.fulfill(...e);
                                                      o && (await n.dispatch(o)), n.dispatch(oe(t, e));
                                                  } catch (r) {
                                                      n.dispatch(se(t, e, r));
                                                  }
                                              }, 0));
                                      }
                                      const i = (...t) => (s((t = ve(e, t))), e(...t));
                                      return (i.hasResolver = !0), i;
                                  })(r, t, n, l, f)
                                : ((r.hasResolver = !1), r);
                        }
                        const _ = {
                                ...ge(e, function (e) {
                                    const t = (...t) => {
                                        const r = l.__unstableOriginalGetState(),
                                            o = t && t[0],
                                            s = t && t[1],
                                            i = n?.selectors?.[o];
                                        return o && i && (t[1] = ve(i, s)), e(r.metadata, ...t);
                                    };
                                    return (t.hasResolver = !1), t;
                                }),
                                ...ge(n.selectors, m),
                            },
                            I = de(m);
                        for (const [e, t] of Object.entries(s)) I.get(t, e);
                        const T = new Proxy(() => {}, {
                                get: (e, t) => {
                                    const r = s[t];
                                    return r ? I.get(r, t) : _[t];
                                },
                            }),
                            j = new Proxy(T, { apply: (e, t, [r]) => r(l.__unstableOriginalGetState()) });
                        M(_, T);
                        const N = (function (e, t) {
                                const {
                                    getIsResolving: r,
                                    hasStartedResolution: n,
                                    hasFinishedResolution: o,
                                    hasResolutionFailed: s,
                                    isResolving: i,
                                    getCachedResolvers: c,
                                    getResolutionState: u,
                                    getResolutionError: a,
                                    hasResolvingSelectors: l,
                                    countSelectorsByStatus: f,
                                    ...p
                                } = e;
                                return ge(p, (r, n) =>
                                    r.hasResolver
                                        ? (...o) =>
                                              new Promise((s, i) => {
                                                  const c = () => e.hasFinishedResolution(n, o),
                                                      u = (t) => {
                                                          if (e.hasResolutionFailed(n, o)) {
                                                              const t = e.getResolutionError(n, o);
                                                              i(t);
                                                          } else s(t);
                                                      },
                                                      a = () => r.apply(null, o),
                                                      l = a();
                                                  if (c()) return u(l);
                                                  const f = t.subscribe(() => {
                                                      c() && (f(), u(a()));
                                                  });
                                              })
                                        : async (...e) => r.apply(null, e)
                                );
                            })(_, l),
                            A = (function (e, t) {
                                return ge(e, (r, n) =>
                                    r.hasResolver
                                        ? (...o) => {
                                              const s = r.apply(null, o);
                                              if (e.hasFinishedResolution(n, o)) {
                                                  if (e.hasResolutionFailed(n, o)) throw e.getResolutionError(n, o);
                                                  return s;
                                              }
                                              throw new Promise((r) => {
                                                  const s = t.subscribe(() => {
                                                      e.hasFinishedResolution(n, o) && (r(), s());
                                                  });
                                              });
                                          }
                                        : r
                                );
                            })(_, l),
                            L = () => N;
                        (l.__unstableOriginalGetState = l.getState), (l.getState = () => l.__unstableOriginalGetState().root);
                        const x = l && ((e) => (u.add(e), () => u.delete(e)));
                        let F = l.__unstableOriginalGetState();
                        return (
                            l.subscribe(() => {
                                const e = l.__unstableOriginalGetState(),
                                    t = e !== F;
                                if (((F = e), t)) for (const e of u) e();
                            }),
                            { reducer: a, store: l, actions: g, selectors: _, resolvers: S, getSelectors: () => _, getResolveSelectors: L, getSuspendSelectors: () => A, getActions: () => g, subscribe: x }
                        );
                    },
                };
            return M(c, i), c;
        }
        function ve(e, t) {
            return e.__unstableNormalizeArgs && "function" == typeof e.__unstableNormalizeArgs && t?.length ? e.__unstableNormalizeArgs(t) : t;
        }
        const he = {
            name: "core/data",
            instantiate(e) {
                const t = (t) => (r, ...n) => e.select(r)[t](...n),
                    r = (t) => (r, ...n) => e.dispatch(r)[t](...n);
                return {
                    getSelectors: () => Object.fromEntries(["getIsResolving", "hasStartedResolution", "hasFinishedResolution", "isResolving", "getCachedResolvers"].map((e) => [e, t(e)])),
                    getActions: () => Object.fromEntries(["startResolution", "finishResolution", "invalidateResolution", "invalidateResolutionForStore", "invalidateResolutionForStoreSelector"].map((e) => [e, r(e)])),
                    subscribe: () => () => () => {},
                };
            },
        };
        function Se() {
            let e = !1,
                t = !1;
            const r = new Set(),
                n = () => Array.from(r).forEach((e) => e());
            return {
                get isPaused() {
                    return e;
                },
                subscribe: (e) => (r.add(e), () => r.delete(e)),
                pause() {
                    e = !0;
                },
                resume() {
                    (e = !1), t && ((t = !1), n());
                },
                emit() {
                    e ? (t = !0) : n();
                },
            };
        }
        function Oe(e) {
            return "string" == typeof e ? e : e.name;
        }
        function me(e = {}, t = null) {
            const r = {},
                n = Se();
            let o = null;
            function s() {
                n.emit();
            }
            function c(e, n) {
                if (r[e]) return console.error('Store "' + e + '" is already registered.'), r[e];
                const o = n();
                if ("function" != typeof o.getSelectors) throw new TypeError("store.getSelectors must be a function");
                if ("function" != typeof o.getActions) throw new TypeError("store.getActions must be a function");
                if ("function" != typeof o.subscribe) throw new TypeError("store.subscribe must be a function");
                o.emitter = Se();
                const i = o.subscribe;
                if (
                    ((o.subscribe = (e) => {
                        const t = o.emitter.subscribe(e),
                            r = i(() => {
                                o.emitter.isPaused ? o.emitter.emit() : e();
                            });
                        return () => {
                            r?.(), t?.();
                        };
                    }),
                    (r[e] = o),
                    o.subscribe(s),
                    t)
                )
                    try {
                        F(o.store).registerPrivateActions(F(t).privateActionsOf(e)), F(o.store).registerPrivateSelectors(F(t).privateSelectorsOf(e));
                    } catch (e) {}
                return o;
            }
            let u = {
                batch: function (e) {
                    if (n.isPaused) e();
                    else {
                        n.pause(), Object.values(r).forEach((e) => e.emitter.pause());
                        try {
                            e();
                        } finally {
                            n.resume(), Object.values(r).forEach((e) => e.emitter.resume());
                        }
                    }
                },
                stores: r,
                namespaces: r,
                subscribe: (e, o) => {
                    if (!o) return n.subscribe(e);
                    const s = Oe(o),
                        i = r[s];
                    return i ? i.subscribe(e) : t ? t.subscribe(e, o) : n.subscribe(e);
                },
                select: function (e) {
                    const n = Oe(e);
                    o?.add(n);
                    const s = r[n];
                    return s ? s.getSelectors() : t?.select(n);
                },
                resolveSelect: function (e) {
                    const n = Oe(e);
                    o?.add(n);
                    const s = r[n];
                    return s ? s.getResolveSelectors() : t && t.resolveSelect(n);
                },
                suspendSelect: function (e) {
                    const n = Oe(e);
                    o?.add(n);
                    const s = r[n];
                    return s ? s.getSuspendSelectors() : t && t.suspendSelect(n);
                },
                dispatch: function (e) {
                    const n = Oe(e),
                        o = r[n];
                    return o ? o.getActions() : t && t.dispatch(n);
                },
                use: function (e, t) {
                    if (!e) return;
                    return (u = { ...u, ...e(u, t) }), u;
                },
                register: function (e) {
                    c(e.name, () => e.instantiate(u));
                },
                registerGenericStore: function (e, t) {
                    i()("wp.data.registerGenericStore", { since: "5.9", alternative: "wp.data.register( storeDescriptor )" }), c(e, () => t);
                },
                registerStore: function (e, t) {
                    if (!t.reducer) throw new TypeError("Must specify store reducer");
                    return c(e, () => be(e, t).instantiate(u)).store;
                },
                __unstableMarkListeningStores: function (e, t) {
                    o = new Set();
                    try {
                        return e.call(this);
                    } finally {
                        (t.current = Array.from(o)), (o = null);
                    }
                },
            };
            u.register(he);
            for (const [t, r] of Object.entries(e)) u.register(be(t, r));
            t && t.subscribe(s);
            const a =
                ((l = u),
                Object.fromEntries(
                    Object.entries(l).map(([e, t]) =>
                        "function" != typeof t
                            ? [e, t]
                            : [
                                  e,
                                  function () {
                                      return u[e].apply(null, arguments);
                                  },
                              ]
                    )
                ));
            var l;
            return (
                M(a, {
                    privateActionsOf: (e) => {
                        try {
                            return F(r[e].store).privateActions;
                        } catch (e) {
                            return {};
                        }
                    },
                    privateSelectorsOf: (e) => {
                        try {
                            return F(r[e].store).privateSelectors;
                        } catch (e) {
                            return {};
                        }
                    },
                }),
                a
            );
        }
        const we = me();
        /*!
         * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        function Re(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        }
        function Ee(e) {
            var t, r;
            return !1 !== Re(e) && (void 0 === (t = e.constructor) || (!1 !== Re((r = t.prototype)) && !1 !== r.hasOwnProperty("isPrototypeOf")));
        }
        var _e = r(66),
            Ie = r.n(_e);
        let Te;
        const je = {
                getItem: (e) => (Te && Te[e] ? Te[e] : null),
                setItem(e, t) {
                    Te || je.clear(), (Te[e] = String(t));
                },
                clear() {
                    Te = Object.create(null);
                },
            },
            Ne = je;
        let Ae;
        try {
            (Ae = window.localStorage), Ae.setItem("__wpDataTestLocalStorage", ""), Ae.removeItem("__wpDataTestLocalStorage");
        } catch (e) {
            Ae = Ne;
        }
        const Le = Ae,
            Pe = "WP_DATA";
        function xe(e, t) {
            const r = (function (e) {
                const { storage: t = Le, storageKey: r = Pe } = e;
                let n;
                return {
                    get: function () {
                        if (void 0 === n) {
                            const e = t.getItem(r);
                            if (null === e) n = {};
                            else
                                try {
                                    n = JSON.parse(e);
                                } catch (e) {
                                    n = {};
                                }
                        }
                        return n;
                    },
                    set: function (e, o) {
                        (n = { ...n, [e]: o }), t.setItem(r, JSON.stringify(n));
                    },
                };
            })(t);
            return {
                registerStore(t, n) {
                    if (!n.persist) return e.registerStore(t, n);
                    const o = r.get()[t];
                    if (void 0 !== o) {
                        let e = n.reducer(n.initialState, { type: "@@WP/PERSISTENCE_RESTORE" });
                        (e = Ee(e) && Ee(o) ? Ie()(e, o, { isMergeableObject: Ee }) : o), (n = { ...n, initialState: e });
                    }
                    const s = e.registerStore(t, n);
                    return (
                        s.subscribe(
                            (function (e, t, n) {
                                let o;
                                if (Array.isArray(n)) {
                                    const e = n.reduce((e, t) => Object.assign(e, { [t]: (e, r) => r.nextState[t] }), {});
                                    (s = ut(e)), (o = (e, t) => (t.nextState === e ? e : s(e, t)));
                                } else o = (e, t) => t.nextState;
                                var s;
                                let i = o(void 0, { nextState: e() });
                                return () => {
                                    const n = o(i, { nextState: e() });
                                    n !== i && (r.set(t, n), (i = n));
                                };
                            })(s.getState, t, n.persist)
                        ),
                        s
                    );
                },
            };
        }
        xe.__unstableMigrate = () => {};
        const Me = xe,
            Fe = window.wp.priorityQueue,
            Ue = window.wp.element,
            De = window.wp.isShallowEqual;
        var ke = r.n(De);
        const Ce = (0, Ue.createContext)(we),
            { Consumer: Ve, Provider: Ge } = Ce,
            He = Ve,
            We = Ge;
        function Ke() {
            return (0, Ue.useContext)(Ce);
        }
        const ze = (0, Ue.createContext)(!1),
            { Consumer: Be, Provider: Xe } = ze,
            $e = Xe;
        const qe = (0, Fe.createQueue)();
        function Je(e, t) {
            const r = t ? e.suspendSelect : e.select,
                n = {};
            let o,
                s,
                i,
                c,
                u = !1;
            const a = new Map();
            function l(t) {
                var r;
                return null !== (r = e.stores[t]?.store?.getState?.()) && void 0 !== r ? r : {};
            }
            return (t, f) => {
                function p() {
                    if (u && t === o) return s;
                    const f = { current: null },
                        p = e.__unstableMarkListeningStores(() => t(r, e), f);
                    if (c) c.updateStores(f.current);
                    else {
                        for (const e of f.current) a.set(e, l(e));
                        c = ((t) => {
                            const r = [...t],
                                o = new Set();
                            return {
                                subscribe: function (t) {
                                    if (u) for (const e of r) a.get(e) !== l(e) && (u = !1);
                                    a.clear();
                                    const s = () => {
                                            (u = !1), t();
                                        },
                                        c = () => {
                                            i ? qe.add(n, s) : s();
                                        },
                                        f = [];
                                    function p(t) {
                                        f.push(e.subscribe(c, t));
                                    }
                                    for (const e of r) p(e);
                                    return (
                                        o.add(p),
                                        () => {
                                            o.delete(p);
                                            for (const e of f.values()) e?.();
                                            qe.cancel(n);
                                        }
                                    );
                                },
                                updateStores: function (e) {
                                    for (const t of e)
                                        if (!r.includes(t)) {
                                            r.push(t);
                                            for (const e of o) e(t);
                                        }
                                },
                            };
                        })(f.current);
                    }
                    ke()(s, p) || (s = p), (o = t), (u = !0);
                }
                return (
                    i && !f && ((u = !1), qe.cancel(n)),
                    p(),
                    (i = f),
                    {
                        subscribe: c.subscribe,
                        getValue: function () {
                            return p(), s;
                        },
                    }
                );
            };
        }
        function Qe(e, t, r) {
            const n = Ke(),
                o = (0, Ue.useContext)(ze),
                s = (0, Ue.useMemo)(() => Je(n, e), [n, e]),
                i = (0, Ue.useCallback)(t, r),
                { subscribe: c, getValue: u } = s(i, o),
                a = (0, Ue.useSyncExternalStore)(c, u, u);
            return (0, Ue.useDebugValue)(a), a;
        }
        function Ye(e, t) {
            const r = "function" != typeof e,
                n = (0, Ue.useRef)(r);
            if (r !== n.current) {
                const e = n.current ? "static" : "mapping";
                throw new Error(`Switching useSelect from ${e} to ${r ? "static" : "mapping"} is not allowed`);
            }
            return r ? ((o = e), Ke().select(o)) : Qe(!1, e, t);
            var o;
        }
        function Ze(e, t) {
            return Qe(!0, e, t);
        }
        const et = window.ReactJSXRuntime,
            tt = (e) =>
                (0, R.createHigherOrderComponent)(
                    (t) =>
                        (0, R.pure)((r) => {
                            const n = Ye((t, n) => e(t, r, n));
                            return (0, et.jsx)(t, { ...r, ...n });
                        }),
                    "withSelect"
                ),
            rt = (e, t) => {
                const r = Ke(),
                    n = (0, Ue.useRef)(e);
                return (
                    (0, R.useIsomorphicLayoutEffect)(() => {
                        n.current = e;
                    }),
                    (0, Ue.useMemo)(() => {
                        const e = n.current(r.dispatch, r);
                        return Object.fromEntries(
                            Object.entries(e).map(([e, t]) => ("function" != typeof t && console.warn(`Property ${e} returned from dispatchMap in useDispatchWithMap must be a function.`), [e, (...t) => n.current(r.dispatch, r)[e](...t)]))
                        );
                    }, [r, ...t])
                );
            },
            nt = (e) =>
                (0, R.createHigherOrderComponent)(
                    (t) => (r) => {
                        const n = rt((t, n) => e(t, r, n), []);
                        return (0, et.jsx)(t, { ...r, ...n });
                    },
                    "withDispatch"
                ),
            ot = (0, R.createHigherOrderComponent)((e) => (t) => (0, et.jsx)(He, { children: (r) => (0, et.jsx)(e, { ...t, registry: r }) }), "withRegistry"),
            st = (e) => {
                const { dispatch: t } = Ke();
                return void 0 === e ? t : t(e);
            };
        function it(e) {
            return we.dispatch(e);
        }
        function ct(e) {
            return we.select(e);
        }
        const ut = E,
            at = we.resolveSelect,
            lt = we.suspendSelect,
            ft = we.subscribe,
            pt = we.registerGenericStore,
            gt = we.registerStore,
            yt = we.use,
            dt = we.register;
    })(),
        ((window.wp = window.wp || {}).data = n);
})();
