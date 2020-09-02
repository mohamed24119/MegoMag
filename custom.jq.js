function MegoMagAddClass(element1,element2,element3){
   $(element1).on("click",function(){
      $(element2).addClass(element3);
   });
}

function MegoMagRemoveClass(element1,element2,element3){
   $(element1).on("click",function(){
      $(element2).removeClass(element3);
   });
}

function MegoMagToggleClass(element1,element2,element3){
   $(element1).on("click",function(){
      $(element2).toggleClass(element3);
   });
}

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
