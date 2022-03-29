var APP = APP || {};


$(window).load(function() {

    //hide loading
    $('#loading').fadeOut(2000);

    //show page
    $('#wrapper').fadeIn(10);

    //scroll to bottom (#how to compensate for lazy disque plugin height?)
    setTimeout(function() { // Timeout — let the disque plugin load
        var bodyHeight = $('body').prop("scrollHeight");
        $(window).scrollTop(bodyHeight); // scroll
    }, 300);

    setTimeout(function() { //
        $('#rocket-direction').removeClass('down');
    }, 310);
});


$(document).ready(function() {

    // accordion open/close
    $('.accordion section').click(function() {
        // hide other accordion details
        $('.accordion section').not(this).find('p').slideUp(200);
        // open this accordion
        $(this).find('p').slideToggle('fast');
    });

});


// jquery stuff
(function(window, $) {

    // defining the var
    var $direction = $('#rocket-direction');

    // look for scroll direction
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();

        // add or remove the rotate transform
        if (st < lastScrollTop ||
            st + $(window).height() === $(document).height()) {
            $direction
                .removeClass('down');
        } else {
            $direction
                .addClass('down');
        }

        // update
        lastScrollTop = st;
    });

    // collapse the menu when link is clicked
    $('.menu a').click(function() {
        $('.checkbox-toggle').prop('checked', false);
    });

})(window, jQuery);