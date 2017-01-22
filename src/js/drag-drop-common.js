$(function () {

    $.fn.dragdrop = function (opts) {
        opts = opts || {};

        var bindings = [];
        this.each(function () {
            var options = $.extend({}, opts);
            if (typeof options.anchor === 'string') {
                options.anchor = $(options.anchor, this)[0];
            }
            bindings.push(DragDrop.bind(this, options));
        });

        return {
            unbind: function () {
                for (var i = 0, c = bindings.length; i < c; i++) {
                    DragDrop.unbind(bindings[i]);
                }
            }
        };
    };

}());


$(function () {
    var dragMe = document.getElementById('dragContainer');
    var withMe = document.getElementById('dragHeader');

    var shouldntHappen = function () {
        console.log('THIS SHOULDN\'T HAPPEN');
    };


    var dragRef = DragDrop.bind(dragMe, {
        anchor: withMe,
        boundingBox: 'offsetParent',
        dragstart: function (evt) {
            console.log('DragDrop.bind dragstart', evt);
        },
        drag: function (evt) {
            console.log('DragDrop.bind drag', evt);
        },
        dragend: function (evt) {
            console.log('DragDrop.bind dragend', evt);
        }
    });


    dragRef.bindEvent('dragstart', function (evt) {
        console.log('DragDrop.bindEvent dragstart', evt);
    });
    dragRef.bindEvent('drag', function (evt) {
        console.log('DragDrop.bindEvent drag', evt);
    });
    dragRef.bindEvent('dragend', function (evt) {
        console.log('DragDrop.bindEvent dragend', evt);
    });


    dragRef.bindEvent('dragstart', shouldntHappen);
    dragRef.unbindEvent('dragstart', shouldntHappen);

    dragRef.bindEvent('drag', shouldntHappen);
    dragRef.unbindEvent('drag', shouldntHappen);

    dragRef.bindEvent('dragend', shouldntHappen);
    dragRef.unbindEvent('dragend', shouldntHappen);
})