! function(o, e, n) {
    var a = n(".alert-validation"),
        r = /^[0-9]+$/,
        c = n(".alert-validation-msg"),
        l = n(".accordion"),
        t = (n(".collapse-title"), n(".collapse-hover-title")),
        d = n(".dropdown-icon-wrapper .dropdown-item");
    a.on("input", function() {
        a.val().match(r) ? c.css("display", "none") : c.css("display", "block")
    }), n(e).on("keyup", function(o) {
        39 == o.which ? n('.carousel[data-keyboard="true"]').carousel("next") : 37 == o.which && n('.carousel[data-keyboard="true"]').carousel("prev")
    }), l.attr("data-toggle-hover", "true") && t.closest(".card").on("mouseenter", function() {
        n(this).children(".collapse").collapse("show")
    }), n(".accordion-shadow .collapse-header .card-header").on("click", function() {
        var o = n(this);
        o.parent().siblings(".collapse-header.open").removeClass("open"), o.parent(".collapse-header").toggleClass("open")
    }), d.on("click", function() {
        n(".dropdown-icon-wrapper .dropdown-toggle i").remove(), n(this).find("i").clone().appendTo(".dropdown-icon-wrapper .dropdown-toggle"), n(".dropdown-icon-wrapper .dropdown-toggle .dropdown-item").removeClass("dropdown-item")
    }), n(".chip-closeable").on("click", function() {
        n(this).closest(".chip").remove()
    })
}(window, document, jQuery);