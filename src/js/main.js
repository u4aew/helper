$(function () {
    var SupportContainer = document.createElement('div');
    SupportContainer.id = 'dragContainer';
    SupportContainer.setAttribute("class", "dragContainer");
    SupportContainer.setAttribute("style", "position:fixed;width:100px;height:100px;overflow:hidden;right:0;bottom:0");
    SupportContainer.innerHTML = '<div id="dragHeader" class="dragHeader" style="display:none;width: 400px;height: 70px;z-index: 123456;opacity: 0;top:30px;position: absolute;"> </div> <iframe id="iframeHelper" src="/helper.html" frameborder="none" style="display: block; position:absolute;height: 100%;width: 100%; background: transparent; border: none;left: 0;right: 0;top:0;bottom: 0; min-width: initial !important; max-width: initial !important; min-height: initial !important; max-height: initial !important;"> </iframe>';
    document.body.appendChild(SupportContainer);
})
