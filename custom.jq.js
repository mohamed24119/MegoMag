function MegoMagAddClass(o,n,c){$(o).on("click",function(){$(n).addClass(c)})}function MegoMagRemoveClass(o,n,c){$(o).on("click",function(){$(n).removeClass(c)})}function MegoMagToggleClass(o,n,c){$(o).on("click",function(){$(n).toggleClass(c)})}


// fix height grid
function fixHeight(elem) {
    var maxHeight = 0;
    $(elem).css('height', 'auto');
    $(elem).each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(elem).height(maxHeight);
}

if ($(window).width() > 479) {
    $(window).resize(function() {
        fixHeight('.fix-height .box-content');
    });
    $(document).ready(function(e) {
        fixHeight('.fix-height .box-content');
    });
}

if ($(window).width() < 767) {
    $(window).resize(function() {
        fixHeight('.style1.fix--height .box-content');
    });
    $(document).ready(function(e) {
        fixHeight('.style1.fix--height .box-content');
    });
}


$(document).ready(function() {
    $('.thumbnail img').attr('data-src', function(i, src) {
        return src.replace('s72-c', 's1600');
    });
});
