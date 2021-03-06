var  defaultImage = '';
function MigoMagLastPost(e) {
for (var t = 0; t < e.feed.entry.length; t++) {
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
	} else thumbnail = defaultImage
}
document.write('<article class="article-posts swiper-slide" id="post-id-' + postID + '">');
document.write('<div class="box">');
if (showPostThumbnail == true) {
	var printThumbnail = '<a class="thumbnail" href="' + postUrl + '"><img class="lozad" loading="lazy" src="' + thumbnail + '" alt="' + postTitle + '"/></a>';
	document.write(printThumbnail);
}

document.write('<div class="box-content">');
document.write('<h2 class="post-headding"><a class="link" href="' + postUrl + '">');
document.write(postTitle);
document.write('</a></h2>'); // end header
document.write('</div></div></article>');
}
}

var showPostThumbnail = true;


function getLastPosts(url, name, style,maxResults) {
	if(url == '' || url == null){
	  var url = location.origin;
	}
	if(name == '' || name == null){
	  var name = 'أخر المشاركات';
	}

	if(style == ''|| style == null){
	   var style = 'not-sidebar grid grid-3';
	}

	if(maxResults == ''|| maxResults == null){
	   var maxResults = 6;
	}
	document.write('<div class="featured ' + style + '"><div class="cat-title"><a href="' + url + '/search">' + name + '</a></div><div class="articles"><script loading="lazy" src="' + url + '/feeds/posts/default/?orderby=published&max-results='+ maxResults +'&alt=json-in-script&callback=MigoMagLastPost"></script></div></div>');
}

function getLastPostsLabel(url, label, style,maxResults) {
	if(url == '' || url == null){
	  var url = location.origin;
	}
	if(label == '' || label == null){
	  var name = 'أخر المشاركات';
	}

	if(style == ''|| style == null){
	   var style = 'not-sidebar grid grid-3';
	}

	if(maxResults == ''|| maxResults == null){
	   var maxResults = 6;
	}
document.write('<div class="featured ' + style + '"><div class="cat-title"><a href="' + url + '/search/label/' + label + ' ">' + label + '</a></div><div class="articles"><script loading="lazy" src="' + url + '/feeds/posts/default/-/' + label + '?orderby=published&max-results='+ maxResults +'&alt=json-in-script&callback=MigoMagLastPost"></script></div></div>');
}

function getLastPostsSlide(url, name, style,maxResults, slidId){
	if(url == '' || url == null){
	var url = location.origin;
	}
	if(name == '' || name == null){
	  var name = 'أخر المشاركات';
	}

	if(style == ''|| style == null){
	   var style = 'not-sidebar grid grid-3';
	}

	if(maxResults == ''|| maxResults == null){
	   var maxResults = 6;
	}
document.write('<div class="featured ' + style + '"><div class="cat-title"><a href="' + url + '/search">' + name + '</a></div><div class="articles main-carousel" id="' + slidId + '"><script loading="lazy" src="' + url + '/feeds/posts/default/?orderby=published&max-results='+ maxResults +'&alt=json-in-script&callback=MigoMagLastPost"></script></div></div>');
}


function getLastPostsLabelSlide(url, label, style,maxResults,slidId) {
	if(url == '' || url == null){
	var url = location.origin;
	}
	if(label == '' || label == null){
	  var label = 'أخر المشاركات';
	}

	if(style == ''|| style == null){
	   var style = 'not-sidebar grid grid-3';
	}

	if(maxResults == ''|| maxResults == null){
	   var maxResults = 6;
	}
document.write('<div class="featured swiper-container' + style + '"><div class="cat-title"><a href="' + url + '/search/label/' + label + ' ">' + label + '</a></div><div class="articles swiper-wrapper" id="'+ slidId +'"><script loading="lazy" src="' + url + '/feeds/posts/default/-/' + label + '?orderby=published&max-results='+ maxResults +'&alt=json-in-script&callback=MigoMagLastPost"></script></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div<div class="swiper-button-next"></div><div class="swiper-scrollbar"></div></div>');
}


//
function getLastPostsLabelSlide22(url, label, maxResults) {
	if(url == '' || url == null){
	var url = location.origin;
	}
	if(maxResults == ''|| maxResults == null){
	   var maxResults = 6;
	}
document.write('<script src="' + url + '/feeds/posts/default/-/' + label + '?orderby=published&max-results='+ maxResults +'&alt=json-in-script&callback=MigoMagLastPost"></script>');
}
