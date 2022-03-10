// page init
jQuery(function(){
    initMobileNav();
    initScrollTop();
});


$(document).ready(function(){
    $(".product-list li").slice(0, 12).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".product-list li:hidden").slice(0, 12).slideDown();
        if($(".product-list li:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });
})

jQuery(document).ready(function($){
    $('.row').each(function(){
        var highestBox = 0;
        $('.sameheight', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.sameheight',this).height(highestBox);
    });

    $('.price-counter').each(function () {
        $('.input-quantity').number();
    });

    $(".star-rating").rating({
        "click": function (e) {
            console.log(e);
            $("#basicInput").val(e.stars);
        }
    });
});


function initScrollTop() {
    var win = jQuery(window);
    var headerClass = 'header-fixed';
    var scrollHeight = 0;
    var header = jQuery('#wrapper');

    // add class to header
    function addClass(){
        var scrollTop = win.scrollTop();
        if (scrollTop > scrollHeight){
            header.addClass(headerClass);
        } else {
            header.removeClass(headerClass);
        }
    }

    win.on('scroll', addClass);

}


function initMobileNav() {
    jQuery('#wrapper').mobileNav({
        hideOnClickOutside: true,
        menuActiveClass: 'nav-active',
        menuOpener: '.nav-opener',
        menuDrop: '#nav'
    });

    jQuery('.search-form').mobileNav({
        hideOnClickOutside: true,
        menuActiveClass: 'search-active',
        menuOpener: '.search-opener',
        menuDrop: '.form'
    });

    jQuery('body').mobileNav({
        hideOnClickOutside: false,
        menuActiveClass: 'bodyscroll',
        menuOpener: '.widger-opener',
    });

    jQuery('.widget-holder').mobileNav({
        hideOnClickOutside: true,
        menuActiveClass: 'widget-active',
        menuOpener: '.widger-opener',
        menuDrop: '.widget-box'
    });
}

/*
 * Simple Mobile Navigation
 */
(function($) {
    function MobileNav(options) {
        this.options = $.extend({
            container: null,
            hideOnClickOutside: false,
            menuActiveClass: 'nav-active',
            menuOpener: '.nav-opener',
            menuDrop: '.nav-drop',
            toggleEvent: 'click',
            outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
        }, options);
        this.initStructure();
        this.attachEvents();
    }
    MobileNav.prototype = {
        initStructure: function() {
            this.page = $('html');
            this.container = $(this.options.container);
            this.opener = this.container.find(this.options.menuOpener);
            this.drop = this.container.find(this.options.menuDrop);
        },
        attachEvents: function() {
            var self = this;

            if(activateResizeHandler) {
                activateResizeHandler();
                activateResizeHandler = null;
            }

            this.outsideClickHandler = function(e) {
                if(self.isOpened()) {
                    var target = $(e.target);
                    if(!target.closest(self.opener).length && !target.closest(self.drop).length) {
                        self.hide();
                    }
                }
            };

            this.openerClickHandler = function(e) {
                e.preventDefault();
                self.toggle();
            };

            this.opener.on(this.options.toggleEvent, this.openerClickHandler);
        },
        isOpened: function() {
            return this.container.hasClass(this.options.menuActiveClass);
        },
        show: function() {
            this.container.addClass(this.options.menuActiveClass);
            if(this.options.hideOnClickOutside) {
                this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
            }
        },
        hide: function() {
            this.container.removeClass(this.options.menuActiveClass);
            if(this.options.hideOnClickOutside) {
                this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
            }
        },
        toggle: function() {
            if(this.isOpened()) {
                this.hide();
            } else {
                this.show();
            }
        },
        destroy: function() {
            this.container.removeClass(this.options.menuActiveClass);
            this.opener.off(this.options.toggleEvent, this.clickHandler);
            this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
        }
    };

    var activateResizeHandler = function() {
        var win = $(window),
            doc = $('html'),
            resizeClass = 'resize-active',
            flag, timer;
        var removeClassHandler = function() {
            flag = false;
            doc.removeClass(resizeClass);
        };
        var resizeHandler = function() {
            if(!flag) {
                flag = true;
                doc.addClass(resizeClass);
            }
            clearTimeout(timer);
            timer = setTimeout(removeClassHandler, 500);
        };
        win.on('resize orientationchange', resizeHandler);
    };

    $.fn.mobileNav = function(options) {
        return this.each(function() {
            var params = $.extend({}, options, {container: this}),
                instance = new MobileNav(params);
            $.data(this, 'MobileNav', instance);
        });
    };
}(jQuery));











(function( $ ) {
    $.fn.number = function(customOptions) {
        var options = {
            'containerClass' : 'number-style',
            'minus' : 'number-minus',
            'plus' : 'number-plus',
            'containerTag' : 'div',
            'btnTag' : 'span'
        };

        options = $.extend(true, options, customOptions);
        var input = this;
        input.wrap('<' + options.containerTag + ' class="' + options.containerClass + '">');
        var wrapper = input.parent();
        wrapper.prepend('<' + options.btnTag + ' class="' + options.minus + '"></' + options.btnTag + '>');
        var minus = wrapper.find('.' + options.minus);
        wrapper.append('<' + options.btnTag + ' class="' + options.plus + '"></' + options.btnTag + '>');
        var plus = wrapper.find('.' + options.plus);
        var min = input.attr('min');
        var max = input.attr('max');
        if(input.attr('step')){
            var step = +input.attr('step');
        } else {
            var step = 1;
        }
        if(+input.val() <= +min){
            minus.addClass('disabled');
        }
        if(+input.val() >= +max){
            plus.addClass('disabled');
        }
        minus.click(function () {
            var input = $(this).parent().find('input');
            var value = input.val();
            if(+value > +min){
                input.val(+value - step);
                if(+input.val() === +min){
                    input.prev('.' + options.minus).addClass('disabled');
                }
                if(input.next('.' + options.plus).hasClass('disabled')){
                    input.next('.' + options.plus).removeClass('disabled')
                }
            } else if(!min){
                input.val(+value - step);
            }
        });
        plus.click(function () {
            var input = $(this).parent().find('input');
            var value = input.val();
            if(+value < +max){
                input.val(+value + step);
                if(+input.val() === +max){
                    input.next('.' + options.plus).addClass('disabled');
                }
                if(input.prev('.' + options.minus).hasClass('disabled')){
                    input.prev('.' + options.minus).removeClass('disabled')
                }
            } else if(!max){
                input.val(+value + step);
            }
        });
    };
})(jQuery);




















const defaults = {
    "value": 0,
    "stars": 5,
    "half": false,
    "emptyStar": "fal fa-star",
    "halfStar": "fal fa-star-half-alt",
    "filledStar": "fas fa-star",
    "color": "#fcd703",
    "click": function (e) {
        console.error("No click callback provided!");
    }
};

jQuery.fn.extend({
    rating: function (options = {}) {
        return this.each(function () {
            this.stars = options.value ? options.value : defaults.value;

            this.getStars = function () {
                return $(this).find($("i"));
            };

            $(this).css({
                "color": options.color ? options.color : defaults.color
            });

            $(this).on('mousemove', function (e) {
                let halfStars = options.half ? options.half : defaults.half;

                if (this.getStars().index(e.target) >= 0) {
                    if (!halfStars) {
                        $(this).find("i").attr("class", options.emptyStar ? options.emptyStar : defaults.emptyStar);
                        let index = this.getStars().index(e.target) + 1;

                        for (let i = 0; i < this.getStars().length; i++) {
                            if (i < index)
                                $(this.getStars()[i]).attr("class", options.filledStar ? options.filledStar : defaults.filledStar)
                        }

                    } else {
                        $(this).find("i").attr("class", options.emptyStar ? options.emptyStar : defaults.emptyStar);
                        let extra = 0.5;

                        $(this).find("i").css({
                            "width": $(this).find("i").outerWidth()
                        });

                        if (e.offsetX > ($(e.target).outerWidth() / 2))
                            extra = 1;

                        let index = this.getStars().index(e.target) + extra;
                        for (let i = 0; i < this.getStars().length; i++) {
                            if (i + 0.5 < index) {
                                $(this.getStars()[i]).attr("class", options.filledStar ? options.filledStar : defaults.filledStar)
                            } else if (i < index) {
                                $(this.getStars()[i]).attr("class", options.halfStar ? options.halfStar : defaults.halfStar)
                            }
                        }
                    }
                }
            });

            $(this).on('mouseout', function (e) {
                this.printStars();
            });

            $(this).on('click', function (e) {
                let halfStars = options.half ? options.half : defaults.half;
                if (!halfStars) {
                    this.stars = this.getStars().index(e.target) + 1;
                } else {
                    let extra = 0.5;
                    if (e.offsetX > ($(e.target).outerWidth() / 2))
                        extra = 1;

                    this.stars = this.getStars().index(e.target) + extra;
                }

                const callback = options.click ? options.click : defaults.click;
                callback({
                    "stars": this.stars,
                    "event": e
                });
            });

            // Add star elements to the element
            const stars = options.stars ? options.stars : defaults.stars;
            for (let i = 0; i < stars; i++) {
                $("<i></i>")
                    .addClass(options.emptyStar ? options.emptyStar : defaults.emptyStar)
                    .appendTo($(this));

                if (i > 1000)
                    return;
            }

            this.printStars = function () {
                let halfStars = options.half ? options.half : defaults.half;
                if (!halfStars) {
                    $(this).find("i").attr("class", options.emptyStar ? options.emptyStar : defaults.emptyStar);
                    for (let i = 0; i < this.stars; i++) {
                        $(this.getStars()[i]).attr("class", options.filledStar ? options.filledStar : defaults.filledStar)
                    }
                } else {
                    $(this).find("i").attr("class", options.emptyStar ? options.emptyStar : defaults.emptyStar);
                    for (let i = 0; i < this.stars; i++) {
                        if (i < this.stars - 0.5) {
                            $(this.getStars()[i]).attr("class", options.filledStar ? options.filledStar : defaults.filledStar)
                        } else {
                            $(this.getStars()[i]).attr("class", options.halfStar ? options.halfStar : defaults.halfStar)
                        }
                    }
                }
            };

            if (this.stars > 0) {
                this.printStars();

                const callback = options.click ? options.click : defaults.click;
                callback({
                    "stars": this.stars
                });
            }
        });
    }
});