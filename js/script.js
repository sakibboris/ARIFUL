(function () {

    var MenuOffset = $('.menu').offset().top;

    $(window).on('scroll', function () {

        var WinScroll = $(window).scrollTop();

        if (WinScroll > MenuOffset) {
            $('.menu').addClass('menufix');
        } else {
            $('.menu').removeClass('menufix');
        }
    });
    //Back to top Button
    var Backt = $(".backtop");
    Backt.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 500) {
            Backt.addClass('abc');
            $('.abc').fadeIn(500);
        } else if (scrolling > 200) {
            $('.abc').fadeOut(500);
        }
    });
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(1000);
    });

})(jQuery);
