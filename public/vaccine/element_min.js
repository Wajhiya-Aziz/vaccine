/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            4140: (e, t, n) => {
                var r = n(5795);
                (t.H = r.createRoot), (t.c = r.hydrateRoot);
            },
            5795: (e) => {
                e.exports = window.ReactDOM;
            },
        },
        t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = (t[r] = { exports: {} });
        return e[r](i, i.exports, n), i.exports;
    }
    (n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var r = {};
    (() => {
        n.r(r),
            n.d(r, {
                Children: () => e.Children,
                Component: () => e.Component,
                Fragment: () => e.Fragment,
                Platform: () => b,
                PureComponent: () => e.PureComponent,
                RawHTML: () => A,
                StrictMode: () => e.StrictMode,
                Suspense: () => e.Suspense,
                cloneElement: () => e.cloneElement,
                concatChildren: () => h,
                createContext: () => e.createContext,
                createElement: () => e.createElement,
                createInterpolateElement: () => f,
                createPortal: () => g.createPortal,
                createRef: () => e.createRef,
                createRoot: () => y.H,
                findDOMNode: () => g.findDOMNode,
                flushSync: () => g.flushSync,
                forwardRef: () => e.forwardRef,
                hydrate: () => g.hydrate,
                hydrateRoot: () => y.c,
                isEmptyElement: () => v,
                isValidElement: () => e.isValidElement,
                lazy: () => e.lazy,
                memo: () => e.memo,
                render: () => g.render,
                renderToString: () => G,
                startTransition: () => e.startTransition,
                switchChildrenNodeName: () => m,
                unmountComponentAtNode: () => g.unmountComponentAtNode,
                useCallback: () => e.useCallback,
                useContext: () => e.useContext,
                useDebugValue: () => e.useDebugValue,
                useDeferredValue: () => e.useDeferredValue,
                useEffect: () => e.useEffect,
                useId: () => e.useId,
                useImperativeHandle: () => e.useImperativeHandle,
                useInsertionEffect: () => e.useInsertionEffect,
                useLayoutEffect: () => e.useLayoutEffect,
                useMemo: () => e.useMemo,
                useReducer: () => e.useReducer,
                useRef: () => e.useRef,
                useState: () => e.useState,
                useSyncExternalStore: () => e.useSyncExternalStore,
                useTransition: () => e.useTransition,
            });
        const e = window.React;
        let t, o, i, a;
        const s = /<(\/)?(\w+)\s*(\/)?>/g;
        function l(e, t, n, r, o) {
            return { element: e, tokenStart: t, tokenLength: n, prevOffset: r, leadingTextStart: o, children: [] };
        }
        const c = (t) => {
            const n = "object" == typeof t,
                r = n && Object.values(t);
            return n && r.length && r.every((t) => (0, e.isValidElement)(t));
        };
        function u(n) {
            const r = (function () {
                    const e = s.exec(t);
                    if (null === e) return ["no-more-tokens"];
                    const n = e.index,
                        [r, o, i, a] = e,
                        l = r.length;
                    if (a) return ["self-closed", i, n, l];
                    if (o) return ["closer", i, n, l];
                    return ["opener", i, n, l];
                })(),
                [c, u, f, h] = r,
                m = a.length,
                g = f > o ? o : null;
            if (!n[u]) return d(), !1;
            switch (c) {
                case "no-more-tokens":
                    if (0 !== m) {
                        const { leadingTextStart: e, tokenStart: n } = a.pop();
                        i.push(t.substr(e, n));
                    }
                    return d(), !1;
                case "self-closed":
                    return 0 === m ? (null !== g && i.push(t.substr(g, f - g)), i.push(n[u]), (o = f + h), !0) : (p(l(n[u], f, h)), (o = f + h), !0);
                case "opener":
                    return a.push(l(n[u], f, h, f + h, g)), (o = f + h), !0;
                case "closer":
                    if (1 === m)
                        return (
                            (function (n) {
                                const { element: r, leadingTextStart: o, prevOffset: s, tokenStart: l, children: c } = a.pop(),
                                    u = n ? t.substr(s, n - s) : t.substr(s);
                                u && c.push(u);
                                null !== o && i.push(t.substr(o, l - o));
                                i.push((0, e.cloneElement)(r, null, ...c));
                            })(f),
                            (o = f + h),
                            !0
                        );
                    const r = a.pop(),
                        s = t.substr(r.prevOffset, f - r.prevOffset);
                    r.children.push(s), (r.prevOffset = f + h);
                    const c = l(r.element, r.tokenStart, r.tokenLength, f + h);
                    return (c.children = r.children), p(c), (o = f + h), !0;
                default:
                    return d(), !1;
            }
        }
        function d() {
            const e = t.length - o;
            0 !== e && i.push(t.substr(o, e));
        }
        function p(n) {
            const { element: r, tokenStart: o, tokenLength: i, prevOffset: s, children: l } = n,
                c = a[a.length - 1],
                u = t.substr(c.prevOffset, o - c.prevOffset);
            u && c.children.push(u), c.children.push((0, e.cloneElement)(r, null, ...l)), (c.prevOffset = s || o + i);
        }
        const f = (n, r) => {
            if (((t = n), (o = 0), (i = []), (a = []), (s.lastIndex = 0), !c(r))) throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");
            do {} while (u(r));
            return (0, e.createElement)(e.Fragment, null, ...i);
        };
        function h(...t) {
            return t.reduce(
                (t, n, r) => (
                    e.Children.forEach(n, (n, o) => {
                        n && "string" != typeof n && (n = (0, e.cloneElement)(n, { key: [r, o].join() })), t.push(n);
                    }),
                    t
                ),
                []
            );
        }
        function m(t, n) {
            return (
                t &&
                e.Children.map(t, (t, r) => {
                    if ("string" == typeof t?.valueOf()) return (0, e.createElement)(n, { key: r }, t);
                    const { children: o, ...i } = t.props;
                    return (0, e.createElement)(n, { key: r, ...i }, o);
                })
            );
        }
        var g = n(5795),
            y = n(4140);
        const v = (e) => "number" != typeof e && ("string" == typeof e?.valueOf() || Array.isArray(e) ? !e.length : !e),
            b = { OS: "web", select: (e) => ("web" in e ? e.web : e.default), isWeb: !0 };
        /*!
         * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        function k(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        }
        var w = function () {
            return (
                (w =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }),
                w.apply(this, arguments)
            );
        };
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
        function S(e) {
            return e.toLowerCase();
        }
        var x = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
            O = /[^A-Z0-9]+/gi;
        function C(e, t, n) {
            return t instanceof RegExp
                ? e.replace(t, n)
                : t.reduce(function (e, t) {
                      return e.replace(t, n);
                  }, e);
        }
        function E(e, t) {
            return (
                void 0 === t && (t = {}),
                (function (e, t) {
                    void 0 === t && (t = {});
                    for (
                        var n = t.splitRegexp,
                            r = void 0 === n ? x : n,
                            o = t.stripRegexp,
                            i = void 0 === o ? O : o,
                            a = t.transform,
                            s = void 0 === a ? S : a,
                            l = t.delimiter,
                            c = void 0 === l ? " " : l,
                            u = C(C(e, r, "$1\0$2"), i, "\0"),
                            d = 0,
                            p = u.length;
                        "\0" === u.charAt(d);

                    )
                        d++;
                    for (; "\0" === u.charAt(p - 1); ) p--;
                    return u.slice(d, p).split("\0").map(s).join(c);
                })(e, w({ delimiter: "." }, t))
            );
        }
        function R(e, t) {
            return void 0 === t && (t = {}), E(e, w({ delimiter: "-" }, t));
        }
        const T = window.wp.escapeHtml;
        function A({ children: t, ...n }) {
            let r = "";
            return (
                e.Children.toArray(t).forEach((e) => {
                    "string" == typeof e && "" !== e.trim() && (r += e);
                }),
                (0, e.createElement)("div", { dangerouslySetInnerHTML: { __html: r }, ...n })
            );
        }
        const { Provider: M, Consumer: I } = (0, e.createContext)(void 0),
            L = (0, e.forwardRef)(() => null),
            P = new Set(["string", "boolean", "number"]),
            j = new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]),
            H = new Set([
                "allowfullscreen",
                "allowpaymentrequest",
                "allowusermedia",
                "async",
                "autofocus",
                "autoplay",
                "checked",
                "controls",
                "default",
                "defer",
                "disabled",
                "download",
                "formnovalidate",
                "hidden",
                "ismap",
                "itemscope",
                "loop",
                "multiple",
                "muted",
                "nomodule",
                "novalidate",
                "open",
                "playsinline",
                "readonly",
                "required",
                "reversed",
                "selected",
                "typemustmatch",
            ]),
            z = new Set([
                "autocapitalize",
                "autocomplete",
                "charset",
                "contenteditable",
                "crossorigin",
                "decoding",
                "dir",
                "draggable",
                "enctype",
                "formenctype",
                "formmethod",
                "http-equiv",
                "inputmode",
                "kind",
                "method",
                "preload",
                "scope",
                "shape",
                "spellcheck",
                "translate",
                "type",
                "wrap",
            ]),
            D = new Set([
                "animation",
                "animationIterationCount",
                "baselineShift",
                "borderImageOutset",
                "borderImageSlice",
                "borderImageWidth",
                "columnCount",
                "cx",
                "cy",
                "fillOpacity",
                "flexGrow",
                "flexShrink",
                "floodOpacity",
                "fontWeight",
                "gridColumnEnd",
                "gridColumnStart",
                "gridRowEnd",
                "gridRowStart",
                "lineHeight",
                "opacity",
                "order",
                "orphans",
                "r",
                "rx",
                "ry",
                "shapeImageThreshold",
                "stopOpacity",
                "strokeDasharray",
                "strokeDashoffset",
                "strokeMiterlimit",
                "strokeOpacity",
                "strokeWidth",
                "tabSize",
                "widows",
                "x",
                "y",
                "zIndex",
                "zoom",
            ]);
        function V(e, t) {
            return t.some((t) => 0 === e.indexOf(t));
        }
        function W(e) {
            return "key" === e || "children" === e;
        }
        function _(e, t) {
            return "style" === e
                ? (function (e) {
                      if (((t = e), !1 === k(t) || (void 0 !== (n = t.constructor) && (!1 === k((r = n.prototype)) || !1 === r.hasOwnProperty("isPrototypeOf"))))) return e;
                      var t, n, r;
                      let o;
                      for (const t in e) {
                          const n = e[t];
                          if (null == n) continue;
                          o ? (o += ";") : (o = "");
                          o += q(t) + ":" + X(t, n);
                      }
                      return o;
                  })(t)
                : t;
        }
        const F = [
                "accentHeight",
                "alignmentBaseline",
                "arabicForm",
                "baselineShift",
                "capHeight",
                "clipPath",
                "clipRule",
                "colorInterpolation",
                "colorInterpolationFilters",
                "colorProfile",
                "colorRendering",
                "dominantBaseline",
                "enableBackground",
                "fillOpacity",
                "fillRule",
                "floodColor",
                "floodOpacity",
                "fontFamily",
                "fontSize",
                "fontSizeAdjust",
                "fontStretch",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "glyphName",
                "glyphOrientationHorizontal",
                "glyphOrientationVertical",
                "horizAdvX",
                "horizOriginX",
                "imageRendering",
                "letterSpacing",
                "lightingColor",
                "markerEnd",
                "markerMid",
                "markerStart",
                "overlinePosition",
                "overlineThickness",
                "paintOrder",
                "panose1",
                "pointerEvents",
                "renderingIntent",
                "shapeRendering",
                "stopColor",
                "stopOpacity",
                "strikethroughPosition",
                "strikethroughThickness",
                "strokeDasharray",
                "strokeDashoffset",
                "strokeLinecap",
                "strokeLinejoin",
                "strokeMiterlimit",
                "strokeOpacity",
                "strokeWidth",
                "textAnchor",
                "textDecoration",
                "textRendering",
                "underlinePosition",
                "underlineThickness",
                "unicodeBidi",
                "unicodeRange",
                "unitsPerEm",
                "vAlphabetic",
                "vHanging",
                "vIdeographic",
                "vMathematical",
                "vectorEffect",
                "vertAdvY",
                "vertOriginX",
                "vertOriginY",
                "wordSpacing",
                "writingMode",
                "xmlnsXlink",
                "xHeight",
            ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), {}),
            N = [
                "allowReorder",
                "attributeName",
                "attributeType",
                "autoReverse",
                "baseFrequency",
                "baseProfile",
                "calcMode",
                "clipPathUnits",
                "contentScriptType",
                "contentStyleType",
                "diffuseConstant",
                "edgeMode",
                "externalResourcesRequired",
                "filterRes",
                "filterUnits",
                "glyphRef",
                "gradientTransform",
                "gradientUnits",
                "kernelMatrix",
                "kernelUnitLength",
                "keyPoints",
                "keySplines",
                "keyTimes",
                "lengthAdjust",
                "limitingConeAngle",
                "markerHeight",
                "markerUnits",
                "markerWidth",
                "maskContentUnits",
                "maskUnits",
                "numOctaves",
                "pathLength",
                "patternContentUnits",
                "patternTransform",
                "patternUnits",
                "pointsAtX",
                "pointsAtY",
                "pointsAtZ",
                "preserveAlpha",
                "preserveAspectRatio",
                "primitiveUnits",
                "refX",
                "refY",
                "repeatCount",
                "repeatDur",
                "requiredExtensions",
                "requiredFeatures",
                "specularConstant",
                "specularExponent",
                "spreadMethod",
                "startOffset",
                "stdDeviation",
                "stitchTiles",
                "suppressContentEditableWarning",
                "suppressHydrationWarning",
                "surfaceScale",
                "systemLanguage",
                "tableValues",
                "targetX",
                "targetY",
                "textLength",
                "viewBox",
                "viewTarget",
                "xChannelSelector",
                "yChannelSelector",
            ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), {}),
            U = ["xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "xmlns:xlink"].reduce(
                (e, t) => ((e[t.replace(":", "").toLowerCase()] = t), e),
                {}
            );
        function $(e) {
            switch (e) {
                case "htmlFor":
                    return "for";
                case "className":
                    return "class";
            }
            const t = e.toLowerCase();
            return N[t] ? N[t] : F[t] ? R(F[t]) : U[t] ? U[t] : t;
        }
        function q(e) {
            return e.startsWith("--") ? e : V(e, ["ms", "O", "Moz", "Webkit"]) ? "-" + R(e) : R(e);
        }
        function X(e, t) {
            return "number" != typeof t || 0 === t || D.has(e) ? t : t + "px";
        }
        function B(t, n, r = {}) {
            if (null == t || !1 === t) return "";
            if (Array.isArray(t)) return Z(t, n, r);
            switch (typeof t) {
                case "string":
                    return (0, T.escapeHTML)(t);
                case "number":
                    return t.toString();
            }
            const { type: o, props: i } = t;
            switch (o) {
                case e.StrictMode:
                case e.Fragment:
                    return Z(i.children, n, r);
                case A:
                    const { children: t, ...o } = i;
                    return Y(Object.keys(o).length ? "div" : null, { ...o, dangerouslySetInnerHTML: { __html: t } }, n, r);
            }
            switch (typeof o) {
                case "string":
                    return Y(o, i, n, r);
                case "function":
                    return o.prototype && "function" == typeof o.prototype.render
                        ? (function (e, t, n, r = {}) {
                              const o = new e(t, r);
                              "function" == typeof o.getChildContext && Object.assign(r, o.getChildContext());
                              const i = B(o.render(), n, r);
                              return i;
                          })(o, i, n, r)
                        : B(o(i, r), n, r);
            }
            switch (o && o.$$typeof) {
                case M.$$typeof:
                    return Z(i.children, i.value, r);
                case I.$$typeof:
                    return B(i.children(n || o._currentValue), n, r);
                case L.$$typeof:
                    return B(o.render(i), n, r);
            }
            return "";
        }
        function Y(e, t, n, r = {}) {
            let o = "";
            if ("textarea" === e && t.hasOwnProperty("value")) {
                o = Z(t.value, n, r);
                const { value: e, ...i } = t;
                t = i;
            } else t.dangerouslySetInnerHTML && "string" == typeof t.dangerouslySetInnerHTML.__html ? (o = t.dangerouslySetInnerHTML.__html) : void 0 !== t.children && (o = Z(t.children, n, r));
            if (!e) return o;
            const i = (function (e) {
                let t = "";
                for (const n in e) {
                    const r = $(n);
                    if (!(0, T.isValidAttributeName)(r)) continue;
                    let o = _(n, e[n]);
                    if (!P.has(typeof o)) continue;
                    if (W(n)) continue;
                    const i = H.has(r);
                    if (i && !1 === o) continue;
                    const a = i || V(n, ["data-", "aria-"]) || z.has(r);
                    ("boolean" != typeof o || a) && ((t += " " + r), i || ("string" == typeof o && (o = (0, T.escapeAttribute)(o)), (t += '="' + o + '"')));
                }
                return t;
            })(t);
            return j.has(e) ? "<" + e + i + "/>" : "<" + e + i + ">" + o + "</" + e + ">";
        }
        function Z(e, t, n = {}) {
            let r = "";
            e = Array.isArray(e) ? e : [e];
            for (let o = 0; o < e.length; o++) {
                r += B(e[o], t, n);
            }
            return r;
        }
        const G = B;
    })(),
        ((window.wp = window.wp || {}).element = r);
})();
