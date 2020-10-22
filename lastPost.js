function MigoMagLastPost(t) {
	for(var e = 0; numposts > e; e++) {
		var i, r = t.feed.entry[e],
			l = r.title.$t;
		if(e == t.feed.entry.length) break;
		for(var o = 0; o < r.link.length; o++) {
			if("replies" == r.link[o].rel && "text/html" == r.link[o].type) {
				r.link[o].title, r.link[o].href
			}
			if("alternate" == r.link[o].rel) {
				i = r.link[o].href;
				break
			}
		}
		var n = "...";
		l.length > 70 && (l = l.substring(0, 70) + " " + n);
		var u, h = r.published.$t,
			m = h.substring(0, 10),
			f = (r.category[0].term, r.id.$t.match(/\d+$/)[0]);
		try {
			u = r.media$thumbnail.url
		} catch(v) {
			s = r.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), u = -1 != a && -1 != b && -1 != c && "" != d ? d : "https://1.bp.blogspot.com/-igV9vkZfPhQ/X0KXOPzY91I/AAAAAAAADCI/fNMR6mXIHM04KHVkqvN9MsKbprYh2LSiACLcBGAsYHQ/s640/11.png"
		}
		if(document.write('<article class="article-posts" id="post-id-' + f + '">'), document.write('<div class="box">'), 1 == showPostThumbnail)
			if(1 == showLazy) {
				var p = '<a class="thumbnail" href="' + i + '"><img class="lozad" loading="lazy" data-src="' + u + '" alt="' + l + '"/></a>';
				document.write(p)
			} else {
				var g = '<a class="thumbnail" href="' + i + '"><img src="' + u + '" alt="' + l + '"/></a>';
				document.write(g)
			}
		document.write('<div class="box-content">'), document.write('<header class="article-header"><h2 class="post-headding"><a class="link" href="' + i + '">'), document.write(l), document.write("</a></h2></header>"), (1 == showTime || 1 == showPostLabel) && (document.write('<footer class="article-footer"><div class="meta">'), 1 == showTime && (document.write('<time class="time" datetime="' + h + '" title="' + m + '">'), document.write(m), document.write("</time>")), document.write("</div></footer>")), document.write("</div></div></article>")
	}
}

function getLastPosts(t, s, e) {
	document.write('<div class="featured ' + e + '"><div class="cat-title"><a href="' + t + '/search">' + s + '</a></div><div class="articles"><script src="' + t + '/feeds/posts/default/?orderby=published&alt=json-in-script&callback=MigoMagLastPost"></script></div></div>')
}

function getLastPostsLabel(t, s, e) {
	document.write('<div class="featured ' + e + '"><div class="cat-title"><a href="' + t + "/search/label/" + s + ' ">' + s + '</a></div><div class="articles"><script src="' + t + "/feeds/posts/default/-/" + s + '?orderby=published&alt=json-in-script&callback=MigoMagLastPost"/></script></div></div>')
}

function getLastPostsSlide(t, s, e, i) {
	document.write('<div class="featured ' + e + '"><div class="cat-title"><a href="' + t + '/search">' + s + '</a></div><div class="articles main-carousel" id="' + i + '"><script src="' + t + '/feeds/posts/default/?orderby=published&alt=json-in-script&callback=MigoMagLastPost"></script></div></div>')
}

function getLastPostsLabelSlide(t, s, e, i) {
	document.write('<div class="featured ' + e + '"><div class="cat-title"><a href="' + t + "/search/label/" + s + ' ">' + s + '</a></div><div class="articles main-carousel" id="' + i + '"><script src="' + t + "/feeds/posts/default/-/" + s + '?orderby=published&alt=json-in-script&callback=MigoMagLastPost"/></script></div></div>')
}
var numposts = 5,
	showPostThumbnail = !0,
	showTime = !0,
	showLazy = 0;
