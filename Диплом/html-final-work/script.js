$(function() {
    /* Smooth Scroll */
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        }, 700);
    });

    /* Burger Menu */
    $('#burger').on('click', function() {
        $('#menu').toggleClass('active');
    });
});