! function(e) {
    var a = {};

    function t(n) {
        if (a[n]) return a[n].exports;
        var s = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports
    }
    t.m = e, t.c = a, t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, a) {
        if (1 & a && (e = t(e)), 8 & a) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var s in e) t.d(n, s, function(a) {
                return e[a]
            }.bind(null, s));
        return n
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, t.p = "/demo/vuexy-bootstrap-laravel-admin-template/demo-1/", t(t.s = 1)
}({
    "+f2w": function(e, a) {
        ! function(e, a, t) {
            "use strict";
            var n = t("html"),
                s = t("body"),
                i = "#ea5455",
                o = "#7367f0",
                l = "#4e5154";
            if (t(e).on("load", (function() {
                    var e = !1;
                    s.hasClass("menu-collapsed") && (e = !0), t("html").data("textdirection"), setTimeout((function() {
                        n.removeClass("loading").addClass("loaded")
                    }), 1200), t.app.menu.init(e);
                    !1 === t.app.nav.initialized && t.app.nav.init({
                        speed: 300
                    }), Unison.on("change", (function(e) {
                        t.app.menu.change()
                    })), t('[data-toggle="tooltip"]').tooltip({
                        container: "body"
                    }), t(".navbar-hide-on-scroll").length > 0 && (t(".navbar-hide-on-scroll.fixed-top").headroom({
                        offset: 205,
                        tolerance: 5,
                        classes: {
                            initial: "headroom",
                            pinned: "headroom--pinned-top",
                            unpinned: "headroom--unpinned-top"
                        }
                    }), t(".navbar-hide-on-scroll.fixed-bottom").headroom({
                        offset: 205,
                        tolerance: 5,
                        classes: {
                            initial: "headroom",
                            pinned: "headroom--pinned-bottom",
                            unpinned: "headroom--unpinned-bottom"
                        }
                    })), t('a[data-action="collapse"]').on("click", (function(e) {
                        e.preventDefault(), t(this).closest(".card").children(".card-content").collapse("toggle"), t(this).closest(".card").children(".card-header").css("padding-bottom", "1.5rem"), t(this).closest(".card").find('[data-action="collapse"]').toggleClass("rotate")
                    })), t('a[data-action="expand"]').on("click", (function(e) {
                        e.preventDefault(), t(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-maximize icon-minimize"), t(this).closest(".card").toggleClass("card-fullscreen")
                    })), t(".scrollable-container").each((function() {
                        new PerfectScrollbar(t(this)[0], {
                            wheelPropagation: !1
                        })
                    })), t('a[data-action="reload"]').on("click", (function() {
                        var e = t(this).closest(".card").find(".card-content");
                        if (s.hasClass("dark-layout")) var a = "#10163a";
                        else a = "#fff";
                        e.block({
                            message: '<div class="feather icon-refresh-cw icon-spin font-medium-2 text-primary"></div>',
                            timeout: 2e3,
                            overlayCSS: {
                                backgroundColor: a,
                                cursor: "wait"
                            },
                            css: {
                                border: 0,
                                padding: 0,
                                backgroundColor: "none"
                            }
                        })
                    })), t('a[data-action="close"]').on("click", (function() {
                        t(this).closest(".card").removeClass().slideUp("fast")
                    })), setTimeout((function() {
                        t(".row.match-height").each((function() {
                            t(this).find(".card").not(".card .card").matchHeight()
                        }))
                    }), 500), t('.card .heading-elements a[data-action="collapse"]').on("click", (function() {
                        var e, a = t(this).closest(".card");
                        parseInt(a[0].style.height, 10) > 0 ? (e = a.css("height"), a.css("height", "").attr("data-height", e)) : a.data("height") && (e = a.data("height"), a.css("height", e).attr("data-height", ""))
                    })), t(".main-menu-content").find("li.active").parents("li").addClass("sidebar-group-active");
                    var r = s.data("menu");
                    "horizontal-menu" != r && !1 === e && t(".main-menu-content").find("li.active").parents("li").addClass("open"), "horizontal-menu" == r && (t(".main-menu-content").find("li.active").parents("li:not(.nav-item)").addClass("open"), t(".main-menu-content").find("li.active").closest("li.nav-item").addClass("sidebar-group-active open")), t(".heading-elements-toggle").on("click", (function() {
                        t(this).next(".heading-elements").toggleClass("visible")
                    }));
                    var c = t(".chartjs"),
                        d = c.children("canvas").attr("height"),
                        u = t(".main-menu");
                    if (c.css("height", d), s.hasClass("boxed-layout") && s.hasClass("vertical-overlay-menu")) {
                        var h = u.width(),
                            m = t(".app-content").position().left - h;
                        s.hasClass("menu-flipped") ? u.css("right", m + "px") : u.css("left", m + "px")
                    }
                    t(".custom-file input").change((function(e) {
                        t(this).next(".custom-file-label").html(e.target.files[0].name)
                    })), t(".char-textarea").on("keyup", (function(e) {
                        ! function(e, a) {
                            var n = parseInt(t(e).data("length")),
                                s = t(".counter-value"),
                                r = t(".char-textarea");
                            (function(e) {
                                return 8 == e.keyCode || 46 == e.keyCode || 37 == e.keyCode || 38 == e.keyCode || 39 == e.keyCode || 40 == e.keyCode
                            })(a) || e.value.length < n - 1 && (e.value = e.value.substring(0, n));
                            t(".char-count").html(e.value.length), e.value.length > n ? (s.css("background-color", i), r.css("color", i), r.addClass("max-limit")) : (s.css("background-color", o), r.css("color", l), r.removeClass("max-limit"))
                        }(this, e), t(this).addClass("active")
                    })), t(".content-overlay").on("click", (function() {
                        t(".search-list").removeClass("show"), t(".app-content").removeClass("show-overlay"), t(".bookmark-wrapper .bookmark-input").removeClass("show")
                    }));
                    var f = a.getElementsByClassName("main-menu-content");
                    f.length > 0 && f[0].addEventListener("ps-scroll-y", (function() {
                        t(this).find(".ps__thumb-y").position().top > 0 ? t(".shadow-bottom").css("display", "block") : t(".shadow-bottom").css("display", "none")
                    }))
                })), t(a).on("click", ".sidenav-overlay", (function(e) {
                    return t.app.menu.hide(), !1
                })), "undefined" != typeof Hammer) {
                var r = a.querySelector(".drag-target");
                if (t(r).length > 0) new Hammer(r).on("panright", (function(e) {
                    if (s.hasClass("vertical-overlay-menu")) return t.app.menu.open(), !1
                }));
                setTimeout((function() {
                    var e, n = a.querySelector(".main-menu");
                    t(n).length > 0 && ((e = new Hammer(n)).get("pan").set({
                        direction: Hammer.DIRECTION_ALL,
                        threshold: 100
                    }), e.on("panleft", (function(e) {
                        if (s.hasClass("vertical-overlay-menu")) return t.app.menu.hide(), !1
                    })))
                }), 300);
                var c = a.querySelector(".sidenav-overlay");
                if (t(c).length > 0) new Hammer(c).on("panleft", (function(e) {
                    if (s.hasClass("vertical-overlay-menu")) return t.app.menu.hide(), !1
                }))
            }
            t(a).on("click", ".menu-toggle, .modern-nav-toggle", (function(a) {
                return a.preventDefault(), t.app.menu.toggle(), setTimeout((function() {
                    t(e).trigger("resize")
                }), 200), t("#collapse-sidebar-switch").length > 0 && setTimeout((function() {
                    s.hasClass("menu-expanded") || s.hasClass("menu-open") ? t("#collapse-sidebar-switch").prop("checked", !1) : t("#collapse-sidebar-switch").prop("checked", !0)
                }), 50), t(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").hasClass("show") && t(".vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse").removeClass("show"), !1
            })), t(".navigation").find("li").has("ul").addClass("has-sub"), t(".carousel").carousel({
                interval: 2e3
            }), t(".nav-link-expand").on("click", (function(e) {
                "undefined" != typeof screenfull && screenfull.isEnabled && screenfull.toggle()
            })), "undefined" != typeof screenfull && screenfull.isEnabled && t(a).on(screenfull.raw.fullscreenchange, (function() {
                screenfull.isFullscreen ? (t(".nav-link-expand").find("i").toggleClass("icon-minimize icon-maximize"), t("html").addClass("full-screen")) : (t(".nav-link-expand").find("i").toggleClass("icon-maximize icon-minimize"), t("html").removeClass("full-screen"))
            })), t(a).ready((function() {
                t(".step-icon").each((function() {
                    var e = t(this);
                    e.siblings("span.step").length > 0 && (e.siblings("span.step").empty(), t(this).appendTo(t(this).siblings("span.step")))
                }))
            })), t(e).resize((function() {
                t.app.menu.manualScroller.updateHeight()
            })), t("#sidebar-page-navigation").on("click", "a.nav-link", (function(e) {
                e.preventDefault(), e.stopPropagation();
                var a = t(this),
                    n = a.attr("href"),
                    s = t(n).offset().top - 80;
                t("html, body").animate({
                    scrollTop: s
                }, 0), setTimeout((function() {
                    a.parent(".nav-item").siblings(".nav-item").children(".nav-link").removeClass("active"), a.addClass("active")
                }), 100)
            })), i18next.use(e.i18nextXHRBackend).init({
                debug: !1,
                fallbackLng: "en",
                backend: {
                    loadPath: "data/locales/{{lng}}.json"
                },
                returnObjects: !0
            }, (function(e, a) {
                jqueryI18next.init(i18next, t)
            })), t(".dropdown-language .dropdown-item").on("click", (function() {
                var e = t(this);
                e.siblings(".selected").removeClass("selected"), e.addClass("selected");
                var a = e.text(),
                    n = e.find(".flag-icon").attr("class");
                t("#dropdown-flag .selected-language").text(a), t("#dropdown-flag .flag-icon").removeClass().addClass(n);
                var s = e.data("language");
                i18next.changeLanguage(s, (function(e, a) {
                    t(".main-menu, .horizontal-menu-wrapper").localize()
                }))
            }));
            var d = t(".search-input input").data("search"),
                u = t(".bookmark-wrapper"),
                h = t(".bookmark-wrapper .bookmark-star"),
                m = t(".bookmark-wrapper .bookmark-input"),
                f = t(".nav-link-search"),
                p = t(".search-input"),
                v = t(".search-input input"),
                g = t(".search-input .search-list"),
                C = t(".app-content"),
                b = t(".bookmark-input .search-list");
            if (h.on("click", (function(e) {
                    e.stopPropagation(), m.toggleClass("show"), m.find("input").val(""), m.find("input").blur(), m.find("input").focus(), u.find(".search-list").addClass("show");
                    var a = t("ul.nav.navbar-nav.bookmark-icons li"),
                        n = "";
                    t("ul.search-list li").remove();
                    for (var s = 0; s < a.length; s++) n += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer ' + (0 === s ? "current_item" : "") + '"><a class="d-flex align-items-center justify-content-between w-100" href=' + a[s].firstChild.href + '><div class="d-flex justify-content-start align-items-center"><span class="mr-75 ' + a[s].firstChild.firstChild.className + '"  data-icon="' + a[s].firstChild.firstChild.className + '"></span><span>' + a[s].firstChild.dataset.originalTitle + '</span></div><span class="float-right bookmark-icon feather icon-star warning"></span></a></li>';
                    t("ul.search-list").append(n)
                })), f.on("click", (function() {
                    t(this);
                    t(this).parent(".nav-search").find(".search-input").addClass("open"), v.focus(), g.find("li").remove(), m.removeClass("show")
                })), t(".search-input-close i").on("click", (function() {
                    t(this);
                    var e = t(this).closest(".search-input");
                    e.hasClass("open") && (e.removeClass("open"), v.val(""), v.blur(), g.removeClass("show"), C.removeClass("show-overlay"))
                })), t(".search-list-main").length) var k = new PerfectScrollbar(".search-list-main", {
                wheelPropagation: !1
            });
            if (t(".search-list-bookmark").length) new PerfectScrollbar(".search-list-bookmark", {
                wheelPropagation: !1
            });
            t(".search-list-main").mouseenter((function() {
                k.update()
            })), v.on("keyup", (function(e) {
                if (t(this).closest(".search-list").addClass("show"), 38 !== e.keyCode && 40 !== e.keyCode && 13 !== e.keyCode) {
                    27 == e.keyCode && (C.removeClass("show-overlay"), m.find("input").val(""), m.find("input").blur(), v.val(""), v.blur(), p.removeClass("open"), p.hasClass("show") && (t(this).removeClass("show"), p.removeClass("show")));
                    var a = t(this).val().toLowerCase(),
                        n = "",
                        s = !1;
                    if (t("ul.search-list li").remove(), t(this).parent().hasClass("bookmark-input") && (s = !0), "" != a) {
                        C.addClass("show-overlay"), m.focus() ? b.addClass("show") : (g.addClass("show"), b.removeClass("show")), !1 === s && (g.addClass("show"), b.removeClass("show"));
                        var i = "",
                            o = "",
                            l = "",
                            r = "",
                            c = '<li class=" d-flex align-items-center"><a href="#" class="pb-25"><h6 class="text-primary mb-0">Pages</h6></a></li>',
                            u = "",
                            h = "",
                            f = 0;
                        t.getJSON("data/" + d + ".json", (function(e) {
                            for (var d = 0; d < e.listItems.length; d++) {
                                if (!0 === s) {
                                    n = "";
                                    for (var m = t("ul.nav.navbar-nav.bookmark-icons li"), p = 0; p < m.length; p++) {
                                        if (e.listItems[d].name === m[p].firstChild.dataset.originalTitle) {
                                            n = " warning";
                                            break
                                        }
                                        n = ""
                                    }
                                    u = '<span class="float-right bookmark-icon feather icon-star' + n + '"></span>'
                                }
                                0 == e.listItems[d].name.toLowerCase().indexOf(a) && f < 5 && (i += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer ' + (0 === f ? "current_item" : "") + '"><a class="d-flex align-items-center justify-content-between w-100" href=' + e.listItems[d].url + '><div class="d-flex justify-content-start align-items-center"><span class="mr-75 ' + e.listItems[d].icon + '" data-icon="' + e.listItems[d].icon + '"></span><span>' + e.listItems[d].name + "</span></div>" + u + "</a></li>", f++)
                            }
                            for (d = 0; d < e.listItems.length; d++) {
                                if (!0 === s) {
                                    n = "";
                                    for (m = t("ul.nav.navbar-nav.bookmark-icons li"), p = 0; p < m.length; p++) n = e.listItems[d].name === m[p].firstChild.dataset.originalTitle ? " warning" : "";
                                    u = '<span class="float-right bookmark-icon feather icon-star' + n + '"></span>'
                                }
                                0 != e.listItems[d].name.toLowerCase().indexOf(a) && e.listItems[d].name.toLowerCase().indexOf(a) > -1 && f < 5 && (o += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer ' + (0 === f ? "current_item" : "") + '"><a class="d-flex align-items-center justify-content-between w-100" href=' + e.listItems[d].url + '><div class="d-flex justify-content-start align-items-center"><span class="mr-75 ' + e.listItems[d].icon + '" data-icon="' + e.listItems[d].icon + '"></span><span>' + e.listItems[d].name + "</span></div>" + u + "</a></li>", f++)
                            }
                            h = t(".main-search-list-defaultlist").html(), "" == i && "" == o && (o = t(".main-search-list-defaultlist-other-list").html()), l = c.concat(i, o, h), t("ul.search-list").html(l), r = i.concat(o), t("ul.search-list-bookmark").html(r)
                        }))
                    } else if (!0 === s) {
                        for (var k = t("ul.nav.navbar-nav.bookmark-iconss li"), w = "", y = 0; y < k.length; y++) 0 === y ? "current_item" : "", w += '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer"><a class="d-flex align-items-center justify-content-between w-100" href=' + k[y].firstChild.href + '><div class="d-flex justify-content-start align-items-center"><span class="mr-75 ' + k[y].firstChild.firstChild.className + '"  data-icon="' + k[y].firstChild.firstChild.className + '"></span><span>' + k[y].firstChild.dataset.originalTitle + '</span></div><span class="float-right bookmark-icon feather icon-star warning"></span></a></li>';
                        t("ul.search-list").append(w)
                    } else C.hasClass("show-overlay") && C.removeClass("show-overlay"), g.hasClass("show") && g.removeClass("show")
                }
            })), t(a).on("mouseenter", ".search-list li", (function(e) {
                t(this).siblings().removeClass("current_item"), t(this).addClass("current_item")
            })), t(a).on("click", ".search-list li", (function(e) {
                e.stopPropagation()
            })), t("html").on("click", (function(e) {
                t(e.target).hasClass("bookmark-icon") || (b.hasClass("show") && b.removeClass("show"), m.hasClass("show") && m.removeClass("show"))
            })), t(a).on("click", ".bookmark-input input", (function(e) {
                m.addClass("show"), b.addClass("show")
            })), t(a).on("click", ".bookmark-input .search-list .bookmark-icon", (function(e) {
                if (e.stopPropagation(), t(this).hasClass("warning")) {
                    t(this).removeClass("warning");
                    for (var a = t("ul.nav.navbar-nav.bookmark-icons li"), n = 0; n < a.length; n++) a[n].firstChild.dataset.originalTitle == t(this).parent()[0].innerText && a[n].remove();
                    e.preventDefault()
                } else {
                    a = t("ul.nav.navbar-nav.bookmark-icons li");
                    t(this).addClass("warning"), e.preventDefault();
                    var s;
                    s = '<li class="nav-item d-none d-lg-block"><a class="nav-link" href="' + t(this).parent()[0].href + '" data-toggle="tooltip" data-placement="top" title="" data-original-title="' + t(this).parent()[0].innerText + '"><i class="ficon ' + t(this).parent()[0].firstChild.firstChild.dataset.icon + '"></i></a></li>', t("ul.nav.bookmark-icons").append(s), t('[data-toggle="tooltip"]').tooltip()
                }
            })), t(e).on("keydown", (function(a) {
                var n, s, i = t(".search-list li.current_item");
                if (40 === a.keyCode ? (n = i.next(), i.removeClass("current_item"), i = n.addClass("current_item")) : 38 === a.keyCode && (s = i.prev(), i.removeClass("current_item"), i = s.addClass("current_item")), 13 === a.keyCode && t(".search-list li.current_item").length > 0) {
                    var o = t(".search-list li.current_item a");
                    e.location = o.attr("href"), t(o).trigger("click")
                }
            })), Waves.init(), Waves.attach(".btn", ["waves-light"])
        }(window, document, jQuery)
    },
    1: function(e, a, t) {
        e.exports = t("+f2w")
    }
});