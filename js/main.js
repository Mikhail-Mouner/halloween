$(document).ready(function () {
    //placeholder visible in blur and hidden in focus
    $('[placeholder]').focus(function () {
        $(this).attr('data-text',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    }).blur(function () {
        $(this).attr('placeholder',$(this).attr('data-text'));
    });
    //show password
    $('.show-pass').hover(function () {
       $('#exampleInputPassword').attr('type','text');
    },function () {
        $('#exampleInputPassword').attr('type','password');
    });

    // Calls the selectBoxIt method on your HTML select box and uses the default theme
    $("select").selectBoxIt({
        showFirstOption: false,
        showEffect: "fadeIn", showEffectSpeed: 400,
        hideEffect: "fadeOut", hideEffectSpeed: 400,
    });
    //nise scroll
    $("body").niceScroll({
        cursorcolor: "aquamarine",
        cursorwidth: "15px",
        cursorborderradius:20,
        background:"rgba(20,20,20,0.3)",
        cursorborder:"1px solid white"
    });

});