var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            n = _self.Prism = {
                util: {
                    encode: function(e) {
                        return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function(e) {
                        switch (n.util.type(e)) {
                            case "Object":
                                var t = {};
                                for (var a in e) e.hasOwnProperty(a) && (t[a] = n.util.clone(e[a]));
                                return t;
                            case "Array":
                                return e.map && e.map(function(e) {
                                    return n.util.clone(e)
                                })
                        }
                        return e
                    }
                },
                languages: {
                    extend: function(e, t) {
                        var a = n.util.clone(n.languages[e]);
                        for (var r in t) a[r] = t[r];
                        return a
                    },
                    insertBefore: function(e, t, a, r) {
                        var i = (r = r || n.languages)[e];
                        if (2 == arguments.length) {
                            for (var s in a = arguments[1]) a.hasOwnProperty(s) && (i[s] = a[s]);
                            return i
                        }
                        var o = {};
                        for (var l in i)
                            if (i.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var s in a) a.hasOwnProperty(s) && (o[s] = a[s]);
                                o[l] = i[l]
                            }
                        return n.languages.DFS(n.languages, function(t, n) {
                            n === r[e] && t != e && (this[t] = o)
                        }), r[e] = o
                    },
                    DFS: function(e, t, a, r) {
                        for (var i in r = r || {}, e) e.hasOwnProperty(i) && (t.call(e, i, e[i], a || i), "Object" !== n.util.type(e[i]) || r[n.util.objId(e[i])] ? "Array" !== n.util.type(e[i]) || r[n.util.objId(e[i])] || (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, i, r)) : (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, null, r)))
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    var a = {
                        callback: t,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    n.hooks.run("before-highlightall", a);
                    for (var r, i = a.elements || document.querySelectorAll(a.selector), s = 0; r = i[s++];) n.highlightElement(r, !0 === e, a.callback)
                },
                highlightElement: function(t, a, r) {
                    for (var i, s, o = t; o && !e.test(o.className);) o = o.parentNode;
                    o && (i = (o.className.match(e) || [, ""])[1].toLowerCase(), s = n.languages[i]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i);
                    var l = {
                        element: t,
                        language: i,
                        grammar: s,
                        code: t.textContent
                    };
                    if (n.hooks.run("before-sanity-check", l), l.code && l.grammar)
                        if (n.hooks.run("before-highlight", l), a && _self.Worker) {
                            var c = new Worker(n.filename);
                            c.onmessage = function(e) {
                                l.highlightedCode = e.data, n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r && r.call(l.element), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                            }, c.postMessage(JSON.stringify({
                                language: l.language,
                                code: l.code,
                                immediateClose: !0
                            }))
                        } else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", l), n.hooks.run("complete", l);
                    else n.hooks.run("complete", l)
                },
                highlight: function(e, t, r) {
                    var i = n.tokenize(e, t);
                    return a.stringify(n.util.encode(i), r)
                },
                tokenize: function(e, t) {
                    var a = n.Token,
                        r = [e],
                        i = t.rest;
                    if (i) {
                        for (var s in i) t[s] = i[s];
                        delete t.rest
                    }
                    e: for (var s in t)
                        if (t.hasOwnProperty(s) && t[s]) {
                            var o = t[s];
                            o = "Array" === n.util.type(o) ? o : [o];
                            for (var l = 0; l < o.length; ++l) {
                                var c = o[l],
                                    u = c.inside,
                                    d = !!c.lookbehind,
                                    p = !!c.greedy,
                                    m = 0,
                                    g = c.alias;
                                c = c.pattern || c;
                                for (var f = 0; f < r.length; f++) {
                                    var h = r[f];
                                    if (r.length > e.length) break e;
                                    if (!(h instanceof a)) {
                                        c.lastIndex = 0;
                                        var E = 1;
                                        if (!(k = c.exec(h)) && p && f != r.length - 1) {
                                            var b = r[f + 1].matchedStr || r[f + 1],
                                                N = h + b;
                                            if (f < r.length - 2 && (N += r[f + 2].matchedStr || r[f + 2]), c.lastIndex = 0, !(k = c.exec(N))) continue;
                                            if ((S = k.index + (d ? k[1].length : 0)) >= h.length) continue;
                                            var T = k.index + k[0].length,
                                                A = h.length + b.length;
                                            if (E = 3, A >= T) {
                                                if (r[f + 1].greedy) continue;
                                                E = 2, N = N.slice(0, A)
                                            }
                                            h = N
                                        }
                                        if (k) {
                                            d && (m = k[1].length);
                                            T = (S = k.index + m) + (k = k[0].slice(m)).length;
                                            var S, k, y = h.slice(0, S),
                                                v = h.slice(T),
                                                P = [f, E];
                                            y && P.push(y);
                                            var I = new a(s, u ? n.tokenize(k, u) : k, g, k, p);
                                            P.push(I), v && P.push(v), Array.prototype.splice.apply(r, P)
                                        }
                                    }
                                }
                            }
                        }
                    return r
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var a = n.hooks.all;
                        a[e] = a[e] || [], a[e].push(t)
                    },
                    run: function(e, t) {
                        var a = n.hooks.all[e];
                        if (a && a.length)
                            for (var r, i = 0; r = a[i++];) r(t)
                    }
                }
            },
            a = n.Token = function(e, t, n, a, r) {
                this.type = e, this.content = t, this.alias = n, this.matchedStr = a || null, this.greedy = !!r
            };
        if (a.stringify = function(e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function(n) {
                    return a.stringify(n, t, e)
                }).join("");
                var i = {
                    type: e.type,
                    content: a.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if ("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias) {
                    var s = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(i.classes, s)
                }
                n.hooks.run("wrap", i);
                var o = "";
                for (var l in i.attributes) o += (o ? " " : "") + l + '="' + (i.attributes[l] || "") + '"';
                return "<" + i.tag + ' class="' + i.classes.join(" ") + '" ' + o + ">" + i.content + "</" + i.tag + ">"
            }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                a = t.language,
                r = t.code,
                i = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[a], a)), i && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\w\W]*?-->/,
        prolog: /<\?[\w\W]+?\?>/,
        doctype: /<!DOCTYPE[\w\W]+?>/,
        cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "attr-value": {
                    pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                    inside: {
                        punctuation: /[=>"']/
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: /&#?[\da-z]{1,8};/i
    }, Prism.hooks.add("wrap", function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
        comment: /\/\*[\w\W]*?\*\//,
        atrule: {
            pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
        string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
        property: /(\b|\B)[\w-]+(?=\s*:)/i,
        important: /\B!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/
    }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
        style: {
            pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
            lookbehind: !0,
            inside: Prism.languages.css,
            alias: "language-css"
        }
    }), Prism.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|').*?\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: "language-css"
        }
    }, Prism.languages.markup.tag)), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0
        }],
        string: {
            pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /(\.|\\)/
            }
        },
        keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(true|false)\b/,
        function: /[a-z0-9_]+(?=\()/i,
        number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
        function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
    }), Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0
        }
    }), Prism.languages.insertBefore("javascript", "class-name", {
        "template-string": {
            pattern: /`(?:\\\\|\\?[^\\])*?`/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\$\{[^}]+\}/,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
        script: {
            pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript,
            alias: "language-javascript"
        }
    }), Prism.languages.js = Prism.languages.javascript,
    function(e) {
        e.languages.ruby = e.languages.extend("clike", {
            comment: /#(?!\{[^\r\n]*?\}).*/,
            keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
        });
        var t = {
            pattern: /#\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^#\{|\}$/,
                    alias: "tag"
                },
                rest: e.util.clone(e.languages.ruby)
            }
        };
        e.languages.insertBefore("ruby", "keyword", {
            regex: [{
                pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
                inside: {
                    interpolation: t
                }
            }, {
                pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
                inside: {
                    interpolation: t
                }
            }, {
                pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
                inside: {
                    interpolation: t
                }
            }, {
                pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
                inside: {
                    interpolation: t
                }
            }, {
                pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
                inside: {
                    interpolation: t
                }
            }, {
                pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
                lookbehind: !0
            }],
            variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
            symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
        }), e.languages.insertBefore("ruby", "number", {
            builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
            constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
        }), e.languages.ruby.string = [{
            pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
            inside: {
                interpolation: t
            }
        }]
    }(Prism), Prism.languages.css.selector = {
        pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
        inside: {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+(?:\(.*\))?/,
            class: /\.[-:\.\w]+/,
            id: /#[-:\.\w]+/
        }
    }, Prism.languages.insertBefore("css", "function", {
        hexcode: /#[\da-f]{3,6}/i,
        entity: /\\[\da-f]{1,8}/i,
        number: /[\d%\.]+/
    }), Prism.languages.git = {
        comment: /^#.*/m,
        deleted: /^[-–].*/m,
        inserted: /^\+.*/m,
        string: /("|')(\\?.)*?\1/m,
        command: {
            pattern: /^.*\$ git .*$/m,
            inside: {
                parameter: /\s(--|-)\w+/m
            }
        },
        coord: /^@@.*@@$/m,
        commit_sha1: /^commit \w{40}$/m
    },
    function(e) {
        e.languages.jade = {
            comment: {
                pattern: /(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,
                lookbehind: !0
            },
            "multiline-script": {
                pattern: /(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.javascript
                }
            },
            filter: {
                pattern: /(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                lookbehind: !0,
                inside: {
                    "filter-name": {
                        pattern: /^:[\w-]+/,
                        alias: "variable"
                    }
                }
            },
            "multiline-plain-text": {
                pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                lookbehind: !0
            },
            markup: {
                pattern: /(^[\t ]*)<.+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.markup
                }
            },
            doctype: {
                pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
                lookbehind: !0
            },
            "flow-control": {
                pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
                lookbehind: !0,
                inside: {
                    each: {
                        pattern: /^each .+? in\b/,
                        inside: {
                            keyword: /\b(?:each|in)\b/,
                            punctuation: /,/
                        }
                    },
                    branch: {
                        pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                        alias: "keyword"
                    },
                    rest: e.languages.javascript
                }
            },
            keyword: {
                pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
                lookbehind: !0
            },
            mixin: [{
                pattern: /(^[\t ]*)mixin .+/m,
                lookbehind: !0,
                inside: {
                    keyword: /^mixin/,
                    function: /\w+(?=\s*\(|\s*$)/,
                    punctuation: /[(),.]/
                }
            }, {
                pattern: /(^[\t ]*)\+.+/m,
                lookbehind: !0,
                inside: {
                    name: {
                        pattern: /^\+\w+/,
                        alias: "function"
                    },
                    rest: e.languages.javascript
                }
            }],
            script: {
                pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.javascript
                }
            },
            "plain-text": {
                pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
                lookbehind: !0
            },
            tag: {
                pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
                lookbehind: !0,
                inside: {
                    attributes: [{
                        pattern: /&[^(]+\([^)]+\)/,
                        inside: {
                            rest: e.languages.javascript
                        }
                    }, {
                        pattern: /\([^)]+\)/,
                        inside: {
                            "attr-value": {
                                pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                                lookbehind: !0,
                                inside: {
                                    rest: e.languages.javascript
                                }
                            },
                            "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                            punctuation: /[!=(),]+/
                        }
                    }],
                    punctuation: /:/
                }
            },
            code: [{
                pattern: /(^[\t ]*(?:-|!?=)).+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.javascript
                }
            }],
            punctuation: /[.\-!=|]+/
        };
        for (var t = [{
                filter: "atpl",
                language: "twig"
            }, {
                filter: "coffee",
                language: "coffeescript"
            }, "ejs", "handlebars", "hogan", "less", "livescript", "markdown", "mustache", "plates", {
                filter: "sass",
                language: "scss"
            }, "stylus", "swig"], n = {}, a = 0, r = t.length; r > a; a++) {
            var i = t[a];
            i = "string" == typeof i ? {
                filter: i,
                language: i
            } : i, e.languages[i.language] && (n["filter-" + i.filter] = {
                pattern: RegExp("(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", i.filter), "m"),
                lookbehind: !0,
                inside: {
                    "filter-name": {
                        pattern: /^:[\w-]+/,
                        alias: "variable"
                    },
                    rest: e.languages[i.language]
                }
            })
        }
        e.languages.insertBefore("jade", "filter", n)
    }(Prism), Prism.languages.json = {
        property: /".*?"(?=\s*:)/gi,
        string: /"(?!:)(\\?[^"])*?"(?!:)/g,
        number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
        punctuation: /[{}[\]);,]/g,
        operator: /:/g,
        boolean: /\b(true|false)\b/gi,
        null: /\bnull\b/gi
    }, Prism.languages.jsonp = Prism.languages.json, Prism.languages.php = Prism.languages.extend("clike", {
        keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
            lookbehind: !0
        }
    }), Prism.languages.insertBefore("php", "class-name", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }), Prism.languages.insertBefore("php", "keyword", {
        delimiter: /\?>|<\?(?:php)?/i,
        variable: /\$\w+\b/i,
        package: {
            pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }
    }), Prism.languages.insertBefore("php", "operator", {
        property: {
            pattern: /(->)[\w]+/,
            lookbehind: !0
        }
    }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
        "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
            return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
        }))
    }), Prism.hooks.add("before-insert", function(e) {
        "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
    }), Prism.hooks.add("after-highlight", function(e) {
        if ("php" === e.language) {
            for (var t, n = 0; t = e.tokenStack[n]; n++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(t, e.grammar, "php").replace(/\$/g, "$$$$"));
            e.element.innerHTML = e.highlightedCode
        }
    }), Prism.hooks.add("wrap", function(e) {
        "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
    }), Prism.languages.insertBefore("php", "comment", {
        markup: {
            pattern: /<[^?]\/?(.*?)>/,
            inside: Prism.languages.markup
        },
        php: /\{\{\{PHP[0-9]+\}\}\}/
    })), Prism.languages.insertBefore("php", "variable", {
        this: /\$this\b/,
        global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
        scope: {
            pattern: /\b[\w\\]+::/,
            inside: {
                keyword: /(static|self|parent)/,
                punctuation: /(::|\\)/
            }
        }
    }),
    function(e) {
        e.languages.sass = e.languages.extend("css", {
            comment: {
                pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
                lookbehind: !0
            }
        }), e.languages.insertBefore("sass", "atrule", {
            "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: {
                    atrule: /(?:@[\w-]+|[+=])/m
                }
            }
        }), delete e.languages.sass.atrule;
        var t = /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,
            n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
                pattern: /(\s+)-(?=\s)/,
                lookbehind: !0
            }];
        e.languages.insertBefore("sass", "property", {
            "variable-line": {
                pattern: /^[ \t]*\$.+/m,
                inside: {
                    punctuation: /:/,
                    variable: t,
                    operator: n
                }
            },
            "property-line": {
                pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
                inside: {
                    property: [/[^:\s]+(?=\s*:)/, {
                        pattern: /(:)[^:\s]+/,
                        lookbehind: !0
                    }],
                    punctuation: /:/,
                    variable: t,
                    operator: n,
                    important: e.languages.sass.important
                }
            }
        }), delete e.languages.sass.property, delete e.languages.sass.important, delete e.languages.sass.selector, e.languages.insertBefore("sass", "punctuation", {
            selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0
            }
        })
    }(Prism), Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
            inside: {
                placeholder: /%[-_\w]+/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.insertBefore("scss", "property", {
        variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-_\w]+/,
            alias: "selector"
        },
        statement: /\B!(?:default|optional)\b/i,
        boolean: /\b(?:true|false)\b/,
        null: /\bnull\b/,
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss), Prism.languages.sql = {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0
        },
        string: {
            pattern: /(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,
            lookbehind: !0
        },
        variable: /@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,
        function: /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
        keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
        boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
        number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
        operator: /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
        punctuation: /[;[\]()`,.]/
    },
    function() {
        function e(e, t) {
            return Array.prototype.slice.call((t || document).querySelectorAll(e))
        }

        function t(e, t) {
            return t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1
        }

        function n(e, n, a) {
            for (var i, s = n.replace(/\s+/g, "").split(","), o = +e.getAttribute("data-line-offset") || 0, l = (r() ? parseInt : parseFloat)(getComputedStyle(e).lineHeight), c = 0; i = s[c++];) {
                var u = +(i = i.split("-"))[0],
                    d = +i[1] || u,
                    p = document.createElement("div");
                p.textContent = Array(d - u + 2).join(" \n"), p.className = (a || "") + " line-highlight", t(e, "line-numbers") || (p.setAttribute("data-start", u), d > u && p.setAttribute("data-end", d)), p.style.top = (u - o - 1) * l + "px", t(e, "line-numbers") ? e.appendChild(p) : (e.querySelector("code") || e).appendChild(p)
            }
        }

        function a() {
            var t = location.hash.slice(1);
            e(".temporary.line-highlight").forEach(function(e) {
                e.parentNode.removeChild(e)
            });
            var a = (t.match(/\.([\d,-]+)$/) || [, ""])[1];
            if (a && !document.getElementById(t)) {
                var r = t.slice(0, t.lastIndexOf(".")),
                    i = document.getElementById(r);
                i && (i.hasAttribute("data-line") || i.setAttribute("data-line", ""), n(i, a, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView())
            }
        }
        if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
            var r = function() {
                    var e;
                    return function() {
                        if (void 0 === e) {
                            var t = document.createElement("div");
                            t.style.fontSize = "13px", t.style.lineHeight = "1.5", t.style.padding = 0, t.style.border = 0, t.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(t), e = 38 === t.offsetHeight, document.body.removeChild(t)
                        }
                        return e
                    }
                }(),
                i = 0;
            Prism.hooks.add("complete", function(t) {
                var r = t.element.parentNode,
                    s = r && r.getAttribute("data-line");
                r && s && /pre/i.test(r.nodeName) && (clearTimeout(i), e(".line-highlight", r).forEach(function(e) {
                    e.parentNode.removeChild(e)
                }), n(r, s), i = setTimeout(a, 1))
            }), window.addEventListener && window.addEventListener("hashchange", a)
        }
    }(), "undefined" != typeof self && self.Prism && self.document && Prism.hooks.add("complete", function(e) {
        if (e.code) {
            var t = e.element.parentNode,
                n = /\s*\bline-numbers\b\s*/;
            if (t && /pre/i.test(t.nodeName) && (n.test(t.className) || n.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
                n.test(e.element.className) && (e.element.className = e.element.className.replace(n, "")), n.test(t.className) || (t.className += " line-numbers");
                var a, r = e.code.match(/\n(?!$)/g),
                    i = r ? r.length + 1 : 1,
                    s = new Array(i + 1);
                s = s.join("<span></span>"), (a = document.createElement("span")).className = "line-numbers-rows", a.innerHTML = s, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(a)
            }
        }
    }), "undefined" != typeof self && !self.Prism || "undefined" != typeof global && !global.Prism || Prism.hooks.add("before-highlight", function(e) {
        var t = e.grammar;
        t.tab = /\t/g, t.crlf = /\r\n/g, t.lf = /\n/g, t.cr = /\r/g, t.space = / /g
    }),
    function() {
        if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
            var e = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~\/.:#=?&amp;]+/,
                t = /\b\S+@[\w.]+[a-z]{2}/,
                n = /\[([^\]]+)]\(([^)]+)\)/,
                a = ["comment", "url", "attr-value", "string"];
            Prism.hooks.add("before-highlight", function(r) {
                r.grammar && !r.grammar["url-link"] && (Prism.languages.DFS(r.grammar, function(r, i, s) {
                    a.indexOf(s) > -1 && "Array" !== Prism.util.type(i) && (i.pattern || (i = this[r] = {
                        pattern: i
                    }), i.inside = i.inside || {}, "comment" == s && (i.inside["md-link"] = n), "attr-value" == s ? Prism.languages.insertBefore("inside", "punctuation", {
                        "url-link": e
                    }, i) : i.inside["url-link"] = e, i.inside["email-link"] = t)
                }), r.grammar["url-link"] = e, r.grammar["email-link"] = t)
            }), Prism.hooks.add("wrap", function(e) {
                if (/-link$/.test(e.type)) {
                    e.tag = "a";
                    var t = e.content;
                    if ("email-link" == e.type && 0 != t.indexOf("mailto:")) t = "mailto:" + t;
                    else if ("md-link" == e.type) {
                        var a = e.content.match(n);
                        t = a[2], e.content = a[1]
                    }
                    e.attributes.href = t
                }
            })
        }
    }(), "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function() {
        var e = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
        };
        Array.prototype.forEach && Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t) {
            for (var n, a = t.getAttribute("data-src"), r = t, i = /\blang(?:uage)?-(?!\*)(\w+)\b/i; r && !i.test(r.className);) r = r.parentNode;
            if (r && (n = (t.className.match(i) || [, ""])[1]), !n) {
                var s = (a.match(/\.(\w+)$/) || [, ""])[1];
                n = e[s] || s
            }
            var o = document.createElement("code");
            o.className = "language-" + n, t.textContent = "", o.textContent = "Loading…", t.appendChild(o);
            var l = new XMLHttpRequest;
            l.open("GET", a, !0), l.onreadystatechange = function() {
                4 == l.readyState && (l.status < 400 && l.responseText ? (o.textContent = l.responseText, Prism.highlightElement(o)) : o.textContent = l.status >= 400 ? "✖ Error " + l.status + " while fetching file: " + l.statusText : "✖ Error: File does not exist or is empty")
            }, l.send(null)
        })
    }, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight)),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                css: "CSS",
                clike: "C-like",
                javascript: "JavaScript",
                abap: "ABAP",
                actionscript: "ActionScript",
                apacheconf: "Apache Configuration",
                apl: "APL",
                applescript: "AppleScript",
                asciidoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                autoit: "AutoIt",
                autohotkey: "AutoHotkey",
                basic: "BASIC",
                csharp: "C#",
                cpp: "C++",
                coffeescript: "CoffeeScript",
                "css-extras": "CSS Extras",
                fsharp: "F#",
                glsl: "GLSL",
                http: "HTTP",
                inform7: "Inform 7",
                json: "JSON",
                latex: "LaTeX",
                lolcode: "LOLCODE",
                matlab: "MATLAB",
                mel: "MEL",
                nasm: "NASM",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                ocaml: "OCaml",
                parigp: "PARI/GP",
                php: "PHP",
                "php-extras": "PHP Extras",
                powershell: "PowerShell",
                protobuf: "Protocol Buffers",
                jsx: "React JSX",
                rest: "reST (reStructuredText)",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (Scss)",
                sql: "SQL",
                typescript: "TypeScript",
                vhdl: "VHDL",
                vim: "vim",
                wiki: "Wiki markup",
                yaml: "YAML"
            };
            Prism.hooks.add("before-highlight", function(t) {
                var n = t.element.parentNode;
                if (n && /pre/i.test(n.nodeName)) {
                    var a, r, i = n.getAttribute("data-language") || e[t.language] || t.language.substring(0, 1).toUpperCase() + t.language.substring(1),
                        s = n.previousSibling;
                    s && /\s*\bprism-show-language\b\s*/.test(s.className) && s.firstChild && /\s*\bprism-show-language-label\b\s*/.test(s.firstChild.className) ? r = s.firstChild : (a = document.createElement("div"), (r = document.createElement("div")).className = "prism-show-language-label", a.className = "prism-show-language", a.appendChild(r), n.parentNode.insertBefore(a, n)), r.innerHTML = i
                }
            })
        }
    }(),
    function() {
        function e(e) {
            "function" != typeof e || t(e) || a.push(e)
        }

        function t(e) {
            return "function" == typeof e ? a.filter(function(t) {
                return t.valueOf() === e.valueOf()
            })[0] : "string" == typeof e && e.length > 0 ? a.filter(function(t) {
                return t.name === e
            })[0] : null
        }

        function n() {
            Array.prototype.slice.call(document.querySelectorAll("pre[data-jsonp]")).forEach(function(e) {
                e.textContent = "";
                var t = document.createElement("code");
                t.textContent = i, e.appendChild(t);
                var n = e.getAttribute("data-adapter"),
                    s = null;
                if (n) {
                    if ("function" != typeof window[n]) return void(t.textContent = "JSONP adapter function '" + n + "' doesn't exist");
                    s = window[n]
                }
                var o = "prismjsonp" + r++,
                    l = document.createElement("a"),
                    c = l.href = e.getAttribute("data-jsonp");
                l.href += (l.search ? "&" : "?") + (e.getAttribute("data-callback") || "callback") + "=" + o;
                var u = setTimeout(function() {
                        t.textContent === i && (t.textContent = "Timeout loading '" + c + "'")
                    }, 5e3),
                    d = document.createElement("script");
                d.src = l.href, window[o] = function(n) {
                    document.head.removeChild(d), clearTimeout(u), delete window[o];
                    var r = "";
                    if (s) r = s(n, e);
                    else
                        for (var i in a)
                            if (null !== (r = a[i](n, e))) break;
                    null === r ? t.textContent = "Cannot parse response (perhaps you need an adapter function?)" : (t.textContent = r, Prism.highlightElement(t))
                }, document.head.appendChild(d)
            })
        }
        if (self.Prism && self.document && document.querySelectorAll && [].filter) {
            var a = [];
            Prism.plugins.jsonphighlight = {
                registerAdapter: e,
                removeAdapter: function(e) {
                    if ("string" == typeof e && (e = t(e)), "function" == typeof e) {
                        var n = a.indexOf(e);
                        n >= 0 && a.splice(n, 1)
                    }
                },
                highlight: n
            }, e(function(e) {
                if (e && e.meta && e.data) {
                    if (e.meta.status && e.meta.status >= 400) return "Error: " + (e.data.message || e.meta.status);
                    if ("string" == typeof e.data.content) return "function" == typeof atob ? atob(e.data.content.replace(/\s/g, "")) : "Your browser cannot decode base64"
                }
                return null
            }), e(function(e, t) {
                if (e && e.meta && e.data && e.data.files) {
                    if (e.meta.status && e.meta.status >= 400) return "Error: " + (e.data.message || e.meta.status);
                    var n = t.getAttribute("data-filename");
                    if (null == n)
                        for (var a in e.data.files)
                            if (e.data.files.hasOwnProperty(a)) {
                                n = a;
                                break
                            }
                    return void 0 !== e.data.files[n] ? e.data.files[n].content : "Error: unknown or missing gist file " + n
                }
                return null
            }), e(function(e) {
                return e && e.node && "string" == typeof e.data ? e.data : null
            });
            var r = 0,
                i = "Loading…";
            n()
        }
    }(), "undefined" != typeof self && !self.Prism || "undefined" != typeof global && !global.Prism || Prism.hooks.add("wrap", function(e) {
        "keyword" === e.type && e.classes.push("keyword-" + e.content)
    }), "undefined" != typeof self && self.Prism && self.document && Prism.hooks.add("before-highlight", function(e) {
        if (e.code) {
            var t = e.element.parentNode,
                n = /\s*\bkeep-initial-line-feed\b\s*/;
            !t || "pre" !== t.nodeName.toLowerCase() || n.test(t.className) || n.test(e.element.className) || (e.code = e.code.replace(/^(?:\r?\n|\r)/, ""))
        }
    }),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document && document.createElement) {
            var e = {
                    javascript: "clike",
                    actionscript: "javascript",
                    aspnet: "markup",
                    bison: "c",
                    c: "clike",
                    csharp: "clike",
                    cpp: "c",
                    coffeescript: "javascript",
                    crystal: "ruby",
                    "css-extras": "css",
                    d: "clike",
                    dart: "clike",
                    fsharp: "clike",
                    glsl: "clike",
                    go: "clike",
                    groovy: "clike",
                    haml: "ruby",
                    handlebars: "markup",
                    haxe: "clike",
                    jade: "javascript",
                    java: "clike",
                    kotlin: "clike",
                    less: "css",
                    markdown: "markup",
                    nginx: "clike",
                    objectivec: "c",
                    parser: "markup",
                    php: "clike",
                    "php-extras": "php",
                    processing: "clike",
                    protobuf: "clike",
                    qore: "clike",
                    jsx: ["markup", "javascript"],
                    ruby: "clike",
                    sass: "css",
                    scss: "css",
                    scala: "java",
                    smarty: "markup",
                    swift: "clike",
                    textile: "markup",
                    twig: "markup",
                    typescript: "javascript",
                    wiki: "markup"
                },
                t = {},
                n = Prism.plugins.autoloader = {
                    languages_path: "components/",
                    use_minified: !0
                },
                a = function(e) {
                    return n.languages_path + "prism-" + e + (n.use_minified ? ".min" : "") + ".js"
                },
                r = function(e, t, n) {
                    "string" == typeof e && (e = [e]);
                    var a = 0,
                        r = e.length,
                        s = function() {
                            r > a ? i(e[a], function() {
                                a++, s()
                            }, function() {
                                n && n(e[a])
                            }) : a === r && t && t(e)
                        };
                    s()
                },
                i = function(n, i, l) {
                    var c = function() {
                            var e = !1;
                            n.indexOf("!") >= 0 && (e = !0, n = n.replace("!", ""));
                            var r = t[n];
                            if (r || (r = t[n] = {}), i && (r.success_callbacks || (r.success_callbacks = []), r.success_callbacks.push(i)), l && (r.error_callbacks || (r.error_callbacks = []), r.error_callbacks.push(l)), !e && Prism.languages[n]) s(n);
                            else if (!e && r.error) o(n);
                            else if (e || !r.loading) {
                                r.loading = !0,
                                    function(e, t, n) {
                                        var a = document.createElement("script");
                                        a.src = e, a.async = !0, a.onload = function() {
                                            document.body.removeChild(a), t && t()
                                        }, a.onerror = function() {
                                            document.body.removeChild(a), n && n()
                                        }, document.body.appendChild(a)
                                    }(a(n), function() {
                                        r.loading = !1, s(n)
                                    }, function() {
                                        r.loading = !1, r.error = !0, o(n)
                                    })
                            }
                        },
                        u = e[n];
                    u && u.length ? r(u, c) : c()
                },
                s = function(e) {
                    t[e] && t[e].success_callbacks && t[e].success_callbacks.length && t[e].success_callbacks.forEach(function(t) {
                        t(e)
                    })
                },
                o = function(e) {
                    t[e] && t[e].error_callbacks && t[e].error_callbacks.length && t[e].error_callbacks.forEach(function(t) {
                        t(e)
                    })
                };
            Prism.hooks.add("complete", function(e) {
                e.element && e.language && !e.grammar && function(e, n) {
                    var a = t[e];
                    a || (a = t[e] = {});
                    var s = n.getAttribute("data-dependencies");
                    !s && n.parentNode && "pre" === n.parentNode.tagName.toLowerCase() && (s = n.parentNode.getAttribute("data-dependencies")), s = s ? s.split(/\s*,\s*/g) : [], r(s, function() {
                        i(e, function() {
                            Prism.highlightElement(n)
                        })
                    })
                }(e.language, e.element)
            })
        }
    }(), "undefined" != typeof self && self.Prism && self.document && Prism.languages.markup && (Prism.plugins.UnescapedMarkup = !0, Prism.hooks.add("before-highlightall", function(e) {
        e.selector += ", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"
    }), Prism.hooks.add("before-sanity-check", function(e) {
        if ("markup" == e.language) {
            if (e.element.matches("script[type='text/plain']")) {
                var t = document.createElement("code");
                return (n = document.createElement("pre")).className = t.className = e.element.className, e.code = e.code.replace(/&lt;\/script(>|&gt;)/gi, "<\/script>"), t.textContent = e.code, n.appendChild(t), e.element.parentNode.replaceChild(n, e.element), void(e.element = t)
            }
            var n = e.element.parentNode;
            !e.code && n && "pre" == n.nodeName.toLowerCase() && e.element.childNodes.length && "#comment" == e.element.childNodes[0].nodeName && (e.element.textContent = e.code = e.element.childNodes[0].textContent)
        }
    })), "undefined" != typeof self && self.Prism && self.document && Prism.hooks.add("complete", function(e) {
        if (e.code) {
            var t = e.element.parentNode,
                n = /\s*\bcommand-line\b\s*/;
            if (t && /pre/i.test(t.nodeName) && (n.test(t.className) || n.test(e.element.className)) && !e.element.querySelector(".command-line-prompt")) {
                n.test(e.element.className) && (e.element.className = e.element.className.replace(n, "")), n.test(t.className) || (t.className += " command-line");
                var a = new Array(1 + e.code.split("\n").length),
                    r = t.getAttribute("data-prompt") || "";
                if ("" !== r) a = a.join('<span data-prompt="' + r + '"></span>');
                else {
                    var i = t.getAttribute("data-user") || "user",
                        s = t.getAttribute("data-host") || "localhost";
                    a = a.join('<span data-user="' + i + '" data-host="' + s + '"></span>')
                }
                var o = document.createElement("span");
                o.className = "command-line-prompt", o.innerHTML = a;
                var l = t.getAttribute("data-output") || "";
                l = l.split(",");
                for (var c = 0; c < l.length; c++) {
                    var u = l[c].split("-"),
                        d = parseInt(u[0]),
                        p = d;
                    if (2 === u.length && (p = parseInt(u[1])), !isNaN(d) && !isNaN(p))
                        for (var m = d; p >= m && m <= o.children.length; m++) {
                            var g = o.children[m - 1];
                            g.removeAttribute("data-user"), g.removeAttribute("data-host"), g.removeAttribute("data-prompt")
                        }
                }
                e.element.innerHTML = o.outerHTML + e.element.innerHTML
            }
        }
    }),
    function() {
        function e(e) {
            this.defaults = a({}, e)
        }

        function t(e) {
            return e.replace(/-(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }

        function n(e) {
            for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
            return e.length + t
        }
        if ("undefined" != typeof self && self.Prism && self.document) {
            var a = Object.assign || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            };
            e.prototype = {
                setDefaults: function(e) {
                    this.defaults = a(this.defaults, e)
                },
                normalize: function(e, n) {
                    for (var r in n = a(this.defaults, n)) {
                        var i = t(r);
                        "normalize" !== r && "setDefaults" !== i && n[r] && this[i] && (e = this[i].call(this, e, n[r]))
                    }
                    return e
                },
                leftTrim: function(e) {
                    return e.replace(/^\s+/, "")
                },
                rightTrim: function(e) {
                    return e.replace(/\s+$/, "")
                },
                tabsToSpaces: function(e, t) {
                    return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
                },
                spacesToTabs: function(e, t) {
                    return t = 0 | t || 4, e.replace(new RegExp(" {" + t + "}", "g"), "\t")
                },
                removeTrailing: function(e) {
                    return e.replace(/\s*?$/gm, "")
                },
                removeInitialLineFeed: function(e) {
                    return e.replace(/^(?:\r?\n|\r)/, "")
                },
                removeIndent: function(e) {
                    var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                    return t && t[0].length ? (t.sort(function(e, t) {
                        return e.length - t.length
                    }), t[0].length ? e.replace(new RegExp("^" + t[0], "gm"), "") : e) : e
                },
                indent: function(e, t) {
                    return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
                },
                breakLines: function(e, t) {
                    t = !0 === t ? 80 : 0 | t || 80;
                    for (var a = e.split("\n"), r = 0; r < a.length; ++r)
                        if (!(n(a[r]) <= t)) {
                            for (var i = a[r].split(/(\s+)/g), s = 0, o = 0; o < i.length; ++o) {
                                var l = n(i[o]);
                                (s += l) > t && (i[o] = "\n" + i[o], s = l)
                            }
                            a[r] = i.join("")
                        }
                    return a.join("\n")
                }
            }, Prism.plugins.NormalizeWhitespace = new e({
                "remove-trailing": !0,
                "remove-indent": !0,
                "left-trim": !0,
                "right-trim": !0
            }), Prism.hooks.add("before-highlight", function(e) {
                var t = e.element.parentNode;
                if (e.code && t && "pre" === t.nodeName.toLowerCase() && (!e.settings || !1 !== e.settings["whitespace-normalization"])) {
                    for (var n = t.childNodes, a = "", r = "", i = !1, s = Prism.plugins.NormalizeWhitespace, o = 0; o < n.length; ++o) {
                        var l = n[o];
                        l == e.element ? i = !0 : "#text" === l.nodeName && (i ? r += l.nodeValue : a += l.nodeValue, t.removeChild(l), --o)
                    }
                    if (e.element.children.length && Prism.plugins.KeepMarkup) {
                        var c = a + e.element.innerHTML + r;
                        e.element.innerHTML = s.normalize(c, e.settings), e.code = e.element.textContent
                    } else e.code = a + e.code + r, e.code = s.normalize(e.code, e.settings)
                }
            })
        }
    }(), "undefined" != typeof self && self.Prism && self.document && document.createRange && (Prism.plugins.KeepMarkup = !0, Prism.hooks.add("before-highlight", function(e) {
        if (e.element.children.length) {
            var t = 0,
                n = [],
                a = function(e, r) {
                    var i = {};
                    r || (i.clone = e.cloneNode(!1), i.posOpen = t, n.push(i));
                    for (var s = 0, o = e.childNodes.length; o > s; s++) {
                        var l = e.childNodes[s];
                        1 === l.nodeType ? a(l) : 3 === l.nodeType && (t += l.data.length)
                    }
                    r || (i.posClose = t)
                };
            a(e.element, !0), n && n.length && (e.keepMarkup = n)
        }
    }), Prism.hooks.add("after-highlight", function(e) {
        if (e.keepMarkup && e.keepMarkup.length) {
            var t = function(e, n) {
                for (var a = 0, r = e.childNodes.length; r > a; a++) {
                    var i = e.childNodes[a];
                    if (1 === i.nodeType) {
                        if (!t(i, n)) return !1
                    } else 3 === i.nodeType && (!n.nodeStart && n.pos + i.data.length > n.node.posOpen && (n.nodeStart = i, n.nodeStartPos = n.node.posOpen - n.pos), n.nodeStart && n.pos + i.data.length >= n.node.posClose && (n.nodeEnd = i, n.nodeEndPos = n.node.posClose - n.pos), n.pos += i.data.length);
                    if (n.nodeStart && n.nodeEnd) {
                        var s = document.createRange();
                        return s.setStart(n.nodeStart, n.nodeStartPos), s.setEnd(n.nodeEnd, n.nodeEndPos), n.node.clone.appendChild(s.extractContents()), s.insertNode(n.node.clone), s.detach(), !1
                    }
                }
                return !0
            };
            e.keepMarkup.forEach(function(n) {
                t(e.element, {
                    node: n,
                    pos: 0
                })
            })
        }
    }));