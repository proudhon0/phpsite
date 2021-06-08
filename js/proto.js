!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {},
        o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, x = function (e) {
            return null != e && e === e.window
        }, c = {type: !0, src: !0, nonce: !0, noModule: !0};

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    var f = "3.4.0", k = function (e, t) {
        return new k.fn.init(e, t)
    }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    k.fn = k.prototype = {
        jquery: f, constructor: k, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return k.each(this, e)
        }, map: function (n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, k.extend = k.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t) {
            b(e, {nonce: t && t.nonce})
        }, each: function (e, t) {
            var n, r = 0;
            if (d(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(p, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        }, guid: 1, support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0,
            r = 0, p = ue(), x = ue(), A = ue(), N = ue(), D = function (e, t) {
                return e === t && (l = !0), 0
            }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, oe = function () {
                T()
            }, ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }

        function se(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : m) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (u = Z.exec(e))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(i)), n
                }
                if (d.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, f = t, 1 === p && U.test(e)) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(re, ie) : t.setAttribute("id", s = k), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(e) && ye(t.parentNode) || t
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (t) {
                        N(e, !0)
                    } finally {
                        s === k && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(B, "$1"), t, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[k] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (e in d = se.support = {}, i = se.isXML = function (e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ce(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[r] === s[r];) r++;
                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }), C
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
                N(t, !0)
            }
            return 0 < se(t, C, null, [e]).length
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && T(e), y(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
            return (e + "").replace(re, ie)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = se.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += o(t);
            return n
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                for (; l;) {
                                    for (a = e; a = a[l];) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                for (d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [S, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a !== e));) ;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                        for (var n, r = a(e, o), i = r.length; i--;) e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: le(function (e) {
                    var r = [], i = [], s = f(e.replace(B, "$1"));
                    return s[k] ? le(function (e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--;) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length
                    }
                }), contains: le(function (t) {
                    return t = t.replace(te, ne), function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }), lang: le(function (n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return J.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ve(function () {
                    return [0]
                }), last: ve(function (e, t) {
                    return [t - 1]
                }), eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

        function me() {
        }

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                for (; e = e[u];) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    for (; e = e[u];) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else for (; e = e[u];) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) for (i = Te(p, u), v(i, [], n, r), o = i.length; o--;) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (y || d) {
                        if (y) {
                            for (i = [], o = p.length; o--;) (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        for (o = p.length; o--;) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                    for (n = ++s; n < r && !b.relative[e[n].type]; n++) ;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                }
                c.push(t)
            }
            return we(c)
        }

        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = v[a++];) if (s(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        for (a = 0; s = y[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = G.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);) if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                    break
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e)
        }
        return r
    }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, A = k.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }

    k.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && A.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};

    function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    k.fn.extend({
        has: function (e) {
            var t = k(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!A.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return T(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n)
        }, next: function (e) {
            return P(e, "nextSibling")
        }, prev: function (e) {
            return P(e, "previousSibling")
        }, nextAll: function (e) {
            return T(e, "nextSibling")
        }, prevAll: function (e) {
            return T(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function (r, i) {
        k.fn[r] = function (e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    k.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    k.each(e, function (e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), t && !i && c()), this
            }, remove: function () {
                return k.each(arguments, function (e, t) {
                    for (var n; -1 < (n = k.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || i || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, k.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return k.Deferred(function (r) {
                            k.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return k.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? k.extend(e, a) : a
                    }
                }, s = {};
            return k.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            for (; t--;) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = k.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }

    k.fn.ready = function (e) {
        return F.then(e).catch(function (e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
            return l.call(k(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, z = /^-ms-/, U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }

    var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }

    Y.uid = 1, Y.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y, J = new Y, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            J.set(e, t, n)
        } else n = void 0;
        return n
    }

    k.extend({
        hasData: function (e) {
            return J.hasData(e) || Q.hasData(e)
        }, data: function (e, t, n) {
            return J.access(e, t, n)
        }, removeData: function (e, t) {
            J.remove(e, t)
        }, _data: function (e, t, n) {
            return Q.access(e, t, n)
        }, _removeData: function (e, t) {
            Q.remove(e, t)
        }
    }), k.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                J.set(this, n)
            }) : _(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function () {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                Q.set(o, "hasDataAttrs", !0)
            }
            return i
        }, removeData: function (e) {
            return this.each(function () {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                k.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"], ie = E.documentElement, oe = function (e) {
            return k.contains(e.ownerDocument, e)
        }, ae = {composed: !0};
    ie.attachShadow && (oe = function (e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }, ue = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
        return i
    };

    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return k.css(e, t, "")
            }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var ce = {};

    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    k.fn.extend({
        show: function () {
            return fe(this, !0)
        }, hide: function () {
            return fe(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? k.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }

    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o); else if (be.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
        return f
    }

    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ae(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Ne(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
            k.event.add(this, t, i, r, n)
        })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1, handler: function (e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r) (k.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = void 0, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                } else r && (Q.set(this, i, k.event.trigger(k.extend(r.shift(), k.Event.prototype), r, this)), e.stopImmediatePropagation())
            }
        })) : k.event.add(e, i, ke)
    }

    k.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
                return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match(R) || [""]).length; l--;) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && k.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(R) || [""]).length; l--;) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = k.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[k.expando] ? e : new k.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && N(t, "input") && void 0 === Q.get(t, "click") && De(t, "click", ke), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && N(t, "input") && void 0 === Q.get(t, "click") && De(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && N(t, "input") && Q.get(t, "click") || N(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        k.event.special[e] = {
            setup: function () {
                return De(this, e, Ae), !1
            }, trigger: function () {
                return De(this, e), !0
            }, delegateType: t
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        k.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function (e, t, n, r) {
            return Ne(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Ne(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
                k.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    k.extend({
        htmlPrefilter: function (e) {
            return e.replace(je, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]); else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
                if (t = n[Q.expando]) {
                    if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                    n[Q.expando] = void 0
                }
                n[J.expando] && (n[J.expando] = void 0)
            }
        }
    }), k.fn.extend({
        detach: function (e) {
            return We(this, e, !0)
        }, remove: function (e) {
            return We(this, e)
        }, text: function (e) {
            return _(this, function (e) {
                return void 0 === e ? k.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Ie(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Ie(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return k.clone(this, e, t)
            })
        }, html: function (e) {
            return _(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return Ie(this, arguments, function (e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        k.fn[e] = function (e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Fe = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), a
            }, scrollboxSize: function () {
                return e(), i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"], Xe = E.createElement("div").style, Ve = {};

    function Ge(e) {
        return k.cssProps[e] || Ve[e] || (e in Xe ? e : Ve[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }

    var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/,
        Je = {position: "absolute", visibility: "hidden", display: "block"},
        Ke = {letterSpacing: "0", fontWeight: "400"};

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e), i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), o = i,
            a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }

    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function (e, u) {
        k.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
                    return tt(e, u, n)
                })
            }, set: function (e, t, n) {
                var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        k.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }), k.fn.extend({
        css: function (e, t) {
            return _(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = {
        constructor: nt, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;

    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
    }

    function ct() {
        return C.setTimeout(function () {
            rt = void 0
        }), rt = Date.now()
    }

    function ft(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, r = 0, i = (e = m(e) ? (t = e, ["*"]) : e.match(R)).length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], st.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || k.style(e, r)
            }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
                for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
            })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), k.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () {
                var e = dt(this, k.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function (e, r) {
        var i = k.fn[r];
        k.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        k.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function () {
        var e, t = 0, n = k.timers;
        for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function (e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function () {
        it || (it = !0, lt())
    }, k.fx.stop = function () {
        it = null
    }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function (e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ht = {
        set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(R) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }

    k.fn.extend({
        prop: function (e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), y.optSelected || (k.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                k(this).addClass(t.call(this, e, xt(this)))
            });
            if ((e = bt(t)).length) for (; n = this[u++];) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = mt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                k(this).removeClass(t.call(this, e, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length) for (; n = this[u++];) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                for (a = 0; o = e[a++];) for (; -1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                i !== (s = mt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) for (t = 0, n = k(this), r = bt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                        if (t = k(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, y.checkOn || (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0; (o = p[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = k.extend(new k.Event, n, {type: e, isSimulated: !0});
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                k.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), y.focusin || k.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this, t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location, kt = Date.now(), St = /\?/;
    k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var At = /\[\]$/, Nt = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function (e, t) {
            r || At.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }

    k.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function () {
            return k.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                    return {name: t.name, value: e.replace(Nt, "\r\n")}
                }) : {name: t.name, value: n.replace(Nt, "\r\n")}
            }).get()
        }
    });
    var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Ft = E.createElement("a");

    function Bt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t)) for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {}, u = t === Wt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }

    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(),
                b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) for (n = {}; t = Pt.exec(p);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function (e, i) {
        k[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function (e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                k.globalEval(e, t)
            }
        })
    }, k.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = k(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var Ut = {0: 200, 1223: 204}, Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
            return _(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({Height: "height", Width: "width"}, function (a, s) {
        k.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            k.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        k.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = N, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return k
    });
    var Qt = C.jQuery, Jt = C.$;
    return k.noConflict = function (e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
    }, e || (C.jQuery = C.$ = k), k
});

function login(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/login", t, function (e) {
        if (e.error) {
            Snackbar.show({
                text: e.error,
                actionText: "Tamam",
                actionTextColor: "#fff"
            })
        } else {
            if (e.redirect) {
                window.location.href = e.redirect;
            }
            if (e.callback) {
                window[e.callback](e);
            }

            $('.popup:last').remove();
            $('[data-id="feed"]').removeAttr('data-popup');
            if (e.html){
                $('.header .user-box').html(e.html);
            } else {
                window.location.reload(true);
            }
        }
    }, "json")
}

function feed_after_login(response){
    $('.popup:last').remove();
    window.location.href = $('[data-id="feed"]').attr('href');
}

function ask(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/ask", t, function (e) {
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : e.redirect ? window.location.href = e.redirect : window.location.reload(!0)
    }, "json")
}

function editquestion(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/edit-question", t, function (e) {
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : e.redirect ? window.location.href = e.redirect : window.location.reload(!0)
    }, "json")
}

function editanswer(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/edit-answer", t, function (e) {
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : e.redirect ? window.location.href = e.redirect : window.location.reload(!0)
    }, "json")
}

function answer_after_login() {
    $('.popup:last').remove();
    $('.qa-submit button').trigger('click');
}

function answer(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/answer", t, function (e) {
        if (e.error) {
            if (e.error === 'login_required') {
                let a = $('<a href="#" data-popup="login" data-callback="answer_after_login" data-id="answer"></a>').appendTo('body');
                a.trigger('click');
                a.remove();
            } else {
                Snackbar.show({
                    text: e.error,
                    actionText: "Tamam",
                    actionTextColor: "#fff"
                });
            }
        } else {
            $("#no-answer").remove();
            $("#answers").append(e.answer);
            $('.qa-editor-content').html('');
            editor.setValue("")
        }
    }, "json")
}

function upvote_after_login(response){
    $('.popup:last').remove();
    $('a[onclick="upVote(\'' + response.id + '\')"]').trigger('click');
}

function upVote(id, o) {
    $.post(PT_API + "/up-vote", {id: id}, function (e) {
        if (e.error) {
            if (e.error === 'login_required'){
                let a = $('<a href="#" data-popup="login" data-id="' + id + '" data-callback="upvote_after_login"></a>').appendTo('body');
                a.trigger('click').remove();
            } else {
                Snackbar.show({
                    text: e.error, actionText: "Tamam", actionTextColor: "#fff"
                });
            }
        } else {
            if (o) {
                var t = parseInt($("span", o).text());
                $("span", o).text(t + 1)
            }
            Snackbar.show({text: "âœ… " + e.success, actionText: "Tamam", actionTextColor: "#fff"})
        }
    }, "json")
}

function downvote_after_login(response){
    $('.popup:last').remove();
    $('a[onclick="downVote(\'' + response.id + '\')"]').trigger('click');
}

function downVote(id, o) {
    $.post(PT_API + "/down-vote", {id: id}, function (e) {
        if (e.error) {
            if (e.error === 'login_required'){
                let a = $('<a href="#" data-popup="login" data-id="' + id + '" data-callback="downvote_after_login"></a>').appendTo('body');
                a.trigger('click').remove();
            } else {
                Snackbar.show({text: e.error, actionText: "Tamam", actionTextColor: "#fff"});
            }
        } else {
            if (o) {
                var t = parseInt($("span", o).text());
                $("span", o).text(t - 1)
            }
            Snackbar.show({text: "âœ… " + e.success, actionText: "Tamam", actionTextColor: "#fff"})
        }
    }, "json")
}

function register(e) {
    var t = $(e).serialize();
    $(".login-loader").css("display", "flex"), $.post(PT_API + "/register", t, function (e) {
        if (e.error) {
            $(".login-loader").hide();
            Snackbar.show({
                text: e.error,
                actionText: "Tamam",
                actionTextColor: "#fff"
            });
        } else {
            window.location.reload(true);
        }
    }, "json")
}

function newArticle(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/new-article", t, function (e) {
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : window.location.href = e.url
    }, "json")
}

function discover(form) {
    $('.share-link .loading').css('display', 'flex');
    var data = $(form).serialize();
    $.post(PT_API + '/discover', data, function (res) {
        if (res.error) {
            $('.share-link .loading').css('display', 'none');
            Snackbar.show({
                text: res.error,
                actionText: "Tamam",
                actionTextColor: "#fff"
            })
        } else {
            window.location.reload(true);
        }
    }, 'json');
}

function editArticle(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/edit-article", t, function (e) {
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : window.location.href = e.url
    }, "json")
}

function step1(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/step1", t, function (e) {
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : (Snackbar.show({
            text: e.success,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }), window.location.reload(!0))
    }, "json")
}

function step2(e) {
    var t = $(e).serialize();
    $.post(PT_API + "/step2", t, function (e) {
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : (Snackbar.show({
            text: e.success,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }), window.location.reload(!0))
    }, "json")
}

function categoryFavorite(o, a) {
    return $.post(PT_API + "/add-favorite", {id: o}, function (e) {
        if (e.deleted) $(a).closest("li").remove(), $("[data-category-id='" + o + "']").removeClass("favorited"); else if (e.added) {
            var t = $(a).closest("li").html();
            t = t.replace("Takip et", "Takibi bÄ±rak"), $(a).closest("li").addClass("favorited"), $(".qa-categories-following ul").append("<li>" + t + "</li>")
        }
        e.error ? Snackbar.show({
            text: e.error,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }) : Snackbar.show({
            text: e.success,
            actionText: "Tamam",
            actionTextColor: "#fff"
        }), e.html && $("#content-index").html(e.html)
    }, "json"), !1
}

function loadMore(t, e) {
    if (!$(t).hasClass("active")) {
        $(t).addClass("active");
        var o = {id: $(".qa-single-item:last").data("qid")};
        e && (o.category = e), $.post(PT_API + "/load-more", o, function (e) {
            $(t).removeClass("active"), e.end && $(".qa-loader-more").remove(), e.questions && $("#questions").append(e.questions)
        }, "json")
    }
}

function tab() {
    $("[tab]").each(function () {
        var o = $("[tab-list] li", this), a = $("[tab-content]", this), e = $(this).data("current");
        o.filter(e ? ":eq(" + e + ")" : ":first").addClass("active"), a.filter(":not(" + (e ? ":eq(" + e + ")" : ":first") + ")").hide(), o.on("click", function (e) {
            var t = $(this).index();
            o.removeClass("active").filter(this).addClass("active"), a.hide().filter(":eq(" + t + ")").fadeIn(300), e.preventDefault()
        })
    })
}

function setCookie(e, t, o) {
    var a = new Date;
    a.setDate(a.getDate() + o);
    var r = escape(t) + (null == o ? "" : "; path=/; expires=" + a.toUTCString());
    document.cookie = e + "=" + r
}

function getCookie(e) {
    var t, o, a, r = document.cookie.split(";");
    for (t = 0; t < r.length; t++) if (o = r[t].substr(0, r[t].indexOf("=")), a = r[t].substr(r[t].indexOf("=") + 1), (o = o.replace(/^\s+|\s+$/g, "")) == e) return unescape(a)
}

function request(o, a, r, i, n, s, c) {
    NProgress.start(), $.ajax({
        url: SITE_URL + o, beforeSend: function (e) {
            s && (e.setRequestHeader("hide", s), c && e.setRequestHeader("history", !0))
        }, success: function (e) {
            if (r && $(r).data("remove") && $($(r).data("remove")).removeClass("active"), r && i && $(i).removeClass("active").filter(r).addClass("active"), $(a).html(e), reloadAjaxElements(), c && ($('a[href="' + SITE_URL + o + '"]').closest("ul").find("li").removeClass("active"), $('a[href="' + SITE_URL + o + '"]').parent("li").addClass("active")), Prism.highlightAll(), !0 !== n) {
                var t = o + "||" + a;
                s && (t += "||" + s), history.pushState(t, null, SITE_URL + o)
            }
            $(".popup").remove(), $(".full-container").removeClass("passive"), NProgress.done()
        }
    })
}

function reloadAjaxElements() {
    $("[data-ajax]").each(function () {
        $("a", this).on("click", function (e) {
            e.preventDefault()
        })
    })
}

