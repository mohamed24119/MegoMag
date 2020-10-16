function MigoMagLastPost(e) {
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
    document.write('<article class="article-posts" id="post-id-' + postID + '">');
    document.write('<div class="box">');
    if (showPostThumbnail == true) {


        if(showLazy == true){
            var printThumbnailLazy = '<a class="thumbnail" href="' + postUrl + '"><img class="lozad" data-src="' + thumbnail + '" alt="' + postTitle + '"/></a>';
        document.write(printThumbnailLazy);
        } else{
            var printThumbnail = '<a class="thumbnail" href="' + postUrl + '"><img src="' + thumbnail + '" alt="' + postTitle + '"/></a>';
            document.write(printThumbnail);
        }
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
        document.write('</div></footer>'); // END meta
    }
    document.write('</div></div></article>');
}
}
var numposts = 5;
var showPostThumbnail = true;
var showTime = true;
var showLazy = true;



function getLastPosts(url, name, style) {
    document.write('<div class="featured ' + style + '"><div class="cat-title"><a href="' + url + '/search">' + name + '</a></div><div class="articles"><script src="' + url + '/feeds/posts/default/?orderby=published&alt=json-in-script&callback=MigoMagLastPost"></script></div></div>');
}

function getLastPostsLabel(url, label, style) {
document.write('<div class="featured ' + style + '"><div class="cat-title"><a href="' + url + '/search/label/' + label + ' ">' + label + '</a></div><div class="articles"><script src="' + url + '/feeds/posts/default/-/' + label + '?orderby=published&alt=json-in-script&callback=MigoMagLastPost"/></script></div></div>');
}

function getLastPostsSlide(url, name, style, slidId){
    document.write('<div class="featured ' + style + '"><div class="cat-title"><a href="' + url + '/search">' + name + '</a></div><div class="articles owl-carousel" id="' + slidId + '"><script src="' + url + '/feeds/posts/default/?orderby=published&alt=json-in-script&callback=MigoMagLastPost"></script></div></div>');
}

if(activeOwlCarousel === true){
    function getLastPostsLabelSlide(url, label, style, carouselID) {
        document.write('<div class="featured ' + style + '"><div class="cat-title"><a href="' + url + '/search/label/' + label + ' ">' + label + '</a></div><div class="articles owl-carousel" id="'+ carouselID +'"><script src="' + url + '/feeds/posts/default/-/' + label + '?orderby=published&alt=json-in-script&callback=MigoMagLastPost"/></script></div></div>');
    }
}

