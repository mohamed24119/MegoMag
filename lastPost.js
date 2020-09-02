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




function lastPost(e) {
    for (var t = 0; t < numposts; t++) {
        var n = e.feed.entry[t];
        var postTitle = n.title.$t;
        var postUrl;
        if (t == e.feed.entry.length) break;
        for (var o = 0; o < n.link.length; o++) {
            if (n.link[o].rel == "replies" && n.link[o].type == "text/html") {
                var u = n.link[o].title;
                var f = n.link[o].href;
            }
            if (n.link[o].rel == "alternate") {
                postUrl = n.link[o].href;
                break
            }
        }
        var ellipsis = "...";
        if (postTitle.length > 70) {
            postTitle = postTitle.substring(0, 70) + " " + ellipsis;
        }
        var postTime = n.published.$t; // تاريخ النشر
        var postTimeFormat = postTime.substring(0, 10);
        var postAuthor = n.author[0].name.$t; // بواسطة
        var postLabel = n.category[0].term; // قسم
        var thumbnail;
        try {
            thumbnail = n.media$thumbnail.url
        } catch (h) {
            s = n.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf('src="', a);
            c = s.indexOf('"', b + 5);
            d = s.substr(b + 5, c - b - 5);
            if (a != -1 && b != -1 && c != -1 && d != "") {
                thumbnail = d
            } else thumbnail = "https://1.bp.blogspot.com/-igV9vkZfPhQ/X0KXOPzY91I/AAAAAAAADCI/fNMR6mXIHM04KHVkqvN9MsKbprYh2LSiACLcBGAsYHQ/s640/11.png"
        }
        if ("content" in n) {
            var postSummary = n.content.$t;
        } else {
            var postSummary = "";
        }
        var re = /<\S[^>]*>/g;
        postSummary = postSummary.replace(re, "");
        if (postSummary.length > 170) {
            postSummary = postSummary.substring(0, 170) + " " + ellipsis;
        }
        document.write('<article class="article-posts" id="post-id-">');
        document.write('<div class="box">');
        if (showPostThumbnail == true) {
            document.write('<a class="thumbnail" href="' + postUrl + '">');
            document.write('<img class="lazy" data-src="' + thumbnail + '" alt="' + postTitle + '">');
            document.write('</a>'); // end thumbnail
        }
        document.write('<div class="box-content">');
        document.write('<header class="article-header">');
        document.write('<h2 class="post-headding">');
        document.write('<a class="link" href="' + postUrl + '">');
        document.write(postTitle);
        document.write('</a>'); // end link
        document.write('</h2>'); // end post-headding
        document.write('</header>'); //end article-header
        if (showPostSummary == true) {
            if (postSummary != '') {
                document.write('<p class="description">');
                document.write(postSummary);
                document.write('</p>');
            }
        } // end description

        if ((showTime == true) || (showPostLabel == true) || (showPostAuthor == true)) {
            document.write('<footer class="article-footer">');
            document.write('<div class="meta">');
            if (showTime == true) {
                document.write('<time class="time" datetime="' + postTime + '" title="' + postTimeFormat + '">');
                document.write(postTimeFormat);
                document.write('</time>'); // end time
            }
            if (showPostLabel == true) {
                document.write('<a class="label" href="#">');
                document.write(postLabel);
                document.write('</a>');
            }
            if (showPostAuthor == true) {
                document.write('<a class="Author" href="">');
                document.write('<i class="fas fa-user"></i>' + ' ' + postAuthor);
                document.write("</a>");
            }
            document.write('</div>'); // END meta
            document.write('</footer>'); // end article-footer
        }

        document.write('</div>'); //end box-content
        document.write('</div>'); //end box
        document.write('</article>'); // end article
    }
}


var numposts = 5;
var showPostThumbnail = true;
var showPostSummary = false;
var showPostAuthor = false;
var showTime = true;
var showPostLabel = true;


$(document).ready(function() {
    $('.thumbnail img').attr('src', function(i, src) {
        return src.replace('s72-c', 's1600');
    });
});


function getLastPosts(url, label, style) {
    document.write('<div class="featured ' + style + '">');
    document.write('<div class="cat-title">');
    document.write('<a href="' + url + '/search/label/' + label + ' ">' + label + '</a>');
    document.write('</div>');
    document.write('<div class="articles">');
    document.write('<script src="' + url + '/feeds/posts/default/-/' + label + '?orderby=published&alt=json-in-script&callback=lastPost"></script>');
    document.write('</div>');
    document.write('</div>');
}