window.addEventListener("popstate", function (e) {
    if (null !== e.state) {
        var t = e.state.split("||");
        request(t[0], t[1], null, null, !0, t[2], !0)
    }
}), reloadAjaxElements(), $(document.body).on("submit", "form[data-api]", function () {
    return window[$(this).data("api")]("#" + $(this).attr("id")), !1
}), $(function () {
    $(".menu-toggle").on("click", function (e) {
        var t = $(".sidebar");
        t.is(".active") ? t.removeClass("active") : t.addClass("active"), e.preventDefault()
    }), $(document.body).on("click", ".edit-button", function (e) {
        var t = $(this).parent().find(".code-toolbar").find("code").text();
        localStorage.setItem("copied_code", t)
    }), $(".switch-theme").on("click", function (e) {
        var t = "light";
        "1" === $("input:checked", this).val() && (t = "dark"), "undefined" != typeof editor && ("light" === t ? editor.setTheme("ace/theme/textmate") : editor.setTheme("ace/theme/twilight")), $("body").removeClass().addClass(t), $.get(PT_API + "/switch-theme?class=" + t, function (e) {
        }, "json")
    })
});
!function (n, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : n.NProgress = e()
}(this, function () {
    var e, t, o = {version: "0.2.0"}, a = o.settings = {
        minimum: .08,
        easing: "linear",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleSpeed: 200,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };

    function u(n, e, t) {
        return n < e ? e : t < n ? t : n
    }

    function c(n) {
        return 100 * (-1 + n)
    }

    o.configure = function (n) {
        var e, t;
        for (e in n) void 0 !== (t = n[e]) && n.hasOwnProperty(e) && (a[e] = t);
        return this
    }, o.status = null, o.set = function (e) {
        var n = o.isStarted();
        e = u(e, a.minimum, 1), o.status = 1 === e ? null : e;
        var t = o.render(!n), r = t.querySelector(a.barSelector), i = a.speed, s = a.easing;
        return t.offsetWidth, l(function (n) {
            "" === a.positionUsing && (a.positionUsing = o.getPositioningCSS()), f(r, function (n, e, t) {
                var r;
                r = "translate3d" === a.positionUsing ? {transform: "translate3d(" + c(n) + "%,0,0)"} : "translate" === a.positionUsing ? {transform: "translate(" + c(n) + "%,0)"} : {"margin-left": c(n) + "%"};
                return r.transition = "all " + e + "ms " + t, r
            }(e, i, s)), 1 === e ? (f(t, {transition: "none", opacity: 1}), t.offsetWidth, setTimeout(function () {
                f(t, {transition: "all " + i + "ms linear", opacity: 0}), setTimeout(function () {
                    o.remove(), n()
                }, i)
            }, i)) : setTimeout(n, i)
        }), this
    }, o.isStarted = function () {
        return "number" == typeof o.status
    }, o.start = function () {
        o.status || o.set(0);
        var n = function () {
            setTimeout(function () {
                o.status && (o.trickle(), n())
            }, a.trickleSpeed)
        };
        return a.trickle && n(), this
    }, o.done = function (n) {
        return n || o.status ? o.inc(.3 + .5 * Math.random()).set(1) : this
    }, o.inc = function (n) {
        var e = o.status;
        return e ? 1 < e ? void 0 : ("number" != typeof n && (n = 0 <= e && e < .2 ? .1 : .2 <= e && e < .5 ? .04 : .5 <= e && e < .8 ? .02 : .8 <= e && e < .99 ? .005 : 0), e = u(e + n, 0, .994), o.set(e)) : o.start()
    }, o.trickle = function () {
        return o.inc()
    }, t = e = 0, o.promise = function (n) {
        return n && "resolved" !== n.state() && (0 === t && o.start(), e++, t++, n.always(function () {
            0 == --t ? (e = 0, o.done()) : o.set((e - t) / e)
        })), this
    }, o.render = function (n) {
        if (o.isRendered()) return document.getElementById("nprogress");
        d(document.documentElement, "nprogress-busy");
        var e = document.createElement("div");
        e.id = "nprogress", e.innerHTML = a.template;
        var t, r = e.querySelector(a.barSelector), i = n ? "-100" : c(o.status || 0),
            s = document.querySelector(a.parent);
        return f(r, {
            transition: "all 0 linear",
            transform: "translate3d(" + i + "%,0,0)"
        }), a.showSpinner || (t = e.querySelector(a.spinnerSelector)) && m(t), s != document.body && d(s, "nprogress-custom-parent"), s.appendChild(e), e
    }, o.remove = function () {
        r(document.documentElement, "nprogress-busy"), r(document.querySelector(a.parent), "nprogress-custom-parent");
        var n = document.getElementById("nprogress");
        n && m(n)
    }, o.isRendered = function () {
        return !!document.getElementById("nprogress")
    }, o.getPositioningCSS = function () {
        var n = document.body.style,
            e = "WebkitTransform" in n ? "Webkit" : "MozTransform" in n ? "Moz" : "msTransform" in n ? "ms" : "OTransform" in n ? "O" : "";
        return e + "Perspective" in n ? "translate3d" : e + "Transform" in n ? "translate" : "margin"
    };
    var l = function () {
        var e = [];

        function t() {
            var n = e.shift();
            n && n(t)
        }

        return function (n) {
            e.push(n), 1 == e.length && t()
        }
    }(), f = function () {
        var s = ["Webkit", "O", "Moz", "ms"], e = {};

        function r(n) {
            return n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (n, e) {
                return e.toUpperCase()
            }), e[n] || (e[n] = function (n) {
                var e = document.body.style;
                if (n in e) return n;
                for (var t, r = s.length, i = n.charAt(0).toUpperCase() + n.slice(1); r--;) if ((t = s[r] + i) in e) return t;
                return n
            }(n))
        }

        function o(n, e, t) {
            e = r(e), n.style[e] = t
        }

        return function (n, e) {
            var t, r, i = arguments;
            if (2 == i.length) for (t in e) void 0 !== (r = e[t]) && e.hasOwnProperty(t) && o(n, t, r); else o(n, i[1], i[2])
        }
    }();

    function i(n, e) {
        return 0 <= ("string" == typeof n ? n : s(n)).indexOf(" " + e + " ")
    }

    function d(n, e) {
        var t = s(n), r = t + e;
        i(t, e) || (n.className = r.substring(1))
    }

    function r(n, e) {
        var t, r = s(n);
        i(n, e) && (t = r.replace(" " + e + " ", " "), n.className = t.substring(1, t.length - 1))
    }

    function s(n) {
        return (" " + (n && n.className || "") + " ").replace(/\s+/gi, " ")
    }

    function m(n) {
        n && n.parentNode && n.parentNode.removeChild(n)
    }

    return o
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (c) {
        var u = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, T = {
            manual: c.Prism && c.Prism.manual,
            disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
            util: {
                encode: function (e) {
                    return e instanceof $ ? new $(e.type, T.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(T.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                }, type: function (e) {
                    return Object.prototype.toString.call(e).slice(8, -1)
                }, objId: function (e) {
                    return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
                }, clone: function a(e, n) {
                    var r, t, i = T.util.type(e);
                    switch (n = n || {}, i) {
                        case"Object":
                            if (t = T.util.objId(e), n[t]) return n[t];
                            for (var s in r = {}, n[t] = r, e) e.hasOwnProperty(s) && (r[s] = a(e[s], n));
                            return r;
                        case"Array":
                            return t = T.util.objId(e), n[t] ? n[t] : (r = [], n[t] = r, e.forEach(function (e, t) {
                                r[t] = a(e, n)
                            }), r);
                        default:
                            return e
                    }
                }
            },
            languages: {
                extend: function (e, t) {
                    var a = T.util.clone(T.languages[e]);
                    for (var n in t) a[n] = t[n];
                    return a
                }, insertBefore: function (a, e, t, n) {
                    var r = (n = n || T.languages)[a], i = {};
                    for (var s in r) if (r.hasOwnProperty(s)) {
                        if (s == e) for (var o in t) t.hasOwnProperty(o) && (i[o] = t[o]);
                        t.hasOwnProperty(s) || (i[s] = r[s])
                    }
                    var l = n[a];
                    return n[a] = i, T.languages.DFS(T.languages, function (e, t) {
                        t === l && e != a && (this[e] = i)
                    }), i
                }, DFS: function e(t, a, n, r) {
                    r = r || {};
                    var i = T.util.objId;
                    for (var s in t) if (t.hasOwnProperty(s)) {
                        a.call(t, s, t[s], n || s);
                        var o = t[s], l = T.util.type(o);
                        "Object" !== l || r[i(o)] ? "Array" !== l || r[i(o)] || (r[i(o)] = !0, e(o, a, s, r)) : (r[i(o)] = !0, e(o, a, null, r))
                    }
                }
            },
            plugins: {},
            highlightAll: function (e, t) {
                T.highlightAllUnder(document, e, t)
            },
            highlightAllUnder: function (e, t, a) {
                var n = {
                    callback: a,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                T.hooks.run("before-highlightall", n);
                for (var r, i = n.elements || e.querySelectorAll(n.selector), s = 0; r = i[s++];) T.highlightElement(r, !0 === t, n.callback)
            },
            highlightElement: function (e, t, a) {
                for (var n, r = "none", i = e; i && !u.test(i.className);) i = i.parentNode;
                i && (r = (i.className.match(u) || [, "none"])[1].toLowerCase(), n = T.languages[r]), e.className = e.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r));
                var s = {element: e, language: r, grammar: n, code: e.textContent}, o = function (e) {
                    s.highlightedCode = e, T.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, T.hooks.run("after-highlight", s), T.hooks.run("complete", s), a && a.call(s.element)
                };
                if (T.hooks.run("before-sanity-check", s), s.code) if (T.hooks.run("before-highlight", s), s.grammar) if (t && c.Worker) {
                    var l = new Worker(T.filename);
                    l.onmessage = function (e) {
                        o(e.data)
                    }, l.postMessage(JSON.stringify({language: s.language, code: s.code, immediateClose: !0}))
                } else o(T.highlight(s.code, s.grammar, s.language)); else o(T.util.encode(s.code)); else T.hooks.run("complete", s)
            },
            highlight: function (e, t, a) {
                var n = {code: e, grammar: t, language: a};
                return T.hooks.run("before-tokenize", n), n.tokens = T.tokenize(n.code, n.grammar), T.hooks.run("after-tokenize", n), $.stringify(T.util.encode(n.tokens), n.language)
            },
            matchGrammar: function (e, t, a, n, r, i, s) {
                for (var o in a) if (a.hasOwnProperty(o) && a[o]) {
                    if (o == s) return;
                    var l = a[o];
                    l = "Array" === T.util.type(l) ? l : [l];
                    for (var c = 0; c < l.length; ++c) {
                        var u = l[c], p = u.inside, d = !!u.lookbehind, g = !!u.greedy, m = 0, f = u.alias;
                        if (g && !u.pattern.global) {
                            var h = u.pattern.toString().match(/[imuy]*$/)[0];
                            u.pattern = RegExp(u.pattern.source, h + "g")
                        }
                        u = u.pattern || u;
                        for (var b = n, y = r; b < t.length; y += t[b].length, ++b) {
                            var k = t[b];
                            if (t.length > e.length) return;
                            if (!(k instanceof $)) {
                                if (g && b != t.length - 1) {
                                    if (u.lastIndex = y, !(S = u.exec(e))) break;
                                    for (var v = S.index + (d ? S[1].length : 0), w = S.index + S[0].length, A = b, x = y, P = t.length; A < P && (x < w || !t[A].type && !t[A - 1].greedy); ++A) (x += t[A].length) <= v && (++b, y = x);
                                    if (t[b] instanceof $) continue;
                                    F = A - b, k = e.slice(y, x), S.index -= y
                                } else {
                                    u.lastIndex = 0;
                                    var S = u.exec(k), F = 1
                                }
                                if (S) {
                                    d && (m = S[1] ? S[1].length : 0), w = (v = S.index + m) + (S = S[0].slice(m)).length;
                                    var j = k.slice(0, v), E = k.slice(w), N = [b, F];
                                    j && (++b, y += j.length, N.push(j));
                                    var C = new $(o, p ? T.tokenize(S, p) : S, f, S, g);
                                    if (N.push(C), E && N.push(E), Array.prototype.splice.apply(t, N), 1 != F && T.matchGrammar(e, t, a, b, y, !0, o), i) break
                                } else if (i) break
                            }
                        }
                    }
                }
            },
            tokenize: function (e, t) {
                var a = [e], n = t.rest;
                if (n) {
                    for (var r in n) t[r] = n[r];
                    delete t.rest
                }
                return T.matchGrammar(e, a, t, 0, 0, !1), a
            },
            hooks: {
                all: {}, add: function (e, t) {
                    var a = T.hooks.all;
                    a[e] = a[e] || [], a[e].push(t)
                }, run: function (e, t) {
                    var a = T.hooks.all[e];
                    if (a && a.length) for (var n, r = 0; n = a[r++];) n(t)
                }
            },
            Token: $
        };

        function $(e, t, a, n, r) {
            this.type = e, this.content = t, this.alias = a, this.length = 0 | (n || "").length, this.greedy = !!r
        }

        if (c.Prism = T, $.stringify = function (e, t) {
            if ("string" == typeof e) return e;
            if (Array.isArray(e)) return e.map(function (e) {
                return $.stringify(e, t)
            }).join("");
            var a = {
                type: e.type,
                content: $.stringify(e.content, t),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: t
            };
            if (e.alias) {
                var n = Array.isArray(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(a.classes, n)
            }
            T.hooks.run("wrap", a);
            var r = Object.keys(a.attributes).map(function (e) {
                return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"'
            }).join(" ");
            return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + a.content + "</" + a.tag + ">"
        }, !c.document) return c.addEventListener && (T.disableWorkerMessageHandler || c.addEventListener("message", function (e) {
            var t = JSON.parse(e.data), a = t.language, n = t.code, r = t.immediateClose;
            c.postMessage(T.highlight(n, T.languages[a], a)), r && c.close()
        }, !1)), T;
        var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return e && (T.filename = e.src, T.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(T.highlightAll) : window.setTimeout(T.highlightAll, 16) : document.addEventListener("DOMContentLoaded", T.highlightAll))), T
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {punctuation: [/^=/, {pattern: /^(\s*)["']|["']$/, lookbehind: !0}]}
            },
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (e, t) {
        var a = {};
        a["language-" + t] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[t]
        }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {"included-cdata": {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: a}};
        n["language-" + t] = {pattern: /[\s\S]+/, inside: Prism.languages[t]};
        var r = {};
        r[e] = {
            pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, e), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, Prism.languages.insertBefore("markup", "cdata", r)
    }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, function (e) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
        url: RegExp("url\\((?:" + t.source + "|.*?)\\)", "i"),
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
        string: {pattern: t, greedy: !0},
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
    }, e.languages.css.atrule.inside.rest = e.languages.css;
    var a = e.languages.markup;
    a && (a.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {pattern: /^\s*style/i, inside: a.tag.inside},
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {pattern: /.+/i, inside: e.languages.css}
            },
            alias: "language-css"
        }
    }, a.tag))
}(Prism), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
    string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /[.\\]/}
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                inside: {
                    "interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"},
                    rest: Prism.languages.javascript
                }
            }, string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript, function (b) {
    function y(e, t) {
        return "___" + e.toUpperCase() + t + "___"
    }

    Object.defineProperties(b.languages["markup-templating"] = {}, {
        buildPlaceholders: {
            value: function (n, r, e, i) {
                if (n.language === r) {
                    var s = n.tokenStack = [];
                    n.code = n.code.replace(e, function (e) {
                        if ("function" == typeof i && !i(e)) return e;
                        for (var t, a = s.length; -1 !== n.code.indexOf(t = y(r, a));) ++a;
                        return s[a] = e, t
                    }), n.grammar = b.languages.markup
                }
            }
        }, tokenizePlaceholders: {
            value: function (g, m) {
                if (g.language === m && g.tokenStack) {
                    g.grammar = b.languages[m];
                    var f = 0, h = Object.keys(g.tokenStack);
                    !function e(t) {
                        for (var a = 0; a < t.length && !(f >= h.length); a++) {
                            var n = t[a];
                            if ("string" == typeof n || n.content && "string" == typeof n.content) {
                                var r = h[f], i = g.tokenStack[r], s = "string" == typeof n ? n : n.content,
                                    o = y(m, r), l = s.indexOf(o);
                                if (-1 < l) {
                                    ++f;
                                    var c = s.substring(0, l),
                                        u = new b.Token(m, b.tokenize(i, g.grammar), "language-" + m, i),
                                        p = s.substring(l + o.length), d = [];
                                    c && d.push.apply(d, e([c])), d.push(u), p && d.push.apply(d, e([p])), "string" == typeof n ? t.splice.apply(t, [a, 1].concat(d)) : n.content = d
                                }
                            } else n.content && e(n.content)
                        }
                        return t
                    }(g.tokens)
                }
            }
        }
    })
}(Prism), function (t) {
    t.languages.php = t.languages.extend("clike", {
        keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
        boolean: {pattern: /\b(?:false|true)\b/i, alias: "constant"},
        constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
        comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0}
    }), t.languages.insertBefore("php", "string", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }), t.languages.insertBefore("php", "comment", {
        delimiter: {
            pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
            alias: "important"
        }
    }), t.languages.insertBefore("php", "keyword", {
        variable: /\$+(?:\w+\b|(?={))/i,
        package: {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
    }), t.languages.insertBefore("php", "operator", {property: {pattern: /(->)[\w]+/, lookbehind: !0}});
    var e = {
        pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
        lookbehind: !0,
        inside: {rest: t.languages.php}
    };
    t.languages.insertBefore("php", "string", {
        "nowdoc-string": {
            pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {punctuation: /^<<<'?|[';]$/}
                }
            }
        },
        "heredoc-string": {
            pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {punctuation: /^<<<"?|[";]$/}
                }, interpolation: e
            }
        },
        "single-quoted-string": {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string"},
        "double-quoted-string": {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            alias: "string",
            inside: {interpolation: e}
        }
    }), delete t.languages.php.string, t.hooks.add("before-tokenize", function (e) {
        /<\?/.test(e.code) && t.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)
    }), t.hooks.add("after-tokenize", function (e) {
        t.languages["markup-templating"].tokenizePlaceholders(e, "php")
    })
}(Prism), function (o) {
    var e = o.languages.javadoclike = {
        parameter: {
            pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
            lookbehind: !0
        }, keyword: {pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0}, punctuation: /[{}]/
    };
    Object.defineProperty(e, "addSupport", {
        value: function (e, t) {
            "string" == typeof e && (e = [e]), e.forEach(function (e) {
                !function (e, t) {
                    var a = "doc-comment", n = o.languages[e];
                    if (n) {
                        var r = n[a];
                        if (!r) {
                            r = (n = o.languages.insertBefore(e, "comment", {
                                "doc-comment": {
                                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                    alias: "comment"
                                }
                            }))[a]
                        }
                        if (r instanceof RegExp && (r = n[a] = {pattern: r}), Array.isArray(r)) for (var i = 0, s = r.length; i < s; i++) r[i] instanceof RegExp && (r[i] = {pattern: r[i]}), t(r[i]); else t(r)
                    }
                }(e, function (e) {
                    e.inside || (e.inside = {}), e.inside.rest = t
                })
            })
        }
    }), e.addSupport(["java", "javascript", "php"], e)
}(Prism), Prism.languages.json = {
    property: {pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0},
    string: {pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0},
    comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: {pattern: /\bnull\b/, alias: "keyword"}
}, function (e) {
    var t = "(?:[a-zA-Z]\\w*|[|\\\\[\\]])+";
    e.languages.phpdoc = e.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + t + "\\s+)?)\\$\\w+"),
            lookbehind: !0
        }
    }), e.languages.insertBefore("phpdoc", "keyword", {
        "class-name": [{
            pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + t),
            lookbehind: !0,
            inside: {
                keyword: /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,
                punctuation: /[|\\[\]()]/
            }
        }]
    }), e.languages.javadoclike.addSupport("php", e.languages.phpdoc)
}(Prism), Prism.languages.insertBefore("php", "variable", {
    this: /\$this\b/,
    global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
    scope: {pattern: /\b[\w\\]+::/, inside: {keyword: /static|self|parent/, punctuation: /::|\\/}}
}), function (e) {
    e.languages.pug = {
        comment: {pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m, lookbehind: !0},
        "multiline-script": {
            pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {rest: e.languages.javascript}
        },
        filter: {
            pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0,
            inside: {"filter-name": {pattern: /^:[\w-]+/, alias: "variable"}}
        },
        "multiline-plain-text": {
            pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
            lookbehind: !0
        },
        markup: {pattern: /(^[\t ]*)<.+/m, lookbehind: !0, inside: {rest: e.languages.markup}},
        doctype: {pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0},
        "flow-control": {
            pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
            lookbehind: !0,
            inside: {
                each: {pattern: /^each .+? in\b/, inside: {keyword: /\b(?:each|in)\b/, punctuation: /,/}},
                branch: {pattern: /^(?:if|unless|else|case|when|default|while)\b/, alias: "keyword"},
                rest: e.languages.javascript
            }
        },
        keyword: {pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m, lookbehind: !0},
        mixin: [{
            pattern: /(^[\t ]*)mixin .+/m,
            lookbehind: !0,
            inside: {keyword: /^mixin/, function: /\w+(?=\s*\(|\s*$)/, punctuation: /[(),.]/}
        }, {
            pattern: /(^[\t ]*)\+.+/m,
            lookbehind: !0,
            inside: {name: {pattern: /^\+\w+/, alias: "function"}, rest: e.languages.javascript}
        }],
        script: {
            pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
            lookbehind: !0,
            inside: {rest: e.languages.javascript}
        },
        "plain-text": {pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m, lookbehind: !0},
        tag: {
            pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /&[^(]+\([^)]+\)/,
                    inside: {rest: e.languages.javascript}
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                            lookbehind: !0,
                            inside: {rest: e.languages.javascript}
                        }, "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/, punctuation: /[!=(),]+/
                    }
                }], punctuation: /:/
            }
        },
        code: [{pattern: /(^[\t ]*(?:-|!?=)).+/m, lookbehind: !0, inside: {rest: e.languages.javascript}}],
        punctuation: /[.\-!=|]+/
    };
    for (var t = [{filter: "atpl", language: "twig"}, {
        filter: "coffee",
        language: "coffeescript"
    }, "ejs", "handlebars", "less", "livescript", "markdown", {
        filter: "sass",
        language: "scss"
    }, "stylus"], a = {}, n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        i = "string" == typeof i ? {
            filter: i,
            language: i
        } : i, e.languages[i.language] && (a["filter-" + i.filter] = {
            pattern: RegExp("(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ]+.+|\\s*?(?=\r?\n|\r)))+".replace("{{filter_name}}", i.filter), "m"),
            lookbehind: !0,
            inside: {"filter-name": {pattern: /^:[\w-]+/, alias: "variable"}, rest: e.languages[i.language]}
        })
    }
    e.languages.insertBefore("pug", "filter", a)
}(Prism), function (a) {
    var e = {pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape"},
        t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,
        n = /\\[wsd]|\.|\\p{[^{}]+}/i, r = "(?:[^\\\\-]|" + t.source + ")", i = RegExp(r + "-" + r),
        s = {pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable"},
        o = [/\\(?![123][0-7]{2})[1-9]/, {pattern: /\\k<[^<>']+>/, inside: {"group-name": s}}];
    a.languages.regex = {
        charset: {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: !0,
            inside: {
                "charset-negation": {pattern: /(^\[)\^/, lookbehind: !0},
                "charset-punctuation": /^\[|\]$/,
                range: {pattern: i, inside: {escape: t, "range-punctuation": /-/}},
                "special-escape": e,
                charclass: n,
                backreference: o,
                escape: t
            }
        },
        "special-escape": e,
        charclass: n,
        backreference: o,
        anchor: /[$^]|\\[ABbGZz]/,
        escape: t,
        group: [{
            pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
            inside: {"group-name": s}
        }, /\)/],
        quantifier: /[+*?]|\{(?:\d+,?\d*)\}/,
        alternation: /\|/
    }, ["actionscript", "coffescript", "flow", "javascript", "typescript", "vala"].forEach(function (e) {
        var t = a.languages[e];
        t && (t.regex.inside = {
            "regex-flags": /[a-z]+$/,
            "regex-delimiter": /^\/|\/$/,
            "language-regex": {pattern: /[\s\S]+/, inside: a.languages.regex}
        })
    })
}(Prism), function () {
    if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
        var t, f = function () {
            if (void 0 === t) {
                var e = document.createElement("div");
                e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = 0, e.style.border = 0, e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e)
            }
            return t
        }, s = 0;
        Prism.hooks.add("before-sanity-check", function (e) {
            var t = e.element.parentNode, a = t && t.getAttribute("data-line");
            if (t && a && /pre/i.test(t.nodeName)) {
                var n = 0;
                r(".line-highlight", t).forEach(function (e) {
                    n += e.textContent.length, e.parentNode.removeChild(e)
                }), n && /^( \n)+$/.test(e.code.slice(-n)) && (e.code = e.code.slice(0, -n))
            }
        }), Prism.hooks.add("complete", function e(t) {
            var a = t.element.parentNode, n = a && a.getAttribute("data-line");
            if (a && n && /pre/i.test(a.nodeName)) {
                clearTimeout(s);
                var r = Prism.plugins.lineNumbers, i = t.plugins && t.plugins.lineNumbers;
                h(a, "line-numbers") && r && !i ? Prism.hooks.add("line-numbers", e) : (o(a, n), s = setTimeout(l, 1))
            }
        }), window.addEventListener("hashchange", l), window.addEventListener("resize", function () {
            var e = document.querySelectorAll("pre[data-line]");
            Array.prototype.forEach.call(e, function (e) {
                o(e)
            })
        })
    }

    function r(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }

    function h(e, t) {
        return t = " " + t + " ", -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t)
    }

    function o(e, t, a) {
        for (var n, r = (t = "string" == typeof t ? t : e.getAttribute("data-line")).replace(/\s+/g, "").split(","), i = +e.getAttribute("data-line-offset") || 0, s = (f() ? parseInt : parseFloat)(getComputedStyle(e).lineHeight), o = h(e, "line-numbers"), l = 0; n = r[l++];) {
            var c = n.split("-"), u = +c[0], p = +c[1] || u,
                d = e.querySelector('.line-highlight[data-range="' + n + '"]') || document.createElement("div");
            if (d.setAttribute("aria-hidden", "true"), d.setAttribute("data-range", n), d.className = (a || "") + " line-highlight", o && Prism.plugins.lineNumbers) {
                var g = Prism.plugins.lineNumbers.getLine(e, u), m = Prism.plugins.lineNumbers.getLine(e, p);
                g && (d.style.top = g.offsetTop + "px"), m && (d.style.height = m.offsetTop - g.offsetTop + m.offsetHeight + "px")
            } else d.setAttribute("data-start", u), u < p && d.setAttribute("data-end", p), d.style.top = (u - i - 1) * s + "px", d.textContent = new Array(p - u + 2).join(" \n");
            o ? e.appendChild(d) : (e.querySelector("code") || e).appendChild(d)
        }
    }

    function l() {
        var e = location.hash.slice(1);
        r(".temporary.line-highlight").forEach(function (e) {
            e.parentNode.removeChild(e)
        });
        var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (t && !document.getElementById(e)) {
            var a = e.slice(0, e.lastIndexOf(".")), n = document.getElementById(a);
            n && (n.hasAttribute("data-line") || n.setAttribute("data-line", ""), o(n, t, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView())
        }
    }
}(), function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var s = "line-numbers", u = /\n(?!$)/g, p = function (e) {
            var t = o(e)["white-space"];
            if ("pre-wrap" === t || "pre-line" === t) {
                var a = e.querySelector("code"), n = e.querySelector(".line-numbers-rows"),
                    r = e.querySelector(".line-numbers-sizer"), i = a.textContent.split(u);
                r || ((r = document.createElement("span")).className = "line-numbers-sizer", a.appendChild(r)), r.style.display = "block", i.forEach(function (e, t) {
                    r.textContent = e || "\n";
                    var a = r.getBoundingClientRect().height;
                    n.children[t].style.height = a + "px"
                }), r.textContent = "", r.style.display = "none"
            }
        }, o = function (e) {
            return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
        };
        window.addEventListener("resize", function () {
            Array.prototype.forEach.call(document.querySelectorAll("pre." + s), p)
        }), Prism.hooks.add("complete", function (e) {
            if (e.code) {
                var t = e.element, a = t.parentNode;
                if (a && /pre/i.test(a.nodeName) && !t.querySelector(".line-numbers-rows")) {
                    for (var n = !1, r = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode) if (r.test(i.className)) {
                        n = !0;
                        break
                    }
                    if (n) {
                        t.className = t.className.replace(r, " "), r.test(a.className) || (a.className += " line-numbers");
                        var s, o = e.code.match(u), l = o ? o.length + 1 : 1,
                            c = new Array(l + 1).join("<span></span>");
                        (s = document.createElement("span")).setAttribute("aria-hidden", "true"), s.className = "line-numbers-rows", s.innerHTML = c, a.hasAttribute("data-start") && (a.style.counterReset = "linenumber " + (parseInt(a.getAttribute("data-start"), 10) - 1)), e.element.appendChild(s), p(a), Prism.hooks.run("line-numbers", e)
                    }
                }
            }
        }), Prism.hooks.add("line-numbers", function (e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        }), Prism.plugins.lineNumbers = {
            getLine: function (e, t) {
                if ("PRE" === e.tagName && e.classList.contains(s)) {
                    var a = e.querySelector(".line-numbers-rows"), n = parseInt(e.getAttribute("data-start"), 10) || 1,
                        r = n + (a.children.length - 1);
                    t < n && (t = n), r < t && (t = r);
                    var i = t - n;
                    return a.children[i]
                }
            }
        }
    }
}(), function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var i = [], s = {}, a = function () {
        };
        Prism.plugins.toolbar = {};
        var e = Prism.plugins.toolbar.registerButton = function (e, a) {
            var t;
            t = "function" == typeof a ? a : function (e) {
                var t;
                return "function" == typeof a.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
                    a.onClick.call(this, e)
                })) : "string" == typeof a.url ? (t = document.createElement("a")).href = a.url : t = document.createElement("span"), t.textContent = a.text, t
            }, e in s ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(s[e] = t)
        }, t = Prism.plugins.toolbar.hook = function (n) {
            var e = n.element.parentNode;
            if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
                var t = document.createElement("div");
                t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e);
                var r = document.createElement("div");
                r.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (i = document.body.getAttribute("data-toolbar-order").split(",").map(function (e) {
                    return s[e] || a
                })), i.forEach(function (e) {
                    var t = e(n);
                    if (t) {
                        var a = document.createElement("div");
                        a.classList.add("toolbar-item"), a.appendChild(t), r.appendChild(a)
                    }
                }), t.appendChild(r)
            }
        };
        e("label", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var a, n, r = t.getAttribute("data-label");
                try {
                    n = document.querySelector("template#" + r)
                } catch (e) {
                }
                return n ? a = n.content : (t.hasAttribute("data-url") ? (a = document.createElement("a")).href = t.getAttribute("data-url") : a = document.createElement("span"), a.textContent = r), a
            }
        }), Prism.hooks.add("complete", t)
    }
}(), function () {
    if ("undefined" != typeof self && self.Prism && self.document) if (Prism.plugins.toolbar) {
        var i = {
            html: "HTML",
            xml: "XML",
            svg: "SVG",
            mathml: "MathML",
            css: "CSS",
            clike: "C-like",
            js: "JavaScript",
            abap: "ABAP",
            abnf: "Augmented Backusâ€“Naur form",
            apacheconf: "Apache Configuration",
            apl: "APL",
            arff: "ARFF",
            asciidoc: "AsciiDoc",
            adoc: "AsciiDoc",
            asm6502: "6502 Assembly",
            aspnet: "ASP.NET (C#)",
            autohotkey: "AutoHotkey",
            autoit: "AutoIt",
            shell: "Bash",
            basic: "BASIC",
            bnf: "Backusâ€“Naur form",
            rbnf: "Routing Backusâ€“Naur form",
            csharp: "C#",
            dotnet: "C#",
            cpp: "C++",
            cil: "CIL",
            coffee: "CoffeeScript",
            cmake: "CMake",
            csp: "Content-Security-Policy",
            "css-extras": "CSS Extras",
            django: "Django/Jinja2",
            jinja2: "Django/Jinja2",
            dockerfile: "Docker",
            ebnf: "Extended Backusâ€“Naur form",
            ejs: "EJS",
            erb: "ERB",
            fsharp: "F#",
            gcode: "G-code",
            gedcom: "GEDCOM",
            glsl: "GLSL",
            gml: "GameMaker Language",
            gamemakerlanguage: "GameMaker Language",
            graphql: "GraphQL",
            hs: "Haskell",
            hcl: "HCL",
            http: "HTTP",
            hpkp: "HTTP Public-Key-Pins",
            hsts: "HTTP Strict-Transport-Security",
            ichigojam: "IchigoJam",
            inform7: "Inform 7",
            javadoc: "JavaDoc",
            javadoclike: "JavaDoc-like",
            javastacktrace: "Java stack trace",
            jsdoc: "JSDoc",
            "js-extras": "JS Extras",
            json: "JSON",
            jsonp: "JSONP",
            json5: "JSON5",
            latex: "LaTeX",
            emacs: "Lisp",
            elisp: "Lisp",
            "emacs-lisp": "Lisp",
            lolcode: "LOLCODE",
            md: "Markdown",
            "markup-templating": "Markup templating",
            matlab: "MATLAB",
            mel: "MEL",
            n1ql: "N1QL",
            n4js: "N4JS",
            n4jsd: "N4JS",
            "nand2tetris-hdl": "Nand To Tetris HDL",
            nasm: "NASM",
            nginx: "nginx",
            nsis: "NSIS",
            objectivec: "Objective-C",
            ocaml: "OCaml",
            opencl: "OpenCL",
            parigp: "PARI/GP",
            objectpascal: "Object Pascal",
            php: "PHP",
            phpdoc: "PHPDoc",
            "php-extras": "PHP Extras",
            plsql: "PL/SQL",
            powershell: "PowerShell",
            properties: ".properties",
            protobuf: "Protocol Buffers",
            py: "Python",
            q: "Q (kdb+ database)",
            jsx: "React JSX",
            tsx: "React TSX",
            renpy: "Ren'py",
            rest: "reST (reStructuredText)",
            rb: "Ruby",
            sas: "SAS",
            sass: "Sass (Sass)",
            scss: "Sass (Scss)",
            sql: "SQL",
            soy: "Soy (Closure Template)",
            tap: "TAP",
            toml: "TOML",
            tt2: "Template Toolkit 2",
            ts: "TypeScript",
            "t4-cs": "T4 Text Templates (C#)",
            t4: "T4 Text Templates (C#)",
            "t4-vb": "T4 Text Templates (VB)",
            "t4-templating": "T4 templating",
            vbnet: "VB.Net",
            vhdl: "VHDL",
            vim: "vim",
            "visual-basic": "Visual Basic",
            vb: "Visual Basic",
            wasm: "WebAssembly",
            wiki: "Wiki markup",
            xeoracube: "XeoraCube",
            xojo: "Xojo (REALbasic)",
            xquery: "XQuery",
            yaml: "YAML",
            yml: "YAML"
        };
        Prism.plugins.toolbar.registerButton("show-language", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName)) {
                var a,
                    n = t.getAttribute("data-language") || i[e.language] || ((a = e.language) ? (a.substring(0, 1).toUpperCase() + a.substring(1)).replace(/s(?=cript)/, "S") : a);
                if (n) {
                    var r = document.createElement("span");
                    return r.textContent = n, r
                }
            }
        })
    } else console.warn("Show Languages plugin loaded before Toolbar plugin.")
}();
(function () {
    function a(e) {
        "use strict";
        var r = {
            omitExtraWLInCodeBlocks: {
                defaultValue: !1,
                describe: "Omit the default extra whiteline added to code blocks",
                type: "boolean"
            },
            noHeaderId: {defaultValue: !1, describe: "Turn on/off generated header id", type: "boolean"},
            prefixHeaderId: {
                defaultValue: !1,
                describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string"
            },
            rawPrefixHeaderId: {
                defaultValue: !1,
                describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean"
            },
            ghCompatibleHeaderId: {
                defaultValue: !1,
                describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean"
            },
            rawHeaderId: {
                defaultValue: !1,
                describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                type: "boolean"
            },
            headerLevelStart: {defaultValue: !1, describe: "The header blocks level start", type: "integer"},
            parseImgDimensions: {defaultValue: !1, describe: "Turn on/off image dimension parsing", type: "boolean"},
            simplifiedAutoLink: {defaultValue: !1, describe: "Turn on/off GFM autolink style", type: "boolean"},
            excludeTrailingPunctuationFromURLs: {
                defaultValue: !1,
                describe: "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean"
            },
            literalMidWordUnderscores: {
                defaultValue: !1,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean"
            },
            literalMidWordAsterisks: {
                defaultValue: !1,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean"
            },
            strikethrough: {defaultValue: !1, describe: "Turn on/off strikethrough support", type: "boolean"},
            tables: {defaultValue: !1, describe: "Turn on/off tables support", type: "boolean"},
            tablesHeaderId: {defaultValue: !1, describe: "Add an id to table headers", type: "boolean"},
            ghCodeBlocks: {defaultValue: !0, describe: "Turn on/off GFM fenced code blocks support", type: "boolean"},
            tasklists: {defaultValue: !1, describe: "Turn on/off GFM tasklist support", type: "boolean"},
            smoothLivePreview: {
                defaultValue: !1,
                describe: "Prevents weird effects in live previews due to incomplete input",
                type: "boolean"
            },
            smartIndentationFix: {
                defaultValue: !1,
                description: "Tries to smartly fix indentation in es6 strings",
                type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
                defaultValue: !1,
                description: "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean"
            },
            simpleLineBreaks: {
                defaultValue: !1,
                description: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
                defaultValue: !1,
                description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean"
            },
            ghMentions: {defaultValue: !1, description: "Enables github @mentions", type: "boolean"},
            ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string"
            },
            encodeEmails: {
                defaultValue: !0,
                description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean"
            },
            openLinksInNewWindow: {defaultValue: !1, description: "Open all links in new windows", type: "boolean"},
            backslashEscapesHTMLTags: {
                defaultValue: !1,
                description: "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean"
            },
            emoji: {
                defaultValue: !1,
                description: "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean"
            },
            underline: {
                defaultValue: !1,
                description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean"
            },
            completeHTMLDocument: {
                defaultValue: !1,
                description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean"
            },
            metadata: {
                defaultValue: !1,
                description: "Enable support for document metadata (defined at the top of the document between `Â«Â«Â«` and `Â»Â»Â»` or between `---` and `---`).",
                type: "boolean"
            },
            splitAdjacentBlockquotes: {
                defaultValue: !1,
                description: "Split adjacent blockquote blocks",
                type: "boolean"
            }
        };
        if (!1 === e) return JSON.parse(JSON.stringify(r));
        var t = {};
        for (var a in r) r.hasOwnProperty(a) && (t[a] = r[a].defaultValue);
        return t
    }

    function d(e, r) {
        "use strict";
        var t = r ? "Error in " + r + " extension->" : "Error in unnamed extension", a = {valid: !0, error: ""};
        b.helper.isArray(e) || (e = [e]);
        for (var n = 0; n < e.length; ++n) {
            var s = t + " sub-extension " + n + ": ", o = e[n];
            if ("object" != typeof o) return a.valid = !1, a.error = s + "must be an object, but " + typeof o + " given", a;
            if (!b.helper.isString(o.type)) return a.valid = !1, a.error = s + 'property "type" must be a string, but ' + typeof o.type + " given", a;
            var i = o.type = o.type.toLowerCase();
            if ("language" === i && (i = o.type = "lang"), "html" === i && (i = o.type = "output"), "lang" !== i && "output" !== i && "listener" !== i) return a.valid = !1, a.error = s + "type " + i + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', a;
            if ("listener" === i) {
                if (b.helper.isUndefined(o.listeners)) return a.valid = !1, a.error = s + '. Extensions of type "listener" must have a property called "listeners"', a
            } else if (b.helper.isUndefined(o.filter) && b.helper.isUndefined(o.regex)) return a.valid = !1, a.error = s + i + ' extensions must define either a "regex" property or a "filter" method', a;
            if (o.listeners) {
                if ("object" != typeof o.listeners) return a.valid = !1, a.error = s + '"listeners" property must be an object but ' + typeof o.listeners + " given", a;
                for (var l in o.listeners) if (o.listeners.hasOwnProperty(l) && "function" != typeof o.listeners[l]) return a.valid = !1, a.error = s + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + l + " must be a function but " + typeof o.listeners[l] + " given", a
            }
            if (o.filter) {
                if ("function" != typeof o.filter) return a.valid = !1, a.error = s + '"filter" must be a function, but ' + typeof o.filter + " given", a
            } else if (o.regex) {
                if (b.helper.isString(o.regex) && (o.regex = new RegExp(o.regex, "g")), !(o.regex instanceof RegExp)) return a.valid = !1, a.error = s + '"regex" property must either be a string or a RegExp object, but ' + typeof o.regex + " given", a;
                if (b.helper.isUndefined(o.replace)) return a.valid = !1, a.error = s + '"regex" extensions must implement a replace string or function', a
            }
        }
        return a
    }

    function s(e, r) {
        "use strict";
        return "Â¨E" + r.charCodeAt(0) + "E"
    }

    var b = {}, t = {}, p = {}, h = a(!0), _ = "vanilla", g = {
        github: {
            omitExtraWLInCodeBlocks: !0,
            simplifiedAutoLink: !0,
            excludeTrailingPunctuationFromURLs: !0,
            literalMidWordUnderscores: !0,
            strikethrough: !0,
            tables: !0,
            tablesHeaderId: !0,
            ghCodeBlocks: !0,
            tasklists: !0,
            disableForced4SpacesIndentedSublists: !0,
            simpleLineBreaks: !0,
            requireSpaceBeforeHeadingText: !0,
            ghCompatibleHeaderId: !0,
            ghMentions: !0,
            backslashEscapesHTMLTags: !0,
            emoji: !0,
            splitAdjacentBlockquotes: !0
        },
        original: {noHeaderId: !0, ghCodeBlocks: !1},
        ghost: {
            omitExtraWLInCodeBlocks: !0,
            parseImgDimensions: !0,
            simplifiedAutoLink: !0,
            excludeTrailingPunctuationFromURLs: !0,
            literalMidWordUnderscores: !0,
            strikethrough: !0,
            tables: !0,
            tablesHeaderId: !0,
            ghCodeBlocks: !0,
            tasklists: !0,
            smoothLivePreview: !0,
            simpleLineBreaks: !0,
            requireSpaceBeforeHeadingText: !0,
            ghMentions: !1,
            encodeEmails: !0
        },
        vanilla: a(!0),
        allOn: function () {
            "use strict";
            var e = a(!0), r = {};
            for (var t in e) e.hasOwnProperty(t) && (r[t] = !0);
            return r
        }()
    };
    b.helper = {}, b.extensions = {}, b.setOption = function (e, r) {
        "use strict";
        return h[e] = r, this
    }, b.getOption = function (e) {
        "use strict";
        return h[e]
    }, b.getOptions = function () {
        "use strict";
        return h
    }, b.resetOptions = function () {
        "use strict";
        h = a(!0)
    }, b.setFlavor = function (e) {
        "use strict";
        if (!g.hasOwnProperty(e)) throw Error(e + " flavor was not found");
        b.resetOptions();
        var r = g[e];
        for (var t in _ = e, r) r.hasOwnProperty(t) && (h[t] = r[t])
    }, b.getFlavor = function () {
        "use strict";
        return _
    }, b.getFlavorOptions = function (e) {
        "use strict";
        if (g.hasOwnProperty(e)) return g[e]
    }, b.getDefaultOptions = function (e) {
        "use strict";
        return a(e)
    }, b.subParser = function (e, r) {
        "use strict";
        if (b.helper.isString(e)) {
            if (void 0 === r) {
                if (t.hasOwnProperty(e)) return t[e];
                throw Error("SubParser named " + e + " not registered!")
            }
            t[e] = r
        }
    }, b.extension = function (e, r) {
        "use strict";
        if (!b.helper.isString(e)) throw Error("Extension 'name' must be a string");
        if (e = b.helper.stdExtName(e), b.helper.isUndefined(r)) {
            if (!p.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
            return p[e]
        }
        "function" == typeof r && (r = r()), b.helper.isArray(r) || (r = [r]);
        var t = d(r, e);
        if (!t.valid) throw Error(t.error);
        p[e] = r
    }, b.getAllExtensions = function () {
        "use strict";
        return p
    }, b.removeExtension = function (e) {
        "use strict";
        delete p[e]
    }, b.resetExtensions = function () {
        "use strict";
        p = {}
    }, b.validateExtension = function (e) {
        "use strict";
        var r = d(e, null);
        return !!r.valid || (console.warn(r.error), !1)
    }, b.hasOwnProperty("helper") || (b.helper = {}), b.helper.isString = function (e) {
        "use strict";
        return "string" == typeof e || e instanceof String
    }, b.helper.isFunction = function (e) {
        "use strict";
        return e && "[object Function]" === {}.toString.call(e)
    }, b.helper.isArray = function (e) {
        "use strict";
        return Array.isArray(e)
    }, b.helper.isUndefined = function (e) {
        "use strict";
        return void 0 === e
    }, b.helper.forEach = function (e, r) {
        "use strict";
        if (b.helper.isUndefined(e)) throw new Error("obj param is required");
        if (b.helper.isUndefined(r)) throw new Error("callback param is required");
        if (!b.helper.isFunction(r)) throw new Error("callback param must be a function/closure");
        if ("function" == typeof e.forEach) e.forEach(r); else if (b.helper.isArray(e)) for (var t = 0; t < e.length; t++) r(e[t], t, e); else {
            if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");
            for (var a in e) e.hasOwnProperty(a) && r(e[a], a, e)
        }
    }, b.helper.stdExtName = function (e) {
        "use strict";
        return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
    }, b.helper.escapeCharactersCallback = s, b.helper.escapeCharacters = function (e, r, t) {
        "use strict";
        var a = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
        t && (a = "\\\\" + a);
        var n = new RegExp(a, "g");
        return e.replace(n, s)
    }, b.helper.unescapeHTMLEntities = function (e) {
        "use strict";
        return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    };
    var m = function (e, r, t, a) {
        "use strict";
        var n, s, o, i, l, c = a || "", u = -1 < c.indexOf("g"), d = new RegExp(r + "|" + t, "g" + c.replace(/g/g, "")),
            p = new RegExp(r, c.replace(/g/g, "")), h = [];
        do {
            for (n = 0; o = d.exec(e);) if (p.test(o[0])) n++ || (i = (s = d.lastIndex) - o[0].length); else if (n && !--n) {
                l = o.index + o[0].length;
                var _ = {
                    left: {start: i, end: s},
                    match: {start: s, end: o.index},
                    right: {start: o.index, end: l},
                    wholeMatch: {start: i, end: l}
                };
                if (h.push(_), !u) return h
            }
        } while (n && (d.lastIndex = s));
        return h
    };
    b.helper.matchRecursiveRegExp = function (e, r, t, a) {
        "use strict";
        for (var n = m(e, r, t, a), s = [], o = 0; o < n.length; ++o) s.push([e.slice(n[o].wholeMatch.start, n[o].wholeMatch.end), e.slice(n[o].match.start, n[o].match.end), e.slice(n[o].left.start, n[o].left.end), e.slice(n[o].right.start, n[o].right.end)]);
        return s
    }, b.helper.replaceRecursiveRegExp = function (e, r, t, a, n) {
        "use strict";
        if (!b.helper.isFunction(r)) {
            var s = r;
            r = function () {
                return s
            }
        }
        var o = m(e, t, a, n), i = e, l = o.length;
        if (0 < l) {
            var c = [];
            0 !== o[0].wholeMatch.start && c.push(e.slice(0, o[0].wholeMatch.start));
            for (var u = 0; u < l; ++u) c.push(r(e.slice(o[u].wholeMatch.start, o[u].wholeMatch.end), e.slice(o[u].match.start, o[u].match.end), e.slice(o[u].left.start, o[u].left.end), e.slice(o[u].right.start, o[u].right.end))), u < l - 1 && c.push(e.slice(o[u].wholeMatch.end, o[u + 1].wholeMatch.start));
            o[l - 1].wholeMatch.end < e.length && c.push(e.slice(o[l - 1].wholeMatch.end)), i = c.join("")
        }
        return i
    }, b.helper.regexIndexOf = function (e, r, t) {
        "use strict";
        if (!b.helper.isString(e)) throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (r instanceof RegExp == 0) throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var a = e.substring(t || 0).search(r);
        return 0 <= a ? a + (t || 0) : a
    }, b.helper.splitAtIndex = function (e, r) {
        "use strict";
        if (!b.helper.isString(e)) throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [e.substring(0, r), e.substring(r)]
    }, b.helper.encodeEmailAddress = function (e) {
        "use strict";
        var t = [function (e) {
            return "&#" + e.charCodeAt(0) + ";"
        }, function (e) {
            return "&#x" + e.charCodeAt(0).toString(16) + ";"
        }, function (e) {
            return e
        }];
        return e.replace(/./g, function (e) {
            if ("@" === e) e = t[Math.floor(2 * Math.random())](e); else {
                var r = Math.random();
                e = .9 < r ? t[2](e) : .45 < r ? t[1](e) : t[0](e)
            }
            return e
        })
    }, b.helper.padEnd = function (e, r, t) {
        "use strict";
        return r >>= 0, t = String(t || " "), e.length > r ? String(e) : ((r -= e.length) > t.length && (t += t.repeat(r / t.length)), String(e) + t.slice(0, r))
    }, "undefined" == typeof console && (console = {
        warn: function (e) {
            "use strict";
            alert(e)
        }, log: function (e) {
            "use strict";
            alert(e)
        }, error: function (e) {
            "use strict";
            throw e
        }
    }), b.helper.regexes = {asteriskDashAndColon: /([*_:~])/g}, b.helper.emojis = {
        "+1": "ðŸ‘",
        "-1": "ðŸ‘Ž",
        100: "ðŸ’¯",
        1234: "ðŸ”¢",
        "1st_place_medal": "ðŸ¥‡",
        "2nd_place_medal": "ðŸ¥ˆ",
        "3rd_place_medal": "ðŸ¥‰",
        "8ball": "ðŸŽ±",
        a: "ðŸ…°ï¸",
        ab: "ðŸ†Ž",
        abc: "ðŸ”¤",
        abcd: "ðŸ”¡",
        accept: "ðŸ‰‘",
        aerial_tramway: "ðŸš¡",
        airplane: "âœˆï¸",
        alarm_clock: "â°",
        alembic: "âš—ï¸",
        alien: "ðŸ‘½",
        ambulance: "ðŸš‘",
        amphora: "ðŸº",
        anchor: "âš“ï¸",
        angel: "ðŸ‘¼",
        anger: "ðŸ’¢",
        angry: "ðŸ˜ ",
        anguished: "ðŸ˜§",
        ant: "ðŸœ",
        apple: "ðŸŽ",
        aquarius: "â™’ï¸",
        aries: "â™ˆï¸",
        arrow_backward: "â—€ï¸",
        arrow_double_down: "â¬",
        arrow_double_up: "â«",
        arrow_down: "â¬‡ï¸",
        arrow_down_small: "ðŸ”½",
        arrow_forward: "â–¶ï¸",
        arrow_heading_down: "â¤µï¸",
        arrow_heading_up: "â¤´ï¸",
        arrow_left: "â¬…ï¸",
        arrow_lower_left: "â†™ï¸",
        arrow_lower_right: "â†˜ï¸",
        arrow_right: "âž¡ï¸",
        arrow_right_hook: "â†ªï¸",
        arrow_up: "â¬†ï¸",
        arrow_up_down: "â†•ï¸",
        arrow_up_small: "ðŸ”¼",
        arrow_upper_left: "â†–ï¸",
        arrow_upper_right: "â†—ï¸",
        arrows_clockwise: "ðŸ”ƒ",
        arrows_counterclockwise: "ðŸ”„",
        art: "ðŸŽ¨",
        articulated_lorry: "ðŸš›",
        artificial_satellite: "ðŸ›°",
        astonished: "ðŸ˜²",
        athletic_shoe: "ðŸ‘Ÿ",
        atm: "ðŸ§",
        atom_symbol: "âš›ï¸",
        avocado: "ðŸ¥‘",
        b: "ðŸ…±ï¸",
        baby: "ðŸ‘¶",
        baby_bottle: "ðŸ¼",
        baby_chick: "ðŸ¤",
        baby_symbol: "ðŸš¼",
        back: "ðŸ”™",
        bacon: "ðŸ¥“",
        badminton: "ðŸ¸",
        baggage_claim: "ðŸ›„",
        baguette_bread: "ðŸ¥–",
        balance_scale: "âš–ï¸",
        balloon: "ðŸŽˆ",
        ballot_box: "ðŸ—³",
        ballot_box_with_check: "â˜‘ï¸",
        bamboo: "ðŸŽ",
        banana: "ðŸŒ",
        bangbang: "â€¼ï¸",
        bank: "ðŸ¦",
        bar_chart: "ðŸ“Š",
        barber: "ðŸ’ˆ",
        baseball: "âš¾ï¸",
        basketball: "ðŸ€",
        basketball_man: "â›¹ï¸",
        basketball_woman: "â›¹ï¸&zwj;â™€ï¸",
        bat: "ðŸ¦‡",
        bath: "ðŸ›€",
        bathtub: "ðŸ›",
        battery: "ðŸ”‹",
        beach_umbrella: "ðŸ–",
        bear: "ðŸ»",
        bed: "ðŸ›",
        bee: "ðŸ",
        beer: "ðŸº",
        beers: "ðŸ»",
        beetle: "ðŸž",
        beginner: "ðŸ”°",
        bell: "ðŸ””",
        bellhop_bell: "ðŸ›Ž",
        bento: "ðŸ±",
        biking_man: "ðŸš´",
        bike: "ðŸš²",
        biking_woman: "ðŸš´&zwj;â™€ï¸",
        bikini: "ðŸ‘™",
        biohazard: "â˜£ï¸",
        bird: "ðŸ¦",
        birthday: "ðŸŽ‚",
        black_circle: "âš«ï¸",
        black_flag: "ðŸ´",
        black_heart: "ðŸ–¤",
        black_joker: "ðŸƒ",
        black_large_square: "â¬›ï¸",
        black_medium_small_square: "â—¾ï¸",
        black_medium_square: "â—¼ï¸",
        black_nib: "âœ’ï¸",
        black_small_square: "â–ªï¸",
        black_square_button: "ðŸ”²",
        blonde_man: "ðŸ‘±",
        blonde_woman: "ðŸ‘±&zwj;â™€ï¸",
        blossom: "ðŸŒ¼",
        blowfish: "ðŸ¡",
        blue_book: "ðŸ“˜",
        blue_car: "ðŸš™",
        blue_heart: "ðŸ’™",
        blush: "ðŸ˜Š",
        boar: "ðŸ—",
        boat: "â›µï¸",
        bomb: "ðŸ’£",
        book: "ðŸ“–",
        bookmark: "ðŸ”–",
        bookmark_tabs: "ðŸ“‘",
        books: "ðŸ“š",
        boom: "ðŸ’¥",
        boot: "ðŸ‘¢",
        bouquet: "ðŸ’",
        bowing_man: "ðŸ™‡",
        bow_and_arrow: "ðŸ¹",
        bowing_woman: "ðŸ™‡&zwj;â™€ï¸",
        bowling: "ðŸŽ³",
        boxing_glove: "ðŸ¥Š",
        boy: "ðŸ‘¦",
        bread: "ðŸž",
        bride_with_veil: "ðŸ‘°",
        bridge_at_night: "ðŸŒ‰",
        briefcase: "ðŸ’¼",
        broken_heart: "ðŸ’”",
        bug: "ðŸ›",
        building_construction: "ðŸ—",
        bulb: "ðŸ’¡",
        bullettrain_front: "ðŸš…",
        bullettrain_side: "ðŸš„",
        burrito: "ðŸŒ¯",
        bus: "ðŸšŒ",
        business_suit_levitating: "ðŸ•´",
        busstop: "ðŸš",
        bust_in_silhouette: "ðŸ‘¤",
        busts_in_silhouette: "ðŸ‘¥",
        butterfly: "ðŸ¦‹",
        cactus: "ðŸŒµ",
        cake: "ðŸ°",
        calendar: "ðŸ“†",
        call_me_hand: "ðŸ¤™",
        calling: "ðŸ“²",
        camel: "ðŸ«",
        camera: "ðŸ“·",
        camera_flash: "ðŸ“¸",
        camping: "ðŸ•",
        cancer: "â™‹ï¸",
        candle: "ðŸ•¯",
        candy: "ðŸ¬",
        canoe: "ðŸ›¶",
        capital_abcd: "ðŸ” ",
        capricorn: "â™‘ï¸",
        car: "ðŸš—",
        card_file_box: "ðŸ—ƒ",
        card_index: "ðŸ“‡",
        card_index_dividers: "ðŸ—‚",
        carousel_horse: "ðŸŽ ",
        carrot: "ðŸ¥•",
        cat: "ðŸ±",
        cat2: "ðŸˆ",
        cd: "ðŸ’¿",
        chains: "â›“",
        champagne: "ðŸ¾",
        chart: "ðŸ’¹",
        chart_with_downwards_trend: "ðŸ“‰",
        chart_with_upwards_trend: "ðŸ“ˆ",
        checkered_flag: "ðŸ",
        cheese: "ðŸ§€",
        cherries: "ðŸ’",
        cherry_blossom: "ðŸŒ¸",
        chestnut: "ðŸŒ°",
        chicken: "ðŸ”",
        children_crossing: "ðŸš¸",
        chipmunk: "ðŸ¿",
        chocolate_bar: "ðŸ«",
        christmas_tree: "ðŸŽ„",
        church: "â›ªï¸",
        cinema: "ðŸŽ¦",
        circus_tent: "ðŸŽª",
        city_sunrise: "ðŸŒ‡",
        city_sunset: "ðŸŒ†",
        cityscape: "ðŸ™",
        cl: "ðŸ†‘",
        clamp: "ðŸ—œ",
        clap: "ðŸ‘",
        clapper: "ðŸŽ¬",
        classical_building: "ðŸ›",
        clinking_glasses: "ðŸ¥‚",
        clipboard: "ðŸ“‹",
        clock1: "ðŸ•",
        clock10: "ðŸ•™",
        clock1030: "ðŸ•¥",
        clock11: "ðŸ•š",
        clock1130: "ðŸ•¦",
        clock12: "ðŸ•›",
        clock1230: "ðŸ•§",
        clock130: "ðŸ•œ",
        clock2: "ðŸ•‘",
        clock230: "ðŸ•",
        clock3: "ðŸ•’",
        clock330: "ðŸ•ž",
        clock4: "ðŸ•“",
        clock430: "ðŸ•Ÿ",
        clock5: "ðŸ•”",
        clock530: "ðŸ• ",
        clock6: "ðŸ••",
        clock630: "ðŸ•¡",
        clock7: "ðŸ•–",
        clock730: "ðŸ•¢",
        clock8: "ðŸ•—",
        clock830: "ðŸ•£",
        clock9: "ðŸ•˜",
        clock930: "ðŸ•¤",
        closed_book: "ðŸ“•",
        closed_lock_with_key: "ðŸ”",
        closed_umbrella: "ðŸŒ‚",
        cloud: "â˜ï¸",
        cloud_with_lightning: "ðŸŒ©",
        cloud_with_lightning_and_rain: "â›ˆ",
        cloud_with_rain: "ðŸŒ§",
        cloud_with_snow: "ðŸŒ¨",
        clown_face: "ðŸ¤¡",
        clubs: "â™£ï¸",
        cocktail: "ðŸ¸",
        coffee: "â˜•ï¸",
        coffin: "âš°ï¸",
        cold_sweat: "ðŸ˜°",
        comet: "â˜„ï¸",
        computer: "ðŸ’»",
        computer_mouse: "ðŸ–±",
        confetti_ball: "ðŸŽŠ",
        confounded: "ðŸ˜–",
        confused: "ðŸ˜•",
        congratulations: "ãŠ—ï¸",
        construction: "ðŸš§",
        construction_worker_man: "ðŸ‘·",
        construction_worker_woman: "ðŸ‘·&zwj;â™€ï¸",
        control_knobs: "ðŸŽ›",
        convenience_store: "ðŸª",
        cookie: "ðŸª",
        cool: "ðŸ†’",
        policeman: "ðŸ‘®",
        copyright: "Â©ï¸",
        corn: "ðŸŒ½",
        couch_and_lamp: "ðŸ›‹",
        couple: "ðŸ‘«",
        couple_with_heart_woman_man: "ðŸ’‘",
        couple_with_heart_man_man: "ðŸ‘¨&zwj;â¤ï¸&zwj;ðŸ‘¨",
        couple_with_heart_woman_woman: "ðŸ‘©&zwj;â¤ï¸&zwj;ðŸ‘©",
        couplekiss_man_man: "ðŸ‘¨&zwj;â¤ï¸&zwj;ðŸ’‹&zwj;ðŸ‘¨",
        couplekiss_man_woman: "ðŸ’",
        couplekiss_woman_woman: "ðŸ‘©&zwj;â¤ï¸&zwj;ðŸ’‹&zwj;ðŸ‘©",
        cow: "ðŸ®",
        cow2: "ðŸ„",
        cowboy_hat_face: "ðŸ¤ ",
        crab: "ðŸ¦€",
        crayon: "ðŸ–",
        credit_card: "ðŸ’³",
        crescent_moon: "ðŸŒ™",
        cricket: "ðŸ",
        crocodile: "ðŸŠ",
        croissant: "ðŸ¥",
        crossed_fingers: "ðŸ¤ž",
        crossed_flags: "ðŸŽŒ",
        crossed_swords: "âš”ï¸",
        crown: "ðŸ‘‘",
        cry: "ðŸ˜¢",
        crying_cat_face: "ðŸ˜¿",
        crystal_ball: "ðŸ”®",
        cucumber: "ðŸ¥’",
        cupid: "ðŸ’˜",
        curly_loop: "âž°",
        currency_exchange: "ðŸ’±",
        curry: "ðŸ›",
        custard: "ðŸ®",
        customs: "ðŸ›ƒ",
        cyclone: "ðŸŒ€",
        dagger: "ðŸ—¡",
        dancer: "ðŸ’ƒ",
        dancing_women: "ðŸ‘¯",
        dancing_men: "ðŸ‘¯&zwj;â™‚ï¸",
        dango: "ðŸ¡",
        dark_sunglasses: "ðŸ•¶",
        dart: "ðŸŽ¯",
        dash: "ðŸ’¨",
        date: "ðŸ“…",
        deciduous_tree: "ðŸŒ³",
        deer: "ðŸ¦Œ",
        department_store: "ðŸ¬",
        derelict_house: "ðŸš",
        desert: "ðŸœ",
        desert_island: "ðŸ",
        desktop_computer: "ðŸ–¥",
        male_detective: "ðŸ•µï¸",
        diamond_shape_with_a_dot_inside: "ðŸ’ ",
        diamonds: "â™¦ï¸",
        disappointed: "ðŸ˜ž",
        disappointed_relieved: "ðŸ˜¥",
        dizzy: "ðŸ’«",
        dizzy_face: "ðŸ˜µ",
        do_not_litter: "ðŸš¯",
        dog: "ðŸ¶",
        dog2: "ðŸ•",
        dollar: "ðŸ’µ",
        dolls: "ðŸŽŽ",
        dolphin: "ðŸ¬",
        door: "ðŸšª",
        doughnut: "ðŸ©",
        dove: "ðŸ•Š",
        dragon: "ðŸ‰",
        dragon_face: "ðŸ²",
        dress: "ðŸ‘—",
        dromedary_camel: "ðŸª",
        drooling_face: "ðŸ¤¤",
        droplet: "ðŸ’§",
        drum: "ðŸ¥",
        duck: "ðŸ¦†",
        dvd: "ðŸ“€",
        "e-mail": "ðŸ“§",
        eagle: "ðŸ¦…",
        ear: "ðŸ‘‚",
        ear_of_rice: "ðŸŒ¾",
        earth_africa: "ðŸŒ",
        earth_americas: "ðŸŒŽ",
        earth_asia: "ðŸŒ",
        egg: "ðŸ¥š",
        eggplant: "ðŸ†",
        eight_pointed_black_star: "âœ´ï¸",
        eight_spoked_asterisk: "âœ³ï¸",
        electric_plug: "ðŸ”Œ",
        elephant: "ðŸ˜",
        email: "âœ‰ï¸",
        end: "ðŸ”š",
        envelope_with_arrow: "ðŸ“©",
        euro: "ðŸ’¶",
        european_castle: "ðŸ°",
        european_post_office: "ðŸ¤",
        evergreen_tree: "ðŸŒ²",
        exclamation: "â—ï¸",
        expressionless: "ðŸ˜‘",
        eye: "ðŸ‘",
        eye_speech_bubble: "ðŸ‘&zwj;ðŸ—¨",
        eyeglasses: "ðŸ‘“",
        eyes: "ðŸ‘€",
        face_with_head_bandage: "ðŸ¤•",
        face_with_thermometer: "ðŸ¤’",
        fist_oncoming: "ðŸ‘Š",
        factory: "ðŸ­",
        fallen_leaf: "ðŸ‚",
        family_man_woman_boy: "ðŸ‘ª",
        family_man_boy: "ðŸ‘¨&zwj;ðŸ‘¦",
        family_man_boy_boy: "ðŸ‘¨&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_man_girl: "ðŸ‘¨&zwj;ðŸ‘§",
        family_man_girl_boy: "ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_man_girl_girl: "ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_man_man_boy: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘¦",
        family_man_man_boy_boy: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_man_man_girl: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘§",
        family_man_man_girl_boy: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_man_man_girl_girl: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_man_woman_boy_boy: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_man_woman_girl: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘§",
        family_man_woman_girl_boy: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_man_woman_girl_girl: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_woman_boy: "ðŸ‘©&zwj;ðŸ‘¦",
        family_woman_boy_boy: "ðŸ‘©&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_woman_girl: "ðŸ‘©&zwj;ðŸ‘§",
        family_woman_girl_boy: "ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_woman_girl_girl: "ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_woman_woman_boy: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘¦",
        family_woman_woman_boy_boy: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_woman_woman_girl: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘§",
        family_woman_woman_girl_boy: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_woman_woman_girl_girl: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘§",
        fast_forward: "â©",
        fax: "ðŸ“ ",
        fearful: "ðŸ˜¨",
        feet: "ðŸ¾",
        female_detective: "ðŸ•µï¸&zwj;â™€ï¸",
        ferris_wheel: "ðŸŽ¡",
        ferry: "â›´",
        field_hockey: "ðŸ‘",
        file_cabinet: "ðŸ—„",
        file_folder: "ðŸ“",
        film_projector: "ðŸ“½",
        film_strip: "ðŸŽž",
        fire: "ðŸ”¥",
        fire_engine: "ðŸš’",
        fireworks: "ðŸŽ†",
        first_quarter_moon: "ðŸŒ“",
        first_quarter_moon_with_face: "ðŸŒ›",
        fish: "ðŸŸ",
        fish_cake: "ðŸ¥",
        fishing_pole_and_fish: "ðŸŽ£",
        fist_raised: "âœŠ",
        fist_left: "ðŸ¤›",
        fist_right: "ðŸ¤œ",
        flags: "ðŸŽ",
        flashlight: "ðŸ”¦",
        fleur_de_lis: "âšœï¸",
        flight_arrival: "ðŸ›¬",
        flight_departure: "ðŸ›«",
        floppy_disk: "ðŸ’¾",
        flower_playing_cards: "ðŸŽ´",
        flushed: "ðŸ˜³",
        fog: "ðŸŒ«",
        foggy: "ðŸŒ",
        football: "ðŸˆ",
        footprints: "ðŸ‘£",
        fork_and_knife: "ðŸ´",
        fountain: "â›²ï¸",
        fountain_pen: "ðŸ–‹",
        four_leaf_clover: "ðŸ€",
        fox_face: "ðŸ¦Š",
        framed_picture: "ðŸ–¼",
        free: "ðŸ†“",
        fried_egg: "ðŸ³",
        fried_shrimp: "ðŸ¤",
        fries: "ðŸŸ",
        frog: "ðŸ¸",
        frowning: "ðŸ˜¦",
        frowning_face: "â˜¹ï¸",
        frowning_man: "ðŸ™&zwj;â™‚ï¸",
        frowning_woman: "ðŸ™",
        middle_finger: "ðŸ–•",
        fuelpump: "â›½ï¸",
        full_moon: "ðŸŒ•",
        full_moon_with_face: "ðŸŒ",
        funeral_urn: "âš±ï¸",
        game_die: "ðŸŽ²",
        gear: "âš™ï¸",
        gem: "ðŸ’Ž",
        gemini: "â™Šï¸",
        ghost: "ðŸ‘»",
        gift: "ðŸŽ",
        gift_heart: "ðŸ’",
        girl: "ðŸ‘§",
        globe_with_meridians: "ðŸŒ",
        goal_net: "ðŸ¥…",
        goat: "ðŸ",
        golf: "â›³ï¸",
        golfing_man: "ðŸŒï¸",
        golfing_woman: "ðŸŒï¸&zwj;â™€ï¸",
        gorilla: "ðŸ¦",
        grapes: "ðŸ‡",
        green_apple: "ðŸ",
        green_book: "ðŸ“—",
        green_heart: "ðŸ’š",
        green_salad: "ðŸ¥—",
        grey_exclamation: "â•",
        grey_question: "â”",
        grimacing: "ðŸ˜¬",
        grin: "ðŸ˜",
        grinning: "ðŸ˜€",
        guardsman: "ðŸ’‚",
        guardswoman: "ðŸ’‚&zwj;â™€ï¸",
        guitar: "ðŸŽ¸",
        gun: "ðŸ”«",
        haircut_woman: "ðŸ’‡",
        haircut_man: "ðŸ’‡&zwj;â™‚ï¸",
        hamburger: "ðŸ”",
        hammer: "ðŸ”¨",
        hammer_and_pick: "âš’",
        hammer_and_wrench: "ðŸ› ",
        hamster: "ðŸ¹",
        hand: "âœ‹",
        handbag: "ðŸ‘œ",
        handshake: "ðŸ¤",
        hankey: "ðŸ’©",
        hatched_chick: "ðŸ¥",
        hatching_chick: "ðŸ£",
        headphones: "ðŸŽ§",
        hear_no_evil: "ðŸ™‰",
        heart: "â¤ï¸",
        heart_decoration: "ðŸ’Ÿ",
        heart_eyes: "ðŸ˜",
        heart_eyes_cat: "ðŸ˜»",
        heartbeat: "ðŸ’“",
        heartpulse: "ðŸ’—",
        hearts: "â™¥ï¸",
        heavy_check_mark: "âœ”ï¸",
        heavy_division_sign: "âž—",
        heavy_dollar_sign: "ðŸ’²",
        heavy_heart_exclamation: "â£ï¸",
        heavy_minus_sign: "âž–",
        heavy_multiplication_x: "âœ–ï¸",
        heavy_plus_sign: "âž•",
        helicopter: "ðŸš",
        herb: "ðŸŒ¿",
        hibiscus: "ðŸŒº",
        high_brightness: "ðŸ”†",
        high_heel: "ðŸ‘ ",
        hocho: "ðŸ”ª",
        hole: "ðŸ•³",
        honey_pot: "ðŸ¯",
        horse: "ðŸ´",
        horse_racing: "ðŸ‡",
        hospital: "ðŸ¥",
        hot_pepper: "ðŸŒ¶",
        hotdog: "ðŸŒ­",
        hotel: "ðŸ¨",
        hotsprings: "â™¨ï¸",
        hourglass: "âŒ›ï¸",
        hourglass_flowing_sand: "â³",
        house: "ðŸ ",
        house_with_garden: "ðŸ¡",
        houses: "ðŸ˜",
        hugs: "ðŸ¤—",
        hushed: "ðŸ˜¯",
        ice_cream: "ðŸ¨",
        ice_hockey: "ðŸ’",
        ice_skate: "â›¸",
        icecream: "ðŸ¦",
        id: "ðŸ†”",
        ideograph_advantage: "ðŸ‰",
        imp: "ðŸ‘¿",
        inbox_tray: "ðŸ“¥",
        incoming_envelope: "ðŸ“¨",
        tipping_hand_woman: "ðŸ’",
        information_source: "â„¹ï¸",
        innocent: "ðŸ˜‡",
        interrobang: "â‰ï¸",
        iphone: "ðŸ“±",
        izakaya_lantern: "ðŸ®",
        jack_o_lantern: "ðŸŽƒ",
        japan: "ðŸ—¾",
        japanese_castle: "ðŸ¯",
        japanese_goblin: "ðŸ‘º",
        japanese_ogre: "ðŸ‘¹",
        jeans: "ðŸ‘–",
        joy: "ðŸ˜‚",
        joy_cat: "ðŸ˜¹",
        joystick: "ðŸ•¹",
        kaaba: "ðŸ•‹",
        key: "ðŸ”‘",
        keyboard: "âŒ¨ï¸",
        keycap_ten: "ðŸ”Ÿ",
        kick_scooter: "ðŸ›´",
        kimono: "ðŸ‘˜",
        kiss: "ðŸ’‹",
        kissing: "ðŸ˜—",
        kissing_cat: "ðŸ˜½",
        kissing_closed_eyes: "ðŸ˜š",
        kissing_heart: "ðŸ˜˜",
        kissing_smiling_eyes: "ðŸ˜™",
        kiwi_fruit: "ðŸ¥",
        koala: "ðŸ¨",
        koko: "ðŸˆ",
        label: "ðŸ·",
        large_blue_circle: "ðŸ”µ",
        large_blue_diamond: "ðŸ”·",
        large_orange_diamond: "ðŸ”¶",
        last_quarter_moon: "ðŸŒ—",
        last_quarter_moon_with_face: "ðŸŒœ",
        latin_cross: "âœï¸",
        laughing: "ðŸ˜†",
        leaves: "ðŸƒ",
        ledger: "ðŸ“’",
        left_luggage: "ðŸ›…",
        left_right_arrow: "â†”ï¸",
        leftwards_arrow_with_hook: "â†©ï¸",
        lemon: "ðŸ‹",
        leo: "â™Œï¸",
        leopard: "ðŸ†",
        level_slider: "ðŸŽš",
        libra: "â™Žï¸",
        light_rail: "ðŸšˆ",
        link: "ðŸ”—",
        lion: "ðŸ¦",
        lips: "ðŸ‘„",
        lipstick: "ðŸ’„",
        lizard: "ðŸ¦Ž",
        lock: "ðŸ”’",
        lock_with_ink_pen: "ðŸ”",
        lollipop: "ðŸ­",
        loop: "âž¿",
        loud_sound: "ðŸ”Š",
        loudspeaker: "ðŸ“¢",
        love_hotel: "ðŸ©",
        love_letter: "ðŸ’Œ",
        low_brightness: "ðŸ”…",
        lying_face: "ðŸ¤¥",
        m: "â“‚ï¸",
        mag: "ðŸ”",
        mag_right: "ðŸ”Ž",
        mahjong: "ðŸ€„ï¸",
        mailbox: "ðŸ“«",
        mailbox_closed: "ðŸ“ª",
        mailbox_with_mail: "ðŸ“¬",
        mailbox_with_no_mail: "ðŸ“­",
        man: "ðŸ‘¨",
        man_artist: "ðŸ‘¨&zwj;ðŸŽ¨",
        man_astronaut: "ðŸ‘¨&zwj;ðŸš€",
        man_cartwheeling: "ðŸ¤¸&zwj;â™‚ï¸",
        man_cook: "ðŸ‘¨&zwj;ðŸ³",
        man_dancing: "ðŸ•º",
        man_facepalming: "ðŸ¤¦&zwj;â™‚ï¸",
        man_factory_worker: "ðŸ‘¨&zwj;ðŸ­",
        man_farmer: "ðŸ‘¨&zwj;ðŸŒ¾",
        man_firefighter: "ðŸ‘¨&zwj;ðŸš’",
        man_health_worker: "ðŸ‘¨&zwj;âš•ï¸",
        man_in_tuxedo: "ðŸ¤µ",
        man_judge: "ðŸ‘¨&zwj;âš–ï¸",
        man_juggling: "ðŸ¤¹&zwj;â™‚ï¸",
        man_mechanic: "ðŸ‘¨&zwj;ðŸ”§",
        man_office_worker: "ðŸ‘¨&zwj;ðŸ’¼",
        man_pilot: "ðŸ‘¨&zwj;âœˆï¸",
        man_playing_handball: "ðŸ¤¾&zwj;â™‚ï¸",
        man_playing_water_polo: "ðŸ¤½&zwj;â™‚ï¸",
        man_scientist: "ðŸ‘¨&zwj;ðŸ”¬",
        man_shrugging: "ðŸ¤·&zwj;â™‚ï¸",
        man_singer: "ðŸ‘¨&zwj;ðŸŽ¤",
        man_student: "ðŸ‘¨&zwj;ðŸŽ“",
        man_teacher: "ðŸ‘¨&zwj;ðŸ«",
        man_technologist: "ðŸ‘¨&zwj;ðŸ’»",
        man_with_gua_pi_mao: "ðŸ‘²",
        man_with_turban: "ðŸ‘³",
        tangerine: "ðŸŠ",
        mans_shoe: "ðŸ‘ž",
        mantelpiece_clock: "ðŸ•°",
        maple_leaf: "ðŸ",
        martial_arts_uniform: "ðŸ¥‹",
        mask: "ðŸ˜·",
        massage_woman: "ðŸ’†",
        massage_man: "ðŸ’†&zwj;â™‚ï¸",
        meat_on_bone: "ðŸ–",
        medal_military: "ðŸŽ–",
        medal_sports: "ðŸ…",
        mega: "ðŸ“£",
        melon: "ðŸˆ",
        memo: "ðŸ“",
        men_wrestling: "ðŸ¤¼&zwj;â™‚ï¸",
        menorah: "ðŸ•Ž",
        mens: "ðŸš¹",
        metal: "ðŸ¤˜",
        metro: "ðŸš‡",
        microphone: "ðŸŽ¤",
        microscope: "ðŸ”¬",
        milk_glass: "ðŸ¥›",
        milky_way: "ðŸŒŒ",
        minibus: "ðŸš",
        minidisc: "ðŸ’½",
        mobile_phone_off: "ðŸ“´",
        money_mouth_face: "ðŸ¤‘",
        money_with_wings: "ðŸ’¸",
        moneybag: "ðŸ’°",
        monkey: "ðŸ’",
        monkey_face: "ðŸµ",
        monorail: "ðŸš",
        moon: "ðŸŒ”",
        mortar_board: "ðŸŽ“",
        mosque: "ðŸ•Œ",
        motor_boat: "ðŸ›¥",
        motor_scooter: "ðŸ›µ",
        motorcycle: "ðŸ",
        motorway: "ðŸ›£",
        mount_fuji: "ðŸ—»",
        mountain: "â›°",
        mountain_biking_man: "ðŸšµ",
        mountain_biking_woman: "ðŸšµ&zwj;â™€ï¸",
        mountain_cableway: "ðŸš ",
        mountain_railway: "ðŸšž",
        mountain_snow: "ðŸ”",
        mouse: "ðŸ­",
        mouse2: "ðŸ",
        movie_camera: "ðŸŽ¥",
        moyai: "ðŸ—¿",
        mrs_claus: "ðŸ¤¶",
        muscle: "ðŸ’ª",
        mushroom: "ðŸ„",
        musical_keyboard: "ðŸŽ¹",
        musical_note: "ðŸŽµ",
        musical_score: "ðŸŽ¼",
        mute: "ðŸ”‡",
        nail_care: "ðŸ’…",
        name_badge: "ðŸ“›",
        national_park: "ðŸž",
        nauseated_face: "ðŸ¤¢",
        necktie: "ðŸ‘”",
        negative_squared_cross_mark: "âŽ",
        nerd_face: "ðŸ¤“",
        neutral_face: "ðŸ˜",
        new: "ðŸ†•",
        new_moon: "ðŸŒ‘",
        new_moon_with_face: "ðŸŒš",
        newspaper: "ðŸ“°",
        newspaper_roll: "ðŸ—ž",
        next_track_button: "â­",
        ng: "ðŸ†–",
        no_good_man: "ðŸ™…&zwj;â™‚ï¸",
        no_good_woman: "ðŸ™…",
        night_with_stars: "ðŸŒƒ",
        no_bell: "ðŸ”•",
        no_bicycles: "ðŸš³",
        no_entry: "â›”ï¸",
        no_entry_sign: "ðŸš«",
        no_mobile_phones: "ðŸ“µ",
        no_mouth: "ðŸ˜¶",
        no_pedestrians: "ðŸš·",
        no_smoking: "ðŸš­",
        "non-potable_water": "ðŸš±",
        nose: "ðŸ‘ƒ",
        notebook: "ðŸ““",
        notebook_with_decorative_cover: "ðŸ“”",
        notes: "ðŸŽ¶",
        nut_and_bolt: "ðŸ”©",
        o: "â­•ï¸",
        o2: "ðŸ…¾ï¸",
        ocean: "ðŸŒŠ",
        octopus: "ðŸ™",
        oden: "ðŸ¢",
        office: "ðŸ¢",
        oil_drum: "ðŸ›¢",
        ok: "ðŸ†—",
        ok_hand: "ðŸ‘Œ",
        ok_man: "ðŸ™†&zwj;â™‚ï¸",
        ok_woman: "ðŸ™†",
        old_key: "ðŸ—",
        older_man: "ðŸ‘´",
        older_woman: "ðŸ‘µ",
        om: "ðŸ•‰",
        on: "ðŸ”›",
        oncoming_automobile: "ðŸš˜",
        oncoming_bus: "ðŸš",
        oncoming_police_car: "ðŸš”",
        oncoming_taxi: "ðŸš–",
        open_file_folder: "ðŸ“‚",
        open_hands: "ðŸ‘",
        open_mouth: "ðŸ˜®",
        open_umbrella: "â˜‚ï¸",
        ophiuchus: "â›Ž",
        orange_book: "ðŸ“™",
        orthodox_cross: "â˜¦ï¸",
        outbox_tray: "ðŸ“¤",
        owl: "ðŸ¦‰",
        ox: "ðŸ‚",
        package: "ðŸ“¦",
        page_facing_up: "ðŸ“„",
        page_with_curl: "ðŸ“ƒ",
        pager: "ðŸ“Ÿ",
        paintbrush: "ðŸ–Œ",
        palm_tree: "ðŸŒ´",
        pancakes: "ðŸ¥ž",
        panda_face: "ðŸ¼",
        paperclip: "ðŸ“Ž",
        paperclips: "ðŸ–‡",
        parasol_on_ground: "â›±",
        parking: "ðŸ…¿ï¸",
        part_alternation_mark: "ã€½ï¸",
        partly_sunny: "â›…ï¸",
        passenger_ship: "ðŸ›³",
        passport_control: "ðŸ›‚",
        pause_button: "â¸",
        peace_symbol: "â˜®ï¸",
        peach: "ðŸ‘",
        peanuts: "ðŸ¥œ",
        pear: "ðŸ",
        pen: "ðŸ–Š",
        pencil2: "âœï¸",
        penguin: "ðŸ§",
        pensive: "ðŸ˜”",
        performing_arts: "ðŸŽ­",
        persevere: "ðŸ˜£",
        person_fencing: "ðŸ¤º",
        pouting_woman: "ðŸ™Ž",
        phone: "â˜Žï¸",
        pick: "â›",
        pig: "ðŸ·",
        pig2: "ðŸ–",
        pig_nose: "ðŸ½",
        pill: "ðŸ’Š",
        pineapple: "ðŸ",
        ping_pong: "ðŸ“",
        pisces: "â™“ï¸",
        pizza: "ðŸ•",
        place_of_worship: "ðŸ›",
        plate_with_cutlery: "ðŸ½",
        play_or_pause_button: "â¯",
        point_down: "ðŸ‘‡",
        point_left: "ðŸ‘ˆ",
        point_right: "ðŸ‘‰",
        point_up: "â˜ï¸",
        point_up_2: "ðŸ‘†",
        police_car: "ðŸš“",
        policewoman: "ðŸ‘®&zwj;â™€ï¸",
        poodle: "ðŸ©",
        popcorn: "ðŸ¿",
        post_office: "ðŸ£",
        postal_horn: "ðŸ“¯",
        postbox: "ðŸ“®",
        potable_water: "ðŸš°",
        potato: "ðŸ¥”",
        pouch: "ðŸ‘",
        poultry_leg: "ðŸ—",
        pound: "ðŸ’·",
        rage: "ðŸ˜¡",
        pouting_cat: "ðŸ˜¾",
        pouting_man: "ðŸ™Ž&zwj;â™‚ï¸",
        pray: "ðŸ™",
        prayer_beads: "ðŸ“¿",
        pregnant_woman: "ðŸ¤°",
        previous_track_button: "â®",
        prince: "ðŸ¤´",
        princess: "ðŸ‘¸",
        printer: "ðŸ–¨",
        purple_heart: "ðŸ’œ",
        purse: "ðŸ‘›",
        pushpin: "ðŸ“Œ",
        put_litter_in_its_place: "ðŸš®",
        question: "â“",
        rabbit: "ðŸ°",
        rabbit2: "ðŸ‡",
        racehorse: "ðŸŽ",
        racing_car: "ðŸŽ",
        radio: "ðŸ“»",
        radio_button: "ðŸ”˜",
        radioactive: "â˜¢ï¸",
        railway_car: "ðŸšƒ",
        railway_track: "ðŸ›¤",
        rainbow: "ðŸŒˆ",
        rainbow_flag: "ðŸ³ï¸&zwj;ðŸŒˆ",
        raised_back_of_hand: "ðŸ¤š",
        raised_hand_with_fingers_splayed: "ðŸ–",
        raised_hands: "ðŸ™Œ",
        raising_hand_woman: "ðŸ™‹",
        raising_hand_man: "ðŸ™‹&zwj;â™‚ï¸",
        ram: "ðŸ",
        ramen: "ðŸœ",
        rat: "ðŸ€",
        record_button: "âº",
        recycle: "â™»ï¸",
        red_circle: "ðŸ”´",
        registered: "Â®ï¸",
        relaxed: "â˜ºï¸",
        relieved: "ðŸ˜Œ",
        reminder_ribbon: "ðŸŽ—",
        repeat: "ðŸ”",
        repeat_one: "ðŸ”‚",
        rescue_worker_helmet: "â›‘",
        restroom: "ðŸš»",
        revolving_hearts: "ðŸ’ž",
        rewind: "âª",
        rhinoceros: "ðŸ¦",
        ribbon: "ðŸŽ€",
        rice: "ðŸš",
        rice_ball: "ðŸ™",
        rice_cracker: "ðŸ˜",
        rice_scene: "ðŸŽ‘",
        right_anger_bubble: "ðŸ—¯",
        ring: "ðŸ’",
        robot: "ðŸ¤–",
        rocket: "ðŸš€",
        rofl: "ðŸ¤£",
        roll_eyes: "ðŸ™„",
        roller_coaster: "ðŸŽ¢",
        rooster: "ðŸ“",
        rose: "ðŸŒ¹",
        rosette: "ðŸµ",
        rotating_light: "ðŸš¨",
        round_pushpin: "ðŸ“",
        rowing_man: "ðŸš£",
        rowing_woman: "ðŸš£&zwj;â™€ï¸",
        rugby_football: "ðŸ‰",
        running_man: "ðŸƒ",
        running_shirt_with_sash: "ðŸŽ½",
        running_woman: "ðŸƒ&zwj;â™€ï¸",
        sa: "ðŸˆ‚ï¸",
        sagittarius: "â™ï¸",
        sake: "ðŸ¶",
        sandal: "ðŸ‘¡",
        santa: "ðŸŽ…",
        satellite: "ðŸ“¡",
        saxophone: "ðŸŽ·",
        school: "ðŸ«",
        school_satchel: "ðŸŽ’",
        scissors: "âœ‚ï¸",
        scorpion: "ðŸ¦‚",
        scorpius: "â™ï¸",
        scream: "ðŸ˜±",
        scream_cat: "ðŸ™€",
        scroll: "ðŸ“œ",
        seat: "ðŸ’º",
        secret: "ãŠ™ï¸",
        see_no_evil: "ðŸ™ˆ",
        seedling: "ðŸŒ±",
        selfie: "ðŸ¤³",
        shallow_pan_of_food: "ðŸ¥˜",
        shamrock: "â˜˜ï¸",
        shark: "ðŸ¦ˆ",
        shaved_ice: "ðŸ§",
        sheep: "ðŸ‘",
        shell: "ðŸš",
        shield: "ðŸ›¡",
        shinto_shrine: "â›©",
        ship: "ðŸš¢",
        shirt: "ðŸ‘•",
        shopping: "ðŸ›",
        shopping_cart: "ðŸ›’",
        shower: "ðŸš¿",
        shrimp: "ðŸ¦",
        signal_strength: "ðŸ“¶",
        six_pointed_star: "ðŸ”¯",
        ski: "ðŸŽ¿",
        skier: "â›·",
        skull: "ðŸ’€",
        skull_and_crossbones: "â˜ ï¸",
        sleeping: "ðŸ˜´",
        sleeping_bed: "ðŸ›Œ",
        sleepy: "ðŸ˜ª",
        slightly_frowning_face: "ðŸ™",
        slightly_smiling_face: "ðŸ™‚",
        slot_machine: "ðŸŽ°",
        small_airplane: "ðŸ›©",
        small_blue_diamond: "ðŸ”¹",
        small_orange_diamond: "ðŸ”¸",
        small_red_triangle: "ðŸ”º",
        small_red_triangle_down: "ðŸ”»",
        smile: "ðŸ˜„",
        smile_cat: "ðŸ˜¸",
        smiley: "ðŸ˜ƒ",
        smiley_cat: "ðŸ˜º",
        smiling_imp: "ðŸ˜ˆ",
        smirk: "ðŸ˜",
        smirk_cat: "ðŸ˜¼",
        smoking: "ðŸš¬",
        snail: "ðŸŒ",
        snake: "ðŸ",
        sneezing_face: "ðŸ¤§",
        snowboarder: "ðŸ‚",
        snowflake: "â„ï¸",
        snowman: "â›„ï¸",
        snowman_with_snow: "â˜ƒï¸",
        sob: "ðŸ˜­",
        soccer: "âš½ï¸",
        soon: "ðŸ”œ",
        sos: "ðŸ†˜",
        sound: "ðŸ”‰",
        space_invader: "ðŸ‘¾",
        spades: "â™ ï¸",
        spaghetti: "ðŸ",
        sparkle: "â‡ï¸",
        sparkler: "ðŸŽ‡",
        sparkles: "âœ¨",
        sparkling_heart: "ðŸ’–",
        speak_no_evil: "ðŸ™Š",
        speaker: "ðŸ”ˆ",
        speaking_head: "ðŸ—£",
        speech_balloon: "ðŸ’¬",
        speedboat: "ðŸš¤",
        spider: "ðŸ•·",
        spider_web: "ðŸ•¸",
        spiral_calendar: "ðŸ—“",
        spiral_notepad: "ðŸ—’",
        spoon: "ðŸ¥„",
        squid: "ðŸ¦‘",
        stadium: "ðŸŸ",
        star: "â­ï¸",
        star2: "ðŸŒŸ",
        star_and_crescent: "â˜ªï¸",
        star_of_david: "âœ¡ï¸",
        stars: "ðŸŒ ",
        station: "ðŸš‰",
        statue_of_liberty: "ðŸ—½",
        steam_locomotive: "ðŸš‚",
        stew: "ðŸ²",
        stop_button: "â¹",
        stop_sign: "ðŸ›‘",
        stopwatch: "â±",
        straight_ruler: "ðŸ“",
        strawberry: "ðŸ“",
        stuck_out_tongue: "ðŸ˜›",
        stuck_out_tongue_closed_eyes: "ðŸ˜",
        stuck_out_tongue_winking_eye: "ðŸ˜œ",
        studio_microphone: "ðŸŽ™",
        stuffed_flatbread: "ðŸ¥™",
        sun_behind_large_cloud: "ðŸŒ¥",
        sun_behind_rain_cloud: "ðŸŒ¦",
        sun_behind_small_cloud: "ðŸŒ¤",
        sun_with_face: "ðŸŒž",
        sunflower: "ðŸŒ»",
        sunglasses: "ðŸ˜Ž",
        sunny: "â˜€ï¸",
        sunrise: "ðŸŒ…",
        sunrise_over_mountains: "ðŸŒ„",
        surfing_man: "ðŸ„",
        surfing_woman: "ðŸ„&zwj;â™€ï¸",
        sushi: "ðŸ£",
        suspension_railway: "ðŸšŸ",
        sweat: "ðŸ˜“",
        sweat_drops: "ðŸ’¦",
        sweat_smile: "ðŸ˜…",
        sweet_potato: "ðŸ ",
        swimming_man: "ðŸŠ",
        swimming_woman: "ðŸŠ&zwj;â™€ï¸",
        symbols: "ðŸ”£",
        synagogue: "ðŸ•",
        syringe: "ðŸ’‰",
        taco: "ðŸŒ®",
        tada: "ðŸŽ‰",
        tanabata_tree: "ðŸŽ‹",
        taurus: "â™‰ï¸",
        taxi: "ðŸš•",
        tea: "ðŸµ",
        telephone_receiver: "ðŸ“ž",
        telescope: "ðŸ”­",
        tennis: "ðŸŽ¾",
        tent: "â›ºï¸",
        thermometer: "ðŸŒ¡",
        thinking: "ðŸ¤”",
        thought_balloon: "ðŸ’­",
        ticket: "ðŸŽ«",
        tickets: "ðŸŽŸ",
        tiger: "ðŸ¯",
        tiger2: "ðŸ…",
        timer_clock: "â²",
        tipping_hand_man: "ðŸ’&zwj;â™‚ï¸",
        tired_face: "ðŸ˜«",
        tm: "â„¢ï¸",
        toilet: "ðŸš½",
        tokyo_tower: "ðŸ—¼",
        tomato: "ðŸ…",
        tongue: "ðŸ‘…",
        top: "ðŸ”",
        tophat: "ðŸŽ©",
        tornado: "ðŸŒª",
        trackball: "ðŸ–²",
        tractor: "ðŸšœ",
        traffic_light: "ðŸš¥",
        train: "ðŸš‹",
        train2: "ðŸš†",
        tram: "ðŸšŠ",
        triangular_flag_on_post: "ðŸš©",
        triangular_ruler: "ðŸ“",
        trident: "ðŸ”±",
        triumph: "ðŸ˜¤",
        trolleybus: "ðŸšŽ",
        trophy: "ðŸ†",
        tropical_drink: "ðŸ¹",
        tropical_fish: "ðŸ ",
        truck: "ðŸšš",
        trumpet: "ðŸŽº",
        tulip: "ðŸŒ·",
        tumbler_glass: "ðŸ¥ƒ",
        turkey: "ðŸ¦ƒ",
        turtle: "ðŸ¢",
        tv: "ðŸ“º",
        twisted_rightwards_arrows: "ðŸ”€",
        two_hearts: "ðŸ’•",
        two_men_holding_hands: "ðŸ‘¬",
        two_women_holding_hands: "ðŸ‘­",
        u5272: "ðŸˆ¹",
        u5408: "ðŸˆ´",
        u55b6: "ðŸˆº",
        u6307: "ðŸˆ¯ï¸",
        u6708: "ðŸˆ·ï¸",
        u6709: "ðŸˆ¶",
        u6e80: "ðŸˆµ",
        u7121: "ðŸˆšï¸",
        u7533: "ðŸˆ¸",
        u7981: "ðŸˆ²",
        u7a7a: "ðŸˆ³",
        umbrella: "â˜”ï¸",
        unamused: "ðŸ˜’",
        underage: "ðŸ”ž",
        unicorn: "ðŸ¦„",
        unlock: "ðŸ”“",
        up: "ðŸ†™",
        upside_down_face: "ðŸ™ƒ",
        v: "âœŒï¸",
        vertical_traffic_light: "ðŸš¦",
        vhs: "ðŸ“¼",
        vibration_mode: "ðŸ“³",
        video_camera: "ðŸ“¹",
        video_game: "ðŸŽ®",
        violin: "ðŸŽ»",
        virgo: "â™ï¸",
        volcano: "ðŸŒ‹",
        volleyball: "ðŸ",
        vs: "ðŸ†š",
        vulcan_salute: "ðŸ––",
        walking_man: "ðŸš¶",
        walking_woman: "ðŸš¶&zwj;â™€ï¸",
        waning_crescent_moon: "ðŸŒ˜",
        waning_gibbous_moon: "ðŸŒ–",
        warning: "âš ï¸",
        wastebasket: "ðŸ—‘",
        watch: "âŒšï¸",
        water_buffalo: "ðŸƒ",
        watermelon: "ðŸ‰",
        wave: "ðŸ‘‹",
        wavy_dash: "ã€°ï¸",
        waxing_crescent_moon: "ðŸŒ’",
        wc: "ðŸš¾",
        weary: "ðŸ˜©",
        wedding: "ðŸ’’",
        weight_lifting_man: "ðŸ‹ï¸",
        weight_lifting_woman: "ðŸ‹ï¸&zwj;â™€ï¸",
        whale: "ðŸ³",
        whale2: "ðŸ‹",
        wheel_of_dharma: "â˜¸ï¸",
        wheelchair: "â™¿ï¸",
        white_check_mark: "âœ…",
        white_circle: "âšªï¸",
        white_flag: "ðŸ³ï¸",
        white_flower: "ðŸ’®",
        white_large_square: "â¬œï¸",
        white_medium_small_square: "â—½ï¸",
        white_medium_square: "â—»ï¸",
        white_small_square: "â–«ï¸",
        white_square_button: "ðŸ”³",
        wilted_flower: "ðŸ¥€",
        wind_chime: "ðŸŽ",
        wind_face: "ðŸŒ¬",
        wine_glass: "ðŸ·",
        wink: "ðŸ˜‰",
        wolf: "ðŸº",
        woman: "ðŸ‘©",
        woman_artist: "ðŸ‘©&zwj;ðŸŽ¨",
        woman_astronaut: "ðŸ‘©&zwj;ðŸš€",
        woman_cartwheeling: "ðŸ¤¸&zwj;â™€ï¸",
        woman_cook: "ðŸ‘©&zwj;ðŸ³",
        woman_facepalming: "ðŸ¤¦&zwj;â™€ï¸",
        woman_factory_worker: "ðŸ‘©&zwj;ðŸ­",
        woman_farmer: "ðŸ‘©&zwj;ðŸŒ¾",
        woman_firefighter: "ðŸ‘©&zwj;ðŸš’",
        woman_health_worker: "ðŸ‘©&zwj;âš•ï¸",
        woman_judge: "ðŸ‘©&zwj;âš–ï¸",
        woman_juggling: "ðŸ¤¹&zwj;â™€ï¸",
        woman_mechanic: "ðŸ‘©&zwj;ðŸ”§",
        woman_office_worker: "ðŸ‘©&zwj;ðŸ’¼",
        woman_pilot: "ðŸ‘©&zwj;âœˆï¸",
        woman_playing_handball: "ðŸ¤¾&zwj;â™€ï¸",
        woman_playing_water_polo: "ðŸ¤½&zwj;â™€ï¸",
        woman_scientist: "ðŸ‘©&zwj;ðŸ”¬",
        woman_shrugging: "ðŸ¤·&zwj;â™€ï¸",
        woman_singer: "ðŸ‘©&zwj;ðŸŽ¤",
        woman_student: "ðŸ‘©&zwj;ðŸŽ“",
        woman_teacher: "ðŸ‘©&zwj;ðŸ«",
        woman_technologist: "ðŸ‘©&zwj;ðŸ’»",
        woman_with_turban: "ðŸ‘³&zwj;â™€ï¸",
        womans_clothes: "ðŸ‘š",
        womans_hat: "ðŸ‘’",
        women_wrestling: "ðŸ¤¼&zwj;â™€ï¸",
        womens: "ðŸšº",
        world_map: "ðŸ—º",
        worried: "ðŸ˜Ÿ",
        wrench: "ðŸ”§",
        writing_hand: "âœï¸",
        x: "âŒ",
        yellow_heart: "ðŸ’›",
        yen: "ðŸ’´",
        yin_yang: "â˜¯ï¸",
        yum: "ðŸ˜‹",
        zap: "âš¡ï¸",
        zipper_mouth_face: "ðŸ¤",
        zzz: "ðŸ’¤",
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
    }, b.Converter = function (t) {
        "use strict";

        function a(e, r) {
            if (r = r || null, b.helper.isString(e)) {
                if (r = e = b.helper.stdExtName(e), b.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), void function (e, r) {
                    "function" == typeof e && (e = e(new b.Converter)), b.helper.isArray(e) || (e = [e]);
                    var t = d(e, r);
                    if (!t.valid) throw Error(t.error);
                    for (var a = 0; a < e.length; ++a) switch (e[a].type) {
                        case"lang":
                            i.push(e[a]);
                            break;
                        case"output":
                            l.push(e[a]);
                            break;
                        default:
                            throw Error("Extension loader error: Type unrecognized!!!")
                    }
                }(b.extensions[e], e);
                if (b.helper.isUndefined(p[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                e = p[e]
            }
            "function" == typeof e && (e = e()), b.helper.isArray(e) || (e = [e]);
            var t = d(e, r);
            if (!t.valid) throw Error(t.error);
            for (var a = 0; a < e.length; ++a) {
                switch (e[a].type) {
                    case"lang":
                        i.push(e[a]);
                        break;
                    case"output":
                        l.push(e[a])
                }
                if (e[a].hasOwnProperty("listeners")) for (var n in e[a].listeners) e[a].listeners.hasOwnProperty(n) && s(n, e[a].listeners[n])
            }
        }

        function s(e, r) {
            if (!b.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
            if ("function" != typeof r) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof r + " given");
            c.hasOwnProperty(e) || (c[e] = []), c[e].push(r)
        }

        var o = {}, i = [], l = [], c = {}, n = _, u = {parsed: {}, raw: "", format: ""};
        !function () {
            for (var e in t = t || {}, h) h.hasOwnProperty(e) && (o[e] = h[e]);
            if ("object" != typeof t) throw Error("Converter expects the passed parameter to be an object, but " + typeof t + " was passed instead.");
            for (var r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
            o.extensions && b.helper.forEach(o.extensions, a)
        }(), this._dispatch = function (e, r, t, a) {
            if (c.hasOwnProperty(e)) for (var n = 0; n < c[e].length; ++n) {
                var s = c[e][n](e, r, this, t, a);
                s && void 0 !== s && (r = s)
            }
            return r
        }, this.listen = function (e, r) {
            return s(e, r), this
        }, this.makeHtml = function (r) {
            if (!r) return r;
            var e, t, a, n = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: i,
                outputModifiers: l,
                converter: this,
                ghCodeBlocks: [],
                metadata: {parsed: {}, raw: "", format: ""}
            };
            return r = (r = (r = (r = (r = r.replace(/Â¨/g, "Â¨T")).replace(/\$/g, "Â¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"), o.smartIndentationFix && (t = (e = r).match(/^\s*/)[0].length, a = new RegExp("^\\s{0," + t + "}", "gm"), r = e.replace(a, "")), r = "\n\n" + r + "\n\n", r = (r = b.subParser("detab")(r, o, n)).replace(/^[ \t]+$/gm, ""), b.helper.forEach(i, function (e) {
                r = b.subParser("runExtension")(e, r, o, n)
            }), r = b.subParser("metadata")(r, o, n), r = b.subParser("hashPreCodeTags")(r, o, n), r = b.subParser("githubCodeBlocks")(r, o, n), r = b.subParser("hashHTMLBlocks")(r, o, n), r = b.subParser("hashCodeTags")(r, o, n), r = b.subParser("stripLinkDefinitions")(r, o, n), r = b.subParser("blockGamut")(r, o, n), r = b.subParser("unhashHTMLSpans")(r, o, n), r = (r = (r = b.subParser("unescapeSpecialChars")(r, o, n)).replace(/Â¨D/g, "$$")).replace(/Â¨T/g, "Â¨"), r = b.subParser("completeHTMLDocument")(r, o, n), b.helper.forEach(l, function (e) {
                r = b.subParser("runExtension")(e, r, o, n)
            }), u = n.metadata, r
        }, this.makeMarkdown = this.makeMd = function (e, r) {
            if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">Â¨NBSP;<"), !r) {
                if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                r = window.document
            }
            var c = r.createElement("div");
            c.innerHTML = e;
            var t = {
                preList: function (e) {
                    for (var r = c.querySelectorAll("pre"), t = [], a = 0; a < r.length; ++a) if (1 === r[a].childElementCount && "code" === r[a].firstChild.tagName.toLowerCase()) {
                        var n = r[a].firstChild.innerHTML.trim(),
                            s = r[a].firstChild.getAttribute("data-language") || "";
                        if ("" === s) for (var o = r[a].firstChild.className.split(" "), i = 0; i < o.length; ++i) {
                            var l = o[i].match(/^language-(.+)$/);
                            if (null !== l) {
                                s = l[1];
                                break
                            }
                        }
                        n = b.helper.unescapeHTMLEntities(n), t.push(n), r[a].outerHTML = '<precode language="' + s + '" precodenum="' + a.toString() + '"></precode>'
                    } else t.push(r[a].innerHTML), r[a].innerHTML = "", r[a].setAttribute("prenum", a.toString());
                    return t
                }()
            };
            !function e(r) {
                for (var t = 0; t < r.childNodes.length; ++t) {
                    var a = r.childNodes[t];
                    3 === a.nodeType ? /\S/.test(a.nodeValue) ? (a.nodeValue = a.nodeValue.split("\n").join(" "), a.nodeValue = a.nodeValue.replace(/(\s)+/g, "$1")) : (r.removeChild(a), --t) : 1 === a.nodeType && e(a)
                }
            }(c);
            for (var a = c.childNodes, n = "", s = 0; s < a.length; s++) n += b.subParser("makeMarkdown.node")(a[s], t);
            return n
        }, this.setOption = function (e, r) {
            o[e] = r
        }, this.getOption = function (e) {
            return o[e]
        }, this.getOptions = function () {
            return o
        }, this.addExtension = function (e, r) {
            a(e, r = r || null)
        }, this.useExtension = function (e) {
            a(e)
        }, this.setFlavor = function (e) {
            if (!g.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            var r = g[e];
            for (var t in n = e, r) r.hasOwnProperty(t) && (o[t] = r[t])
        }, this.getFlavor = function () {
            return n
        }, this.removeExtension = function (e) {
            b.helper.isArray(e) || (e = [e]);
            for (var r = 0; r < e.length; ++r) {
                for (var t = e[r], a = 0; a < i.length; ++a) i[a] === t && i[a].splice(a, 1);
                for (; 0 < l.length; ++a) l[0] === t && l[0].splice(a, 1)
            }
        }, this.getAllExtensions = function () {
            return {language: i, output: l}
        }, this.getMetadata = function (e) {
            return e ? u.raw : u.parsed
        }, this.getMetadataFormat = function () {
            return u.format
        }, this._setMetadataPair = function (e, r) {
            u.parsed[e] = r
        }, this._setMetadataFormat = function (e) {
            u.format = e
        }, this._setMetadataRaw = function (e) {
            u.raw = e
        }
    }, b.subParser("anchors", function (e, l, c) {
        "use strict";
        var r = function (e, r, t, a, n, s, o) {
            if (b.helper.isUndefined(o) && (o = ""), t = t.toLowerCase(), -1 < e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)) a = ""; else if (!a) {
                if (t || (t = r.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + t, b.helper.isUndefined(c.gUrls[t])) return e;
                a = c.gUrls[t], b.helper.isUndefined(c.gTitles[t]) || (o = c.gTitles[t])
            }
            var i = '<a href="' + (a = a.replace(b.helper.regexes.asteriskDashAndColon, b.helper.escapeCharactersCallback)) + '"';
            return "" !== o && null !== o && (i += ' title="' + (o = (o = o.replace(/"/g, "&quot;")).replace(b.helper.regexes.asteriskDashAndColon, b.helper.escapeCharactersCallback)) + '"'), l.openLinksInNewWindow && !/^#/.test(a) && (i += ' target="Â¨E95Eblank"'), i + ">" + r + "</a>"
        };
        return e = (e = (e = (e = (e = c.converter._dispatch("anchors.before", e, l, c)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r)).replace(/\[([^\[\]]+)]()()()()()/g, r), l.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, function (e, r, t, a, n) {
            if ("\\" === t) return r + a;
            if (!b.helper.isString(l.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
            var s = l.ghMentionsLink.replace(/\{u}/g, n), o = "";
            return l.openLinksInNewWindow && (o = ' target="Â¨E95Eblank"'), r + '<a href="' + s + '"' + o + ">" + a + "</a>"
        })), c.converter._dispatch("anchors.after", e, l, c)
    });
    var n = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
        o = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
        i = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
        l = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
        c = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, u = function (p) {
            "use strict";
            return function (e, r, t, a, n, s, o) {
                var i = t = t.replace(b.helper.regexes.asteriskDashAndColon, b.helper.escapeCharactersCallback), l = "",
                    c = "", u = r || "", d = o || "";
                return /^www\./i.test(t) && (t = t.replace(/^www\./i, "http://www.")), p.excludeTrailingPunctuationFromURLs && s && (l = s), p.openLinksInNewWindow && (c = ' target="Â¨E95Eblank"'), u + '<a href="' + t + '"' + c + ">" + i + "</a>" + l + d
            }
        }, f = function (n, s) {
            "use strict";
            return function (e, r, t) {
                var a = "mailto:";
                return r = r || "", t = b.subParser("unescapeSpecialChars")(t, n, s), n.encodeEmails ? (a = b.helper.encodeEmailAddress(a + t), t = b.helper.encodeEmailAddress(t)) : a += t, r + '<a href="' + a + '">' + t + "</a>"
            }
        };
    b.subParser("autoLinks", function (e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("autoLinks.before", e, r, t)).replace(i, u(r))).replace(c, f(r, t)), t.converter._dispatch("autoLinks.after", e, r, t)
    }), b.subParser("simplifiedAutoLinks", function (e, r, t) {
        "use strict";
        return r.simplifiedAutoLink ? (e = t.converter._dispatch("simplifiedAutoLinks.before", e, r, t), e = (e = r.excludeTrailingPunctuationFromURLs ? e.replace(o, u(r)) : e.replace(n, u(r))).replace(l, f(r, t)), e = t.converter._dispatch("simplifiedAutoLinks.after", e, r, t)) : e
    }), b.subParser("blockGamut", function (e, r, t) {
        "use strict";
        return e = t.converter._dispatch("blockGamut.before", e, r, t), e = b.subParser("blockQuotes")(e, r, t), e = b.subParser("headers")(e, r, t), e = b.subParser("horizontalRule")(e, r, t), e = b.subParser("lists")(e, r, t), e = b.subParser("codeBlocks")(e, r, t), e = b.subParser("tables")(e, r, t), e = b.subParser("hashHTMLBlocks")(e, r, t), e = b.subParser("paragraphs")(e, r, t), t.converter._dispatch("blockGamut.after", e, r, t)
    }), b.subParser("blockQuotes", function (e, r, t) {
        "use strict";
        e = t.converter._dispatch("blockQuotes.before", e, r, t), e += "\n\n";
        var a = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return r.splitAdjacentBlockquotes && (a = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(a, function (e) {
            return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/Â¨0/g, "")).replace(/^[ \t]+$/gm, ""), e = b.subParser("githubCodeBlocks")(e, r, t), e = (e = (e = b.subParser("blockGamut")(e, r, t)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, r) {
                var t = r;
                return (t = t.replace(/^  /gm, "Â¨0")).replace(/Â¨0/g, "")
            }), b.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", r, t)
        }), t.converter._dispatch("blockQuotes.after", e, r, t)
    }), b.subParser("codeBlocks", function (e, o, i) {
        "use strict";
        return e = i.converter._dispatch("codeBlocks.before", e, o, i), e = (e = (e += "Â¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=Â¨0))/g, function (e, r, t) {
            var a = r, n = t, s = "\n";
            return a = b.subParser("outdent")(a, o, i), a = b.subParser("encodeCode")(a, o, i), a = (a = (a = b.subParser("detab")(a, o, i)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), o.omitExtraWLInCodeBlocks && (s = ""), a = "<pre><code>" + a + s + "</code></pre>", b.subParser("hashBlock")(a, o, i) + n
        })).replace(/Â¨0/, ""), i.converter._dispatch("codeBlocks.after", e, o, i)
    }), b.subParser("codeSpans", function (e, s, o) {
        "use strict";
        return void 0 === (e = o.converter._dispatch("codeSpans.before", e, s, o)) && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (e, r, t, a) {
            var n = a;
            return n = (n = n.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), n = r + "<code>" + (n = b.subParser("encodeCode")(n, s, o)) + "</code>", b.subParser("hashHTMLSpans")(n, s, o)
        }), o.converter._dispatch("codeSpans.after", e, s, o)
    }), b.subParser("completeHTMLDocument", function (e, r, t) {
        "use strict";
        if (!r.completeHTMLDocument) return e;
        e = t.converter._dispatch("completeHTMLDocument.before", e, r, t);
        var a = "html", n = "<!DOCTYPE HTML>\n", s = "", o = '<meta charset="utf-8">\n', i = "", l = "";
        for (var c in void 0 !== t.metadata.parsed.doctype && (n = "<!DOCTYPE " + t.metadata.parsed.doctype + ">\n", "html" !== (a = t.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== a || (o = '<meta charset="utf-8">')), t.metadata.parsed) if (t.metadata.parsed.hasOwnProperty(c)) switch (c.toLowerCase()) {
            case"doctype":
                break;
            case"title":
                s = "<title>" + t.metadata.parsed.title + "</title>\n";
                break;
            case"charset":
                o = "html" === a || "html5" === a ? '<meta charset="' + t.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + t.metadata.parsed.charset + '">\n';
                break;
            case"language":
            case"lang":
                i = ' lang="' + t.metadata.parsed[c] + '"', l += '<meta name="' + c + '" content="' + t.metadata.parsed[c] + '">\n';
                break;
            default:
                l += '<meta name="' + c + '" content="' + t.metadata.parsed[c] + '">\n'
        }
        return e = n + "<html" + i + ">\n<head>\n" + s + o + l + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", t.converter._dispatch("completeHTMLDocument.after", e, r, t)
    }), b.subParser("detab", function (e, r, t) {
        "use strict";
        return e = (e = (e = (e = (e = (e = t.converter._dispatch("detab.before", e, r, t)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "Â¨AÂ¨B")).replace(/Â¨B(.+?)Â¨A/g, function (e, r) {
            for (var t = r, a = 4 - t.length % 4, n = 0; n < a; n++) t += " ";
            return t
        })).replace(/Â¨A/g, "    ")).replace(/Â¨B/g, ""), t.converter._dispatch("detab.after", e, r, t)
    }), b.subParser("ellipsis", function (e, r, t) {
        "use strict";
        return e = (e = t.converter._dispatch("ellipsis.before", e, r, t)).replace(/\.\.\./g, "â€¦"), t.converter._dispatch("ellipsis.after", e, r, t)
    }), b.subParser("emoji", function (e, r, t) {
        "use strict";
        return r.emoji ? (e = (e = t.converter._dispatch("emoji.before", e, r, t)).replace(/:([\S]+?):/g, function (e, r) {
            return b.helper.emojis.hasOwnProperty(r) ? b.helper.emojis[r] : e
        }), t.converter._dispatch("emoji.after", e, r, t)) : e
    }), b.subParser("encodeAmpsAndAngles", function (e, r, t) {
        "use strict";
        return e = (e = (e = (e = (e = t.converter._dispatch("encodeAmpsAndAngles.before", e, r, t)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), t.converter._dispatch("encodeAmpsAndAngles.after", e, r, t)
    }), b.subParser("encodeBackslashEscapes", function (e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("encodeBackslashEscapes.before", e, r, t)).replace(/\\(\\)/g, b.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, b.helper.escapeCharactersCallback), t.converter._dispatch("encodeBackslashEscapes.after", e, r, t)
    }), b.subParser("encodeCode", function (e, r, t) {
        "use strict";
        return e = (e = t.converter._dispatch("encodeCode.before", e, r, t)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, b.helper.escapeCharactersCallback), t.converter._dispatch("encodeCode.after", e, r, t)
    }), b.subParser("escapeSpecialCharsWithinTagAttributes", function (e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, r, t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, function (e) {
            return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, b.helper.escapeCharactersCallback)
        })).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, function (e) {
            return e.replace(/([\\`*_~=|])/g, b.helper.escapeCharactersCallback)
        }), t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, r, t)
    }), b.subParser("githubCodeBlocks", function (e, s, o) {
        "use strict";
        return s.ghCodeBlocks ? (e = o.converter._dispatch("githubCodeBlocks.before", e, s, o), e = (e = (e += "Â¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (e, r, t, a) {
            var n = s.omitExtraWLInCodeBlocks ? "" : "\n";
            return a = b.subParser("encodeCode")(a, s, o), a = "<pre><code" + (t ? ' class="' + t + " language-" + t + '"' : "") + ">" + (a = (a = (a = b.subParser("detab")(a, s, o)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + n + "</code></pre>", a = b.subParser("hashBlock")(a, s, o), "\n\nÂ¨G" + (o.ghCodeBlocks.push({
                text: e,
                codeblock: a
            }) - 1) + "G\n\n"
        })).replace(/Â¨0/, ""), o.converter._dispatch("githubCodeBlocks.after", e, s, o)) : e
    }), b.subParser("hashBlock", function (e, r, t) {
        "use strict";
        return e = (e = t.converter._dispatch("hashBlock.before", e, r, t)).replace(/(^\n+|\n+$)/g, ""), e = "\n\nÂ¨K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n", t.converter._dispatch("hashBlock.after", e, r, t)
    }), b.subParser("hashCodeTags", function (e, s, o) {
        "use strict";
        return e = o.converter._dispatch("hashCodeTags.before", e, s, o), e = b.helper.replaceRecursiveRegExp(e, function (e, r, t, a) {
            var n = t + b.subParser("encodeCode")(r, s, o) + a;
            return "Â¨C" + (o.gHtmlSpans.push(n) - 1) + "C"
        }, "<code\\b[^>]*>", "</code>", "gim"), o.converter._dispatch("hashCodeTags.after", e, s, o)
    }), b.subParser("hashElement", function (e, r, a) {
        "use strict";
        return function (e, r) {
            var t = r;
            return t = (t = (t = t.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), "\n\nÂ¨K" + (a.gHtmlBlocks.push(t) - 1) + "K\n\n"
        }
    }), b.subParser("hashHTMLBlocks", function (e, r, s) {
        "use strict";
        e = s.converter._dispatch("hashHTMLBlocks.before", e, r, s);
        var t = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"],
            a = function (e, r, t, a) {
                var n = e;
                return -1 !== t.search(/\bmarkdown\b/) && (n = t + s.converter.makeHtml(r) + a), "\n\nÂ¨K" + (s.gHtmlBlocks.push(n) - 1) + "K\n\n"
            };
        r.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function (e, r) {
            return "&lt;" + r + "&gt;"
        }));
        for (var n = 0; n < t.length; ++n) for (var o, i = new RegExp("^ {0,3}(<" + t[n] + "\\b[^>]*>)", "im"), l = "<" + t[n] + "\\b[^>]*>", c = "</" + t[n] + ">"; -1 !== (o = b.helper.regexIndexOf(e, i));) {
            var u = b.helper.splitAtIndex(e, o), d = b.helper.replaceRecursiveRegExp(u[1], a, l, c, "im");
            if (d === u[1]) break;
            e = u[0].concat(d)
        }
        return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, b.subParser("hashElement")(e, r, s)), e = (e = b.helper.replaceRecursiveRegExp(e, function (e) {
            return "\n\nÂ¨K" + (s.gHtmlBlocks.push(e) - 1) + "K\n\n"
        }, "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, b.subParser("hashElement")(e, r, s)), s.converter._dispatch("hashHTMLBlocks.after", e, r, s)
    }), b.subParser("hashHTMLSpans", function (e, r, t) {
        "use strict";

        function a(e) {
            return "Â¨C" + (t.gHtmlSpans.push(e) - 1) + "C"
        }

        return e = (e = (e = (e = (e = t.converter._dispatch("hashHTMLSpans.before", e, r, t)).replace(/<[^>]+?\/>/gi, function (e) {
            return a(e)
        })).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (e) {
            return a(e)
        })).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (e) {
            return a(e)
        })).replace(/<[^>]+?>/gi, function (e) {
            return a(e)
        }), t.converter._dispatch("hashHTMLSpans.after", e, r, t)
    }), b.subParser("unhashHTMLSpans", function (e, r, t) {
        "use strict";
        e = t.converter._dispatch("unhashHTMLSpans.before", e, r, t);
        for (var a = 0; a < t.gHtmlSpans.length; ++a) {
            for (var n = t.gHtmlSpans[a], s = 0; /Â¨C(\d+)C/.test(n);) {
                var o = RegExp.$1;
                if (n = n.replace("Â¨C" + o + "C", t.gHtmlSpans[o]), 10 === s) {
                    console.error("maximum nesting of 10 spans reached!!!");
                    break
                }
                ++s
            }
            e = e.replace("Â¨C" + a + "C", n)
        }
        return t.converter._dispatch("unhashHTMLSpans.after", e, r, t)
    }), b.subParser("hashPreCodeTags", function (e, s, o) {
        "use strict";
        return e = o.converter._dispatch("hashPreCodeTags.before", e, s, o), e = b.helper.replaceRecursiveRegExp(e, function (e, r, t, a) {
            var n = t + b.subParser("encodeCode")(r, s, o) + a;
            return "\n\nÂ¨G" + (o.ghCodeBlocks.push({text: e, codeblock: n}) - 1) + "G\n\n"
        }, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), o.converter._dispatch("hashPreCodeTags.after", e, s, o)
    }), b.subParser("headers", function (e, l, c) {
        "use strict";

        function u(e) {
            var r, t;
            if (l.customizedHeaderId) {
                var a = e.match(/\{([^{]+?)}\s*$/);
                a && a[1] && (e = a[1])
            }
            return r = e, t = b.helper.isString(l.prefixHeaderId) ? l.prefixHeaderId : !0 === l.prefixHeaderId ? "section-" : "", l.rawPrefixHeaderId || (r = t + r), r = l.ghCompatibleHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "").replace(/Â¨T/g, "").replace(/Â¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^Â¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : l.rawHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/Â¨T/g, "Â¨").replace(/Â¨D/g, "$").replace(/["']/g, "-").toLowerCase() : r.replace(/[^\w]/g, "").toLowerCase(), l.rawPrefixHeaderId && (r = t + r), c.hashLinkCounts[r] ? r = r + "-" + c.hashLinkCounts[r]++ : c.hashLinkCounts[r] = 1, r
        }

        e = c.converter._dispatch("headers.before", e, l, c);
        var d = isNaN(parseInt(l.headerLevelStart)) ? 1 : parseInt(l.headerLevelStart),
            r = l.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            t = l.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        e = (e = e.replace(r, function (e, r) {
            var t = b.subParser("spanGamut")(r, l, c), a = l.noHeaderId ? "" : ' id="' + u(r) + '"',
                n = "<h" + d + a + ">" + t + "</h" + d + ">";
            return b.subParser("hashBlock")(n, l, c)
        })).replace(t, function (e, r) {
            var t = b.subParser("spanGamut")(r, l, c), a = l.noHeaderId ? "" : ' id="' + u(r) + '"', n = d + 1,
                s = "<h" + n + a + ">" + t + "</h" + n + ">";
            return b.subParser("hashBlock")(s, l, c)
        });
        var a = l.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        return e = e.replace(a, function (e, r, t) {
            var a = t;
            l.customizedHeaderId && (a = t.replace(/\s?\{([^{]+?)}\s*$/, ""));
            var n = b.subParser("spanGamut")(a, l, c), s = l.noHeaderId ? "" : ' id="' + u(t) + '"',
                o = d - 1 + r.length, i = "<h" + o + s + ">" + n + "</h" + o + ">";
            return b.subParser("hashBlock")(i, l, c)
        }), c.converter._dispatch("headers.after", e, l, c)
    }), b.subParser("horizontalRule", function (e, r, t) {
        "use strict";
        e = t.converter._dispatch("horizontalRule.before", e, r, t);
        var a = b.subParser("hashBlock")("<hr />", r, t);
        return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, a), t.converter._dispatch("horizontalRule.after", e, r, t)
    }), b.subParser("images", function (e, r, p) {
        "use strict";

        function l(e, r, t, a, n, s, o, i) {
            var l = p.gUrls, c = p.gTitles, u = p.gDimensions;
            if (t = t.toLowerCase(), i || (i = ""), -1 < e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)) a = ""; else if ("" === a || null === a) {
                if ("" !== t && null !== t || (t = r.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + t, b.helper.isUndefined(l[t])) return e;
                a = l[t], b.helper.isUndefined(c[t]) || (i = c[t]), b.helper.isUndefined(u[t]) || (n = u[t].width, s = u[t].height)
            }
            r = r.replace(/"/g, "&quot;").replace(b.helper.regexes.asteriskDashAndColon, b.helper.escapeCharactersCallback);
            var d = '<img src="' + (a = a.replace(b.helper.regexes.asteriskDashAndColon, b.helper.escapeCharactersCallback)) + '" alt="' + r + '"';
            return i && b.helper.isString(i) && (d += ' title="' + (i = i.replace(/"/g, "&quot;").replace(b.helper.regexes.asteriskDashAndColon, b.helper.escapeCharactersCallback)) + '"'), n && s && (d += ' width="' + (n = "*" === n ? "auto" : n) + '"', d += ' height="' + (s = "*" === s ? "auto" : s) + '"'), d + " />"
        }

        return e = (e = (e = (e = (e = (e = p.converter._dispatch("images.before", e, r, p)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, function (e, r, t, a, n, s, o, i) {
            return l(e, r, t, a = a.replace(/\s/g, ""), n, s, 0, i)
        })).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, l)).replace(/!\[([^\[\]]+)]()()()()()/g, l), p.converter._dispatch("images.after", e, r, p)
    }), b.subParser("italicsAndBold", function (e, r, t) {
        "use strict";

        function a(e, r, t) {
            return r + e + t
        }

        return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, r) {
            return a(r, "<strong><em>", "</em></strong>")
        })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, r) {
            return a(r, "<strong>", "</strong>")
        })).replace(/\b_(\S[\s\S]*?)_\b/g, function (e, r) {
            return a(r, "<em>", "</em>")
        }) : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, r) {
            return /\S$/.test(r) ? a(r, "<strong><em>", "</em></strong>") : e
        })).replace(/__(\S[\s\S]*?)__/g, function (e, r) {
            return /\S$/.test(r) ? a(r, "<strong>", "</strong>") : e
        })).replace(/_([^\s_][\s\S]*?)_/g, function (e, r) {
            return /\S$/.test(r) ? a(r, "<em>", "</em>") : e
        }), e = r.literalMidWordAsterisks ? (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (e, r, t) {
            return a(t, r + "<strong><em>", "</em></strong>")
        })).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (e, r, t) {
            return a(t, r + "<strong>", "</strong>")
        })).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (e, r, t) {
            return a(t, r + "<em>", "</em>")
        }) : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (e, r) {
            return /\S$/.test(r) ? a(r, "<strong><em>", "</em></strong>") : e
        })).replace(/\*\*(\S[\s\S]*?)\*\*/g, function (e, r) {
            return /\S$/.test(r) ? a(r, "<strong>", "</strong>") : e
        })).replace(/\*([^\s*][\s\S]*?)\*/g, function (e, r) {
            return /\S$/.test(r) ? a(r, "<em>", "</em>") : e
        }), t.converter._dispatch("italicsAndBold.after", e, r, t)
    }), b.subParser("lists", function (e, d, u) {
        "use strict";

        function p(e, r) {
            u.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
            var t = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(Â¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                c = /\n[ \t]*\n(?!Â¨0)/.test(e += "Â¨0");
            return d.disableForced4SpacesIndentedSublists && (t = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(Â¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = (e = e.replace(t, function (e, r, t, a, n, s, o) {
                o = o && "" !== o.trim();
                var i = b.subParser("outdent")(n, d, u), l = "";
                return s && d.tasklists && (l = ' class="task-list-item" style="list-style-type: none;"', i = i.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                    var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    return o && (e += " checked"), e + ">"
                })), i = i.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (e) {
                    return "Â¨A" + e
                }), "<li" + l + ">" + (i = (i = r || -1 < i.search(/\n{2,}/) ? (i = b.subParser("githubCodeBlocks")(i, d, u), b.subParser("blockGamut")(i, d, u)) : (i = (i = b.subParser("lists")(i, d, u)).replace(/\n$/, ""), i = (i = b.subParser("hashHTMLBlocks")(i, d, u)).replace(/\n\n+/g, "\n\n"), c ? b.subParser("paragraphs")(i, d, u) : b.subParser("spanGamut")(i, d, u))).replace("Â¨A", "")) + "</li>\n"
            })).replace(/Â¨0/g, ""), u.gListLevel--, r && (e = e.replace(/\s+$/, "")), e
        }

        function h(e, r) {
            if ("ol" === r) {
                var t = e.match(/^ *(\d+)\./);
                if (t && "1" !== t[1]) return ' start="' + t[1] + '"'
            }
            return ""
        }

        function n(n, s, o) {
            var i = d.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
                l = d.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
                c = "ul" === s ? i : l, u = "";
            if (-1 !== n.search(c)) !function e(r) {
                var t = r.search(c), a = h(n, s);
                -1 !== t ? (u += "\n\n<" + s + a + ">\n" + p(r.slice(0, t), !!o) + "</" + s + ">\n", c = "ul" == (s = "ul" === s ? "ol" : "ul") ? i : l, e(r.slice(t))) : u += "\n\n<" + s + a + ">\n" + p(r, !!o) + "</" + s + ">\n"
            }(n); else {
                var e = h(n, s);
                u = "\n\n<" + s + e + ">\n" + p(n, !!o) + "</" + s + ">\n"
            }
            return u
        }

        return e = u.converter._dispatch("lists.before", e, d, u), e += "Â¨0", e = (e = u.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(Â¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (e, r, t) {
            return n(r, -1 < t.search(/[*+-]/g) ? "ul" : "ol", !0)
        }) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(Â¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (e, r, t, a) {
            return n(t, -1 < a.search(/[*+-]/g) ? "ul" : "ol", !1)
        })).replace(/Â¨0/, ""), u.converter._dispatch("lists.after", e, d, u)
    }), b.subParser("metadata", function (e, r, a) {
        "use strict";

        function n(e) {
            (e = (e = (a.metadata.raw = e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, function (e, r, t) {
                return a.metadata.parsed[r] = t, ""
            })
        }

        return r.metadata ? (e = (e = (e = (e = a.converter._dispatch("metadata.before", e, r, a)).replace(/^\s*Â«Â«Â«+(\S*?)\n([\s\S]+?)\nÂ»Â»Â»+\n/, function (e, r, t) {
            return n(t), "Â¨M"
        })).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (e, r, t) {
            return r && (a.metadata.format = r), n(t), "Â¨M"
        })).replace(/Â¨M/g, ""), e = a.converter._dispatch("metadata.after", e, r, a)) : e
    }), b.subParser("outdent", function (e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("outdent.before", e, r, t)).replace(/^(\t|[ ]{1,4})/gm, "Â¨0")).replace(/Â¨0/g, ""), t.converter._dispatch("outdent.after", e, r, t)
    }), b.subParser("paragraphs", function (e, r, t) {
        "use strict";
        for (var a = (e = (e = (e = t.converter._dispatch("paragraphs.before", e, r, t)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), n = [], s = a.length, o = 0; o < s; o++) {
            var i = a[o];
            0 <= i.search(/Â¨(K|G)(\d+)\1/g) ? n.push(i) : 0 <= i.search(/\S/) && (i = (i = b.subParser("spanGamut")(i, r, t)).replace(/^([ \t]*)/g, "<p>"), i += "</p>", n.push(i))
        }
        for (s = n.length, o = 0; o < s; o++) {
            for (var l = "", c = n[o], u = !1; /Â¨(K|G)(\d+)\1/.test(c);) {
                var d = RegExp.$1, p = RegExp.$2;
                l = (l = "K" === d ? t.gHtmlBlocks[p] : u ? b.subParser("encodeCode")(t.ghCodeBlocks[p].text, r, t) : t.ghCodeBlocks[p].codeblock).replace(/\$/g, "$$$$"), c = c.replace(/(\n\n)?Â¨(K|G)\d+\2(\n\n)?/, l), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(c) && (u = !0)
            }
            n[o] = c
        }
        return e = (e = (e = n.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), t.converter._dispatch("paragraphs.after", e, r, t)
    }), b.subParser("runExtension", function (e, r, t, a) {
        "use strict";
        if (e.filter) r = e.filter(r, a.converter, t); else if (e.regex) {
            var n = e.regex;
            n instanceof RegExp || (n = new RegExp(n, "g")), r = r.replace(n, e.replace)
        }
        return r
    }), b.subParser("spanGamut", function (e, r, t) {
        "use strict";
        return e = t.converter._dispatch("spanGamut.before", e, r, t), e = b.subParser("codeSpans")(e, r, t), e = b.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = b.subParser("encodeBackslashEscapes")(e, r, t), e = b.subParser("images")(e, r, t), e = b.subParser("anchors")(e, r, t), e = b.subParser("autoLinks")(e, r, t), e = b.subParser("simplifiedAutoLinks")(e, r, t), e = b.subParser("emoji")(e, r, t), e = b.subParser("underline")(e, r, t), e = b.subParser("italicsAndBold")(e, r, t), e = b.subParser("strikethrough")(e, r, t), e = b.subParser("ellipsis")(e, r, t), e = b.subParser("hashHTMLSpans")(e, r, t), e = b.subParser("encodeAmpsAndAngles")(e, r, t), r.simpleLineBreaks ? /\n\nÂ¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), t.converter._dispatch("spanGamut.after", e, r, t)
    }), b.subParser("strikethrough", function (e, a, n) {
        "use strict";
        return a.strikethrough && (e = (e = n.converter._dispatch("strikethrough.before", e, a, n)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (e, r) {
            return t = r, a.simplifiedAutoLink && (t = b.subParser("simplifiedAutoLinks")(t, a, n)), "<del>" + t + "</del>";
            var t
        }), e = n.converter._dispatch("strikethrough.after", e, a, n)), e
    }), b.subParser("stripLinkDefinitions", function (e, i, l) {
        "use strict";
        var r = function (e, r, t, a, n, s, o) {
            return r = r.toLowerCase(), t.match(/^data:.+?\/.+?;base64,/) ? l.gUrls[r] = t.replace(/\s/g, "") : l.gUrls[r] = b.subParser("encodeAmpsAndAngles")(t, i, l), s ? s + o : (o && (l.gTitles[r] = o.replace(/"|'/g, "&quot;")), i.parseImgDimensions && a && n && (l.gDimensions[r] = {
                width: a,
                height: n
            }), "")
        };
        return (e = (e = (e += "Â¨0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=Â¨0)|(?=\n\[))/gm, r)).replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=Â¨0))/gm, r)).replace(/Â¨0/, "")
    }), b.subParser("tables", function (e, m, f) {
        "use strict";

        function r(e) {
            var r, t = e.split("\n");
            for (r = 0; r < t.length; ++r) /^ {0,3}\|/.test(t[r]) && (t[r] = t[r].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(t[r]) && (t[r] = t[r].replace(/\|[ \t]*$/, "")), t[r] = b.subParser("codeSpans")(t[r], m, f);
            var a, n, s, o, i, l = t[0].split("|").map(function (e) {
                return e.trim()
            }), c = t[1].split("|").map(function (e) {
                return e.trim()
            }), u = [], d = [], p = [], h = [];
            for (t.shift(), t.shift(), r = 0; r < t.length; ++r) "" !== t[r].trim() && u.push(t[r].split("|").map(function (e) {
                return e.trim()
            }));
            if (l.length < c.length) return e;
            for (r = 0; r < c.length; ++r) p.push((a = c[r], /^:[ \t]*--*$/.test(a) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(a) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(a) ? ' style="text-align:center;"' : ""));
            for (r = 0; r < l.length; ++r) b.helper.isUndefined(p[r]) && (p[r] = ""), d.push((n = l[r], s = p[r], o = void 0, o = "", n = n.trim(), (m.tablesHeaderId || m.tableHeaderId) && (o = ' id="' + n.replace(/ /g, "_").toLowerCase() + '"'), "<th" + o + s + ">" + (n = b.subParser("spanGamut")(n, m, f)) + "</th>\n"));
            for (r = 0; r < u.length; ++r) {
                for (var _ = [], g = 0; g < d.length; ++g) b.helper.isUndefined(u[r][g]), _.push((i = u[r][g], "<td" + p[g] + ">" + b.subParser("spanGamut")(i, m, f) + "</td>\n"));
                h.push(_)
            }
            return function (e, r) {
                for (var t = "<table>\n<thead>\n<tr>\n", a = e.length, n = 0; n < a; ++n) t += e[n];
                for (t += "</tr>\n</thead>\n<tbody>\n", n = 0; n < r.length; ++n) {
                    t += "<tr>\n";
                    for (var s = 0; s < a; ++s) t += r[n][s];
                    t += "</tr>\n"
                }
                return t + "</tbody>\n</table>\n"
            }(d, h)
        }

        return m.tables ? (e = (e = (e = (e = f.converter._dispatch("tables.before", e, m, f)).replace(/\\(\|)/g, b.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|Â¨0)/gm, r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|Â¨0)/gm, r), f.converter._dispatch("tables.after", e, m, f)) : e
    }), b.subParser("underline", function (e, r, t) {
        "use strict";
        return r.underline ? (e = t.converter._dispatch("underline.before", e, r, t), e = (e = r.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, r) {
            return "<u>" + r + "</u>"
        })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, r) {
            return "<u>" + r + "</u>"
        }) : (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, r) {
            return /\S$/.test(r) ? "<u>" + r + "</u>" : e
        })).replace(/__(\S[\s\S]*?)__/g, function (e, r) {
            return /\S$/.test(r) ? "<u>" + r + "</u>" : e
        })).replace(/(_)/g, b.helper.escapeCharactersCallback), e = t.converter._dispatch("underline.after", e, r, t)) : e
    }), b.subParser("unescapeSpecialChars", function (e, r, t) {
        "use strict";
        return e = (e = t.converter._dispatch("unescapeSpecialChars.before", e, r, t)).replace(/Â¨E(\d+)E/g, function (e, r) {
            var t = parseInt(r);
            return String.fromCharCode(t)
        }), t.converter._dispatch("unescapeSpecialChars.after", e, r, t)
    }), b.subParser("makeMarkdown.blockquote", function (e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) {
            var o = b.subParser("makeMarkdown.node")(a[s], r);
            "" !== o && (t += o)
        }
        return "> " + (t = t.trim()).split("\n").join("\n> ")
    }), b.subParser("makeMarkdown.codeBlock", function (e, r) {
        "use strict";
        var t = e.getAttribute("language"), a = e.getAttribute("precodenum");
        return "```" + t + "\n" + r.preList[a] + "\n```"
    }), b.subParser("makeMarkdown.codeSpan", function (e) {
        "use strict";
        return "`" + e.innerHTML + "`"
    }), b.subParser("makeMarkdown.emphasis", function (e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) {
            t += "*";
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += b.subParser("makeMarkdown.node")(a[s], r);
            t += "*"
        }
        return t
    }), b.subParser("makeMarkdown.header", function (e, r, t) {
        "use strict";
        var a = new Array(t + 1).join("#"), n = "";
        if (e.hasChildNodes()) {
            n = a + " ";
            for (var s = e.childNodes, o = s.length, i = 0; i < o; ++i) n += b.subParser("makeMarkdown.node")(s[i], r)
        }
        return n
    }), b.subParser("makeMarkdown.hr", function () {
        "use strict";
        return "---"
    }), b.subParser("makeMarkdown.image", function (e) {
        "use strict";
        var r = "";
        return e.hasAttribute("src") && (r += "![" + e.getAttribute("alt") + "](", r += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (r += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (r += ' "' + e.getAttribute("title") + '"'), r += ")"), r
    }), b.subParser("makeMarkdown.links", function (e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes() && e.hasAttribute("href")) {
            var a = e.childNodes, n = a.length;
            t = "[";
            for (var s = 0; s < n; ++s) t += b.subParser("makeMarkdown.node")(a[s], r);
            t += "](", t += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"
        }
        return t
    }), b.subParser("makeMarkdown.list", function (e, r, t) {
        "use strict";
        var a = "";
        if (!e.hasChildNodes()) return "";
        for (var n = e.childNodes, s = n.length, o = e.getAttribute("start") || 1, i = 0; i < s; ++i) void 0 !== n[i].tagName && "li" === n[i].tagName.toLowerCase() && (a += ("ol" === t ? o.toString() + ". " : "- ") + b.subParser("makeMarkdown.listItem")(n[i], r), ++o);
        return (a += "\n\x3c!-- --\x3e\n").trim()
    }), b.subParser("makeMarkdown.listItem", function (e, r) {
        "use strict";
        for (var t = "", a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += b.subParser("makeMarkdown.node")(a[s], r);
        return /\n$/.test(t) ? t = t.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : t += "\n", t
    }), b.subParser("makeMarkdown.node", function (e, r, t) {
        "use strict";
        t = t || !1;
        var a = "";
        if (3 === e.nodeType) return b.subParser("makeMarkdown.txt")(e, r);
        if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
        if (1 !== e.nodeType) return "";
        switch (e.tagName.toLowerCase()) {
            case"h1":
                t || (a = b.subParser("makeMarkdown.header")(e, r, 1) + "\n\n");
                break;
            case"h2":
                t || (a = b.subParser("makeMarkdown.header")(e, r, 2) + "\n\n");
                break;
            case"h3":
                t || (a = b.subParser("makeMarkdown.header")(e, r, 3) + "\n\n");
                break;
            case"h4":
                t || (a = b.subParser("makeMarkdown.header")(e, r, 4) + "\n\n");
                break;
            case"h5":
                t || (a = b.subParser("makeMarkdown.header")(e, r, 5) + "\n\n");
                break;
            case"h6":
                t || (a = b.subParser("makeMarkdown.header")(e, r, 6) + "\n\n");
                break;
            case"p":
                t || (a = b.subParser("makeMarkdown.paragraph")(e, r) + "\n\n");
                break;
            case"blockquote":
                t || (a = b.subParser("makeMarkdown.blockquote")(e, r) + "\n\n");
                break;
            case"hr":
                t || (a = b.subParser("makeMarkdown.hr")(e, r) + "\n\n");
                break;
            case"ol":
                t || (a = b.subParser("makeMarkdown.list")(e, r, "ol") + "\n\n");
                break;
            case"ul":
                t || (a = b.subParser("makeMarkdown.list")(e, r, "ul") + "\n\n");
                break;
            case"precode":
                t || (a = b.subParser("makeMarkdown.codeBlock")(e, r) + "\n\n");
                break;
            case"pre":
                t || (a = b.subParser("makeMarkdown.pre")(e, r) + "\n\n");
                break;
            case"table":
                t || (a = b.subParser("makeMarkdown.table")(e, r) + "\n\n");
                break;
            case"code":
                a = b.subParser("makeMarkdown.codeSpan")(e, r);
                break;
            case"em":
            case"i":
                a = b.subParser("makeMarkdown.emphasis")(e, r);
                break;
            case"strong":
            case"b":
                a = b.subParser("makeMarkdown.strong")(e, r);
                break;
            case"del":
                a = b.subParser("makeMarkdown.strikethrough")(e, r);
                break;
            case"a":
                a = b.subParser("makeMarkdown.links")(e, r);
                break;
            case"img":
                a = b.subParser("makeMarkdown.image")(e, r);
                break;
            default:
                a = e.outerHTML + "\n\n"
        }
        return a
    }), b.subParser("makeMarkdown.paragraph", function (e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += b.subParser("makeMarkdown.node")(a[s], r);
        return t.trim()
    }), b.subParser("makeMarkdown.pre", function (e, r) {
        "use strict";
        var t = e.getAttribute("prenum");
        return "<pre>" + r.preList[t] + "</pre>"
    }), b.subParser("makeMarkdown.strikethrough", function (e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) {
            t += "~~";
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += b.subParser("makeMarkdown.node")(a[s], r);
            t += "~~"
        }
        return t
    }), b.subParser("makeMarkdown.strong", function (e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) {
            t += "**";
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += b.subParser("makeMarkdown.node")(a[s], r);
            t += "**"
        }
        return t
    }), b.subParser("makeMarkdown.table", function (e, r) {
        "use strict";
        var t, a, n = "", s = [[], []], o = e.querySelectorAll("thead>tr>th"), i = e.querySelectorAll("tbody>tr");
        for (t = 0; t < o.length; ++t) {
            var l = b.subParser("makeMarkdown.tableCell")(o[t], r), c = "---";
            if (o[t].hasAttribute("style")) switch (o[t].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                case"text-align:left;":
                    c = ":---";
                    break;
                case"text-align:right;":
                    c = "---:";
                    break;
                case"text-align:center;":
                    c = ":---:"
            }
            s[0][t] = l.trim(), s[1][t] = c
        }
        for (t = 0; t < i.length; ++t) {
            var u = s.push([]) - 1, d = i[t].getElementsByTagName("td");
            for (a = 0; a < o.length; ++a) {
                var p = " ";
                void 0 !== d[a] && (p = b.subParser("makeMarkdown.tableCell")(d[a], r)), s[u].push(p)
            }
        }
        var h = 3;
        for (t = 0; t < s.length; ++t) for (a = 0; a < s[t].length; ++a) {
            var _ = s[t][a].length;
            h < _ && (h = _)
        }
        for (t = 0; t < s.length; ++t) {
            for (a = 0; a < s[t].length; ++a) 1 === t ? ":" === s[t][a].slice(-1) ? s[t][a] = b.helper.padEnd(s[t][a].slice(-1), h - 1, "-") + ":" : s[t][a] = b.helper.padEnd(s[t][a], h, "-") : s[t][a] = b.helper.padEnd(s[t][a], h);
            n += "| " + s[t].join(" | ") + " |\n"
        }
        return n.trim()
    }), b.subParser("makeMarkdown.tableCell", function (e, r) {
        "use strict";
        var t = "";
        if (!e.hasChildNodes()) return "";
        for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += b.subParser("makeMarkdown.node")(a[s], r, !0);
        return t.trim()
    }), b.subParser("makeMarkdown.txt", function (e) {
        "use strict";
        var r = e.nodeValue;
        return r = (r = r.replace(/ +/g, " ")).replace(/Â¨NBSP;/g, " "), (r = (r = (r = (r = (r = (r = (r = (r = b.helper.unescapeHTMLEntities(r)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
    }), "function" == typeof define && define.amd ? define(function () {
        "use strict";
        return b
    }) : "undefined" != typeof module && module.exports ? module.exports = b : this.showdown = b
}).call(this);
!function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
        return t.Snackbar = e()
    }) : "object" == typeof module && module.exports ? module.exports = t.Snackbar = e() : t.Snackbar = e()
}(this, function () {
    var a = {current: null}, c = {
        text: "Default Text",
        textColor: "#FFFFFF",
        width: "auto",
        showAction: !0,
        actionText: "Dismiss",
        actionTextAria: "Dismiss, Description for Screen Readers",
        alertScreenReader: !1,
        actionTextColor: "#4CAF50",
        showSecondButton: !1,
        secondButtonText: "",
        secondButtonAria: "Description for Screen Readers",
        secondButtonTextColor: "#4CAF50",
        backgroundColor: "#323232",
        pos: "bottom-left",
        duration: 5e3,
        customClass: "",
        onActionClick: function (t) {
            t.style.opacity = 0
        },
        onSecondButtonClick: function (t) {
        },
        onClose: function (t) {
        }
    };
    a.show = function (t) {
        var n = i(!0, c, t);
        a.current && (a.current.style.opacity = 0, setTimeout(function () {
            var t = this.parentElement;
            t && t.removeChild(this)
        }.bind(a.current), 500)), a.snackbar = document.createElement("div"), a.snackbar.className = "snackbar-container " + n.customClass, a.snackbar.style.width = n.width;
        var e = document.createElement("p");
        if (e.style.margin = 0, e.style.padding = 0, e.style.color = n.textColor, e.style.fontSize = "14px", e.style.fontWeight = 300, e.style.lineHeight = "1em", e.innerHTML = n.text, a.snackbar.appendChild(e), a.snackbar.style.background = n.backgroundColor, n.showSecondButton) {
            var o = document.createElement("button");
            o.className = "action", o.innerHTML = n.secondButtonText, o.setAttribute("aria-label", n.secondButtonAria), o.style.color = n.secondButtonTextColor, o.addEventListener("click", function () {
                n.onSecondButtonClick(a.snackbar)
            }), a.snackbar.appendChild(o)
        }
        if (n.showAction) {
            var r = document.createElement("button");
            r.className = "action", r.innerHTML = n.actionText, r.setAttribute("aria-label", n.actionTextAria), r.style.color = n.actionTextColor, r.addEventListener("click", function () {
                n.onActionClick(a.snackbar)
            }), a.snackbar.appendChild(r)
        }
        n.duration && setTimeout(function () {
            a.current === this && (a.current.style.opacity = 0, a.current.style.top = "-100px", a.current.style.bottom = "-100px")
        }.bind(a.snackbar), n.duration), n.alertScreenReader && a.snackbar.setAttribute("role", "alert"), a.snackbar.addEventListener("transitionend", function (t, e) {
            "opacity" === t.propertyName && "0" === this.style.opacity && ("function" == typeof n.onClose && n.onClose(this), this.parentElement.removeChild(this), a.current === this && (a.current = null))
        }.bind(a.snackbar)), a.current = a.snackbar, document.body.appendChild(a.snackbar), getComputedStyle(a.snackbar).bottom, getComputedStyle(a.snackbar).top, a.snackbar.style.opacity = 1, a.snackbar.className = "snackbar-container " + n.customClass + " snackbar-pos " + n.pos
    }, a.close = function () {
        a.current && (a.current.style.opacity = 0)
    };
    var i = function () {
        var n = {}, o = !1, t = 0, e = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (o = arguments[0], t++);
        for (var r = function (t) {
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o && "[object Object]" === Object.prototype.toString.call(t[e]) ? n[e] = i(!0, n[e], t[e]) : n[e] = t[e])
        }; t < e; t++) {
            r(arguments[t])
        }
        return n
    };
    return a
});
/*! jQuery UI - v1.12.1 - 2020-10-27
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (factory) {
    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else {

        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    $.ui = $.ui || {};

    var version = $.ui.version = "1.12.1";


    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/


    var widgetUuid = 0;
    var widgetSlice = Array.prototype.slice;

    $.cleanData = (function (orig) {
        return function (elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }

                    // Http://bugs.jquery.com/ticket/8235
                } catch (e) {
                }
            }
            orig(elems);
        };
    })($.cleanData);

    $.widget = function (name, base, prototype) {
        var existingConstructor, constructor, basePrototype;

        // ProxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
        var proxiedPrototype = {};

        var namespace = name.split(".")[0];
        name = name.split(".")[1];
        var fullName = namespace + "-" + name;

        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }

        if ($.isArray(prototype)) {
            prototype = $.extend.apply(null, [{}].concat(prototype));
        }

        // Create selector for plugin
        $.expr[":"][fullName.toLowerCase()] = function (elem) {
            return !!$.data(elem, fullName);
        };

        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function (options, element) {

            // Allow instantiation without "new" keyword
            if (!this._createWidget) {
                return new constructor(options, element);
            }

            // Allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };

        // Extend with the existing constructor to carry over any static properties
        $.extend(constructor, existingConstructor, {
            version: prototype.version,

            // Copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend({}, prototype),

            // Track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();

        // We need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function (prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = (function () {
                function _super() {
                    return base.prototype[prop].apply(this, arguments);
                }

                function _superApply(args) {
                    return base.prototype[prop].apply(this, args);
                }

                return function () {
                    var __super = this._super;
                    var __superApply = this._superApply;
                    var returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply(this, arguments);

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend(basePrototype, {

            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function (i, child) {
                var childPrototype = child.prototype;

                // Redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor,
                    child._proto);
            });

            // Remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }

        $.widget.bridge(name, constructor);

        return constructor;
    };

    $.widget.extend = function (target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;

        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {

                    // Clone objects
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ?
                            $.widget.extend({}, target[key], value) :

                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend({}, value);

                        // Copy everything else by reference
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function (name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function (options) {
            var isMethodCall = typeof options === "string";
            var args = widgetSlice.call(arguments, 1);
            var returnValue = this;

            if (isMethodCall) {

                // If this is an empty collection, we need to have the instance method
                // return undefined instead of the jQuery instance
                if (!this.length && options === "instance") {
                    returnValue = undefined;
                } else {
                    this.each(function () {
                        var methodValue;
                        var instance = $.data(this, fullName);

                        if (options === "instance") {
                            returnValue = instance;
                            return false;
                        }

                        if (!instance) {
                            return $.error("cannot call methods on " + name +
                                " prior to initialization; " +
                                "attempted to call method '" + options + "'");
                        }

                        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                            return $.error("no such method '" + options + "' for " + name +
                                " widget instance");
                        }

                        methodValue = instance[options].apply(instance, args);

                        if (methodValue !== instance && methodValue !== undefined) {
                            returnValue = methodValue && methodValue.jquery ?
                                returnValue.pushStack(methodValue.get()) :
                                methodValue;
                            return false;
                        }
                    });
                }
            } else {

                // Allow multiple hashes to be passed on init
                if (args.length) {
                    options = $.widget.extend.apply(null, [options].concat(args));
                }

                this.each(function () {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function ( /* options, element */) {
    };
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",

        options: {
            classes: {},
            disabled: false,

            // Callbacks
            create: null
        },

        _createWidget: function (options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widgetUuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            this.classesElementLookup = {};

            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function (event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ?

                    // Element within the document
                    element.ownerDocument :

                    // Element is window or document
                    element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }

            this.options = $.widget.extend({},
                this.options,
                this._getCreateOptions(),
                options);

            this._create();

            if (this.options.disabled) {
                this._setOptionDisabled(this.options.disabled);
            }

            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },

        _getCreateOptions: function () {
            return {};
        },

        _getCreateEventData: $.noop,

        _create: $.noop,

        _init: $.noop,

        destroy: function () {
            var that = this;

            this._destroy();
            $.each(this.classesElementLookup, function (key, value) {
                that._removeClass(value, key);
            });

            // We can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .off(this.eventNamespace)
                .removeData(this.widgetFullName);
            this.widget()
                .off(this.eventNamespace)
                .removeAttr("aria-disabled");

            // Clean up events and states
            this.bindings.off(this.eventNamespace);
        },

        _destroy: $.noop,

        widget: function () {
            return this.element;
        },

        option: function (key, value) {
            var options = key;
            var parts;
            var curOption;
            var i;

            if (arguments.length === 0) {

                // Don't return a reference to the internal hash
                return $.widget.extend({}, this.options);
            }

            if (typeof key === "string") {

                // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }

            this._setOptions(options);

            return this;
        },

        _setOptions: function (options) {
            var key;

            for (key in options) {
                this._setOption(key, options[key]);
            }

            return this;
        },

        _setOption: function (key, value) {
            if (key === "classes") {
                this._setOptionClasses(value);
            }

            this.options[key] = value;

            if (key === "disabled") {
                this._setOptionDisabled(value);
            }

            return this;
        },

        _setOptionClasses: function (value) {
            var classKey, elements, currentElements;

            for (classKey in value) {
                currentElements = this.classesElementLookup[classKey];
                if (value[classKey] === this.options.classes[classKey] ||
                    !currentElements ||
                    !currentElements.length) {
                    continue;
                }

                // We are doing this to create a new jQuery object because the _removeClass() call
                // on the next line is going to destroy the reference to the current elements being
                // tracked. We need to save a copy of this collection so that we can add the new classes
                // below.
                elements = $(currentElements.get());
                this._removeClass(currentElements, classKey);

                // We don't use _addClass() here, because that uses this.options.classes
                // for generating the string of classes. We want to use the value passed in from
                // _setOption(), this is the new value of the classes option which was passed to
                // _setOption(). We pass this value directly to _classes().
                elements.addClass(this._classes({
                    element: elements,
                    keys: classKey,
                    classes: value,
                    add: true
                }));
            }
        },

        _setOptionDisabled: function (value) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);

            // If the widget is becoming disabled, then nothing is interactive
            if (value) {
                this._removeClass(this.hoverable, null, "ui-state-hover");
                this._removeClass(this.focusable, null, "ui-state-focus");
            }
        },

        enable: function () {
            return this._setOptions({disabled: false});
        },

        disable: function () {
            return this._setOptions({disabled: true});
        },

        _classes: function (options) {
            var full = [];
            var that = this;

            options = $.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, options);

            function processClassString(classes, checkOption) {
                var current, i;
                for (i = 0; i < classes.length; i++) {
                    current = that.classesElementLookup[classes[i]] || $();
                    if (options.add) {
                        current = $($.unique(current.get().concat(options.element.get())));
                    } else {
                        current = $(current.not(options.element).get());
                    }
                    that.classesElementLookup[classes[i]] = current;
                    full.push(classes[i]);
                    if (checkOption && options.classes[classes[i]]) {
                        full.push(options.classes[classes[i]]);
                    }
                }
            }

            this._on(options.element, {
                "remove": "_untrackClassesElement"
            });

            if (options.keys) {
                processClassString(options.keys.match(/\S+/g) || [], true);
            }
            if (options.extra) {
                processClassString(options.extra.match(/\S+/g) || []);
            }

            return full.join(" ");
        },

        _untrackClassesElement: function (event) {
            var that = this;
            $.each(that.classesElementLookup, function (key, value) {
                if ($.inArray(event.target, value) !== -1) {
                    that.classesElementLookup[key] = $(value.not(event.target).get());
                }
            });
        },

        _removeClass: function (element, keys, extra) {
            return this._toggleClass(element, keys, extra, false);
        },

        _addClass: function (element, keys, extra) {
            return this._toggleClass(element, keys, extra, true);
        },

        _toggleClass: function (element, keys, extra, add) {
            add = (typeof add === "boolean") ? add : extra;
            var shift = (typeof element === "string" || element === null),
                options = {
                    extra: shift ? keys : extra,
                    keys: shift ? element : keys,
                    element: shift ? this.element : element,
                    add: add
                };
            options.element.toggleClass(this._classes(options), add);
            return this;
        },

        _on: function (suppressDisabledCheck, element, handlers) {
            var delegateElement;
            var instance = this;

            // No suppressDisabledCheck flag, shuffle arguments
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // No element argument, shuffle and use this.element
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }

            $.each(handlers, function (event, handler) {
                function handlerProxy() {

                    // Allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if (!suppressDisabledCheck &&
                        (instance.options.disabled === true ||
                            $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler)
                        .apply(instance, arguments);
                }

                // Copy the guid so direct unbinding works
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match(/^([\w:-]*)\s*(.*)$/);
                var eventName = match[1] + instance.eventNamespace;
                var selector = match[2];

                if (selector) {
                    delegateElement.on(eventName, selector, handlerProxy);
                } else {
                    element.on(eventName, handlerProxy);
                }
            });
        },

        _off: function (element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
                this.eventNamespace;
            element.off(eventName).off(eventName);

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },

        _delay: function (handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler)
                    .apply(instance, arguments);
            }

            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },

        _hoverable: function (element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function (event) {
                    this._addClass($(event.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function (event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-hover");
                }
            });
        },

        _focusable: function (element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function (event) {
                    this._addClass($(event.currentTarget), null, "ui-state-focus");
                },
                focusout: function (event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-focus");
                }
            });
        },

        _trigger: function (type, event, data) {
            var prop, orig;
            var callback = this.options[type];

            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ?
                type :
                this.widgetEventPrefix + type).toLowerCase();

            // The original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[0];

            // Copy original event properties over to the new event
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }

            this.element.trigger(event, data);
            return !($.isFunction(callback) &&
                callback.apply(this.element[0], [event].concat(data)) === false ||
                event.isDefaultPrevented());
        }
    };

    $.each({show: "fadeIn", hide: "fadeOut"}, function (method, defaultEffect) {
        $.Widget.prototype["_" + method] = function (element, options, callback) {
            if (typeof options === "string") {
                options = {effect: options};
            }

            var hasOptions;
            var effectName = !options ?
                method :
                options === true || typeof options === "number" ?
                    defaultEffect :
                    options.effect || defaultEffect;

            options = options || {};
            if (typeof options === "number") {
                options = {duration: options};
            }

            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;

            if (options.delay) {
                element.delay(options.delay);
            }

            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function (next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;


    /*!
     * jQuery UI Position 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */

//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/


    (function () {
        var cachedScrollbarWidth,
            max = Math.max,
            abs = Math.abs,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets(offsets, width, height) {
            return [
                parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1),
                parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)
            ];
        }

        function parseCss(element, property) {
            return parseInt($.css(element, property), 10) || 0;
        }

        function getDimensions(elem) {
            var raw = elem[0];
            if (raw.nodeType === 9) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {top: 0, left: 0}
                };
            }
            if ($.isWindow(raw)) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {top: elem.scrollTop(), left: elem.scrollLeft()}
                };
            }
            if (raw.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {top: raw.pageY, left: raw.pageX}
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }

        $.position = {
            scrollbarWidth: function () {
                if (cachedScrollbarWidth !== undefined) {
                    return cachedScrollbarWidth;
                }
                var w1, w2,
                    div = $("<div " +
                        "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
                        "<div style='height:100px;width:auto;'></div></div>"),
                    innerDiv = div.children()[0];

                $("body").append(div);
                w1 = innerDiv.offsetWidth;
                div.css("overflow", "scroll");

                w2 = innerDiv.offsetWidth;

                if (w1 === w2) {
                    w2 = div[0].clientWidth;
                }

                div.remove();

                return (cachedScrollbarWidth = w1 - w2);
            },
            getScrollInfo: function (within) {
                var overflowX = within.isWindow || within.isDocument ? "" :
                    within.element.css("overflow-x"),
                    overflowY = within.isWindow || within.isDocument ? "" :
                        within.element.css("overflow-y"),
                    hasOverflowX = overflowX === "scroll" ||
                        (overflowX === "auto" && within.width < within.element[0].scrollWidth),
                    hasOverflowY = overflowY === "scroll" ||
                        (overflowY === "auto" && within.height < within.element[0].scrollHeight);
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function (element) {
                var withinElement = $(element || window),
                    isWindow = $.isWindow(withinElement[0]),
                    isDocument = !!withinElement[0] && withinElement[0].nodeType === 9,
                    hasOffset = !isWindow && !isDocument;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: hasOffset ? $(element).offset() : {left: 0, top: 0},
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),
                    width: withinElement.outerWidth(),
                    height: withinElement.outerHeight()
                };
            }
        };

        $.fn.position = function (options) {
            if (!options || !options.of) {
                return _position.apply(this, arguments);
            }

            // Make a copy, we don't want to modify arguments
            options = $.extend({}, options);

            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $(options.of),
                within = $.position.getWithinInfo(options.within),
                scrollInfo = $.position.getScrollInfo(within),
                collision = (options.collision || "flip").split(" "),
                offsets = {};

            dimensions = getDimensions(target);
            if (target[0].preventDefault) {

                // Force left top to allow flipping
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;

            // Clone to reuse original targetOffset later
            basePosition = $.extend({}, targetOffset);

            // Force my and at to have valid horizontal and vertical positions
            // if a value is missing or invalid, it will be converted to center
            $.each(["my", "at"], function () {
                var pos = (options[this] || "").split(" "),
                    horizontalOffset,
                    verticalOffset;

                if (pos.length === 1) {
                    pos = rhorizontal.test(pos[0]) ?
                        pos.concat(["center"]) :
                        rvertical.test(pos[0]) ?
                            ["center"].concat(pos) :
                            ["center", "center"];
                }
                pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
                pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";

                // Calculate offsets
                horizontalOffset = roffset.exec(pos[0]);
                verticalOffset = roffset.exec(pos[1]);
                offsets[this] = [
                    horizontalOffset ? horizontalOffset[0] : 0,
                    verticalOffset ? verticalOffset[0] : 0
                ];

                // Reduce to just the positions without the offsets
                options[this] = [
                    rposition.exec(pos[0])[0],
                    rposition.exec(pos[1])[0]
                ];
            });

            // Normalize collision option
            if (collision.length === 1) {
                collision[1] = collision[0];
            }

            if (options.at[0] === "right") {
                basePosition.left += targetWidth;
            } else if (options.at[0] === "center") {
                basePosition.left += targetWidth / 2;
            }

            if (options.at[1] === "bottom") {
                basePosition.top += targetHeight;
            } else if (options.at[1] === "center") {
                basePosition.top += targetHeight / 2;
            }

            atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
            basePosition.left += atOffset[0];
            basePosition.top += atOffset[1];

            return this.each(function () {
                var collisionPosition, using,
                    elem = $(this),
                    elemWidth = elem.outerWidth(),
                    elemHeight = elem.outerHeight(),
                    marginLeft = parseCss(this, "marginLeft"),
                    marginTop = parseCss(this, "marginTop"),
                    collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") +
                        scrollInfo.width,
                    collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") +
                        scrollInfo.height,
                    position = $.extend({}, basePosition),
                    myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());

                if (options.my[0] === "right") {
                    position.left -= elemWidth;
                } else if (options.my[0] === "center") {
                    position.left -= elemWidth / 2;
                }

                if (options.my[1] === "bottom") {
                    position.top -= elemHeight;
                } else if (options.my[1] === "center") {
                    position.top -= elemHeight / 2;
                }

                position.left += myOffset[0];
                position.top += myOffset[1];

                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };

                $.each(["left", "top"], function (i, dir) {
                    if ($.ui.position[collision[i]]) {
                        $.ui.position[collision[i]][dir](position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [atOffset[0] + myOffset[0], atOffset [1] + myOffset[1]],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                });

                if (options.using) {

                    // Adds feedback as second argument to using callback, if present
                    using = function (props) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                            };
                        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
                            feedback.horizontal = "center";
                        }
                        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
                            feedback.vertical = "middle";
                        }
                        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call(this, props, feedback);
                    };
                }

                elem.offset($.extend(position, {using: using}));
            });
        };

        $.ui.position = {
            fit: {
                left: function (position, data) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                        outerWidth = within.width,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = withinOffset - collisionPosLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                        newOverRight;

                    // Element is wider than within
                    if (data.collisionWidth > outerWidth) {

                        // Element is initially over the left side of within
                        if (overLeft > 0 && overRight <= 0) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
                                withinOffset;
                            position.left += overLeft - newOverRight;

                            // Element is initially over right side of within
                        } else if (overRight > 0 && overLeft <= 0) {
                            position.left = withinOffset;

                            // Element is initially over both left and right sides of within
                        } else {
                            if (overLeft > overRight) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }

                        // Too far left -> align with left edge
                    } else if (overLeft > 0) {
                        position.left += overLeft;

                        // Too far right -> align with right edge
                    } else if (overRight > 0) {
                        position.left -= overRight;

                        // Adjust based on position and margin
                    } else {
                        position.left = max(position.left - collisionPosLeft, position.left);
                    }
                },
                top: function (position, data) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                        outerHeight = data.within.height,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = withinOffset - collisionPosTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                        newOverBottom;

                    // Element is taller than within
                    if (data.collisionHeight > outerHeight) {

                        // Element is initially over the top of within
                        if (overTop > 0 && overBottom <= 0) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
                                withinOffset;
                            position.top += overTop - newOverBottom;

                            // Element is initially over bottom of within
                        } else if (overBottom > 0 && overTop <= 0) {
                            position.top = withinOffset;

                            // Element is initially over both top and bottom of within
                        } else {
                            if (overTop > overBottom) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }

                        // Too far up -> align with top
                    } else if (overTop > 0) {
                        position.top += overTop;

                        // Too far down -> align with bottom edge
                    } else if (overBottom > 0) {
                        position.top -= overBottom;

                        // Adjust based on position and margin
                    } else {
                        position.top = max(position.top - collisionPosTop, position.top);
                    }
                }
            },
            flip: {
                left: function (position, data) {
                    var within = data.within,
                        withinOffset = within.offset.left + within.scrollLeft,
                        outerWidth = within.width,
                        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = collisionPosLeft - offsetLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                        myOffset = data.my[0] === "left" ?
                            -data.elemWidth :
                            data.my[0] === "right" ?
                                data.elemWidth :
                                0,
                        atOffset = data.at[0] === "left" ?
                            data.targetWidth :
                            data.at[0] === "right" ?
                                -data.targetWidth :
                                0,
                        offset = -2 * data.offset[0],
                        newOverRight,
                        newOverLeft;

                    if (overLeft < 0) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
                            outerWidth - withinOffset;
                        if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if (overRight > 0) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
                            atOffset + offset - offsetLeft;
                        if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function (position, data) {
                    var within = data.within,
                        withinOffset = within.offset.top + within.scrollTop,
                        outerHeight = within.height,
                        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = collisionPosTop - offsetTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                        top = data.my[1] === "top",
                        myOffset = top ?
                            -data.elemHeight :
                            data.my[1] === "bottom" ?
                                data.elemHeight :
                                0,
                        atOffset = data.at[1] === "top" ?
                            data.targetHeight :
                            data.at[1] === "bottom" ?
                                -data.targetHeight :
                                0,
                        offset = -2 * data.offset[1],
                        newOverTop,
                        newOverBottom;
                    if (overTop < 0) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
                            outerHeight - withinOffset;
                        if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if (overBottom > 0) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
                            offset - offsetTop;
                        if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function () {
                    $.ui.position.flip.left.apply(this, arguments);
                    $.ui.position.fit.left.apply(this, arguments);
                },
                top: function () {
                    $.ui.position.flip.top.apply(this, arguments);
                    $.ui.position.fit.top.apply(this, arguments);
                }
            }
        };

    })();

    var position = $.ui.position;


    /*!
     * jQuery UI Keycode 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


    var keycode = $.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };


    /*!
     * jQuery UI Unique ID 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/


    var uniqueId = $.fn.extend({
        uniqueId: (function () {
            var uuid = 0;

            return function () {
                return this.each(function () {
                    if (!this.id) {
                        this.id = "ui-id-" + (++uuid);
                    }
                });
            };
        })(),

        removeUniqueId: function () {
            return this.each(function () {
                if (/^ui-id-\d+$/.test(this.id)) {
                    $(this).removeAttr("id");
                }
            });
        }
    });


    var safeActiveElement = $.ui.safeActiveElement = function (document) {
        var activeElement;

        // Support: IE 9 only
        // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
        try {
            activeElement = document.activeElement;
        } catch (error) {
            activeElement = document.body;
        }

        // Support: IE 9 - 11 only
        // IE may return null instead of an element
        // Interestingly, this only seems to occur when NOT in an iframe
        if (!activeElement) {
            activeElement = document.body;
        }

        // Support: IE 11 only
        // IE11 returns a seemingly empty object in some cases when accessing
        // document.activeElement from an <iframe>
        if (!activeElement.nodeName) {
            activeElement = document.body;
        }

        return activeElement;
    };


    /*!
     * jQuery UI Menu 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css


    var widgetsMenu = $.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",

            // Callbacks
            blur: null,
            focus: null,
            select: null
        },

        _create: function () {
            this.activeMenu = this.element;

            // Flag used to prevent firing of the click handler
            // as the event bubbles up through nested menus
            this.mouseHandled = false;
            this.element
                .uniqueId()
                .attr({
                    role: this.options.role,
                    tabIndex: 0
                });

            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({

                // Prevent focus from sticking to links inside menu after clicking
                // them (focus should always stay on UL during navigation).
                "mousedown .ui-menu-item": function (event) {
                    event.preventDefault();
                },
                "click .ui-menu-item": function (event) {
                    var target = $(event.target);
                    var active = $($.ui.safeActiveElement(this.document[0]));
                    if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
                        this.select(event);

                        // Only set the mouseHandled flag if the event will bubble, see #9469.
                        if (!event.isPropagationStopped()) {
                            this.mouseHandled = true;
                        }

                        // Open submenu on click
                        if (target.has(".ui-menu").length) {
                            this.expand(event);
                        } else if (!this.element.is(":focus") &&
                            active.closest(".ui-menu").length) {

                            // Redirect focus to the menu
                            this.element.trigger("focus", [true]);

                            // If the active item is on the top level, let it stay active.
                            // Otherwise, blur the active item since it is no longer visible.
                            if (this.active && this.active.parents(".ui-menu").length === 1) {
                                clearTimeout(this.timer);
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function (event) {

                    // Ignore mouse events while typeahead is active, see #10458.
                    // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
                    // is over an item in the menu
                    if (this.previousFilter) {
                        return;
                    }

                    var actualTarget = $(event.target).closest(".ui-menu-item"),
                        target = $(event.currentTarget);

                    // Ignore bubbled events on parent items, see #11641
                    if (actualTarget[0] !== target[0]) {
                        return;
                    }

                    // Remove ui-state-active class from siblings of the newly focused menu item
                    // to avoid a jump caused by adjacent elements both having a class with a border
                    this._removeClass(target.siblings().children(".ui-state-active"),
                        null, "ui-state-active");
                    this.focus(event, target);
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (event, keepActiveItem) {

                    // If there's already an active item, keep it active
                    // If not, activate the first item
                    var item = this.active || this.element.find(this.options.items).eq(0);

                    if (!keepActiveItem) {
                        this.focus(event, item);
                    }
                },
                blur: function (event) {
                    this._delay(function () {
                        var notContained = !$.contains(
                            this.element[0],
                            $.ui.safeActiveElement(this.document[0])
                        );
                        if (notContained) {
                            this.collapseAll(event);
                        }
                    });
                },
                keydown: "_keydown"
            });

            this.refresh();

            // Clicks outside of a menu collapse any open menus
            this._on(this.document, {
                click: function (event) {
                    if (this._closeOnDocumentClick(event)) {
                        this.collapseAll(event);
                    }

                    // Reset the mouseHandled flag
                    this.mouseHandled = false;
                }
            });
        },

        _destroy: function () {
            var items = this.element.find(".ui-menu-item")
                    .removeAttr("role aria-disabled"),
                submenus = items.children(".ui-menu-item-wrapper")
                    .removeUniqueId()
                    .removeAttr("tabIndex role aria-haspopup");

            // Destroy (sub)menus
            this.element
                .removeAttr("aria-activedescendant")
                .find(".ui-menu").addBack()
                .removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled " +
                    "tabIndex")
                .removeUniqueId()
                .show();

            submenus.children().each(function () {
                var elem = $(this);
                if (elem.data("ui-menu-submenu-caret")) {
                    elem.remove();
                }
            });
        },

        _keydown: function (event) {
            var match, prev, character, skip,
                preventDefault = true;

            switch (event.keyCode) {
                case $.ui.keyCode.PAGE_UP:
                    this.previousPage(event);
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    this.nextPage(event);
                    break;
                case $.ui.keyCode.HOME:
                    this._move("first", "first", event);
                    break;
                case $.ui.keyCode.END:
                    this._move("last", "last", event);
                    break;
                case $.ui.keyCode.UP:
                    this.previous(event);
                    break;
                case $.ui.keyCode.DOWN:
                    this.next(event);
                    break;
                case $.ui.keyCode.LEFT:
                    this.collapse(event);
                    break;
                case $.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(event);
                    }
                    break;
                case $.ui.keyCode.ENTER:
                case $.ui.keyCode.SPACE:
                    this._activate(event);
                    break;
                case $.ui.keyCode.ESCAPE:
                    this.collapse(event);
                    break;
                default:
                    preventDefault = false;
                    prev = this.previousFilter || "";
                    skip = false;

                    // Support number pad values
                    character = event.keyCode >= 96 && event.keyCode <= 105 ?
                        (event.keyCode - 96).toString() : String.fromCharCode(event.keyCode);

                    clearTimeout(this.filterTimer);

                    if (character === prev) {
                        skip = true;
                    } else {
                        character = prev + character;
                    }

                    match = this._filterMenuItems(character);
                    match = skip && match.index(this.active.next()) !== -1 ?
                        this.active.nextAll(".ui-menu-item") :
                        match;

                    // If no matches on the current filter, reset to the last character pressed
                    // to move down the menu to the first item that starts with that character
                    if (!match.length) {
                        character = String.fromCharCode(event.keyCode);
                        match = this._filterMenuItems(character);
                    }

                    if (match.length) {
                        this.focus(event, match);
                        this.previousFilter = character;
                        this.filterTimer = this._delay(function () {
                            delete this.previousFilter;
                        }, 1000);
                    } else {
                        delete this.previousFilter;
                    }
            }

            if (preventDefault) {
                event.preventDefault();
            }
        },

        _activate: function (event) {
            if (this.active && !this.active.is(".ui-state-disabled")) {
                if (this.active.children("[aria-haspopup='true']").length) {
                    this.expand(event);
                } else {
                    this.select(event);
                }
            }
        },

        refresh: function () {
            var menus, items, newSubmenus, newItems, newWrappers,
                that = this,
                icon = this.options.icons.submenu,
                submenus = this.element.find(this.options.menus);

            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);

            // Initialize nested menus
            newSubmenus = submenus.filter(":not(.ui-menu)")
                .hide()
                .attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                })
                .each(function () {
                    var menu = $(this),
                        item = menu.prev(),
                        submenuCaret = $("<span>").data("ui-menu-submenu-caret", true);

                    that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon);
                    item
                        .attr("aria-haspopup", "true")
                        .prepend(submenuCaret);
                    menu.attr("aria-labelledby", item.attr("id"));
                });

            this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front");

            menus = submenus.add(this.element);
            items = menus.find(this.options.items);

            // Initialize menu-items containing spaces and/or dashes only as dividers
            items.not(".ui-menu-item").each(function () {
                var item = $(this);
                if (that._isDivider(item)) {
                    that._addClass(item, "ui-menu-divider", "ui-widget-content");
                }
            });

            // Don't refresh list items that are already adapted
            newItems = items.not(".ui-menu-item, .ui-menu-divider");
            newWrappers = newItems.children()
                .not(".ui-menu")
                .uniqueId()
                .attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
            this._addClass(newItems, "ui-menu-item")
                ._addClass(newWrappers, "ui-menu-item-wrapper");

            // Add aria-disabled attribute to any disabled menu item
            items.filter(".ui-state-disabled").attr("aria-disabled", "true");

            // If the active item has been removed, blur the menu
            if (this.active && !$.contains(this.element[0], this.active[0])) {
                this.blur();
            }
        },

        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },

        _setOption: function (key, value) {
            if (key === "icons") {
                var icons = this.element.find(".ui-menu-icon");
                this._removeClass(icons, null, this.options.icons.submenu)
                    ._addClass(icons, null, value.submenu);
            }
            this._super(key, value);
        },

        _setOptionDisabled: function (value) {
            this._super(value);

            this.element.attr("aria-disabled", String(value));
            this._toggleClass(null, "ui-state-disabled", !!value);
        },

        focus: function (event, item) {
            var nested, focused, activeParent;
            this.blur(event, event && event.type === "focus");

            this._scrollIntoView(item);

            this.active = item.first();

            focused = this.active.children(".ui-menu-item-wrapper");
            this._addClass(focused, null, "ui-state-active");

            // Only update aria-activedescendant if there's a role
            // otherwise we assume focus is managed elsewhere
            if (this.options.role) {
                this.element.attr("aria-activedescendant", focused.attr("id"));
            }

            // Highlight active parent menu item, if any
            activeParent = this.active
                .parent()
                .closest(".ui-menu-item")
                .children(".ui-menu-item-wrapper");
            this._addClass(activeParent, null, "ui-state-active");

            if (event && event.type === "keydown") {
                this._close();
            } else {
                this.timer = this._delay(function () {
                    this._close();
                }, this.delay);
            }

            nested = item.children(".ui-menu");
            if (nested.length && event && (/^mouse/.test(event.type))) {
                this._startOpening(nested);
            }
            this.activeMenu = item.parent();

            this._trigger("focus", event, {item: item});
        },

        _scrollIntoView: function (item) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if (this._hasScroll()) {
                borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0;
                paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.outerHeight();

                if (offset < 0) {
                    this.activeMenu.scrollTop(scroll + offset);
                } else if (offset + itemHeight > elementHeight) {
                    this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
                }
            }
        },

        blur: function (event, fromFocus) {
            if (!fromFocus) {
                clearTimeout(this.timer);
            }

            if (!this.active) {
                return;
            }

            this._removeClass(this.active.children(".ui-menu-item-wrapper"),
                null, "ui-state-active");

            this._trigger("blur", event, {item: this.active});
            this.active = null;
        },

        _startOpening: function (submenu) {
            clearTimeout(this.timer);

            // Don't open if already open fixes a Firefox bug that caused a .5 pixel
            // shift in the submenu position when mousing over the caret icon
            if (submenu.attr("aria-hidden") !== "true") {
                return;
            }

            this.timer = this._delay(function () {
                this._close();
                this._open(submenu);
            }, this.delay);
        },

        _open: function (submenu) {
            var position = $.extend({
                of: this.active
            }, this.options.position);

            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(submenu.parents(".ui-menu"))
                .hide()
                .attr("aria-hidden", "true");

            submenu
                .show()
                .removeAttr("aria-hidden")
                .attr("aria-expanded", "true")
                .position(position);
        },

        collapseAll: function (event, all) {
            clearTimeout(this.timer);
            this.timer = this._delay(function () {

                // If we were passed an event, look for the submenu that contains the event
                var currentMenu = all ? this.element :
                    $(event && event.target).closest(this.element.find(".ui-menu"));

                // If we found no valid submenu ancestor, use the main menu to close all
                // sub menus anyway
                if (!currentMenu.length) {
                    currentMenu = this.element;
                }

                this._close(currentMenu);

                this.blur(event);

                // Work around active item staying active after menu is blurred
                this._removeClass(currentMenu.find(".ui-state-active"), null, "ui-state-active");

                this.activeMenu = currentMenu;
            }, this.delay);
        },

        // With no arguments, closes the currently active menu - if nothing is active
        // it closes all menus.  If passed an argument, it will search for menus BELOW
        _close: function (startMenu) {
            if (!startMenu) {
                startMenu = this.active ? this.active.parent() : this.element;
            }

            startMenu.find(".ui-menu")
                .hide()
                .attr("aria-hidden", "true")
                .attr("aria-expanded", "false");
        },

        _closeOnDocumentClick: function (event) {
            return !$(event.target).closest(".ui-menu").length;
        },

        _isDivider: function (item) {

            // Match hyphen, em dash, en dash
            return !/[^\-\u2014\u2013\s]/.test(item.text());
        },

        collapse: function (event) {
            var newItem = this.active &&
                this.active.parent().closest(".ui-menu-item", this.element);
            if (newItem && newItem.length) {
                this._close();
                this.focus(event, newItem);
            }
        },

        expand: function (event) {
            var newItem = this.active &&
                this.active
                    .children(".ui-menu ")
                    .find(this.options.items)
                    .first();

            if (newItem && newItem.length) {
                this._open(newItem.parent());

                // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
                this._delay(function () {
                    this.focus(event, newItem);
                });
            }
        },

        next: function (event) {
            this._move("next", "first", event);
        },

        previous: function (event) {
            this._move("prev", "last", event);
        },

        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },

        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },

        _move: function (direction, filter, event) {
            var next;
            if (this.active) {
                if (direction === "first" || direction === "last") {
                    next = this.active
                        [direction === "first" ? "prevAll" : "nextAll"](".ui-menu-item")
                        .eq(-1);
                } else {
                    next = this.active
                        [direction + "All"](".ui-menu-item")
                        .eq(0);
                }
            }
            if (!next || !next.length || !this.active) {
                next = this.activeMenu.find(this.options.items)[filter]();
            }

            this.focus(event, next);
        },

        nextPage: function (event) {
            var item, base, height;

            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isLastItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function () {
                    item = $(this);
                    return item.offset().top - base - height < 0;
                });

                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items)
                    [!this.active ? "first" : "last"]());
            }
        },

        previousPage: function (event) {
            var item, base, height;
            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isFirstItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function () {
                    item = $(this);
                    return item.offset().top - base + height > 0;
                });

                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items).first());
            }
        },

        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },

        select: function (event) {

            // TODO: It should never be possible to not have an active item at this
            // point, but the tests don't trigger mouseenter before click.
            this.active = this.active || $(event.target).closest(".ui-menu-item");
            var ui = {item: this.active};
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(event, true);
            }
            this._trigger("select", event, ui);
        },

        _filterMenuItems: function (character) {
            var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                regex = new RegExp("^" + escapedCharacter, "i");

            return this.activeMenu
                .find(this.options.items)

                // Only match on items, not dividers or other content (#10571)
                .filter(".ui-menu-item")
                .filter(function () {
                    return regex.test(
                        $.trim($(this).children(".ui-menu-item-wrapper").text()));
                });
        }
    });


    /*!
     * jQuery UI Autocomplete 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css


    $.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,

            // Callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },

        requestIndex: 0,
        pending: 0,

        _create: function () {

            // Some browsers only repeat keydown events, not keypress events,
            // so we use the suppressKeyPress flag to determine if we've already
            // handled the keydown event. #7269
            // Unfortunately the code for & in keypress is the same as the up arrow,
            // so we use the suppressKeyPressRepeat flag to avoid handling keypress
            // events when we know the keydown event was used to modify the
            // search term. #7799
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
                nodeName = this.element[0].nodeName.toLowerCase(),
                isTextarea = nodeName === "textarea",
                isInput = nodeName === "input";

            // Textareas are always multi-line
            // Inputs are always single-line, even if inside a contentEditable element
            // IE also treats inputs as contentEditable
            // All other element types are determined by whether or not they're contentEditable
            this.isMultiLine = isTextarea || !isInput && this._isContentEditable(this.element);

            this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"];
            this.isNewMenu = true;

            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");

            this._on(this.element, {
                keydown: function (event) {
                    if (this.element.prop("readOnly")) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }

                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                        case keyCode.PAGE_UP:
                            suppressKeyPress = true;
                            this._move("previousPage", event);
                            break;
                        case keyCode.PAGE_DOWN:
                            suppressKeyPress = true;
                            this._move("nextPage", event);
                            break;
                        case keyCode.UP:
                            suppressKeyPress = true;
                            this._keyEvent("previous", event);
                            break;
                        case keyCode.DOWN:
                            suppressKeyPress = true;
                            this._keyEvent("next", event);
                            break;
                        case keyCode.ENTER:

                            // when menu is open and has focus
                            if (this.menu.active) {

                                // #6055 - Opera still allows the keypress to occur
                                // which causes forms to submit
                                suppressKeyPress = true;
                                event.preventDefault();
                                this.menu.select(event);
                            }
                            break;
                        case keyCode.TAB:
                            if (this.menu.active) {
                                this.menu.select(event);
                            }
                            break;
                        case keyCode.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                if (!this.isMultiLine) {
                                    this._value(this.term);
                                }
                                this.close(event);

                                // Different browsers have different default behavior for escape
                                // Single press can mean undo or clear
                                // Double press in IE means clear the whole form
                                event.preventDefault();
                            }
                            break;
                        default:
                            suppressKeyPressRepeat = true;

                            // search timeout should be triggered before the input value is changed
                            this._searchTimeout(event);
                            break;
                    }
                },
                keypress: function (event) {
                    if (suppressKeyPress) {
                        suppressKeyPress = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if (suppressKeyPressRepeat) {
                        return;
                    }

                    // Replicate some key handlers to allow them to repeat in Firefox and Opera
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                        case keyCode.PAGE_UP:
                            this._move("previousPage", event);
                            break;
                        case keyCode.PAGE_DOWN:
                            this._move("nextPage", event);
                            break;
                        case keyCode.UP:
                            this._keyEvent("previous", event);
                            break;
                        case keyCode.DOWN:
                            this._keyEvent("next", event);
                            break;
                    }
                },
                input: function (event) {
                    if (suppressInput) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout(event);
                },
                focus: function () {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function (event) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return;
                    }

                    clearTimeout(this.searching);
                    this.close(event);
                    this._change(event);
                }
            });

            this._initSource();
            this.menu = $("<ul>")
                .appendTo(this._appendTo())
                .menu({

                    // disable ARIA support, the live region takes care of that
                    role: null
                })
                .hide()
                .menu("instance");

            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function (event) {

                    // prevent moving focus out of the text field
                    event.preventDefault();

                    // IE doesn't prevent moving focus even with event.preventDefault()
                    // so we set a flag to know when we should ignore the blur event
                    this.cancelBlur = true;
                    this._delay(function () {
                        delete this.cancelBlur;

                        // Support: IE 8 only
                        // Right clicking a menu item or selecting text from the menu items will
                        // result in focus moving out of the input. However, we've already received
                        // and ignored the blur event because of the cancelBlur flag set above. So
                        // we restore focus to ensure that the menu closes properly based on the user's
                        // next actions.
                        if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                            this.element.trigger("focus");
                        }
                    });
                },
                menufocus: function (event, ui) {
                    var label, item;

                    // support: Firefox
                    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) {
                            this.menu.blur();

                            this.document.one("mousemove", function () {
                                $(event.target).trigger(event.originalEvent);
                            });

                            return;
                        }
                    }

                    item = ui.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", event, {item: item})) {

                        // use value to match what will end up in the input, if it was a key event
                        if (event.originalEvent && /^key/.test(event.originalEvent.type)) {
                            this._value(item.value);
                        }
                    }

                    // Announce the value in the liveRegion
                    label = ui.item.attr("aria-label") || item.value;
                    if (label && $.trim(label).length) {
                        this.liveRegion.children().hide();
                        $("<div>").text(label).appendTo(this.liveRegion);
                    }
                },
                menuselect: function (event, ui) {
                    var item = ui.item.data("ui-autocomplete-item"),
                        previous = this.previous;

                    // Only trigger when focus was lost (click on menu)
                    if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                        this.element.trigger("focus");
                        this.previous = previous;

                        // #6109 - IE triggers two focus events and the second
                        // is asynchronous, so we need to reset the previous
                        // term synchronously and asynchronously :-(
                        this._delay(function () {
                            this.previous = previous;
                            this.selectedItem = item;
                        });
                    }

                    if (false !== this._trigger("select", event, {item: item})) {
                        this._value(item.value);
                    }

                    // reset the term after the select event
                    // this allows custom select handling to work properly
                    this.term = this._value();

                    this.close(event);
                    this.selectedItem = item;
                }
            });

            this.liveRegion = $("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            })
                .appendTo(this.document[0].body);

            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");

            // Turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete");
                }
            });
        },

        _destroy: function () {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove();
        },

        _setOption: function (key, value) {
            this._super(key, value);
            if (key === "source") {
                this._initSource();
            }
            if (key === "appendTo") {
                this.menu.element.appendTo(this._appendTo());
            }
            if (key === "disabled" && value && this.xhr) {
                this.xhr.abort();
            }
        },

        _isEventTargetInWidget: function (event) {
            var menuElement = this.menu.element[0];

            return event.target === this.element[0] ||
                event.target === menuElement ||
                $.contains(menuElement, event.target);
        },

        _closeOnClickOutside: function (event) {
            if (!this._isEventTargetInWidget(event)) {
                this.close();
            }
        },

        _appendTo: function () {
            var element = this.options.appendTo;

            if (element) {
                element = element.jquery || element.nodeType ?
                    $(element) :
                    this.document.find(element).eq(0);
            }

            if (!element || !element[0]) {
                element = this.element.closest(".ui-front, dialog");
            }

            if (!element.length) {
                element = this.document[0].body;
            }

            return element;
        },

        _initSource: function () {
            var array, url,
                that = this;
            if ($.isArray(this.options.source)) {
                array = this.options.source;
                this.source = function (request, response) {
                    response($.ui.autocomplete.filter(array, request.term));
                };
            } else if (typeof this.options.source === "string") {
                url = this.options.source;
                this.source = function (request, response) {
                    if (that.xhr) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax({
                        url: url,
                        data: request,
                        dataType: "json",
                        success: function (data) {
                            response(data);
                        },
                        error: function () {
                            response([]);
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },

        _searchTimeout: function (event) {
            clearTimeout(this.searching);
            this.searching = this._delay(function () {

                // Search if the value has changed, or if the user retypes the same value (see #7434)
                var equalValues = this.term === this._value(),
                    menuVisible = this.menu.element.is(":visible"),
                    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

                if (!equalValues || (equalValues && !menuVisible && !modifierKey)) {
                    this.selectedItem = null;
                    this.search(null, event);
                }
            }, this.options.delay);
        },

        search: function (value, event) {
            value = value != null ? value : this._value();

            // Always save the actual value, not the one passed as an argument
            this.term = this._value();

            if (value.length < this.options.minLength) {
                return this.close(event);
            }

            if (this._trigger("search", event) === false) {
                return;
            }

            return this._search(value);
        },

        _search: function (value) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = false;

            this.source({term: value}, this._response());
        },

        _response: function () {
            var index = ++this.requestIndex;

            return $.proxy(function (content) {
                if (index === this.requestIndex) {
                    this.__response(content);
                }

                this.pending--;
                if (!this.pending) {
                    this._removeClass("ui-autocomplete-loading");
                }
            }, this);
        },

        __response: function (content) {
            if (content) {
                content = this._normalize(content);
            }
            this._trigger("response", null, {content: content});
            if (!this.options.disabled && content && content.length && !this.cancelSearch) {
                this._suggest(content);
                this._trigger("open");
            } else {

                // use ._close() instead of .close() so we don't cancel future searches
                this._close();
            }
        },

        close: function (event) {
            this.cancelSearch = true;
            this._close(event);
        },

        _close: function (event) {

            // Remove the handler that closes the menu on outside clicks
            this._off(this.document, "mousedown");

            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", event);
            }
        },

        _change: function (event) {
            if (this.previous !== this._value()) {
                this._trigger("change", event, {item: this.selectedItem});
            }
        },

        _normalize: function (items) {

            // assume all items have the right format when the first item is complete
            if (items.length && items[0].label && items[0].value) {
                return items;
            }
            return $.map(items, function (item) {
                if (typeof item === "string") {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend({}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                });
            });
        },

        _suggest: function (items) {
            var ul = this.menu.element.empty();
            this._renderMenu(ul, items);
            this.isNewMenu = true;
            this.menu.refresh();

            // Size and position menu
            ul.show();
            this._resizeMenu();
            ul.position($.extend({
                of: this.element
            }, this.options.position));

            if (this.options.autoFocus) {
                this.menu.next();
            }

            // Listen for interactions outside of the widget (#6642)
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },

        _resizeMenu: function () {
            var ul = this.menu.element;
            ul.outerWidth(Math.max(
                // Firefox wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping (#7513)
                ul.width("").outerWidth() + 1,
                this.element.outerWidth()
            ));
        },

        _renderMenu: function (ul, items) {
            var that = this;
            $.each(items, function (index, item) {
                that._renderItemData(ul, item);
            });
        },

        _renderItemData: function (ul, item) {
            return this._renderItem(ul, item).data("ui-autocomplete-item", item);
        },

        _renderItem: function (ul, item) {
            return $("<li>")
                .append($("<div>").text(item.label))
                .appendTo(ul);
        },

        _move: function (direction, event) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, event);
                return;
            }
            if (this.menu.isFirstItem() && /^previous/.test(direction) ||
                this.menu.isLastItem() && /^next/.test(direction)) {

                if (!this.isMultiLine) {
                    this._value(this.term);
                }

                this.menu.blur();
                return;
            }
            this.menu[direction](event);
        },

        widget: function () {
            return this.menu.element;
        },

        _value: function () {
            return this.valueMethod.apply(this.element, arguments);
        },

        _keyEvent: function (keyEvent, event) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(keyEvent, event);

                // Prevents moving cursor to beginning/end of the text field in some browsers
                event.preventDefault();
            }
        },

        // Support: Chrome <=50
        // We should be able to just use this.element.prop( "isContentEditable" )
        // but hidden elements always report false in Chrome.
        // https://code.google.com/p/chromium/issues/detail?id=313082
        _isContentEditable: function (element) {
            if (!element.length) {
                return false;
            }

            var editable = element.prop("contentEditable");

            if (editable === "inherit") {
                return this._isContentEditable(element.parent());
            }

            return editable === "true";
        }
    });

    $.extend($.ui.autocomplete, {
        escapeRegex: function (value) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (array, term) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
            return $.grep(array, function (value) {
                return matcher.test(value.label || value.value || value);
            });
        }
    });

// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
    $.widget("ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (amount) {
                    return amount + (amount > 1 ? " results are" : " result is") +
                        " available, use up and down arrow keys to navigate.";
                }
            }
        },

        __response: function (content) {
            var message;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return;
            }
            if (content && content.length) {
                message = this.options.messages.results(content.length);
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.children().hide();
            $("<div>").text(message).appendTo(this.liveRegion);
        }
    });

    var widgetsAutocomplete = $.ui.autocomplete;


}));

function vote_after_login(response){
    $('.popup:last').remove();
    $('a[onclick="vote(\'' + response.id + '\', \'like\')"]').trigger('click');
}

function vote(answerId, type) {
    $.post(PT_API + '/vote', {answer_id: answerId, type: type}, function (res) {
        if (res.error) {
            if (res.error === 'login_required'){
                let a = $('<a href="#" data-popup="login" data-id="' + answerId + '" data-callback="vote_after_login"></a>').appendTo('body');
                a.trigger('click').remove();
            } else {
                Snackbar.show({
                    text: res.error,
                    actionText: "Tamam",
                    actionTextColor: "#fff"
                });
            }
        } else {
            Snackbar.show({
                text: res.success,
                actionText: "Tamam",
                actionTextColor: "#fff"
            });
            $('#' + type + answerId.replaceAll('=', '')).html(parseInt($('#' + type + answerId.replaceAll('=', '')).text()) + 1);
        }
    }, 'json');
}

function correctAnswer(answerId, el) {
    $.post(PT_API + '/correct-answer', {answer_id: answerId}, function (res) {
        if (res.error) {
            Snackbar.show({
                text: res.error,
                actionText: "Tamam",
                actionTextColor: "#fff"
            });
        } else {
            Snackbar.show({
                text: res.success,
                actionText: "Tamam",
                actionTextColor: "#fff"
            });
            $('.correct-btn').hide();
            $(el).closest('.qa-answer').addClass('correct-answer');
        }
    }, 'json');
}

function follow(userId, elem) {
    $.post(PT_API + '/follow-user', {id: userId}, function (res) {
        if (res.error) {
            Snackbar.show({
                text: res.error,
                actionText: "Tamam",
                actionTextColor: "#fff"
            });
        } else {
            $(elem).html(res.text);
            if (res.remove) {
                $(elem).removeClass(res.remove);
            } else {
                $(elem).addClass(res.add);
            }
        }
    }, 'json');
}

$('.toggle-category-btn').on('click', function (e) {
    $('.article-sidebar').toggleClass('hide');
    e.preventDefault();
})

$('.theme-switcher').on('click', function (e) {
    $('body').toggleClass('dark');
    if (document.body.classList.value == 'dark') {
        setCookie('theme', 'dark', 30);
    } else {
        setCookie('theme', 'dark', -30);
    }
    e.preventDefault();
});

$(function () {

    $(document.body).on('click', '[data-popup-close]', function (e) {
        e.preventDefault();
        $(this).closest('.popup').remove();
    });

    $(document.body).on('click', '[data-popup]', function (e) {
        let popup = $(`<div class="popup"><div class="popup-inner"><div class="popup-loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div></div></div>`).appendTo('body');
        let data = {
            id: $(this).data('id')
        };
        if ($(this).data('callback')){
            data.callback = $(this).data('callback');
        }
        $.post(PT_API + '/popup/' + $(this).data('popup'), data, function (response) {
            if (response.error) {

            } else {
                popup.find('.popup-inner').html(response.popup);
            }
        }, 'json');
        e.preventDefault();
    });

    $(document.body).on('keyup', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            $('.popup:last').remove();
        }
    });

    $(document.body).on('click', '.user-action >a', function(e){
        e.preventDefault();
        $('.user-dropdown').toggleClass('active');
    });

    $(document.body).on('click', function(e){
        if (!$('.user-action')[0].contains(e.target)){
            $('.user-dropdown').removeClass('active');
        }
    });

    // $(document.body).on('click', '.popup', function(e){
    //     if (!$('.popup-inner')[0].contains(e.target)){
    //         $('.popup').remove();
    //     }
    // });

    $(document.body).on('click', '.header-menu', function(e){
        e.preventDefault();
        $('.main-sidebar').toggleClass('active');
    });

    $('[data-preloader]').remove();
    $('[data-afterloader]').show();

    $(document.body).on('click', '.qa-sidebar-btn', function(e){
        e.preventDefault();
        $('.qa-sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $(document.body).on('click', '.qa-ask-sidebar-btn', function(e){
        e.preventDefault();
        $('.qa-ask-sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

});