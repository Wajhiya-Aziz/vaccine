(() => {
    var e = {
            849: (e, t) => {
                var n;
                !(function () {
                    "use strict";
                    var r = {}.hasOwnProperty;
                    function o() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var i = typeof n;
                                if ("string" === i || "number" === i) e.push(n);
                                else if (Array.isArray(n)) {
                                    if (n.length) {
                                        var a = o.apply(null, n);
                                        a && e.push(a);
                                    }
                                } else if ("object" === i)
                                    if (n.toString === Object.prototype.toString) for (var s in n) r.call(n, s) && n[s] && e.push(s);
                                    else e.push(n.toString());
                            }
                        }
                        return e.join(" ");
                    }
                    e.exports
                        ? ((o.default = o), (e.exports = o))
                        : void 0 ===
                              (n = function () {
                                  return o;
                              }.apply(t, [])) || (e.exports = n);
                })();
            },
            608: (e, t) => {
                var n;
                !(function () {
                    "use strict";
                    var r = {}.hasOwnProperty;
                    function o() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var i = typeof n;
                                if ("string" === i || "number" === i) e.push(n);
                                else if (Array.isArray(n)) {
                                    if (n.length) {
                                        var a = o.apply(null, n);
                                        a && e.push(a);
                                    }
                                } else if ("object" === i) {
                                    if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                        e.push(n.toString());
                                        continue;
                                    }
                                    for (var s in n) r.call(n, s) && n[s] && e.push(s);
                                }
                            }
                        }
                        return e.join(" ");
                    }
                    e.exports
                        ? ((o.default = o), (e.exports = o))
                        : void 0 ===
                              (n = function () {
                                  return o;
                              }.apply(t, [])) || (e.exports = n);
                })();
            },
            561: function (e) {
                e.exports = (function () {
                    "use strict";
                    function e(t) {
                        return (
                            (e =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      }),
                            e(t)
                        );
                    }
                    function t(e, n) {
                        return (
                            (t =
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e;
                                }),
                            t(e, n)
                        );
                    }
                    function n(e, r, o) {
                        return (
                            (n = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })()
                                ? Reflect.construct
                                : function (e, n, r) {
                                      var o = [null];
                                      o.push.apply(o, n);
                                      var i = new (Function.bind.apply(e, o))();
                                      return r && t(i, r.prototype), i;
                                  }),
                            n.apply(null, arguments)
                        );
                    }
                    function r(e) {
                        return (
                            (function (e) {
                                if (Array.isArray(e)) return o(e);
                            })(e) ||
                            (function (e) {
                                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                            })(e) ||
                            (function (e, t) {
                                if (e) {
                                    if ("string" == typeof e) return o(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                                }
                            })(e) ||
                            (function () {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            })()
                        );
                    }
                    function o(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r;
                    }
                    var i = Object.hasOwnProperty,
                        a = Object.setPrototypeOf,
                        s = Object.isFrozen,
                        l = Object.getPrototypeOf,
                        c = Object.getOwnPropertyDescriptor,
                        u = Object.freeze,
                        d = Object.seal,
                        p = Object.create,
                        m = "undefined" != typeof Reflect && Reflect,
                        f = m.apply,
                        h = m.construct;
                    f ||
                        (f = function (e, t, n) {
                            return e.apply(t, n);
                        }),
                        u ||
                            (u = function (e) {
                                return e;
                            }),
                        d ||
                            (d = function (e) {
                                return e;
                            }),
                        h ||
                            (h = function (e, t) {
                                return n(e, r(t));
                            });
                    var g,
                        y = k(Array.prototype.forEach),
                        v = k(Array.prototype.pop),
                        C = k(Array.prototype.push),
                        E = k(String.prototype.toLowerCase),
                        b = k(String.prototype.toString),
                        w = k(String.prototype.match),
                        S = k(String.prototype.replace),
                        N = k(String.prototype.indexOf),
                        x = k(String.prototype.trim),
                        A = k(RegExp.prototype.test),
                        T =
                            ((g = TypeError),
                            function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return h(g, t);
                            });
                    function k(e) {
                        return function (t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            return f(e, t, r);
                        };
                    }
                    function R(e, t, n) {
                        var r;
                        (n = null !== (r = n) && void 0 !== r ? r : E), a && a(e, null);
                        for (var o = t.length; o--; ) {
                            var i = t[o];
                            if ("string" == typeof i) {
                                var l = n(i);
                                l !== i && (s(t) || (t[o] = l), (i = l));
                            }
                            e[i] = !0;
                        }
                        return e;
                    }
                    function M(e) {
                        var t,
                            n = p(null);
                        for (t in e) !0 === f(i, e, [t]) && (n[t] = e[t]);
                        return n;
                    }
                    function _(e, t) {
                        for (; null !== e; ) {
                            var n = c(e, t);
                            if (n) {
                                if (n.get) return k(n.get);
                                if ("function" == typeof n.value) return k(n.value);
                            }
                            e = l(e);
                        }
                        return function (e) {
                            return console.warn("fallback value for", e), null;
                        };
                    }
                    var O = u([
                            "a",
                            "abbr",
                            "acronym",
                            "address",
                            "area",
                            "article",
                            "aside",
                            "audio",
                            "b",
                            "bdi",
                            "bdo",
                            "big",
                            "blink",
                            "blockquote",
                            "body",
                            "br",
                            "button",
                            "canvas",
                            "caption",
                            "center",
                            "cite",
                            "code",
                            "col",
                            "colgroup",
                            "content",
                            "data",
                            "datalist",
                            "dd",
                            "decorator",
                            "del",
                            "details",
                            "dfn",
                            "dialog",
                            "dir",
                            "div",
                            "dl",
                            "dt",
                            "element",
                            "em",
                            "fieldset",
                            "figcaption",
                            "figure",
                            "font",
                            "footer",
                            "form",
                            "h1",
                            "h2",
                            "h3",
                            "h4",
                            "h5",
                            "h6",
                            "head",
                            "header",
                            "hgroup",
                            "hr",
                            "html",
                            "i",
                            "img",
                            "input",
                            "ins",
                            "kbd",
                            "label",
                            "legend",
                            "li",
                            "main",
                            "map",
                            "mark",
                            "marquee",
                            "menu",
                            "menuitem",
                            "meter",
                            "nav",
                            "nobr",
                            "ol",
                            "optgroup",
                            "option",
                            "output",
                            "p",
                            "picture",
                            "pre",
                            "progress",
                            "q",
                            "rp",
                            "rt",
                            "ruby",
                            "s",
                            "samp",
                            "section",
                            "select",
                            "shadow",
                            "small",
                            "source",
                            "spacer",
                            "span",
                            "strike",
                            "strong",
                            "style",
                            "sub",
                            "summary",
                            "sup",
                            "table",
                            "tbody",
                            "td",
                            "template",
                            "textarea",
                            "tfoot",
                            "th",
                            "thead",
                            "time",
                            "tr",
                            "track",
                            "tt",
                            "u",
                            "ul",
                            "var",
                            "video",
                            "wbr",
                        ]),
                        L = u([
                            "svg",
                            "a",
                            "altglyph",
                            "altglyphdef",
                            "altglyphitem",
                            "animatecolor",
                            "animatemotion",
                            "animatetransform",
                            "circle",
                            "clippath",
                            "defs",
                            "desc",
                            "ellipse",
                            "filter",
                            "font",
                            "g",
                            "glyph",
                            "glyphref",
                            "hkern",
                            "image",
                            "line",
                            "lineargradient",
                            "marker",
                            "mask",
                            "metadata",
                            "mpath",
                            "path",
                            "pattern",
                            "polygon",
                            "polyline",
                            "radialgradient",
                            "rect",
                            "stop",
                            "style",
                            "switch",
                            "symbol",
                            "text",
                            "textpath",
                            "title",
                            "tref",
                            "tspan",
                            "view",
                            "vkern",
                        ]),
                        I = u([
                            "feBlend",
                            "feColorMatrix",
                            "feComponentTransfer",
                            "feComposite",
                            "feConvolveMatrix",
                            "feDiffuseLighting",
                            "feDisplacementMap",
                            "feDistantLight",
                            "feFlood",
                            "feFuncA",
                            "feFuncB",
                            "feFuncG",
                            "feFuncR",
                            "feGaussianBlur",
                            "feImage",
                            "feMerge",
                            "feMergeNode",
                            "feMorphology",
                            "feOffset",
                            "fePointLight",
                            "feSpecularLighting",
                            "feSpotLight",
                            "feTile",
                            "feTurbulence",
                        ]),
                        D = u([
                            "animate",
                            "color-profile",
                            "cursor",
                            "discard",
                            "fedropshadow",
                            "font-face",
                            "font-face-format",
                            "font-face-name",
                            "font-face-src",
                            "font-face-uri",
                            "foreignobject",
                            "hatch",
                            "hatchpath",
                            "mesh",
                            "meshgradient",
                            "meshpatch",
                            "meshrow",
                            "missing-glyph",
                            "script",
                            "set",
                            "solidcolor",
                            "unknown",
                            "use",
                        ]),
                        F = u([
                            "math",
                            "menclose",
                            "merror",
                            "mfenced",
                            "mfrac",
                            "mglyph",
                            "mi",
                            "mlabeledtr",
                            "mmultiscripts",
                            "mn",
                            "mo",
                            "mover",
                            "mpadded",
                            "mphantom",
                            "mroot",
                            "mrow",
                            "ms",
                            "mspace",
                            "msqrt",
                            "mstyle",
                            "msub",
                            "msup",
                            "msubsup",
                            "mtable",
                            "mtd",
                            "mtext",
                            "mtr",
                            "munder",
                            "munderover",
                        ]),
                        P = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        $ = u(["#text"]),
                        B = u([
                            "accept",
                            "action",
                            "align",
                            "alt",
                            "autocapitalize",
                            "autocomplete",
                            "autopictureinpicture",
                            "autoplay",
                            "background",
                            "bgcolor",
                            "border",
                            "capture",
                            "cellpadding",
                            "cellspacing",
                            "checked",
                            "cite",
                            "class",
                            "clear",
                            "color",
                            "cols",
                            "colspan",
                            "controls",
                            "controlslist",
                            "coords",
                            "crossorigin",
                            "datetime",
                            "decoding",
                            "default",
                            "dir",
                            "disabled",
                            "disablepictureinpicture",
                            "disableremoteplayback",
                            "download",
                            "draggable",
                            "enctype",
                            "enterkeyhint",
                            "face",
                            "for",
                            "headers",
                            "height",
                            "hidden",
                            "high",
                            "href",
                            "hreflang",
                            "id",
                            "inputmode",
                            "integrity",
                            "ismap",
                            "kind",
                            "label",
                            "lang",
                            "list",
                            "loading",
                            "loop",
                            "low",
                            "max",
                            "maxlength",
                            "media",
                            "method",
                            "min",
                            "minlength",
                            "multiple",
                            "muted",
                            "name",
                            "nonce",
                            "noshade",
                            "novalidate",
                            "nowrap",
                            "open",
                            "optimum",
                            "pattern",
                            "placeholder",
                            "playsinline",
                            "poster",
                            "preload",
                            "pubdate",
                            "radiogroup",
                            "readonly",
                            "rel",
                            "required",
                            "rev",
                            "reversed",
                            "role",
                            "rows",
                            "rowspan",
                            "spellcheck",
                            "scope",
                            "selected",
                            "shape",
                            "size",
                            "sizes",
                            "span",
                            "srclang",
                            "start",
                            "src",
                            "srcset",
                            "step",
                            "style",
                            "summary",
                            "tabindex",
                            "title",
                            "translate",
                            "type",
                            "usemap",
                            "valign",
                            "value",
                            "width",
                            "xmlns",
                            "slot",
                        ]),
                        U = u([
                            "accent-height",
                            "accumulate",
                            "additive",
                            "alignment-baseline",
                            "ascent",
                            "attributename",
                            "attributetype",
                            "azimuth",
                            "basefrequency",
                            "baseline-shift",
                            "begin",
                            "bias",
                            "by",
                            "class",
                            "clip",
                            "clippathunits",
                            "clip-path",
                            "clip-rule",
                            "color",
                            "color-interpolation",
                            "color-interpolation-filters",
                            "color-profile",
                            "color-rendering",
                            "cx",
                            "cy",
                            "d",
                            "dx",
                            "dy",
                            "diffuseconstant",
                            "direction",
                            "display",
                            "divisor",
                            "dur",
                            "edgemode",
                            "elevation",
                            "end",
                            "fill",
                            "fill-opacity",
                            "fill-rule",
                            "filter",
                            "filterunits",
                            "flood-color",
                            "flood-opacity",
                            "font-family",
                            "font-size",
                            "font-size-adjust",
                            "font-stretch",
                            "font-style",
                            "font-variant",
                            "font-weight",
                            "fx",
                            "fy",
                            "g1",
                            "g2",
                            "glyph-name",
                            "glyphref",
                            "gradientunits",
                            "gradienttransform",
                            "height",
                            "href",
                            "id",
                            "image-rendering",
                            "in",
                            "in2",
                            "k",
                            "k1",
                            "k2",
                            "k3",
                            "k4",
                            "kerning",
                            "keypoints",
                            "keysplines",
                            "keytimes",
                            "lang",
                            "lengthadjust",
                            "letter-spacing",
                            "kernelmatrix",
                            "kernelunitlength",
                            "lighting-color",
                            "local",
                            "marker-end",
                            "marker-mid",
                            "marker-start",
                            "markerheight",
                            "markerunits",
                            "markerwidth",
                            "maskcontentunits",
                            "maskunits",
                            "max",
                            "mask",
                            "media",
                            "method",
                            "mode",
                            "min",
                            "name",
                            "numoctaves",
                            "offset",
                            "operator",
                            "opacity",
                            "order",
                            "orient",
                            "orientation",
                            "origin",
                            "overflow",
                            "paint-order",
                            "path",
                            "pathlength",
                            "patterncontentunits",
                            "patterntransform",
                            "patternunits",
                            "points",
                            "preservealpha",
                            "preserveaspectratio",
                            "primitiveunits",
                            "r",
                            "rx",
                            "ry",
                            "radius",
                            "refx",
                            "refy",
                            "repeatcount",
                            "repeatdur",
                            "restart",
                            "result",
                            "rotate",
                            "scale",
                            "seed",
                            "shape-rendering",
                            "specularconstant",
                            "specularexponent",
                            "spreadmethod",
                            "startoffset",
                            "stddeviation",
                            "stitchtiles",
                            "stop-color",
                            "stop-opacity",
                            "stroke-dasharray",
                            "stroke-dashoffset",
                            "stroke-linecap",
                            "stroke-linejoin",
                            "stroke-miterlimit",
                            "stroke-opacity",
                            "stroke",
                            "stroke-width",
                            "style",
                            "surfacescale",
                            "systemlanguage",
                            "tabindex",
                            "targetx",
                            "targety",
                            "transform",
                            "transform-origin",
                            "text-anchor",
                            "text-decoration",
                            "text-rendering",
                            "textlength",
                            "type",
                            "u1",
                            "u2",
                            "unicode",
                            "values",
                            "viewbox",
                            "visibility",
                            "version",
                            "vert-adv-y",
                            "vert-origin-x",
                            "vert-origin-y",
                            "width",
                            "word-spacing",
                            "wrap",
                            "writing-mode",
                            "xchannelselector",
                            "ychannelselector",
                            "x",
                            "x1",
                            "x2",
                            "xmlns",
                            "y",
                            "y1",
                            "y2",
                            "z",
                            "zoomandpan",
                        ]),
                        H = u([
                            "accent",
                            "accentunder",
                            "align",
                            "bevelled",
                            "close",
                            "columnsalign",
                            "columnlines",
                            "columnspan",
                            "denomalign",
                            "depth",
                            "dir",
                            "display",
                            "displaystyle",
                            "encoding",
                            "fence",
                            "frame",
                            "height",
                            "href",
                            "id",
                            "largeop",
                            "length",
                            "linethickness",
                            "lspace",
                            "lquote",
                            "mathbackground",
                            "mathcolor",
                            "mathsize",
                            "mathvariant",
                            "maxsize",
                            "minsize",
                            "movablelimits",
                            "notation",
                            "numalign",
                            "open",
                            "rowalign",
                            "rowlines",
                            "rowspacing",
                            "rowspan",
                            "rspace",
                            "rquote",
                            "scriptlevel",
                            "scriptminsize",
                            "scriptsizemultiplier",
                            "selection",
                            "separator",
                            "separators",
                            "stretchy",
                            "subscriptshift",
                            "supscriptshift",
                            "symmetric",
                            "voffset",
                            "width",
                            "xmlns",
                        ]),
                        V = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        G = d(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                        j = d(/<%[\w\W]*|[\w\W]*%>/gm),
                        Z = d(/\${[\w\W]*}/gm),
                        W = d(/^data-[\-\w.\u00B7-\uFFFF]/),
                        K = d(/^aria-[\-\w]+$/),
                        z = d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        Y = d(/^(?:\w+script|data):/i),
                        J = d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                        X = d(/^html$/i),
                        q = function () {
                            return "undefined" == typeof window ? null : window;
                        };
                    return (function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q(),
                            o = function (e) {
                                return t(e);
                            };
                        if (((o.version = "2.4.7"), (o.removed = []), !n || !n.document || 9 !== n.document.nodeType)) return (o.isSupported = !1), o;
                        var i = n.document,
                            a = n.document,
                            s = n.DocumentFragment,
                            l = n.HTMLTemplateElement,
                            c = n.Node,
                            d = n.Element,
                            p = n.NodeFilter,
                            m = n.NamedNodeMap,
                            f = void 0 === m ? n.NamedNodeMap || n.MozNamedAttrMap : m,
                            h = n.HTMLFormElement,
                            g = n.DOMParser,
                            k = n.trustedTypes,
                            Q = d.prototype,
                            ee = _(Q, "cloneNode"),
                            te = _(Q, "nextSibling"),
                            ne = _(Q, "childNodes"),
                            re = _(Q, "parentNode");
                        if ("function" == typeof l) {
                            var oe = a.createElement("template");
                            oe.content && oe.content.ownerDocument && (a = oe.content.ownerDocument);
                        }
                        var ie = (function (t, n) {
                                if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
                                var r = null,
                                    o = "data-tt-policy-suffix";
                                n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
                                var i = "dompurify" + (r ? "#" + r : "");
                                try {
                                    return t.createPolicy(i, {
                                        createHTML: function (e) {
                                            return e;
                                        },
                                        createScriptURL: function (e) {
                                            return e;
                                        },
                                    });
                                } catch (e) {
                                    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
                                }
                            })(k, i),
                            ae = ie ? ie.createHTML("") : "",
                            se = a,
                            le = se.implementation,
                            ce = se.createNodeIterator,
                            ue = se.createDocumentFragment,
                            de = se.getElementsByTagName,
                            pe = i.importNode,
                            me = {};
                        try {
                            me = M(a).documentMode ? a.documentMode : {};
                        } catch (e) {}
                        var fe = {};
                        o.isSupported = "function" == typeof re && le && void 0 !== le.createHTMLDocument && 9 !== me;
                        var he,
                            ge,
                            ye = G,
                            ve = j,
                            Ce = Z,
                            Ee = W,
                            be = K,
                            we = Y,
                            Se = J,
                            Ne = z,
                            xe = null,
                            Ae = R({}, [].concat(r(O), r(L), r(I), r(F), r($))),
                            Te = null,
                            ke = R({}, [].concat(r(B), r(U), r(H), r(V))),
                            Re = Object.seal(
                                Object.create(null, {
                                    tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                                    attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                                    allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
                                })
                            ),
                            Me = null,
                            _e = null,
                            Oe = !0,
                            Le = !0,
                            Ie = !1,
                            De = !0,
                            Fe = !1,
                            Pe = !1,
                            $e = !1,
                            Be = !1,
                            Ue = !1,
                            He = !1,
                            Ve = !1,
                            Ge = !0,
                            je = !1,
                            Ze = !0,
                            We = !1,
                            Ke = {},
                            ze = null,
                            Ye = R({}, [
                                "annotation-xml",
                                "audio",
                                "colgroup",
                                "desc",
                                "foreignobject",
                                "head",
                                "iframe",
                                "math",
                                "mi",
                                "mn",
                                "mo",
                                "ms",
                                "mtext",
                                "noembed",
                                "noframes",
                                "noscript",
                                "plaintext",
                                "script",
                                "style",
                                "svg",
                                "template",
                                "thead",
                                "title",
                                "video",
                                "xmp",
                            ]),
                            Je = null,
                            Xe = R({}, ["audio", "video", "img", "source", "image", "track"]),
                            qe = null,
                            Qe = R({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            et = "http://www.w3.org/1998/Math/MathML",
                            tt = "http://www.w3.org/2000/svg",
                            nt = "http://www.w3.org/1999/xhtml",
                            rt = nt,
                            ot = !1,
                            it = null,
                            at = R({}, [et, tt, nt], b),
                            st = ["application/xhtml+xml", "text/html"],
                            lt = null,
                            ct = a.createElement("form"),
                            ut = function (e) {
                                return e instanceof RegExp || e instanceof Function;
                            },
                            dt = function (t) {
                                (lt && lt === t) ||
                                    ((t && "object" === e(t)) || (t = {}),
                                    (t = M(t)),
                                    (he = he = -1 === st.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE),
                                    (ge = "application/xhtml+xml" === he ? b : E),
                                    (xe = "ALLOWED_TAGS" in t ? R({}, t.ALLOWED_TAGS, ge) : Ae),
                                    (Te = "ALLOWED_ATTR" in t ? R({}, t.ALLOWED_ATTR, ge) : ke),
                                    (it = "ALLOWED_NAMESPACES" in t ? R({}, t.ALLOWED_NAMESPACES, b) : at),
                                    (qe = "ADD_URI_SAFE_ATTR" in t ? R(M(Qe), t.ADD_URI_SAFE_ATTR, ge) : Qe),
                                    (Je = "ADD_DATA_URI_TAGS" in t ? R(M(Xe), t.ADD_DATA_URI_TAGS, ge) : Xe),
                                    (ze = "FORBID_CONTENTS" in t ? R({}, t.FORBID_CONTENTS, ge) : Ye),
                                    (Me = "FORBID_TAGS" in t ? R({}, t.FORBID_TAGS, ge) : {}),
                                    (_e = "FORBID_ATTR" in t ? R({}, t.FORBID_ATTR, ge) : {}),
                                    (Ke = "USE_PROFILES" in t && t.USE_PROFILES),
                                    (Oe = !1 !== t.ALLOW_ARIA_ATTR),
                                    (Le = !1 !== t.ALLOW_DATA_ATTR),
                                    (Ie = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                                    (De = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                                    (Fe = t.SAFE_FOR_TEMPLATES || !1),
                                    (Pe = t.WHOLE_DOCUMENT || !1),
                                    (Ue = t.RETURN_DOM || !1),
                                    (He = t.RETURN_DOM_FRAGMENT || !1),
                                    (Ve = t.RETURN_TRUSTED_TYPE || !1),
                                    (Be = t.FORCE_BODY || !1),
                                    (Ge = !1 !== t.SANITIZE_DOM),
                                    (je = t.SANITIZE_NAMED_PROPS || !1),
                                    (Ze = !1 !== t.KEEP_CONTENT),
                                    (We = t.IN_PLACE || !1),
                                    (Ne = t.ALLOWED_URI_REGEXP || Ne),
                                    (rt = t.NAMESPACE || nt),
                                    (Re = t.CUSTOM_ELEMENT_HANDLING || {}),
                                    t.CUSTOM_ELEMENT_HANDLING && ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Re.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                                    t.CUSTOM_ELEMENT_HANDLING && ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Re.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                                    t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Re.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                                    Fe && (Le = !1),
                                    He && (Ue = !0),
                                    Ke &&
                                        ((xe = R({}, r($))),
                                        (Te = []),
                                        !0 === Ke.html && (R(xe, O), R(Te, B)),
                                        !0 === Ke.svg && (R(xe, L), R(Te, U), R(Te, V)),
                                        !0 === Ke.svgFilters && (R(xe, I), R(Te, U), R(Te, V)),
                                        !0 === Ke.mathMl && (R(xe, F), R(Te, H), R(Te, V))),
                                    t.ADD_TAGS && (xe === Ae && (xe = M(xe)), R(xe, t.ADD_TAGS, ge)),
                                    t.ADD_ATTR && (Te === ke && (Te = M(Te)), R(Te, t.ADD_ATTR, ge)),
                                    t.ADD_URI_SAFE_ATTR && R(qe, t.ADD_URI_SAFE_ATTR, ge),
                                    t.FORBID_CONTENTS && (ze === Ye && (ze = M(ze)), R(ze, t.FORBID_CONTENTS, ge)),
                                    Ze && (xe["#text"] = !0),
                                    Pe && R(xe, ["html", "head", "body"]),
                                    xe.table && (R(xe, ["tbody"]), delete Me.tbody),
                                    u && u(t),
                                    (lt = t));
                            },
                            pt = R({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            mt = R({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                            ft = R({}, ["title", "style", "font", "a", "script"]),
                            ht = R({}, L);
                        R(ht, I), R(ht, D);
                        var gt = R({}, F);
                        R(gt, P);
                        var yt = function (e) {
                                C(o.removed, { element: e });
                                try {
                                    e.parentNode.removeChild(e);
                                } catch (t) {
                                    try {
                                        e.outerHTML = ae;
                                    } catch (t) {
                                        e.remove();
                                    }
                                }
                            },
                            vt = function (e, t) {
                                try {
                                    C(o.removed, { attribute: t.getAttributeNode(e), from: t });
                                } catch (e) {
                                    C(o.removed, { attribute: null, from: t });
                                }
                                if ((t.removeAttribute(e), "is" === e && !Te[e]))
                                    if (Ue || He)
                                        try {
                                            yt(t);
                                        } catch (e) {}
                                    else
                                        try {
                                            t.setAttribute(e, "");
                                        } catch (e) {}
                            },
                            Ct = function (e) {
                                var t, n;
                                if (Be) e = "<remove></remove>" + e;
                                else {
                                    var r = w(e, /^[\r\n\t ]+/);
                                    n = r && r[0];
                                }
                                "application/xhtml+xml" === he && rt === nt && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                                var o = ie ? ie.createHTML(e) : e;
                                if (rt === nt)
                                    try {
                                        t = new g().parseFromString(o, he);
                                    } catch (e) {}
                                if (!t || !t.documentElement) {
                                    t = le.createDocument(rt, "template", null);
                                    try {
                                        t.documentElement.innerHTML = ot ? ae : o;
                                    } catch (e) {}
                                }
                                var i = t.body || t.documentElement;
                                return e && n && i.insertBefore(a.createTextNode(n), i.childNodes[0] || null), rt === nt ? de.call(t, Pe ? "html" : "body")[0] : Pe ? t.documentElement : i;
                            },
                            Et = function (e) {
                                return ce.call(e.ownerDocument || e, e, p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT, null, !1);
                            },
                            bt = function (t) {
                                return "object" === e(c) ? t instanceof c : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
                            },
                            wt = function (e, t, n) {
                                fe[e] &&
                                    y(fe[e], function (e) {
                                        e.call(o, t, n, lt);
                                    });
                            },
                            St = function (e) {
                                var t, n;
                                if (
                                    (wt("beforeSanitizeElements", e, null),
                                    (n = e) instanceof h &&
                                        ("string" != typeof n.nodeName ||
                                            "string" != typeof n.textContent ||
                                            "function" != typeof n.removeChild ||
                                            !(n.attributes instanceof f) ||
                                            "function" != typeof n.removeAttribute ||
                                            "function" != typeof n.setAttribute ||
                                            "string" != typeof n.namespaceURI ||
                                            "function" != typeof n.insertBefore ||
                                            "function" != typeof n.hasChildNodes))
                                )
                                    return yt(e), !0;
                                if (A(/[\u0080-\uFFFF]/, e.nodeName)) return yt(e), !0;
                                var r = ge(e.nodeName);
                                if (
                                    (wt("uponSanitizeElement", e, { tagName: r, allowedTags: xe }),
                                    e.hasChildNodes() && !bt(e.firstElementChild) && (!bt(e.content) || !bt(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent))
                                )
                                    return yt(e), !0;
                                if ("select" === r && A(/<template/i, e.innerHTML)) return yt(e), !0;
                                if (!xe[r] || Me[r]) {
                                    if (!Me[r] && xt(r)) {
                                        if (Re.tagNameCheck instanceof RegExp && A(Re.tagNameCheck, r)) return !1;
                                        if (Re.tagNameCheck instanceof Function && Re.tagNameCheck(r)) return !1;
                                    }
                                    if (Ze && !ze[r]) {
                                        var i = re(e) || e.parentNode,
                                            a = ne(e) || e.childNodes;
                                        if (a && i) for (var s = a.length - 1; s >= 0; --s) i.insertBefore(ee(a[s], !0), te(e));
                                    }
                                    return yt(e), !0;
                                }
                                return e instanceof d &&
                                    !(function (e) {
                                        var t = re(e);
                                        (t && t.tagName) || (t = { namespaceURI: rt, tagName: "template" });
                                        var n = E(e.tagName),
                                            r = E(t.tagName);
                                        return (
                                            !!it[e.namespaceURI] &&
                                            (e.namespaceURI === tt
                                                ? t.namespaceURI === nt
                                                    ? "svg" === n
                                                    : t.namespaceURI === et
                                                    ? "svg" === n && ("annotation-xml" === r || pt[r])
                                                    : Boolean(ht[n])
                                                : e.namespaceURI === et
                                                ? t.namespaceURI === nt
                                                    ? "math" === n
                                                    : t.namespaceURI === tt
                                                    ? "math" === n && mt[r]
                                                    : Boolean(gt[n])
                                                : e.namespaceURI === nt
                                                ? !(t.namespaceURI === tt && !mt[r]) && !(t.namespaceURI === et && !pt[r]) && !gt[n] && (ft[n] || !ht[n])
                                                : !("application/xhtml+xml" !== he || !it[e.namespaceURI]))
                                        );
                                    })(e)
                                    ? (yt(e), !0)
                                    : ("noscript" !== r && "noembed" !== r && "noframes" !== r) || !A(/<\/no(script|embed|frames)/i, e.innerHTML)
                                    ? (Fe && 3 === e.nodeType && ((t = e.textContent), (t = S(t, ye, " ")), (t = S(t, ve, " ")), (t = S(t, Ce, " ")), e.textContent !== t && (C(o.removed, { element: e.cloneNode() }), (e.textContent = t))),
                                      wt("afterSanitizeElements", e, null),
                                      !1)
                                    : (yt(e), !0);
                            },
                            Nt = function (e, t, n) {
                                if (Ge && ("id" === t || "name" === t) && (n in a || n in ct)) return !1;
                                if (Le && !_e[t] && A(Ee, t));
                                else if (Oe && A(be, t));
                                else if (!Te[t] || _e[t]) {
                                    if (
                                        !(
                                            (xt(e) &&
                                                ((Re.tagNameCheck instanceof RegExp && A(Re.tagNameCheck, e)) || (Re.tagNameCheck instanceof Function && Re.tagNameCheck(e))) &&
                                                ((Re.attributeNameCheck instanceof RegExp && A(Re.attributeNameCheck, t)) || (Re.attributeNameCheck instanceof Function && Re.attributeNameCheck(t)))) ||
                                            ("is" === t && Re.allowCustomizedBuiltInElements && ((Re.tagNameCheck instanceof RegExp && A(Re.tagNameCheck, n)) || (Re.tagNameCheck instanceof Function && Re.tagNameCheck(n))))
                                        )
                                    )
                                        return !1;
                                } else if (qe[t]);
                                else if (A(Ne, S(n, Se, "")));
                                else if (("src" !== t && "xlink:href" !== t && "href" !== t) || "script" === e || 0 !== N(n, "data:") || !Je[e])
                                    if (Ie && !A(we, S(n, Se, "")));
                                    else if (n) return !1;
                                return !0;
                            },
                            xt = function (e) {
                                return e.indexOf("-") > 0;
                            },
                            At = function (t) {
                                var n, r, i, a;
                                wt("beforeSanitizeAttributes", t, null);
                                var s = t.attributes;
                                if (s) {
                                    var l = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Te };
                                    for (a = s.length; a--; ) {
                                        var c = (n = s[a]),
                                            u = c.name,
                                            d = c.namespaceURI;
                                        if (
                                            ((r = "value" === u ? n.value : x(n.value)),
                                            (i = ge(u)),
                                            (l.attrName = i),
                                            (l.attrValue = r),
                                            (l.keepAttr = !0),
                                            (l.forceKeepAttr = void 0),
                                            wt("uponSanitizeAttribute", t, l),
                                            (r = l.attrValue),
                                            !l.forceKeepAttr && (vt(u, t), l.keepAttr))
                                        )
                                            if (De || !A(/\/>/i, r)) {
                                                Fe && ((r = S(r, ye, " ")), (r = S(r, ve, " ")), (r = S(r, Ce, " ")));
                                                var p = ge(t.nodeName);
                                                if (Nt(p, i, r)) {
                                                    if ((!je || ("id" !== i && "name" !== i) || (vt(u, t), (r = "user-content-" + r)), ie && "object" === e(k) && "function" == typeof k.getAttributeType))
                                                        if (d);
                                                        else
                                                            switch (k.getAttributeType(p, i)) {
                                                                case "TrustedHTML":
                                                                    r = ie.createHTML(r);
                                                                    break;
                                                                case "TrustedScriptURL":
                                                                    r = ie.createScriptURL(r);
                                                            }
                                                    try {
                                                        d ? t.setAttributeNS(d, u, r) : t.setAttribute(u, r), v(o.removed);
                                                    } catch (e) {}
                                                }
                                            } else vt(u, t);
                                    }
                                    wt("afterSanitizeAttributes", t, null);
                                }
                            },
                            Tt = function e(t) {
                                var n,
                                    r = Et(t);
                                for (wt("beforeSanitizeShadowDOM", t, null); (n = r.nextNode()); ) wt("uponSanitizeShadowNode", n, null), St(n) || (n.content instanceof s && e(n.content), At(n));
                                wt("afterSanitizeShadowDOM", t, null);
                            };
                        return (
                            (o.sanitize = function (t) {
                                var r,
                                    a,
                                    l,
                                    u,
                                    d,
                                    p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (((ot = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !bt(t))) {
                                    if ("function" != typeof t.toString) throw T("toString is not a function");
                                    if ("string" != typeof (t = t.toString())) throw T("dirty is not a string, aborting");
                                }
                                if (!o.isSupported) {
                                    if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                                        if ("string" == typeof t) return n.toStaticHTML(t);
                                        if (bt(t)) return n.toStaticHTML(t.outerHTML);
                                    }
                                    return t;
                                }
                                if (($e || dt(p), (o.removed = []), "string" == typeof t && (We = !1), We)) {
                                    if (t.nodeName) {
                                        var m = ge(t.nodeName);
                                        if (!xe[m] || Me[m]) throw T("root node is forbidden and cannot be sanitized in-place");
                                    }
                                } else if (t instanceof c) (1 === (a = (r = Ct("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === a.nodeName) || "HTML" === a.nodeName ? (r = a) : r.appendChild(a);
                                else {
                                    if (!Ue && !Fe && !Pe && -1 === t.indexOf("<")) return ie && Ve ? ie.createHTML(t) : t;
                                    if (!(r = Ct(t))) return Ue ? null : Ve ? ae : "";
                                }
                                r && Be && yt(r.firstChild);
                                for (var f = Et(We ? t : r); (l = f.nextNode()); ) (3 === l.nodeType && l === u) || St(l) || (l.content instanceof s && Tt(l.content), At(l), (u = l));
                                if (((u = null), We)) return t;
                                if (Ue) {
                                    if (He) for (d = ue.call(r.ownerDocument); r.firstChild; ) d.appendChild(r.firstChild);
                                    else d = r;
                                    return (Te.shadowroot || Te.shadowrootmod) && (d = pe.call(i, d, !0)), d;
                                }
                                var h = Pe ? r.outerHTML : r.innerHTML;
                                return (
                                    Pe && xe["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && A(X, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h),
                                    Fe && ((h = S(h, ye, " ")), (h = S(h, ve, " ")), (h = S(h, Ce, " "))),
                                    ie && Ve ? ie.createHTML(h) : h
                                );
                            }),
                            (o.setConfig = function (e) {
                                dt(e), ($e = !0);
                            }),
                            (o.clearConfig = function () {
                                (lt = null), ($e = !1);
                            }),
                            (o.isValidAttribute = function (e, t, n) {
                                lt || dt({});
                                var r = ge(e),
                                    o = ge(t);
                                return Nt(r, o, n);
                            }),
                            (o.addHook = function (e, t) {
                                "function" == typeof t && ((fe[e] = fe[e] || []), C(fe[e], t));
                            }),
                            (o.removeHook = function (e) {
                                if (fe[e]) return v(fe[e]);
                            }),
                            (o.removeHooks = function (e) {
                                fe[e] && (fe[e] = []);
                            }),
                            (o.removeAllHooks = function () {
                                fe = {};
                            }),
                            o
                        );
                    })();
                })();
            },
            29: () => {},
            946: () => {},
            194: () => {},
            283: () => {},
            847: () => {},
            440: () => {},
            942: () => {},
            693: () => {},
            878: () => {},
            658: () => {},
            785: () => {},
            100: (e, t, n) => {
                "use strict";
                t.O = void 0;
                const r = n(211);
                t.O = new Map([
                    [r.CountryCode.UK, /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i],
                    [r.CountryCode.GB, /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i],
                    [r.CountryCode.JE, /^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
                    [r.CountryCode.GG, /^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
                    [r.CountryCode.IM, /^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
                    [r.CountryCode.US, /^([0-9]{5})(?:-([0-9]{4}))?$/],
                    [r.CountryCode.CA, /^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],
                    [r.CountryCode.IE, /^([AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/],
                    [r.CountryCode.DE, /^\d{5}$/],
                    [r.CountryCode.JP, /^\d{3}-\d{4}$/],
                    [r.CountryCode.FR, /^\d{2}[ ]?\d{3}$/],
                    [r.CountryCode.AU, /^\d{4}$/],
                    [r.CountryCode.IT, /^\d{5}$/],
                    [r.CountryCode.CH, /^\d{4}$/],
                    [r.CountryCode.AT, /^(?!0)\d{4}$/],
                    [r.CountryCode.ES, /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],
                    [r.CountryCode.NL, /^\d{4}[ ]?[A-Z]{2}$/],
                    [r.CountryCode.BE, /^\d{4}$/],
                    [r.CountryCode.DK, /^\d{4}$/],
                    [r.CountryCode.SE, /^(SE-)?\d{3}[ ]?\d{2}$/],
                    [r.CountryCode.NO, /^\d{4}$/],
                    [r.CountryCode.BR, /^\d{5}[\-]?\d{3}$/],
                    [r.CountryCode.PT, /^\d{4}([\-]\d{3})?$/],
                    [r.CountryCode.FI, /^(FI-|AX-)?\d{5}$/],
                    [r.CountryCode.AX, /^22\d{3}$/],
                    [r.CountryCode.KR, /^\d{5}$/],
                    [r.CountryCode.CN, /^\d{6}$/],
                    [r.CountryCode.TW, /^\d{3}(\d{2,3})?$/],
                    [r.CountryCode.SG, /^\d{6}$/],
                    [r.CountryCode.DZ, /^\d{5}$/],
                    [r.CountryCode.AD, /^AD\d{3}$/],
                    [r.CountryCode.AR, /^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],
                    [r.CountryCode.AM, /^(37)?\d{4}$/],
                    [r.CountryCode.AZ, /^\d{4}$/],
                    [r.CountryCode.BH, /^((1[0-2]|[2-9])\d{2})?$/],
                    [r.CountryCode.BD, /^\d{4}$/],
                    [r.CountryCode.BB, /^(BB\d{5})?$/],
                    [r.CountryCode.BY, /^\d{6}$/],
                    [r.CountryCode.BM, /^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],
                    [r.CountryCode.BA, /^\d{5}$/],
                    [r.CountryCode.IO, /^BBND 1ZZ$/],
                    [r.CountryCode.BN, /^[A-Z]{2}[ ]?\d{4}$/],
                    [r.CountryCode.BG, /^\d{4}$/],
                    [r.CountryCode.KH, /^\d{5}$/],
                    [r.CountryCode.CV, /^\d{4}$/],
                    [r.CountryCode.CL, /^\d{7}$/],
                    [r.CountryCode.CR, /^(\d{4,5}|\d{3}-\d{4})$/],
                    [r.CountryCode.HR, /^(HR-)?\d{5}$/],
                    [r.CountryCode.CY, /^\d{4}$/],
                    [r.CountryCode.CZ, /^\d{3}[ ]?\d{2}$/],
                    [r.CountryCode.DO, /^\d{5}$/],
                    [r.CountryCode.EC, /^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],
                    [r.CountryCode.EG, /^\d{5}$/],
                    [r.CountryCode.EE, /^\d{5}$/],
                    [r.CountryCode.FO, /^\d{3}$/],
                    [r.CountryCode.GE, /^\d{4}$/],
                    [r.CountryCode.GR, /^\d{3}[ ]?\d{2}$/],
                    [r.CountryCode.GL, /^39\d{2}$/],
                    [r.CountryCode.GT, /^\d{5}$/],
                    [r.CountryCode.HT, /^\d{4}$/],
                    [r.CountryCode.HN, /^(?:\d{5})?$/],
                    [r.CountryCode.HU, /^\d{4}$/],
                    [r.CountryCode.IS, /^\d{3}$/],
                    [r.CountryCode.IN, /^\d{6}$/],
                    [r.CountryCode.ID, /^\d{5}$/],
                    [r.CountryCode.IL, /^\d{5,7}$/],
                    [r.CountryCode.JO, /^\d{5}$/],
                    [r.CountryCode.KZ, /^\d{6}$/],
                    [r.CountryCode.KE, /^\d{5}$/],
                    [r.CountryCode.KW, /^\d{5}$/],
                    [r.CountryCode.KY, /^KY[123]-\d{4}$/],
                    [r.CountryCode.LA, /^\d{5}$/],
                    [r.CountryCode.LV, /^(LV-)?\d{4}$/],
                    [r.CountryCode.LB, /^(\d{4}([ ]?\d{4})?)?$/],
                    [r.CountryCode.LI, /^(948[5-9])|(949[0-7])$/],
                    [r.CountryCode.LT, /^(LT-)?\d{5}$/],
                    [r.CountryCode.LU, /^(L-)?\d{4}$/],
                    [r.CountryCode.MK, /^\d{4}$/],
                    [r.CountryCode.MY, /^\d{5}$/],
                    [r.CountryCode.MV, /^\d{5}$/],
                    [r.CountryCode.MT, /^[A-Z]{3}[ ]?\d{2,4}$/],
                    [r.CountryCode.MU, /^((\d|[A-Z])\d{4})?$/],
                    [r.CountryCode.MX, /^\d{5}$/],
                    [r.CountryCode.MD, /^\d{4}$/],
                    [r.CountryCode.MC, /^980\d{2}$/],
                    [r.CountryCode.MA, /^\d{5}$/],
                    [r.CountryCode.NP, /^\d{5}$/],
                    [r.CountryCode.NZ, /^\d{4}$/],
                    [r.CountryCode.NI, /^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],
                    [r.CountryCode.NG, /^(\d{6})?$/],
                    [r.CountryCode.OM, /^(PC )?\d{3}$/],
                    [r.CountryCode.PA, /^\d{4}$/],
                    [r.CountryCode.PK, /^\d{5}$/],
                    [r.CountryCode.PY, /^\d{4}$/],
                    [r.CountryCode.PH, /^\d{4}$/],
                    [r.CountryCode.PL, /^\d{2}-\d{3}$/],
                    [r.CountryCode.PR, /^00[679]\d{2}([ \-]\d{4})?$/],
                    [r.CountryCode.RO, /^\d{6}$/],
                    [r.CountryCode.RU, /^\d{6}$/],
                    [r.CountryCode.SM, /^4789\d$/],
                    [r.CountryCode.SA, /^\d{5}$/],
                    [r.CountryCode.SN, /^\d{5}$/],
                    [r.CountryCode.SK, /^\d{3}[ ]?\d{2}$/],
                    [r.CountryCode.SI, /^(SI-)?\d{4}$/],
                    [r.CountryCode.ZA, /^\d{4}$/],
                    [r.CountryCode.LK, /^\d{5}$/],
                    [r.CountryCode.TJ, /^\d{6}$/],
                    [r.CountryCode.TH, /^\d{5}$/],
                    [r.CountryCode.TN, /^\d{4}$/],
                    [r.CountryCode.TR, /^\d{5}$/],
                    [r.CountryCode.TM, /^\d{6}$/],
                    [r.CountryCode.UA, /^\d{5}$/],
                    [r.CountryCode.UY, /^\d{5}$/],
                    [r.CountryCode.UZ, /^\d{6}$/],
                    [r.CountryCode.VA, /^00120$/],
                    [r.CountryCode.VE, /^\d{4}$/],
                    [r.CountryCode.ZM, /^\d{5}$/],
                    [r.CountryCode.AS, /^96799$/],
                    [r.CountryCode.CC, /^6799$/],
                    [r.CountryCode.CK, /^\d{4}$/],
                    [r.CountryCode.RS, /^\d{5,6}$/],
                    [r.CountryCode.ME, /^8\d{4}$/],
                    [r.CountryCode.CS, /^\d{5}$/],
                    [r.CountryCode.YU, /^\d{5}$/],
                    [r.CountryCode.CX, /^6798$/],
                    [r.CountryCode.ET, /^\d{4}$/],
                    [r.CountryCode.FK, /^FIQQ 1ZZ$/],
                    [r.CountryCode.NF, /^2899$/],
                    [r.CountryCode.FM, /^(9694[1-4])([ \-]\d{4})?$/],
                    [r.CountryCode.GF, /^9[78]3\d{2}$/],
                    [r.CountryCode.GN, /^\d{3}$/],
                    [r.CountryCode.GP, /^9[78][01]\d{2}$/],
                    [r.CountryCode.GS, /^SIQQ 1ZZ$/],
                    [r.CountryCode.GU, /^969[123]\d([ \-]\d{4})?$/],
                    [r.CountryCode.GW, /^\d{4}$/],
                    [r.CountryCode.HM, /^\d{4}$/],
                    [r.CountryCode.IQ, /^\d{5}$/],
                    [r.CountryCode.KG, /^\d{6}$/],
                    [r.CountryCode.LR, /^\d{4}$/],
                    [r.CountryCode.LS, /^\d{3}$/],
                    [r.CountryCode.MG, /^\d{3}$/],
                    [r.CountryCode.MH, /^969[67]\d([ \-]\d{4})?$/],
                    [r.CountryCode.MN, /^\d{6}$/],
                    [r.CountryCode.MP, /^9695[012]([ \-]\d{4})?$/],
                    [r.CountryCode.MQ, /^9[78]2\d{2}$/],
                    [r.CountryCode.NC, /^988\d{2}$/],
                    [r.CountryCode.NE, /^\d{4}$/],
                    [r.CountryCode.VI, /^008(([0-4]\d)|(5[01]))([ \-]\d{4})?$/],
                    [r.CountryCode.VN, /^\d{6}$/],
                    [r.CountryCode.PF, /^987\d{2}$/],
                    [r.CountryCode.PG, /^\d{3}$/],
                    [r.CountryCode.PM, /^9[78]5\d{2}$/],
                    [r.CountryCode.PN, /^PCRN 1ZZ$/],
                    [r.CountryCode.PW, /^96940$/],
                    [r.CountryCode.RE, /^9[78]4\d{2}$/],
                    [r.CountryCode.SH, /^(ASCN|STHL) 1ZZ$/],
                    [r.CountryCode.SJ, /^\d{4}$/],
                    [r.CountryCode.SO, /^\d{5}$/],
                    [r.CountryCode.SZ, /^[HLMS]\d{3}$/],
                    [r.CountryCode.TC, /^TKCA 1ZZ$/],
                    [r.CountryCode.WF, /^986\d{2}$/],
                    [r.CountryCode.XK, /^\d{5}$/],
                    [r.CountryCode.YT, /^976\d{2}$/],
                    [r.CountryCode.PE, /^\d{5}$/],
                    [r.CountryCode.INTL, /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i],
                ]);
            },
            211: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.CountryCode = void 0),
                    ((n = t.CountryCode || (t.CountryCode = {})).UK = "UK"),
                    (n.GB = "GB"),
                    (n.JE = "JE"),
                    (n.GG = "GG"),
                    (n.IM = "IM"),
                    (n.US = "US"),
                    (n.CA = "CA"),
                    (n.IE = "IE"),
                    (n.DE = "DE"),
                    (n.JP = "JP"),
                    (n.FR = "FR"),
                    (n.AU = "AU"),
                    (n.IT = "IT"),
                    (n.CH = "CH"),
                    (n.AT = "AT"),
                    (n.ES = "ES"),
                    (n.NL = "NL"),
                    (n.BE = "BE"),
                    (n.DK = "DK"),
                    (n.SE = "SE"),
                    (n.NO = "NO"),
                    (n.BR = "BR"),
                    (n.PT = "PT"),
                    (n.FI = "FI"),
                    (n.AX = "AX"),
                    (n.KR = "KR"),
                    (n.CN = "CN"),
                    (n.TW = "TW"),
                    (n.SG = "SG"),
                    (n.DZ = "DZ"),
                    (n.AD = "AD"),
                    (n.AR = "AR"),
                    (n.AM = "AM"),
                    (n.AZ = "AZ"),
                    (n.BH = "BH"),
                    (n.BD = "BD"),
                    (n.BB = "BB"),
                    (n.BY = "BY"),
                    (n.BM = "BM"),
                    (n.BA = "BA"),
                    (n.IO = "IO"),
                    (n.BN = "BN"),
                    (n.BG = "BG"),
                    (n.KH = "KH"),
                    (n.CV = "CV"),
                    (n.CL = "CL"),
                    (n.CR = "CR"),
                    (n.HR = "HR"),
                    (n.CY = "CY"),
                    (n.CZ = "CZ"),
                    (n.DO = "DO"),
                    (n.EC = "EC"),
                    (n.EG = "EG"),
                    (n.EE = "EE"),
                    (n.FO = "FO"),
                    (n.GE = "GE"),
                    (n.GR = "GR"),
                    (n.GL = "GL"),
                    (n.GT = "GT"),
                    (n.HT = "HT"),
                    (n.HN = "HN"),
                    (n.HU = "HU"),
                    (n.IS = "IS"),
                    (n.IN = "IN"),
                    (n.ID = "ID"),
                    (n.IL = "IL"),
                    (n.JO = "JO"),
                    (n.KZ = "KZ"),
                    (n.KE = "KE"),
                    (n.KW = "KW"),
                    (n.KY = "KY"),
                    (n.LA = "LA"),
                    (n.LV = "LV"),
                    (n.LB = "LB"),
                    (n.LI = "LI"),
                    (n.LT = "LT"),
                    (n.LU = "LU"),
                    (n.MK = "MK"),
                    (n.MY = "MY"),
                    (n.MV = "MV"),
                    (n.MT = "MT"),
                    (n.MU = "MU"),
                    (n.MX = "MX"),
                    (n.MD = "MD"),
                    (n.MC = "MC"),
                    (n.MA = "MA"),
                    (n.NP = "NP"),
                    (n.NZ = "NZ"),
                    (n.NI = "NI"),
                    (n.NG = "NG"),
                    (n.OM = "OM"),
                    (n.PA = "PA"),
                    (n.PK = "PK"),
                    (n.PY = "PY"),
                    (n.PH = "PH"),
                    (n.PL = "PL"),
                    (n.PR = "PR"),
                    (n.RO = "RO"),
                    (n.RU = "RU"),
                    (n.SM = "SM"),
                    (n.SA = "SA"),
                    (n.SN = "SN"),
                    (n.SK = "SK"),
                    (n.SI = "SI"),
                    (n.ZA = "ZA"),
                    (n.LK = "LK"),
                    (n.TJ = "TJ"),
                    (n.TH = "TH"),
                    (n.TN = "TN"),
                    (n.TR = "TR"),
                    (n.TM = "TM"),
                    (n.UA = "UA"),
                    (n.UY = "UY"),
                    (n.UZ = "UZ"),
                    (n.VA = "VA"),
                    (n.VE = "VE"),
                    (n.ZM = "ZM"),
                    (n.AS = "AS"),
                    (n.CC = "CC"),
                    (n.CK = "CK"),
                    (n.RS = "RS"),
                    (n.ME = "ME"),
                    (n.CS = "CS"),
                    (n.YU = "YU"),
                    (n.CX = "CX"),
                    (n.ET = "ET"),
                    (n.FK = "FK"),
                    (n.NF = "NF"),
                    (n.FM = "FM"),
                    (n.GF = "GF"),
                    (n.GN = "GN"),
                    (n.GP = "GP"),
                    (n.GS = "GS"),
                    (n.GU = "GU"),
                    (n.GW = "GW"),
                    (n.HM = "HM"),
                    (n.IQ = "IQ"),
                    (n.KG = "KG"),
                    (n.LR = "LR"),
                    (n.LS = "LS"),
                    (n.MG = "MG"),
                    (n.MH = "MH"),
                    (n.MN = "MN"),
                    (n.MP = "MP"),
                    (n.MQ = "MQ"),
                    (n.NC = "NC"),
                    (n.NE = "NE"),
                    (n.VI = "VI"),
                    (n.VN = "VN"),
                    (n.PF = "PF"),
                    (n.PG = "PG"),
                    (n.PM = "PM"),
                    (n.PN = "PN"),
                    (n.PW = "PW"),
                    (n.RE = "RE"),
                    (n.SH = "SH"),
                    (n.SJ = "SJ"),
                    (n.SO = "SO"),
                    (n.SZ = "SZ"),
                    (n.TC = "TC"),
                    (n.WF = "WF"),
                    (n.XK = "XK"),
                    (n.YT = "YT"),
                    (n.PE = "PE"),
                    (n.INTL = "INTL");
            },
        },
        t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = (t[r] = { exports: {} });
        return e[r].call(i.exports, i, i.exports, n), i.exports;
    }
    (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, { a: t }), t;
    }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var r = {};
    (() => {
        "use strict";
        n.r(r),
            n.d(r, {
                Button: () => tt,
                CheckboxControl: () => en.CheckboxControl,
                ExperimentalDiscountsMeta: () => fe,
                ExperimentalOrderLocalPickupPackages: () => Ee,
                ExperimentalOrderMeta: () => ue,
                ExperimentalOrderShippingPackages: () => ye,
                Label: () => rt,
                Panel: () => Ne,
                SlotFillProvider: () => ee,
                StoreNotice: () => wt,
                StoreNoticesContainer: () => Qt,
                Subtotal: () => k,
                TextInput: () => on,
                TotalsFees: () => M,
                TotalsItem: () => x,
                TotalsTaxes: () => R,
                TotalsWrapper: () => _,
                ValidatedTextInput: () => gn,
                ValidatedTextInputHandle: () => t.ValidatedTextInputHandle,
                ValidationInputError: () => sn,
                __experimentalApplyCheckoutFilter: () => An,
                __experimentalRegisterCheckoutFilters: () => bn,
                applyCheckoutFilter: () => xn,
                createSlotFill: () => ae,
                extensionCartUpdate: () => fn,
                getRegisteredBlocks: () => Mn,
                getValidityMessageForInput: () => cn,
                hasInnerBlocks: () => Rn,
                hasValidFills: () => oe,
                innerBlockAreas: () => Tn,
                isPostcode: () => mn,
                mustContain: () => ln,
                registerCheckoutBlock: () => Ln,
                registerCheckoutFilters: () => En,
                useSlot: () => ie,
            });
        var e = {};
        n.r(e);
        var t = {};
        n.r(t), n.d(t, { Z: () => gn });
        const o = window.React;
        var i = n.n(o),
            a = n(849),
            s = n.n(a);
        const l = window.wp.element;
        function c() {}
        function u(e) {
            return !!(e || "").match(/\d/);
        }
        function d(e) {
            return null == e;
        }
        function p(e) {
            return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
        }
        function m(e, t) {
            void 0 === t && (t = !0);
            var n = "-" === e[0],
                r = n && t,
                o = (e = e.replace("-", "")).split(".");
            return { beforeDecimal: o[0], afterDecimal: o[1] || "", hasNagation: n, addNegation: r };
        }
        function f(e, t, n) {
            for (var r = "", o = n ? "0" : "", i = 0; i <= t - 1; i++) r += e[i] || o;
            return r;
        }
        function h(e, t) {
            return Array(t + 1).join(e);
        }
        function g(e, t) {
            if (((e.value = e.value), null !== e)) {
                if (e.createTextRange) {
                    var n = e.createTextRange();
                    return n.move("character", t), n.select(), !0;
                }
                return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
            }
        }
        function y(e, t, n) {
            return Math.min(Math.max(e, t), n);
        }
        function v(e) {
            return Math.max(e.selectionStart, e.selectionEnd);
        }
        n(658);
        var C = {
                displayType: "input",
                decimalSeparator: ".",
                thousandsGroupStyle: "thousand",
                fixedDecimalScale: !1,
                prefix: "",
                suffix: "",
                allowNegative: !0,
                allowEmptyFormatting: !1,
                allowLeadingZeros: !1,
                isNumericString: !1,
                type: "text",
                onValueChange: c,
                onChange: c,
                onKeyDown: c,
                onMouseUp: c,
                onFocus: c,
                onBlur: c,
                isAllowed: function () {
                    return !0;
                },
            },
            E = (function (e) {
                function t(t) {
                    e.call(this, t);
                    var n = t.defaultValue;
                    this.validateProps();
                    var r = this.formatValueProp(n);
                    (this.state = { value: r, numAsString: this.removeFormatting(r), mounted: !1 }),
                        (this.selectionBeforeInput = { selectionStart: 0, selectionEnd: 0 }),
                        (this.onChange = this.onChange.bind(this)),
                        (this.onKeyDown = this.onKeyDown.bind(this)),
                        (this.onMouseUp = this.onMouseUp.bind(this)),
                        (this.onFocus = this.onFocus.bind(this)),
                        (this.onBlur = this.onBlur.bind(this));
                }
                return (
                    e && (t.__proto__ = e),
                    (t.prototype = Object.create(e && e.prototype)),
                    (t.prototype.constructor = t),
                    (t.prototype.componentDidMount = function () {
                        this.setState({ mounted: !0 });
                    }),
                    (t.prototype.componentDidUpdate = function (e) {
                        this.updateValueIfRequired(e);
                    }),
                    (t.prototype.componentWillUnmount = function () {
                        clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout);
                    }),
                    (t.prototype.updateValueIfRequired = function (e) {
                        var t = this,
                            n = t.props,
                            r = t.state,
                            o = t.focusedElm,
                            i = r.value,
                            a = r.numAsString;
                        if ((void 0 === a && (a = ""), e !== n)) {
                            this.validateProps();
                            var s = this.formatNumString(a),
                                l = d(n.value) ? s : this.formatValueProp(),
                                c = this.removeFormatting(l),
                                u = parseFloat(c),
                                p = parseFloat(a);
                            (((isNaN(u) && isNaN(p)) || u === p) && s === i && (null !== o || l === i)) || this.updateValue({ formattedValue: l, numAsString: c, input: o, source: "prop", event: null });
                        }
                    }),
                    (t.prototype.getFloatString = function (e) {
                        void 0 === e && (e = "");
                        var t = this.props.decimalScale,
                            n = this.getSeparators().decimalSeparator,
                            r = this.getNumberRegex(!0),
                            o = "-" === e[0];
                        o && (e = e.replace("-", "")), n && 0 === t && (e = e.split(n)[0]);
                        var i = (e = (e.match(r) || []).join("").replace(n, ".")).indexOf(".");
                        return -1 !== i && (e = e.substring(0, i) + "." + e.substring(i + 1, e.length).replace(new RegExp(p(n), "g"), "")), o && (e = "-" + e), e;
                    }),
                    (t.prototype.getNumberRegex = function (e, t) {
                        var n = this.props,
                            r = n.format,
                            o = n.decimalScale,
                            i = n.customNumerals,
                            a = this.getSeparators().decimalSeparator;
                        return new RegExp("[0-9" + (i ? i.join("") : "") + "]" + (!a || 0 === o || t || r ? "" : "|" + p(a)), e ? "g" : void 0);
                    }),
                    (t.prototype.getSeparators = function () {
                        var e = this.props.decimalSeparator,
                            t = this.props,
                            n = t.thousandSeparator,
                            r = t.allowedDecimalSeparators;
                        return !0 === n && (n = ","), r || (r = [e, "."]), { decimalSeparator: e, thousandSeparator: n, allowedDecimalSeparators: r };
                    }),
                    (t.prototype.getMaskAtIndex = function (e) {
                        var t = this.props.mask;
                        return void 0 === t && (t = " "), "string" == typeof t ? t : t[e] || " ";
                    }),
                    (t.prototype.getValueObject = function (e, t) {
                        var n = parseFloat(t);
                        return { formattedValue: e, value: t, floatValue: isNaN(n) ? void 0 : n };
                    }),
                    (t.prototype.validateProps = function () {
                        var e = this.props.mask,
                            t = this.getSeparators(),
                            n = t.decimalSeparator,
                            r = t.thousandSeparator;
                        if (n === r)
                            throw new Error(
                                "\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " +
                                    r +
                                    ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ' +
                                    n +
                                    " (default value for decimalSeparator is .)\n       "
                            );
                        if (e && ("string" === e ? e : e.toString()).match(/\d/g)) throw new Error("\n          Mask " + e + " should not contain numeric character;\n        ");
                    }),
                    (t.prototype.setPatchedCaretPosition = function (e, t, n) {
                        g(e, t),
                            (this.caretPositionTimeout = setTimeout(function () {
                                e.value === n && g(e, t);
                            }, 0));
                    }),
                    (t.prototype.correctCaretPosition = function (e, t, n) {
                        var r = this.props,
                            o = r.prefix,
                            i = r.suffix,
                            a = r.format;
                        if ("" === e) return 0;
                        if (((t = y(t, 0, e.length)), !a)) {
                            var s = "-" === e[0];
                            return y(t, o.length + (s ? 1 : 0), e.length - i.length);
                        }
                        if ("function" == typeof a) return t;
                        if ("#" === a[t] && u(e[t])) return t;
                        if ("#" === a[t - 1] && u(e[t - 1])) return t;
                        var l = a.indexOf("#");
                        t = y(t, l, a.lastIndexOf("#") + 1);
                        for (var c = a.substring(t, a.length).indexOf("#"), d = t, p = t + (-1 === c ? 0 : c); d > l && ("#" !== a[d] || !u(e[d])); ) d -= 1;
                        return !u(e[p]) || ("left" === n && t !== l) || t - d < p - t ? (u(e[d]) ? d + 1 : d) : p;
                    }),
                    (t.prototype.getCaretPosition = function (e, t, n) {
                        var r,
                            o,
                            i = this.props.format,
                            a = this.state.value,
                            s = this.getNumberRegex(!0),
                            l = (e.match(s) || []).join(""),
                            c = (t.match(s) || []).join("");
                        for (r = 0, o = 0; o < n; o++) {
                            var u = e[o] || "",
                                d = t[r] || "";
                            if ((u.match(s) || u === d) && ("0" !== u || !d.match(s) || "0" === d || l.length === c.length)) {
                                for (; u !== t[r] && r < t.length; ) r++;
                                r++;
                            }
                        }
                        return "string" != typeof i || a || (r = t.length), this.correctCaretPosition(t, r);
                    }),
                    (t.prototype.removePrefixAndSuffix = function (e) {
                        var t = this.props,
                            n = t.format,
                            r = t.prefix,
                            o = t.suffix;
                        if (!n && e) {
                            var i = "-" === e[0];
                            i && (e = e.substring(1, e.length));
                            var a = (e = r && 0 === e.indexOf(r) ? e.substring(r.length, e.length) : e).lastIndexOf(o);
                            (e = o && -1 !== a && a === e.length - o.length ? e.substring(0, a) : e), i && (e = "-" + e);
                        }
                        return e;
                    }),
                    (t.prototype.removePatternFormatting = function (e) {
                        for (
                            var t = this.props.format.split("#").filter(function (e) {
                                    return "" !== e;
                                }),
                                n = 0,
                                r = "",
                                o = 0,
                                i = t.length;
                            o <= i;
                            o++
                        ) {
                            var a = t[o] || "",
                                s = o === i ? e.length : e.indexOf(a, n);
                            if (-1 === s) {
                                r = e;
                                break;
                            }
                            (r += e.substring(n, s)), (n = s + a.length);
                        }
                        return (r.match(this.getNumberRegex(!0)) || []).join("");
                    }),
                    (t.prototype.removeFormatting = function (e) {
                        var t = this.props,
                            n = t.format,
                            r = t.removeFormatting;
                        return e
                            ? (n
                                  ? (e = "string" == typeof n ? this.removePatternFormatting(e) : "function" == typeof r ? r(e) : (e.match(this.getNumberRegex(!0)) || []).join(""))
                                  : ((e = this.removePrefixAndSuffix(e)), (e = this.getFloatString(e))),
                              e)
                            : e;
                    }),
                    (t.prototype.formatWithPattern = function (e) {
                        for (var t = this.props.format, n = 0, r = t.split(""), o = 0, i = t.length; o < i; o++) "#" === t[o] && ((r[o] = e[n] || this.getMaskAtIndex(n)), (n += 1));
                        return r.join("");
                    }),
                    (t.prototype.formatAsNumber = function (e) {
                        var t = this.props,
                            n = t.decimalScale,
                            r = t.fixedDecimalScale,
                            o = t.prefix,
                            i = t.suffix,
                            a = t.allowNegative,
                            s = t.thousandsGroupStyle,
                            l = this.getSeparators(),
                            c = l.thousandSeparator,
                            u = l.decimalSeparator,
                            d = -1 !== e.indexOf(".") || (n && r),
                            p = m(e, a),
                            h = p.beforeDecimal,
                            g = p.afterDecimal,
                            y = p.addNegation;
                        return (
                            void 0 !== n && (g = f(g, n, r)),
                            c &&
                                (h = (function (e, t, n) {
                                    var r = (function (e) {
                                            switch (e) {
                                                case "lakh":
                                                    return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                                                case "wan":
                                                    return /(\d)(?=(\d{4})+(?!\d))/g;
                                                default:
                                                    return /(\d)(?=(\d{3})+(?!\d))/g;
                                            }
                                        })(n),
                                        o = e.search(/[1-9]/);
                                    return (o = -1 === o ? e.length : o), e.substring(0, o) + e.substring(o, e.length).replace(r, "$1" + t);
                                })(h, c, s)),
                            o && (h = o + h),
                            i && (g += i),
                            y && (h = "-" + h),
                            h + ((d && u) || "") + g
                        );
                    }),
                    (t.prototype.formatNumString = function (e) {
                        void 0 === e && (e = "");
                        var t = this.props,
                            n = t.format,
                            r = t.allowEmptyFormatting,
                            o = t.customNumerals,
                            i = e;
                        if (o && 10 === o.length) {
                            var a = new RegExp("[" + o.join("") + "]", "g");
                            i = e.replace(a, function (e) {
                                return o.indexOf(e).toString();
                            });
                        }
                        return "" !== e || r ? ("-" !== e || n ? ("string" == typeof n ? this.formatWithPattern(i) : "function" == typeof n ? n(i) : this.formatAsNumber(i)) : "-") : "";
                    }),
                    (t.prototype.formatValueProp = function (e) {
                        var t = this.props,
                            n = t.format,
                            r = t.decimalScale,
                            o = t.fixedDecimalScale,
                            i = t.allowEmptyFormatting,
                            a = this.props,
                            s = a.value,
                            l = a.isNumericString,
                            c = !(s = d(s) ? e : s) && 0 !== s;
                        return (
                            c && i && (s = ""),
                            c && !i
                                ? ""
                                : ("number" == typeof s &&
                                      ((s = (function (e) {
                                          var t = "-" === (e += "")[0] ? "-" : "";
                                          t && (e = e.substring(1));
                                          var n = e.split(/[eE]/g),
                                              r = n[0],
                                              o = n[1];
                                          if (!(o = Number(o))) return t + r;
                                          var i = 1 + o,
                                              a = (r = r.replace(".", "")).length;
                                          return i < 0 ? (r = "0." + h("0", Math.abs(i)) + r) : i >= a ? (r += h("0", i - a)) : (r = (r.substring(0, i) || "0") + "." + r.substring(i)), t + r;
                                      })(s)),
                                      (l = !0)),
                                  "Infinity" === s && l && (s = ""),
                                  l &&
                                      !n &&
                                      "number" == typeof r &&
                                      (s = (function (e, t, n) {
                                          if (-1 !== ["", "-"].indexOf(e)) return e;
                                          var r = -1 !== e.indexOf(".") && t,
                                              o = m(e),
                                              i = o.beforeDecimal,
                                              a = o.afterDecimal,
                                              s = o.hasNagation,
                                              l = parseFloat("0." + (a || "0")),
                                              c = (a.length <= t ? "0." + a : l.toFixed(t)).split(".");
                                          return (
                                              (s ? "-" : "") +
                                              i
                                                  .split("")
                                                  .reverse()
                                                  .reduce(function (e, t, n) {
                                                      return e.length > n ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e;
                                                  }, c[0]) +
                                              (r ? "." : "") +
                                              f(c[1] || "", Math.min(t, a.length), n)
                                          );
                                      })(s, r, o)),
                                  l ? this.formatNumString(s) : this.formatInput(s))
                        );
                    }),
                    (t.prototype.formatNegation = function (e) {
                        void 0 === e && (e = "");
                        var t = this.props.allowNegative,
                            n = new RegExp("(-)"),
                            r = new RegExp("(-)(.)*(-)"),
                            o = n.test(e),
                            i = r.test(e);
                        return (e = e.replace(/-/g, "")), o && !i && t && (e = "-" + e), e;
                    }),
                    (t.prototype.formatInput = function (e) {
                        return void 0 === e && (e = ""), this.props.format || ((e = this.removePrefixAndSuffix(e)), (e = this.formatNegation(e))), (e = this.removeFormatting(e)), this.formatNumString(e);
                    }),
                    (t.prototype.isCharacterAFormat = function (e, t) {
                        var n = this.props,
                            r = n.format,
                            o = n.prefix,
                            i = n.suffix,
                            a = n.decimalScale,
                            s = n.fixedDecimalScale,
                            l = this.getSeparators().decimalSeparator;
                        return ("string" == typeof r && "#" !== r[e]) || !(r || !(e < o.length || e >= t.length - i.length || (a && s && t[e] === l)));
                    }),
                    (t.prototype.correctInputValue = function (e, t, n) {
                        var r = this,
                            o = this.props,
                            i = o.format,
                            a = o.allowNegative,
                            s = o.prefix,
                            l = o.suffix,
                            c = o.decimalScale,
                            u = this.getSeparators(),
                            d = u.allowedDecimalSeparators,
                            p = u.decimalSeparator,
                            f = this.state.numAsString || "",
                            h = this.selectionBeforeInput,
                            g = h.selectionStart,
                            y = h.selectionEnd,
                            v = (function (e, t) {
                                for (var n = 0, r = 0, o = e.length, i = t.length; e[n] === t[n] && n < o; ) n++;
                                for (; e[o - 1 - r] === t[i - 1 - r] && i - r > n && o - r > n; ) r++;
                                return { start: n, end: o - r };
                            })(t, n),
                            C = v.start,
                            E = v.end;
                        if (!i && C === E && -1 !== d.indexOf(n[g])) {
                            var b = 0 === c ? "" : p;
                            return n.substr(0, g) + b + n.substr(g + 1, n.length);
                        }
                        var w = i ? 0 : s.length,
                            S = t.length - (i ? 0 : l.length);
                        if (n.length > t.length || !n.length || C === E || (0 === g && y === t.length) || (0 === C && E === t.length) || (g === w && y === S)) return n;
                        var N = t.substr(C, E - C);
                        if (
                            [].concat(N).find(function (e, n) {
                                return r.isCharacterAFormat(n + C, t);
                            })
                        ) {
                            var x = t.substr(C),
                                A = {},
                                T = [];
                            [].concat(x).forEach(function (e, n) {
                                r.isCharacterAFormat(n + C, t) ? (A[n] = e) : n > N.length - 1 && T.push(e);
                            }),
                                Object.keys(A).forEach(function (e) {
                                    T.length > e ? T.splice(e, 0, A[e]) : T.push(A[e]);
                                }),
                                (n = t.substr(0, C) + T.join(""));
                        }
                        if (!i) {
                            var k = this.removeFormatting(n),
                                R = m(k, a),
                                M = R.beforeDecimal,
                                _ = R.afterDecimal,
                                O = R.addNegation,
                                L = e < n.indexOf(p) + 1;
                            if (k.length < f.length && L && "" === M && !parseFloat(_)) return O ? "-" : "";
                        }
                        return n;
                    }),
                    (t.prototype.updateValue = function (e) {
                        var t = e.formattedValue,
                            n = e.input,
                            r = e.setCaretPosition;
                        void 0 === r && (r = !0);
                        var o = e.source,
                            i = e.event,
                            a = e.numAsString,
                            s = e.caretPos,
                            l = this.props.onValueChange,
                            c = this.state.value;
                        if (n) {
                            if (void 0 === s && r) {
                                var u = e.inputValue || n.value,
                                    d = v(n);
                                (n.value = t), (s = this.getCaretPosition(u, t, d));
                            }
                            (n.value = t), r && this.setPatchedCaretPosition(n, s, t);
                        }
                        void 0 === a && (a = this.removeFormatting(t)), t !== c && (this.setState({ value: t, numAsString: a }), l(this.getValueObject(t, a), { event: i, source: o }));
                    }),
                    (t.prototype.onChange = function (e) {
                        var t = e.target,
                            n = t.value,
                            r = this.state,
                            o = this.props,
                            i = o.isAllowed,
                            a = r.value || "",
                            s = v(t);
                        n = this.correctInputValue(s, a, n);
                        var l = this.formatInput(n) || "",
                            c = this.removeFormatting(l),
                            u = i(this.getValueObject(l, c));
                        u || (l = a), this.updateValue({ formattedValue: l, numAsString: c, inputValue: n, input: t, event: e, source: "event" }), u && o.onChange(e);
                    }),
                    (t.prototype.onBlur = function (e) {
                        var t = this.props,
                            n = this.state,
                            r = t.format,
                            o = t.onBlur,
                            i = t.allowLeadingZeros,
                            a = n.numAsString,
                            s = n.value;
                        if (((this.focusedElm = null), clearTimeout(this.focusTimeout), clearTimeout(this.caretPositionTimeout), !r)) {
                            isNaN(parseFloat(a)) && (a = ""),
                                i ||
                                    (a = (function (e) {
                                        if (!e) return e;
                                        var t = "-" === e[0];
                                        t && (e = e.substring(1, e.length));
                                        var n = e.split("."),
                                            r = n[0].replace(/^0+/, "") || "0",
                                            o = n[1] || "";
                                        return (t ? "-" : "") + r + (o ? "." + o : "");
                                    })(a));
                            var l = this.formatNumString(a);
                            if (l !== s) return this.updateValue({ formattedValue: l, numAsString: a, input: e.target, setCaretPosition: !1, event: e, source: "event" }), void o(e);
                        }
                        o(e);
                    }),
                    (t.prototype.onKeyDown = function (e) {
                        var t,
                            n = e.target,
                            r = e.key,
                            o = n.selectionStart,
                            i = n.selectionEnd,
                            a = n.value;
                        void 0 === a && (a = "");
                        var s = this.props,
                            l = s.decimalScale,
                            c = s.fixedDecimalScale,
                            u = s.prefix,
                            d = s.suffix,
                            p = s.format,
                            m = s.onKeyDown,
                            f = void 0 !== l && c,
                            h = this.getNumberRegex(!1, f),
                            g = new RegExp("-"),
                            y = "string" == typeof p;
                        if (
                            ((this.selectionBeforeInput = { selectionStart: o, selectionEnd: i }), "ArrowLeft" === r || "Backspace" === r ? (t = o - 1) : "ArrowRight" === r ? (t = o + 1) : "Delete" === r && (t = o), void 0 !== t && o === i)
                        ) {
                            var v = t,
                                C = y ? p.indexOf("#") : u.length,
                                E = y ? p.lastIndexOf("#") + 1 : a.length - d.length;
                            if ("ArrowLeft" === r || "ArrowRight" === r) {
                                var b = "ArrowLeft" === r ? "left" : "right";
                                v = this.correctCaretPosition(a, t, b);
                            } else if ("Delete" !== r || h.test(a[t]) || g.test(a[t])) {
                                if ("Backspace" === r && !h.test(a[t]))
                                    if (o <= C + 1 && "-" === a[0] && void 0 === p) {
                                        var w = a.substring(1);
                                        this.updateValue({ formattedValue: w, caretPos: v, input: n, event: e, source: "event" });
                                    } else if (!g.test(a[t])) {
                                        for (; !h.test(a[v - 1]) && v > C; ) v--;
                                        v = this.correctCaretPosition(a, v, "left");
                                    }
                            } else for (; !h.test(a[v]) && v < E; ) v++;
                            (v !== t || t < C || t > E) && (e.preventDefault(), this.setPatchedCaretPosition(n, v, a)), e.isUnitTestRun && this.setPatchedCaretPosition(n, v, a), m(e);
                        } else m(e);
                    }),
                    (t.prototype.onMouseUp = function (e) {
                        var t = e.target,
                            n = t.selectionStart,
                            r = t.selectionEnd,
                            o = t.value;
                        if ((void 0 === o && (o = ""), n === r)) {
                            var i = this.correctCaretPosition(o, n);
                            i !== n && this.setPatchedCaretPosition(t, i, o);
                        }
                        this.props.onMouseUp(e);
                    }),
                    (t.prototype.onFocus = function (e) {
                        var t = this;
                        e.persist(),
                            (this.focusedElm = e.target),
                            (this.focusTimeout = setTimeout(function () {
                                var n = e.target,
                                    r = n.selectionStart,
                                    o = n.selectionEnd,
                                    i = n.value;
                                void 0 === i && (i = "");
                                var a = t.correctCaretPosition(i, r);
                                a === r || (0 === r && o === i.length) || t.setPatchedCaretPosition(n, a, i), t.props.onFocus(e);
                            }, 0));
                    }),
                    (t.prototype.render = function () {
                        var e = this.props,
                            t = e.type,
                            n = e.displayType,
                            r = e.customInput,
                            o = e.renderText,
                            a = e.getInputRef,
                            s = e.format,
                            l =
                                (e.thousandSeparator,
                                e.decimalSeparator,
                                e.allowedDecimalSeparators,
                                e.thousandsGroupStyle,
                                e.decimalScale,
                                e.fixedDecimalScale,
                                e.prefix,
                                e.suffix,
                                e.removeFormatting,
                                e.mask,
                                e.defaultValue,
                                e.isNumericString,
                                e.allowNegative,
                                e.allowEmptyFormatting,
                                e.allowLeadingZeros,
                                e.onValueChange,
                                e.isAllowed,
                                e.customNumerals,
                                e.onChange,
                                e.onKeyDown,
                                e.onMouseUp,
                                e.onFocus,
                                e.onBlur,
                                e.value,
                                (function (e, t) {
                                    var n = {};
                                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && -1 === t.indexOf(r) && (n[r] = e[r]);
                                    return n;
                                })(e, [
                                    "type",
                                    "displayType",
                                    "customInput",
                                    "renderText",
                                    "getInputRef",
                                    "format",
                                    "thousandSeparator",
                                    "decimalSeparator",
                                    "allowedDecimalSeparators",
                                    "thousandsGroupStyle",
                                    "decimalScale",
                                    "fixedDecimalScale",
                                    "prefix",
                                    "suffix",
                                    "removeFormatting",
                                    "mask",
                                    "defaultValue",
                                    "isNumericString",
                                    "allowNegative",
                                    "allowEmptyFormatting",
                                    "allowLeadingZeros",
                                    "onValueChange",
                                    "isAllowed",
                                    "customNumerals",
                                    "onChange",
                                    "onKeyDown",
                                    "onMouseUp",
                                    "onFocus",
                                    "onBlur",
                                    "value",
                                ])),
                            c = this.state,
                            u = c.value,
                            d =
                                c.mounted &&
                                (function (e) {
                                    return e || ("undefined" != typeof navigator && !(navigator.platform && /iPhone|iPod/.test(navigator.platform)));
                                })(s)
                                    ? "numeric"
                                    : void 0,
                            p = Object.assign({ inputMode: d }, l, { type: t, value: u, onChange: this.onChange, onKeyDown: this.onKeyDown, onMouseUp: this.onMouseUp, onFocus: this.onFocus, onBlur: this.onBlur });
                        if ("text" === n) return o ? o(u, l) || null : i().createElement("span", Object.assign({}, l, { ref: a }), u);
                        if (r) {
                            var m = r;
                            return i().createElement(m, Object.assign({}, p, { ref: a }));
                        }
                        return i().createElement("input", Object.assign({}, p, { ref: a }));
                    }),
                    t
                );
            })(i().Component);
        E.defaultProps = C;
        const b = E;
        n(283);
        const w = (e) => ({
                thousandSeparator: null == e ? void 0 : e.thousandSeparator,
                decimalSeparator: null == e ? void 0 : e.decimalSeparator,
                fixedDecimalScale: !0,
                prefix: null == e ? void 0 : e.prefix,
                suffix: null == e ? void 0 : e.suffix,
                isNumericString: !0,
            }),
            S = ({ className: e, value: t, currency: n, onValueChange: r, displayType: i = "text", ...a }) => {
                var l;
                const c = "string" == typeof t ? parseInt(t, 10) : t;
                if (!Number.isFinite(c)) return null;
                const u = c / 10 ** n.minorUnit;
                if (!Number.isFinite(u)) return null;
                const d = s()("wc-block-formatted-money-amount", "wc-block-components-formatted-money-amount", e),
                    p = null !== (l = a.decimalScale) && void 0 !== l ? l : null == n ? void 0 : n.minorUnit,
                    m = { ...a, ...w(n), decimalScale: p, value: void 0, currency: void 0, onValueChange: void 0 },
                    f = r
                        ? (e) => {
                              const t = +e.value * 10 ** n.minorUnit;
                              r(t);
                          }
                        : () => {};
                return (0, o.createElement)(b, { className: d, displayType: i, ...m, value: u, onValueChange: f });
            },
            N = ({ value: e, currency: t }) =>
                (0, l.isValidElement)(e)
                    ? (0, o.createElement)("div", { className: "wc-block-components-totals-item__value" }, e)
                    : Number.isFinite(e)
                    ? (0, o.createElement)(S, { className: "wc-block-components-totals-item__value", currency: t || {}, value: e })
                    : null,
            x = ({ className: e, currency: t, label: n, value: r, description: i }) =>
                (0, o.createElement)(
                    "div",
                    { className: s()("wc-block-components-totals-item", e) },
                    (0, o.createElement)("span", { className: "wc-block-components-totals-item__label" }, n),
                    (0, o.createElement)(N, { value: r, currency: t }),
                    (0, o.createElement)("div", { className: "wc-block-components-totals-item__description" }, i)
                ),
            A = window.wp.i18n,
            T = window.wc.wcSettings,
            k = ({ currency: e, values: t, className: n }) => {
                const { total_items: r, total_items_tax: i } = t,
                    a = parseInt(r, 10),
                    s = parseInt(i, 10);
                return (0, o.createElement)(x, { className: n, currency: e, label: (0, A.__)("Subtotal", "woocommerce"), value: (0, T.getSetting)("displayCartPricesIncludingTax", !1) ? a + s : a });
            },
            R = ({ currency: e, values: t, className: n, showRateAfterTaxName: r }) => {
                const { total_tax: i, tax_lines: a } = t;
                if (!(0, T.getSetting)("taxesEnabled", !0) && parseInt(i, 10) <= 0) return null;
                const l = (0, T.getSetting)("displayItemizedTaxes", !1),
                    c =
                        l && a.length > 0
                            ? (0, o.createElement)(
                                  o.Fragment,
                                  null,
                                  a.map(({ name: t, rate: i, price: a }, l) => {
                                      const c = `${t}${r ? ` ${i}` : ""}`;
                                      return (0, o.createElement)(x, { key: `tax-line-${l}`, className: s()("wc-block-components-totals-taxes", n), currency: e, label: c, value: parseInt(a, 10) });
                                  }),
                                  " "
                              )
                            : null;
                return l
                    ? c
                    : (0, o.createElement)(
                          o.Fragment,
                          null,
                          (0, o.createElement)(x, { className: s()("wc-block-components-totals-taxes", n), currency: e, label: (0, A.__)("Taxes", "woocommerce"), value: parseInt(i, 10), description: null })
                      );
            },
            M = ({ currency: e, cartFees: t, className: n }) =>
                (0, o.createElement)(
                    o.Fragment,
                    null,
                    t.map(({ id: t, key: r, name: i, totals: a }, l) => {
                        const c = parseInt(a.total, 10);
                        if (!c) return null;
                        const u = parseInt(a.total_tax, 10);
                        return (0, o.createElement)(x, {
                            key: t || `${l}-${i}`,
                            className: s()("wc-block-components-totals-fees", "wc-block-components-totals-fees__" + r, n),
                            currency: e,
                            label: i || (0, A.__)("Fee", "woocommerce"),
                            value: (0, T.getSetting)("displayCartPricesIncludingTax", !1) ? c + u : c,
                        });
                    })
                );
        n(878);
        const _ = ({ children: e, slotWrapper: t = !1, className: n }) => (l.Children.count(e) ? (0, o.createElement)("div", { className: s()(n, "wc-block-components-totals-wrapper", { "slot-wrapper": t }) }, e) : null),
            O = window.wp.deprecated;
        var L = n.n(O);
        const I = window.wp.primitives,
            D =
                (window.wp.warning,
                (0, l.createContext)({
                    slots: {},
                    fills: {},
                    registerSlot: () => {
                        "undefined" != typeof process && process.env;
                    },
                    updateSlot: () => {},
                    unregisterSlot: () => {},
                    registerFill: () => {},
                    unregisterFill: () => {},
                }));
        function F(e) {
            const t = (0, l.useContext)(D),
                n = t.slots[e] || {},
                r = t.fills[e],
                o = (0, l.useMemo)(() => r || [], [r]);
            return {
                ...n,
                updateSlot: (0, l.useCallback)(
                    (n) => {
                        t.updateSlot(e, n);
                    },
                    [e, t.updateSlot]
                ),
                unregisterSlot: (0, l.useCallback)(
                    (n) => {
                        t.unregisterSlot(e, n);
                    },
                    [e, t.unregisterSlot]
                ),
                fills: o,
                registerFill: (0, l.useCallback)(
                    (n) => {
                        t.registerFill(e, n);
                    },
                    [e, t.registerFill]
                ),
                unregisterFill: (0, l.useCallback)(
                    (n) => {
                        t.unregisterFill(e, n);
                    },
                    [e, t.unregisterFill]
                ),
            };
        }
        function P() {
            return (
                (P = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }),
                P.apply(this, arguments)
            );
        }
        const $ = window.lodash,
            B = (0, l.createContext)({ registerSlot: () => {}, unregisterSlot: () => {}, registerFill: () => {}, unregisterFill: () => {}, getSlot: () => {}, getFills: () => {}, subscribe: () => {} });
        function U({ name: e, children: t, registerFill: n, unregisterFill: r }) {
            const o = ((e) => {
                    const { getSlot: t, subscribe: n } = (0, l.useContext)(B),
                        [r, o] = (0, l.useState)(t(e));
                    return (
                        (0, l.useEffect)(
                            () => (
                                o(t(e)),
                                n(() => {
                                    o(t(e));
                                })
                            ),
                            [e]
                        ),
                        r
                    );
                })(e),
                i = (0, l.useRef)({ name: e, children: t });
            return (
                (0, l.useLayoutEffect)(() => (n(e, i.current), () => r(e, i.current)), []),
                (0, l.useLayoutEffect)(() => {
                    (i.current.children = t), o && o.forceUpdate();
                }, [t]),
                (0, l.useLayoutEffect)(() => {
                    e !== i.current.name && (r(i.current.name, i.current), (i.current.name = e), n(e, i.current));
                }, [e]),
                o && o.node ? ((0, $.isFunction)(t) && (t = t(o.props.fillProps)), (0, l.createPortal)(t, o.node)) : null
            );
        }
        const H = (e) => (0, l.createElement)(B.Consumer, null, ({ registerFill: t, unregisterFill: n }) => (0, l.createElement)(U, P({}, e, { registerFill: t, unregisterFill: n })));
        class V extends l.Component {
            constructor() {
                super(...arguments), (this.isUnmounted = !1), (this.bindNode = this.bindNode.bind(this));
            }
            componentDidMount() {
                const { registerSlot: e } = this.props;
                e(this.props.name, this);
            }
            componentWillUnmount() {
                const { unregisterSlot: e } = this.props;
                (this.isUnmounted = !0), e(this.props.name, this);
            }
            componentDidUpdate(e) {
                const { name: t, unregisterSlot: n, registerSlot: r } = this.props;
                e.name !== t && (n(e.name), r(t, this));
            }
            bindNode(e) {
                this.node = e;
            }
            forceUpdate() {
                this.isUnmounted || super.forceUpdate();
            }
            render() {
                const { children: e, name: t, fillProps: n = {}, getFills: r } = this.props,
                    o = (0, $.map)(r(t, this), (e) => {
                        const t = (0, $.isFunction)(e.children) ? e.children(n) : e.children;
                        return l.Children.map(t, (e, t) => {
                            if (!e || (0, $.isString)(e)) return e;
                            const n = e.key || t;
                            return (0, l.cloneElement)(e, { key: n });
                        });
                    }).filter((0, $.negate)(l.isEmptyElement));
                return (0, l.createElement)(l.Fragment, null, (0, $.isFunction)(e) ? e(o) : o);
            }
        }
        const G = (e) => (0, l.createElement)(B.Consumer, null, ({ registerSlot: t, unregisterSlot: n, getFills: r }) => (0, l.createElement)(V, P({}, e, { registerSlot: t, unregisterSlot: n, getFills: r })));
        function j() {
            const [, e] = (0, l.useState)({}),
                t = (0, l.useRef)(!0);
            return (
                (0, l.useEffect)(
                    () => () => {
                        t.current = !1;
                    },
                    []
                ),
                () => {
                    t.current && e({});
                }
            );
        }
        function Z({ name: e, children: t }) {
            const n = F(e),
                r = (0, l.useRef)({ rerender: j() });
            return (
                (0, l.useEffect)(
                    () => (
                        n.registerFill(r),
                        () => {
                            n.unregisterFill(r);
                        }
                    ),
                    [n.registerFill, n.unregisterFill]
                ),
                n.ref && n.ref.current ? ("function" == typeof t && (t = t(n.fillProps)), (0, l.createPortal)(t, n.ref.current)) : null
            );
        }
        const W = window.wp.compose,
            K = (0, l.forwardRef)(function ({ name: e, fillProps: t = {}, as: n = "div", ...r }, o) {
                const i = (0, l.useContext)(D),
                    a = (0, l.useRef)();
                return (
                    (0, l.useLayoutEffect)(
                        () => (
                            i.registerSlot(e, a, t),
                            () => {
                                i.unregisterSlot(e, a);
                            }
                        ),
                        [i.registerSlot, i.unregisterSlot, e]
                    ),
                    (0, l.useLayoutEffect)(() => {
                        i.updateSlot(e, t);
                    }),
                    (0, l.createElement)(n, P({ ref: (0, W.useMergeRefs)([o, a]) }, r))
                );
            }),
            z = window.wp.isShallowEqual;
        var Y = n.n(z);
        function J({ children: e }) {
            const t = (function () {
                const [e, t] = (0, l.useState)({}),
                    [n, r] = (0, l.useState)({}),
                    o = (0, l.useCallback)((e, n, r) => {
                        t((t) => {
                            const o = t[e] || {};
                            return { ...t, [e]: { ...o, ref: n || o.ref, fillProps: r || o.fillProps || {} } };
                        });
                    }, []),
                    i = (0, l.useCallback)((e, n) => {
                        t((t) => {
                            const { [e]: r, ...o } = t;
                            return (null == r ? void 0 : r.ref) === n ? o : t;
                        });
                    }, []),
                    a = (0, l.useCallback)(
                        (t, r) => {
                            const o = e[t];
                            if (o && !Y()(o.fillProps, r)) {
                                o.fillProps = r;
                                const e = n[t];
                                e && e.map((e) => e.current.rerender());
                            }
                        },
                        [e, n]
                    ),
                    s = (0, l.useCallback)((e, t) => {
                        r((n) => ({ ...n, [e]: [...(n[e] || []), t] }));
                    }, []),
                    c = (0, l.useCallback)((e, t) => {
                        r((n) => (n[e] ? { ...n, [e]: n[e].filter((e) => e !== t) } : n));
                    }, []);
                return (0, l.useMemo)(() => ({ slots: e, fills: n, registerSlot: o, updateSlot: a, unregisterSlot: i, registerFill: s, unregisterFill: c }), [e, n, o, a, i, s, c]);
            })();
            return (0, l.createElement)(D.Provider, { value: t }, e);
        }
        class X extends l.Component {
            constructor() {
                super(...arguments),
                    (this.registerSlot = this.registerSlot.bind(this)),
                    (this.registerFill = this.registerFill.bind(this)),
                    (this.unregisterSlot = this.unregisterSlot.bind(this)),
                    (this.unregisterFill = this.unregisterFill.bind(this)),
                    (this.getSlot = this.getSlot.bind(this)),
                    (this.getFills = this.getFills.bind(this)),
                    (this.hasFills = this.hasFills.bind(this)),
                    (this.subscribe = this.subscribe.bind(this)),
                    (this.slots = {}),
                    (this.fills = {}),
                    (this.listeners = []),
                    (this.contextValue = {
                        registerSlot: this.registerSlot,
                        unregisterSlot: this.unregisterSlot,
                        registerFill: this.registerFill,
                        unregisterFill: this.unregisterFill,
                        getSlot: this.getSlot,
                        getFills: this.getFills,
                        hasFills: this.hasFills,
                        subscribe: this.subscribe,
                    });
            }
            registerSlot(e, t) {
                const n = this.slots[e];
                (this.slots[e] = t), this.triggerListeners(), this.forceUpdateSlot(e), n && n.forceUpdate();
            }
            registerFill(e, t) {
                (this.fills[e] = [...(this.fills[e] || []), t]), this.forceUpdateSlot(e);
            }
            unregisterSlot(e, t) {
                this.slots[e] === t && (delete this.slots[e], this.triggerListeners());
            }
            unregisterFill(e, t) {
                (this.fills[e] = (0, $.without)(this.fills[e], t)), this.forceUpdateSlot(e);
            }
            getSlot(e) {
                return this.slots[e];
            }
            getFills(e, t) {
                return this.slots[e] !== t ? [] : this.fills[e];
            }
            hasFills(e) {
                return this.fills[e] && !!this.fills[e].length;
            }
            forceUpdateSlot(e) {
                const t = this.getSlot(e);
                t && t.forceUpdate();
            }
            triggerListeners() {
                this.listeners.forEach((e) => e());
            }
            subscribe(e) {
                return (
                    this.listeners.push(e),
                    () => {
                        this.listeners = (0, $.without)(this.listeners, e);
                    }
                );
            }
            render() {
                return (0, l.createElement)(B.Provider, { value: this.contextValue }, this.props.children);
            }
        }
        function q(e) {
            return (0, l.createElement)(l.Fragment, null, (0, l.createElement)(H, e), (0, l.createElement)(Z, e));
        }
        const Q = (0, l.forwardRef)(({ bubblesVirtually: e, ...t }, n) => (e ? (0, l.createElement)(K, P({}, t, { ref: n })) : (0, l.createElement)(G, t)));
        function ee({ children: e, ...t }) {
            return (0, l.createElement)(X, t, (0, l.createElement)(J, null, e));
        }
        function te(e) {
            return (
                (te =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          }),
                te(e)
            );
        }
        class ne extends l.Component {
            constructor(...e) {
                var t, n, r;
                super(...e),
                    (t = this),
                    (r = { errorMessage: "", hasError: !1 }),
                    (n = (function (e) {
                        var t = (function (e, t) {
                            if ("object" !== te(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(e, "string");
                                if ("object" !== te(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return String(e);
                        })(e);
                        return "symbol" === te(t) ? t : String(t);
                    })((n = "state"))) in t
                        ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[n] = r);
            }
            static getDerivedStateFromError(e) {
                return void 0 !== e.statusText && void 0 !== e.status
                    ? { errorMessage: (0, o.createElement)(o.Fragment, null, (0, o.createElement)("strong", null, e.status), ": " + e.statusText), hasError: !0 }
                    : { errorMessage: e.message, hasError: !0 };
            }
            render() {
                const { renderError: e } = this.props,
                    { errorMessage: t, hasError: n } = this.state;
                return n ? ("function" == typeof e ? e(t) : (0, o.createElement)("p", null, t)) : this.props.children;
            }
        }
        const re = ne,
            oe = (e) => Array.isArray(e) && e.filter(Boolean).length > 0;
        let ie;
        ie = "function" == typeof e.useSlot ? e.useSlot : F;
        const ae = (e, t = null) => {
                const { Fill: n, Slot: r } = (function (e) {
                    const t = (t) => (0, l.createElement)(q, P({ name: e }, t));
                    t.displayName = e + "Fill";
                    const n = (t) => (0, l.createElement)(Q, P({ name: e }, t));
                    return (n.displayName = e + "Slot"), (n.__unstableName = e), { Fill: t, Slot: n };
                })(e);
                return {
                    Fill: ({ children: e }) => (0, o.createElement)(n, null, (n) => l.Children.map(e, (e) => (0, o.createElement)(re, { renderError: T.CURRENT_USER_IS_ADMIN ? t : () => null }, (0, l.cloneElement)(e, n)))),
                    Slot: (e) => (0, o.createElement)(r, { ...e, bubblesVirtually: !0 }),
                };
            },
            se = "__experimentalOrderMeta",
            { Fill: le, Slot: ce } = ae(se);
        le.Slot = ({ className: e, extensions: t, cart: n, context: r }) => {
            const { fills: i } = ie(se);
            return oe(i) && (0, o.createElement)(_, { slotWrapper: !0 }, (0, o.createElement)(ce, { className: s()(e, "wc-block-components-order-meta"), fillProps: { extensions: t, cart: n, context: r } }));
        };
        const ue = le,
            de = "__experimentalDiscountsMeta",
            { Fill: pe, Slot: me } = ae(de);
        pe.Slot = ({ className: e, extensions: t, cart: n, context: r }) => {
            const { fills: i } = ie(de);
            return oe(i) && (0, o.createElement)(_, { slotWrapper: !0 }, (0, o.createElement)(me, { className: s()(e, "wc-block-components-discounts-meta"), fillProps: { extensions: t, cart: n, context: r } }));
        };
        const fe = pe,
            { Fill: he, Slot: ge } = ae("__experimentalOrderShippingPackages");
        he.Slot = ({ className: e, noResultsMessage: t, renderOption: n, extensions: r, cart: i, components: a, context: l, collapsible: c, showItems: u }) =>
            (0, o.createElement)(ge, {
                className: s()("wc-block-components-shipping-rates-control", e),
                fillProps: { collapse: c, collapsible: c, showItems: u, noResultsMessage: t, renderOption: n, extensions: r, cart: i, components: a, context: l },
            });
        const ye = he,
            { Fill: ve, Slot: Ce } = ae("__experimentalOrderLocalPickupPackages");
        ve.Slot = ({ extensions: e, cart: t, components: n, renderPickupLocation: r }) =>
            (0, o.createElement)(Ce, { className: s()("wc-block-components-local-pickup-rates-control"), fillProps: { extensions: e, cart: t, components: n, renderPickupLocation: r } });
        const Ee = ve,
            be = (0, l.forwardRef)(function ({ icon: e, size: t = 24, ...n }, r) {
                return (0, l.cloneElement)(e, { width: t, height: t, ...n, ref: r });
            }),
            we = (0, o.createElement)(I.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, (0, o.createElement)(I.Path, { d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" })),
            Se = (0, o.createElement)(I.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, (0, o.createElement)(I.Path, { d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" }));
        n(847);
        const Ne = ({ children: e, className: t, initialOpen: n = !1, hasBorder: r = !1, title: i, titleTag: a = "div" }) => {
            const [c, u] = (0, l.useState)(n);
            return (0, o.createElement)(
                "div",
                { className: s()(t, "wc-block-components-panel", { "has-border": r }) },
                (0, o.createElement)(
                    a,
                    null,
                    (0, o.createElement)(
                        "button",
                        { "aria-expanded": c, className: "wc-block-components-panel__button", onClick: () => u(!c) },
                        (0, o.createElement)(be, { "aria-hidden": "true", className: "wc-block-components-panel__button-icon", icon: c ? we : Se }),
                        i
                    )
                ),
                c && (0, o.createElement)("div", { className: "wc-block-components-panel__content" }, e)
            );
        };
        var xe = n(608),
            Ae = n.n(xe);
        const Te = window.wp.dom,
            ke = (0, l.createElement)(I.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0, l.createElement)(I.Path, { d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z" }));
        function Re(e, t, n) {
            const { defaultView: r } = t,
                { frameElement: o } = r;
            if (!o || t === n.ownerDocument) return e;
            const i = o.getBoundingClientRect();
            return new r.DOMRect(e.left + i.left, e.top + i.top, e.width, e.height);
        }
        let Me = 0;
        function _e(e) {
            const t = document.scrollingElement || document.body;
            e && (Me = t.scrollTop);
            const n = e ? "add" : "remove";
            t.classList[n]("lockscroll"), document.documentElement.classList[n]("lockscroll"), e || (t.scrollTop = Me);
        }
        let Oe = 0;
        function Le() {
            return (
                (0, l.useEffect)(
                    () => (
                        0 === Oe && _e(!0),
                        ++Oe,
                        () => {
                            1 === Oe && _e(!1), --Oe;
                        }
                    ),
                    []
                ),
                null
            );
        }
        function Ie(e) {
            return "appear" === e ? "top" : "left";
        }
        const De = "Popover";
        function Fe(e, t) {
            const { paddingTop: n, paddingBottom: r, paddingLeft: o, paddingRight: i } = (a = t).ownerDocument.defaultView.getComputedStyle(a);
            var a;
            const s = n ? parseInt(n, 10) : 0,
                l = r ? parseInt(r, 10) : 0,
                c = o ? parseInt(o, 10) : 0,
                u = i ? parseInt(i, 10) : 0;
            return { x: e.left + c, y: e.top + s, width: e.width - c - u, height: e.height - s - l, left: e.left + c, right: e.right - u, top: e.top + s, bottom: e.bottom - l };
        }
        function Pe(e, t, n) {
            n ? e.getAttribute(t) !== n && e.setAttribute(t, n) : e.hasAttribute(t) && e.removeAttribute(t);
        }
        function $e(e, t, n = "") {
            e.style[t] !== n && (e.style[t] = n);
        }
        function Be(e, t, n) {
            n ? e.classList.contains(t) || e.classList.add(t) : e.classList.contains(t) && e.classList.remove(t);
        }
        const Ue = (0, l.forwardRef)(
            (
                {
                    headerTitle: e,
                    onClose: t,
                    children: n,
                    className: r,
                    noArrow: o = !0,
                    isAlternate: i,
                    position: a = "bottom right",
                    range: s,
                    focusOnMount: c = "firstElement",
                    anchorRef: u,
                    shouldAnchorIncludePadding: d,
                    anchorRect: p,
                    getAnchorRect: m,
                    expandOnMobile: f,
                    animate: h = !0,
                    onClickOutside: g,
                    onFocusOutside: y,
                    __unstableStickyBoundaryElement: v,
                    __unstableSlotName: C = De,
                    __unstableObserveElement: E,
                    __unstableBoundaryParent: b,
                    __unstableForcePosition: w,
                    __unstableForceXAlignment: S,
                    ...N
                },
                x
            ) => {
                const T = (0, l.useRef)(null),
                    k = (0, l.useRef)(null),
                    R = (0, l.useRef)(),
                    M = (0, W.useViewportMatch)("medium", "<"),
                    [_, O] = (0, l.useState)(),
                    I = F(C),
                    D = f && M,
                    [$, B] = (0, W.useResizeObserver)();
                (o = D || o),
                    (0, l.useLayoutEffect)(() => {
                        if (D)
                            return (
                                Be(R.current, "is-without-arrow", o),
                                Be(R.current, "is-alternate", i),
                                Pe(R.current, "data-x-axis"),
                                Pe(R.current, "data-y-axis"),
                                $e(R.current, "top"),
                                $e(R.current, "left"),
                                $e(k.current, "maxHeight"),
                                void $e(k.current, "maxWidth")
                            );
                        const e = () => {
                            if (!R.current || !k.current) return;
                            let e = (function (e, t, n, r = !1, o, i) {
                                if (t) return t;
                                if (n) {
                                    if (!e.current) return;
                                    const t = n(e.current);
                                    return Re(t, t.ownerDocument || e.current.ownerDocument, i);
                                }
                                if (!1 !== r) {
                                    if (!(r && window.Range && window.Element && window.DOMRect)) return;
                                    if ("function" == typeof (null == r ? void 0 : r.cloneRange)) return Re((0, Te.getRectangleFromRange)(r), r.endContainer.ownerDocument, i);
                                    if ("function" == typeof (null == r ? void 0 : r.getBoundingClientRect)) {
                                        const e = Re(r.getBoundingClientRect(), r.ownerDocument, i);
                                        return o ? e : Fe(e, r);
                                    }
                                    const { top: e, bottom: t } = r,
                                        n = e.getBoundingClientRect(),
                                        a = t.getBoundingClientRect(),
                                        s = Re(new window.DOMRect(n.left, n.top, n.width, a.bottom - n.top), e.ownerDocument, i);
                                    return o ? s : Fe(s, r);
                                }
                                if (!e.current) return;
                                const { parentNode: a } = e.current,
                                    s = a.getBoundingClientRect();
                                return o ? s : Fe(s, a);
                            })(T, p, m, u, d, R.current);
                            if (!e) return;
                            const { offsetParent: t, ownerDocument: n } = R.current;
                            let r,
                                s = 0;
                            if (t && t !== n.body) {
                                const n = t.getBoundingClientRect();
                                (s = n.top), (e = new window.DOMRect(e.left - n.left, e.top - n.top, e.width, e.height));
                            }
                            var l;
                            b && (r = null === (l = R.current.closest(".popover-slot")) || void 0 === l ? void 0 : l.parentNode);
                            const c = B.height ? B : k.current.getBoundingClientRect(),
                                { popoverTop: f, popoverLeft: h, xAxis: g, yAxis: y, contentHeight: C, contentWidth: E } = (function (e, t, n = "top", r, o, i, a, s, l) {
                                    const [c, u = "center", d] = n.split(" "),
                                        p = (function (e, t, n, r, o, i, a, s) {
                                            const { height: l } = t;
                                            if (o) {
                                                const t = o.getBoundingClientRect().top + l - a;
                                                if (e.top <= t) return { yAxis: n, popoverTop: Math.min(e.bottom, t) };
                                            }
                                            let c = e.top + e.height / 2;
                                            "bottom" === r ? (c = e.bottom) : "top" === r && (c = e.top);
                                            const u = { popoverTop: c, contentHeight: (c - l / 2 > 0 ? l / 2 : c) + (c + l / 2 > window.innerHeight ? window.innerHeight - c : l / 2) },
                                                d = { popoverTop: e.top, contentHeight: e.top - 10 - l > 0 ? l : e.top - 10 },
                                                p = { popoverTop: e.bottom, contentHeight: e.bottom + 10 + l > window.innerHeight ? window.innerHeight - 10 - e.bottom : l };
                                            let m,
                                                f = n,
                                                h = null;
                                            if (!o && !s)
                                                if ("middle" === n && u.contentHeight === l) f = "middle";
                                                else if ("top" === n && d.contentHeight === l) f = "top";
                                                else if ("bottom" === n && p.contentHeight === l) f = "bottom";
                                                else {
                                                    f = d.contentHeight > p.contentHeight ? "top" : "bottom";
                                                    const e = "top" === f ? d.contentHeight : p.contentHeight;
                                                    h = e !== l ? e : null;
                                                }
                                            return (m = "middle" === f ? u.popoverTop : "top" === f ? d.popoverTop : p.popoverTop), { yAxis: f, popoverTop: m, contentHeight: h };
                                        })(e, t, c, d, r, 0, i, s),
                                        m = (function (e, t, n, r, o, i, a, s, l) {
                                            const { width: c } = t;
                                            "left" === n && (0, A.isRTL)() ? (n = "right") : "right" === n && (0, A.isRTL)() && (n = "left"), "left" === r && (0, A.isRTL)() ? (r = "right") : "right" === r && (0, A.isRTL)() && (r = "left");
                                            const u = Math.round(e.left + e.width / 2),
                                                d = { popoverLeft: u, contentWidth: (u - c / 2 > 0 ? c / 2 : u) + (u + c / 2 > window.innerWidth ? window.innerWidth - u : c / 2) };
                                            let p = e.left;
                                            "right" === r ? (p = e.right) : "middle" === i || l || (p = u);
                                            let m = e.right;
                                            "left" === r ? (m = e.left) : "middle" === i || l || (m = u);
                                            const f = { popoverLeft: p, contentWidth: p - c > 0 ? c : p },
                                                h = { popoverLeft: m, contentWidth: m + c > window.innerWidth ? window.innerWidth - m : c };
                                            let g,
                                                y = n,
                                                v = null;
                                            if (!o && !s)
                                                if ("center" === n && d.contentWidth === c) y = "center";
                                                else if ("left" === n && f.contentWidth === c) y = "left";
                                                else if ("right" === n && h.contentWidth === c) y = "right";
                                                else {
                                                    y = f.contentWidth > h.contentWidth ? "left" : "right";
                                                    const e = "left" === y ? f.contentWidth : h.contentWidth;
                                                    c > window.innerWidth && (v = window.innerWidth), e !== c && ((y = "center"), (d.popoverLeft = window.innerWidth / 2));
                                                }
                                            if (((g = "center" === y ? d.popoverLeft : "left" === y ? f.popoverLeft : h.popoverLeft), a)) {
                                                const e = a.getBoundingClientRect();
                                                (g = Math.min(g, e.right - c)), (0, A.isRTL)() || (g = Math.max(g, 0));
                                            }
                                            return { xAxis: y, popoverLeft: g, contentWidth: v };
                                        })(e, t, u, d, r, p.yAxis, a, s, l);
                                    return { ...m, ...p };
                                })(e, c, a, v, R.current, s, r, w, S);
                            "number" == typeof f && "number" == typeof h && ($e(R.current, "top", f + "px"), $e(R.current, "left", h + "px")),
                                Be(R.current, "is-without-arrow", o || ("center" === g && "middle" === y)),
                                Be(R.current, "is-alternate", i),
                                Pe(R.current, "data-x-axis", g),
                                Pe(R.current, "data-y-axis", y),
                                $e(k.current, "maxHeight", "number" == typeof C ? C + "px" : ""),
                                $e(k.current, "maxWidth", "number" == typeof E ? E + "px" : ""),
                                O(({ left: "right", right: "left" }[g] || "center") + " " + ({ top: "bottom", bottom: "top" }[y] || "middle"));
                        };
                        e();
                        const { ownerDocument: t } = R.current,
                            { defaultView: n } = t,
                            r = n.setInterval(e, 500);
                        let s;
                        const l = () => {
                            n.cancelAnimationFrame(s), (s = n.requestAnimationFrame(e));
                        };
                        n.addEventListener("click", l), n.addEventListener("resize", e), n.addEventListener("scroll", e, !0);
                        const c = (function (e) {
                            if (e) return e.endContainer ? e.endContainer.ownerDocument : e.top ? e.top.ownerDocument : e.ownerDocument;
                        })(u);
                        let f;
                        return (
                            c && c !== t && (c.defaultView.addEventListener("resize", e), c.defaultView.addEventListener("scroll", e, !0)),
                            E && ((f = new n.MutationObserver(e)), f.observe(E, { attributes: !0 })),
                            () => {
                                n.clearInterval(r),
                                    n.removeEventListener("resize", e),
                                    n.removeEventListener("scroll", e, !0),
                                    n.removeEventListener("click", l),
                                    n.cancelAnimationFrame(s),
                                    c && c !== t && (c.defaultView.removeEventListener("resize", e), c.defaultView.removeEventListener("scroll", e, !0)),
                                    f && f.disconnect();
                            }
                        );
                    }, [D, p, m, u, d, a, B, v, E, b]);
                const U = (e, n) => {
                        if ("focus-outside" === e && y) y(n);
                        else if ("focus-outside" === e && g) {
                            const e = new window.MouseEvent("click");
                            Object.defineProperty(e, "target", { get: () => n.relatedTarget }), L()("Popover onClickOutside prop", { since: "5.3", alternative: "onFocusOutside" }), g(e);
                        } else t && t();
                    },
                    [H, V] = (0, W.__experimentalUseDialog)({ focusOnMount: c, __unstableOnClose: U, onClose: U }),
                    G = (0, W.useMergeRefs)([R, H, x]),
                    j =
                        Boolean(h && _) &&
                        (function (e) {
                            if ("loading" === e.type) return Ae()("components-animate__loading");
                            const { type: t, origin: n = Ie(t) } = e;
                            if ("appear" === t) {
                                const [e, t = "center"] = n.split(" ");
                                return Ae()("components-animate__appear", { ["is-from-" + t]: "center" !== t, ["is-from-" + e]: "middle" !== e });
                            }
                            return "slide-in" === t ? Ae()("components-animate__slide-in", "is-from-" + n) : void 0;
                        })({ type: "appear", origin: _ });
                let Z = (0, l.createElement)(
                    "div",
                    P({ className: Ae()("components-popover", r, j, { "is-expanded": D, "is-without-arrow": o, "is-alternate": i }) }, N, { ref: G }, V, { tabIndex: "-1" }),
                    D && (0, l.createElement)(Le, null),
                    D &&
                        (0, l.createElement)(
                            "div",
                            { className: "components-popover__header" },
                            (0, l.createElement)("span", { className: "components-popover__header-title" }, e),
                            (0, l.createElement)(qe, { className: "components-popover__close", icon: ke, onClick: t })
                        ),
                    (0, l.createElement)("div", { ref: k, className: "components-popover__content" }, (0, l.createElement)("div", { style: { position: "relative" } }, $, n))
                );
                return I.ref && (Z = (0, l.createElement)(q, { name: C }, Z)), u || p ? Z : (0, l.createElement)("span", { ref: T }, Z);
            }
        );
        Ue.Slot = (0, l.forwardRef)(function ({ name: e = De }, t) {
            return (0, l.createElement)(Q, { bubblesVirtually: !0, name: e, className: "popover-slot", ref: t });
        });
        const He = Ue,
            Ve = function ({ shortcut: e, className: t }) {
                if (!e) return null;
                let n, r;
                return (0, $.isString)(e) && (n = e), (0, $.isObject)(e) && ((n = e.display), (r = e.ariaLabel)), (0, l.createElement)("span", { className: t, "aria-label": r }, n);
            },
            Ge = (0, l.createElement)("div", { className: "event-catcher" }),
            je = ({ eventHandlers: e, child: t, childrenWithPopover: n }) =>
                (0, l.cloneElement)((0, l.createElement)("span", { className: "disabled-element-wrapper" }, (0, l.cloneElement)(Ge, e), (0, l.cloneElement)(t, { children: n }), ","), e),
            Ze = ({ child: e, eventHandlers: t, childrenWithPopover: n }) => (0, l.cloneElement)(e, { ...t, children: n }),
            We = (e, t, n) => {
                if (1 !== l.Children.count(e)) return;
                const r = l.Children.only(e);
                "function" == typeof r.props[t] && r.props[t](n);
            },
            Ke = function ({ children: e, position: t, text: n, shortcut: r }) {
                const [o, i] = (0, l.useState)(!1),
                    [a, s] = (0, l.useState)(!1),
                    c = (0, W.useDebounce)(s, 700),
                    u = (t) => {
                        We(e, "onMouseDown", t), document.addEventListener("mouseup", m), i(!0);
                    },
                    d = (t) => {
                        We(e, "onMouseUp", t), document.removeEventListener("mouseup", m), i(!1);
                    },
                    p = (e) => ("mouseUp" === e ? d : "mouseDown" === e ? u : void 0),
                    m = p("mouseUp"),
                    f = (t, n) => (r) => {
                        if ((We(e, t, r), r.currentTarget.disabled)) return;
                        if ("focus" === r.type && o) return;
                        c.cancel();
                        const i = (0, $.includes)(["focus", "mouseenter"], r.type);
                        i !== a && (n ? c(i) : s(i));
                    },
                    h = () => {
                        c.cancel(), document.removeEventListener("mouseup", m);
                    };
                if (((0, l.useEffect)(() => h, []), 1 !== l.Children.count(e))) return e;
                const g = { onMouseEnter: f("onMouseEnter", !0), onMouseLeave: f("onMouseLeave"), onClick: f("onClick"), onFocus: f("onFocus"), onBlur: f("onBlur"), onMouseDown: p("mouseDown") },
                    y = l.Children.only(e),
                    { children: v, disabled: C } = y.props,
                    E = C ? je : Ze,
                    b = (({ grandchildren: e, isOver: t, position: n, text: r, shortcut: o }) =>
                        (0, l.concatChildren)(
                            e,
                            t &&
                                (0, l.createElement)(
                                    He,
                                    { focusOnMount: !1, position: n, className: "components-tooltip", "aria-hidden": "true", animate: !1, noArrow: !0 },
                                    r,
                                    (0, l.createElement)(Ve, { className: "components-tooltip__shortcut", shortcut: o })
                                )
                        ))({ grandchildren: v, isOver: a, position: t, text: n, shortcut: r });
                return E({ child: y, eventHandlers: g, childrenWithPopover: b });
            },
            ze = function ({ icon: e, className: t, ...n }) {
                const r = ["dashicon", "dashicons", "dashicons-" + e, t].filter(Boolean).join(" ");
                return (0, l.createElement)("span", P({ className: r }, n));
            },
            Ye = function ({ icon: e = null, size: t = 24, ...n }) {
                if ("string" == typeof e) return (0, l.createElement)(ze, P({ icon: e }, n));
                if ((0, l.isValidElement)(e) && ze === e.type) return (0, l.cloneElement)(e, { ...n });
                if ("function" == typeof e) return e.prototype instanceof l.Component ? (0, l.createElement)(e, { size: t, ...n }) : e({ size: t, ...n });
                if (e && ("svg" === e.type || e.type === I.SVG)) {
                    const r = { width: t, height: t, ...e.props, ...n };
                    return (0, l.createElement)(I.SVG, r);
                }
                return (0, l.isValidElement)(e) ? (0, l.cloneElement)(e, { size: t, ...n }) : e;
            },
            Je = (0, l.forwardRef)(function ({ as: e = "div", className: t, ...n }, r) {
                return (function ({ as: e = "div", ...t }) {
                    return "function" == typeof t.children ? t.children(t) : (0, l.createElement)(e, t);
                })({ as: e, className: Ae()("components-visually-hidden", t), ...n, ref: r });
            }),
            Xe = ["onMouseDown", "onClick"],
            qe = (0, l.forwardRef)(function (e, t) {
                const {
                        href: n,
                        target: r,
                        isSmall: o,
                        isPressed: i,
                        isBusy: a,
                        isDestructive: s,
                        className: c,
                        disabled: u,
                        icon: d,
                        iconPosition: p = "left",
                        iconSize: m,
                        showTooltip: f,
                        tooltipPosition: h,
                        shortcut: g,
                        label: y,
                        children: v,
                        text: C,
                        variant: E,
                        __experimentalIsFocusable: b,
                        describedBy: w,
                        ...S
                    } = (function ({ isDefault: e, isPrimary: t, isSecondary: n, isTertiary: r, isLink: o, variant: i, ...a }) {
                        let s = i;
                        var l, c, u, d, p;
                        return (
                            t && ((null !== (l = s) && void 0 !== l) || (s = "primary")),
                            r && ((null !== (c = s) && void 0 !== c) || (s = "tertiary")),
                            n && ((null !== (u = s) && void 0 !== u) || (s = "secondary")),
                            e && (L()("Button isDefault prop", { since: "5.4", alternative: 'variant="secondary"' }), (null !== (d = s) && void 0 !== d) || (s = "secondary")),
                            o && ((null !== (p = s) && void 0 !== p) || (s = "link")),
                            { ...a, variant: s }
                        );
                    })(e),
                    N = Ae()("components-button", c, {
                        "is-secondary": "secondary" === E,
                        "is-primary": "primary" === E,
                        "is-small": o,
                        "is-tertiary": "tertiary" === E,
                        "is-pressed": i,
                        "is-busy": a,
                        "is-link": "link" === E,
                        "is-destructive": s,
                        "has-text": !!d && !!v,
                        "has-icon": !!d,
                    }),
                    x = u && !b,
                    A = void 0 === n || x ? "button" : "a",
                    T = "a" === A ? { href: n, target: r } : { type: "button", disabled: x, "aria-pressed": i };
                if (u && b) {
                    T["aria-disabled"] = !0;
                    for (const e of Xe)
                        S[e] = (e) => {
                            e.stopPropagation(), e.preventDefault();
                        };
                }
                const k = !x && ((f && y) || g || (!!y && (!v || ((0, $.isArray)(v) && !v.length)) && !1 !== f)),
                    R = w ? (0, $.uniqueId)() : null,
                    M = S["aria-describedby"] || R,
                    _ = (0, l.createElement)(
                        A,
                        P({}, T, S, { className: N, "aria-label": S["aria-label"] || y, "aria-describedby": M, ref: t }),
                        d && "left" === p && (0, l.createElement)(Ye, { icon: d, size: m }),
                        C && (0, l.createElement)(l.Fragment, null, C),
                        d && "right" === p && (0, l.createElement)(Ye, { icon: d, size: m }),
                        v
                    );
                return k
                    ? (0, l.createElement)(l.Fragment, null, (0, l.createElement)(Ke, { text: w || y, shortcut: g, position: h }, _), w && (0, l.createElement)(Je, null, (0, l.createElement)("span", { id: R }, w)))
                    : (0, l.createElement)(l.Fragment, null, _, w && (0, l.createElement)(Je, null, (0, l.createElement)("span", { id: R }, w)));
            });
        n(29), n(440);
        const Qe = () => (0, o.createElement)("span", { className: "wc-block-components-spinner", "aria-hidden": "true" }),
            et = ({ className: e, showSpinner: t = !1, children: n, variant: r = "contained", ...i }) => {
                const a = s()("wc-block-components-button", "wp-element-button", e, r, { "wc-block-components-button--loading": t });
                return (0, o.createElement)(qe, { className: a, ...i }, t && (0, o.createElement)(Qe, null), (0, o.createElement)("span", { className: "wc-block-components-button__text" }, n));
            },
            tt = et,
            nt = ({ label: e, screenReaderLabel: t, wrapperElement: n, wrapperProps: r = {} }) => {
                let i;
                const a = null != e,
                    c = null != t;
                return !a && c
                    ? ((i = n || "span"), (r = { ...r, className: s()(r.className, "screen-reader-text") }), (0, o.createElement)(i, { ...r }, t))
                    : ((i = n || l.Fragment),
                      a && c && e !== t
                          ? (0, o.createElement)(i, { ...r }, (0, o.createElement)("span", { "aria-hidden": "true" }, e), (0, o.createElement)("span", { className: "screen-reader-text" }, t))
                          : (0, o.createElement)(i, { ...r }, e));
            },
            rt = nt,
            ot = window.wp.data,
            it = window.wc.wcBlocksData;
        let at = (function (e) {
            return (
                (e.CART = "wc/cart"),
                (e.CHECKOUT = "wc/checkout"),
                (e.PAYMENTS = "wc/checkout/payments"),
                (e.EXPRESS_PAYMENTS = "wc/checkout/express-payments"),
                (e.CONTACT_INFORMATION = "wc/checkout/contact-information"),
                (e.SHIPPING_ADDRESS = "wc/checkout/shipping-address"),
                (e.BILLING_ADDRESS = "wc/checkout/billing-address"),
                (e.SHIPPING_METHODS = "wc/checkout/shipping-methods"),
                (e.CHECKOUT_ACTIONS = "wc/checkout/checkout-actions"),
                e
            );
        })({});
        (0, A.__)("Something went wrong. Please contact us to get assistance.", "woocommerce"), n(942);
        var st = n(561),
            lt = n.n(st);
        const ct = ["a", "b", "em", "i", "strong", "p", "br"],
            ut = ["target", "href", "rel", "name", "download"],
            dt = (e, t) => {
                const n = (null == t ? void 0 : t.tags) || ct,
                    r = (null == t ? void 0 : t.attr) || ut;
                return lt().sanitize(e, { ALLOWED_TAGS: n, ALLOWED_ATTR: r });
            };
        function pt(e, t) {
            const n = (0, l.useRef)();
            return (
                (0, l.useEffect)(() => {
                    n.current === e || (t && !t(e, n.current)) || (n.current = e);
                }, [e, t]),
                n.current
            );
        }
        const mt = window.wp.htmlEntities,
            ft = (0, o.createElement)(I.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0, o.createElement)(I.Path, { d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z" }));
        n(946);
        const ht = (0, o.createElement)(I.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0, o.createElement)(I.Path, { d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z" })),
            gt = (0, o.createElement)(
                I.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(I.Path, {
                    d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z",
                })
            ),
            yt = (0, o.createElement)(
                I.SVG,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                (0, o.createElement)(I.Path, {
                    fillRule: "evenodd",
                    d:
                        "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
                    clipRule: "evenodd",
                })
            ),
            vt = (e) => {
                switch (e) {
                    case "success":
                    case "warning":
                    case "info":
                    case "default":
                        return "polite";
                    default:
                        return "assertive";
                }
            },
            Ct = (e) => {
                switch (e) {
                    case "success":
                        return ht;
                    case "warning":
                    case "info":
                    case "error":
                        return gt;
                    default:
                        return yt;
                }
            },
            Et = window.wp.a11y,
            bt = ({ className: e, status: t = "default", children: n, spokenMessage: r = n, onRemove: i = () => {}, isDismissible: a = !0, politeness: c = vt(t), summary: u }) => (
                ((e, t) => {
                    const n = "string" == typeof e ? e : (0, l.renderToString)(e);
                    (0, l.useEffect)(() => {
                        n && (0, Et.speak)(n, t);
                    }, [n, t]);
                })(r, c),
                (0, o.createElement)(
                    "div",
                    { className: s()(e, "wc-block-components-notice-banner", "is-" + t, { "is-dismissible": a }) },
                    (0, o.createElement)(be, { icon: Ct(t) }),
                    (0, o.createElement)("div", { className: "wc-block-components-notice-banner__content" }, u && (0, o.createElement)("p", { className: "wc-block-components-notice-banner__summary" }, u), n),
                    !!a &&
                        (0, o.createElement)(et, {
                            className: "wc-block-components-notice-banner__dismiss",
                            icon: ft,
                            label: (0, A.__)("Dismiss this notice", "woocommerce"),
                            onClick: (e) => {
                                "function" == typeof (null == e ? void 0 : e.preventDefault) && e.preventDefault && e.preventDefault(), i();
                            },
                            showTooltip: !1,
                        })
                )
            ),
            wt = ({ className: e, children: t, status: n, ...r }) => (0, o.createElement)(bt, { className: s()("wc-block-store-notice", e), status: n, ...r }, t),
            St = ({ className: e, notices: t }) => {
                const n = (0, l.useRef)(null),
                    { removeNotice: r } = (0, ot.useDispatch)("core/notices"),
                    i = t.map((e) => e.id),
                    a = pt(i);
                (0, l.useEffect)(() => {
                    const e = n.current;
                    if (!e) return;
                    const t = e.ownerDocument.activeElement;
                    (t && -1 !== ["input", "select", "button", "textarea"].indexOf(t.tagName.toLowerCase()) && "radio" !== t.getAttribute("type")) ||
                        (i.filter((e) => !a || !a.includes(e)).length && null != e && e.scrollIntoView && e.scrollIntoView({ behavior: "smooth" }));
                }, [i, a, n]);
                const c = t.filter(({ isDismissible: e }) => !!e),
                    u = t.filter(({ isDismissible: e }) => !e),
                    d = {
                        error: c.filter(({ status: e }) => "error" === e),
                        success: c.filter(({ status: e }) => "success" === e),
                        warning: c.filter(({ status: e }) => "warning" === e),
                        info: c.filter(({ status: e }) => "info" === e),
                        default: c.filter(({ status: e }) => "default" === e),
                    };
                return (0, o.createElement)(
                    "div",
                    { ref: n, className: s()(e, "wc-block-components-notices") },
                    u.map((e) => (0, o.createElement)(wt, { key: e.id + "-" + e.context, ...e }, (0, o.createElement)(l.RawHTML, null, dt((0, mt.decodeEntities)(e.content))))),
                    Object.entries(d).map(([e, t]) => {
                        if (!t.length) return null;
                        const n = t.filter((e, t, n) => n.findIndex((t) => t.content === e.content) === t).map((e) => ({ ...e, content: dt((0, mt.decodeEntities)(e.content)) })),
                            i = {
                                key: `store-notice-${e}`,
                                status: e,
                                onRemove: () => {
                                    t.forEach((e) => {
                                        r(e.id, e.context);
                                    });
                                },
                            };
                        return 1 === n.length
                            ? (0, o.createElement)(wt, { ...i }, (0, o.createElement)(l.RawHTML, null, t[0].content))
                            : (0, o.createElement)(
                                  wt,
                                  { ...i, summary: "error" === e ? (0, A.__)("Please fix the following errors before continuing", "woocommerce") : "" },
                                  (0, o.createElement)(
                                      "ul",
                                      null,
                                      n.map((e) => (0, o.createElement)("li", { key: e.id + "-" + e.context }, (0, o.createElement)(l.RawHTML, null, e.content)))
                                  )
                              );
                    })
                );
            };
        function Nt(e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        }
        function xt(e, t) {
            return (
                (xt = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return (e.__proto__ = t), e;
                      }),
                xt(e, t)
            );
        }
        function At(e, t) {
            (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), xt(e, t);
        }
        const Tt = i().createContext(null);
        function kt(e, t) {
            var n = Object.create(null);
            return (
                e &&
                    o.Children.map(e, function (e) {
                        return e;
                    }).forEach(function (e) {
                        n[e.key] = (function (e) {
                            return t && (0, o.isValidElement)(e) ? t(e) : e;
                        })(e);
                    }),
                n
            );
        }
        function Rt(e, t, n) {
            return null != n[t] ? n[t] : e.props[t];
        }
        function Mt(e, t, n) {
            var r = kt(e.children),
                i = (function (e, t) {
                    function n(n) {
                        return n in t ? t[n] : e[n];
                    }
                    (e = e || {}), (t = t || {});
                    var r,
                        o = Object.create(null),
                        i = [];
                    for (var a in e) a in t ? i.length && ((o[a] = i), (i = [])) : i.push(a);
                    var s = {};
                    for (var l in t) {
                        if (o[l])
                            for (r = 0; r < o[l].length; r++) {
                                var c = o[l][r];
                                s[o[l][r]] = n(c);
                            }
                        s[l] = n(l);
                    }
                    for (r = 0; r < i.length; r++) s[i[r]] = n(i[r]);
                    return s;
                })(t, r);
            return (
                Object.keys(i).forEach(function (a) {
                    var s = i[a];
                    if ((0, o.isValidElement)(s)) {
                        var l = a in t,
                            c = a in r,
                            u = t[a],
                            d = (0, o.isValidElement)(u) && !u.props.in;
                        !c || (l && !d)
                            ? c || !l || d
                                ? c && l && (0, o.isValidElement)(u) && (i[a] = (0, o.cloneElement)(s, { onExited: n.bind(null, s), in: u.props.in, exit: Rt(s, "exit", e), enter: Rt(s, "enter", e) }))
                                : (i[a] = (0, o.cloneElement)(s, { in: !1 }))
                            : (i[a] = (0, o.cloneElement)(s, { onExited: n.bind(null, s), in: !0, exit: Rt(s, "exit", e), enter: Rt(s, "enter", e) }));
                    }
                }),
                i
            );
        }
        var _t =
                Object.values ||
                function (e) {
                    return Object.keys(e).map(function (t) {
                        return e[t];
                    });
                },
            Ot = (function (e) {
                function t(t, n) {
                    var r,
                        o = (r = e.call(this, t, n) || this).handleExited.bind(
                            (function (e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            })(r)
                        );
                    return (r.state = { contextValue: { isMounting: !0 }, handleExited: o, firstRender: !0 }), r;
                }
                At(t, e);
                var n = t.prototype;
                return (
                    (n.componentDidMount = function () {
                        (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
                    }),
                    (n.componentWillUnmount = function () {
                        this.mounted = !1;
                    }),
                    (t.getDerivedStateFromProps = function (e, t) {
                        var n,
                            r,
                            i = t.children,
                            a = t.handleExited;
                        return {
                            children: t.firstRender
                                ? ((n = e),
                                  (r = a),
                                  kt(n.children, function (e) {
                                      return (0, o.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: Rt(e, "appear", n), enter: Rt(e, "enter", n), exit: Rt(e, "exit", n) });
                                  }))
                                : Mt(e, i, a),
                            firstRender: !1,
                        };
                    }),
                    (n.handleExited = function (e, t) {
                        var n = kt(this.props.children);
                        e.key in n ||
                            (e.props.onExited && e.props.onExited(t),
                            this.mounted &&
                                this.setState(function (t) {
                                    var n = P({}, t.children);
                                    return delete n[e.key], { children: n };
                                }));
                    }),
                    (n.render = function () {
                        var e = this.props,
                            t = e.component,
                            n = e.childFactory,
                            r = Nt(e, ["component", "childFactory"]),
                            o = this.state.contextValue,
                            a = _t(this.state.children).map(n);
                        return delete r.appear, delete r.enter, delete r.exit, null === t ? i().createElement(Tt.Provider, { value: o }, a) : i().createElement(Tt.Provider, { value: o }, i().createElement(t, r, a));
                    }),
                    t
                );
            })(i().Component);
        (Ot.propTypes = {}),
            (Ot.defaultProps = {
                component: "div",
                childFactory: function (e) {
                    return e;
                },
            });
        const Lt = Ot;
        function It(e, t) {
            return e
                .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
                .replace(/\s+/g, " ")
                .replace(/^\s*|\s*$/g, "");
        }
        const Dt = window.ReactDOM;
        var Ft = n.n(Dt);
        var Pt = function (e) {
                return e.scrollTop;
            },
            $t = "unmounted",
            Bt = "exited",
            Ut = "entering",
            Ht = "entered",
            Vt = "exiting",
            Gt = (function (e) {
                function t(t, n) {
                    var r;
                    r = e.call(this, t, n) || this;
                    var o,
                        i = n && !n.isMounting ? t.enter : t.appear;
                    return (r.appearStatus = null), t.in ? (i ? ((o = Bt), (r.appearStatus = Ut)) : (o = Ht)) : (o = t.unmountOnExit || t.mountOnEnter ? $t : Bt), (r.state = { status: o }), (r.nextCallback = null), r;
                }
                At(t, e),
                    (t.getDerivedStateFromProps = function (e, t) {
                        return e.in && t.status === $t ? { status: Bt } : null;
                    });
                var n = t.prototype;
                return (
                    (n.componentDidMount = function () {
                        this.updateStatus(!0, this.appearStatus);
                    }),
                    (n.componentDidUpdate = function (e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== Ut && n !== Ht && (t = Ut) : (n !== Ut && n !== Ht) || (t = Vt);
                        }
                        this.updateStatus(!1, t);
                    }),
                    (n.componentWillUnmount = function () {
                        this.cancelNextCallback();
                    }),
                    (n.getTimeouts = function () {
                        var e,
                            t,
                            n,
                            r = this.props.timeout;
                        return (e = t = n = r), null != r && "number" != typeof r && ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)), { exit: e, enter: t, appear: n };
                    }),
                    (n.updateStatus = function (e, t) {
                        if ((void 0 === e && (e = !1), null !== t))
                            if ((this.cancelNextCallback(), t === Ut)) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : Ft().findDOMNode(this);
                                    n && Pt(n);
                                }
                                this.performEnter(e);
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === Bt && this.setState({ status: $t });
                    }),
                    (n.performEnter = function (e) {
                        var t = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            o = this.props.nodeRef ? [r] : [Ft().findDOMNode(this), r],
                            i = o[0],
                            a = o[1],
                            s = this.getTimeouts(),
                            l = r ? s.appear : s.enter;
                        e || n
                            ? (this.props.onEnter(i, a),
                              this.safeSetState({ status: Ut }, function () {
                                  t.props.onEntering(i, a),
                                      t.onTransitionEnd(l, function () {
                                          t.safeSetState({ status: Ht }, function () {
                                              t.props.onEntered(i, a);
                                          });
                                      });
                              }))
                            : this.safeSetState({ status: Ht }, function () {
                                  t.props.onEntered(i);
                              });
                    }),
                    (n.performExit = function () {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : Ft().findDOMNode(this);
                        t
                            ? (this.props.onExit(r),
                              this.safeSetState({ status: Vt }, function () {
                                  e.props.onExiting(r),
                                      e.onTransitionEnd(n.exit, function () {
                                          e.safeSetState({ status: Bt }, function () {
                                              e.props.onExited(r);
                                          });
                                      });
                              }))
                            : this.safeSetState({ status: Bt }, function () {
                                  e.props.onExited(r);
                              });
                    }),
                    (n.cancelNextCallback = function () {
                        null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                    }),
                    (n.safeSetState = function (e, t) {
                        (t = this.setNextCallback(t)), this.setState(e, t);
                    }),
                    (n.setNextCallback = function (e) {
                        var t = this,
                            n = !0;
                        return (
                            (this.nextCallback = function (r) {
                                n && ((n = !1), (t.nextCallback = null), e(r));
                            }),
                            (this.nextCallback.cancel = function () {
                                n = !1;
                            }),
                            this.nextCallback
                        );
                    }),
                    (n.onTransitionEnd = function (e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : Ft().findDOMNode(this),
                            r = null == e && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    i = o[0],
                                    a = o[1];
                                this.props.addEndListener(i, a);
                            }
                            null != e && setTimeout(this.nextCallback, e);
                        } else setTimeout(this.nextCallback, 0);
                    }),
                    (n.render = function () {
                        var e = this.state.status;
                        if (e === $t) return null;
                        var t = this.props,
                            n = t.children,
                            r =
                                (t.in,
                                t.mountOnEnter,
                                t.unmountOnExit,
                                t.appear,
                                t.enter,
                                t.exit,
                                t.timeout,
                                t.addEndListener,
                                t.onEnter,
                                t.onEntering,
                                t.onEntered,
                                t.onExit,
                                t.onExiting,
                                t.onExited,
                                t.nodeRef,
                                Nt(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return i().createElement(Tt.Provider, { value: null }, "function" == typeof n ? n(e, r) : i().cloneElement(i().Children.only(n), r));
                    }),
                    t
                );
            })(i().Component);
        function jt() {}
        (Gt.contextType = Tt),
            (Gt.propTypes = {}),
            (Gt.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: jt, onEntering: jt, onEntered: jt, onExit: jt, onExiting: jt, onExited: jt }),
            (Gt.UNMOUNTED = $t),
            (Gt.EXITED = Bt),
            (Gt.ENTERING = Ut),
            (Gt.ENTERED = Ht),
            (Gt.EXITING = Vt);
        const Zt = Gt;
        var Wt = function (e, t) {
                return (
                    e &&
                    t &&
                    t.split(" ").forEach(function (t) {
                        return (r = t), void ((n = e).classList ? n.classList.remove(r) : "string" == typeof n.className ? (n.className = It(n.className, r)) : n.setAttribute("class", It((n.className && n.className.baseVal) || "", r)));
                        var n, r;
                    })
                );
            },
            Kt = (function (e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (
                        ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                        (t.onEnter = function (e, n) {
                            var r = t.resolveArguments(e, n),
                                o = r[0],
                                i = r[1];
                            t.removeClasses(o, "exit"), t.addClass(o, i ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n);
                        }),
                        (t.onEntering = function (e, n) {
                            var r = t.resolveArguments(e, n),
                                o = r[0],
                                i = r[1] ? "appear" : "enter";
                            t.addClass(o, i, "active"), t.props.onEntering && t.props.onEntering(e, n);
                        }),
                        (t.onEntered = function (e, n) {
                            var r = t.resolveArguments(e, n),
                                o = r[0],
                                i = r[1] ? "appear" : "enter";
                            t.removeClasses(o, i), t.addClass(o, i, "done"), t.props.onEntered && t.props.onEntered(e, n);
                        }),
                        (t.onExit = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e);
                        }),
                        (t.onExiting = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e);
                        }),
                        (t.onExited = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e);
                        }),
                        (t.resolveArguments = function (e, n) {
                            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                        }),
                        (t.getClassNames = function (e) {
                            var n = t.props.classNames,
                                r = "string" == typeof n,
                                o = r ? (r && n ? n + "-" : "") + e : n[e];
                            return { baseClassName: o, activeClassName: r ? o + "-active" : n[e + "Active"], doneClassName: r ? o + "-done" : n[e + "Done"] };
                        }),
                        t
                    );
                }
                At(t, e);
                var n = t.prototype;
                return (
                    (n.addClass = function (e, t, n) {
                        var r = this.getClassNames(t)[n + "ClassName"],
                            o = this.getClassNames("enter").doneClassName;
                        "appear" === t && "done" === n && o && (r += " " + o),
                            "active" === n && e && Pt(e),
                            r &&
                                ((this.appliedClasses[t][n] = r),
                                (function (e, t) {
                                    e &&
                                        t &&
                                        t.split(" ").forEach(function (t) {
                                            return (
                                                (r = t),
                                                void ((n = e).classList
                                                    ? n.classList.add(r)
                                                    : (function (e, t) {
                                                          return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ");
                                                      })(n, r) || ("string" == typeof n.className ? (n.className = n.className + " " + r) : n.setAttribute("class", ((n.className && n.className.baseVal) || "") + " " + r)))
                                            );
                                            var n, r;
                                        });
                                })(e, r));
                    }),
                    (n.removeClasses = function (e, t) {
                        var n = this.appliedClasses[t],
                            r = n.base,
                            o = n.active,
                            i = n.done;
                        (this.appliedClasses[t] = {}), r && Wt(e, r), o && Wt(e, o), i && Wt(e, i);
                    }),
                    (n.render = function () {
                        var e = this.props,
                            t = (e.classNames, Nt(e, ["classNames"]));
                        return i().createElement(Zt, P({}, t, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited }));
                    }),
                    t
                );
            })(i().Component);
        (Kt.defaultProps = { classNames: "" }), (Kt.propTypes = {});
        const zt = Kt;
        n(194);
        const Yt = ({ onRemove: e = () => {}, children: t, listRef: n, className: r, ...i }) => (
                (0, l.useEffect)(() => {
                    const t = setTimeout(() => {
                        e();
                    }, 1e4);
                    return () => clearTimeout(t);
                }, [e]),
                (0, o.createElement)(
                    bt,
                    {
                        className: s()(r, "wc-block-components-notice-snackbar"),
                        ...i,
                        onRemove: () => {
                            n && n.current && n.current.focus(), e();
                        },
                    },
                    t
                )
            ),
            Jt = ({ notices: e, className: t, onRemove: n = () => {} }) => {
                const r = (0, l.useRef)(null),
                    i = (0, W.useReducedMotion)(),
                    a = (e) => () => n((null == e ? void 0 : e.id) || "");
                return (0, o.createElement)(
                    "div",
                    { className: s()(t, "wc-block-components-notice-snackbar-list"), tabIndex: -1, ref: r },
                    i
                        ? e.map((e) => {
                              const { content: t, ...n } = e;
                              return (0, o.createElement)(Yt, { ...n, onRemove: a(e), listRef: r, key: e.id }, e.content);
                          })
                        : (0, o.createElement)(
                              Lt,
                              null,
                              e.map((e) => {
                                  const { content: t, ...n } = e;
                                  return (0, o.createElement)(zt, { key: "snackbar-" + e.id, timeout: 500, classNames: "notice-transition" }, (0, o.createElement)(Yt, { ...n, onRemove: a(e), listRef: r }, t));
                              })
                          )
                );
            },
            Xt = ({ className: e, notices: t }) => {
                const { removeNotice: n } = (0, ot.useDispatch)("core/notices");
                return (0, o.createElement)(Jt, {
                    className: s()(e, "wc-block-components-notices__snackbar"),
                    notices: t,
                    onRemove: (e) => {
                        t.forEach((t) => {
                            t.explicitDismiss && t.id === e ? n(t.id, t.context) : t.explicitDismiss || n(t.id, t.context);
                        });
                    },
                });
            },
            qt = (e, t) => e.map((e) => ({ ...e, context: t })),
            Qt = ({ className: e = "", context: t = "", additionalNotices: n = [] }) => {
                const { registerContainer: r, unregisterContainer: i } = (0, ot.useDispatch)(it.STORE_NOTICES_STORE_KEY),
                    { suppressNotices: a, registeredContainers: s } = (0, ot.useSelect)((e) => ({
                        suppressNotices: e(it.PAYMENT_STORE_KEY).isExpressPaymentMethodActive(),
                        registeredContainers: e(it.STORE_NOTICES_STORE_KEY).getRegisteredContainers(),
                    })),
                    c = (0, l.useMemo)(() => (Array.isArray(t) ? t : [t]), [t]),
                    u = Object.values(at).filter((e) => c.some((t) => e.includes(t + "/")) && !s.includes(e)),
                    d = (0, ot.useSelect)((e) => {
                        const { getNotices: t } = e("core/notices");
                        return [...u.flatMap((e) => qt(t(e), e)), ...c.flatMap((e) => qt(t(e).concat(n), e))].filter(Boolean);
                    });
                return (
                    (0, l.useEffect)(
                        () => (
                            c.map((e) => r(e)),
                            () => {
                                c.map((e) => i(e));
                            }
                        ),
                        [c, r, i]
                    ),
                    a
                        ? null
                        : (0, o.createElement)(
                              o.Fragment,
                              null,
                              (0, o.createElement)(St, { className: e, notices: d.filter((e) => "default" === e.type) }),
                              (0, o.createElement)(Xt, { className: e, notices: d.filter((e) => "snackbar" === e.type) })
                          )
                );
            },
            en = window.wc.blocksComponents,
            tn = (e) => null === e,
            nn = (e) => !tn(e) && e instanceof Object && e.constructor === Object;
        n(693);
        const rn = (0, l.forwardRef)(
                (
                    {
                        className: e,
                        id: t,
                        type: n = "text",
                        ariaLabel: r,
                        ariaDescribedBy: i,
                        label: a,
                        screenReaderLabel: c,
                        disabled: u,
                        help: d,
                        autoCapitalize: p = "off",
                        autoComplete: m = "off",
                        value: f = "",
                        onChange: h,
                        required: g = !1,
                        onBlur: y = () => {},
                        feedback: v,
                        ...C
                    },
                    E
                ) => {
                    const [b, w] = (0, l.useState)(!1);
                    return (0, o.createElement)(
                        "div",
                        { className: s()("wc-block-components-text-input", e, { "is-active": b || f }) },
                        (0, o.createElement)("input", {
                            type: n,
                            id: t,
                            value: (0, mt.decodeEntities)(f),
                            ref: E,
                            autoCapitalize: p,
                            autoComplete: m,
                            onChange: (e) => {
                                h(e.target.value);
                            },
                            onFocus: () => w(!0),
                            onBlur: (e) => {
                                y(e.target.value), w(!1);
                            },
                            "aria-label": r || a,
                            disabled: u,
                            "aria-describedby": d && !i ? t + "__help" : i,
                            required: g,
                            ...C,
                        }),
                        (0, o.createElement)(nt, { label: a, screenReaderLabel: c || a, wrapperElement: "label", wrapperProps: { htmlFor: t }, htmlFor: t }),
                        !!d && (0, o.createElement)("p", { id: t + "__help", className: "wc-block-components-text-input__help" }, d),
                        v
                    );
                }
            ),
            on = rn;
        n(785);
        const an = ({ errorMessage: e = "", propertyName: t = "", elementId: n = "" }) => {
                const { validationError: r, validationErrorId: i } = (0, ot.useSelect)((e) => {
                    const r = e(it.VALIDATION_STORE_KEY);
                    return { validationError: r.getValidationError(t), validationErrorId: r.getValidationErrorId(n) };
                });
                if (!e || "string" != typeof e) {
                    if (null == r || !r.message || (null != r && r.hidden)) return null;
                    e = r.message;
                }
                return (0, o.createElement)("div", { className: "wc-block-components-validation-error", role: "alert" }, (0, o.createElement)("p", { id: i }, e));
            },
            sn = an,
            ln = (e, t) => {
                if (!e.includes(t))
                    throw Error(
                        (0, A.sprintf) /* translators: %1$s value passed to filter, %2$s : value that must be included. */(
                            /* translators: %1$s value passed to filter, %2$s : value that must be included. */
                            (0, A.__)('Returned value must include %1$s, you passed "%2$s"', "woocommerce"),
                            t,
                            e
                        )
                    );
                return !0;
            },
            cn = (e, t) => {
                const { valid: n, customError: r, valueMissing: o, badInput: i, typeMismatch: a } = t.validity;
                if (n || r) return t.validationMessage;
                const s = (0, A.sprintf) /* translators: %s field label */(/* translators: %s field label */ (0, A.__)("Please enter a valid %s", "woocommerce"), e.toLowerCase());
                return o || i || a ? s : t.validationMessage || s;
            };
        var un = n(100);
        const dn = new Map([
                ["BA", /^([7-8]{1})([0-9]{4})$/],
                ["GB", /^([A-Z]){1}([0-9]{1,2}|[A-Z][0-9][A-Z]|[A-Z][0-9]{2}|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-Z]{2}){1}|BFPO(?:\s)?([0-9]{1,4})$|BFPO(c\/o[0-9]{1,3})$/i],
                ["IN", /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/],
                ["JP", /^([0-9]{3})([-]?)([0-9]{4})$/],
                ["KH", /^[0-9]{6}$/],
                ["LI", /^(94[8-9][0-9])$/],
                ["NI", /^[1-9]{1}[0-9]{4}$/],
                ["NL", /^([1-9][0-9]{3})(\s?)(?!SA|SD|SS)[A-Z]{2}$/i],
                ["SI", /^([1-9][0-9]{3})$/],
            ]),
            pn = new Map([...un.O, ...dn]),
            mn = ({ postcode: e, country: t }) => {
                var n;
                const r = null === (n = pn.get(t)) || void 0 === n ? void 0 : n.test(e);
                return void 0 === r || r;
            },
            fn =
                ((0, A.__)("Unable to get cart data from the API.", "woocommerce"),
                (e) => {
                    const { applyExtensionCartUpdate: t } = (0, ot.dispatch)("wc/store/cart");
                    return t(e);
                }),
            hn = (0, l.forwardRef)(
                (
                    {
                        className: e,
                        id: t,
                        type: n = "text",
                        ariaDescribedBy: r,
                        errorId: i,
                        focusOnMount: a = !1,
                        onChange: c,
                        showError: u = !0,
                        errorMessage: d = "",
                        value: p = "",
                        customValidation: m = () => !0,
                        customFormatter: f = (e) => e,
                        label: h,
                        validateOnMount: g = !0,
                        instanceId: y = "",
                        ...v
                    },
                    C
                ) => {
                    const [E, b] = (0, l.useState)(!0),
                        w = pt(p),
                        S = (0, l.useRef)(null),
                        N = (0, W.useInstanceId)(hn, "", y),
                        x = void 0 !== t ? t : "textinput-" + N,
                        A = void 0 !== i ? i : x,
                        { setValidationErrors: T, hideValidationError: k, clearValidationError: R } = (0, ot.useDispatch)(it.VALIDATION_STORE_KEY),
                        M = (0, l.useRef)(m);
                    (0, l.useEffect)(() => {
                        M.current = m;
                    }, [m]);
                    const { validationError: _, validationErrorId: O } = (0, ot.useSelect)((e) => {
                            const t = e(it.VALIDATION_STORE_KEY);
                            return { validationError: t.getValidationError(A), validationErrorId: t.getValidationErrorId(A) };
                        }),
                        L = (0, l.useCallback)(
                            (e = !0) => {
                                const t = S.current || null;
                                null !== t && ((t.value = t.value.trim()), t.setCustomValidity(""), t.checkValidity() && M.current(t) ? R(A) : T({ [A]: { message: h ? cn(h, t) : t.validationMessage, hidden: e } }));
                            },
                            [R, A, T, h]
                        );
                    (0, l.useImperativeHandle)(
                        C,
                        function () {
                            return {
                                revalidate() {
                                    L(!p);
                                },
                            };
                        },
                        [L, p]
                    ),
                        (0, l.useEffect)(() => {
                            var e, t;
                            if (p !== w && (p || w) && S && null !== S.current && (null === (e = S.current) || void 0 === e || null === (t = e.ownerDocument) || void 0 === t ? void 0 : t.activeElement) !== S.current) {
                                const e = f(S.current.value);
                                e !== p ? c(e) : L(!0);
                            }
                        }, [L, f, p, w, c]),
                        (0, l.useEffect)(() => {
                            var e;
                            E && (b(!1), a && (null === (e = S.current) || void 0 === e || e.focus()), (!g && a) || L(!0));
                        }, [g, a, E, b, L]),
                        (0, l.useEffect)(
                            () => () => {
                                R(A);
                            },
                            [R, A]
                        ),
                        "" !== d && nn(_) && (_.message = d);
                    const I = (null == _ ? void 0 : _.message) && !(null != _ && _.hidden),
                        D = u && I && O ? O : r;
                    return (0, o.createElement)(on, {
                        className: s()(e, { "has-error": I }),
                        "aria-invalid": !0 === I,
                        id: x,
                        type: n,
                        feedback: u ? (0, o.createElement)(an, { errorMessage: d, propertyName: A }) : null,
                        ref: S,
                        onChange: (e) => {
                            k(A), L(!0);
                            const t = f(e);
                            t !== p && c(t);
                        },
                        onBlur: () => L(!1),
                        ariaDescribedBy: D,
                        value: p,
                        title: "",
                        label: h,
                        ...v,
                    });
                }
            ),
            gn = hn,
            yn = () => !0;
        let vn = {},
            Cn = {};
        const En = (e, t) => {
                Object.keys(t).includes("couponName") &&
                    L()("couponName", {
                        alternative: "coupons",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/blob/bb921d21f42e21f38df2b1c87b48e07aa4cb0538/docs/extensibility/available-filters.md#coupons",
                    }),
                    (Cn = {}),
                    (vn = { ...vn, [e]: t });
            },
            bn = (e, t) => {
                L()("__experimentalRegisterCheckoutFilters", {
                    alternative: "registerCheckoutFilters",
                    plugin: "WooCommerce Blocks",
                    link: "https://github.com/woocommerce/woocommerce-blocks/pull/8346",
                    since: "9.6.0",
                    hint: "__experimentalRegisterCheckoutFilters has graduated to stable and this experimental function will be removed.",
                }),
                    En(e, t);
            },
            wn = {},
            Sn = (e, t, n, r) => {
                wn[e] = { arg: t, extensions: n, defaultValue: r };
            },
            Nn = (e, t) =>
                !(!tn(e) || !tn(t)) ||
                (nn(e) &&
                    nn(t) &&
                    Object.keys(e).length === Object.keys(t).length &&
                    Object.keys(e).every((n) => {
                        return (o = n), nn((r = t)) && o in r && Y()(e[n], t[n]);
                        var r, o;
                    })),
            xn = ({ filterName: e, defaultValue: t, extensions: n = null, arg: r = null, validation: o = yn }) => {
                if (
                    !((e, t, n, r) => {
                        const o = wn[e];
                        if (!o) return Sn(e, t, n, r), !0;
                        const { arg: i = {}, extensions: a = {}, defaultValue: s = null } = o;
                        return Nn(t, i) ? !((r === s && Nn(n, a)) || (Sn(e, t, n, r), 0)) : (Sn(e, t, n, r), !0);
                    })(e, r, n, t) &&
                    void 0 !== Cn[e]
                )
                    return Cn[e];
                const i = ((e) =>
                    Object.keys(vn)
                        .map((t) => vn[t][e])
                        .filter(Boolean))(e);
                let a = t;
                return (
                    i.forEach((e) => {
                        try {
                            const t = e(a, n || {}, r);
                            if (typeof t != typeof a)
                                throw new Error(
                                    (0, A.sprintf) /* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */(
                                        /* translators: %1$s is the type of the variable passed to the filter function, %2$s is the type of the value returned by the filter function. */
                                        (0, A.__)("The type returned by checkout filters must be the same as the type they receive. The function received %1$s but returned %2$s.", "woocommerce"),
                                        typeof a,
                                        typeof t
                                    )
                                );
                            a = o(t) ? t : a;
                        } catch (e) {
                            if (T.CURRENT_USER_IS_ADMIN) throw e;
                            console.error(e);
                        }
                    }),
                    (Cn[e] = a),
                    a
                );
            },
            An = ({ filterName: e, defaultValue: t, extensions: n = null, arg: r = null, validation: o = yn }) => (
                L()("__experimentalApplyCheckoutFilter", {
                    alternative: "applyCheckoutFilter",
                    plugin: "WooCommerce Blocks",
                    link: "https://github.com/woocommerce/woocommerce-blocks/pull/8346",
                    since: "9.6.0",
                    hint: "__experimentalApplyCheckoutFilter has graduated to stable and this experimental function will be removed.",
                }),
                xn({ filterName: e, defaultValue: t, extensions: n, arg: r, validation: o })
            );
        let Tn = (function (e) {
            return (
                (e.CHECKOUT = "woocommerce/checkout"),
                (e.CHECKOUT_FIELDS = "woocommerce/checkout-fields-block"),
                (e.CHECKOUT_TOTALS = "woocommerce/checkout-totals-block"),
                (e.CONTACT_INFORMATION = "woocommerce/checkout-contact-information-block"),
                (e.SHIPPING_ADDRESS = "woocommerce/checkout-shipping-address-block"),
                (e.BILLING_ADDRESS = "woocommerce/checkout-billing-address-block"),
                (e.SHIPPING_METHOD = "woocommerce/checkout-shipping-method-block"),
                (e.SHIPPING_METHODS = "woocommerce/checkout-shipping-methods-block"),
                (e.PICKUP_LOCATION = "woocommerce/checkout-pickup-options-block"),
                (e.PAYMENT_METHODS = "woocommerce/checkout-payment-methods-block"),
                (e.CART = "woocommerce/cart"),
                (e.EMPTY_CART = "woocommerce/empty-cart-block"),
                (e.FILLED_CART = "woocommerce/filled-cart-block"),
                (e.CART_ITEMS = "woocommerce/cart-items-block"),
                (e.CART_CROSS_SELLS = "woocommerce/cart-cross-sells-block"),
                (e.CART_TOTALS = "woocommerce/cart-totals-block"),
                (e.MINI_CART = "woocommerce/mini-cart-contents"),
                (e.EMPTY_MINI_CART = "woocommerce/empty-mini-cart-contents-block"),
                (e.FILLED_MINI_CART = "woocommerce/filled-mini-cart-contents-block"),
                (e.MINI_CART_TITLE = "woocommerce/mini-cart-title-block"),
                (e.MINI_CART_ITEMS = "woocommerce/mini-cart-items-block"),
                (e.MINI_CART_FOOTER = "woocommerce/mini-cart-footer-block"),
                (e.CART_ORDER_SUMMARY = "woocommerce/cart-order-summary-block"),
                (e.CHECKOUT_ORDER_SUMMARY = "woocommerce/checkout-order-summary-block"),
                e
            );
        })({});
        const kn = {},
            Rn = (e) => Object.values(Tn).includes(e),
            Mn = (e) => (Rn(e) ? Object.values(kn).filter(({ metadata: t }) => ((null == t ? void 0 : t.parent) || []).includes(e)) : []),
            On = window.wc.wcBlocksRegistry,
            Ln = (e) => {
                var t, n, r, o;
                ((e, t, n) => {
                    if (!nn(e)) return;
                    const r = typeof e[t];
                    if (r !== n) throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${r}, but must be a ${n}.`);
                })(e, "metadata", "object"),
                    ((e) => {
                        if (
                            (((e, t, n) => {
                                const r = typeof t;
                                if (r !== n) throw new Error(`Incorrect value for the blockName argument when registering a checkout block. It was a ${r}, but must be a ${n}.`);
                            })(0, e, "string"),
                            !e)
                        )
                            throw new Error("Value for the blockName argument must not be empty.");
                    })(e.metadata.name),
                    ((e) => {
                        if ("string" != typeof e && !Array.isArray(e)) throw new Error(`Incorrect value for the parent argument when registering a checkout block. It was a ${typeof e}, but must be a string or array of strings.`);
                        if ("string" == typeof e && !Rn(e)) throw new Error("When registering a checkout block, the parent must be a valid inner block area.");
                        if (Array.isArray(e) && !e.some((e) => Rn(e))) throw new Error("When registering a checkout block, the parent must be a valid inner block area.");
                    })(e.metadata.parent),
                    ((e, t) => {
                        const n = e[t];
                        if (n) {
                            if ("function" == typeof n) return;
                            if (nn(n) && n.$$typeof && n.$$typeof === Symbol.for("react.lazy")) return;
                        }
                        throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`);
                    })(e, "component"),
                    (0, On.registerBlockComponent)({ blockName: e.metadata.name, component: e.component });
                const i =
                    "boolean" == typeof e.force
                        ? e.force
                        : Boolean(null === (t = e.metadata) || void 0 === t || null === (n = t.attributes) || void 0 === n || null === (r = n.lock) || void 0 === r || null === (o = r.default) || void 0 === o ? void 0 : o.remove);
                kn[e.metadata.name] = { blockName: e.metadata.name, metadata: e.metadata, component: e.component, force: i };
            };
    })(),
        ((this.wc = this.wc || {}).blocksCheckout = r);
})();
