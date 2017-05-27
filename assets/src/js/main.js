$(function () {

    var styleSrc = 'http://robot.dev/connect/style.min.css',
        iframeSrc = 'http://robot.dev';

    //create style
    var $style = $('<link  rel="stylesheet" href="'+ styleSrc +'">'),
        $head = $('head');
    $head.append($style);

    //create iframe
    var $SupportContainer = $('<div style="position:fixed;width:400px;height:710px;overflow:hidden;right:0;bottom:0;z-index:150"></div>'),
        $iframe = $('<div style="display:none;width: 400px;height: 70px;z-index: 123456;opacity: 0;top:30px;position: absolute;"></div> <iframe id="iframeHelper" src="'+ iframeSrc +'" frameborder="none" style="display: block; position:absolute;height: 100%;width: 100%; background: transparent; border: none;left: 0;right: 0;top:0;bottom: 0; min-width: initial !important; max-width: initial !important; min-height: initial !important; max-height: initial !important;"> </iframe>');
    $SupportContainer.append($iframe);
    $('body').prepend($SupportContainer);


});

//control button
$(function () {
    var openButton = $('<div class="js-circle-button-open circle-button circle-button_blue"><div class="circle-button__icon circle-button__icon_message"></div></div>'),
        closeButton = $('<div class="helper__close"><div class="js-close-btn helper__close-btn"></div></div>');

    $('#iframeHelper').before(closeButton).after(openButton);


    $('.js-close-btn').hide();

    $('.js-circle-button-open').on('click', function () {
        $('#iframeHelper').toggleClass('is-active');
        $('.js-close-btn').toggle()
    });


    $('.js-close-btn').on('click', function () {
        $('#iframeHelper').removeClass('is-active');
        $(this).hide();
    })

});