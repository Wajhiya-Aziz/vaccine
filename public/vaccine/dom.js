/*! This file is auto-generated */
(() => {
    "use strict";
    var t = {
            n: (e) => {
                var n = e && e.__esModule ? () => e.default : () => e;
                return t.d(n, { a: n }), n;
            },
            d: (e, n) => {
                for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: (t) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            },
        },
        e = {};
    t.r(e),
        t.d(e, {
            __unstableStripHTML: () => $,
            computeCaretRect: () => b,
            documentHasSelection: () => w,
            documentHasTextSelection: () => N,
            documentHasUncollapsedSelection: () => C,
            focus: () => st,
            getFilesFromDataTransfer: () => at,
            getOffsetParent: () => O,
            getPhrasingContentSchema: () => tt,
            getRectangleFromRange: () => g,
            getScrollContainer: () => v,
            insertAfter: () => z,
            isEmpty: () => J,
            isEntirelySelected: () => A,
            isFormElement: () => D,
            isHorizontalEdge: () => I,
            isNumberInput: () => F,
            isPhrasingContent: () => et,
            isRTL: () => P,
            isTextContent: () => nt,
            isTextField: () => E,
            isVerticalEdge: () => V,
            placeCaretAtHorizontalEdge: () => j,
            placeCaretAtVerticalEdge: () => U,
            remove: () => q,
            removeInvalidHTML: () => it,
            replace: () => W,
            replaceTag: () => X,
            safeHTML: () => Y,
            unwrap: () => k,
            wrap: () => G,
        });
    var n = {};
    t.r(n), t.d(n, { find: () => i });
    var r = {};
    function o(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0;
    }
    function i(t, { sequential: e = !1 } = {}) {
        const n = t.querySelectorAll(
            (function (t) {
                return [
                    t ? '[tabindex]:not([tabindex^="-"])' : "[tabindex]",
                    "a[href]",
                    "button:not([disabled])",
                    'input:not([type="hidden"]):not([disabled])',
                    "select:not([disabled])",
                    "textarea:not([disabled])",
                    'iframe:not([tabindex^="-"])',
                    "object",
                    "embed",
                    "area[href]",
                    "[contenteditable]:not([contenteditable=false])",
                ].join(",");
            })(e)
        );
        return Array.from(n).filter((t) => {
            if (!o(t)) return !1;
            const { nodeName: e } = t;
            return (
                "AREA" !== e ||
                (function (t) {
                    const e = t.closest("map[name]");
                    if (!e) return !1;
                    const n = t.ownerDocument.querySelector('img[usemap="#' + e.name + '"]');
                    return !!n && o(n);
                })(t)
            );
        });
    }
    function a(t) {
        const e = t.getAttribute("tabindex");
        return null === e ? 0 : parseInt(e, 10);
    }
    function s(t) {
        return -1 !== a(t);
    }
    function c(t, e) {
        return { element: t, index: e };
    }
    function u(t) {
        return t.element;
    }
    function l(t, e) {
        const n = a(t.element),
            r = a(e.element);
        return n === r ? t.index - e.index : n - r;
    }
    function d(t) {
        return t
            .filter(s)
            .map(c)
            .sort(l)
            .map(u)
            .reduce(
                (function () {
                    const t = {};
                    return function (e, n) {
                        const { nodeName: r, type: o, checked: i, name: a } = n;
                        if ("INPUT" !== r || "radio" !== o || !a) return e.concat(n);
                        const s = t.hasOwnProperty(a);
                        if (!i && s) return e;
                        if (s) {
                            const n = t[a];
                            e = e.filter((t) => t !== n);
                        }
                        return (t[a] = n), e.concat(n);
                    };
                })(),
                []
            );
    }
    function f(t) {
        return d(i(t));
    }
    function m(t) {
        return d(i(t.ownerDocument.body))
            .reverse()
            .find((e) => t.compareDocumentPosition(e) & t.DOCUMENT_POSITION_PRECEDING);
    }
    function h(t) {
        return d(i(t.ownerDocument.body)).find((e) => t.compareDocumentPosition(e) & t.DOCUMENT_POSITION_FOLLOWING);
    }
    function p(t, e) {
        0;
    }
    function g(t) {
        if (!t.collapsed) {
            const e = Array.from(t.getClientRects());
            if (1 === e.length) return e[0];
            const n = e.filter(({ width: t }) => t > 1);
            if (0 === n.length) return t.getBoundingClientRect();
            if (1 === n.length) return n[0];
            let { top: r, bottom: o, left: i, right: a } = n[0];
            for (const { top: t, bottom: e, left: s, right: c } of n) t < r && (r = t), e > o && (o = e), s < i && (i = s), c > a && (a = c);
            return new window.DOMRect(i, r, a - i, o - r);
        }
        const { startContainer: e } = t,
            { ownerDocument: n } = e;
        if ("BR" === e.nodeName) {
            const { parentNode: r } = e;
            p();
            const o = Array.from(r.childNodes).indexOf(e);
            p(), (t = n.createRange()).setStart(r, o), t.setEnd(r, o);
        }
        const r = t.getClientRects();
        if (r.length > 1) return null;
        let o = r[0];
        if (!o || 0 === o.height) {
            p();
            const e = n.createTextNode("â€‹");
            (t = t.cloneRange()).insertNode(e), (o = t.getClientRects()[0]), p(e.parentNode), e.parentNode.removeChild(e);
        }
        return o;
    }
    function b(t) {
        const e = t.getSelection();
        p();
        const n = e.rangeCount ? e.getRangeAt(0) : null;
        return n ? g(n) : null;
    }
    function N(t) {
        p(t.defaultView);
        const e = t.defaultView.getSelection();
        p();
        const n = e.rangeCount ? e.getRangeAt(0) : null;
        return !!n && !n.collapsed;
    }
    function y(t) {
        return "INPUT" === t?.nodeName;
    }
    function E(t) {
        return (y(t) && t.type && !["button", "checkbox", "hidden", "file", "radio", "image", "range", "reset", "submit", "number", "email", "time"].includes(t.type)) || "TEXTAREA" === t.nodeName || "true" === t.contentEditable;
    }
    function C(t) {
        return (
            N(t) ||
            (!!t.activeElement &&
                (function (t) {
                    if (!y(t) && !E(t)) return !1;
                    try {
                        const { selectionStart: e, selectionEnd: n } = t;
                        return null === e || e !== n;
                    } catch (t) {
                        return !0;
                    }
                })(t.activeElement))
        );
    }
    function w(t) {
        return !!t.activeElement && (y(t.activeElement) || E(t.activeElement) || N(t));
    }
    function T(t) {
        return p(t.ownerDocument.defaultView), t.ownerDocument.defaultView.getComputedStyle(t);
    }
    function v(t, e = "vertical") {
        if (t) {
            if (("vertical" === e || "all" === e) && t.scrollHeight > t.clientHeight) {
                const { overflowY: e } = T(t);
                if (/(auto|scroll)/.test(e)) return t;
            }
            if (("horizontal" === e || "all" === e) && t.scrollWidth > t.clientWidth) {
                const { overflowX: e } = T(t);
                if (/(auto|scroll)/.test(e)) return t;
            }
            return t.ownerDocument === t.parentNode ? t : v(t.parentNode, e);
        }
    }
    function O(t) {
        let e;
        for (; (e = t.parentNode) && e.nodeType !== e.ELEMENT_NODE; );
        return e ? ("static" !== T(e).position ? e : e.offsetParent) : null;
    }
    function S(t) {
        return "INPUT" === t.tagName || "TEXTAREA" === t.tagName;
    }
    function A(t) {
        if (S(t)) return 0 === t.selectionStart && t.value.length === t.selectionEnd;
        if (!t.isContentEditable) return !0;
        const { ownerDocument: e } = t,
            { defaultView: n } = e;
        p();
        const r = n.getSelection();
        p();
        const o = r.rangeCount ? r.getRangeAt(0) : null;
        if (!o) return !0;
        const { startContainer: i, endContainer: a, startOffset: s, endOffset: c } = o;
        if (i === t && a === t && 0 === s && c === t.childNodes.length) return !0;
        t.lastChild;
        p();
        const u = a.nodeType === a.TEXT_NODE ? a.data.length : a.childNodes.length;
        return R(i, t, "firstChild") && R(a, t, "lastChild") && 0 === s && c === u;
    }
    function R(t, e, n) {
        let r = e;
        do {
            if (t === r) return !0;
            r = r[n];
        } while (r);
        return !1;
    }
    function D(t) {
        if (!t) return !1;
        const { tagName: e } = t;
        return S(t) || "BUTTON" === e || "SELECT" === e;
    }
    function P(t) {
        return "rtl" === T(t).direction;
    }
    function L(t, e, n, r) {
        const o = r.style.zIndex,
            i = r.style.position,
            { position: a = "static" } = T(r);
        "static" === a && (r.style.position = "relative"), (r.style.zIndex = "10000");
        const s = (function (t, e, n) {
            if (t.caretRangeFromPoint) return t.caretRangeFromPoint(e, n);
            if (!t.caretPositionFromPoint) return null;
            const r = t.caretPositionFromPoint(e, n);
            if (!r) return null;
            const o = t.createRange();
            return o.setStart(r.offsetNode, r.offset), o.collapse(!0), o;
        })(t, e, n);
        return (r.style.zIndex = o), (r.style.position = i), s;
    }
    function M(t, e, n) {
        let r = n();
        return (r && r.startContainer && t.contains(r.startContainer)) || (t.scrollIntoView(e), (r = n()), r && r.startContainer && t.contains(r.startContainer)) ? r : null;
    }
    function x(t, e, n = !1) {
        if (S(t) && "number" == typeof t.selectionStart) return t.selectionStart === t.selectionEnd && (e ? 0 === t.selectionStart : t.value.length === t.selectionStart);
        if (!t.isContentEditable) return !0;
        const { ownerDocument: r } = t,
            { defaultView: o } = r;
        p();
        const i = o.getSelection();
        if (!i || !i.rangeCount) return !1;
        const a = i.getRangeAt(0),
            s = a.cloneRange(),
            c = (function (t) {
                const { anchorNode: e, focusNode: n, anchorOffset: r, focusOffset: o } = t;
                p(), p();
                const i = e.compareDocumentPosition(n);
                return !(i & e.DOCUMENT_POSITION_PRECEDING) && (!!(i & e.DOCUMENT_POSITION_FOLLOWING) || 0 !== i || r <= o);
            })(i),
            u = i.isCollapsed;
        u || s.collapse(!c);
        const l = g(s),
            d = g(a);
        if (!l || !d) return !1;
        const f = (function (t) {
            const e = Array.from(t.getClientRects());
            if (!e.length) return;
            const n = Math.min(...e.map(({ top: t }) => t));
            return Math.max(...e.map(({ bottom: t }) => t)) - n;
        })(a);
        if (!u && f && f > l.height && c === e) return !1;
        const m = P(t) ? !e : e,
            h = t.getBoundingClientRect(),
            b = m ? h.left + 1 : h.right - 1,
            N = e ? h.top + 1 : h.bottom - 1,
            y = M(t, e, () => L(r, b, N, t));
        if (!y) return !1;
        const E = g(y);
        if (!E) return !1;
        const C = e ? "top" : "bottom",
            w = m ? "left" : "right",
            T = E[C] - d[C],
            v = E[w] - l[w],
            O = Math.abs(T) <= 1,
            A = Math.abs(v) <= 1;
        return n ? O : O && A;
    }
    function I(t, e) {
        return x(t, e);
    }
    t.r(r), t.d(r, { find: () => f, findNext: () => h, findPrevious: () => m, isTabbableIndex: () => s });
    const H = window.wp.deprecated;
    var _ = t.n(H);
    function F(t) {
        return _()("wp.dom.isNumberInput", { since: "6.1", version: "6.5" }), y(t) && "number" === t.type && !isNaN(t.valueAsNumber);
    }
    function V(t, e) {
        return x(t, e, !0);
    }
    function B(t, e, n) {
        if (!t) return;
        if ((t.focus(), S(t))) {
            if ("number" != typeof t.selectionStart) return;
            return void (e ? ((t.selectionStart = t.value.length), (t.selectionEnd = t.value.length)) : ((t.selectionStart = 0), (t.selectionEnd = 0)));
        }
        if (!t.isContentEditable) return;
        const r = M(t, e, () =>
            (function (t, e, n) {
                const { ownerDocument: r } = t,
                    o = P(t) ? !e : e,
                    i = t.getBoundingClientRect();
                return void 0 === n ? (n = e ? i.right - 1 : i.left + 1) : n <= i.left ? (n = i.left + 1) : n >= i.right && (n = i.right - 1), L(r, n, o ? i.bottom - 1 : i.top + 1, t);
            })(t, e, n)
        );
        if (!r) return;
        const { ownerDocument: o } = t,
            { defaultView: i } = o;
        p();
        const a = i.getSelection();
        p(), a.removeAllRanges(), a.addRange(r);
    }
    function j(t, e) {
        return B(t, e, void 0);
    }
    function U(t, e, n) {
        return B(t, e, n?.left);
    }
    function z(t, e) {
        p(e.parentNode), e.parentNode.insertBefore(t, e.nextSibling);
    }
    function q(t) {
        p(t.parentNode), t.parentNode.removeChild(t);
    }
    function W(t, e) {
        p(t.parentNode), z(e, t.parentNode), q(t);
    }
    function k(t) {
        const e = t.parentNode;
        for (p(); t.firstChild; ) e.insertBefore(t.firstChild, t);
        e.removeChild(t);
    }
    function X(t, e) {
        const n = t.ownerDocument.createElement(e);
        for (; t.firstChild; ) n.appendChild(t.firstChild);
        return p(t.parentNode), t.parentNode.replaceChild(n, t), n;
    }
    function G(t, e) {
        p(e.parentNode), e.parentNode.insertBefore(t, e), t.appendChild(e);
    }
    function Y(t) {
        const { body: e } = document.implementation.createHTMLDocument("");
        e.innerHTML = t;
        const n = e.getElementsByTagName("*");
        let r = n.length;
        for (; r--; ) {
            const t = n[r];
            if ("SCRIPT" === t.tagName) q(t);
            else {
                let e = t.attributes.length;
                for (; e--; ) {
                    const { name: n } = t.attributes[e];
                    n.startsWith("on") && t.removeAttribute(n);
                }
            }
        }
        return e.innerHTML;
    }
    function $(t) {
        t = Y(t);
        const e = document.implementation.createHTMLDocument("");
        return (e.body.innerHTML = t), e.body.textContent || "";
    }
    function J(t) {
        switch (t.nodeType) {
            case t.TEXT_NODE:
                return /^[ \f\n\r\t\v\u00a0]*$/.test(t.nodeValue || "");
            case t.ELEMENT_NODE:
                return !t.hasAttributes() && (!t.hasChildNodes() || Array.from(t.childNodes).every(J));
            default:
                return !0;
        }
    }
    const K = {
            strong: {},
            em: {},
            s: {},
            del: {},
            ins: {},
            a: { attributes: ["href", "target", "rel", "id"] },
            code: {},
            abbr: { attributes: ["title"] },
            sub: {},
            sup: {},
            br: {},
            small: {},
            q: { attributes: ["cite"] },
            dfn: { attributes: ["title"] },
            data: { attributes: ["value"] },
            time: { attributes: ["datetime"] },
            var: {},
            samp: {},
            kbd: {},
            i: {},
            b: {},
            u: {},
            mark: {},
            ruby: {},
            rt: {},
            rp: {},
            bdi: { attributes: ["dir"] },
            bdo: { attributes: ["dir"] },
            wbr: {},
            "#text": {},
        },
        Q = ["#text", "br"];
    Object.keys(K)
        .filter((t) => !Q.includes(t))
        .forEach((t) => {
            const { [t]: e, ...n } = K;
            K[t].children = n;
        });
    const Z = {
        ...K,
        audio: { attributes: ["src", "preload", "autoplay", "mediagroup", "loop", "muted"] },
        canvas: { attributes: ["width", "height"] },
        embed: { attributes: ["src", "type", "width", "height"] },
        img: { attributes: ["alt", "src", "srcset", "usemap", "ismap", "width", "height"] },
        object: { attributes: ["data", "type", "name", "usemap", "form", "width", "height"] },
        video: { attributes: ["src", "poster", "preload", "playsinline", "autoplay", "mediagroup", "loop", "muted", "controls", "width", "height"] },
    };
    function tt(t) {
        if ("paste" !== t) return Z;
        const { u: e, abbr: n, data: r, time: o, wbr: i, bdi: a, bdo: s, ...c } = { ...Z, ins: { children: Z.ins.children }, del: { children: Z.del.children } };
        return c;
    }
    function et(t) {
        const e = t.nodeName.toLowerCase();
        return tt().hasOwnProperty(e) || "span" === e;
    }
    function nt(t) {
        const e = t.nodeName.toLowerCase();
        return K.hasOwnProperty(e) || "span" === e;
    }
    const rt = () => {};
    function ot(t, e, n, r) {
        Array.from(t).forEach((t) => {
            const o = t.nodeName.toLowerCase();
            if (!n.hasOwnProperty(o) || (n[o].isMatch && !n[o].isMatch?.(t))) ot(t.childNodes, e, n, r), r && !et(t) && t.nextElementSibling && z(e.createElement("br"), t), k(t);
            else if (
                (function (t) {
                    return !!t && t.nodeType === t.ELEMENT_NODE;
                })(t)
            ) {
                const { attributes: i = [], classes: a = [], children: s, require: c = [], allowEmpty: u } = n[o];
                if (s && !u && J(t)) return void q(t);
                if (
                    t.hasAttributes() &&
                    (Array.from(t.attributes).forEach(({ name: e }) => {
                        "class" === e || i.includes(e) || t.removeAttribute(e);
                    }),
                    t.classList && t.classList.length)
                ) {
                    const e = a.map((t) => ("string" == typeof t ? (e) => e === t : t instanceof RegExp ? (e) => t.test(e) : rt));
                    Array.from(t.classList).forEach((n) => {
                        e.some((t) => t(n)) || t.classList.remove(n);
                    }),
                        t.classList.length || t.removeAttribute("class");
                }
                if (t.hasChildNodes()) {
                    if ("*" === s) return;
                    if (s)
                        c.length && !t.querySelector(c.join(","))
                            ? (ot(t.childNodes, e, n, r), k(t))
                            : t.parentNode && "BODY" === t.parentNode.nodeName && et(t)
                            ? (ot(t.childNodes, e, n, r), Array.from(t.childNodes).some((t) => !et(t)) && k(t))
                            : ot(t.childNodes, e, s, r);
                    else for (; t.firstChild; ) q(t.firstChild);
                }
            }
        });
    }
    function it(t, e, n) {
        const r = document.implementation.createHTMLDocument("");
        return (r.body.innerHTML = t), ot(r.body.childNodes, r, e, n), r.body.innerHTML;
    }
    function at(t) {
        const e = Array.from(t.files);
        return (
            Array.from(t.items).forEach((t) => {
                const n = t.getAsFile();
                n && !e.find(({ name: t, type: e, size: r }) => t === n.name && e === n.type && r === n.size) && e.push(n);
            }),
            e
        );
    }
    const st = { focusable: n, tabbable: r };
    (window.wp = window.wp || {}).dom = e;
})();
