(() => {
    "use strict";
    var e = {
            n: (t) => {
                var o = t && t.__esModule ? () => t.default : () => t;
                return e.d(o, { a: o }), o;
            },
            d: (t, o) => {
                for (var n in o) e.o(o, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    e.r(t),
        e.d(t, {
            __experimentalDeRegisterExpressPaymentMethod: () => T,
            __experimentalDeRegisterPaymentMethod: () => P,
            getExpressPaymentMethods: () => E,
            getPaymentMethods: () => C,
            getRegisteredBlockComponents: () => I,
            getRegisteredInnerBlocks: () => O,
            registerBlockComponent: () => B,
            registerExpressPaymentMethod: () => k,
            registerInnerBlock: () => R,
            registerPaymentMethod: () => w,
            registerPaymentMethodExtensionCallbacks: () => M,
        });
    const o = window.wp.deprecated;
    var n = e.n(o);
    const r = window.wp.data;
    function a(e) {
        return (
            (a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            a(e)
        );
    }
    function i(e, t, o) {
        return (
            (t = (function (e) {
                var t = (function (e, t) {
                    if ("object" !== a(e) || null === e) return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, "string");
                        if ("object" !== a(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" === a(t) ? t : String(t);
            })(t)) in e
                ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = o),
            e
        );
    }
    const s = window.React,
        l = {},
        p = l,
        c = (e, t, o) => {
            const n = ((e, t) => (o) => ((null == o ? void 0 : o.paymentRequirements) || []).every((e) => t.includes(e)) && e(o))(e, t);
            return Object.values(p).some((e) => o in e)
                ? ((e, t, o) => (n) => {
                      let r = e(n);
                      if (r) {
                          const e = {};
                          Object.entries(t).forEach(([t, n]) => {
                              o in n && "function" == typeof n[o] && (e[t] = n[o]);
                          }),
                              (r = Object.keys(e).every((t) => {
                                  try {
                                      return e[t](n);
                                  } catch (e) {
                                      return console.error(`Error when executing callback for ${o} in ${t}`, e), !0;
                                  }
                              }));
                      }
                      return r;
                  })(n, p, o)
                : n;
        },
        d = window.wp.element,
        m = (e, t) => {
            if (null !== e && !(0, d.isValidElement)(e)) throw new TypeError(`The ${t} property for the payment method must be a React element or null.`);
        },
        u = (e, t = []) => {
            const o = t.reduce((t, o) => (e.hasOwnProperty(o) || t.push(o), t), []);
            if (o.length > 0) throw new TypeError("The payment method configuration object is missing the following properties:" + o.join(", "));
        },
        h = () => null;
    class y {
        constructor(e) {
            var t, o, n, r;
            i(this, "name", void 0),
                i(this, "content", void 0),
                i(this, "edit", void 0),
                i(this, "paymentMethodId", void 0),
                i(this, "supports", void 0),
                i(this, "icons", void 0),
                i(this, "label", void 0),
                i(this, "ariaLabel", void 0),
                i(this, "placeOrderButtonLabel", void 0),
                i(this, "savedTokenComponent", void 0),
                i(this, "canMakePaymentFromConfig", void 0),
                y.assertValidConfig(e),
                (this.name = e.name),
                (this.label = e.label),
                (this.placeOrderButtonLabel = e.placeOrderButtonLabel),
                (this.ariaLabel = e.ariaLabel),
                (this.content = e.content),
                (this.savedTokenComponent = e.savedTokenComponent),
                (this.icons = e.icons || null),
                (this.edit = e.edit),
                (this.paymentMethodId = e.paymentMethodId || this.name),
                (this.supports = {
                    showSavedCards: (null == e || null === (t = e.supports) || void 0 === t ? void 0 : t.showSavedCards) || (null == e || null === (o = e.supports) || void 0 === o ? void 0 : o.savePaymentInfo) || !1,
                    showSaveOption: (null == e || null === (n = e.supports) || void 0 === n ? void 0 : n.showSaveOption) || !1,
                    features: (null == e || null === (r = e.supports) || void 0 === r ? void 0 : r.features) || ["products"],
                }),
                (this.canMakePaymentFromConfig = e.canMakePayment);
        }
        get canMakePayment() {
            return c(this.canMakePaymentFromConfig, this.supports.features, this.name);
        }
    }
    i(y, "assertValidConfig", (e) => {
        var t, o, r, a, i, l, p;
        if (((e.savedTokenComponent = e.savedTokenComponent || (0, s.createElement)(h, null)), u(e, ["name", "label", "ariaLabel", "content", "edit", "canMakePayment"]), "string" != typeof e.name))
            throw new Error("The name property for the payment method must be a string");
        if (void 0 !== e.icons && !Array.isArray(e.icons) && null !== e.icons) throw new Error("The icons property for the payment method must be an array or null.");
        if ("string" != typeof e.paymentMethodId && void 0 !== e.paymentMethodId)
            throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");
        if ("string" != typeof e.placeOrderButtonLabel && void 0 !== e.placeOrderButtonLabel) throw new TypeError("The placeOrderButtonLabel property for the payment method must be a string");
        if (
            (((e, t) => {
                if (null !== e && !(0, d.isValidElement)(e) && "string" != typeof e) throw new TypeError("The label property for the payment method must be a React element, a string, or null.");
            })(e.label),
            m(e.content, "content"),
            m(e.edit, "edit"),
            m(e.savedTokenComponent, "savedTokenComponent"),
            "string" != typeof e.ariaLabel)
        )
            throw new TypeError("The ariaLabel property for the payment method must be a string");
        if ("function" != typeof e.canMakePayment) throw new TypeError("The canMakePayment property for the payment method must be a function.");
        if (void 0 !== (null === (t = e.supports) || void 0 === t ? void 0 : t.showSavedCards) && "boolean" != typeof (null === (o = e.supports) || void 0 === o ? void 0 : o.showSavedCards))
            throw new TypeError("If the payment method includes the `supports.showSavedCards` property, it must be a boolean");
        if (
            (void 0 !== (null === (r = e.supports) || void 0 === r ? void 0 : r.savePaymentInfo) &&
                n()("Passing savePaymentInfo when registering a payment method.", {
                    alternative: "Pass showSavedCards and showSaveOption",
                    plugin: "woocommerce-gutenberg-products-block",
                    link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3686",
                }),
            void 0 !== (null === (a = e.supports) || void 0 === a ? void 0 : a.features) && !Array.isArray(null === (i = e.supports) || void 0 === i ? void 0 : i.features))
        )
            throw new Error("The features property for the payment method must be an array or undefined.");
        if (void 0 !== (null === (l = e.supports) || void 0 === l ? void 0 : l.showSaveOption) && "boolean" != typeof (null === (p = e.supports) || void 0 === p ? void 0 : p.showSaveOption))
            throw new TypeError("If the payment method includes the `supports.showSaveOption` property, it must be a boolean");
    });
    class f {
        constructor(e) {
            var t;
            i(this, "name", void 0),
                i(this, "content", void 0),
                i(this, "edit", void 0),
                i(this, "paymentMethodId", void 0),
                i(this, "supports", void 0),
                i(this, "canMakePaymentFromConfig", void 0),
                f.assertValidConfig(e),
                (this.name = e.name),
                (this.content = e.content),
                (this.edit = e.edit),
                (this.paymentMethodId = e.paymentMethodId || this.name),
                (this.supports = { features: (null == e || null === (t = e.supports) || void 0 === t ? void 0 : t.features) || ["products"] }),
                (this.canMakePaymentFromConfig = e.canMakePayment);
        }
        get canMakePayment() {
            return c(this.canMakePaymentFromConfig, this.supports.features, this.name);
        }
    }
    i(f, "assertValidConfig", (e) => {
        var t, o;
        if ((u(e, ["name", "content", "edit"]), "string" != typeof e.name)) throw new TypeError("The name property for the express payment method must be a string");
        if ("string" != typeof e.paymentMethodId && void 0 !== e.paymentMethodId)
            throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");
        if (void 0 !== (null === (t = e.supports) || void 0 === t ? void 0 : t.features) && !Array.isArray(null === (o = e.supports) || void 0 === o ? void 0 : o.features))
            throw new Error("The features property for the payment method must be an array or undefined.");
        if ((m(e.content, "content"), m(e.edit, "edit"), "function" != typeof e.canMakePayment)) throw new TypeError("The canMakePayment property for the express payment method must be a function.");
    });
    const v = "wc/store/payment",
        b = {},
        g = {},
        w = (e) => {
            let t;
            "function" == typeof e
                ? ((t = e(y)),
                  n()("Passing a callback to registerPaymentMethod()", {
                      alternative: "a config options object",
                      plugin: "woocommerce-gutenberg-products-block",
                      link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404",
                  }))
                : (t = new y(e)),
                t instanceof y && (b[t.name] = t);
        },
        k = (e) => {
            let t;
            "function" == typeof e
                ? ((t = e(f)),
                  n()("Passing a callback to registerExpressPaymentMethod()", {
                      alternative: "a config options object",
                      plugin: "woocommerce-gutenberg-products-block",
                      link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404",
                  }))
                : (t = new f(e)),
                t instanceof f && (g[t.name] = t);
        },
        M = (e, t) => {
            l[e]
                ? console.error(`The namespace provided to registerPaymentMethodExtensionCallbacks must be unique. Callbacks have already been registered for the ${e} namespace.`)
                : ((l[e] = {}),
                  Object.entries(t).forEach(([t, o]) => {
                      "function" == typeof o
                          ? (l[e][t] = o)
                          : console.error(`All callbacks provided to registerPaymentMethodExtensionCallbacks must be functions. The callback for the ${t} payment method in the ${e} namespace was not a function.`);
                  }));
        },
        P = (e) => {
            delete b[e];
            const { __internalRemoveAvailablePaymentMethod: t } = (0, r.dispatch)(v);
            t(e);
        },
        T = (e) => {
            delete g[e];
            const { __internalRemoveAvailableExpressPaymentMethod: t } = (0, r.dispatch)(v);
            t(e);
        },
        C = () => b,
        E = () => g,
        S = {};
    function I(e) {
        return { ...("object" == typeof S[e] && Object.keys(S[e]).length > 0 ? S[e] : {}), ...S.any };
    }
    function O(e) {
        return n()("getRegisteredInnerBlocks", { version: "2.8.0", alternative: "getRegisteredBlockComponents", plugin: "WooCommerce Blocks" }), I(e);
    }
    const x = (e, t, o) => {
            const n = typeof e[t];
            if (n !== o) throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${n}, but must be a ${o}.`);
        },
        j = (e, t) => {
            if (e[t]) {
                if ("function" == typeof e[t]) return;
                if (e[t].$$typeof && e[t].$$typeof === Symbol.for("react.lazy")) return;
            }
            throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`);
        };
    function B(e) {
        e.context || (e.context = "any"), x(e, "context", "string"), x(e, "blockName", "string"), j(e, "component");
        const { context: t, blockName: o, component: n } = e;
        S[t] || (S[t] = {}), (S[t][o] = n);
    }
    function R(e) {
        n()("registerInnerBlock", { version: "2.8.0", alternative: "registerBlockComponent", plugin: "WooCommerce Blocks", hint: '"main" has been replaced with "context" and is now optional.' }),
            x(e, "main", "string"),
            B({ ...e, context: e.main });
    }
    (this.wc = this.wc || {}).wcBlocksRegistry = t;
})();
