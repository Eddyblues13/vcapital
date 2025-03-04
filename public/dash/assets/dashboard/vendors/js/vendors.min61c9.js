! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        f = c.hasOwnProperty,
        h = f.toString,
        d = h.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, o, s = (n = n || i).createElement("script");
        if (s.text = e, t)
            for (r in v)(o = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, o);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var w = "3.4.1",
        _ = function(e, t) {
            return new _.fn.init(e, t)
        },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: w,
        constructor: _,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}, r = !1, s[t] = _.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, _.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = f.call(t, "constructor") && t.constructor) || h.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(E, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                a = [];
            if (x(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, i, r, o, s, a, l, c, u, f, h, d, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            _ = e.document,
            E = 0,
            x = 0,
            T = le(),
            S = le(),
            k = le(),
            C = le(),
            A = function(e, t) {
                return e === t && (f = !0), 0
            },
            D = {}.hasOwnProperty,
            O = [],
            N = O.pop,
            I = O.push,
            L = O.push,
            j = O.slice,
            P = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]",
            q = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(H + "+", "g"),
            U = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            Y = new RegExp("^" + H + "*," + H + "*"),
            X = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            B = new RegExp(H + "|>"),
            z = new RegExp(q),
            K = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            },
            $ = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                h()
            },
            se = we(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(O = j.call(_.childNodes), _.childNodes), O[_.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: O.length ? function(e, t) {
                    I.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, r) {
            var o, a, c, u, f, p, v, y = t && t.ownerDocument,
                E = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;
            if (!r && ((t ? t.ownerDocument || t : _) !== d && h(t), t = t || d, g)) {
                if (11 !== E && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === E) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (f[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                    }
                if (n.qsa && !C[e + " "] && (!m || !m.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === E && B.test(e)) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + be(p[a]);
                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        C(e, !0)
                    } finally {
                        u === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(U, "$1"), t, i, r)
        }

        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce(function(t) {
                return t = +t, ce(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !$.test(t || n && n.nodeName || "HTML")
            }, h = ae.setDocument = function(e) {
                var t, r, s = e ? e.ownerDocument || e : _;
                return s !== d && 9 === s.nodeType && s.documentElement && (p = (d = s).documentElement, g = !o(d), _ !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ue(function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ue(function(e) {
                    return p.appendChild(e).id = w, !d.getElementsByName || !d.getElementsByName(w).length
                }), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ue(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === _ && b(_, e) ? -1 : t === d || t.ownerDocument === _ && b(_, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (r === o) return he(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? he(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0
                }), d
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && h(e), n.matchesSelector && g && !C[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    C(t, !0)
                }
                return 0 < ae(t, d, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && h(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== d && h(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, re)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), f) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var r = ae.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(F, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (b = (d = (c = (u = (f = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            u[e] = [E, d, b];
                                            break
                                        }
                                } else if (y && (b = d = (c = (u = (f = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b)
                                    for (;
                                        (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (f = h[w] || (h[w] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [E, b]), h !== t)););
                                return (b -= r) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[w] ? r(t) : 1 < r.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                            for (var i, o = r(e, t), s = o.length; s--;) e[i = P(e, o[s])] = !(n[i] = o[s])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(U, "$1"));
                        return i[w] ? ce(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ce(function(e) {
                        return function(t) {
                            return 0 < ae(e, t).length
                        }
                    }),
                    contains: ce(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || r(t)).indexOf(e)
                            }
                    }),
                    lang: ce(function(e) {
                        return K.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = de(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function we(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = x++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var c, u, f, h = [E, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (u = (f = t[w] || (t[w] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === E && c[1] === a) return h[2] = c[2];
                                if ((u[o] = h)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function _e(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ee(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function xe(e, t, n, i, r, o) {
            return i && !i[w] && (i = xe(i)), r && !r[w] && (r = xe(r, o)), ce(function(o, s, a, l) {
                var c, u, f, h = [],
                    d = [],
                    p = s.length,
                    g = o || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : Ee(g, h, e, a, l),
                    v = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l), i)
                    for (c = Ee(v, d), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (v[d[u]] = !(m[d[u]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(f = v[u]) && c.push(m[u] = f);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(f = v[u]) && -1 < (c = r ? P(o, f) : h[u]) && (o[c] = !(s[c] = f))
                    }
                } else v = Ee(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : L.apply(s, v)
            })
        }

        function Te(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = we(function(e) {
                    return e === t
                }, a, !0), f = we(function(e) {
                    return -1 < P(t, e)
                }, a, !0), h = [function(e, n, i) {
                    var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                    return t = null, r
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) h = [we(_e(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return xe(1 < l && _e(h), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(U, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te(e = e.slice(r)), r < o && be(e))
                    }
                    h.push(n)
                }
            return _e(h)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
            var n, r, o, s, a, l, c, u = S[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = Y.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(U, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = V[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : S(e, l).slice(0)
        }, a = ae.compile = function(e, t) {
            var n, r, o, a, l, u, f = [],
                p = [],
                m = k[e + " "];
            if (!m) {
                for (t || (t = s(e)), n = t.length; n--;)(m = Te(t[n]))[w] ? f.push(m) : p.push(m);
                (m = k(e, (r = p, a = 0 < (o = f).length, l = 0 < r.length, u = function(e, t, n, s, u) {
                    var f, p, m, v = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        _ = c,
                        x = e || l && i.find.TAG("*", u),
                        T = E += null == _ ? 1 : Math.random() || .1,
                        S = x.length;
                    for (u && (c = t === d || t || u); y !== S && null != (f = x[y]); y++) {
                        if (l && f) {
                            for (p = 0, t || f.ownerDocument === d || (h(f), n = !g); m = r[p++];)
                                if (m(f, t || d, n)) {
                                    s.push(f);
                                    break
                                }
                            u && (E = T)
                        }
                        a && ((f = !m && f) && v--, e && b.push(f))
                    }
                    if (v += y, a && y !== v) {
                        for (p = 0; m = o[p++];) m(b, w, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || w[y] || (w[y] = N.call(s));
                            w = Ee(w)
                        }
                        L.apply(s, w), u && !e && 0 < w.length && 1 < v + o.length && ae.uniqueSort(s)
                    }
                    return u && (E = T, c = _), b
                }, a ? ce(u) : u))).selector = e
            }
            return m
        }, l = ae.select = function(e, t, n, r) {
            var o, l, c, u, f, h = "function" == typeof e && e,
                d = !r && s(e = h.selector || e);
            if (n = n || [], 1 === d.length) {
                if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                    if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && be(l))) return L.apply(n, r), n;
                        break
                    }
            }
            return (h || a(e, d))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!f, h(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(e);
    _.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;
    var S = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && _(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        k = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        C = _.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, t, n) {
        return g(t) ? _.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return -1 < l.call(t, e) !== n
        }) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (_.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
            return 1 < i ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && C.test(e) ? _(e) : e || [], !1).length
        }
    });
    var N, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && _.isPlainObject(t))
                    for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, N = _(i);
    var L = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && _(e);
            if (!C.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? _.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(n, i) {
            var r = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), 1 < this.length && (j[e] || _.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function H(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function W(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, _.each(t.match(R) || [], function(e, t) {
            n[t] = !0
        }), n) : _.extend({}, e);
        var i, r, o, s, a = [],
            l = [],
            c = -1,
            u = function() {
                for (s = s || e.once, o = i = !0; l.length; c = -1)
                    for (r = l.shift(); ++c < a.length;) !1 === a[c].apply(r[0], r[1]) && e.stopOnFalse && (c = a.length, r = !1);
                e.memory || (r = !1), i = !1, s && (a = r ? [] : "")
            },
            f = {
                add: function() {
                    return a && (r && !i && (c = a.length - 1, l.push(r)), function t(n) {
                        _.each(n, function(n, i) {
                            g(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        })
                    }(arguments), r && !i && u()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = _.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < _.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = r = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], r || i || (a = r = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, _.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _.Deferred(function(t) {
                            _.each(n, function(n, i) {
                                var r = g(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        var o = 0;

                        function s(t, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? r ? c.call(e, s(o, n, H, r), s(o, n, M, r)) : (o++, c.call(e, s(o, n, H, r), s(o, n, M, r), s(o, n, H, n.notifyWith))) : (i !== H && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = r ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), o <= t + 1 && (i !== M && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return _.Deferred(function(e) {
                            n[0][3].add(s(0, e, g(r) ? r : H, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : H)), n[2][3].add(s(0, e, g(i) ? i : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, r) : r
                    }
                },
                o = {};
            return _.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                s = _.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = 1 < arguments.length ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (W(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(r[n] && r[n].then))) return s.then();
            for (; n--;) W(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var F = _.Deferred();

    function U() {
        i.removeEventListener("DOMContentLoaded", U), e.removeEventListener("load", U), _.ready()
    }
    _.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || F.resolveWith(i, [_])
        }
    }), _.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", U), e.addEventListener("load", U));
    var Y = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (a in r = !0, n) Y(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, g(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(_(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        X = /^-ms-/,
        B = /-([a-z])/g;

    function z(e, t) {
        return t.toUpperCase()
    }

    function K(e) {
        return e.replace(X, "ms-").replace(B, z)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function $() {
        this.expando = _.expando + $.uid++
    }
    $.uid = 1, $.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[K(t)] = n;
            else
                for (i in t) r[K(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(R) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var Q = new $,
        G = new $,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return G.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = G.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), ee(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                G.set(this, e)
            }) : Y(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                this.each(function() {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, _.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = _._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                _.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = _.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Q.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = i.documentElement,
        oe = function(e) {
            return _.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    re.getRootNode && (oe = function(e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === _.css(e, "display")
        },
        le = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function ce(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (_.cssNumber[t] || "px" !== c && +l) && ne.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) _.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, _.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var ue = {};

    function fe(e, t) {
        for (var n, i, r, o, s, a, l, c = [], u = 0, f = e.length; u < f; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Q.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && ae(i) && (c[u] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = ue[a]) || (o = s.body.appendChild(s.createElement(a)), l = _.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ue[a] = l)))) : "none" !== n && (c[u] = "none", Q.set(i, "display", n)));
        for (u = 0; u < f; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    _.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? _.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, be, we = /<|&#?\w+;/;

    function _e(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === b(o)) _.merge(h, o.nodeType ? [o] : o);
                else if (we.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (de.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            _.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = h[d++];)
            if (i && -1 < _.inArray(o, i)) r && r.push(o);
            else if (c = oe(o), s = me(f.appendChild(o), "script"), c && ve(s), n)
            for (u = 0; o = s[u++];) pe.test(o.type || "") && n.push(o);
        return f
    }
    ye = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ee = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Se() {
        return !0
    }

    function ke() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ae(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ke;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return _().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, r, i, n)
        })
    }

    function De(e, t, n) {
        n ? (Q.set(e, t, !1), _.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, s = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(_.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = o.call(arguments), Q.set(this, t, s), i = n(this, t), this[t](), s !== (r = Q.get(this, t)) || i ? Q.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                } else s.length && (Q.set(this, t, {
                    value: _.event.trigger(_.extend(s[0], _.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, t) && _.event.add(e, t, Se)
    }
    _.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = Q.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(re, r), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(R) || [""]).length; c--;) d = g = (a = Te.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = _.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = _.event.special[d] || {}, u = _.extend({
                    type: d,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && _.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(R) || [""]).length; c--;)
                    if (d = g = (a = Te.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = _.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) u = h[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, f.remove && f.remove.call(e, u));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || _.removeEvent(e, d, m.handle), delete l[d])
                    } else
                        for (d in l) _.event.remove(e, d + t[c], n, i, !0);
                _.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = _.event.fix(e),
                l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[a.type] || [],
                u = _.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = _.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < _(r, this).index(c) : _.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && A(t, "input") && De(t, "click", Se), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        _.event.special[e] = {
            setup: function() {
                return De(this, e, Ce), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || _.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, i) {
            return Ae(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ae(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ne = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function He(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), s = Q.set(t, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) _.event.add(t, r, c[r][n]);
            G.hasData(e) && (a = G.access(e), l = _.extend({}, a), G.set(t, l))
        }
    }

    function Me(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, c, u, f = 0,
            h = e.length,
            d = h - 1,
            m = t[0],
            v = g(m);
        if (v || 1 < h && "string" == typeof m && !p.checkClone && Ie.test(m)) return e.each(function(r) {
            var o = e.eq(r);
            v && (t[0] = m.call(this, r, o.html())), Me(o, t, n, i)
        });
        if (h && (o = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = _.map(me(r, "script"), Pe)).length; f < h; f++) c = r, f !== d && (c = _.clone(c, !0, !0), l && _.merge(a, me(c, "script"))), n.call(e[f], c, f);
            if (l)
                for (u = a[a.length - 1].ownerDocument, _.map(a, Re), f = 0; f < l; f++) c = a[f], pe.test(c.type || "") && !Q.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : y(c.textContent.replace(Le, ""), c, u))
        }
        return e
    }

    function We(e, t, n) {
        for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(me(i)), i.parentNode && (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e.replace(Oe, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0),
                f = oe(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (s = me(u), i = 0, r = (o = me(e)).length; i < r; i++) a = o[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && he.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), s = s || me(u), i = 0, r = o.length; i < r; i++) He(o[i], s[i]);
                else He(e, u);
            return 0 < (s = me(u, "script")).length && ve(s, !f && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return Y(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Me(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return Y(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Me(this, arguments, function(t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, i = [], r = _(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), _(r[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var qe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ue = new RegExp(ie.join("|"), "i");

    function Ye(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = _.style(e, t)), !p.pixelBoxStyles() && qe.test(s) && Ue.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Xe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", s = 12 === n(u.offsetWidth / 3), re.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, s, a, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        ze = i.createElement("div").style,
        Ke = {};

    function Ve(e) {
        return _.cssProps[e] || Ke[e] || (e in ze ? e : Ke[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;)
                if ((e = Be[n] + t) in ze) return e
        }(e) || e)
    }
    var $e = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += _.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= _.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= _.css(e, "border" + ie[s] + "Width", !0, r))) : (l += _.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += _.css(e, "border" + ie[s] + "Width", !0, r) : a += _.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
    }

    function tt(e, t, n) {
        var i = Fe(e),
            r = (!p.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
            o = r,
            s = Ye(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (qe.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!p.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === _.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === _.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ye(e, "opacity");
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
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = K(t),
                    l = Qe.test(t),
                    c = e.style;
                if (l || (t = Ve(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ce(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = K(t);
            return Qe.test(t) || (t = Ve(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ye(e, t, i)), "normal" === r && t in Je && (r = Je[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !$e.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : le(e, Ge, function() {
                    return tt(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = Fe(e),
                    s = !p.scrollboxSize() && "absolute" === o.position,
                    a = (s || i) && "border-box" === _.css(e, "boxSizing", !1, o),
                    l = i ? et(e, t, i, a, o) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Ze(0, n, l)
            }
        }
    }), _.cssHooks.marginLeft = Xe(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Ze)
    }), _.fn.extend({
        css: function(e, t) {
            return Y(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Fe(e), r = t.length; s < r; s++) o[t[s]] = _.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((_.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = nt.prototype.init, _.fx.step = {};
    var it, rt, ot, st, at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ct() {
        rt && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, _.fx.interval), _.fx.tick())
    }

    function ut() {
        return e.setTimeout(function() {
            it = void 0
        }), it = Date.now()
    }

    function ft(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ht(e, t, n) {
        for (var i, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function dt(e, t, n) {
        var i, r, o = 0,
            s = dt.prefilters.length,
            a = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = it || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = K(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = _.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); o < s; o++)
            if (i = dt.prefilters[o].call(c, e, u, c.opts)) return g(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(u, ht, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t,
                h = this,
                d = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = Q.get(e, "fxshow");
            for (i in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, h.always(function() {
                    h.always(function() {
                        s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[i], at.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    d[i] = m && m[i] || _.style(e, i)
                }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(d))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Q.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (fe([e], !0), c = e.style.display || c, u = _.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (h.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && fe([e], !0), h.done(function() {
                    for (i in g || fe([e]), Q.remove(e, "fxshow"), d) _.style(e, i, d[i])
                })), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), _.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            g(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = _.isEmptyObject(e),
                o = _.speed(t, n, i),
                s = function() {
                    var t = dt(this, _.extend({}, e), o);
                    (r || Q.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = _.timers,
                    s = Q.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && lt.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || _.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = Q.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = _.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(e, t) {
        var n = _.fn[t];
        _.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, r)
        }
    }), _.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        _.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), _.timers = [], _.fx.tick = function() {
        var e, t = 0,
            n = _.timers;
        for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), it = void 0
    }, _.fx.timer = function(e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        rt || (rt = !0, ct())
    }, _.fx.stop = function() {
        rt = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(t, n) {
        return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }, ot = i.createElement("input"), st = i.createElement("select").appendChild(i.createElement("option")), ot.type = "checkbox", p.checkOn = "" !== ot.value, p.optSelected = st.selected, (ot = i.createElement("input")).value = "t", ot.type = "radio", p.radioValue = "t" === ot.value;
    var pt, gt = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return Y(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(R);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = gt[t] || _.find.attr;
        gt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = gt[s], gt[s] = r, r = null != n(e, t, i) ? s : null, gt[s] = o), r
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(R) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return Y(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, bt(this)))
            });
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = yt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (r = bt(n), i = 1 === n.nodeType && " " + yt(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = yt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                _(this).toggleClass(e.call(this, n, bt(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = _(this), s = wt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = bt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : yt(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = _.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < _.inArray(_.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        }, p.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var Et = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, c, u, h, d, p, v = [r || i],
                y = f.call(t, "type") ? t.type : t,
                b = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(y + _.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), d = _.event.special[y] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !m(r)) {
                    for (c = d.delegateType || y, Et.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = v[s++]) && !t.isPropagationStopped();) p = a, t.type = 1 < s ? c : d.bindType || y, (h = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && V(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !V(r) || u && g(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, xt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, xt), _.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(i, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), p.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Q.access(i, t);
                r || i.addEventListener(e, n, !0), Q.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Q.access(i, t) - 1;
                r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0), Q.remove(i, t))
            }
        }
    });
    var Tt = e.location,
        St = Date.now(),
        kt = /\?/;
    _.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n
    };
    var Ct = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;

    function Nt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) _.each(t, function(t, r) {
            n || Ct.test(e) ? i(e, r) : Nt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (r in t) Nt(e + "[" + r + "]", t[r], n, i)
    }
    _.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Nt(n, e[n], t, r);
        return i.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Ot.test(this.nodeName) && !Dt.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g,
        Lt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Mt = {},
        Wt = {},
        qt = "*/".concat("*"),
        Ft = i.createElement("a");

    function Ut(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(R) || [];
            if (g(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Yt(e, t, n, i) {
        var r = {},
            o = e === Wt;

        function s(a) {
            var l;
            return r[a] = !0, _.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Xt(e, t) {
        var n, i, r = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && _.extend(!0, e, i), e
    }
    Ft.href = Tt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Xt(Xt(e, _.ajaxSettings), t) : Xt(_.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(Mt),
        ajaxTransport: Ut(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, f, h, d, p = _.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                b = p.statusCode || {},
                w = {},
                E = {},
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Pt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), S(0, t), this
                    }
                };
            if (v.promise(T), p.url = ((t || p.url || Tt.href) + "").replace(Ht, Tt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Yt(Mt, p, n, T), u) return T;
            for (h in (f = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rt.test(p.type), o = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (kt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(jt, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + St++ + d), p.url = o + d), p.ifModified && (_.lastModified[o] && T.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && T.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || u)) return T.abort();
            if (x = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = Yt(Wt, p, n, T)) {
                if (T.readyState = 1, f && m.trigger("ajaxSend", [T, p]), u) return T;
                p.async && 0 < p.timeout && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(w, S)
                } catch (t) {
                    if (u) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(t, n, i, a) {
                var c, h, d, w, E, x = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = 0 < t ? 4 : 0, c = 200 <= t && t < 300 || 304 === t, i && (w = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, T, i)), w = function(e, t, n, i) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, T, c), c ? (p.ifModified && ((E = T.getResponseHeader("Last-Modified")) && (_.lastModified[o] = E), (E = T.getResponseHeader("etag")) && (_.etag[o] = E)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = w.state, h = w.data, c = !(d = w.error))) : (d = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || x) + "", c ? v.resolveWith(g, [h, x, T]) : v.rejectWith(g, [T, x, d]), T.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? h : d]), y.fireWith(g, [T, x]), f && (m.trigger("ajaxComplete", [T, p]), --_.active || _.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, i, r) {
            return g(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function(e, t) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                _.globalEval(e, t)
            }
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        zt = _.ajaxSettings.xhr();
    p.cors = !!zt && "withCredentials" in zt, p.ajax = zt = !!zt, _.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || zt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Bt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (r) {
                    if (n) throw r
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, o) {
                t = _("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Kt, Vt = [],
        $t = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || _.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace($t, "$1" + r) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || _.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? _(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Vt.push(r)), s && g(o) && o(s[0]), s = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((Kt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Kt.childNodes.length), _.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), s = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = _e([e], t, s), s && s.length && _(s).remove(), _.merge([], o.childNodes)));
        var r, o, s
    }, _.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = yt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = _.css(e, "position"),
                u = _(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), g(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0), r.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - _.css(i, "marginTop", !0),
                    left: t.left - r.left - _.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(i) {
            return Y(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = Xe(p.pixelPosition, function(e, n) {
            if (n) return n = Ye(e, t), qe.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            _.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Y(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, n, a) : _.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), _.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = o.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, r
    }, _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = A, _.isFunction = g, _.isWindow = m, _.camelCase = K, _.type = b, _.now = Date.now, _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Qt = e.jQuery,
        Gt = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = Gt), t && e.jQuery === _ && (e.jQuery = Qt), _
    }, t || (e.jQuery = e.$ = _), _
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var r = t(e),
            o = r.overflow,
            s = r.overflowX,
            a = r.overflowY;
        return /(auto|scroll|overlay)/.test(o + a + s) ? e : i(n(e))
    }

    function r(e) {
        return 11 === e ? K : 10 === e ? V : K || V
    }

    function o(e) {
        if (!e) return document.documentElement;
        for (var n = r(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var s = i && i.nodeName;
        return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function a(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(r, 0);
        var c = l.commonAncestorContainer;
        if (e !== c && t !== c || i.contains(r)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }(c) ? c : o(c);
        var u = s(e);
        return u.host ? a(u.host, t) : a(e, s(t).host)
    }

    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = l(t, "top"),
            r = l(t, "left"),
            o = n ? -1 : 1;
        return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
    }

    function u(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function f(e, t, n, i) {
        return F(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function h(e) {
        var t = e.body,
            n = e.documentElement,
            i = r(10) && getComputedStyle(n);
        return {
            height: f("Height", t, n, i),
            width: f("Width", t, n, i)
        }
    }

    function d(e) {
        return J({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function p(e) {
        var n = {};
        try {
            if (r(10)) {
                n = e.getBoundingClientRect();
                var i = l(e, "top"),
                    o = l(e, "left");
                n.top += i, n.left += o, n.bottom += i, n.right += o
            } else n = e.getBoundingClientRect()
        } catch (e) {}
        var s = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            a = "HTML" === e.nodeName ? h(e.ownerDocument) : {},
            c = a.width || e.clientWidth || s.right - s.left,
            f = a.height || e.clientHeight || s.bottom - s.top,
            p = e.offsetWidth - c,
            g = e.offsetHeight - f;
        if (p || g) {
            var m = t(e);
            p -= u(m, "x"), g -= u(m, "y"), s.width -= p, s.height -= g
        }
        return d(s)
    }

    function g(e, n) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            s = r(10),
            a = "HTML" === n.nodeName,
            l = p(e),
            u = p(n),
            f = i(e),
            h = t(n),
            g = parseFloat(h.borderTopWidth, 10),
            m = parseFloat(h.borderLeftWidth, 10);
        o && a && (u.top = F(u.top, 0), u.left = F(u.left, 0));
        var v = d({
            top: l.top - u.top - g,
            left: l.left - u.left - m,
            width: l.width,
            height: l.height
        });
        if (v.marginTop = 0, v.marginLeft = 0, !s && a) {
            var y = parseFloat(h.marginTop, 10),
                b = parseFloat(h.marginLeft, 10);
            v.top -= g - y, v.bottom -= g - y, v.left -= m - b, v.right -= m - b, v.marginTop = y, v.marginLeft = b
        }
        return (s && !o ? n.contains(f) : n === f && "BODY" !== f.nodeName) && (v = c(v, n)), v
    }

    function m(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = g(e, n),
            r = F(n.clientWidth, window.innerWidth || 0),
            o = F(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : l(n),
            a = t ? 0 : l(n, "left");
        return d({
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: r,
            height: o
        })
    }

    function v(e) {
        var i = e.nodeName;
        if ("BODY" === i || "HTML" === i) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var r = n(e);
        return !!r && v(r)
    }

    function y(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function b(e, t, r, o) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            l = {
                top: 0,
                left: 0
            },
            c = s ? y(e) : a(e, t);
        if ("viewport" === o) l = m(c, s);
        else {
            var u;
            "scrollParent" === o ? "BODY" === (u = i(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === o ? e.ownerDocument.documentElement : o;
            var f = g(u, c, s);
            if ("HTML" !== u.nodeName || v(c)) l = f;
            else {
                var d = h(e.ownerDocument),
                    p = d.height,
                    b = d.width;
                l.top += f.top - f.marginTop, l.bottom = p + f.top, l.left += f.left - f.marginLeft, l.right = b + f.left
            }
        }
        var w = "number" == typeof(r = r || 0);
        return l.left += w ? r : r.left || 0, l.top += w ? r : r.top || 0, l.right -= w ? r : r.right || 0, l.bottom -= w ? r : r.bottom || 0, l
    }

    function w(e) {
        return e.width * e.height
    }

    function _(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = b(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return J({
                    key: e
                }, a[e], {
                    area: w(a[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function E(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return g(n, i ? y(t) : a(t, n), i)
    }

    function x(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function T(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function S(e, t, n) {
        n = n.split("-")[0];
        var i = x(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[T(a)], r
    }

    function k(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function C(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = k(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = d(n.offsets.popper), n.offsets.reference = d(n.offsets.reference), n = i(n, t))
        }), n
    }

    function A(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function D(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function O(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function N(e, t, n, r) {
        n.updateBound = r, O(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(e);
        return function e(t, n, r, o) {
            var s = "BODY" === t.nodeName,
                a = s ? t.ownerDocument.defaultView : t;
            a.addEventListener(n, r, {
                passive: !0
            }), s || e(i(a.parentNode), n, r, o), o.push(a)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function I() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, O(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function L(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function j(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && L(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function P(e, t, n) {
        var i = k(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function R(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = te.indexOf(e),
            i = te.slice(n + 1).concat(te.slice(0, n));
        return t ? i.reverse() : i
    }

    function H(e, t, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            a = s.indexOf(k(s, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (c = c.map(function(e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return d(a)[t] / 100 * o
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? F(document.documentElement.clientHeight, window.innerHeight || 0) : F(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                L(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), r
    }
    for (var M = Math.min, W = Math.floor, q = Math.round, F = Math.max, U = "undefined" != typeof window && "undefined" != typeof document, Y = ["Edge", "Trident", "Firefox"], X = 0, B = 0; B < Y.length; B += 1)
        if (U && 0 <= navigator.userAgent.indexOf(Y[B])) {
            X = 1;
            break
        }
    var z = U && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, X))
            }
        },
        K = U && !(!window.MSInputMethodContext || !document.documentMode),
        V = U && /MSIE 10/.test(navigator.userAgent),
        $ = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        Q = function() {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        G = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        J = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        Z = U && /Firefox/i.test(navigator.userAgent),
        ee = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        te = ee.slice(3),
        ne = "flip",
        ie = "clockwise",
        re = "counterclockwise",
        oe = function() {
            function t(n, i) {
                var r = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                $(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }, this.update = z(this.update.bind(this)), this.options = J({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(J({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                    r.options.modifiers[e] = J({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return J({
                        name: e
                    }, r.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                }), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }
            return Q(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = E(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = _(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, A(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[D("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = N(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return I.call(this)
                }
            }]), t
        }();
    return oe.Utils = ("undefined" == typeof window ? global : window).PopperUtils, oe.placements = ee, oe.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets,
                            o = r.reference,
                            s = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            u = {
                                start: G({}, l, o[l]),
                                end: G({}, l, o[l] + o[c] - s[c])
                            };
                        e.offsets.popper = J({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        r = e.placement,
                        o = e.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = r.split("-")[0];
                    return n = L(+i) ? [+i, 0] : H(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var i = D("transform"),
                        r = e.instance.popper.style,
                        s = r.top,
                        a = r.left,
                        l = r[i];
                    r.top = "", r.left = "", r[i] = "";
                    var c = b(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = s, r.left = a, r[i] = l, t.boundaries = c;
                    var u = t.priority,
                        f = e.offsets.popper,
                        h = {
                            primary: function(e) {
                                var n = f[e];
                                return f[e] < c[e] && !t.escapeWithReference && (n = F(f[e], c[e])), G({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top",
                                    i = f[n];
                                return f[e] > c[e] && !t.escapeWithReference && (i = M(f[n], c[e] - ("right" === e ? f.width : f.height))), G({}, n, i)
                            }
                        };
                    return u.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        f = J({}, f, h[t](e))
                    }), e.offsets.popper = f, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        r = e.placement.split("-")[0],
                        o = W,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var i;
                    if (!P(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r))) return e
                    } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var o = e.placement.split("-")[0],
                        s = e.offsets,
                        a = s.popper,
                        l = s.reference,
                        c = -1 !== ["left", "right"].indexOf(o),
                        u = c ? "height" : "width",
                        f = c ? "Top" : "Left",
                        h = f.toLowerCase(),
                        p = c ? "left" : "top",
                        g = c ? "bottom" : "right",
                        m = x(r)[u];
                    l[g] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[g] - m)), l[h] + m > a[g] && (e.offsets.popper[h] += l[h] + m - a[g]), e.offsets.popper = d(e.offsets.popper);
                    var v = l[h] + l[u] / 2 - m / 2,
                        y = t(e.instance.popper),
                        b = parseFloat(y["margin" + f], 10),
                        w = parseFloat(y["border" + f + "Width"], 10),
                        _ = v - e.offsets.popper[h] - b - w;
                    return _ = F(M(a[u] - m, _), 0), e.arrowElement = r, e.offsets.arrow = (G(i = {}, h, q(_)), G(i, p, ""), i), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (A(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0],
                        r = T(i),
                        o = e.placement.split("-")[1] || "",
                        s = [];
                    switch (t.behavior) {
                        case ne:
                            s = [i, r];
                            break;
                        case ie:
                            s = R(i);
                            break;
                        case re:
                            s = R(i, !0);
                            break;
                        default:
                            s = t.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1) return e;
                        i = e.placement.split("-")[0], r = T(i);
                        var c = e.offsets.popper,
                            u = e.offsets.reference,
                            f = W,
                            h = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                            d = f(c.left) < f(n.left),
                            p = f(c.right) > f(n.right),
                            g = f(c.top) < f(n.top),
                            m = f(c.bottom) > f(n.bottom),
                            v = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === o && d || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                        (h || v || b) && (e.flipped = !0, (h || v) && (i = s[l + 1]), b && (o = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = J({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, "flip"))
                    }), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = d(r), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!P(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = k(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        r = e.offsets.popper,
                        s = k(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === s ? t.gpuAcceleration : s,
                        u = o(e.instance.popper),
                        f = p(u),
                        h = {
                            position: r.position
                        },
                        d = function(e, t) {
                            var n = e.offsets,
                                i = n.popper,
                                r = n.reference,
                                o = q,
                                s = function(e) {
                                    return e
                                },
                                a = o(r.width),
                                l = o(i.width),
                                c = -1 !== ["left", "right"].indexOf(e.placement),
                                u = -1 !== e.placement.indexOf("-"),
                                f = t ? c || u || a % 2 == l % 2 ? o : W : s,
                                h = t ? o : s;
                            return {
                                left: f(1 == a % 2 && 1 == l % 2 && !u && t ? i.left - 1 : i.left),
                                top: h(i.top),
                                bottom: h(i.bottom),
                                right: f(i.right)
                            }
                        }(e, 2 > window.devicePixelRatio || !Z),
                        g = "bottom" === n ? "top" : "bottom",
                        m = "right" === i ? "left" : "right",
                        v = D("transform");
                    if (l = "bottom" == g ? "HTML" === u.nodeName ? -u.clientHeight + d.bottom : -f.height + d.bottom : d.top, a = "right" == m ? "HTML" === u.nodeName ? -u.clientWidth + d.right : -f.width + d.right : d.left, c && v) h[v] = "translate3d(" + a + "px, " + l + "px, 0)", h[g] = 0, h[m] = 0, h.willChange = "transform";
                    else {
                        var y = "bottom" == g ? -1 : 1,
                            b = "right" == m ? -1 : 1;
                        h[g] = l * y, h[m] = a * b, h.willChange = g + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = J({}, w, e.attributes), e.styles = J({}, h, e.styles), e.arrowStyles = J({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return j(e.instance.popper, e.styles),
                        function(e, t) {
                            Object.keys(t).forEach(function(n) {
                                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                            })
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = E(r, t, e, n.positionFixed),
                        s = _(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), j(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, oe
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                var i, r, o;
                i = e, o = n[r = t], r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = "transitionend";
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                r = parseFloat(n),
                o = parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        s = o && a.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = function(e) {
        var n = this,
            i = !1;
        return t(this).one(a.TRANSITION_END, function() {
            i = !0
        }), setTimeout(function() {
            i || a.triggerTransitionEnd(n)
        }, e), this
    }, t.event.special[a.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert",
        c = "bs.alert",
        u = "." + c,
        f = t.fn[l],
        h = {
            CLOSE: "close" + u,
            CLOSED: "closed" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        },
        d = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function() {
                t.removeData(this._element, c), this._element = null
            }, n._getRootElement = function(e) {
                var n = a.getSelectorFromElement(e),
                    i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
            }, n._triggerCloseEvent = function(e) {
                var n = t.Event(h.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function(e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var i = a.getTransitionDurationFromElement(e);
                    t(e).one(a.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function(e) {
                t(e).detach().trigger(h.CLOSED).remove()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(c);
                    r || (r = new e(this), i.data(c, r)), "close" === n && r[n](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), t.fn[l] = d._jQueryInterface, t.fn[l].Constructor = d, t.fn[l].noConflict = function() {
        return t.fn[l] = f, d._jQueryInterface
    };
    var p = "button",
        g = "bs.button",
        m = "." + g,
        v = ".data-api",
        y = t.fn[p],
        b = "active",
        w = '[data-toggle^="button"]',
        _ = ".btn",
        E = {
            CLICK_DATA_API: "click" + m + v,
            FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
        },
        x = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function() {
                var e = !0,
                    n = !0,
                    i = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var r = this._element.querySelector('input:not([type="hidden"])');
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains(b)) e = !1;
                            else {
                                var o = i.querySelector(".active");
                                o && t(o).removeClass(b)
                            }
                        if (e) {
                            if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            r.checked = !this._element.classList.contains(b), t(r).trigger("change")
                        }
                        r.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && t(this._element).toggleClass(b)
            }, n.dispose = function() {
                t.removeData(this._element, g), this._element = null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(g);
                    i || (i = new e(this), t(this).data(g, i)), "toggle" === n && i[n]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(E.CLICK_DATA_API, w, function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(_)), x._jQueryInterface.call(t(n), "toggle")
    }).on(E.FOCUS_BLUR_DATA_API, w, function(e) {
        var n = t(e.target).closest(_)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t.fn[p] = x._jQueryInterface, t.fn[p].Constructor = x, t.fn[p].noConflict = function() {
        return t.fn[p] = y, x._jQueryInterface
    };
    var T = "carousel",
        S = "bs.carousel",
        k = "." + S,
        C = ".data-api",
        A = t.fn[T],
        D = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        O = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        N = "next",
        I = "prev",
        L = {
            SLIDE: "slide" + k,
            SLID: "slid" + k,
            KEYDOWN: "keydown" + k,
            MOUSEENTER: "mouseenter" + k,
            MOUSELEAVE: "mouseleave" + k,
            TOUCHSTART: "touchstart" + k,
            TOUCHMOVE: "touchmove" + k,
            TOUCHEND: "touchend" + k,
            POINTERDOWN: "pointerdown" + k,
            POINTERUP: "pointerup" + k,
            DRAG_START: "dragstart" + k,
            LOAD_DATA_API: "load" + k + C,
            CLICK_DATA_API: "click" + k + C
        },
        j = "active",
        P = ".active.carousel-item",
        R = ".carousel-indicators",
        H = {
            TOUCH: "touch",
            PEN: "pen"
        },
        M = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(R), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function() {
                this._isSliding || this._slide(N)
            }, n.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(I)
            }, n.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(P);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(L.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var r = i < e ? N : I;
                        this._slide(r, this._items[e])
                    }
            }, n.dispose = function() {
                t(this._element).off(k), t.removeData(this._element, S), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(e) {
                return e = o({}, D, e), a.typeCheckConfig(T, e, O), e
            }, n._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(L.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(L.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(L.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && H[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && H[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(L.POINTERDOWN, function(e) {
                        return n(e)
                    }), t(this._element).on(L.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(L.TOUCHSTART, function(e) {
                        return n(e)
                    }), t(this._element).on(L.TOUCHMOVE, function(t) {
                        var n;
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = n.originalEvent.touches[0].clientX - e.touchStartX
                    }), t(this._element).on(L.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function(e, t) {
                var n = e === N,
                    i = e === I,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === I ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(P)),
                    o = t.Event(L.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: r,
                        to: i
                    });
                return t(this._element).trigger(o), o
            }, n._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(j);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(j)
                }
            }, n._slide = function(e, n) {
                var i, r, o, s = this,
                    l = this._element.querySelector(P),
                    c = this._getItemIndex(l),
                    u = n || l && this._getItemByDirection(e, l),
                    f = this._getItemIndex(u),
                    h = Boolean(this._interval);
                if (o = e === N ? (i = "carousel-item-left", r = "carousel-item-next", "left") : (i = "carousel-item-right", r = "carousel-item-prev", "right"), u && t(u).hasClass(j)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && l && u) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                    var d = t.Event(L.SLID, {
                        relatedTarget: u,
                        direction: o,
                        from: c,
                        to: f
                    });
                    if (t(this._element).hasClass("slide")) {
                        t(u).addClass(r), a.reflow(u), t(l).addClass(i), t(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, p) : this._config.defaultInterval || this._config.interval;
                        var g = a.getTransitionDurationFromElement(l);
                        t(l).one(a.TRANSITION_END, function() {
                            t(u).removeClass(i + " " + r).addClass(j), t(l).removeClass(j + " " + r + " " + i), s._isSliding = !1, setTimeout(function() {
                                return t(s._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(l).removeClass(j), t(u).addClass(j), this._isSliding = !1, t(this._element).trigger(d);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(S),
                        r = o({}, D, t(this).data());
                    "object" == typeof n && (r = o({}, r, n));
                    var s = "string" == typeof n ? n : r.slide;
                    if (i || (i = new e(this, r), t(this).data(S, i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof s) {
                        if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                        i[s]()
                    } else r.interval && r.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function(n) {
                var i = a.getSelectorFromElement(this);
                if (i) {
                    var r = t(i)[0];
                    if (r && t(r).hasClass("carousel")) {
                        var s = o({}, t(r).data(), t(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (s.interval = !1), e._jQueryInterface.call(t(r), s), l && t(r).data(S).to(l), n.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return D
                }
            }]), e
        }();
    t(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", M._dataApiClickHandler), t(window).on(L.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
            var r = t(e[n]);
            M._jQueryInterface.call(r, r.data())
        }
    }), t.fn[T] = M._jQueryInterface, t.fn[T].Constructor = M, t.fn[T].noConflict = function() {
        return t.fn[T] = A, M._jQueryInterface
    };
    var W = "collapse",
        q = "bs.collapse",
        F = "." + q,
        U = t.fn[W],
        Y = {
            toggle: !0,
            parent: ""
        },
        X = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        B = {
            SHOW: "show" + F,
            SHOWN: "shown" + F,
            HIDE: "hide" + F,
            HIDDEN: "hidden" + F,
            CLICK_DATA_API: "click" + F + ".data-api"
        },
        z = "show",
        K = "collapse",
        V = "collapsing",
        $ = "collapsed",
        Q = '[data-toggle="collapse"]',
        G = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Q)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = a.getSelectorFromElement(o),
                        l = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < l.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function() {
                t(this._element).hasClass(z) ? this.hide() : this.show()
            }, n.show = function() {
                var n, i, r = this;
                if (!(this._isTransitioning || t(this._element).hasClass(z) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(K)
                    })).length && (n = null), n && (i = t(n).not(this._selector).data(q)) && i._isTransitioning))) {
                    var o = t.Event(B.SHOW);
                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(q, null));
                        var s = this._getDimension();
                        t(this._element).removeClass(K).addClass(V), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass($).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, function() {
                            t(r._element).removeClass(V).addClass(K).addClass(z), r._element.style[s] = "", r.setTransitioning(!1), t(r._element).trigger(B.SHOWN)
                        }).emulateTransitionEnd(c), this._element.style[s] = this._element[l] + "px"
                    }
                }
            }, n.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(z)) {
                    var n = t.Event(B.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), t(this._element).addClass(V).removeClass(K).removeClass(z);
                        var r = this._triggerArray.length;
                        if (0 < r)
                            for (var o = 0; o < r; o++) {
                                var s = this._triggerArray[o],
                                    l = a.getSelectorFromElement(s);
                                null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(z) || t(s).addClass($).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var c = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(V).addClass(K).trigger(B.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function(e) {
                this._isTransitioning = e
            }, n.dispose = function() {
                t.removeData(this._element, q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(e) {
                return (e = o({}, Y, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(W, e, X), e
            }, n._getDimension = function() {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function() {
                var n, i = this;
                a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(n.querySelectorAll(r));
                return t(o).each(function(t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(e, n) {
                var i = t(e).hasClass(z);
                n.length && t(n).toggleClass($, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function(e) {
                var t = a.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(q),
                        s = o({}, Y, i.data(), "object" == typeof n && n ? n : {});
                    if (!r && s.toggle && /show|hide/.test(n) && (s.toggle = !1), r || (r = new e(this, s), i.data(q, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Y
                }
            }]), e
        }();
    t(document).on(B.CLICK_DATA_API, Q, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            i = a.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function() {
            var e = t(this),
                i = e.data(q) ? "toggle" : n.data();
            G._jQueryInterface.call(e, i)
        })
    }), t.fn[W] = G._jQueryInterface, t.fn[W].Constructor = G, t.fn[W].noConflict = function() {
        return t.fn[W] = U, G._jQueryInterface
    };
    var J = "dropdown",
        Z = "bs.dropdown",
        ee = "." + Z,
        te = ".data-api",
        ne = t.fn[J],
        ie = new RegExp("38|40|27"),
        re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            CLICK: "click" + ee,
            CLICK_DATA_API: "click" + ee + te,
            KEYDOWN_DATA_API: "keydown" + ee + te,
            KEYUP_DATA_API: "keyup" + ee + te
        },
        oe = "disabled",
        se = "show",
        ae = "dropdown-menu-right",
        le = '[data-toggle="dropdown"]',
        ce = ".dropdown-menu",
        ue = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        fe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        he = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = e.prototype;
            return i.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(oe)) {
                    var i = e._getParentFromElement(this._element),
                        r = t(this._menu).hasClass(se);
                    if (e._clearMenus(), !r) {
                        var o = {
                                relatedTarget: this._element
                            },
                            s = t.Event(re.SHOW, o);
                        if (t(i).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var l = this._element;
                                "parent" === this._config.reference ? l = i : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(i).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(se), t(i).toggleClass(se).trigger(t.Event(re.SHOWN, o))
                        }
                    }
                }
            }, i.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(oe) || t(this._menu).hasClass(se))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(re.SHOW, n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(se), t(r).toggleClass(se).trigger(t.Event(re.SHOWN, n)))
                }
            }, i.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(oe) && t(this._menu).hasClass(se)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(re.HIDE, n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(se), t(r).toggleClass(se).trigger(t.Event(re.HIDDEN, n)))
                }
            }, i.dispose = function() {
                t.removeData(this._element, Z), t(this._element).off(ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var e = this;
                t(this._element).on(re.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function(e) {
                return e = o({}, this.constructor.Default, t(this._element).data(), e), a.typeCheckConfig(J, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(ce))
                }
                return this._menu
            }, i._getPlacement = function() {
                var e = t(this._element.parentNode),
                    n = "bottom-start";
                return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(ae) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(ae) && (n = "bottom-end"), n
            }, i._detectNavbar = function() {
                return 0 < t(this._element).closest(".navbar").length
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(Z);
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(Z, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(le)), r = 0, o = i.length; r < o; r++) {
                        var s = e._getParentFromElement(i[r]),
                            a = t(i[r]).data(Z),
                            l = {
                                relatedTarget: i[r]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var c = a._menu;
                            if (t(s).hasClass(se) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                var u = t.Event(re.HIDE, l);
                                t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), t(c).removeClass(se), t(s).removeClass(se).trigger(t.Event(re.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = a.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(ce).length)) : ie.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(oe))) {
                    var i = e._getParentFromElement(this),
                        r = t(i).hasClass(se);
                    if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                        var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== o.length) {
                            var s = o.indexOf(n.target);
                            38 === n.which && 0 < s && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var a = i.querySelector(le);
                            t(a).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ue
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return fe
                }
            }]), e
        }();
    t(document).on(re.KEYDOWN_DATA_API, le, he._dataApiKeydownHandler).on(re.KEYDOWN_DATA_API, ce, he._dataApiKeydownHandler).on(re.CLICK_DATA_API + " " + re.KEYUP_DATA_API, he._clearMenus).on(re.CLICK_DATA_API, le, function(e) {
        e.preventDefault(), e.stopPropagation(), he._jQueryInterface.call(t(this), "toggle")
    }).on(re.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), t.fn[J] = he._jQueryInterface, t.fn[J].Constructor = he, t.fn[J].noConflict = function() {
        return t.fn[J] = ne, he._jQueryInterface
    };
    var de = "modal",
        pe = "bs.modal",
        ge = "." + pe,
        me = t.fn[de],
        ve = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        ye = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        be = {
            HIDE: "hide" + ge,
            HIDDEN: "hidden" + ge,
            SHOW: "show" + ge,
            SHOWN: "shown" + ge,
            FOCUSIN: "focusin" + ge,
            RESIZE: "resize" + ge,
            CLICK_DISMISS: "click.dismiss" + ge,
            KEYDOWN_DISMISS: "keydown.dismiss" + ge,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ge,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ge,
            CLICK_DATA_API: "click" + ge + ".data-api"
        },
        we = "modal-open",
        _e = "fade",
        Ee = "show",
        xe = ".modal-dialog",
        Te = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Se = ".sticky-top",
        ke = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(xe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(_e) && (this._isTransitioning = !0);
                    var i = t.Event(be.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(be.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                        return n.hide(e)
                    }), t(this._dialog).on(be.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(be.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event(be.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = t(this._element).hasClass(_e);
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(be.FOCUSIN), t(this._element).removeClass(Ee), t(this._element).off(be.CLICK_DISMISS), t(this._dialog).off(be.MOUSEDOWN_DISMISS), r) {
                            var o = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(ge)
                }), t(document).off(be.FOCUSIN), t.removeData(this._element, pe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(e) {
                return e = o({}, ve, e), a.typeCheckConfig(de, e, ye), e
            }, n._showElement = function(e) {
                var n = this,
                    i = t(this._element).hasClass(_e);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, i && a.reflow(this._element), t(this._element).addClass(Ee), this._config.focus && this._enforceFocus();
                var r = t.Event(be.SHOWN, {
                        relatedTarget: e
                    }),
                    o = function() {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                    };
                if (i) {
                    var s = a.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, n._enforceFocus = function() {
                var e = this;
                t(document).off(be.FOCUSIN).on(be.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(be.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(be.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(be.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(be.RESIZE)
            }, n._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(we), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(be.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(e) {
                var n = this,
                    i = t(this._element).hasClass(_e) ? _e : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(be.CLICK_DISMISS, function(e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), i && a.reflow(this._backdrop), t(this._backdrop).addClass(Ee), !e) return;
                    if (!i) return void e();
                    var r = a.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Ee);
                    var o = function() {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(_e)) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                } else e && e()
            }, n._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(Te)),
                        i = [].slice.call(document.querySelectorAll(Se));
                    t(n).each(function(n, i) {
                        var r = i.style.paddingRight,
                            o = t(i).css("padding-right");
                        t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(i).each(function(n, i) {
                        var r = i.style.marginRight,
                            o = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        o = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(we)
            }, n._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(Te));
                t(e).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + Se));
                t(n).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var r = t(this).data(pe),
                        s = o({}, ve, t(this).data(), "object" == typeof n && n ? n : {});
                    if (r || (r = new e(this, s), t(this).data(pe, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](i)
                    } else s.show && r.show(i)
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ve
                }
            }]), e
        }();
    t(document).on(be.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var n, i = this,
            r = a.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var s = t(n).data(pe) ? "toggle" : o({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(n).one(be.SHOW, function(e) {
            e.isDefaultPrevented() || l.one(be.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        ke._jQueryInterface.call(t(n), s, this)
    }), t.fn[de] = ke._jQueryInterface, t.fn[de].Constructor = ke, t.fn[de].noConflict = function() {
        return t.fn[de] = me, ke._jQueryInterface
    };
    var Ce = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ae = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function Oe(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
                var i = o[e],
                    s = i.nodeName.toLowerCase();
                if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var a = [].slice.call(i.attributes),
                    l = [].concat(t["*"] || [], t[s] || []);
                a.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Ce.indexOf(n) || Boolean(e.nodeValue.match(Ae) || e.nodeValue.match(De));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    })(e, l) || i.removeAttribute(e.nodeName)
                })
            }, a = 0, l = o.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Ne = "tooltip",
        Ie = "bs.tooltip",
        Le = "." + Ie,
        je = t.fn[Ne],
        Pe = "bs-tooltip",
        Re = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
        He = ["sanitize", "whiteList", "sanitizeFn"],
        Me = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        We = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        qe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        Fe = "show",
        Ue = {
            HIDE: "hide" + Le,
            HIDDEN: "hidden" + Le,
            SHOW: "show" + Le,
            SHOWN: "shown" + Le,
            INSERTED: "inserted" + Le,
            CLICK: "click" + Le,
            FOCUSIN: "focusin" + Le,
            FOCUSOUT: "focusout" + Le,
            MOUSEENTER: "mouseenter" + Le,
            MOUSELEAVE: "mouseleave" + Le
        },
        Ye = "fade",
        Xe = "show",
        Be = "hover",
        ze = "focus",
        Ke = function() {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var i = e.prototype;
            return i.enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(Xe)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var r = a.findShadowRoot(this.element),
                        o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !o) return;
                    var s = this.getTipElement(),
                        l = a.getUID(this.constructor.NAME);
                    s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(s).addClass(Ye);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        u = this._getAttachment(c);
                    this.addAttachmentClass(u);
                    var f = this._getContainer();
                    t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(s).addClass(Xe), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var h = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(Ye)) {
                        var d = a.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(d)
                    } else h()
                }
            }, i.hide = function(e) {
                var n = this,
                    i = this.getTipElement(),
                    r = t.Event(this.constructor.Event.HIDE),
                    o = function() {
                        n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (t(i).removeClass(Xe), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[ze] = !1, this._activeTrigger[Be] = !1, t(this.tip).hasClass(Ye)) {
                        var s = a.getTransitionDurationFromElement(i);
                        t(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o();
                    this._hoverState = ""
                }
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(Pe + "-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(Ye + " " + Xe)
            }, i.setElementContent = function(e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Oe(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, i.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, i._getAttachment = function(e) {
                return We[e.toUpperCase()]
            }, i._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== n) {
                        var i = n === Be ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            r = n === Be ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = o({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ze : Be] = !0), t(n.getTipElement()).hasClass(Xe) || n._hoverState === Fe ? n._hoverState = Fe : (clearTimeout(n._timeout), n._hoverState = Fe, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === Fe && n.show()
                }, n.config.delay.show) : n.show())
            }, i._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ze : Be] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    "out" === n._hoverState && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function(e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function(e) {
                    -1 !== He.indexOf(e) && delete n[e]
                }), "number" == typeof(e = o({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(Ne, e, this.constructor.DefaultType), e.sanitize && (e.template = Oe(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Re);
                null !== n && n.length && e.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function() {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(Ye), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(Ie),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data(Ie, i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return qe
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ne
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ie
                }
            }, {
                key: "Event",
                get: function() {
                    return Ue
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Le
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Me
                }
            }]), e
        }();
    t.fn[Ne] = Ke._jQueryInterface, t.fn[Ne].Constructor = Ke, t.fn[Ne].noConflict = function() {
        return t.fn[Ne] = je, Ke._jQueryInterface
    };
    var Ve = "popover",
        $e = "bs.popover",
        Qe = "." + $e,
        Ge = t.fn[Ve],
        Je = "bs-popover",
        Ze = new RegExp("(^|\\s)" + Je + "\\S+", "g"),
        et = o({}, Ke.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        tt = o({}, Ke.DefaultType, {
            content: "(string|element|function)"
        }),
        nt = {
            HIDE: "hide" + Qe,
            HIDDEN: "hidden" + Qe,
            SHOW: "show" + Qe,
            SHOWN: "shown" + Qe,
            INSERTED: "inserted" + Qe,
            CLICK: "click" + Qe,
            FOCUSIN: "focusin" + Qe,
            FOCUSOUT: "focusout" + Qe,
            MOUSEENTER: "mouseenter" + Qe,
            MOUSELEAVE: "mouseleave" + Qe
        },
        it = function(e) {
            var n, i;

            function o() {
                return e.apply(this, arguments) || this
            }
            i = e, (n = o).prototype = Object.create(i.prototype), (n.prototype.constructor = n).__proto__ = i;
            var s = o.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(Je + "-" + e)
            }, s.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, s.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, s._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Ze);
                null !== n && 0 < n.length && e.removeClass(n.join(""))
            }, o._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data($e),
                        i = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data($e, n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return et
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ve
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return $e
                }
            }, {
                key: "Event",
                get: function() {
                    return nt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Qe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return tt
                }
            }]), o
        }(Ke);
    t.fn[Ve] = it._jQueryInterface, t.fn[Ve].Constructor = it, t.fn[Ve].noConflict = function() {
        return t.fn[Ve] = Ge, it._jQueryInterface
    };
    var rt = "scrollspy",
        ot = "bs.scrollspy",
        st = "." + ot,
        at = t.fn[rt],
        lt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ct = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ut = {
            ACTIVATE: "activate" + st,
            SCROLL: "scroll" + st,
            LOAD_DATA_API: "load" + st + ".data-api"
        },
        ft = "active",
        ht = ".nav, .list-group",
        dt = ".nav-link",
        pt = ".list-group-item",
        gt = ".dropdown-item",
        mt = "position",
        vt = function() {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + dt + "," + this._config.target + " " + pt + "," + this._config.target + " " + gt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(ut.SCROLL, function(e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function() {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : mt,
                    i = "auto" === this._config.method ? n : this._config.method,
                    r = i === mt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var n, o = a.getSelectorFromElement(e);
                    if (o && (n = document.querySelector(o)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [t(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, ot), t(this._scrollElement).off(st), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(e) {
                if ("string" != typeof(e = o({}, lt, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = a.getUID(rt), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return a.typeCheckConfig(rt, e, ct), e
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, n._activate = function(e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(ft), i.addClass(ft)) : (i.addClass(ft), i.parents(ht).prev(dt + ", " + pt).addClass(ft), i.parents(ht).prev(".nav-item").children(dt).addClass(ft)), t(this._scrollElement).trigger(ut.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(ft)
                }).forEach(function(e) {
                    return e.classList.remove(ft)
                })
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(ot);
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data(ot, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return lt
                }
            }]), e
        }();
    t(window).on(ut.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
            var i = t(e[n]);
            vt._jQueryInterface.call(i, i.data())
        }
    }), t.fn[rt] = vt._jQueryInterface, t.fn[rt].Constructor = vt, t.fn[rt].noConflict = function() {
        return t.fn[rt] = at, vt._jQueryInterface
    };
    var yt = "bs.tab",
        bt = "." + yt,
        wt = t.fn.tab,
        _t = {
            HIDE: "hide" + bt,
            HIDDEN: "hidden" + bt,
            SHOW: "show" + bt,
            SHOWN: "shown" + bt,
            CLICK_DATA_API: "click" + bt + ".data-api"
        },
        Et = "active",
        xt = ".active",
        Tt = "> li > .active",
        St = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Et) || t(this._element).hasClass("disabled"))) {
                    var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                        o = a.getSelectorFromElement(this._element);
                    if (r) {
                        var s = "UL" === r.nodeName || "OL" === r.nodeName ? Tt : xt;
                        i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
                    }
                    var l = t.Event(_t.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = t.Event(_t.SHOW, {
                            relatedTarget: i
                        });
                    if (i && t(i).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, r);
                        var u = function() {
                            var n = t.Event(_t.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                r = t.Event(_t.SHOWN, {
                                    relatedTarget: i
                                });
                            t(i).trigger(n), t(e._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function() {
                t.removeData(this._element, yt), this._element = null
            }, n._activate = function(e, n, i) {
                var r = this,
                    o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(xt) : t(n).find(Tt))[0],
                    s = i && o && t(o).hasClass("fade"),
                    l = function() {
                        return r._transitionComplete(e, o, i)
                    };
                if (o && s) {
                    var c = a.getTransitionDurationFromElement(o);
                    t(o).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, n._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(Et);
                    var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    r && t(r).removeClass(Et), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(Et), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var o = t(e).closest(".dropdown")[0];
                    if (o) {
                        var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        t(s).addClass(Et)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(yt);
                    if (r || (r = new e(this), i.data(yt, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(_t.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), St._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = St._jQueryInterface, t.fn.tab.Constructor = St, t.fn.tab.noConflict = function() {
        return t.fn.tab = wt, St._jQueryInterface
    };
    var kt = "toast",
        Ct = "bs.toast",
        At = "." + Ct,
        Dt = t.fn[kt],
        Ot = {
            CLICK_DISMISS: "click.dismiss" + At,
            HIDE: "hide" + At,
            HIDDEN: "hidden" + At,
            SHOW: "show" + At,
            SHOWN: "shown" + At
        },
        Nt = "show",
        It = "showing",
        Lt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        jt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Pt = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                t(this._element).trigger(Ot.SHOW), this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    e._element.classList.remove(It), e._element.classList.add(Nt), t(e._element).trigger(Ot.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(It), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, n.hide = function(e) {
                var n = this;
                this._element.classList.contains(Nt) && (t(this._element).trigger(Ot.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Nt) && this._element.classList.remove(Nt), t(this._element).off(Ot.CLICK_DISMISS), t.removeData(this._element, Ct), this._element = null, this._config = null
            }, n._getConfig = function(e) {
                return e = o({}, jt, t(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig(kt, e, this.constructor.DefaultType), e
            }, n._setListeners = function() {
                var e = this;
                t(this._element).on(Ot.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                    return e.hide(!0)
                })
            }, n._close = function() {
                var e = this,
                    n = function() {
                        e._element.classList.add("hide"), t(e._element).trigger(Ot.HIDDEN)
                    };
                if (this._element.classList.remove(Nt), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(Ct);
                    if (r || (r = new e(this, "object" == typeof n && n), i.data(Ct, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Lt
                }
            }, {
                key: "Default",
                get: function() {
                    return jt
                }
            }]), e
        }();
    t.fn[kt] = Pt._jQueryInterface, t.fn[kt].Constructor = Pt, t.fn[kt].noConflict = function() {
            return t.fn[kt] = Dt, Pt._jQueryInterface
        },
        function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = a, e.Alert = d, e.Button = x, e.Carousel = M, e.Collapse = G, e.Dropdown = he, e.Modal = ke, e.Popover = it, e.Scrollspy = vt, e.Tab = St, e.Toast = Pt, e.Tooltip = Ke, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t()
}(this, function() {
    "use strict";

    function e(e) {
        return getComputedStyle(e)
    }

    function t(e, t) {
        for (var n in t) {
            var i = t[n];
            "number" == typeof i && (i += "px"), e.style[n] = i
        }
        return e
    }

    function n(e) {
        var t = document.createElement("div");
        return t.className = e, t
    }

    function i(e, t) {
        if (!g) throw new Error("No element matching method supported");
        return g.call(e, t)
    }

    function r(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }

    function o(e, t) {
        return Array.prototype.filter.call(e.children, function(e) {
            return i(e, t)
        })
    }

    function s(e, t) {
        var n = e.element.classList,
            i = m.state.scrolling(t);
        n.contains(i) ? clearTimeout(v[t]) : n.add(i)
    }

    function a(e, t) {
        v[t] = setTimeout(function() {
            return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
        }, e.settings.scrollingThreshold)
    }

    function l(e, t) {
        s(e, t), a(e, t)
    }

    function c(e) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t
    }

    function u(e) {
        return parseInt(e, 10) || 0
    }

    function f(e) {
        return i(e, "input,[contenteditable]") || i(e, "select,[contenteditable]") || i(e, "textarea,[contenteditable]") || i(e, "button,[contenteditable]")
    }

    function h(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
    }

    function d(e, n) {
        var i = {
                width: n.railXWidth
            },
            r = Math.floor(e.scrollTop);
        n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - r : i.top = n.scrollbarXTop + r, t(n.scrollbarXRail, i);
        var o = {
            top: r,
            height: n.railYHeight
        };
        n.isScrollbarYUsingRight ? n.isRtl ? o.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : o.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? o.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : o.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, o), t(n.scrollbarX, {
            left: n.scrollbarXLeft,
            width: n.scrollbarXWidth - n.railBorderXWidth
        }), t(n.scrollbarY, {
            top: n.scrollbarYTop,
            height: n.scrollbarYHeight - n.railBorderYWidth
        })
    }

    function p(e, t) {
        function n(t) {
            g[h] = v + b * (t[l] - y), s(e, d), x(e), t.stopPropagation(), t.preventDefault()
        }

        function i() {
            a(e, d), e[p].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
        }
        var r = t[0],
            o = t[1],
            l = t[2],
            c = t[3],
            u = t[4],
            f = t[5],
            h = t[6],
            d = t[7],
            p = t[8],
            g = e.element,
            v = null,
            y = null,
            b = null;
        e.event.bind(e[u], "mousedown", function(t) {
            v = g[h], y = t[l], b = (e[o] - e[r]) / (e[c] - e[f]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), e[p].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
        })
    }
    var g = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = {
            main: "ps",
            element: {
                thumb: function(e) {
                    return "ps__thumb-" + e
                },
                rail: function(e) {
                    return "ps__rail-" + e
                },
                consuming: "ps__child--consume"
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function(e) {
                    return "ps--active-" + e
                },
                scrolling: function(e) {
                    return "ps--scrolling-" + e
                }
            }
        },
        v = {
            x: null,
            y: null
        },
        y = function(e) {
            this.element = e, this.handlers = {}
        },
        b = {
            isEmpty: {
                configurable: !0
            }
        };
    y.prototype.bind = function(e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
    }, y.prototype.unbind = function(e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter(function(i) {
            return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
        })
    }, y.prototype.unbindAll = function() {
        for (var e in this.handlers) this.unbind(e)
    }, b.isEmpty.get = function() {
        var e = this;
        return Object.keys(this.handlers).every(function(t) {
            return 0 === e.handlers[t].length
        })
    }, Object.defineProperties(y.prototype, b);
    var w = function() {
        this.eventElements = []
    };
    w.prototype.eventElement = function(e) {
        var t = this.eventElements.filter(function(t) {
            return t.element === e
        })[0];
        return t || (t = new y(e), this.eventElements.push(t)), t
    }, w.prototype.bind = function(e, t, n) {
        this.eventElement(e).bind(t, n)
    }, w.prototype.unbind = function(e, t, n) {
        var i = this.eventElement(e);
        i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }, w.prototype.unbindAll = function() {
        this.eventElements.forEach(function(e) {
            return e.unbindAll()
        }), this.eventElements = []
    }, w.prototype.once = function(e, t, n) {
        var i = this.eventElement(e),
            r = function(e) {
                i.unbind(t, r), n(e)
            };
        i.bind(t, r)
    };
    var _ = function(e, t, n, i, r) {
            var o;
            if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === t) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
            else {
                if ("left" !== t) throw new Error("A proper axis should be provided");
                o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
            }! function(e, t, n, i, r) {
                var o = n[0],
                    s = n[1],
                    a = n[2],
                    u = n[3],
                    f = n[4],
                    h = n[5];
                void 0 === i && (i = !0), void 0 === r && (r = !1);
                var d = e.element;
                e.reach[u] = null, d[a] < 1 && (e.reach[u] = "start"), d[a] > e[o] - e[s] - 1 && (e.reach[u] = "end"), t && (d.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? d.dispatchEvent(c("ps-scroll-" + f)) : t > 0 && d.dispatchEvent(c("ps-scroll-" + h)), i && l(e, u)), e.reach[u] && (t || r) && d.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
            }(e, n, o, i, r)
        },
        E = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        },
        x = function(e) {
            var t = e.element,
                n = Math.floor(t.scrollTop);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (o(t, m.element.rail("x")).forEach(function(e) {
                return r(e)
            }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (o(t, m.element.rail("y")).forEach(function(e) {
                return r(e)
            }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = h(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = h(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), d(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
        },
        T = {
            "click-rail": function(e) {
                e.event.bind(e.scrollbarY, "mousedown", function(e) {
                    return e.stopPropagation()
                }), e.event.bind(e.scrollbarYRail, "mousedown", function(t) {
                    var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                    e.element.scrollTop += n * e.containerHeight, x(e), t.stopPropagation()
                }), e.event.bind(e.scrollbarX, "mousedown", function(e) {
                    return e.stopPropagation()
                }), e.event.bind(e.scrollbarXRail, "mousedown", function(t) {
                    var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                    e.element.scrollLeft += n * e.containerWidth, x(e), t.stopPropagation()
                })
            },
            "drag-thumb": function(e) {
                p(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function(e) {
                var t = e.element,
                    n = function() {
                        return i(t, ":hover")
                    },
                    r = function() {
                        return i(e.scrollbarX, ":focus") || i(e.scrollbarY, ":focus")
                    };
                e.event.bind(e.ownerDocument, "keydown", function(i) {
                    if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (n() || r())) {
                        var o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                            else
                                for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                            if (f(o)) return
                        }
                        var s = 0,
                            a = 0;
                        switch (i.which) {
                            case 37:
                                s = i.metaKey ? -e.contentWidth : i.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                a = i.metaKey ? e.contentHeight : i.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                s = i.metaKey ? e.contentWidth : i.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                a = i.metaKey ? -e.contentHeight : i.altKey ? -e.containerHeight : -30;
                                break;
                            case 32:
                                a = i.shiftKey ? e.containerHeight : -e.containerHeight;
                                break;
                            case 33:
                                a = e.containerHeight;
                                break;
                            case 34:
                                a = -e.containerHeight;
                                break;
                            case 36:
                                a = e.contentHeight;
                                break;
                            case 35:
                                a = -e.contentHeight;
                                break;
                            default:
                                return
                        }
                        e.settings.suppressScrollX && 0 !== s || e.settings.suppressScrollY && 0 !== a || (t.scrollTop -= a, t.scrollLeft += s, x(e), function(n, i) {
                            var r = Math.floor(t.scrollTop);
                            if (0 === n) {
                                if (!e.scrollbarYActive) return !1;
                                if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                            }
                            var o = t.scrollLeft;
                            if (0 === i) {
                                if (!e.scrollbarXActive) return !1;
                                if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                            }
                            return !0
                        }(s, a) && i.preventDefault())
                    }
                })
            },
            wheel: function(t) {
                function n(t, n, i) {
                    if (!E.isWebKit && r.querySelector("select:focus")) return !0;
                    if (!r.contains(t)) return !1;
                    for (var o = t; o && o !== r;) {
                        if (o.classList.contains(m.element.consuming)) return !0;
                        var s = e(o);
                        if ([s.overflow, s.overflowX, s.overflowY].join("").match(/(scroll|auto)/)) {
                            var a = o.scrollHeight - o.clientHeight;
                            if (a > 0 && !(0 === o.scrollTop && i > 0 || o.scrollTop === a && i < 0)) return !0;
                            var l = o.scrollWidth - o.clientWidth;
                            if (l > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === l && n > 0)) return !0
                        }
                        o = o.parentNode
                    }
                    return !1
                }

                function i(e) {
                    var i = function(e) {
                            var t = e.deltaX,
                                n = -1 * e.deltaY;
                            return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                        }(e),
                        o = i[0],
                        s = i[1];
                    if (!n(e.target, o, s)) {
                        var a = !1;
                        t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (s ? r.scrollTop -= s * t.settings.wheelSpeed : r.scrollTop += o * t.settings.wheelSpeed, a = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? r.scrollLeft += o * t.settings.wheelSpeed : r.scrollLeft -= s * t.settings.wheelSpeed, a = !0) : (r.scrollTop -= s * t.settings.wheelSpeed, r.scrollLeft += o * t.settings.wheelSpeed), x(t), (a = a || function(e, n) {
                            var i = Math.floor(r.scrollTop),
                                o = 0 === r.scrollTop,
                                s = i + r.offsetHeight === r.scrollHeight,
                                a = 0 === r.scrollLeft,
                                l = r.scrollLeft + r.offsetWidth === r.scrollWidth;
                            return !(Math.abs(n) > Math.abs(e) ? o || s : a || l) || !t.settings.wheelPropagation
                        }(o, s)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                    }
                }
                var r = t.element;
                void 0 !== window.onwheel ? t.event.bind(r, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(r, "mousewheel", i)
            },
            touch: function(t) {
                function n(e, n) {
                    var i = Math.floor(u.scrollTop),
                        r = u.scrollLeft,
                        o = Math.abs(e),
                        s = Math.abs(n);
                    if (s > o) {
                        if (n < 0 && i === t.contentHeight - t.containerHeight || n > 0 && 0 === i) return 0 === window.scrollY && n > 0 && E.isChrome
                    } else if (o > s && (e < 0 && r === t.contentWidth - t.containerWidth || e > 0 && 0 === r)) return !0;
                    return !0
                }

                function i(e, n) {
                    u.scrollTop -= n, u.scrollLeft -= e, x(t)
                }

                function r(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function o(e) {
                    return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                }

                function s(e) {
                    if (o(e)) {
                        var t = r(e);
                        f.pageX = t.pageX, f.pageY = t.pageY, h = (new Date).getTime(), null !== p && clearInterval(p)
                    }
                }

                function a(t, n, i) {
                    if (!u.contains(t)) return !1;
                    for (var r = t; r && r !== u;) {
                        if (r.classList.contains(m.element.consuming)) return !0;
                        var o = e(r);
                        if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
                            var s = r.scrollHeight - r.clientHeight;
                            if (s > 0 && !(0 === r.scrollTop && i > 0 || r.scrollTop === s && i < 0)) return !0;
                            var a = r.scrollLeft - r.clientWidth;
                            if (a > 0 && !(0 === r.scrollLeft && n < 0 || r.scrollLeft === a && n > 0)) return !0
                        }
                        r = r.parentNode
                    }
                    return !1
                }

                function l(e) {
                    if (o(e)) {
                        var t = r(e),
                            s = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            l = s.pageX - f.pageX,
                            c = s.pageY - f.pageY;
                        if (a(e.target, l, c)) return;
                        i(l, c), f = s;
                        var u = (new Date).getTime(),
                            p = u - h;
                        p > 0 && (d.x = l / p, d.y = c / p, h = u), n(l, c) && e.preventDefault()
                    }
                }

                function c() {
                    t.settings.swipeEasing && (clearInterval(p), p = setInterval(function() {
                        t.isInitialized ? clearInterval(p) : d.x || d.y ? Math.abs(d.x) < .01 && Math.abs(d.y) < .01 ? clearInterval(p) : (i(30 * d.x, 30 * d.y), d.x *= .8, d.y *= .8) : clearInterval(p)
                    }, 10))
                }
                if (E.supportsTouch || E.supportsIePointer) {
                    var u = t.element,
                        f = {},
                        h = 0,
                        d = {},
                        p = null;
                    E.supportsTouch ? (t.event.bind(u, "touchstart", s), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : E.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", s), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", s), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
                }
            }
        },
        S = function(i, r) {
            var o = this;
            if (void 0 === r && (r = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var s in this.element = i, i.classList.add(m.main), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, r) o.settings[s] = r[s];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var a = function() {
                    return i.classList.add(m.state.focus)
                },
                l = function() {
                    return i.classList.remove(m.state.focus)
                };
            this.isRtl = "rtl" === e(i).direction, this.isNegativeScroll = function() {
                var e, t = i.scrollLeft;
                return i.scrollLeft = -1, e = i.scrollLeft < 0, i.scrollLeft = t, e
            }(), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new w, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(m.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", a), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var c = e(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(m.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", a), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var f = e(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(f.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(f.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(t) {
                var n = e(t);
                return u(n.width) + u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth)
            }(this.scrollbarY) : null, this.railBorderYWidth = u(f.borderTopWidth) + u(f.borderBottomWidth), t(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = u(f.marginTop) + u(f.marginBottom), t(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach(function(e) {
                return T[e](o)
            }), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function(e) {
                return o.onScroll(e)
            }), x(this)
        };
    return S.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {
            display: "block"
        }), t(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {
            display: "none"
        }), t(this.scrollbarYRail, {
            display: "none"
        }), x(this), _(this, "top", 0, !1, !0), _(this, "left", 0, !1, !0), t(this.scrollbarXRail, {
            display: ""
        }), t(this.scrollbarYRail, {
            display: ""
        }))
    }, S.prototype.onScroll = function(e) {
        this.isAlive && (x(this), _(this, "top", this.element.scrollTop - this.lastScrollTop), _(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, S.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, S.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter(function(e) {
            return !e.match(/^ps([-_].+|)$/)
        }).join(" ")
    }, S
}),
function(e, t, n, i) {
    "use strict";

    function r(e, t, n) {
        return setTimeout(c(e, n), t)
    }

    function o(e, t, n) {
        return !!Array.isArray(e) && (s(e, n[t], n), !0)
    }

    function s(e, t, n) {
        var r;
        if (e)
            if (e.forEach) e.forEach(t, n);
            else if (e.length !== i)
            for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
        else
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }

    function a(t, n, i) {
        var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function() {
            var n = new Error("get-stack-trace"),
                i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                o = e.console && (e.console.warn || e.console.log);
            return o && o.call(e.console, r, i), t.apply(this, arguments)
        }
    }

    function l(e, t, n) {
        var i, r = t.prototype;
        (i = e.prototype = Object.create(r)).constructor = e, i._super = r, n && Z(i, n)
    }

    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function u(e, t) {
        return typeof e == ne ? e.apply(t && t[0] || i, t) : e
    }

    function f(e, t) {
        return e === i ? t : e
    }

    function h(e, t, n) {
        s(m(t), function(t) {
            e.addEventListener(t, n, !1)
        })
    }

    function d(e, t, n) {
        s(m(t), function(t) {
            e.removeEventListener(t, n, !1)
        })
    }

    function p(e, t) {
        for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function g(e, t) {
        return e.indexOf(t) > -1
    }

    function m(e) {
        return e.trim().split(/\s+/g)
    }

    function v(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if (n && e[i][n] == t || !n && e[i] === t) return i;
            i++
        }
        return -1
    }

    function y(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function b(e, t, n) {
        for (var i = [], r = [], o = 0; o < e.length;) {
            var s = t ? e[o][t] : e[o];
            v(r, s) < 0 && i.push(e[o]), r[o] = s, o++
        }
        return n && (i = t ? i.sort(function(e, n) {
            return e[t] > n[t]
        }) : i.sort()), i
    }

    function w(e, t) {
        for (var n, r, o = t[0].toUpperCase() + t.slice(1), s = 0; s < ee.length;) {
            if ((r = (n = ee[s]) ? n + o : t) in e) return r;
            s++
        }
        return i
    }

    function _(t) {
        var n = t.ownerDocument || t;
        return n.defaultView || n.parentWindow || e
    }

    function E(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            u(e.options.enable, [e]) && n.handler(t)
        }, this.init()
    }

    function x(e, t, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            o = t & ge && i - r == 0,
            s = t & (ve | ye) && i - r == 0;
        n.isFirst = !!o, n.isFinal = !!s, o && (e.session = {}), n.eventType = t,
            function(e, t) {
                var n = e.session,
                    i = t.pointers,
                    r = i.length;
                n.firstInput || (n.firstInput = S(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = S(t) : 1 === r && (n.firstMultiple = !1);
                var o = n.firstInput,
                    s = n.firstMultiple,
                    a = s ? s.center : o.center,
                    l = t.center = k(i);
                t.timeStamp = oe(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = O(a, l), t.distance = D(a, l),
                    function(e, t) {
                        var n = t.center,
                            i = e.offsetDelta || {},
                            r = e.prevDelta || {},
                            o = e.prevInput || {};
                        t.eventType !== ge && o.eventType !== ve || (r = e.prevDelta = {
                            x: o.deltaX || 0,
                            y: o.deltaY || 0
                        }, i = e.offsetDelta = {
                            x: n.x,
                            y: n.y
                        }), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y)
                    }(n, t), t.offsetDirection = A(t.deltaX, t.deltaY);
                var c = C(t.deltaTime, t.deltaX, t.deltaY);
                t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = re(c.x) > re(c.y) ? c.x : c.y, t.scale = s ? function(e, t) {
                    return D(t[0], t[1], Ae) / D(e[0], e[1], Ae)
                }(s.pointers, i) : 1, t.rotation = s ? function(e, t) {
                    return O(t[1], t[0], Ae) + O(e[1], e[0], Ae)
                }(s.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, T(n, t);
                var u = e.element;
                p(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
            }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function T(e, t) {
        var n, r, o, s, a = e.lastInterval || t,
            l = t.timeStamp - a.timeStamp;
        if (t.eventType != ye && (l > pe || a.velocity === i)) {
            var c = t.deltaX - a.deltaX,
                u = t.deltaY - a.deltaY,
                f = C(l, c, u);
            r = f.x, o = f.y, n = re(f.x) > re(f.y) ? f.x : f.y, s = A(c, u), e.lastInterval = t
        } else n = a.velocity, r = a.velocityX, o = a.velocityY, s = a.direction;
        t.velocity = n, t.velocityX = r, t.velocityY = o, t.direction = s
    }

    function S(e) {
        for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
            clientX: ie(e.pointers[n].clientX),
            clientY: ie(e.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: oe(),
            pointers: t,
            center: k(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }

    function k(e) {
        var t = e.length;
        if (1 === t) return {
            x: ie(e[0].clientX),
            y: ie(e[0].clientY)
        };
        for (var n = 0, i = 0, r = 0; t > r;) n += e[r].clientX, i += e[r].clientY, r++;
        return {
            x: ie(n / t),
            y: ie(i / t)
        }
    }

    function C(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }

    function A(e, t) {
        return e === t ? be : re(e) >= re(t) ? 0 > e ? we : _e : 0 > t ? Ee : xe
    }

    function D(e, t, n) {
        n || (n = Ce);
        var i = t[n[0]] - e[n[0]],
            r = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + r * r)
    }

    function O(e, t, n) {
        n || (n = Ce);
        var i = t[n[0]] - e[n[0]],
            r = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }

    function N() {
        this.evEl = Oe, this.evWin = Ne, this.pressed = !1, E.apply(this, arguments)
    }

    function I() {
        this.evEl = je, this.evWin = Pe, E.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function L() {
        this.evTarget = He, this.evWin = Me, this.started = !1, E.apply(this, arguments)
    }

    function j() {
        this.evTarget = qe, this.targetIds = {}, E.apply(this, arguments)
    }

    function P() {
        E.apply(this, arguments);
        var e = c(this.handler, this);
        this.touch = new j(this.manager, e), this.mouse = new N(this.manager, e), this.primaryTouch = null, this.lastTouches = []
    }

    function R(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function() {
                var e = i.indexOf(n);
                e > -1 && i.splice(e, 1)
            }, Fe)
        }
    }

    function H(e, t) {
        this.manager = e, this.set(t)
    }

    function M(e) {
        this.options = Z({}, this.defaults, e || {}), this.id = le++, this.manager = null, this.options.enable = f(this.options.enable, !0), this.state = Je, this.simultaneous = {}, this.requireFail = []
    }

    function W(e) {
        return e & it ? "cancel" : e & tt ? "end" : e & et ? "move" : e & Ze ? "start" : ""
    }

    function q(e) {
        return e == xe ? "down" : e == Ee ? "up" : e == we ? "left" : e == _e ? "right" : ""
    }

    function F(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }

    function U() {
        M.apply(this, arguments)
    }

    function Y() {
        U.apply(this, arguments), this.pX = null, this.pY = null
    }

    function X() {
        U.apply(this, arguments)
    }

    function B() {
        M.apply(this, arguments), this._timer = null, this._input = null
    }

    function z() {
        U.apply(this, arguments)
    }

    function K() {
        U.apply(this, arguments)
    }

    function V() {
        M.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function $(e, t) {
        return (t = t || {}).recognizers = f(t.recognizers, $.defaults.preset), new Q(e, t)
    }

    function Q(e, t) {
        this.options = Z({}, $.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = function(e) {
            var t = e.options.inputClass;
            return new(t || (ue ? I : fe ? j : ce ? P : N))(e, x)
        }(this), this.touchAction = new H(this, this.options.touchAction), G(this, !0), s(this.options.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }, this)
    }

    function G(e, t) {
        var n, i = e.element;
        i.style && (s(e.options.cssProps, function(r, o) {
            n = w(i.style, o), t ? (e.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = e.oldCssProps[n] || ""
        }), t || (e.oldCssProps = {}))
    }

    function J(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var Z, ee = ["", "webkit", "Moz", "MS", "ms", "o"],
        te = t.createElement("div"),
        ne = "function",
        ie = Math.round,
        re = Math.abs,
        oe = Date.now;
    Z = "function" != typeof Object.assign ? function(e) {
        if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (r !== i && null !== r)
                for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
        }
        return t
    } : Object.assign;
    var se = a(function(e, t, n) {
            for (var r = Object.keys(t), o = 0; o < r.length;)(!n || n && e[r[o]] === i) && (e[r[o]] = t[r[o]]), o++;
            return e
        }, "extend", "Use `assign`."),
        ae = a(function(e, t) {
            return se(e, t, !0)
        }, "merge", "Use `assign`."),
        le = 1,
        ce = "ontouchstart" in e,
        ue = w(e, "PointerEvent") !== i,
        fe = ce && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        he = "touch",
        de = "mouse",
        pe = 25,
        ge = 1,
        me = 2,
        ve = 4,
        ye = 8,
        be = 1,
        we = 2,
        _e = 4,
        Ee = 8,
        xe = 16,
        Te = we | _e,
        Se = Ee | xe,
        ke = Te | Se,
        Ce = ["x", "y"],
        Ae = ["clientX", "clientY"];
    E.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(_(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(_(this.element), this.evWin, this.domHandler)
        }
    };
    var De = {
            mousedown: ge,
            mousemove: me,
            mouseup: ve
        },
        Oe = "mousedown",
        Ne = "mousemove mouseup";
    l(N, E, {
        handler: function(e) {
            var t = De[e.type];
            t & ge && 0 === e.button && (this.pressed = !0), t & me && 1 !== e.which && (t = ve), this.pressed && (t & ve && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: de,
                srcEvent: e
            }))
        }
    });
    var Ie = {
            pointerdown: ge,
            pointermove: me,
            pointerup: ve,
            pointercancel: ye,
            pointerout: ye
        },
        Le = {
            2: he,
            3: "pen",
            4: de,
            5: "kinect"
        },
        je = "pointerdown",
        Pe = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (je = "MSPointerDown", Pe = "MSPointerMove MSPointerUp MSPointerCancel"), l(I, E, {
        handler: function(e) {
            var t = this.store,
                n = !1,
                i = e.type.toLowerCase().replace("ms", ""),
                r = Ie[i],
                o = Le[e.pointerType] || e.pointerType,
                s = o == he,
                a = v(t, e.pointerId, "pointerId");
            r & ge && (0 === e.button || s) ? 0 > a && (t.push(e), a = t.length - 1) : r & (ve | ye) && (n = !0), 0 > a || (t[a] = e, this.callback(this.manager, r, {
                pointers: t,
                changedPointers: [e],
                pointerType: o,
                srcEvent: e
            }), n && t.splice(a, 1))
        }
    });
    var Re = {
            touchstart: ge,
            touchmove: me,
            touchend: ve,
            touchcancel: ye
        },
        He = "touchstart",
        Me = "touchstart touchmove touchend touchcancel";
    l(L, E, {
        handler: function(e) {
            var t = Re[e.type];
            if (t === ge && (this.started = !0), this.started) {
                var n = function(e, t) {
                    var n = y(e.touches),
                        i = y(e.changedTouches);
                    return t & (ve | ye) && (n = b(n.concat(i), "identifier", !0)), [n, i]
                }.call(this, e, t);
                t & (ve | ye) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: he,
                    srcEvent: e
                })
            }
        }
    });
    var We = {
            touchstart: ge,
            touchmove: me,
            touchend: ve,
            touchcancel: ye
        },
        qe = "touchstart touchmove touchend touchcancel";
    l(j, E, {
        handler: function(e) {
            var t = We[e.type],
                n = function(e, t) {
                    var n = y(e.touches),
                        i = this.targetIds;
                    if (t & (ge | me) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                    var r, o, s = y(e.changedTouches),
                        a = [],
                        l = this.target;
                    if (o = n.filter(function(e) {
                            return p(e.target, l)
                        }), t === ge)
                        for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
                    for (r = 0; r < s.length;) i[s[r].identifier] && a.push(s[r]), t & (ve | ye) && delete i[s[r].identifier], r++;
                    return a.length ? [b(o.concat(a), "identifier", !0), a] : void 0
                }.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: he,
                srcEvent: e
            })
        }
    });
    var Fe = 2500,
        Ue = 25;
    l(P, E, {
        handler: function(e, t, n) {
            var i = n.pointerType == he,
                r = n.pointerType == de;
            if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i)(function(e, t) {
                    e & ge ? (this.primaryTouch = t.changedPointers[0].identifier, R.call(this, t)) : e & (ve | ye) && R.call(this, t)
                }).call(this, t, n);
                else if (r && function(e) {
                        for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                            var r = this.lastTouches[i],
                                o = Math.abs(t - r.x),
                                s = Math.abs(n - r.y);
                            if (Ue >= o && Ue >= s) return !0
                        }
                        return !1
                    }.call(this, n)) return;
                this.callback(e, t, n)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ye = w(te.style, "touchAction"),
        Xe = Ye !== i,
        Be = "compute",
        ze = "auto",
        Ke = "manipulation",
        Ve = "none",
        $e = "pan-x",
        Qe = "pan-y",
        Ge = function() {
            if (!Xe) return !1;
            var t = {},
                n = e.CSS && e.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
                t[i] = !n || e.CSS.supports("touch-action", i)
            }), t
        }();
    H.prototype = {
        set: function(e) {
            e == Be && (e = this.compute()), Xe && this.manager.element.style && Ge[e] && (this.manager.element.style[Ye] = e), this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return s(this.manager.recognizers, function(t) {
                    u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }),
                function(e) {
                    if (g(e, Ve)) return Ve;
                    var t = g(e, $e),
                        n = g(e, Qe);
                    return t && n ? Ve : t || n ? t ? $e : Qe : g(e, Ke) ? Ke : ze
                }(e.join(" "))
        },
        preventDefaults: function(e) {
            var t = e.srcEvent,
                n = e.offsetDirection;
            if (!this.manager.session.prevented) {
                var i = this.actions,
                    r = g(i, Ve) && !Ge[Ve],
                    o = g(i, Qe) && !Ge[Qe],
                    s = g(i, $e) && !Ge[$e];
                if (r) {
                    var a = 1 === e.pointers.length,
                        l = e.distance < 2,
                        c = e.deltaTime < 250;
                    if (a && l && c) return
                }
                return s && o ? void 0 : r || o && n & Te || s && n & Se ? this.preventSrc(t) : void 0
            }
            t.preventDefault()
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var Je = 1,
        Ze = 2,
        et = 4,
        tt = 8,
        nt = tt,
        it = 16;
    M.prototype = {
        defaults: {},
        set: function(e) {
            return Z(this.options, e), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(e) {
            if (o(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = F(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
        },
        dropRecognizeWith: function(e) {
            return o(e, "dropRecognizeWith", this) ? this : (e = F(e, this), delete this.simultaneous[e.id], this)
        },
        requireFailure: function(e) {
            if (o(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === v(t, e = F(e, this)) && (t.push(e), e.requireFailure(this)), this
        },
        dropRequireFailure: function(e) {
            if (o(e, "dropRequireFailure", this)) return this;
            e = F(e, this);
            var t = v(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                n.manager.emit(t, e)
            }
            var n = this,
                i = this.state;
            tt > i && t(n.options.event + W(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= tt && t(n.options.event + W(i))
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void(this.state = 32)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (32 | Je))) return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = Z({}, e);
            return u(this.options.enable, [this, t]) ? (this.state & (nt | it | 32) && (this.state = Je), this.state = this.process(t), void(this.state & (Ze | et | tt | it) && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(U, M, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state,
                n = e.eventType,
                i = t & (Ze | et),
                r = this.attrTest(e);
            return i && (n & ye || !r) ? t | it : i || r ? n & ve ? t | tt : t & Ze ? t | et : Ze : 32
        }
    }), l(Y, U, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: ke
        },
        getTouchAction: function() {
            var e = this.options.direction,
                t = [];
            return e & Te && t.push(Qe), e & Se && t.push($e), t
        },
        directionTest: function(e) {
            var t = this.options,
                n = !0,
                i = e.distance,
                r = e.direction,
                o = e.deltaX,
                s = e.deltaY;
            return r & t.direction || (t.direction & Te ? (r = 0 === o ? be : 0 > o ? we : _e, n = o != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === s ? be : 0 > s ? Ee : xe, n = s != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
        },
        attrTest: function(e) {
            return U.prototype.attrTest.call(this, e) && (this.state & Ze || !(this.state & Ze) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = q(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
        }
    }), l(X, U, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ve]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & Ze)
        },
        emit: function(e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }), l(B, M, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ze]
        },
        process: function(e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                o = e.deltaTime > t.time;
            if (this._input = e, !i || !n || e.eventType & (ve | ye) && !o) this.reset();
            else if (e.eventType & ge) this.reset(), this._timer = r(function() {
                this.state = nt, this.tryEmit()
            }, t.time, this);
            else if (e.eventType & ve) return nt;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === nt && (e && e.eventType & ve ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = oe(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(z, U, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ve]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & Ze)
        }
    }), l(K, U, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Te | Se,
            pointers: 1
        },
        getTouchAction: function() {
            return Y.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (Te | Se) ? t = e.overallVelocity : n & Te ? t = e.overallVelocityX : n & Se && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && re(t) > this.options.velocity && e.eventType & ve
        },
        emit: function(e) {
            var t = q(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), l(V, M, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Ke]
        },
        process: function(e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                o = e.deltaTime < t.time;
            if (this.reset(), e.eventType & ge && 0 === this.count) return this.failTimeout();
            if (i && o && n) {
                if (e.eventType != ve) return this.failTimeout();
                var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
                    a = !this.pCenter || D(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp, this.pCenter = e.center, a && s ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = r(function() {
                    this.state = nt, this.tryEmit()
                }, t.interval, this), Ze) : nt
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = 32
            }, this.options.interval, this), 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == nt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), $.VERSION = "2.0.8", $.defaults = {
        domEvents: !1,
        touchAction: Be,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [z, {
                enable: !1
            }],
            [X, {
                    enable: !1
                },
                ["rotate"]
            ],
            [K, {
                direction: Te
            }],
            [Y, {
                    direction: Te
                },
                ["swipe"]
            ],
            [V],
            [V, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [B]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    Q.prototype = {
        set: function(e) {
            return Z(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers,
                    r = t.curRecognizer;
                (!r || r && r.state & nt) && (r = t.curRecognizer = null);
                for (var o = 0; o < i.length;) n = i[o], 2 === t.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (Ze | et | tt) && (r = t.curRecognizer = n), o++
            }
        },
        get: function(e) {
            if (e instanceof M) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
            return null
        },
        add: function(e) {
            if (o(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        },
        remove: function(e) {
            if (o(e, "remove", this)) return this;
            if (e = this.get(e)) {
                var t = this.recognizers,
                    n = v(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
            }
            return this
        },
        on: function(e, t) {
            if (e !== i && t !== i) {
                var n = this.handlers;
                return s(m(e), function(e) {
                    n[e] = n[e] || [], n[e].push(t)
                }), this
            }
        },
        off: function(e, t) {
            if (e !== i) {
                var n = this.handlers;
                return s(m(e), function(e) {
                    t ? n[e] && n[e].splice(v(n[e], t), 1) : delete n[e]
                }), this
            }
        },
        emit: function(e, t) {
            this.options.domEvents && J(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e, t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](t), i++
            }
        },
        destroy: function() {
            this.element && G(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, Z($, {
        INPUT_START: ge,
        INPUT_MOVE: me,
        INPUT_END: ve,
        INPUT_CANCEL: ye,
        STATE_POSSIBLE: Je,
        STATE_BEGAN: Ze,
        STATE_CHANGED: et,
        STATE_ENDED: tt,
        STATE_RECOGNIZED: nt,
        STATE_CANCELLED: it,
        STATE_FAILED: 32,
        DIRECTION_NONE: be,
        DIRECTION_LEFT: we,
        DIRECTION_RIGHT: _e,
        DIRECTION_UP: Ee,
        DIRECTION_DOWN: xe,
        DIRECTION_HORIZONTAL: Te,
        DIRECTION_VERTICAL: Se,
        DIRECTION_ALL: ke,
        Manager: Q,
        Input: E,
        TouchAction: H,
        TouchInput: j,
        MouseInput: N,
        PointerEventInput: I,
        TouchMouseInput: P,
        SingleTouchInput: L,
        Recognizer: M,
        AttrRecognizer: U,
        Tap: V,
        Pan: Y,
        Swipe: K,
        Pinch: X,
        Rotate: z,
        Press: B,
        on: h,
        off: d,
        each: s,
        merge: ae,
        extend: se,
        assign: Z,
        inherit: l,
        bindFn: c,
        prefixed: w
    }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = $, "function" == typeof define && define.amd ? define(function() {
        return $
    }) : "undefined" != typeof module && module.exports ? module.exports = $ : e.Hammer = $
}(window, document), Unison = function() {
        "use strict";
        var e, t = window,
            n = document,
            i = n.head,
            r = {},
            o = !1,
            s = {
                parseMQ: function(e) {
                    return t.getComputedStyle(e, null).getPropertyValue("font-family").replace(/"/g, "").replace(/'/g, "")
                },
                debounce: function(e, t, n) {
                    var i;
                    return function() {
                        var r = this,
                            o = arguments;
                        clearTimeout(i), i = setTimeout(function() {
                            i = null, n || e.apply(r, o)
                        }, t), n && !i && e.apply(r, o)
                    }
                },
                isObject: function(e) {
                    return "object" == typeof e
                },
                isUndefined: function(e) {
                    return void 0 === e
                }
            },
            a = {
                on: function(e, t) {
                    s.isObject(r[e]) || (r[e] = []), r[e].push(t)
                },
                emit: function(e, t) {
                    if (s.isObject(r[e]))
                        for (var n = r[e].slice(), i = 0; i < n.length; i++) n[i].call(this, t)
                }
            },
            l = {
                all: function() {
                    for (var e = {}, t = s.parseMQ(n.querySelector("title")).split(","), i = 0; i < t.length; i++) {
                        var r = t[i].trim().split(" ");
                        e[r[0]] = r[1]
                    }
                    return o ? e : null
                },
                now: function(e) {
                    var t = s.parseMQ(i).split(" "),
                        n = {
                            name: t[0],
                            width: t[1]
                        };
                    return o ? s.isUndefined(e) ? n : e(n) : null
                },
                update: function() {
                    l.now(function(t) {
                        t.name !== e && (a.emit(t.name), a.emit("change", t), e = t.name)
                    })
                }
            };
        return t.onresize = s.debounce(l.update, 100), n.addEventListener("DOMContentLoaded", function() {
            o = "none" !== t.getComputedStyle(i, null).getPropertyValue("clear"), l.update()
        }), {
            fetch: {
                all: l.all,
                now: l.now
            },
            on: a.on,
            emit: a.emit,
            util: {
                debounce: s.debounce,
                isObject: s.isObject
            }
        }
    }(),
    function() {
        "use strict";

        function e(e) {
            function t(t, i) {
                var o, p, g = t == window,
                    m = i && void 0 !== i.message ? i.message : void 0;
                if (!(i = e.extend({}, e.blockUI.defaults, i || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                    if (i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), o = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), p = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), m = void 0 === m ? i.message : m, g && h && n(window, {
                            fadeOut: 0
                        }), m && "string" != typeof m && (m.parentNode || m.jquery)) {
                        var v = m.jquery ? m[0] : m,
                            y = {};
                        e(t).data("blockUI.history", y), y.el = v, y.parent = v.parentNode, y.display = v.style.display, y.position = v.style.position, y.parent && y.parent.removeChild(v)
                    }
                    e(t).data("blockUI.onUnblock", i.onUnblock);
                    var b, w, _, E, x = i.baseZ;
                    b = e(c || i.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), w = e(i.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), i.theme && g ? (E = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', i.title && (E += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), E += '<div class="ui-widget-content ui-dialog-content"></div>', E += "</div>") : i.theme ? (E = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', i.title && (E += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), E += '<div class="ui-widget-content ui-dialog-content"></div>', E += "</div>") : E = g ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', _ = e(E), m && (i.theme ? (_.css(p), _.addClass("ui-widget-content")) : _.css(o)), i.theme || w.css(i.overlayCSS), w.css("position", g ? "fixed" : "absolute"), (c || i.forceIframe) && b.css("opacity", 0);
                    var T = [b, w, _],
                        S = e(g ? "body" : t);
                    e.each(T, function() {
                        this.appendTo(S)
                    }), i.theme && i.draggable && e.fn.draggable && _.draggable({
                        handle: ".ui-dialog-titlebar",
                        cancel: "li"
                    });
                    var k = f && (!e.support.boxModel || e("object,embed", g ? null : t).length > 0);
                    if (u || k) {
                        if (g && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !g) var C = a(t, "borderTopWidth"),
                            A = a(t, "borderLeftWidth"),
                            D = C ? "(0 - " + C + ")" : 0,
                            O = A ? "(0 - " + A + ")" : 0;
                        e.each(T, function(e, t) {
                            var n = t[0].style;
                            if (n.position = "absolute", 2 > e) g ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"'), g ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'), O && n.setExpression("left", O), D && n.setExpression("top", D);
                            else if (i.centerY) g && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), n.marginTop = 0;
                            else if (!i.centerY && g) {
                                var r = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (i.css && i.css.top ? parseInt(i.css.top, 10) : 0) + ') + "px"';
                                n.setExpression("top", r)
                            }
                        })
                    }
                    if (m && (i.theme ? _.find(".ui-widget-content").append(m) : _.append(m), (m.jquery || m.nodeType) && e(m).show()), (c || i.forceIframe) && i.showOverlay && b.show(), i.fadeIn) {
                        var N = i.onBlock ? i.onBlock : l,
                            I = i.showOverlay && !m ? N : l,
                            L = m ? N : l;
                        i.showOverlay && w._fadeIn(i.fadeIn, I), m && _._fadeIn(i.fadeIn, L)
                    } else i.showOverlay && w.show(), m && _.show(), i.onBlock && i.onBlock.bind(_)();
                    if (r(1, t, i), g ? (h = _[0], d = e(i.focusableElements, h), i.focusInput && setTimeout(s, 20)) : function(e, t, n) {
                            var i = e.parentNode,
                                r = e.style,
                                o = (i.offsetWidth - e.offsetWidth) / 2 - a(i, "borderLeftWidth"),
                                s = (i.offsetHeight - e.offsetHeight) / 2 - a(i, "borderTopWidth");
                            t && (r.left = o > 0 ? o + "px" : "0"), n && (r.top = s > 0 ? s + "px" : "0")
                        }(_[0], i.centerX, i.centerY), i.timeout) {
                        var j = setTimeout(function() {
                            g ? e.unblockUI(i) : e(t).unblock(i)
                        }, i.timeout);
                        e(t).data("blockUI.timeout", j)
                    }
                }
            }

            function n(t, n) {
                var o, s, a = t == window,
                    l = e(t),
                    c = l.data("blockUI.history"),
                    u = l.data("blockUI.timeout");
                u && (clearTimeout(u), l.removeData("blockUI.timeout")), n = e.extend({}, e.blockUI.defaults, n || {}), r(0, t, n), null === n.onUnblock && (n.onUnblock = l.data("blockUI.onUnblock"), l.removeData("blockUI.onUnblock")), s = a ? e("body").children().filter(".blockUI").add("body > .blockUI") : l.find(">.blockUI"), n.cursorReset && (s.length > 1 && (s[1].style.cursor = n.cursorReset), s.length > 2 && (s[2].style.cursor = n.cursorReset)), a && (h = d = null), n.fadeOut ? (o = s.length, s.stop().fadeOut(n.fadeOut, function() {
                    0 == --o && i(s, c, n, t)
                })) : i(s, c, n, t)
            }

            function i(t, n, i, r) {
                var o = e(r);
                if (!o.data("blockUI.isBlocked")) {
                    t.each(function(e, t) {
                        this.parentNode && this.parentNode.removeChild(this)
                    }), n && n.el && (n.el.style.display = n.display, n.el.style.position = n.position, n.el.style.cursor = "default", n.parent && n.parent.appendChild(n.el), o.removeData("blockUI.history")), o.data("blockUI.static") && o.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(r, i);
                    var s = e(document.body),
                        a = s.width(),
                        l = s[0].style.width;
                    s.width(a - 1).width(a), s[0].style.width = l
                }
            }

            function r(t, n, i) {
                var r = n == window,
                    s = e(n);
                if ((t || (!r || h) && (r || s.data("blockUI.isBlocked"))) && (s.data("blockUI.isBlocked", t), r && i.bindEvents && (!t || i.showOverlay))) {
                    var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                    t ? e(document).bind(a, i, o) : e(document).unbind(a, o)
                }
            }

            function o(t) {
                if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && h && t.data.constrainTabKey) {
                    var n = d,
                        i = !t.shiftKey && t.target === n[n.length - 1],
                        r = t.shiftKey && t.target === n[0];
                    if (i || r) return setTimeout(function() {
                        s(r)
                    }, 10), !1
                }
                var o = t.data,
                    a = e(t.target);
                return a.hasClass("blockOverlay") && o.onOverlayClick && o.onOverlayClick(t), a.parents("div." + o.blockMsgClass).length > 0 || 0 === a.parents().children().filter("div.blockUI").length
            }

            function s(e) {
                if (d) {
                    var t = d[!0 === e ? d.length - 1 : 0];
                    t && t.focus()
                }
            }

            function a(t, n) {
                return parseInt(e.css(t, n), 10) || 0
            }
            e.fn._fadeIn = e.fn.fadeIn;
            var l = e.noop || function() {},
                c = /MSIE/.test(navigator.userAgent),
                u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
                f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
            e.blockUI = function(e) {
                t(window, e)
            }, e.unblockUI = function(e) {
                n(window, e)
            }, e.growlUI = function(t, n, i, r) {
                var o = e('<div class="growlUI"></div>');
                t && o.append("<h1>" + t + "</h1>"), n && o.append("<h2>" + n + "</h2>"), void 0 === i && (i = 3e3);
                var s = function(t) {
                    t = t || {}, e.blockUI({
                        message: o,
                        fadeIn: void 0 !== t.fadeIn ? t.fadeIn : 700,
                        fadeOut: void 0 !== t.fadeOut ? t.fadeOut : 1e3,
                        timeout: void 0 !== t.timeout ? t.timeout : i,
                        centerY: !1,
                        showOverlay: !1,
                        onUnblock: r,
                        css: e.blockUI.defaults.growlCSS
                    })
                };
                s(), o.css("opacity"), o.mouseover(function() {
                    s({
                        fadeIn: 0,
                        timeout: 3e4
                    });
                    var t = e(".blockMsg");
                    t.stop(), t.fadeTo(300, 1)
                }).mouseout(function() {
                    e(".blockMsg").fadeOut(1e3)
                })
            }, e.fn.block = function(n) {
                if (this[0] === window) return e.blockUI(n), this;
                var i = e.extend({}, e.blockUI.defaults, n || {});
                return this.each(function() {
                    var t = e(this);
                    i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                        fadeOut: 0
                    })
                }), this.each(function() {
                    "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, n)
                })
            }, e.fn.unblock = function(t) {
                return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
                    n(this, t)
                })
            }, e.blockUI.version = 2.7, e.blockUI.defaults = {
                message: "<h1>Please wait...</h1>",
                title: null,
                draggable: !0,
                theme: !1,
                css: {
                    padding: 0,
                    margin: 0,
                    width: "30%",
                    top: "40%",
                    left: "35%",
                    textAlign: "center",
                    color: "#000",
                    border: "3px solid #aaa",
                    backgroundColor: "#fff",
                    cursor: "wait"
                },
                themedCSS: {
                    width: "30%",
                    top: "40%",
                    left: "35%"
                },
                overlayCSS: {
                    backgroundColor: "#000",
                    opacity: .6,
                    cursor: "wait"
                },
                cursorReset: "default",
                growlCSS: {
                    width: "350px",
                    top: "10px",
                    left: "",
                    right: "10px",
                    border: "none",
                    padding: "5px",
                    opacity: .6,
                    cursor: "default",
                    color: "#fff",
                    backgroundColor: "#000",
                    "-webkit-border-radius": "10px",
                    "-moz-border-radius": "10px",
                    "border-radius": "10px"
                },
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                forceIframe: !1,
                baseZ: 1e3,
                centerX: !0,
                centerY: !0,
                allowBodyStretch: !0,
                bindEvents: !0,
                constrainTabKey: !0,
                fadeIn: 200,
                fadeOut: 400,
                timeout: 0,
                showOverlay: !0,
                focusInput: !0,
                focusableElements: ":input:enabled:visible",
                onBlock: null,
                onUnblock: null,
                onOverlayClick: null,
                quirksmodeOffsetHack: 4,
                blockMsgClass: "blockMsg",
                ignoreIfBlocked: !1
            };
            var h = null,
                d = []
        }
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
    }(),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        var t = -1,
            n = -1,
            i = function(e) {
                return parseFloat(e) || 0
            },
            r = function(t) {
                var n = e(t),
                    r = null,
                    o = [];
                return n.each(function() {
                    var t = e(this),
                        n = t.offset().top - i(t.css("margin-top")),
                        s = o.length > 0 ? o[o.length - 1] : null;
                    null === s ? o.push(t) : Math.floor(Math.abs(r - n)) <= 1 ? o[o.length - 1] = s.add(t) : o.push(t), r = n
                }), o
            },
            o = function(t) {
                var n = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
            },
            s = e.fn.matchHeight = function(t) {
                var n = o(t);
                if (n.remove) {
                    var i = this;
                    return this.css(n.property, ""), e.each(s._groups, function(e, t) {
                        t.elements = t.elements.not(i)
                    }), this
                }
                return this.length <= 1 && !n.target ? this : (s._groups.push({
                    elements: this,
                    options: n
                }), s._apply(this, n), this)
            };
        s.version = "0.7.2", s._groups = [], s._throttle = 80, s._maintainScroll = !1, s._beforeUpdate = null, s._afterUpdate = null, s._rows = r, s._parse = i, s._parseOptions = o, s._apply = function(t, n) {
            var a = o(n),
                l = e(t),
                c = [l],
                u = e(window).scrollTop(),
                f = e("html").outerHeight(!0),
                h = l.parents().filter(":hidden");
            return h.each(function() {
                var t = e(this);
                t.data("style-cache", t.attr("style"))
            }), h.css("display", "block"), a.byRow && !a.target && (l.each(function() {
                var t = e(this),
                    n = t.css("display");
                "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"), t.data("style-cache", t.attr("style")), t.css({
                    display: n,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), c = r(l), l.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || "")
            })), e.each(c, function(t, n) {
                var r = e(n),
                    o = 0;
                if (a.target) o = a.target.outerHeight(!1);
                else {
                    if (a.byRow && r.length <= 1) return void r.css(a.property, "");
                    r.each(function() {
                        var t = e(this),
                            n = t.attr("style"),
                            i = t.css("display");
                        "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                        var r = {
                            display: i
                        };
                        r[a.property] = "", t.css(r), t.outerHeight(!1) > o && (o = t.outerHeight(!1)), n ? t.attr("style", n) : t.css("display", "")
                    })
                }
                r.each(function() {
                    var t = e(this),
                        n = 0;
                    a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(a.property, o - n + "px"))
                })
            }), h.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || null)
            }), s._maintainScroll && e(window).scrollTop(u / f * e("html").outerHeight(!0)), this
        }, s._applyDataApi = function() {
            var t = {};
            e("[data-match-height], [data-mh]").each(function() {
                var n = e(this),
                    i = n.attr("data-mh") || n.attr("data-match-height");
                t[i] = i in t ? t[i].add(n) : n
            }), e.each(t, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(t) {
            s._beforeUpdate && s._beforeUpdate(t, s._groups), e.each(s._groups, function() {
                s._apply(this.elements, this.options)
            }), s._afterUpdate && s._afterUpdate(t, s._groups)
        };
        s._update = function(i, r) {
            if (r && "resize" === r.type) {
                var o = e(window).width();
                if (o === t) return;
                t = o
            }
            i ? -1 === n && (n = setTimeout(function() {
                a(r), n = -1
            }, s._throttle)) : a(r)
        }, e(s._applyDataApi);
        var l = e.fn.on ? "on" : "bind";
        e(window)[l]("load", function(e) {
            s._update(!1, e)
        }), e(window)[l]("resize orientationchange", function(e) {
            s._update(!0, e)
        })
    }),
    function(e) {
        var t = [];
        e.fn.slidingMenu = function(n) {
            function i(t) {
                var n = e("ul", t),
                    i = [];
                return e(n).each(function(t, n) {
                    var r = e(n),
                        s = r.prev(),
                        a = o();
                    if (1 == s.length && (s.addClass("nav-has-children dropdown-item").attr("href", "#menu-panel-" + a), s.append('<i class="ft-arrow-right children-in"></i>')), r.attr("id", "menu-panel-" + a), 0 == t) r.addClass("menu-panel-root");
                    else {
                        r.addClass("menu-panel");
                        var l = (e("<li></li>"), e("<a></a>").addClass("nav-has-parent back primary dropdown-item").attr("href", "#menu-panel-back"));
                        r.prepend(l)
                    }
                    i.push(n)
                }), i
            }

            function r(t, n) {
                var i = {
                        id: "menu-panel-" + o(),
                        children: [],
                        root: !n
                    },
                    s = [];
                return n && i.children.push({
                    styleClass: "back",
                    href: "#" + n.id
                }), e(t).each(function(e, t) {
                    if (i.children.push(t), t.children) {
                        var n = r(t.children, i);
                        t.href = "#" + n[0].id, t.styleClass = "nav", s = s.concat(n)
                    }
                }), [i].concat(s)
            }

            function o() {
                var e;
                do {
                    e = Math.random().toString(36).substring(3, 8)
                } while (t.indexOf(e) >= 0);
                return t.push(e), e
            }

            function s() {
                var t = e(".sliding-menu-wrapper"),
                    n = e(".sliding-menu-wrapper ul");
                n.length && setTimeout(function() {
                    var i = e(a).width();
                    t.width(n.length * i), n.each(function(t, n) {
                        e(n).width(i)
                    }), t.css("margin-left", "")
                }, 300)
            }
            var a = this.selector,
                l = !1;
            "rtl" == e("html").data("textdirection") && (l = !0);
            var c = e.extend({
                dataJSON: !1,
                backLabel: "Back"
            }, n);
            return this.each(function() {
                var t, n = e(this);
                if (!n.hasClass("sliding-menu")) {
                    var o, a = n.outerWidth();
                    t = c.dataJSON ? r(c.dataJSON) : i(n), n.empty().addClass("sliding-menu"), c.dataJSON ? e(t).each(function(t, i) {
                        var r = e("<ul></ul>");
                        i.root && (o = "#" + i.id), r.attr("id", i.id), r.addClass("menu-panel"), r.width(a), e(i.children).each(function(t, n) {
                            var i = e("<a></a>");
                            i.attr("class", n.styleClass), i.attr("href", n.href), i.text(n.label);
                            var o = e("<li></li>");
                            o.append(i), r.append(o)
                        }), n.append(r)
                    }) : e(t).each(function(t, i) {
                        var r = e(i);
                        r.hasClass("menu-panel-root") && (o = "#" + r.attr("id")), r.width(a), n.append(i)
                    }), (o = e(o)).addClass("menu-panel-root");
                    var u = o;
                    n.height(o.height());
                    var f = e("<div></div>").addClass("sliding-menu-wrapper").width(t.length * a);
                    return n.wrapInner(f), f = e(".sliding-menu-wrapper", n), e("a", this).on("click", function(t) {
                        var i = e(this).attr("href"),
                            r = e(this).text();
                        if (f.is(":animated")) t.preventDefault();
                        else if ("#" == i) t.preventDefault();
                        else if (0 == i.indexOf("#menu-panel")) {
                            var s, a, h = e(i),
                                d = e(this).hasClass("back");
                            !0 === l ? a = parseInt(f.css("margin-right")) : s = parseInt(f.css("margin-left"));
                            var p = n.width();
                            e(this).closest("ul").hasClass("menu-panel-root") && (u = o), d ? ("#menu-panel-back" == i && (h = u.prev()), properties = !0 === l ? {
                                marginRight: a + p
                            } : {
                                marginLeft: s + p
                            }, f.stop(!0, !0).animate(properties, "fast")) : (h.insertAfter(u), !0 === c.backLabel ? e(".back", h).html('<i class="fa fa-arrow-circle-o-left back-in"></i>' + r) : e(".back", h).text(c.backLabel), properties = !0 === l ? {
                                marginRight: a - p
                            } : {
                                marginLeft: s - p
                            }, f.stop(!0, !0).animate(properties, "fast")), u = h, n.stop(!0, !0).animate({
                                height: h.height()
                            }, "fast"), t.preventDefault()
                        }
                    }), this
                }
                s()
            })
        }
    }(jQuery),
    function() {
        "use strict";
        var e = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
            t = "undefined" != typeof module && module.exports,
            n = function() {
                for (var t, n = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], i = 0, r = n.length, o = {}; i < r; i++)
                    if ((t = n[i]) && t[1] in e) {
                        for (i = 0; i < t.length; i++) o[n[0][i]] = t[i];
                        return o
                    }
                return !1
            }(),
            i = {
                change: n.fullscreenchange,
                error: n.fullscreenerror
            },
            r = {
                request: function(t) {
                    return new Promise(function(i, r) {
                        var o = function() {
                            this.off("change", o), i()
                        }.bind(this);
                        this.on("change", o), t = t || e.documentElement, Promise.resolve(t[n.requestFullscreen]()).catch(r)
                    }.bind(this))
                },
                exit: function() {
                    return new Promise(function(t, i) {
                        if (this.isFullscreen) {
                            var r = function() {
                                this.off("change", r), t()
                            }.bind(this);
                            this.on("change", r), Promise.resolve(e[n.exitFullscreen]()).catch(i)
                        } else t()
                    }.bind(this))
                },
                toggle: function(e) {
                    return this.isFullscreen ? this.exit() : this.request(e)
                },
                onchange: function(e) {
                    this.on("change", e)
                },
                onerror: function(e) {
                    this.on("error", e)
                },
                on: function(t, n) {
                    var r = i[t];
                    r && e.addEventListener(r, n, !1)
                },
                off: function(t, n) {
                    var r = i[t];
                    r && e.removeEventListener(r, n, !1)
                },
                raw: n
            };
        n ? (Object.defineProperties(r, {
            isFullscreen: {
                get: function() {
                    return Boolean(e[n.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return e[n.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(e[n.fullscreenEnabled])
                }
            }
        }), t ? module.exports = r : window.screenfull = r) : t ? module.exports = {
            isEnabled: !1
        } : window.screenfull = {
            isEnabled: !1
        }
    }(),
    function() {
        var e, t, n, i, r, o, s, a, l, c, u, f, h, d, p, g, m, v, y, b, w, _, E, x, T, S, k, C, A, D, O, N, I, L, j, P, R, H, M, W, q, F, U, Y, X, B, z, K, V = [].slice,
            $ = {}.hasOwnProperty,
            Q = function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) $.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            G = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        for (w = {
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !0,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, A = function() {
                var e;
                return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
            }, O = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, b = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == O && (O = function(e) {
                return setTimeout(e, 50)
            }, b = function(e) {
                return clearTimeout(e)
            }), I = function(e) {
                var t, n;
                return t = A(), (n = function() {
                    var i;
                    return (i = A() - t) >= 33 ? (t = A(), e(i, function() {
                        return O(n)
                    })) : setTimeout(n, 33 - i)
                })()
            }, N = function() {
                var e, t, n;
                return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? V.call(arguments, 2) : [], "function" == typeof n[t] ? n[t].apply(n, e) : n[t]
            }, _ = function() {
                var e, t, n, i, r, o, s;
                for (t = arguments[0], o = 0, s = (i = 2 <= arguments.length ? V.call(arguments, 1) : []).length; s > o; o++)
                    if (n = i[o])
                        for (e in n) $.call(n, e) && (r = n[e], null != t[e] && "object" == typeof t[e] && null != r && "object" == typeof r ? _(t[e], r) : t[e] = r);
                return t
            }, m = function(e) {
                var t, n, i, r, o;
                for (n = t = 0, r = 0, o = e.length; o > r; r++) i = e[r], n += Math.abs(i), t++;
                return n / t
            }, x = function(e, t) {
                var n, i, r;
                if (null == e && (e = "options"), null == t && (t = !0), r = document.querySelector("[data-pace-" + e + "]")) {
                    if (n = r.getAttribute("data-pace-" + e), !t) return n;
                    try {
                        return JSON.parse(n)
                    } catch (e) {
                        return i = e, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
                    }
                }
            }, s = function() {
                function e() {}
                return e.prototype.on = function(e, t, n, i) {
                    var r;
                    return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (r = this.bindings)[e] && (r[e] = []), this.bindings[e].push({
                        handler: t,
                        ctx: n,
                        once: i
                    })
                }, e.prototype.once = function(e, t, n) {
                    return this.on(e, t, n, !0)
                }, e.prototype.off = function(e, t) {
                    var n, i, r;
                    if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                        if (null == t) return delete this.bindings[e];
                        for (n = 0, r = []; n < this.bindings[e].length;) r.push(this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : n++);
                        return r
                    }
                }, e.prototype.trigger = function() {
                    var e, t, n, i, r, o, s, a, l;
                    if (n = arguments[0], e = 2 <= arguments.length ? V.call(arguments, 1) : [], null != (s = this.bindings) ? s[n] : void 0) {
                        for (r = 0, l = []; r < this.bindings[n].length;) i = (a = this.bindings[n][r]).handler, t = a.ctx, o = a.once, i.apply(null != t ? t : this, e), l.push(o ? this.bindings[n].splice(r, 1) : r++);
                        return l
                    }
                }, e
            }(), c = window.Pace || {}, window.Pace = c, _(c, s.prototype), D = c.options = _({}, w, window.paceOptions, x()), U = 0, X = (z = ["ajax", "document", "eventLag", "elements"]).length; X > U; U++) !0 === D[R = z[U]] && (D[R] = w[R]);
        l = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return Q(t, e), t
        }(Error), t = function() {
            function e() {
                this.progress = 0
            }
            return e.prototype.getElement = function() {
                var e;
                if (null == this.el) {
                    if (!(e = document.querySelector(D.target))) throw new l;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
                }
                return this.el
            }, e.prototype.finish = function() {
                var e;
                return (e = this.getElement()).className = e.className.replace("pace-active", ""), e.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, e.prototype.update = function(e) {
                return this.progress = e, this.render()
            }, e.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (e) {
                    l = e
                }
                return this.el = void 0
            }, e.prototype.render = function() {
                var e, t, n, i, r, o, s;
                if (null == document.querySelector(D.target)) return !1;
                for (e = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", r = 0, o = (s = ["webkitTransform", "msTransform", "transform"]).length; o > r; r++) t = s[r], e.children[0].style[t] = i;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress
            }, e.prototype.done = function() {
                return this.progress >= 100
            }, e
        }(), a = function() {
            function e() {
                this.bindings = {}
            }
            return e.prototype.trigger = function(e, t) {
                var n, i, r, o, s;
                if (null != this.bindings[e]) {
                    for (s = [], i = 0, r = (o = this.bindings[e]).length; r > i; i++) n = o[i], s.push(n.call(this, t));
                    return s
                }
            }, e.prototype.on = function(e, t) {
                var n;
                return null == (n = this.bindings)[e] && (n[e] = []), this.bindings[e].push(t)
            }, e
        }(), F = window.XMLHttpRequest, q = window.XDomainRequest, W = window.WebSocket, E = function(e, t) {
            var n, i;
            for (n in i = [], t.prototype) try {
                i.push(null == e[n] && "function" != typeof t[n] ? "function" == typeof Object.defineProperty ? Object.defineProperty(e, n, {
                    get: function() {
                        return t.prototype[n]
                    },
                    configurable: !0,
                    enumerable: !0
                }) : e[n] = t.prototype[n] : void 0)
            } catch (e) {
                e
            }
            return i
        }, k = [], c.ignore = function() {
            var e, t, n;
            return t = arguments[0], e = 2 <= arguments.length ? V.call(arguments, 1) : [], k.unshift("ignore"), n = t.apply(null, e), k.shift(), n
        }, c.track = function() {
            var e, t, n;
            return t = arguments[0], e = 2 <= arguments.length ? V.call(arguments, 1) : [], k.unshift("track"), n = t.apply(null, e), k.shift(), n
        }, P = function(e) {
            var t;
            if (null == e && (e = "GET"), "track" === k[0]) return "force";
            if (!k.length && D.ajax) {
                if ("socket" === e && D.ajax.trackWebSockets) return !0;
                if (t = e.toUpperCase(), G.call(D.ajax.trackMethods, t) >= 0) return !0
            }
            return !1
        }, u = function(e) {
            function t() {
                var e, n = this;
                t.__super__.constructor.apply(this, arguments), e = function(e) {
                    var t;
                    return t = e.open, e.open = function(i, r) {
                        return P(i) && n.trigger("request", {
                            type: i,
                            url: r,
                            request: e
                        }), t.apply(e, arguments)
                    }
                }, window.XMLHttpRequest = function(t) {
                    var n;
                    return n = new F(t), e(n), n
                };
                try {
                    E(window.XMLHttpRequest, F)
                } catch (e) {}
                if (null != q) {
                    window.XDomainRequest = function() {
                        var t;
                        return t = new q, e(t), t
                    };
                    try {
                        E(window.XDomainRequest, q)
                    } catch (e) {}
                }
                if (null != W && D.ajax.trackWebSockets) {
                    window.WebSocket = function(e, t) {
                        var i;
                        return i = null != t ? new W(e, t) : new W(e), P("socket") && n.trigger("request", {
                            type: "socket",
                            url: e,
                            protocols: t,
                            request: i
                        }), i
                    };
                    try {
                        E(window.WebSocket, W)
                    } catch (e) {}
                }
            }
            return Q(t, a), t
        }(), Y = null, j = function(e) {
            var t, n, i, r;
            for (n = 0, i = (r = D.ajax.ignoreURLs).length; i > n; n++)
                if ("string" == typeof(t = r[n])) {
                    if (-1 !== e.indexOf(t)) return !0
                } else if (t.test(e)) return !0;
            return !1
        }, (T = function() {
            return null == Y && (Y = new u), Y
        })().on("request", function(t) {
            var n, i, r, o, s;
            return o = t.type, r = t.request, s = t.url, j(s) ? void 0 : c.running || !1 === D.restartOnRequestAfter && "force" !== P(o) ? void 0 : (i = arguments, "boolean" == typeof(n = D.restartOnRequestAfter || 0) && (n = 0), setTimeout(function() {
                var t, n, s, a, l;
                if ("socket" === o ? r.readyState < 2 : 0 < (s = r.readyState) && 4 > s) {
                    for (c.restart(), l = [], t = 0, n = (a = c.sources).length; n > t; t++) {
                        if ((R = a[t]) instanceof e) {
                            R.watch.apply(R, i);
                            break
                        }
                        l.push(void 0)
                    }
                    return l
                }
            }, n))
        }), e = function() {
            function e() {
                var e = this;
                this.elements = [], T().on("request", function() {
                    return e.watch.apply(e, arguments)
                })
            }
            return e.prototype.watch = function(e) {
                var t, n, i, r;
                return i = e.type, t = e.request, r = e.url, j(r) ? void 0 : (n = "socket" === i ? new d(t) : new p(t), this.elements.push(n))
            }, e
        }(), p = function() {
            return function(e) {
                var t, n, i, r, o, s = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (e.addEventListener("progress", function(e) {
                            return s.progress = e.lengthComputable ? 100 * e.loaded / e.total : s.progress + (100 - s.progress) / 2
                        }, !1), n = 0, i = (o = ["load", "abort", "timeout", "error"]).length; i > n; n++) t = o[n], e.addEventListener(t, function() {
                        return s.progress = 100
                    }, !1);
                else r = e.onreadystatechange, e.onreadystatechange = function() {
                    var t;
                    return 0 === (t = e.readyState) || 4 === t ? s.progress = 100 : 3 === e.readyState && (s.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
                }
            }
        }(), d = function() {
            return function(e) {
                var t, n, i, r, o = this;
                for (this.progress = 0, n = 0, i = (r = ["error", "open"]).length; i > n; n++) t = r[n], e.addEventListener(t, function() {
                    return o.progress = 100
                }, !1)
            }
        }(), i = function() {
            return function(e) {
                var t, n, i, o;
                for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), n = 0, i = (o = e.selectors).length; i > n; n++) t = o[n], this.elements.push(new r(t))
            }
        }(), r = function() {
            function e(e) {
                this.selector = e, this.progress = 0, this.check()
            }
            return e.prototype.check = function() {
                var e = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return e.check()
                }, D.elements.checkInterval)
            }, e.prototype.done = function() {
                return this.progress = 100
            }, e
        }(), n = function() {
            function e() {
                var e, t, n = this;
                this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function() {
                    return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
                }
            }
            return e.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, e
        }(), o = function() {
            return function() {
                var e, t, n, i, r, o = this;
                this.progress = 0, e = 0, r = [], i = 0, n = A(), t = setInterval(function() {
                    var s;
                    return s = A() - n - 50, n = A(), r.push(s), r.length > D.eventLag.sampleCount && r.shift(), e = m(r), ++i >= D.eventLag.minSamples && e < D.eventLag.lagThreshold ? (o.progress = 100, clearInterval(t)) : o.progress = 3 / (e + 3) * 100
                }, 50)
            }
        }(), h = function() {
            function e(e) {
                this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = N(this.source, "progress"))
            }
            return e.prototype.tick = function(e, t) {
                var n;
                return null == t && (t = N(this.source, "progress")), t >= 100 && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), n = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += n * this.rate * e, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, e
        }(), H = null, L = null, v = null, M = null, g = null, y = null, c.running = !1, S = function() {
            return D.restartOnPushState ? c.restart() : void 0
        }, null != window.history.pushState && (B = window.history.pushState, window.history.pushState = function() {
            return S(), B.apply(window.history, arguments)
        }), null != window.history.replaceState && (K = window.history.replaceState, window.history.replaceState = function() {
            return S(), K.apply(window.history, arguments)
        }), f = {
            ajax: e,
            elements: i,
            document: n,
            eventLag: o
        }, (C = function() {
            var e, n, i, r, o, s, a, l;
            for (c.sources = H = [], n = 0, r = (s = ["ajax", "elements", "document", "eventLag"]).length; r > n; n++) !1 !== D[e = s[n]] && H.push(new f[e](D[e]));
            for (i = 0, o = (l = null != (a = D.extraSources) ? a : []).length; o > i; i++) R = l[i], H.push(new R(D));
            return c.bar = v = new t, L = [], M = new h
        })(), c.stop = function() {
            return c.trigger("stop"), c.running = !1, v.destroy(), y = !0, null != g && ("function" == typeof b && b(g), g = null), C()
        }, c.restart = function() {
            return c.trigger("restart"), c.stop(), c.start()
        }, c.go = function() {
            var e;
            return c.running = !0, v.render(), e = A(), y = !1, g = I(function(t, n) {
                var i, r, o, s, a, l, u, f, d, p, g, m, b, w, _;
                for (100 - v.progress, r = p = 0, o = !0, l = g = 0, b = H.length; b > g; l = ++g)
                    for (R = H[l], d = null != L[l] ? L[l] : L[l] = [], u = m = 0, w = (a = null != (_ = R.elements) ? _ : [R]).length; w > m; u = ++m) s = a[u], o &= (f = null != d[u] ? d[u] : d[u] = new h(s)).done, f.done || (r++, p += f.tick(t));
                return i = p / r, v.update(M.tick(t, i)), v.done() || o || y ? (v.update(100), c.trigger("done"), setTimeout(function() {
                    return v.finish(), c.running = !1, c.trigger("hide")
                }, Math.max(D.ghostTime, Math.max(D.minTime - (A() - e), 0)))) : n()
            })
        }, c.start = function(e) {
            _(D, e), c.running = !0;
            try {
                v.render()
            } catch (e) {
                l = e
            }
            return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function() {
            return c
        }) : "object" == typeof exports ? module.exports = c : D.startOnPageLoad && c.start()
    }.call(this),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.Waves = t.call(e), e.Waves
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof global ? global : this, function() {
        "use strict";

        function e(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function t(t) {
            var n = l.call(t);
            return "[object String]" === n ? a(t) : e(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && t.hasOwnProperty("length") ? t : function(t) {
                return e(t) && t.nodeType > 0
            }(t) ? [t] : []
        }

        function n(e) {
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = e && e.ownerDocument;
            return t = r.documentElement, void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()), n = function(e) {
                return function(e) {
                    return null !== e && e === e.window
                }(e) ? e : 9 === e.nodeType && e.defaultView
            }(r), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }
        }

        function i(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }

        function r(e, t, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var r = n.getAttribute("data-x"),
                    o = n.getAttribute("data-y"),
                    s = n.getAttribute("data-scale"),
                    a = n.getAttribute("data-translate"),
                    l = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                l < 0 && (l = 0), "mousemove" === e.type && (l = 150);
                var c = "mousemove" === e.type ? 2500 : u.duration;
                setTimeout(function() {
                    var e = {
                        top: o + "px",
                        left: r + "px",
                        opacity: "0",
                        "-webkit-transition-duration": c + "ms",
                        "-moz-transition-duration": c + "ms",
                        "-o-transition-duration": c + "ms",
                        "transition-duration": c + "ms",
                        "-webkit-transform": s + " " + a,
                        "-moz-transform": s + " " + a,
                        "-ms-transform": s + " " + a,
                        "-o-transform": s + " " + a,
                        transform: s + " " + a
                    };
                    n.setAttribute("style", i(e)), setTimeout(function() {
                        try {
                            t.removeChild(n)
                        } catch (e) {
                            return !1
                        }
                    }, c)
                }, l)
            }
        }

        function o(e) {
            var t = function(e) {
                if (!1 === h.allowEvent(e)) return null;
                for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                    if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                        t = n;
                        break
                    }
                    n = n.parentElement
                }
                return t
            }(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (h.registerEvent(e), "touchstart" === e.type && u.delay) {
                    var n = !1,
                        i = setTimeout(function() {
                            i = null, u.show(e, t)
                        }, u.delay),
                        r = function(r) {
                            i && (clearTimeout(i), i = null, u.show(e, t)), n || (n = !0, u.hide(r, t)), s()
                        },
                        o = function(e) {
                            i && (clearTimeout(i), i = null), r(e), s()
                        };
                    t.addEventListener("touchmove", o, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", r, !1);
                    var s = function() {
                        t.removeEventListener("touchmove", o), t.removeEventListener("touchend", r), t.removeEventListener("touchcancel", r)
                    }
                } else u.show(e, t), c && (t.addEventListener("touchend", u.hide, !1), t.addEventListener("touchcancel", u.hide, !1)), t.addEventListener("mouseup", u.hide, !1), t.addEventListener("mouseleave", u.hide, !1)
            }
        }
        var s = s || {},
            a = document.querySelectorAll.bind(document),
            l = Object.prototype.toString,
            c = "ontouchstart" in window,
            u = {
                duration: 750,
                delay: 200,
                show: function(e, t, r) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var o = document.createElement("div");
                    o.className = "waves-ripple waves-rippling", t.appendChild(o);
                    var s = n(t),
                        a = 0,
                        l = 0;
                    "touches" in e && e.touches.length ? (a = e.touches[0].pageY - s.top, l = e.touches[0].pageX - s.left) : (a = e.pageY - s.top, l = e.pageX - s.left), l = l >= 0 ? l : 0, a = a >= 0 ? a : 0;
                    var c = "scale(" + t.clientWidth / 100 * 3 + ")",
                        f = "translate(0,0)";
                    r && (f = "translate(" + r.x + "px, " + r.y + "px)"), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-x", l), o.setAttribute("data-y", a), o.setAttribute("data-scale", c), o.setAttribute("data-translate", f);
                    var h = {
                        top: a + "px",
                        left: l + "px"
                    };
                    o.classList.add("waves-notransition"), o.setAttribute("style", i(h)), o.classList.remove("waves-notransition"), h["-webkit-transform"] = c + " " + f, h["-moz-transform"] = c + " " + f, h["-ms-transform"] = c + " " + f, h["-o-transform"] = c + " " + f, h.transform = c + " " + f, h.opacity = "1";
                    var d = "mousemove" === e.type ? 2500 : u.duration;
                    h["-webkit-transition-duration"] = d + "ms", h["-moz-transition-duration"] = d + "ms", h["-o-transition-duration"] = d + "ms", h["transition-duration"] = d + "ms", o.setAttribute("style", i(h))
                },
                hide: function(e, t) {
                    for (var n = (t = t || this).getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++) r(e, t, n[i]);
                    c && (t.removeEventListener("touchend", u.hide), t.removeEventListener("touchcancel", u.hide)), t.removeEventListener("mouseup", u.hide), t.removeEventListener("mouseleave", u.hide)
                }
            },
            f = {
                input: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        n.className = e.className + " waves-input-wrapper", e.className = "waves-button-input", t.replaceChild(n, e), n.appendChild(e);
                        var i = window.getComputedStyle(e, null),
                            r = i.color,
                            o = i.backgroundColor;
                        n.setAttribute("style", "color:" + r + ";background:" + o), e.setAttribute("style", "background-color:rgba(0,0,0,0);")
                    }
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        t.replaceChild(n, e), n.appendChild(e)
                    }
                }
            },
            h = {
                touches: 0,
                allowEvent: function(e) {
                    var t = !0;
                    return /^(mousedown|mousemove)$/.test(e.type) && h.touches && (t = !1), t
                },
                registerEvent: function(e) {
                    var t = e.type;
                    "touchstart" === t ? h.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                        h.touches && (h.touches -= 1)
                    }, 500)
                }
            };
        return s.init = function(e) {
            var t = document.body;
            "duration" in (e = e || {}) && (u.duration = e.duration), "delay" in e && (u.delay = e.delay), c && (t.addEventListener("touchstart", o, !1), t.addEventListener("touchcancel", h.registerEvent, !1), t.addEventListener("touchend", h.registerEvent, !1)), t.addEventListener("mousedown", o, !1)
        }, s.attach = function(e, n) {
            e = t(e), "[object Array]" === l.call(n) && (n = n.join(" ")), n = n ? " " + n : "";
            for (var i, r, o = 0, s = e.length; o < s; o++) r = (i = e[o]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(r) && (f[r](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + n)
        }, s.ripple = function(e, i) {
            var r = (e = t(e)).length;
            if ((i = i || {}).wait = i.wait || 0, i.position = i.position || null, r)
                for (var o, s, a, l = {}, c = 0, f = {
                        type: "mousedown",
                        button: 1
                    }; c < r; c++)
                    if (o = e[c], s = i.position || {
                            x: o.clientWidth / 2,
                            y: o.clientHeight / 2
                        }, a = n(o), l.x = a.left + s.x, l.y = a.top + s.y, f.pageX = l.x, f.pageY = l.y, u.show(f, o), i.wait >= 0 && null !== i.wait) {
                        setTimeout(function(e, t) {
                            return function() {
                                u.hide(e, t)
                            }
                        }({
                            type: "mouseup",
                            button: 1
                        }, o), i.wait)
                    }
        }, s.calm = function(e) {
            for (var n = {
                    type: "mouseup",
                    button: 1
                }, i = 0, r = (e = t(e)).length; i < r; i++) u.hide(n, e[i])
        }, s.displayEffect = function(e) {
            s.init(e)
        }, s
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18next = t()
    }(this, function() {
        "use strict";

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(t)
        }

        function t(n) {
            return (t = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
                return e(t)
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
            })(n)
        }

        function n(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))), r.forEach(function(t) {
                    n(e, t, i[t])
                })
            }
            return e
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function s(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e
        }

        function a(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function l(e, n) {
            return !n || "object" !== t(n) && "function" != typeof n ? a(e) : n
        }

        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function u(e, t) {
            return (u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }
        var h = {
                type: "logger",
                log: function(e) {
                    this.output("log", e)
                },
                warn: function(e) {
                    this.output("warn", e)
                },
                error: function(e) {
                    this.output("error", e)
                },
                output: function(e, t) {
                    var n;
                    console && console[e] && (n = console)[e].apply(n, function(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }(t))
                }
            },
            d = new(function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.init(t, n)
                }
                return s(e, [{
                    key: "init",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.prefix = t.prefix || "i18next:", this.logger = e || h, this.options = t, this.debug = t.debug
                    }
                }, {
                    key: "setDebug",
                    value: function(e) {
                        this.debug = e
                    }
                }, {
                    key: "log",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "log", "", !0)
                    }
                }, {
                    key: "warn",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "", !0)
                    }
                }, {
                    key: "error",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "error", "")
                    }
                }, {
                    key: "deprecate",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                    }
                }, {
                    key: "forward",
                    value: function(e, t, n, i) {
                        return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                    }
                }, {
                    key: "create",
                    value: function(t) {
                        return new e(this.logger, i({}, {
                            prefix: "".concat(this.prefix, ":").concat(t, ":")
                        }, this.options))
                    }
                }]), e
            }()),
            p = function() {
                function e() {
                    r(this, e), this.observers = {}
                }
                return s(e, [{
                    key: "on",
                    value: function(e, t) {
                        var n = this;
                        return e.split(" ").forEach(function(e) {
                            n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                        }), this
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        var n = this;
                        this.observers[e] && this.observers[e].forEach(function() {
                            if (t) {
                                var i = n.observers[e].indexOf(t);
                                i > -1 && n.observers[e].splice(i, 1)
                            } else delete n.observers[e]
                        })
                    }
                }, {
                    key: "emit",
                    value: function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        this.observers[e] && [].concat(this.observers[e]).forEach(function(e) {
                            e.apply(void 0, n)
                        }), this.observers["*"] && [].concat(this.observers["*"]).forEach(function(t) {
                            t.apply(t, [e].concat(n))
                        })
                    }
                }]), e
            }();

        function g() {
            var e, t, n = new Promise(function(n, i) {
                e = n, t = i
            });
            return n.resolve = e, n.reject = t, n
        }

        function m(e) {
            return null == e ? "" : "" + e
        }

        function v(e, t, n) {
            function i(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }

            function r() {
                return !e || "string" == typeof e
            }
            for (var o = "string" != typeof t ? [].concat(t) : t.split("."); o.length > 1;) {
                if (r()) return {};
                var s = i(o.shift());
                !e[s] && n && (e[s] = new n), e = e[s]
            }
            return r() ? {} : {
                obj: e,
                k: i(o.shift())
            }
        }

        function y(e, t, n) {
            var i = v(e, t, Object);
            i.obj[i.k] = n
        }

        function b(e, t) {
            var n = v(e, t),
                i = n.obj,
                r = n.k;
            if (i) return i[r]
        }

        function w(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var _ = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };

        function E(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function(e) {
                return _[e]
            }) : e
        }
        var x = function(e) {
                function t(e) {
                    var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    return r(this, t), n = l(this, c(t).call(this)), p.call(a(n)), n.data = e || {}, n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n
                }
                return f(t, p), s(t, [{
                    key: "addNamespaces",
                    value: function(e) {
                        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                    }
                }, {
                    key: "removeNamespaces",
                    value: function(e) {
                        var t = this.options.ns.indexOf(e);
                        t > -1 && this.options.ns.splice(t, 1)
                    }
                }, {
                    key: "getResource",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            r = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                            o = [e, t];
                        return n && "string" != typeof n && (o = o.concat(n)), n && "string" == typeof n && (o = o.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (o = e.split(".")), b(this.data, o)
                    }
                }, {
                    key: "addResource",
                    value: function(e, t, n, i) {
                        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                silent: !1
                            },
                            o = this.options.keySeparator;
                        void 0 === o && (o = ".");
                        var s = [e, t];
                        n && (s = s.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (i = t, t = (s = e.split("."))[1]), this.addNamespaces(t), y(this.data, s, i), r.silent || this.emit("added", e, t, n, i)
                    }
                }, {
                    key: "addResources",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            silent: !1
                        };
                        for (var r in n) "string" != typeof n[r] && "[object Array]" !== Object.prototype.toString.apply(n[r]) || this.addResource(e, t, r, n[r], {
                            silent: !0
                        });
                        i.silent || this.emit("added", e, t, n)
                    }
                }, {
                    key: "addResourceBundle",
                    value: function(e, t, n, r, o) {
                        var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                silent: !1
                            },
                            a = [e, t];
                        e.indexOf(".") > -1 && (r = n, n = t, t = (a = e.split("."))[1]), this.addNamespaces(t);
                        var l = b(this.data, a) || {};
                        r ? function e(t, n, i) {
                            for (var r in n) r in t ? "string" == typeof t[r] || t[r] instanceof String || "string" == typeof n[r] || n[r] instanceof String ? i && (t[r] = n[r]) : e(t[r], n[r], i) : t[r] = n[r];
                            return t
                        }(l, n, o) : l = i({}, l, n), y(this.data, a, l), s.silent || this.emit("added", e, t, n)
                    }
                }, {
                    key: "removeResourceBundle",
                    value: function(e, t) {
                        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                    }
                }, {
                    key: "hasResourceBundle",
                    value: function(e, t) {
                        return void 0 !== this.getResource(e, t)
                    }
                }, {
                    key: "getResourceBundle",
                    value: function(e, t) {
                        return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? i({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                    }
                }, {
                    key: "getDataByLanguage",
                    value: function(e) {
                        return this.data[e]
                    }
                }, {
                    key: "toJSON",
                    value: function() {
                        return this.data
                    }
                }]), t
            }(),
            T = {
                processors: {},
                addPostProcessor: function(e) {
                    this.processors[e.name] = e
                },
                handle: function(e, t, n, i, r) {
                    var o = this;
                    return e.forEach(function(e) {
                        o.processors[e] && (t = o.processors[e].process(t, n, i, r))
                    }), t
                }
            },
            S = function(e) {
                function n(e) {
                    var t, i, o, s, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return r(this, n), t = l(this, c(n).call(this)), p.call(a(t)), i = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat"], o = e, s = a(t), i.forEach(function(e) {
                        o[e] && (s[e] = o[e])
                    }), t.options = u, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = d.create("translator"), t
                }
                return f(n, p), s(n, [{
                    key: "changeLanguage",
                    value: function(e) {
                        e && (this.language = e)
                    }
                }, {
                    key: "exists",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                interpolation: {}
                            },
                            n = this.resolve(e, t);
                        return n && void 0 !== n.res
                    }
                }, {
                    key: "extractFromKey",
                    value: function(e, t) {
                        var n = t.nsSeparator || this.options.nsSeparator;
                        void 0 === n && (n = ":");
                        var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                            r = t.ns || this.options.defaultNS;
                        if (n && e.indexOf(n) > -1) {
                            var o = e.split(n);
                            (n !== i || n === i && this.options.ns.indexOf(o[0]) > -1) && (r = o.shift()), e = o.join(i)
                        }
                        return "string" == typeof r && (r = [r]), {
                            key: e,
                            namespaces: r
                        }
                    }
                }, {
                    key: "translate",
                    value: function(e, n) {
                        var r = this;
                        if ("object" !== t(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == e) return "";
                        Array.isArray(e) || (e = [String(e)]);
                        var o = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                            s = this.extractFromKey(e[e.length - 1], n),
                            a = s.key,
                            l = s.namespaces,
                            c = l[l.length - 1],
                            u = n.lng || this.language,
                            f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                        if (u && "cimode" === u.toLowerCase()) {
                            if (f) {
                                var h = n.nsSeparator || this.options.nsSeparator;
                                return c + h + a
                            }
                            return a
                        }
                        var d = this.resolve(e, n),
                            p = d && d.res,
                            g = d && d.usedKey || a,
                            m = d && d.exactUsedKey || a,
                            v = Object.prototype.toString.apply(p),
                            y = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                            b = !this.i18nFormat || this.i18nFormat.handleAsObject;
                        if (b && p && "string" != typeof p && "boolean" != typeof p && "number" != typeof p && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(v) < 0 && ("string" != typeof y || "[object Array]" !== v)) {
                            if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, p, n) : "key '".concat(a, " (").concat(this.language, ")' returned an object instead of string.");
                            if (o) {
                                var w = "[object Array]" === v,
                                    _ = w ? [] : {},
                                    E = w ? m : g;
                                for (var x in p)
                                    if (Object.prototype.hasOwnProperty.call(p, x)) {
                                        var T = "".concat(E).concat(o).concat(x);
                                        _[x] = this.translate(T, i({}, n, {
                                            joinArrays: !1,
                                            ns: l
                                        })), _[x] === T && (_[x] = p[x])
                                    }
                                p = _
                            }
                        } else if (b && "string" == typeof y && "[object Array]" === v)(p = p.join(y)) && (p = this.extendTranslation(p, e, n));
                        else {
                            var S = !1,
                                k = !1;
                            if (!this.isValidLookup(p) && void 0 !== n.defaultValue) {
                                if (S = !0, void 0 !== n.count) {
                                    var C = this.pluralResolver.getSuffix(u, n.count);
                                    p = n["defaultValue".concat(C)]
                                }
                                p || (p = n.defaultValue)
                            }
                            this.isValidLookup(p) || (k = !0, p = a);
                            var A = n.defaultValue && n.defaultValue !== p && this.options.updateMissing;
                            if (k || S || A) {
                                this.logger.log(A ? "updateKey" : "missingKey", u, c, a, A ? n.defaultValue : p);
                                var D = [],
                                    O = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                if ("fallback" === this.options.saveMissingTo && O && O[0])
                                    for (var N = 0; N < O.length; N++) D.push(O[N]);
                                else "all" === this.options.saveMissingTo ? D = this.languageUtils.toResolveHierarchy(n.lng || this.language) : D.push(n.lng || this.language);
                                var I = function(e, t) {
                                    r.options.missingKeyHandler ? r.options.missingKeyHandler(e, c, t, A ? n.defaultValue : p, A, n) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, c, t, A ? n.defaultValue : p, A, n), r.emit("missingKey", e, c, t, p)
                                };
                                if (this.options.saveMissing) {
                                    var L = void 0 !== n.count && "string" != typeof n.count;
                                    this.options.saveMissingPlurals && L ? D.forEach(function(e) {
                                        r.pluralResolver.getPluralFormsOfKey(e, a).forEach(function(t) {
                                            return I([e], t)
                                        })
                                    }) : I(D, a)
                                }
                            }
                            p = this.extendTranslation(p, e, n, d), k && p === a && this.options.appendNamespaceToMissingKey && (p = "".concat(c, ":").concat(a)), k && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(p))
                        }
                        return p
                    }
                }, {
                    key: "extendTranslation",
                    value: function(e, t, n, r) {
                        var o = this;
                        if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
                            resolved: r
                        });
                        else if (!n.skipInterpolation) {
                            n.interpolation && this.interpolator.init(i({}, n, {
                                interpolation: i({}, this.options.interpolation, n.interpolation)
                            }));
                            var s = n.replace && "string" != typeof n.replace ? n.replace : n;
                            this.options.interpolation.defaultVariables && (s = i({}, this.options.interpolation.defaultVariables, s)), e = this.interpolator.interpolate(e, s, n.lng || this.language, n), !1 !== n.nest && (e = this.interpolator.nest(e, function() {
                                return o.translate.apply(o, arguments)
                            }, n)), n.interpolation && this.interpolator.reset()
                        }
                        var a = n.postProcess || this.options.postProcess,
                            l = "string" == typeof a ? [a] : a;
                        return null != e && l && l.length && !1 !== n.applyPostProcessor && (e = T.handle(l, e, t, n, this)), e
                    }
                }, {
                    key: "resolve",
                    value: function(e) {
                        var t, n, i, r, o, s = this,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return "string" == typeof e && (e = [e]), e.forEach(function(e) {
                            if (!s.isValidLookup(t)) {
                                var l = s.extractFromKey(e, a),
                                    c = l.key;
                                n = c;
                                var u = l.namespaces;
                                s.options.fallbackNS && (u = u.concat(s.options.fallbackNS));
                                var f = void 0 !== a.count && "string" != typeof a.count,
                                    h = void 0 !== a.context && "string" == typeof a.context && "" !== a.context,
                                    d = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
                                u.forEach(function(e) {
                                    s.isValidLookup(t) || (o = e, d.forEach(function(n) {
                                        if (!s.isValidLookup(t)) {
                                            r = n;
                                            var o, l, u = c,
                                                d = [u];
                                            for (s.i18nFormat && s.i18nFormat.addLookupKeys ? s.i18nFormat.addLookupKeys(d, c, n, e, a) : (f && (o = s.pluralResolver.getSuffix(n, a.count)), f && h && d.push(u + o), h && d.push(u += "".concat(s.options.contextSeparator).concat(a.context)), f && d.push(u += o)); l = d.pop();) s.isValidLookup(t) || (i = l, t = s.getResource(n, e, l, a))
                                        }
                                    }))
                                })
                            }
                        }), {
                            res: t,
                            usedKey: n,
                            exactUsedKey: i,
                            usedLng: r,
                            usedNS: o
                        }
                    }
                }, {
                    key: "isValidLookup",
                    value: function(e) {
                        return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                    }
                }, {
                    key: "getResource",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i)
                    }
                }]), n
            }();

        function k(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var C = function() {
                function e(t) {
                    r(this, e), this.options = t, this.whitelist = this.options.whitelist || !1, this.logger = d.create("languageUtils")
                }
                return s(e, [{
                    key: "getScriptPartFromCode",
                    value: function(e) {
                        if (!e || e.indexOf("-") < 0) return null;
                        var t = e.split("-");
                        return 2 === t.length ? null : (t.pop(), this.formatLanguageCode(t.join("-")))
                    }
                }, {
                    key: "getLanguagePartFromCode",
                    value: function(e) {
                        if (!e || e.indexOf("-") < 0) return e;
                        var t = e.split("-");
                        return this.formatLanguageCode(t[0])
                    }
                }, {
                    key: "formatLanguageCode",
                    value: function(e) {
                        if ("string" == typeof e && e.indexOf("-") > -1) {
                            var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                n = e.split("-");
                            return this.options.lowerCaseLng ? n = n.map(function(e) {
                                return e.toLowerCase()
                            }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = k(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = k(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = k(n[2].toLowerCase()))), n.join("-")
                        }
                        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                    }
                }, {
                    key: "isWhitelisted",
                    value: function(e) {
                        return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1
                    }
                }, {
                    key: "getFallbackCodes",
                    value: function(e, t) {
                        if (!e) return [];
                        if ("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                        if (!t) return e.default || [];
                        var n = e[t];
                        return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e.default), n || []
                    }
                }, {
                    key: "toResolveHierarchy",
                    value: function(e, t) {
                        var n = this,
                            i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                            r = [],
                            o = function(e) {
                                e && (n.isWhitelisted(e) ? r.push(e) : n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))
                            };
                        return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" == typeof e && o(this.formatLanguageCode(e)), i.forEach(function(e) {
                            r.indexOf(e) < 0 && o(n.formatLanguageCode(e))
                        }), r
                    }
                }]), e
            }(),
            A = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1
            }, {
                lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                nr: [1, 2],
                fc: 2
            }, {
                lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                nr: [1],
                fc: 3
            }, {
                lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4
            }, {
                lngs: ["ar"],
                nr: [0, 1, 2, 3, 11, 100],
                fc: 5
            }, {
                lngs: ["cs", "sk"],
                nr: [1, 2, 5],
                fc: 6
            }, {
                lngs: ["csb", "pl"],
                nr: [1, 2, 5],
                fc: 7
            }, {
                lngs: ["cy"],
                nr: [1, 2, 3, 8],
                fc: 8
            }, {
                lngs: ["fr"],
                nr: [1, 2],
                fc: 9
            }, {
                lngs: ["ga"],
                nr: [1, 2, 3, 7, 11],
                fc: 10
            }, {
                lngs: ["gd"],
                nr: [1, 2, 3, 20],
                fc: 11
            }, {
                lngs: ["is"],
                nr: [1, 2],
                fc: 12
            }, {
                lngs: ["jv"],
                nr: [0, 1],
                fc: 13
            }, {
                lngs: ["kw"],
                nr: [1, 2, 3, 4],
                fc: 14
            }, {
                lngs: ["lt"],
                nr: [1, 2, 10],
                fc: 15
            }, {
                lngs: ["lv"],
                nr: [1, 2, 0],
                fc: 16
            }, {
                lngs: ["mk"],
                nr: [1, 2],
                fc: 17
            }, {
                lngs: ["mnk"],
                nr: [0, 1, 2],
                fc: 18
            }, {
                lngs: ["mt"],
                nr: [1, 2, 11, 20],
                fc: 19
            }, {
                lngs: ["or"],
                nr: [2, 1],
                fc: 2
            }, {
                lngs: ["ro"],
                nr: [1, 2, 20],
                fc: 20
            }, {
                lngs: ["sl"],
                nr: [5, 1, 2, 3],
                fc: 21
            }, {
                lngs: ["he"],
                nr: [1, 2, 20, 21],
                fc: 22
            }],
            D = {
                1: function(e) {
                    return Number(e > 1)
                },
                2: function(e) {
                    return Number(1 != e)
                },
                3: function(e) {
                    return 0
                },
                4: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                5: function(e) {
                    return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                },
                6: function(e) {
                    return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                },
                7: function(e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                8: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                },
                9: function(e) {
                    return Number(e >= 2)
                },
                10: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                },
                11: function(e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                },
                12: function(e) {
                    return Number(e % 10 != 1 || e % 100 == 11)
                },
                13: function(e) {
                    return Number(0 !== e)
                },
                14: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                },
                15: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                16: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                },
                17: function(e) {
                    return Number(1 == e || e % 10 == 1 ? 0 : 1)
                },
                18: function(e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                },
                19: function(e) {
                    return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                },
                20: function(e) {
                    return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                },
                21: function(e) {
                    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                },
                22: function(e) {
                    return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                }
            },
            O = function() {
                function e(t) {
                    var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.languageUtils = t, this.options = i, this.logger = d.create("pluralResolver"), this.rules = (n = {}, A.forEach(function(e) {
                        e.lngs.forEach(function(t) {
                            n[t] = {
                                numbers: e.nr,
                                plurals: D[e.fc]
                            }
                        })
                    }), n)
                }
                return s(e, [{
                    key: "addRule",
                    value: function(e, t) {
                        this.rules[e] = t
                    }
                }, {
                    key: "getRule",
                    value: function(e) {
                        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                    }
                }, {
                    key: "needsPlural",
                    value: function(e) {
                        var t = this.getRule(e);
                        return t && t.numbers.length > 1
                    }
                }, {
                    key: "getPluralFormsOfKey",
                    value: function(e, t) {
                        var n = this,
                            i = [],
                            r = this.getRule(e);
                        return r ? (r.numbers.forEach(function(r) {
                            var o = n.getSuffix(e, r);
                            i.push("".concat(t).concat(o))
                        }), i) : i
                    }
                }, {
                    key: "getSuffix",
                    value: function(e, t) {
                        var n = this,
                            i = this.getRule(e);
                        if (i) {
                            var r = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t)),
                                o = i.numbers[r];
                            this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                            var s = function() {
                                return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_".concat(o.toString()) : s() : "v2" === this.options.compatibilityJSON ? s() : this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? s() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                        }
                        return this.logger.warn("no plural rule found for: ".concat(e)), ""
                    }
                }]), e
            }(),
            N = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    r(this, e), this.logger = d.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
                        return e
                    }, this.init(t)
                }
                return s(e, [{
                    key: "init",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.interpolation || (e.interpolation = {
                            escapeValue: !0
                        });
                        var t = e.interpolation;
                        this.escape = void 0 !== t.escape ? t.escape : E, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? w(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? w(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? w(t.nestingPrefix) : t.nestingPrefixEscaped || w("$t("), this.nestingSuffix = t.nestingSuffix ? w(t.nestingSuffix) : t.nestingSuffixEscaped || w(")"), this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.resetRegExp()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.options && this.init(this.options)
                    }
                }, {
                    key: "resetRegExp",
                    value: function() {
                        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                        this.regexp = new RegExp(e, "g");
                        var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                        this.regexpUnescape = new RegExp(t, "g");
                        var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                        this.nestingRegexp = new RegExp(n, "g")
                    }
                }, {
                    key: "interpolate",
                    value: function(e, t, n, r) {
                        var o, s, a, l = this,
                            c = i({}, this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, t);

                        function u(e) {
                            return e.replace(/\$/g, "$$$$")
                        }
                        var f = function(e) {
                            if (e.indexOf(l.formatSeparator) < 0) return b(c, e);
                            var t = e.split(l.formatSeparator),
                                i = t.shift().trim(),
                                r = t.join(l.formatSeparator).trim();
                            return l.format(b(c, i), r, n)
                        };
                        this.resetRegExp();
                        var h = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler;
                        for (a = 0; o = this.regexpUnescape.exec(e);) {
                            if (void 0 === (s = f(o[1].trim())))
                                if ("function" == typeof h) {
                                    var d = h(e, o, r);
                                    s = "string" == typeof d ? d : ""
                                } else this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), s = "";
                            else "string" == typeof s || this.useRawValueToEscape || (s = m(s));
                            if (e = e.replace(o[0], u(s)), this.regexpUnescape.lastIndex = 0, ++a >= this.maxReplaces) break
                        }
                        for (a = 0; o = this.regexp.exec(e);) {
                            if (void 0 === (s = f(o[1].trim())))
                                if ("function" == typeof h) {
                                    var p = h(e, o, r);
                                    s = "string" == typeof p ? p : ""
                                } else this.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), s = "";
                            else "string" == typeof s || this.useRawValueToEscape || (s = m(s));
                            if (s = this.escapeValue ? u(this.escape(s)) : u(s), e = e.replace(o[0], s), this.regexp.lastIndex = 0, ++a >= this.maxReplaces) break
                        }
                        return e
                    }
                }, {
                    key: "nest",
                    value: function(e, t) {
                        var n, r, o = i({}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});

                        function s(e, t) {
                            if (e.indexOf(",") < 0) return e;
                            var n = e.split(",");
                            e = n.shift();
                            var r = n.join(",");
                            r = (r = this.interpolate(r, o)).replace(/'/g, '"');
                            try {
                                o = JSON.parse(r), t && (o = i({}, t, o))
                            } catch (t) {
                                this.logger.error("failed parsing options string in nesting for key ".concat(e), t)
                            }
                            return e
                        }
                        for (o.applyPostProcessor = !1; n = this.nestingRegexp.exec(e);) {
                            if ((r = t(s.call(this, n[1].trim(), o), o)) && n[0] === e && "string" != typeof r) return r;
                            "string" != typeof r && (r = m(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), r = ""), e = e.replace(n[0], r), this.regexp.lastIndex = 0
                        }
                        return e
                    }
                }]), e
            }();

        function I(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var L = function(e) {
            function t(e, n, i) {
                var o, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return r(this, t), o = l(this, c(t).call(this)), p.call(a(o)), o.backend = e, o.store = n, o.languageUtils = i.languageUtils, o.options = s, o.logger = d.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(i, s.backend, s), o
            }
            return f(t, p), s(t, [{
                key: "queueLoad",
                value: function(e, t, n, i) {
                    var r = this,
                        o = [],
                        s = [],
                        a = [],
                        l = [];
                    return e.forEach(function(e) {
                        var i = !0;
                        t.forEach(function(t) {
                            var a = "".concat(e, "|").concat(t);
                            !n.reload && r.store.hasResourceBundle(e, t) ? r.state[a] = 2 : r.state[a] < 0 || (1 === r.state[a] ? s.indexOf(a) < 0 && s.push(a) : (r.state[a] = 1, i = !1, s.indexOf(a) < 0 && s.push(a), o.indexOf(a) < 0 && o.push(a), l.indexOf(t) < 0 && l.push(t)))
                        }), i || a.push(e)
                    }), (o.length || s.length) && this.queue.push({
                        pending: s,
                        loaded: {},
                        errors: [],
                        callback: i
                    }), {
                        toLoad: o,
                        pending: s,
                        toLoadLanguages: a,
                        toLoadNamespaces: l
                    }
                }
            }, {
                key: "loaded",
                value: function(e, t, n) {
                    var i = I(e.split("|"), 2),
                        r = i[0],
                        o = i[1];
                    t && this.emit("failedLoading", r, o, t), n && this.store.addResourceBundle(r, o, n), this.state[e] = t ? -1 : 2;
                    var s = {};
                    this.queue.forEach(function(n) {
                        var i, a, l, c, u;
                        i = n.loaded, a = o, (c = (l = v(i, [r], Object)).obj)[u = l.k] = c[u] || [], c[u].push(a),
                            function(e, t) {
                                for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
                            }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach(function(e) {
                                s[e] || (s[e] = []), n.loaded[e].length && n.loaded[e].forEach(function(t) {
                                    s[e].indexOf(t) < 0 && s[e].push(t)
                                })
                            }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    }), this.emit("loaded", s), this.queue = this.queue.filter(function(e) {
                        return !e.done
                    })
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var i = this,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                        s = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.backend[n](e, t, function(a, l) {
                        a && l && r < 5 ? setTimeout(function() {
                            i.read.call(i, e, t, n, r + 1, 2 * o, s)
                        }, o) : s(a, l)
                    }) : s(null, {})
                }
            }, {
                key: "prepareLoading",
                value: function(e, t) {
                    var n = this,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                    var o = this.queueLoad(e, t, i, r);
                    if (!o.toLoad.length) return o.pending.length || r(), null;
                    o.toLoad.forEach(function(e) {
                        n.loadOne(e)
                    })
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
            }, {
                key: "reload",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = I(e.split("|"), 2),
                        r = i[0],
                        o = i[1];
                    this.read(r, o, "read", null, null, function(i, s) {
                        i && t.logger.warn("".concat(n, "loading namespace ").concat(o, " for language ").concat(r, " failed"), i), !i && s && t.logger.log("".concat(n, "loaded namespace ").concat(o, " for language ").concat(r), s), t.loaded(e, i, s)
                    })
                }
            }, {
                key: "saveMissing",
                value: function(e, t, n, r, o) {
                    var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.backend && this.backend.create && this.backend.create(e, t, n, r, null, i({}, s, {
                        isUpdate: o
                    })), e && e[0] && this.store.addResource(e[0], t, n, r)
                }
            }]), t
        }();

        function j(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e
        }

        function P() {}
        return new(function(e) {
            function n() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = arguments.length > 1 ? arguments[1] : void 0;
                if (r(this, n), e = l(this, c(n).call(this)), p.call(a(e)), e.options = j(t), e.services = {}, e.logger = d, e.modules = {
                        external: []
                    }, i && !e.isInitialized && !t.isClone) {
                    if (!e.options.initImmediate) return e.init(t, i), l(e, a(e));
                    setTimeout(function() {
                        e.init(t, i)
                    }, 0)
                }
                return e
            }
            return f(n, p), s(n, [{
                key: "init",
                value: function() {
                    var e = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 ? arguments[1] : void 0;

                    function o(e) {
                        return e ? "function" == typeof e ? new e : e : null
                    }
                    if ("function" == typeof n && (r = n, n = {}), this.options = i({}, {
                            debug: !1,
                            initImmediate: !0,
                            ns: ["translation"],
                            defaultNS: ["translation"],
                            fallbackLng: ["dev"],
                            fallbackNS: !1,
                            whitelist: !1,
                            nonExplicitWhitelist: !1,
                            load: "all",
                            preload: !1,
                            simplifyPluralSuffix: !0,
                            keySeparator: ".",
                            nsSeparator: ":",
                            pluralSeparator: "_",
                            contextSeparator: "_",
                            partialBundledLanguages: !1,
                            saveMissing: !1,
                            updateMissing: !1,
                            saveMissingTo: "fallback",
                            saveMissingPlurals: !0,
                            missingKeyHandler: !1,
                            missingInterpolationHandler: !1,
                            postProcess: !1,
                            returnNull: !0,
                            returnEmptyString: !0,
                            returnObjects: !1,
                            joinArrays: !1,
                            returnedObjectHandler: !1,
                            parseMissingKeyHandler: !1,
                            appendNamespaceToMissingKey: !1,
                            appendNamespaceToCIMode: !1,
                            overloadTranslationOptionHandler: function(e) {
                                var n = {};
                                if ("object" === t(e[1]) && (n = e[1]), "string" == typeof e[1] && (n.defaultValue = e[1]), "string" == typeof e[2] && (n.tDescription = e[2]), "object" === t(e[2]) || "object" === t(e[3])) {
                                    var i = e[3] || e[2];
                                    Object.keys(i).forEach(function(e) {
                                        n[e] = i[e]
                                    })
                                }
                                return n
                            },
                            interpolation: {
                                escapeValue: !0,
                                format: function(e, t, n) {
                                    return e
                                },
                                prefix: "{{",
                                suffix: "}}",
                                formatSeparator: ",",
                                unescapePrefix: "-",
                                nestingPrefix: "$t(",
                                nestingSuffix: ")",
                                maxReplaces: 1e3
                            }
                        }, this.options, j(n)), this.format = this.options.interpolation.format, r || (r = P), !this.options.isClone) {
                        this.modules.logger ? d.init(o(this.modules.logger), this.options) : d.init(null, this.options);
                        var s = new C(this.options);
                        this.store = new x(this.options.resources, this.options);
                        var a = this.services;
                        a.logger = d, a.resourceStore = this.store, a.languageUtils = s, a.pluralResolver = new O(s, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), a.interpolator = new N(this.options), a.backendConnector = new L(o(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", function(t) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            e.emit.apply(e, [t].concat(i))
                        }), this.modules.languageDetector && (a.languageDetector = o(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = o(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new S(this.services, this.options), this.translator.on("*", function(t) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            e.emit.apply(e, [t].concat(i))
                        }), this.modules.external.forEach(function(t) {
                            t.init && t.init(e)
                        })
                    }["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments)
                        }
                    });
                    var l = g(),
                        c = function() {
                            e.changeLanguage(e.options.lng, function(t, n) {
                                e.isInitialized = !0, e.logger.log("initialized", e.options), e.emit("initialized", e.options), l.resolve(n), r(t, n)
                            })
                        };
                    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l
                }
            }, {
                key: "loadResources",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P;
                    if (!this.options.resources || this.options.partialBundledLanguages) {
                        if (this.language && "cimode" === this.language.toLowerCase()) return t();
                        var n = [],
                            i = function(t) {
                                t && e.services.languageUtils.toResolveHierarchy(t).forEach(function(e) {
                                    n.indexOf(e) < 0 && n.push(e)
                                })
                            };
                        this.language ? i(this.language) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e) {
                            return i(e)
                        }), this.options.preload && this.options.preload.forEach(function(e) {
                            return i(e)
                        }), this.services.backendConnector.load(n, this.options.ns, t)
                    } else t(null)
                }
            }, {
                key: "reloadResources",
                value: function(e, t, n) {
                    var i = g();
                    return e || (e = this.languages), t || (t = this.options.ns), n || (n = P), this.services.backendConnector.reload(e, t, function(e) {
                        i.resolve(), n(e)
                    }), i
                }
            }, {
                key: "use",
                value: function(e) {
                    return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && T.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
            }, {
                key: "changeLanguage",
                value: function(e, t) {
                    var n = this,
                        i = g();
                    this.emit("languageChanging", e);
                    var r = function(e) {
                        e && (n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.translator.language || n.translator.changeLanguage(e), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(e)), n.loadResources(function(r) {
                            ! function(e, r) {
                                n.translator.changeLanguage(r), r && (n.emit("languageChanged", r), n.logger.log("languageChanged", r)), i.resolve(function() {
                                    return n.t.apply(n, arguments)
                                }), t && t(e, function() {
                                    return n.t.apply(n, arguments)
                                })
                            }(r, e)
                        })
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r) : r(e) : r(this.services.languageDetector.detect()), i
                }
            }, {
                key: "getFixedT",
                value: function(e, n) {
                    var r = this,
                        o = function e(n, o) {
                            var s;
                            if ("object" !== t(o)) {
                                for (var a = arguments.length, l = new Array(a > 2 ? a - 2 : 0), c = 2; c < a; c++) l[c - 2] = arguments[c];
                                s = r.options.overloadTranslationOptionHandler([n, o].concat(l))
                            } else s = i({}, o);
                            return s.lng = s.lng || e.lng, s.lngs = s.lngs || e.lngs, s.ns = s.ns || e.ns, r.t(n, s)
                        };
                    return "string" == typeof e ? o.lng = e : o.lngs = e, o.ns = n, o
                }
            }, {
                key: "t",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function(e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "loadNamespaces",
                value: function(e, t) {
                    var n = this,
                        i = g();
                    return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }), this.loadResources(function(e) {
                        i.resolve(), t && t(e)
                    }), i) : (t && t(), Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function(e, t) {
                    var n = g();
                    "string" == typeof e && (e = [e]);
                    var i = this.options.preload || [],
                        r = e.filter(function(e) {
                            return i.indexOf(e) < 0
                        });
                    return r.length ? (this.options.preload = i.concat(r), this.loadResources(function(e) {
                        n.resolve(), t && t(e)
                    }), n) : (t && t(), Promise.resolve())
                }
            }, {
                key: "dir",
                value: function(e) {
                    return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl"
                }
            }, {
                key: "createInstance",
                value: function() {
                    return new n(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
                }
            }, {
                key: "cloneInstance",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P,
                        o = i({}, this.options, t, {
                            isClone: !0
                        }),
                        s = new n(o);
                    return ["store", "services", "language"].forEach(function(t) {
                        s[t] = e[t]
                    }), s.translator = new S(s.services, s.options), s.translator.on("*", function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        s.emit.apply(s, [e].concat(n))
                    }), s.init(o, r), s.translator.options = s.options, s
                }
            }]), n
        }())
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18nextXHRBackend = t()
    }(this, function() {
        "use strict";

        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var t = [],
            n = t.forEach,
            i = t.slice;

        function r(e) {
            return n.call(i.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(e) {
                return o(e)
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : o(e)
            })(e)
        }

        function a(e, t) {
            if (t && "object" === s(t)) {
                var n = "",
                    i = encodeURIComponent;
                for (var r in t) n += "&" + i(r) + "=" + i(t[r]);
                if (!n) return e;
                e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
            }
            return e
        }

        function l(e, t, n, i, r) {
            i && "object" === s(i) && (r || (i._t = new Date), i = a("", i).slice(1)), t.queryStringParams && (e = a(e, t.queryStringParams));
            try {
                var o;
                (o = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(i ? "POST" : "GET", e, 1), t.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!t.withCredentials, i && o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
                var l = t.customHeaders;
                if (l = "function" == typeof l ? l() : l)
                    for (var c in l) o.setRequestHeader(c, l[c]);
                o.onreadystatechange = function() {
                    o.readyState > 3 && n && n(o.responseText, o)
                }, o.send(i)
            } catch (e) {
                console && console.log(e)
            }
        }
        var c = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.init(e, n), this.type = "backend"
            }
            var n, i;
            return n = t, (i = [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.services = e, this.options = r(t, this.options || {}, {
                        loadPath: "/locales/{{lng}}/{{ns}}.json",
                        addPath: "/locales/add/{{lng}}/{{ns}}",
                        allowMultiLoading: !1,
                        parse: JSON.parse,
                        parsePayload: function(e, t, n) {
                            return function(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n, e
                            }({}, t, n || "")
                        },
                        crossDomain: !1,
                        ajax: l
                    })
                }
            }, {
                key: "readMulti",
                value: function(e, t, n) {
                    var i = this.options.loadPath;
                    "function" == typeof this.options.loadPath && (i = this.options.loadPath(e, t));
                    var r = this.services.interpolator.interpolate(i, {
                        lng: e.join("+"),
                        ns: t.join("+")
                    });
                    this.loadUrl(r, n)
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var i = this.options.loadPath;
                    "function" == typeof this.options.loadPath && (i = this.options.loadPath([e], [t]));
                    var r = this.services.interpolator.interpolate(i, {
                        lng: e,
                        ns: t
                    });
                    this.loadUrl(r, n)
                }
            }, {
                key: "loadUrl",
                value: function(e, t) {
                    var n = this;
                    this.options.ajax(e, this.options, function(i, r) {
                        if (r.status >= 500 && r.status < 600) return t("failed loading " + e, !0);
                        if (r.status >= 400 && r.status < 500) return t("failed loading " + e, !1);
                        var o, s;
                        try {
                            o = n.options.parse(i, e)
                        } catch (t) {
                            s = "failed parsing " + e + " to json"
                        }
                        if (s) return t(s, !1);
                        t(null, o)
                    })
                }
            }, {
                key: "create",
                value: function(e, t, n, i) {
                    var r = this;
                    "string" == typeof e && (e = [e]);
                    var o = this.options.parsePayload(t, n, i);
                    e.forEach(function(e) {
                        var n = r.services.interpolator.interpolate(r.options.addPath, {
                            lng: e,
                            ns: t
                        });
                        r.options.ajax(n, r.options, function(e, t) {}, o)
                    })
                }
            }]) && e(n.prototype, i), t
        }();
        return c.type = "backend", c
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.i18nextBrowserLanguageDetector = t()
    }(this, function() {
        "use strict";

        function e(e) {
            return n.call(i.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }
        var t = [],
            n = t.forEach,
            i = t.slice,
            r = function(e, t, n, i) {
                var r = void 0;
                if (n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 60 * n * 1e3), r = "; expires=" + o.toGMTString()
                } else r = "";
                i = i ? "domain=" + i + ";" : "", document.cookie = e + "=" + t + r + ";" + i + "path=/"
            },
            o = function(e) {
                for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                    for (var r = n[i];
                        " " === r.charAt(0);) r = r.substring(1, r.length);
                    if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return null
            },
            s = {
                name: "cookie",
                lookup: function(e) {
                    var t = void 0;
                    if (e.lookupCookie && "undefined" != typeof document) {
                        var n = o(e.lookupCookie);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function(e, t) {
                    t.lookupCookie && "undefined" != typeof document && r(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain)
                }
            },
            a = {
                name: "querystring",
                lookup: function(e) {
                    var t = void 0;
                    if ("undefined" != typeof window)
                        for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                            var r = n[i].indexOf("=");
                            if (r > 0) n[i].substring(0, r) === e.lookupQuerystring && (t = n[i].substring(r + 1))
                        }
                    return t
                }
            },
            l = void 0;
        try {
            l = "undefined" !== window && null !== window.localStorage, window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo")
        } catch (e) {
            l = !1
        }
        var c = {
                name: "localStorage",
                lookup: function(e) {
                    var t = void 0;
                    if (e.lookupLocalStorage && l) {
                        var n = window.localStorage.getItem(e.lookupLocalStorage);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function(e, t) {
                    t.lookupLocalStorage && l && window.localStorage.setItem(t.lookupLocalStorage, e)
                }
            },
            u = {
                name: "navigator",
                lookup: function(e) {
                    var t = [];
                    if ("undefined" != typeof navigator) {
                        if (navigator.languages)
                            for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                        navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                    }
                    return t.length > 0 ? t : void 0
                }
            },
            f = {
                name: "htmlTag",
                lookup: function(e) {
                    var t = void 0,
                        n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                    return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t
                }
            },
            h = {
                name: "path",
                lookup: function(e) {
                    var t = void 0;
                    if ("undefined" != typeof window) {
                        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                        if (n instanceof Array)
                            if ("number" == typeof e.lookupFromPathIndex) {
                                if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                t = n[e.lookupFromPathIndex].replace("/", "")
                            } else t = n[0].replace("/", "")
                    }
                    return t
                }
            },
            d = {
                name: "subdomain",
                lookup: function(e) {
                    var t = void 0;
                    if ("undefined" != typeof window) {
                        var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                        n instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                    }
                    return t
                }
            },
            p = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            g = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.type = "languageDetector", this.detectors = {}, this.init(e, n)
                }
                return p(t, [{
                    key: "init",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = t, this.options = e(n, this.options || {}, {
                            order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
                            lookupQuerystring: "lng",
                            lookupCookie: "i18next",
                            lookupLocalStorage: "i18nextLng",
                            caches: ["localStorage"],
                            excludeCacheFor: ["cimode"]
                        }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(s), this.addDetector(a), this.addDetector(c), this.addDetector(u), this.addDetector(f), this.addDetector(h), this.addDetector(d)
                    }
                }, {
                    key: "addDetector",
                    value: function(e) {
                        this.detectors[e.name] = e
                    }
                }, {
                    key: "detect",
                    value: function(e) {
                        var t = this;
                        e || (e = this.options.order);
                        var n = [];
                        e.forEach(function(e) {
                            if (t.detectors[e]) {
                                var i = t.detectors[e].lookup(t.options);
                                i && "string" == typeof i && (i = [i]), i && (n = n.concat(i))
                            }
                        });
                        var i = void 0;
                        if (n.forEach(function(e) {
                                if (!i) {
                                    var n = t.services.languageUtils.formatLanguageCode(e);
                                    t.services.languageUtils.isWhitelisted(n) && (i = n)
                                }
                            }), !i) {
                            var r = this.i18nOptions.fallbackLng;
                            "string" == typeof r && (r = [r]), r || (r = []), i = "[object Array]" === Object.prototype.toString.apply(r) ? r[0] : r[0] || r.default && r.default[0]
                        }
                        return i
                    }
                }, {
                    key: "cacheUserLanguage",
                    value: function(e, t) {
                        var n = this;
                        t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach(function(t) {
                            n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                        }))
                    }
                }]), t
            }();
        return g.type = "languageDetector", g
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.jqueryI18next = t()
    }(this, function() {
        "use strict";
        var e = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            t = {
                tName: "t",
                i18nName: "i18n",
                handleName: "localize",
                selectorAttr: "data-i18n",
                targetAttr: "i18n-target",
                optionsAttr: "i18n-options",
                useOptionsAttr: !1,
                parseDefaultValueFromContent: !0
            };
        return {
            init: function(n, i) {
                function r(t, i, r) {
                    function o(t, n) {
                        return s.parseDefaultValueFromContent ? e({}, t, {
                            defaultValue: n
                        }) : t
                    }
                    if (0 !== i.length) {
                        var a = "text";
                        if (0 === i.indexOf("[")) {
                            var l = i.split("]");
                            i = l[1], a = l[0].substr(1, l[0].length - 1)
                        }
                        if (i.indexOf(";") === i.length - 1 && (i = i.substr(0, i.length - 2)), "html" === a) t.html(n.t(i, o(r, t.html())));
                        else if ("text" === a) t.text(n.t(i, o(r, t.text())));
                        else if ("prepend" === a) t.prepend(n.t(i, o(r, t.html())));
                        else if ("append" === a) t.append(n.t(i, o(r, t.html())));
                        else if (0 === a.indexOf("data-")) {
                            var c = a.substr("data-".length),
                                u = n.t(i, o(r, t.data(c)));
                            t.data(c, u), t.attr(a, u)
                        } else t.attr(a, n.t(i, o(r, t.attr(a))))
                    }
                }

                function o(t, n) {
                    var o = t.attr(s.selectorAttr);
                    if (o || void 0 === o || !1 === o || (o = t.text() || t.val()), o) {
                        var a = t,
                            l = t.data(s.targetAttr);
                        if (l && (a = t.find(l) || t), n || !0 !== s.useOptionsAttr || (n = t.data(s.optionsAttr)), n = n || {}, o.indexOf(";") >= 0) {
                            var c = o.split(";");
                            i.each(c, function(e, t) {
                                "" !== t && r(a, t.trim(), n)
                            })
                        } else r(a, o, n);
                        if (!0 === s.useOptionsAttr) {
                            var u = {};
                            delete(u = e({
                                clone: u
                            }, n)).lng, t.data(s.optionsAttr, u)
                        }
                    }
                }
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                s = e({}, t, s), i[s.tName] = n.t.bind(n), i[s.i18nName] = n, i.fn[s.handleName] = function(e) {
                    return this.each(function() {
                        o(i(this), e), i(this).find("[" + s.selectorAttr + "]").each(function() {
                            o(i(this), e)
                        })
                    })
                }
            }
        }
    }),
    function() {
        "use strict";

        function e(e) {
            return "function" == typeof e
        }

        function t() {
            return function() {
                setTimeout(n, 1)
            }
        }

        function n() {
            for (var e = 0; _ > e; e += 2) {
                (0, A[e])(A[e + 1]), A[e] = void 0, A[e + 1] = void 0
            }
            _ = 0
        }

        function i() {}

        function r(e) {
            try {
                return e.then
            } catch (e) {
                return P.error = e, P
            }
        }

        function o(t, n, i) {
            n.constructor === t.constructor && i === D && constructor.resolve === O ? function(e, t) {
                t._state === L ? l(e, t._result) : t._state === j ? c(e, t._result) : u(t, void 0, function(t) {
                    s(e, t)
                }, function(t) {
                    c(e, t)
                })
            }(t, n) : i === P ? c(t, P.error) : void 0 === i ? l(t, n) : e(i) ? function(e, t, n) {
                E(function(e) {
                    var i = !1,
                        r = function(e, t, n, i) {
                            try {
                                e.call(t, n, i)
                            } catch (e) {
                                return e
                            }
                        }(n, t, function(n) {
                            i || (i = !0, t !== n ? s(e, n) : l(e, n))
                        }, function(t) {
                            i || (i = !0, c(e, t))
                        }, e._label);
                    !i && r && (i = !0, c(e, r))
                }, e)
            }(t, n, i) : l(t, n)
        }

        function s(e, t) {
            e === t ? c(e, new TypeError("You cannot resolve a promise with itself")) : function(e) {
                return "function" == typeof e || "object" == typeof e && null !== e
            }(t) ? o(e, t, r(t)) : l(e, t)
        }

        function a(e) {
            e._onerror && e._onerror(e._result), f(e)
        }

        function l(e, t) {
            e._state === I && (e._result = t, e._state = L, 0 !== e._subscribers.length && E(f, e))
        }

        function c(e, t) {
            e._state === I && (e._state = j, e._result = t, E(a, e))
        }

        function u(e, t, n, i) {
            var r = e._subscribers,
                o = r.length;
            e._onerror = null, r[o] = t, r[o + L] = n, r[o + j] = i, 0 === o && e._state && E(f, e)
        }

        function f(e) {
            var t = e._subscribers,
                n = e._state;
            if (0 !== t.length) {
                for (var i, r, o = e._result, s = 0; s < t.length; s += 3) i = t[s], r = t[s + n], i ? d(n, i, r, o) : r(o);
                e._subscribers.length = 0
            }
        }

        function h() {
            this.error = null
        }

        function d(t, n, i, r) {
            var o, a, u, f, h = e(i);
            if (h) {
                if ((o = function(e, t) {
                        try {
                            return e(t)
                        } catch (e) {
                            return R.error = e, R
                        }
                    }(i, r)) === R ? (f = !0, a = o.error, o = null) : u = !0, n === o) return void c(n, new TypeError("A promises callback cannot return that same promise."))
            } else o = r, u = !0;
            n._state !== I || (h && u ? s(n, o) : f ? c(n, a) : t === L ? l(n, o) : t === j && c(n, o))
        }

        function p(e) {
            e[N] = H++, e._state = void 0, e._result = void 0, e._subscribers = []
        }

        function g(e) {
            this[N] = H++, this._result = this._state = void 0, this._subscribers = [], i !== e && ("function" != typeof e && function() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }(), this instanceof g ? function(e, t) {
                try {
                    t(function(t) {
                        s(e, t)
                    }, function(t) {
                        c(e, t)
                    })
                } catch (t) {
                    c(e, t)
                }
            }(this, e) : function() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }())
        }

        function m(e, t) {
            this._instanceConstructor = e, this.promise = new e(i), this.promise[N] || p(this.promise), w(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? l(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && l(this.promise, this._result))) : c(this.promise, new Error("Array Methods must be provided an Array"))
        }
        var v, y, b, w = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            _ = 0,
            E = function(e, t) {
                A[_] = e, A[_ + 1] = t, 2 === (_ += 2) && (y ? y(n) : b())
            },
            x = "undefined" != typeof window ? window : void 0,
            T = x || {},
            S = T.MutationObserver || T.WebKitMutationObserver,
            k = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            C = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            A = new Array(1e3);
        b = k ? function() {
            process.nextTick(n)
        } : S ? function() {
            var e = 0,
                t = new S(n),
                i = document.createTextNode("");
            return t.observe(i, {
                    characterData: !0
                }),
                function() {
                    i.data = e = ++e % 2
                }
        }() : C ? function() {
            var e = new MessageChannel;
            return e.port1.onmessage = n,
                function() {
                    e.port2.postMessage(0)
                }
        }() : void 0 === x && "function" == typeof require ? function() {
            try {
                var e = require("vertx");
                return v = e.runOnLoop || e.runOnContext,
                    function() {
                        v(n)
                    }
            } catch (e) {
                return t()
            }
        }() : t();
        var D = function(e, t) {
                var n = this,
                    r = new this.constructor(i);
                void 0 === r[N] && p(r);
                var o = n._state;
                if (o) {
                    var s = arguments[o - 1];
                    E(function() {
                        d(o, r, s, n._result)
                    })
                } else u(n, r, e, t);
                return r
            },
            O = function(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(i);
                return s(t, e), t
            },
            N = Math.random().toString(36).substring(16),
            I = void 0,
            L = 1,
            j = 2,
            P = new h,
            R = new h,
            H = 0,
            M = function(e) {
                return new U(this, e).promise
            },
            W = function(e) {
                var t = this;
                return new t(w(e) ? function(n, i) {
                    for (var r = e.length, o = 0; r > o; o++) t.resolve(e[o]).then(n, i)
                } : function(e, t) {
                    t(new TypeError("You must pass an array to race."))
                })
            },
            q = function(e) {
                var t = new this(i);
                return c(t, e), t
            },
            F = g;
        g.all = M, g.race = W, g.resolve = O, g.reject = q, g._setScheduler = function(e) {
            y = e
        }, g._setAsap = function(e) {
            E = e
        }, g._asap = E, g.prototype = {
            constructor: g,
            then: D,
            catch: function(e) {
                return this.then(null, e)
            }
        };
        var U = m;
        m.prototype._enumerate = function() {
            for (var e = this.length, t = this._input, n = 0; this._state === I && e > n; n++) this._eachEntry(t[n], n)
        }, m.prototype._eachEntry = function(e, t) {
            var n = this._instanceConstructor,
                s = n.resolve;
            if (s === O) {
                var a = r(e);
                if (a === D && e._state !== I) this._settledAt(e._state, t, e._result);
                else if ("function" != typeof a) this._remaining--, this._result[t] = e;
                else if (n === F) {
                    var l = new n(i);
                    o(l, e, a), this._willSettleAt(l, t)
                } else this._willSettleAt(new n(function(t) {
                    t(e)
                }), t)
            } else this._willSettleAt(s(e), t)
        }, m.prototype._settledAt = function(e, t, n) {
            var i = this.promise;
            i._state === I && (this._remaining--, e === j ? c(i, n) : this._result[t] = n), 0 === this._remaining && l(i, this._result)
        }, m.prototype._willSettleAt = function(e, t) {
            var n = this;
            u(e, void 0, function(e) {
                n._settledAt(L, t, e)
            }, function(e) {
                n._settledAt(j, t, e)
            })
        };
        var Y = function() {
                var e;
                if ("undefined" != typeof global) e = global;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                (!t || "[object Promise]" !== Object.prototype.toString.call(t.resolve()) || t.cast) && (e.Promise = F)
            },
            X = {
                Promise: F,
                polyfill: Y
            };
        "function" == typeof define && define.amd ? define(function() {
            return X
        }) : "undefined" != typeof module && module.exports ? module.exports = X : void 0 !== this && (this.ES6Promise = X), Y()
    }.call(this);