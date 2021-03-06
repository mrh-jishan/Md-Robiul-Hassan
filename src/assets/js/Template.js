var Template = {
    googleMapConfig: {markerLocation: {lat: -34.397, lng: 150.644}, zoom: 8},
    disableAjaxNavigation: !1,
    disableAjaxNavigationMatches: [/^http(s)?\:\/\//, /\.pdf$/],
    init: function () {
        if (!this._inited) {
            var a = this,
                b = this.layout.init({customScrollEnabled: !this.tools.isTouch(), scrollContainer: ".layout"});
            b && this._applyLayoutTitlePatch(), this.menu.init({
                disableAjaxNavigation: this.disableAjaxNavigation,
                disableAjaxNavigationMatches: this.disableAjaxNavigationMatches,
                on: {
                    itemActivate: function () {
                        a.layout.scrollTo("top")
                    }
                }
            }), this._applyFooterSidebarPatch()
        }
        this.initSharrres({itemsSelector: "#shareBoxContainer .share-box__item[data-btntype]"}), this.shortcodes.init(), this.initResume(), this.initPortfolio(), this.initBlog(), this.initGoogleMap(), this.initContactFormValidation(), this._inited || (this._inited = !0)
    },
    initResume: function () {
        var a = $(".accordion-item");
        if (!(a.length < 1 || a.data("scrollerInited"))) {
            a.data("scrollerInited", !0);
            var b = this, c = a.parents("section").find(".layout-title");
            a.on({
                "show.bs.collapse": function () {
                    if ("fixed" == c.css("position")) {
                        var a = $(this);
                        setTimeout(function () {
                            var d = c.height();
                            b.layout.scrollTo(a.position().top - d, {scrollInertia: 200})
                        }, 500)
                    }
                }
            })
        }
    },
    initSharrres: function (a) {
        if ("function" == typeof $.fn.sharrre && a && "object" == typeof a && a.itemsSelector) {
            var b = a.urlCurl ? a.urlCurl : "", c = $(a.itemsSelector);
            c.length < 1 || (c.each(function () {
                var a = $(this), c = a.data("btntype"), d = {
                    urlCurl: b,
                    enableHover: !1,
                    enableTracking: !0,
                    url: document.location.href,
                    share: {},
                    click: function (a) {
                        a.simulateClick(), a.openPopup(c)
                    }
                };
                d.share[c] = !0, a.sharrre(d)
            }), setTimeout(function () {
                $("a.share,a.count", a.itemsSelector).attr("href", "javascript:void(0)")
            }, 1500))
        }
    },
    initBlog: function () {
        this._initAjaxPagesLoading($("section.blog"))
    },
    initPortfolio: function () {
        $(".page-portfolio__item").each(function () {
            $(this).hoverdir({hoverDelay: 50})
        }), this._initAjaxPagesLoading($("section.page-portfolio"))
    },
    initGoogleMap: function () {
        var a = document.getElementById("savvyMapCanvas");
        if (a) {
            var b = this.googleMapConfig || {}, c = jQuery.extend({lat: -34.397, lng: 150.644}, b.markerLocation || {}),
                d = new google.maps.LatLng(c.lat, c.lng), e = new google.maps.Map(a, {
                    zoom: b.zoom ? b.zoom : 8,
                    center: d,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1
                }), f = $(a).css("color"), g = b.markerIcon ? b.markerIcon : {
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    fillColor: f ? f : "#ee0000",
                    fillOpacity: 1,
                    strokeWeight: 0,
                    scale: 12
                };
            new google.maps.Marker({map: e, icon: g, clickable: !1, position: d})
        }
    },
    initContactFormValidation: function () {
        var a = $("#contactForm");
        if (!(a.length < 1 || a.data("_inited"))) {
            a.data("_inited", !0);
            var b = function (b) {
                    a.find("input,textarea,select").each(function () {
                        var a = $(this), d = a.attr("name"), e = a.parent(), f = e.find(".form__item__failed-wrap");
                        if (f.length) {
                            var g = b && b[d] ? b[d] : "";
                            f.text(g), g ? e.addClass(c) : e.removeClass(c)
                        }
                    })
                }, c = "form__item--invalid", d = "form__status--success", e = "form__status--error",
                f = a.find(".form__status"), g = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            a.on("submit", function (c) {
                c.preventDefault();
                var h = a.serializeArray(), i = {};
                return $.each(h, function (a, b) {
                    var c = b.name, d = b.value;
                    d.trim() ? "email" == c && g && !g.test(d) && (i[c] = "Email address seems invalid.") : i[c] = "Please fill the required field."
                }), f.removeClass(d + " " + e), b(i), jQuery.isEmptyObject(i) && $.ajax({
                    type: a.attr("method") || "get",
                    url: a.attr("action") || window.location.href,
                    data: $.param(h),
                    dataType: "json",
                    complete: function (c, g) {
                        var h = c.responseJSON ? c.responseJSON : {};
                        if (b(h.errors || {}), "success" == g && h.success) f.addClass(d).text(h.message || "Your message was sent successfully. Thanks."), a.trigger("reset"); else {
                            var i = h.errors && h.errors.status ? h.errors.status : "Failed to send your message. Please try later or contact the administrator by another method.";
                            f.addClass(e).text(i)
                        }
                    }
                }), !1
            })
        }
    },
    _initAjaxPagesLoading: function (a, b) {
        if (a && !this.menu.isFileProtocol() && !this.disableAjaxNavigation) {
            b || (b = "a");
            var c = this.menu;
            $(b, a).click(function (a) {
                if (!(a.which > 1 || a.ctrlKey)) {
                    var b = $(this), d = b.attr("href");
                    if (!b.attr("target") && !b.data("disableajax")) {
                        if (c.disableAjaxNavigationMatches) {
                            var e, f = c.disableAjaxNavigationMatches;
                            for (e = 0; e < f.length; e++) if (f[e].test(d)) return
                        }
                        a.preventDefault(), c.setHashValue(d)
                    }
                }
            })
        }
    },
    _applyFooterSidebarPatch: function () {
        if (this.tools.isTouch() && /iPad/i.test(navigator.userAgent)) {
            var a = !1;
            $(window).on("resize", function () {
                a || (a = !0, $(".sidebar .footer").hide().delay(1e3).fadeIn("slow", function () {
                    a = !1
                }))
            })
        }
    },
    _applyLayoutTitlePatch: function () {
        if (this.tools.isIe() || /firefox/i.test(navigator.userAgent)) {
            var a, b = function () {
                a || (a = $("<style />").appendTo("head"));
                var b = $(".layout-header"), c = b.position(), d = c ? c.top + b.height() : 0;
                d && a.text(".layout-title{top:" + d + "px;}")
            };
            $(window).on("resize", b), b()
        }
    }
};
Template.menu = {
    menuSelector: ".main-nav",
    menuItemsSelector: ".main-nav__item",
    menuLinksSelector: ".main-nav__item a",
    sliderSelector: "#headerMenuSlidingElement",
    currenMenuItemClass: "main-nav__item--active",
    pageClassContainerSelector: ".layout-body",
    disableAjaxNavigation: !1,
    _ignoredFramnent: null,
    init: function (a) {
        if (!this._inited && (this._inited = !0, a && (a.on && ($(this).on(a.on), delete a.on), $.isEmptyObject(a) || $.extend(this, a)), this._initMainMenu(), this._initMobileMenu(), !this.disableAjaxNavigation)) {
            var b = this;
            $(window).on("hashchange", function (a) {
                b.loadPage(a.fragment)
            })
        }
    },
    getHeaderMenu: function (a) {
        return $(this.menuSelector, a ? a : document)
    },
    getMenuItems: function (a, b) {
        return this.getHeaderMenu(b).find(a ? this.menuLinksSelector : this.menuItemsSelector)
    },
    getSlider: function () {
        return $(this.sliderSelector)
    },
    loadPage: function (a) {
        return this.disableAjaxNavigation || this.isFileProtocol() ? void (document.location = a) : void (this._isIgnoredFragment(a) || $.ajax(a, {
            success: function (a) {
                var b = this.isIe(9), c = document.createElement(b ? "xhtml" : "html");
                c.innerHTML = a;
                var d = $("head title", c);
                d.length && $("head title").text(d.text());
                var e = this.getMenuItems(!1, c).filter("." + this.currenMenuItemClass).find("a"), f = "flap";
                if (e.length) {
                    var g = this.getMenuItems(!0).filter('[href="' + e.attr("href") + '"]');
                    if (g.length > 0) {
                        var h = this.getMenuItems().filter("." + this.currenMenuItemClass).find("a");
                        h.length && h.attr("href") != g.attr("href") && "fixed" == $(".layout-sidebar").css("position") && (f = h.position().left < g.position().left ? "slideLeft" : "slideRight"), g.trigger("activate")
                    }
                }
                var i = $(c).find("section"), j = $("section");
                $(this).trigger("pageLoaded"), this._replaceSection(j, i, f)
            }, context: this
        }))
    },
    isFileProtocol: function () {
        return "file:" == document.location.protocol
    },
    isIe: function () {
        return Template.tools.isIe.apply(Template.tools, arguments)
    },
    setHashValue: function (a) {
        this.disableAjaxNavigation && (document.location = a);
        var b = a;
        /^#/.test(a) && (b = a.replace(/^#/, ""), this._setIgnoredFragment(b)), b ? (/#.+/.test(b) && (document.location = b), document.location.hash = "#" + b) : document.location.hash = ""
    },
    _isIgnoredFragment: function (a) {
        return null !== this._ignoredFramnent && this._ignoredFramnent === a ? (this._ignoredFramnent = null, !0) : !1
    },
    _setIgnoredFragment: function (a) {
        this._ignoredFramnent = a
    },
    _replaceSection: function (a, b, c) {
        var d = 1200,
            e = this.pageClassContainerSelector ? b.parents(this.pageClassContainerSelector).attr("class") : "";
        switch (c) {
            case"slideLeft":
            case"slideRight":
                var f = a.parent(), g = a.parents(".layout-container-main");
                g.css({height: Math.max(f.height(), $(".sidebar").height())});
                var h = "slideLeft" == c ? "right" : "left",
                    i = $('<div><div class="slot1"></div><div class="slot2"></div></div>').css({
                        position: "absolute",
                        top: 0,
                        width: 2 * f.width(),
                        height: f.height()
                    }).css(h, 0), j = i.find(".slot1, .slot2").css({width: "50%", "float": "left"}),
                    k = {forNew: j.eq("slideLeft" == c ? 0 : 1), forOld: j.eq("slideLeft" == c ? 1 : 0)},
                    l = {duration: d};
                l[h] = -1 * f.width(), b.appendTo(k.forNew), a.appendTo(k.forOld);
                var m = "layout-title--page-switching";
                m && i.find(".layout-title").addClass(m), i.appendTo(f), this._applyContainerBg(e), i.animate(l, function () {
                    b.appendTo(f), i.remove(), m && b.find("." + m).removeClass(m), g.css({height: "auto"}), Template.init()
                });
                break;
            case"flap":
                var f = a.parents(".layout-container-main"), n = f.parent().height(), o = this;
                f.animate({height: 10, duration: d}, function () {
                    a.replaceWith(b), o._applyContainerBg(e), f.animate({height: n, duration: 400}, function () {
                        f.css({height: "auto"}), Template.init()
                    })
                });
                break;
            case"fade":
                var o = this;
                a.fadeOut(d, function () {
                    b.hide(), a.replaceWith(b), o._applyContainerBg(e), b.fadeIn(function () {
                        Template.init()
                    })
                });
                break;
            case"none":
            default:
                a.replaceWith(b), this._applyContainerBg(e)
        }
    },
    _initMainMenu: function () {
        var a = this.getSlider(), b = this.getMenuItems(), c = this;
        b.on("activate", function (b, d) {
            var e = $(this), f = e.position();
            animDuration = d && d.noAnimation ? 0 : 300, newSliderWidth = e.outerWidth() + 2, $(c).trigger("itemActivate"), animDuration < 1 ? (a.css({
                width: newSliderWidth,
                left: f.left,
                display: "block"
            }), c._setActiveItem(e)) : a.width(newSliderWidth).animate({left: f.left}, {
                duration: animDuration,
                easing: "swing",
                complete: function () {
                    a.is(":visible") || a.show(), c._setActiveItem(e)
                }
            })
        }), this.isFileProtocol() || this.getMenuItems(!0).on("click", function (a) {
            a.which > 1 || a.ctrlKey || (a.preventDefault(), c.setHashValue($(this).attr("href")))
        }), $(window).on("resize", function () {
            c._fixSliderPosition()
        }), this._restoreActiveCurrentPageState()
    },
    _initMobileMenu: function () {
        var a = this, b = $(".mobile-menu"), c = $(".mobile-menu__toggle"), d = "mobile-menu--open",
            e = "main-nav--mobile", f = this.getHeaderMenu().clone(!0).attr("class", e).appendTo(b);
        f.find("a").click(function () {
            c.trigger("click")
        }), c.on("click", function (c) {
            c.preventDefault();
            var e = b.hasClass(d);
            e ? (b.removeClass(d), f.slideToggle(400)) : ($(a).trigger("mobileMenuOpen"), b.addClass(d), f.slideToggle(400))
        }), $(this).on("mobileMenuOpen", function () {
            var b = new RegExp("(?:#)?([a-zA-Z]*)(?:.)?(?:(?:html)|(?:php))?$", "i"), c = b.exec(window.location.href),
                d = $("." + e + " li"), f = null;
            c[1] && (d.removeClass(a.currenMenuItemClass), f = d.find("a[href *=" + c[1] + "]").parent(), f.length > 0 ? f.addClass(a.currenMenuItemClass) : d.first().addClass(a.currenMenuItemClass))
        })
    },
    _setActiveItem: function (a) {
        this._activeItem = a;
        var b = this.currenMenuItemClass;
        a.is("." + b) || (this.getMenuItems().filter("." + b).removeClass(b), a.addClass(b))
    },
    _fixSliderPosition: function () {
        if (this._activeItem && this._activeItem.is(":visible")) {
            var a = this._activeItem.position();
            this.getSlider().css({display: "block", width: this._activeItem.outerWidth() + 2, left: a.left})
        }
    },
    _restoreActiveCurrentPageState: function () {
        var a, b = this.getMenuItems();
        if (document.location.hash) {
            var c = document.location.hash.substr(1);
            document.location.pathname.substr(0 - c.length) != c && (a = b.find('a[href$="' + c + '"]'), this.loadPage(c))
        }
        (!a || a.length < 1) && (a = b.filter("." + this.currenMenuItemClass), a.length < 1 && (a = b.first()), a.trigger("activate", {noAnimation: !0}))
    },
    _applyContainerBg: function (a) {
        this.pageClassContainerSelector && $(this.pageClassContainerSelector).attr("class", a)
    }
}, Template.layout = {
    customScrollEnabled: !1, scrollContainer: "", init: function (a) {
        return this._inited ? !1 : (this._inited = !0, a && $.extend(this, a), this._initCustomScroll() ? !0 : !1)
    }, scrollTo: function (a, b) {
        var c = this.getScrollContainer();
        c && c.length > 0 ? c.mCustomScrollbar("scrollTo", a, b ? b : {}) : "top" == a && $(window).scrollTop(0)
    }, getScrollContainer: function () {
        return this.customScrollEnabled ? $(this.scrollContainer) : null
    }, _initCustomScroll: function () {
        var a = this.getScrollContainer();
        return !a || a.length < 1 ? !1 : (a.mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 500,
            autoHideScrollbar: !0,
            scrollButtons: {enable: !0}
        }), !0)
    }
}, Template.shortcodes = {
    init: function (a) {
        a || (a = document), this.initAccordion(a), this.initProgressBar(a, 2e3), this.initRating(a), this.initDonutChart(a)
    }, hardReset: function () {
        $(this).trigger("hardReset")
    }, initAccordion: function (a) {
        var b = $(".accordion-item", a ? a : document);
        if (!(b.length < 1 || b.data("inited"))) {
            b.data("inited", !0), $(this).on("hardReset", function () {
                b.data("inited", null)
            });
            var c = this;
            b.one("shown.bs.collapse", function () {
                c.init(this)
            })
        }
    }, initProgressBar: function (a, b) {
        var c = this._getElements(".progress-bar", a);
        if (!(c.length < 1)) {
            "undefined" == typeof b && (b = 1e3);
            var d = this, e = ".progress-bar__progress", f = ".progress-bar__bar", g = ".progress-bar__value", h = "%";
            c.each(function () {
                var a = $(this).find(e), c = $(this).find(f).attr("data-level"), i = c + h;
                b ? $(this).find(g).animate({width: c + "%"}, b) : $(this).find(g).css({width: c + "%"}), d._animateCounterValue(c, i, a, b, h)
            })
        }
    }, _animateCounterValue: function (a, b, c, d, e) {
        if (d) var f = 0, g = parseInt(d / a, 10), h = setInterval(function () {
            a > f - 1 ? c.html(f + e) : (c.html(b), clearInterval(h)), f++
        }, g); else c.html(b)
    }, initRating: function (a) {
        var b = this._getElements(".rating__score", a);
        b.length < 1 || b.data("inited") || (b.data("inited", !0), b.raty({
            starType: "i",
            number: 8,
            noRatedMsg: " ",
            readOnly: !0,
            score: function () {
                return $(this).attr("data-score")
            }
        }))
    }, initDonutChart: function (a) {
        var b = this._getElements(".donut-chart", a);
        if (!(b.length < 1 || b.data("inited"))) {
            b.data("inited", !0), $(this).on("hardReset", function () {
                b.data("easyPieChart") && b.data("inited", null).data("easyPieChart", null).find("canvas").remove()
            });
            var c = b.css("color"), d = b.find(".donut-chart__pallete-second-color").css("color"),
                e = ".donut-chart__value";
            b.easyPieChart({
                barColor: c,
                trackColor: d,
                scaleColor: "transparent",
                size: 150,
                lineWidth: 10,
                animate: 2e3,
                onStep: function (a, b, c) {
                    $(this.el).find(e).text(Math.round(c) + "%")
                }
            })
        }
    }, _getElements: function (a, b, c) {
        var d = $(a, b ? b : document);
        return d.length > 0 && !c ? d.filter(function () {
            var a = $(this).parents(".collapse");
            return a.length > 0 && !a.hasClass("in") ? !1 : !0
        }) : d
    }
}, Template.tools = {
    isIe: function (a) {
        var b = !1, c = 0, d = 5 > a;
        if (navigator.userAgent) {
            var e = navigator.userAgent;
            if (ieInfo = /(msie) ([\w.]+)/.exec(e.toLowerCase()), ieInfo) {
                if (!d) return !0;
                b = !0, c = parseInt(ieInfo.pop(), 10)
            } else {
                var f = e.indexOf("Trident/index.html");
                if (f > 0) {
                    if (!d) return !0;
                    b = !0;
                    var g = e.indexOf("rv:");
                    c = parseInt(e.substring(g + 3, e.indexOf(".", g)), 10)
                } else {
                    var h = e.indexOf("Edge/index.html");
                    if (h > 0) {
                        if (!d) return !0;
                        b = !0, c = parseInt(e.substring(h + 5, e.indexOf(".", h)), 10)
                    }
                }
            }
            if (b && d) return a >= c
        }
        return b
    }, isTouch: function () {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    }
}, $(document).on("ready", function () {
    Template.init()
}), jQuery(Template.menu).on("pageLoaded", function () {
    if (window.ga) {
        var a = "/" + document.location.hash.replace(/^#/, ""), b = jQuery("head title").text();
        b && (b = b.replace(/^Savvy - /i, "") + " - Ajax"), ga("send", "pageview", {page: a, title: b})
    }
});