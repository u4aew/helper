$(function () {
    var SupportContainer = document.createElement('div');
    SupportContainer.id = 'dragContainer';
    SupportContainer.setAttribute("class", "dragContainer");
    SupportContainer.setAttribute("style", "position:absolute;width:400px;height:670px");
    SupportContainer.innerHTML = '<div id="dragHeader" class="dragHeader" style="width: 400px;height: 70px;z-index: 123456;opacity: 0;position: absolute;cursor: move"> </div> <iframe src="/helper.html" frameborder="none" seamless="seamless" style="display: block; position:absolute;height: 100%;width: 100%; background: transparent; border: none;left: 0;right: 0;top:0;bottom: 0; min-width: initial !important; max-width: initial !important; min-height: initial !important; max-height: initial !important;"> </iframe>';
    document.body.appendChild(SupportContainer);
})