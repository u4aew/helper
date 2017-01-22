$(function () {
    setInterval(function () {
        var CircleButton = $('iframe#iframeHelper').contents().find('div.circle-button');
        CircleButton.on('click', function () {
            var HeightWindow = $(window).height();
            var widthWindow = $(window).width();
            $('.dragContainer').css("height", '670px').css("width", '400px');
            $('.dragHeader').show();
            $(this).hide();
        });
        var CircleButtonClose = $('iframe#iframeHelper').contents().find('div.js-close-btn');
        CircleButtonClose.on('click', function () {
            $('.dragContainer').css("height", '100px').css("width", '100px').css("right", '0').css("bottom", '0').css("top", '').css("left", '').css('position', 'fixed');
            $('.dragHeader').hide();
            CircleButton.show();
            $('.dragContainer').css('position', "fixed")
        });
        $('.dragHeader').on('click', function () {
            $('.dragContainer').css('position', "absolute")
        })
    }, 1000)
});