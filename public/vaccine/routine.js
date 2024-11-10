/*! This file is auto-generated */
(() => {
    "use strict";
    var r = {
            6910: (r, e, t) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.race = e.join = e.fork = e.promise = void 0);
                var n = a(t(6921)),
                    u = t(3524),
                    o = a(t(5136));
                function a(r) {
                    return r && r.__esModule ? r : { default: r };
                }
                var c = (e.promise = function (r, e, t, u, o) {
                        return !!n.default.promise(r) && (r.then(e, o), !0);
                    }),
                    f = new Map(),
                    i = (e.fork = function (r, e, t) {
                        if (!n.default.fork(r)) return !1;
                        var a = Symbol("fork"),
                            c = (0, o.default)();
                        f.set(a, c),
                            t(
                                r.iterator.apply(null, r.args),
                                function (r) {
                                    return c.dispatch(r);
                                },
                                function (r) {
                                    return c.dispatch((0, u.error)(r));
                                }
                            );
                        var i = c.subscribe(function () {
                            i(), f.delete(a);
                        });
                        return e(a), !0;
                    }),
                    l = (e.join = function (r, e, t, u, o) {
                        if (!n.default.join(r)) return !1;
                        var a,
                            c = f.get(r.task);
                        return (
                            c
                                ? (a = c.subscribe(function (r) {
                                      a(), e(r);
                                  }))
                                : o("join error : task not found"),
                            !0
                        );
                    }),
                    s = (e.race = function (r, e, t, u, o) {
                        if (!n.default.race(r)) return !1;
                        var a,
                            c = !1,
                            f = function (r, t, n) {
                                c || ((c = !0), (r[t] = n), e(r));
                            },
                            i = function (r) {
                                c || o(r);
                            };
                        return (
                            n.default.array(r.competitors)
                                ? ((a = r.competitors.map(function () {
                                      return !1;
                                  })),
                                  r.competitors.forEach(function (r, e) {
                                      t(
                                          r,
                                          function (r) {
                                              return f(a, e, r);
                                          },
                                          i
                                      );
                                  }))
                                : (function () {
                                      var e = Object.keys(r.competitors).reduce(function (r, e) {
                                          return (r[e] = !1), r;
                                      }, {});
                                      Object.keys(r.competitors).forEach(function (n) {
                                          t(
                                              r.competitors[n],
                                              function (r) {
                                                  return f(e, n, r);
                                              },
                                              i
                                          );
                                      });
                                  })(),
                            !0
                        );
                    });
                e.default = [
                    c,
                    i,
                    l,
                    s,
                    function (r, e) {
                        if (!n.default.subscribe(r)) return !1;
                        if (!n.default.channel(r.channel)) throw new Error('the first argument of "subscribe" must be a valid channel');
                        var t = r.channel.subscribe(function (r) {
                            t && t(), e(r);
                        });
                        return !0;
                    },
                ];
            },
            5357: (r, e, t) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.iterator = e.array = e.object = e.error = e.any = void 0);
                var n,
                    u = t(6921),
                    o = (n = u) && n.__esModule ? n : { default: n };
                var a = (e.any = function (r, e, t, n) {
                        return n(r), !0;
                    }),
                    c = (e.error = function (r, e, t, n, u) {
                        return !!o.default.error(r) && (u(r.error), !0);
                    }),
                    f = (e.object = function (r, e, t, n, u) {
                        if (!o.default.all(r) || !o.default.obj(r.value)) return !1;
                        var a = {},
                            c = Object.keys(r.value),
                            f = 0,
                            i = !1;
                        return (
                            c.map(function (e) {
                                t(
                                    r.value[e],
                                    function (r) {
                                        return (function (r, e) {
                                            i || ((a[r] = e), ++f === c.length && n(a));
                                        })(e, r);
                                    },
                                    function (r) {
                                        return (function (r, e) {
                                            i || ((i = !0), u(e));
                                        })(0, r);
                                    }
                                );
                            }),
                            !0
                        );
                    }),
                    i = (e.array = function (r, e, t, n, u) {
                        if (!o.default.all(r) || !o.default.array(r.value)) return !1;
                        var a = [],
                            c = 0,
                            f = !1;
                        return (
                            r.value.map(function (e, o) {
                                t(
                                    e,
                                    function (e) {
                                        return (function (e, t) {
                                            f || ((a[e] = t), ++c === r.value.length && n(a));
                                        })(o, e);
                                    },
                                    function (r) {
                                        return (function (r, e) {
                                            f || ((f = !0), u(e));
                                        })(0, r);
                                    }
                                );
                            }),
                            !0
                        );
                    }),
                    l = (e.iterator = function (r, e, t, n, u) {
                        return !!o.default.iterator(r) && (t(r, e, u), !0);
                    });
                e.default = [c, l, i, f, a];
            },
            3304: (r, e, t) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.cps = e.call = void 0);
                var n,
                    u = t(6921),
                    o = (n = u) && n.__esModule ? n : { default: n };
                var a = (e.call = function (r, e, t, n, u) {
                        if (!o.default.call(r)) return !1;
                        try {
                            e(r.func.apply(r.context, r.args));
                        } catch (r) {
                            u(r);
                        }
                        return !0;
                    }),
                    c = (e.cps = function (r, e, t, n, u) {
                        var a;
                        return (
                            !!o.default.cps(r) &&
                            ((a = r.func).call.apply(
                                a,
                                [null].concat(
                                    (function (r) {
                                        if (Array.isArray(r)) {
                                            for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
                                            return t;
                                        }
                                        return Array.from(r);
                                    })(r.args),
                                    [
                                        function (r, t) {
                                            r ? u(r) : e(t);
                                        },
                                    ]
                                )
                            ),
                            !0)
                        );
                    });
                e.default = [a, c];
            },
            9127: (r, e, t) => {
                Object.defineProperty(e, "__esModule", { value: !0 });
                var n = o(t(5357)),
                    u = o(t(6921));
                function o(r) {
                    return r && r.__esModule ? r : { default: r };
                }
                function a(r) {
                    if (Array.isArray(r)) {
                        for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
                        return t;
                    }
                    return Array.from(r);
                }
                e.default = function () {
                    var r = [].concat(a(arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0]), a(n.default));
                    return function e(t) {
                        var n,
                            o,
                            a,
                            c = arguments.length <= 1 || void 0 === arguments[1] ? function () {} : arguments[1],
                            f = arguments.length <= 2 || void 0 === arguments[2] ? function () {} : arguments[2],
                            i = u.default.iterator(t)
                                ? t
                                : regeneratorRuntime.mark(function r() {
                                      return regeneratorRuntime.wrap(
                                          function (r) {
                                              for (;;)
                                                  switch ((r.prev = r.next)) {
                                                      case 0:
                                                          return (r.next = 2), t;
                                                      case 2:
                                                          return r.abrupt("return", r.sent);
                                                      case 3:
                                                      case "end":
                                                          return r.stop();
                                                  }
                                          },
                                          r,
                                          this
                                      );
                                  })();
                        (n = i),
                            (o = function (r) {
                                return function (e) {
                                    try {
                                        var t = r ? n.throw(e) : n.next(e),
                                            u = t.value;
                                        if (t.done) return c(u);
                                        a(u);
                                    } catch (r) {
                                        return f(r);
                                    }
                                };
                            }),
                            (a = function t(n) {
                                r.some(function (r) {
                                    return r(n, t, e, o(!1), o(!0));
                                });
                            }),
                            o(!1)();
                    };
                };
            },
            8975: (r, e, t) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.wrapControls = e.asyncControls = e.create = void 0);
                var n = t(3524);
                Object.keys(n).forEach(function (r) {
                    "default" !== r &&
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: function () {
                                return n[r];
                            },
                        });
                });
                var u = c(t(9127)),
                    o = c(t(6910)),
                    a = c(t(3304));
                function c(r) {
                    return r && r.__esModule ? r : { default: r };
                }
                (e.create = u.default), (e.asyncControls = o.default), (e.wrapControls = a.default);
            },
            5136: (r, e) => {
                Object.defineProperty(e, "__esModule", { value: !0 });
                e.default = function () {
                    var r = [];
                    return {
                        subscribe: function (e) {
                            return (
                                r.push(e),
                                function () {
                                    r = r.filter(function (r) {
                                        return r !== e;
                                    });
                                }
                            );
                        },
                        dispatch: function (e) {
                            r.slice().forEach(function (r) {
                                return r(e);
                            });
                        },
                    };
                };
            },
            3524: (r, e, t) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.createChannel = e.subscribe = e.cps = e.apply = e.call = e.invoke = e.delay = e.race = e.join = e.fork = e.error = e.all = void 0);
                var n,
                    u = t(4137),
                    o = (n = u) && n.__esModule ? n : { default: n };
                (e.all = function (r) {
                    return { type: o.default.all, value: r };
                }),
                    (e.error = function (r) {
                        return { type: o.default.error, error: r };
                    }),
                    (e.fork = function (r) {
                        for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
                        return { type: o.default.fork, iterator: r, args: t };
                    }),
                    (e.join = function (r) {
                        return { type: o.default.join, task: r };
                    }),
                    (e.race = function (r) {
                        return { type: o.default.race, competitors: r };
                    }),
                    (e.delay = function (r) {
                        return new Promise(function (e) {
                            setTimeout(function () {
                                return e(!0);
                            }, r);
                        });
                    }),
                    (e.invoke = function (r) {
                        for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
                        return { type: o.default.call, func: r, context: null, args: t };
                    }),
                    (e.call = function (r, e) {
                        for (var t = arguments.length, n = Array(t > 2 ? t - 2 : 0), u = 2; u < t; u++) n[u - 2] = arguments[u];
                        return { type: o.default.call, func: r, context: e, args: n };
                    }),
                    (e.apply = function (r, e, t) {
                        return { type: o.default.call, func: r, context: e, args: t };
                    }),
                    (e.cps = function (r) {
                        for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
                        return { type: o.default.cps, func: r, args: t };
                    }),
                    (e.subscribe = function (r) {
                        return { type: o.default.subscribe, channel: r };
                    }),
                    (e.createChannel = function (r) {
                        var e = [];
                        return (
                            r(function (r) {
                                return e.forEach(function (e) {
                                    return e(r);
                                });
                            }),
                            {
                                subscribe: function (r) {
                                    return (
                                        e.push(r),
                                        function () {
                                            return e.splice(e.indexOf(r), 1);
                                        }
                                    );
                                },
                            }
                        );
                    });
            },
            6921: (r, e, t) => {
                Object.defineProperty(e, "__esModule", { value: !0 });
                var n,
                    u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (r) {
                                  return typeof r;
                              }
                            : function (r) {
                                  return r && "function" == typeof Symbol && r.constructor === Symbol ? "symbol" : typeof r;
                              },
                    o = t(4137),
                    a = (n = o) && n.__esModule ? n : { default: n };
                var c = {
                    obj: function (r) {
                        return "object" === (void 0 === r ? "undefined" : u(r)) && !!r;
                    },
                    all: function (r) {
                        return c.obj(r) && r.type === a.default.all;
                    },
                    error: function (r) {
                        return c.obj(r) && r.type === a.default.error;
                    },
                    array: Array.isArray,
                    func: function (r) {
                        return "function" == typeof r;
                    },
                    promise: function (r) {
                        return r && c.func(r.then);
                    },
                    iterator: function (r) {
                        return r && c.func(r.next) && c.func(r.throw);
                    },
                    fork: function (r) {
                        return c.obj(r) && r.type === a.default.fork;
                    },
                    join: function (r) {
                        return c.obj(r) && r.type === a.default.join;
                    },
                    race: function (r) {
                        return c.obj(r) && r.type === a.default.race;
                    },
                    call: function (r) {
                        return c.obj(r) && r.type === a.default.call;
                    },
                    cps: function (r) {
                        return c.obj(r) && r.type === a.default.cps;
                    },
                    subscribe: function (r) {
                        return c.obj(r) && r.type === a.default.subscribe;
                    },
                    channel: function (r) {
                        return c.obj(r) && c.func(r.subscribe);
                    },
                };
                e.default = c;
            },
            4137: (r, e) => {
                Object.defineProperty(e, "__esModule", { value: !0 });
                var t = { all: Symbol("all"), error: Symbol("error"), fork: Symbol("fork"), join: Symbol("join"), race: Symbol("race"), call: Symbol("call"), cps: Symbol("cps"), subscribe: Symbol("subscribe") };
                e.default = t;
            },
        },
        e = {};
    function t(n) {
        var u = e[n];
        if (void 0 !== u) return u.exports;
        var o = (e[n] = { exports: {} });
        return r[n](o, o.exports, t), o.exports;
    }
    (t.d = (r, e) => {
        for (var n in e) t.o(e, n) && !t.o(r, n) && Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
    }),
        (t.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e));
    var n = {};
    (() => {
        t.d(n, { default: () => a });
        var r = t(8975);
        /*!
         * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        function e(r) {
            return "[object Object]" === Object.prototype.toString.call(r);
        }
        function u(r) {
            return !1 !== e((t = r)) && (void 0 === (n = t.constructor) || (!1 !== e((u = n.prototype)) && !1 !== u.hasOwnProperty("isPrototypeOf"))) && "string" == typeof r.type;
            var t, n, u;
        }
        function o(e = {}, t) {
            const n = Object.entries(e).map(([r, e]) => (t, n, o, a, c) => {
                if (((i = r), !u((f = t)) || f.type !== i)) return !1;
                var f, i;
                const l = e(t);
                var s;
                return !(s = l) || ("object" != typeof s && "function" != typeof s) || "function" != typeof s.then ? a(l) : l.then(a, c), !0;
            });
            n.push((r, e) => !!u(r) && (t(r), e(), !0));
            const o = (0, r.create)(n);
            return (r) =>
                new Promise((e, n) =>
                    o(
                        r,
                        (r) => {
                            u(r) && t(r), e(r);
                        },
                        n
                    )
                );
        }
        function a(r = {}) {
            return (e) => {
                const t = o(r, e.dispatch);
                return (r) => (e) => {
                    return (n = e) && "function" == typeof n[Symbol.iterator] && "function" == typeof n.next ? t(e) : r(e);
                    var n;
                };
            };
        }
    })(),
        ((window.wp = window.wp || {}).reduxRoutine = n.default);
})();
