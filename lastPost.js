function MigoMagLastPost(e) {
    for (var t = 0; t < numposts; t++) {
       
        var n = e.feed.entry[t];
         var blogId = n.id.$t.substring(26);
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
        var postTime = n.published.$t;
        var postTimeFormat = postTime.substring(0, 10);
        var postLabel = n.category[0].term;
        var postID = n.id.$t.match(/\d+$/)[0];
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
        document.write('<article class="article-posts" id="post-id-' + postID + '" data="'+ blogId +'">');
        document.write('<div class="box">');
        if (showPostThumbnail == true) {
            var printThumbnail = '<a class="thumbnail" href="' + postUrl + '"><img class="lazy" data-src="' + thumbnail + '" alt="' + postTitle + '"/></a>';
            document.write(printThumbnail);
        }
        document.write('<div class="box-content">');
        document.write('<header class="article-header"><h2 class="post-headding"><a class="link" href="' + postUrl + '">');
        document.write(postTitle);
        document.write('</a></h2></header>'); // end header
        if ((showTime == true) || (showPostLabel == true)) {
            document.write('<footer class="article-footer"><div class="meta">');
            if (showTime == true) {
                document.write('<time class="time" datetime="' + postTime + '" title="' + postTimeFormat + '">');
                document.write(postTimeFormat);
                document.write('</time>'); // end time
            }
            if (showPostLabel == true) {
                document.write('<a class="label">');
                document.write(postLabel);
                document.write('</a>');
            }
            document.write('</div></footer>'); // END meta
        }
        document.write('</div>'); //end box-content
        document.write('</div>'); //end box
        document.write('</article>'); // end article
    }
}
var numposts = 5;
var showPostThumbnail = true;
var showTime = true;
var showPostLabel = true;

//if(blogId === blogCode){
function getLastPosts(url, name, style) {
    document.write('<div class="featured ' + style + '">');
    document.write('<div class="cat-title">');
    document.write('<a href="' + url + '/search">' + name + '</a>');
    document.write('</div>');
    document.write('<div class="articles">');
    document.write('<script src="' + url + '/feeds/posts/default/?orderby=published&alt=json-in-script&callback=MigoMagLastPost"></script>');
    document.write('</div>');
    document.write('</div>');
}

function getLastPostsLabel(url, label, style) {
    document.write('<div class="featured ' + style + '">');
    document.write('<div class="cat-title">');
    document.write('<a href="' + url + '/search/label/' + label + ' ">' + label + '</a>');
    document.write('</div>');
    document.write('<div class="articles">');
    document.write('<script src="' + url + '/feeds/posts/default/-/' + label + '?orderby=published&alt=json-in-script&callback=MigoMagLastPost"/></script>');
    document.write('</div>');
    document.write('</div>');
}

/*} else{
  document.write("نعتذر على هذا الإجراء .. تم تعطيل بعض الإضافة بسبب استخدامك لنسخة من القالب الغير مرخصة .. ");
}*/
