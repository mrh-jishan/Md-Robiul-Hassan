!function (a) {
    "$:nomunge";

    function b(a) {
        return "string" == typeof a
    }

    function c(a) {
        var b = v.call(arguments, 1);
        return function () {
            return a.apply(this, b.concat(v.call(arguments)))
        }
    }

    function d(a) {
        return a.replace(r, "$2")
    }

    function e(a) {
        return a.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function f(c, d, e, f, g) {
        var h, k, m, n, o;
        return f !== i ? (m = e.match(c ? r : /^([^#?]*)\??([^#]*)(#?.*)/), o = m[3] || "", 2 === g && b(f) ? k = f.replace(c ? q : G, "") : (n = l(m[2]), f = b(f) ? l[c ? C : B](f) : f, k = 2 === g ? f : 1 === g ? a.extend({}, f, n) : a.extend({}, n, f), k = j(k), c && (k = k.replace(s, w))), h = m[1] + (c ? u : k || !m[1] ? "?" : "") + k + o) : h = d(e !== i ? e : location.href), h
    }

    function g(a, c, d) {
        return c === i || "boolean" == typeof c ? (d = c, c = x[a ? C : B]()) : c = b(c) ? c.replace(a ? q : G, "") : c, l(c, d)
    }

    function h(c, d, e, f) {
        return b(e) || "object" == typeof e || (f = e, e = d, d = i), this.each(function () {
            var b = a(this), g = d || p()[(this.nodeName || "").toLowerCase()] || "", h = g && b.attr(g) || "";
            b.attr(g, x[c](h, e, f))
        })
    }

    var i, j, k, l, m, n, o, p, q, r, s, t, u, v = Array.prototype.slice, w = decodeURIComponent, x = a.param,
        y = a.bbq = a.bbq || {}, z = a.event.special, A = "hashchange", B = "querystring", C = "fragment",
        D = "elemUrlAttr", E = "href", F = "src", G = /^.*\?|#.*$/g, H = {};
    x[B] = c(f, 0, e), x[C] = k = c(f, 1, d), x.sorted = j = function (b, c) {
        var d = [], e = {};
        return a.each(x(b, c).split("&"), function (a, b) {
            var c = b.replace(/(?:%5B|=).*$/, ""), f = e[c];
            f || (f = e[c] = [], d.push(c)), f.push(b)
        }), a.map(d.sort(), function (a) {
            return e[a]
        }).join("&")
    }, k.noEscape = function (b) {
        b = b || "";
        var c = a.map(b.split(""), encodeURIComponent);
        s = new RegExp(c.join("|"), "g")
    }, k.noEscape(",/"), k.ajaxCrawlable = function (a) {
        return a !== i && (a ? (q = /^.*(?:#!|#)/, r = /^([^#]*)(?:#!|#)?(.*)$/, u = "#!") : (q = /^.*#/, r = /^([^#]*)#?(.*)$/, u = "#"), t = !!a), t
    }, k.ajaxCrawlable(0), a.deparam = l = function (b, c) {
        var d = {}, e = {"true": !0, "false": !1, "null": null};
        return a.each(b.replace(/\+/g, " ").split("&"), function (b, f) {
            var g, h = f.split("="), j = w(h[0]), k = d, l = 0, m = j.split("]["), n = m.length - 1;
            if (/\[/.test(m[0]) && /\]$/.test(m[n]) ? (m[n] = m[n].replace(/\]$/, ""), m = m.shift().split("[").concat(m), n = m.length - 1) : n = 0, 2 === h.length) if (g = w(h[1]), c && (g = g && !isNaN(g) ? +g : "undefined" === g ? i : e[g] !== i ? e[g] : g), n) for (; n >= l; l++) j = "" === m[l] ? k.length : m[l], k = k[j] = n > l ? k[j] || (m[l + 1] && isNaN(m[l + 1]) ? {} : []) : g; else a.isArray(d[j]) ? d[j].push(g) : d[j] = d[j] !== i ? [d[j], g] : g; else j && (d[j] = c ? i : "")
        }), d
    }, l[B] = c(g, 0), l[C] = m = c(g, 1), a[D] || (a[D] = function (b) {
        return a.extend(H, b)
    })({
        a: E,
        base: E,
        iframe: F,
        img: F,
        input: F,
        form: "action",
        link: E,
        script: F
    }), p = a[D], a.fn[B] = c(h, B), a.fn[C] = c(h, C), y.pushState = n = function (a, c) {
        b(a) && /^#/.test(a) && c === i && (c = 2);
        var d = a !== i, e = k(location.href, d ? a : {}, d ? c : 2);
        location.href = e
    }, y.getState = o = function (a, b) {
        return a === i || "boolean" == typeof a ? m(a) : m(b)[a]
    }, y.removeState = function (b) {
        var c = {};
        b !== i && (c = o(), a.each(a.isArray(b) ? b : arguments, function (a, b) {
            delete c[b]
        })), n(c, 2)
    }, z[A] = a.extend(z[A], {
        add: function (b) {
            function c(a) {
                var b = a[C] = k();
                a.getState = function (a, c) {
                    return a === i || "boolean" == typeof a ? l(b, a) : l(b, c)[a]
                }, d.apply(this, arguments)
            }

            var d;
            return a.isFunction(b) ? (d = b, c) : (d = b.handler, void (b.handler = c))
        }
    })
}(jQuery, this), function (a, b, c) {
    "$:nomunge";

    function d(a) {
        return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
    }

    var e, f = "hashchange", g = document, h = a.event.special, i = g.documentMode,
        j = "on" + f in b && (i === c || i > 7);
    a.fn[f] = function (a) {
        return a ? this.bind(f, a) : this.trigger(f)
    }, a.fn[f].delay = 50, h[f] = a.extend(h[f], {
        setup: function () {
            return j ? !1 : void a(e.start)
        }, teardown: function () {
            return j ? !1 : void a(e.stop)
        }
    }), e = function () {
        function e() {
            var c = d(), g = n(k);
            c !== k ? (m(k = c, g), a(b).trigger(f)) : g !== k && (location.href = location.href.replace(/#.*/, "") + g), h = setTimeout(e, a.fn[f].delay)
        }

        var h, i = {}, k = d(), l = function (a) {
            return a
        }, m = l, n = l;
        return i.start = function () {
            h || e()
        }, i.stop = function () {
            h && clearTimeout(h), h = c
        }, b.navigator.userAgent.indexOf("MSIE ") > 0 && !j && function () {
            var b, c;
            i.start = function () {
                b || (c = a.fn[f].src, c = c && c + d(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    c || m(d()), e()
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, g.onpropertychange = function () {
                    try {
                        "title" === event.propertyName && (b.document.title = g.title)
                    } catch (a) {
                    }
                })
            }, i.stop = l, n = function () {
                return d(b.location.href)
            }, m = function (c, d) {
                var e = b.document, h = a.fn[f].domain;
                c !== d && (e.title = g.title, e.open(), h && e.write('<script>document.domain="' + h + '"</script>'), e.close(), b.location.hash = c)
            }
        }(), i
    }()
}(jQuery, window, document), +function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.1", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : a.extend({}, e.data(), {trigger: this});
        c.call(f, h)
    })
}(jQuery), function (a, b) {
    "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery)
}(this, function (a) {
    var b = function (a, b) {
        var c, d = document.createElement("canvas");
        a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
        var e = d.getContext("2d");
        d.width = d.height = b.size;
        var f = 1;
        window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-.5 + b.rotate / 180) * Math.PI);
        var g = (b.size - b.lineWidth) / 2;
        b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
            return +new Date
        };
        var h = function (a, b, c) {
            c = Math.min(Math.max(-1, c || 0), 1);
            var d = 0 >= c ? !0 : !1;
            e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
        }, i = function () {
            var a, c;
            e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
            for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
            e.restore()
        }, j = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
                window.setTimeout(a, 1e3 / 60)
            }
        }(), k = function () {
            b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
        };
        this.getCanvas = function () {
            return d
        }, this.getCtx = function () {
            return e
        }, this.clear = function () {
            e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
        }, this.draw = function (a) {
            b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
            var d;
            d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
        }.bind(this), this.animate = function (a, c) {
            var d = Date.now();
            b.onStart(a, c);
            var e = function () {
                var f = Math.min(Date.now() - d, b.animate.duration),
                    g = b.easing(this, f, a, c - a, b.animate.duration);
                this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
            }.bind(this);
            j(e)
        }.bind(this)
    }, c = function (a, c) {
        var d = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {duration: 1e3, enabled: !0},
            easing: function (a, b, c, d, e) {
                return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
            },
            onStart: function () {
            },
            onStep: function () {
            },
            onStop: function () {
            }
        };
        if ("undefined" != typeof b) d.renderer = b; else {
            if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
            d.renderer = SVGRenderer
        }
        var e = {}, f = 0, g = function () {
            this.el = a, this.options = e;
            for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
            e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
                duration: e.animate,
                enabled: !0
            }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                duration: 1e3,
                enabled: e.animate
            }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
        }.bind(this);
        this.update = function (a) {
            return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
        }.bind(this), this.disableAnimation = function () {
            return e.animate.enabled = !1, this
        }, this.enableAnimation = function () {
            return e.animate.enabled = !0, this
        }, g()
    };
    a.fn.easyPieChart = function (b) {
        return this.each(function () {
            var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
        })
    }
}), function (a) {
    "use strict";
    var b = {
        init: function (c) {
            return this.each(function () {
                this.self = a(this), b.destroy.call(this.self), this.opt = a.extend(!0, {}, a.fn.raty.defaults, c), b._adjustCallback.call(this), b._adjustNumber.call(this), b._adjustHints.call(this), this.opt.score = b._adjustedScore.call(this, this.opt.score), "img" !== this.opt.starType && b._adjustStarType.call(this), b._adjustPath.call(this), b._createStars.call(this), this.opt.cancel && b._createCancel.call(this), this.opt.precision && b._adjustPrecision.call(this), b._createScore.call(this), b._apply.call(this, this.opt.score), b._setTitle.call(this, this.opt.score), b._target.call(this, this.opt.score), this.opt.readOnly ? b._lock.call(this) : (this.style.cursor = "pointer", b._binds.call(this))
            })
        }, _adjustCallback: function () {
            for (var a = ["number", "readOnly", "score", "scoreName", "target"], b = 0; b < a.length; b++) "function" == typeof this.opt[a[b]] && (this.opt[a[b]] = this.opt[a[b]].call(this))
        }, _adjustedScore: function (a) {
            return a ? b._between(a, 0, this.opt.number) : a
        }, _adjustHints: function () {
            if (this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half) for (var a = this.opt.precision ? 10 : 2, b = 0; b < this.opt.number; b++) {
                var c = this.opt.hints[b];
                "[object Array]" !== Object.prototype.toString.call(c) && (c = [c]), this.opt.hints[b] = [];
                for (var d = 0; a > d; d++) {
                    var e = c[d], f = c[c.length - 1];
                    void 0 === f && (f = null), this.opt.hints[b][d] = void 0 === e ? f : e
                }
            }
        }, _adjustNumber: function () {
            this.opt.number = b._between(this.opt.number, 1, this.opt.numberMax)
        }, _adjustPath: function () {
            this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "index.html")
        }, _adjustPrecision: function () {
            this.opt.half = !0
        }, _adjustStarType: function () {
            var a = ["cancelOff", "cancelOn", "starHalf", "starOff", "starOn"];
            this.opt.path = "";
            for (var b = 0; b < a.length; b++) this.opt[a[b]] = this.opt[a[b]].replace(".", "-")
        }, _apply: function (a) {
            b._fill.call(this, a), a && (a > 0 && this.score.val(a), b._roundStars.call(this, a))
        }, _between: function (a, b, c) {
            return Math.min(Math.max(parseFloat(a), b), c)
        }, _binds: function () {
            this.cancel && (b._bindOverCancel.call(this), b._bindClickCancel.call(this), b._bindOutCancel.call(this)), b._bindOver.call(this), b._bindClick.call(this), b._bindOut.call(this)
        }, _bindClick: function () {
            var c = this;
            c.stars.on("click.raty", function (d) {
                var e = !0, f = c.opt.half || c.opt.precision ? c.self.data("score") : this.alt || a(this).data("alt");
                c.opt.click && (e = c.opt.click.call(c, +f, d)), (e || void 0 === e) && (c.opt.half && !c.opt.precision && (f = b._roundHalfScore.call(c, f)), b._apply.call(c, f))
            })
        }, _bindClickCancel: function () {
            var a = this;
            a.cancel.on("click.raty", function (b) {
                a.score.removeAttr("value"), a.opt.click && a.opt.click.call(a, null, b)
            })
        }, _bindOut: function () {
            var a = this;
            a.self.on("mouseleave.raty", function (c) {
                var d = +a.score.val() || void 0;
                b._apply.call(a, d), b._target.call(a, d, c), b._resetTitle.call(a), a.opt.mouseout && a.opt.mouseout.call(a, d, c)
            })
        }, _bindOutCancel: function () {
            var a = this;
            a.cancel.on("mouseleave.raty", function (c) {
                var d = a.opt.cancelOff;
                if ("img" !== a.opt.starType && (d = a.opt.cancelClass + " " + d), b._setIcon.call(a, this, d), a.opt.mouseout) {
                    var e = +a.score.val() || void 0;
                    a.opt.mouseout.call(a, e, c)
                }
            })
        }, _bindOver: function () {
            var a = this, c = a.opt.half ? "mousemove.raty" : "mouseover.raty";
            a.stars.on(c, function (c) {
                var d = b._getScoreByPosition.call(a, c, this);
                b._fill.call(a, d), a.opt.half && (b._roundStars.call(a, d, c), b._setTitle.call(a, d, c), a.self.data("score", d)), b._target.call(a, d, c), a.opt.mouseover && a.opt.mouseover.call(a, d, c)
            })
        }, _bindOverCancel: function () {
            var a = this;
            a.cancel.on("mouseover.raty", function (c) {
                var d = a.opt.path + a.opt.starOff, e = a.opt.cancelOn;
                "img" === a.opt.starType ? a.stars.attr("src", d) : (e = a.opt.cancelClass + " " + e, a.stars.attr("class", d)), b._setIcon.call(a, this, e), b._target.call(a, null, c), a.opt.mouseover && a.opt.mouseover.call(a, null)
            })
        }, _buildScoreField: function () {
            return a("<input />", {name: this.opt.scoreName, type: "hidden"}).appendTo(this)
        }, _createCancel: function () {
            var b = this.opt.path + this.opt.cancelOff,
                c = a("<" + this.opt.starType + " />", {title: this.opt.cancelHint, "class": this.opt.cancelClass});
            "img" === this.opt.starType ? c.attr({
                src: b,
                alt: "x"
            }) : c.attr("data-alt", "x").addClass(b), "left" === this.opt.cancelPlace ? this.self.prepend("&#160;").prepend(c) : this.self.append("&#160;").append(c), this.cancel = c
        }, _createScore: function () {
            var c = a(this.opt.targetScore);
            this.score = c.length ? c : b._buildScoreField.call(this)
        }, _createStars: function () {
            for (var c = 1; c <= this.opt.number; c++) {
                var d = b._nameForIndex.call(this, c), e = {alt: c, src: this.opt.path + this.opt[d]};
                "img" !== this.opt.starType && (e = {
                    "data-alt": c,
                    "class": e.src
                }), e.title = b._getHint.call(this, c), a("<" + this.opt.starType + " />", e).appendTo(this), this.opt.space && this.self.append(c < this.opt.number ? "&#160;" : "")
            }
            this.stars = this.self.children(this.opt.starType)
        }, _error: function (b) {
            a(this).text(b), a.error(b)
        }, _fill: function (a) {
            for (var c = 0, d = 1; d <= this.stars.length; d++) {
                var e, f = this.stars[d - 1], g = b._turnOn.call(this, d, a);
                if (this.opt.iconRange && this.opt.iconRange.length > c) {
                    var h = this.opt.iconRange[c];
                    e = b._getRangeIcon.call(this, h, g), d <= h.range && b._setIcon.call(this, f, e), d === h.range && c++
                } else e = this.opt[g ? "starOn" : "starOff"], b._setIcon.call(this, f, e)
            }
        }, _getFirstDecimal: function (a) {
            var b = a.toString().split(".")[1], c = 0;
            return b && (c = parseInt(b.charAt(0), 10), "9999" === b.slice(1, 5) && c++), c
        }, _getRangeIcon: function (a, b) {
            return b ? a.on || this.opt.starOn : a.off || this.opt.starOff
        }, _getScoreByPosition: function (c, d) {
            var e = parseInt(d.alt || d.getAttribute("data-alt"), 10);
            if (this.opt.half) {
                var f = b._getWidth.call(this), g = parseFloat((c.pageX - a(d).offset().left) / f);
                e = e - 1 + g
            }
            return e
        }, _getHint: function (a, c) {
            if (0 !== a && !a) return this.opt.noRatedMsg;
            var d = b._getFirstDecimal.call(this, a), e = Math.ceil(a), f = this.opt.hints[(e || 1) - 1], g = f,
                h = !c || this.move;
            return this.opt.precision ? (h && (d = 0 === d ? 9 : d - 1), g = f[d]) : (this.opt.halfShow || this.opt.half) && (d = h && 0 === d ? 1 : d > 5 ? 1 : 0, g = f[d]), "" === g ? "" : g || a
        }, _getWidth: function () {
            var a = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
            return a || b._error.call(this, "Could not get the icon width!"), a
        }, _lock: function () {
            var a = b._getHint.call(this, this.score.val());
            this.style.cursor = "", this.title = a, this.score.prop("readonly", !0), this.stars.prop("title", a), this.cancel && this.cancel.hide(), this.self.data("readonly", !0)
        }, _nameForIndex: function (a) {
            return this.opt.score && this.opt.score >= a ? "starOn" : "starOff"
        }, _resetTitle: function () {
            for (var a = 0; a < this.opt.number; a++) this.stars[a].title = b._getHint.call(this, a + 1)
        }, _roundHalfScore: function (a) {
            var c = parseInt(a, 10), d = b._getFirstDecimal.call(this, a);
            return 0 !== d && (d = d > 5 ? 1 : .5), c + d
        }, _roundStars: function (a, c) {
            var d, e = (a % 1).toFixed(2);
            if (c || this.move ? d = e > .5 ? "starOn" : "starHalf" : e > this.opt.round.down && (d = "starOn", this.opt.halfShow && e < this.opt.round.up ? d = "starHalf" : e < this.opt.round.full && (d = "starOff")), d) {
                var f = this.opt[d], g = this.stars[Math.ceil(a) - 1];
                b._setIcon.call(this, g, f)
            }
        }, _setIcon: function (a, b) {
            a["img" === this.opt.starType ? "src" : "className"] = this.opt.path + b
        }, _setTarget: function (a, b) {
            b && (b = this.opt.targetFormat.toString().replace("{score}", b)), a.is(":input") ? a.val(b) : a.html(b)
        }, _setTitle: function (a, c) {
            if (a) {
                var d = parseInt(Math.ceil(a), 10), e = this.stars[d - 1];
                e.title = b._getHint.call(this, a, c)
            }
        }, _target: function (c, d) {
            if (this.opt.target) {
                var e = a(this.opt.target);
                e.length || b._error.call(this, "Target selector invalid or missing!");
                var f = d && "mouseover" === d.type;
                if (void 0 === c) c = this.opt.targetText; else if (null === c) c = f ? this.opt.cancelHint : this.opt.targetText; else {
                    "hint" === this.opt.targetType ? c = b._getHint.call(this, c, d) : this.opt.precision && (c = parseFloat(c).toFixed(1));
                    var g = d && "mousemove" === d.type;
                    f || g || this.opt.targetKeep || (c = this.opt.targetText)
                }
                b._setTarget.call(this, e, c)
            }
        }, _turnOn: function (a, b) {
            return this.opt.single ? a === b : b >= a
        }, _unlock: function () {
            this.style.cursor = "pointer", this.removeAttribute("title"), this.score.removeAttr("readonly"), this.self.data("readonly", !1);
            for (var a = 0; a < this.opt.number; a++) this.stars[a].title = b._getHint.call(this, a + 1);
            this.cancel && this.cancel.css("display", "")
        }, cancel: function (c) {
            return this.each(function () {
                var d = a(this);
                d.data("readonly") !== !0 && (b[c ? "click" : "score"].call(d, null), this.score.removeAttr("value"))
            })
        }, click: function (c) {
            return this.each(function () {
                a(this).data("readonly") !== !0 && (c = b._adjustedScore.call(this, c), b._apply.call(this, c), this.opt.click && this.opt.click.call(this, c, a.Event("click")), b._target.call(this, c))
            })
        }, destroy: function () {
            return this.each(function () {
                var b = a(this), c = b.data("raw");
                c ? b.off(".raty").empty().css({cursor: c.style.cursor}).removeData("readonly") : b.data("raw", b.clone()[0])
            })
        }, getScore: function () {
            var a, b = [];
            return this.each(function () {
                a = this.score.val(), b.push(a ? +a : void 0)
            }), b.length > 1 ? b : b[0]
        }, move: function (c) {
            return this.each(function () {
                var d = parseInt(c, 10), e = b._getFirstDecimal.call(this, c);
                d >= this.opt.number && (d = this.opt.number - 1, e = 10);
                var f = b._getWidth.call(this), g = f / 10, h = a(this.stars[d]), i = h.offset().left + g * e,
                    j = a.Event("mousemove", {pageX: i});
                this.move = !0, h.trigger(j), this.move = !1
            })
        }, readOnly: function (c) {
            return this.each(function () {
                var d = a(this);
                d.data("readonly") !== c && (c ? (d.off(".raty").children("img").off(".raty"), b._lock.call(this)) : (b._binds.call(this), b._unlock.call(this)), d.data("readonly", c))
            })
        }, reload: function () {
            return b.set.call(this, {})
        }, score: function () {
            var c = a(this);
            return arguments.length ? b.setScore.apply(c, arguments) : b.getScore.call(c)
        }, set: function (b) {
            return this.each(function () {
                a(this).raty(a.extend({}, this.opt, b))
            })
        }, setScore: function (c) {
            return this.each(function () {
                a(this).data("readonly") !== !0 && (c = b._adjustedScore.call(this, c), b._apply.call(this, c), b._target.call(this, c))
            })
        }
    };
    a.fn.raty = function (c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist!") : b.init.apply(this, arguments)
    }, a.fn.raty.defaults = {
        cancel: !1,
        cancelClass: "raty-cancel",
        cancelHint: "Cancel this rating!",
        cancelOff: "cancel-off.png",
        cancelOn: "cancel-on.png",
        cancelPlace: "left",
        click: void 0,
        half: !1,
        halfShow: !0,
        hints: ["bad", "poor", "regular", "good", "gorgeous"],
        iconRange: void 0,
        mouseout: void 0,
        mouseover: void 0,
        noRatedMsg: "Not rated yet!",
        number: 5,
        numberMax: 20,
        path: void 0,
        precision: !1,
        readOnly: !1,
        round: {down: .25, full: .6, up: .76},
        score: void 0,
        scoreName: "score",
        single: !1,
        space: !0,
        starHalf: "star-half.png",
        starOff: "star-off.png",
        starOn: "star-on.png",
        starType: "img",
        target: void 0,
        targetFormat: "{score}",
        targetKeep: !1,
        targetScore: void 0,
        targetText: "",
        targetType: "hint"
    }
}(jQuery), function (a, b) {
    function f(b, c) {
        this.element = b, this.options = a.extend(!0, {}, i, c), this.options.share = c.share, this._defaults = i, this._name = h, this.init()
    }

    if ("undefined" == typeof g) var g = [];
    var h = "sharrre", i = {
        className: "",
        share: {
            googlePlus: !1,
            facebook: !1,
            twitter: !1,
            digg: !1,
            delicious: !1,
            stumbleupon: !1,
            linkedin: !1,
            pinterest: !1
        },
        shareTotal: 0,
        template: "",
        title: "",
        urlCurl: "",
        count: {},
        total: 0,
        shorterTotal: !0,
        enableHover: !0,
        enableCounter: !0,
        enableTracking: !1,
        hover: function () {
        },
        hide: function () {
        },
        click: function () {
        },
        render: function () {
        },
        buttons: {
            googlePlus: {url: "", urlCount: !1, size: "medium", lang: "en-US", annotation: ""},
            facebook: {
                url: "",
                urlCount: !1,
                action: "like",
                layout: "button_count",
                width: "",
                send: "false",
                faces: "false",
                colorscheme: "",
                font: "",
                lang: "en_US"
            },
            twitter: {url: "", urlCount: !1, count: "horizontal", hashtags: "", via: "", related: "", lang: "en"},
            digg: {url: "", urlCount: !1, type: "DiggCompact"},
            delicious: {url: "", urlCount: !1, size: "medium"},
            stumbleupon: {url: "", urlCount: !1, layout: "1"},
            linkedin: {url: "", urlCount: !1, counter: ""},
            pinterest: {url: "", media: "", description: "", layout: "horizontal"}
        }
    }
    var c = function (a) {
        b.console && b.console.error(a)
    };
    a.fn.hoverdir = function (b) {
        var d = a.data(this, "hoverdir");
        if ("string" == typeof b) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                return d ? a.isFunction(d[b]) && "_" !== b.charAt(0) ? void d[b].apply(d, e) : void c("no such method '" + b + "' for hoverdir instance") : void c("cannot call methods on hoverdir prior to initialization; attempted to call method '" + b + "'")
            })
        } else this.each(function () {
            d ? d._init() : d = a.data(this, "hoverdir", new a.HoverDir(b, this))
        });
        return d
    }
}(jQuery, window);