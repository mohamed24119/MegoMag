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

!function(r){function e(){for(var e,t,n=0;n&lt;l.length;n++)e=l[n],0&lt;=(t=e.getBoundingClientRect()).top&amp;&amp;0&lt;=t.left&amp;&amp;t.top&lt;=(r.innerHeight||document.documentElement.clientHeight)&amp;&amp;function(e,t){var n=new Image,r=e.getAttribute("data-src");n.onload=function(){e.parent?e.parent.replaceChild(n,e):e.src=r,t&amp;&amp;t()},n.src=r}(l[n],function(){l.splice(n,n)})}for(var l=new Array,t=function(e,t){if(document.querySelectorAll)t=document.querySelectorAll(e);else{var n=document,r=n.styleSheets[0]||n.createStyleSheet();r.addRule(e,"f:b");for(var l=n.all,c=0,o=[],i=l.length;c&lt;i;c++)l[c].currentStyle.f&amp;&amp;o.push(l[c]);r.removeRule(0),t=o}return t}("img.lazy"),n=0;n&lt;t.length;n++)l.push(t[n]);e(),function(e,t){r.addEventListener?this.addEventListener(e,t,!1):r.attachEvent?this.attachEvent("on"+e,t):this["on"+e]=t}("scroll",e)}(this);

$(document).ready(function() {
    $('.thumbnail img').attr('data-src', function(i, src) {
        return src.replace('s72-c', 's1600');
    });
});
