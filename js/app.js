$(document).ready(function() {
    //scroll animation for sections
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this).attr('href');

        if( target.length ) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $(target).offset().top || 0
            }, 1000);
        }

        // if('#about' || '#portfolio') {
        //     $('.fix').addClass('active');
        // }
    });

    //hover states for portfolio
    $('.row a, .longBox a, .longBox2 a').on('mouseenter',function(e) {
        $(this).find('.porfolioInfo').show();
        $(this).addClass('active');
    });

    $('.row a, .longBox a, .longBox2 a').on('mouseleave',function(e) {
        $(this).find('.porfolioInfo').hide();
        $(this).removeClass('active');
    });
});
