$(function () {
    var SupportContainer = document.createElement('div');
    SupportContainer.id = 'dragContainer';
    SupportContainer.setAttribute("style", "position:absolute;width:300px;height:500px");
    SupportContainer.innerHTML = '<div id="dragHeader" style="position: absolute;height: 70px;width: 300px;z-index: 12345;opacity: 0"> </div> <iframe src="/helper.html" frameborder="none" seamless="seamless" style="display: block; position:absolute;height: 100%;width: 100%; background: transparent; border: none;left: 0;right: 0;top:0;bottom: 0; min-width: initial !important; max-width: initial !important; min-height: initial !important; max-height: initial !important;"> </iframe>';
    document.body.appendChild(SupportContainer);
})