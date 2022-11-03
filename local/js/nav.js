$(function () {
    $(document).scroll(function () {
        var $header = $("#fix-menu");
        $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
    });

    $('.navbar li a').click(function (event) {
        var targetSection = $(this).attr('href');
        var scrTo = $(targetSection).offset().top;
        $('html, body').animate({
            scrollTop: scrTo
        }, 1000)
        event.preventDefault();
    });
});
