function lastPosts(t) {
  for(i = 0; i < t.feed.entry.length; i++) {
    var l = t.feed.entry[i];
    for(j = 0; j < l.link.length && "alternate" != l.link[j].rel; j++);
    var e, r = l.link[j].href,
        n = l.title.$t;
    var  PostsLabelFirst = l.category[0].term;
    try {
      e = l.media$thumbnail.url
    } catch(o) {
      s = l.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), e = -1 != a && -1 != b && -1 != c && "" != d ? d : "https://1.bp.blogspot.com/-igV9vkZfPhQ/X0KXOPzY91I/AAAAAAAADCI/fNMR6mXIHM04KHVkqvN9MsKbprYh2LSiACLcBGAsYHQ/s640/11.png"
    }
    var v = e.replace("s72-c", "s1600"),
        p = l.published.$t,
        f = p.substring(0, 10),
        u = '<div class="box"><time class="meta-item articles-published" datetime="' + p + '" title="' + f + '"><span class="meta-icon far fa-clock"/>'+ f +'</time><a class="thumbnail" href="' + r + '"><img loading="lazy" class="swiper-lazy lazy" data-src="' + v + '" alt="' + n + '"></a><div class="box-content"><h2 class="post-headding"><a class="link" href="' + r + '"><span class="post-title">' + n + "</span></a></h2></div></div>";
    document.write('<article class="article-posts article-label-'+ PostsLabelFirst +' swiper-slide">' + u + "</article>")
  }
}

function getLastPosts(s, t, i, a) {
  if(null == s || "" == s) var s = location.origin;
  if(null == a || "" == a) var a = 5;
  if(null == t || "" == t) var t = "أخر المشاركات";
  document.write('<div class="block ' + i + '"><div class="block-title"><a class="block-group" href="' + s + '/search/">' + t + '</a></div><div class="articles"><script src="' + s + "/feeds/posts/default?alt=json-in-script&max-results=" + a + '&callback=lastPosts"></script></div></div>')
}

function getLastPostsSlide(s, t, i, a) {
  if(null == s || "" == s) var s = location.origin;
  if(null == a || "" == a) var a = 5;
  if(null == l || "" == l) var l = "أخر المشاركات";
  document.write('<div class="block ' + t + '"><div class="block-title"><a class="block-group" href="' + s + '/search/">' + l + '</a></div><div class="swiper-container" id="' + i + '"><div class="articles swiper-wrapper"><script src="' + s + "/feeds/posts/default/?alt=json-in-script&max-results=" + a + '&callback=lastPosts"></script></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div>')
}

function getLastPostsLabel(s, t, i, a) {
  if(null == s || "" == s) var s = location.origin;
  if(null == a || "" == a) var a = 5;
  document.write('<div class="block ' + i + '"><div class="block-title"><a class="block-group" href="' + s + "/search/label/" + t + '">' + t + '</a></div><div class="articles"><script src="' + s + "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=" + a + '&callback=lastPosts"></script></div></div>')
}

function getLastPostsLabelSlide(s, t, i, a, l) {
  if(null == s || "" == s) var s = location.origin;
  if(null == l || "" == l) var l = 5;
  document.write('<div class="block ' + i + '"><div class="block-title"><a class="block-group" href="' + s + "/search/label/" + t + '">' + t + '</a></div><div class="swiper-container" id="' + a + '"><div class="articles swiper-wrapper"><script src="' + s + "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=" + l + '&callback=lastPosts"></script></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div>')
}
