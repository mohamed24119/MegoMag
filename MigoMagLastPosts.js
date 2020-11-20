function lastPosts(json) {
	for (i = 0; i < json.feed.entry.length; i++){
		var jfei = json.feed.entry[i];
		for (j = 0; j < jfei.link.length; j++) {
			if (jfei.link[j].rel == 'alternate') {
				break;
			}
		} // end for loop links
		
		var postUrl = jfei.link[j].href;
		var postTitle = jfei.title.$t;
		var thumbnail;
		try {
			thumbnail = jfei.media$thumbnail.url;
		} catch (h) {
			s = jfei.content.$t;
			a = s.indexOf("<img");
			b = s.indexOf('src="', a);
			c = s.indexOf('"', b + 5);
			d = s.substr(b + 5, c - b - 5);
			if (a != -1 && b != -1 && c != -1 && d != "") {
			thumbnail = d;
			} else{
				thumbnail = "https://1.bp.blogspot.com/-igV9vkZfPhQ/X0KXOPzY91I/AAAAAAAADCI/fNMR6mXIHM04KHVkqvN9MsKbprYh2LSiACLcBGAsYHQ/s640/11.png";
			}
		}

		var fixThumbnail = thumbnail.replace("s72-c", "s1600");
		var printElements = '<div class="box"><a class="thumbnail" href="'+ postUrl +'"><img loading="lazy" class="swiper-lazy lazy" src="'+ fixThumbnail +'" alt="'+ postTitle +'"></a><div class="box-content"><h2 class="post-headding"><a class="link" href="'+ postUrl +'">'+ postTitle +'</a></h2></div></div>';
		document.write('<article class="article-posts swiper-slide">'+ printElements +'</article>');
	} // end for loop entry[i]

} // function lastPosts

function getLastPosts(url,style,max){
	if(url == null || url == ''){
		var url = 'https://www.mohamed24119.com';
	}
	if(max == null || max == ''){
		var max = 5;
	}
	document.write('<div class="featured ' +style +'"><div class="articles"><script src="'+ url +'/feeds/posts/default?alt=json-in-script&max-results='+ max +'&callback=lastPosts"></script></div></div>');
}

function getLastPostsLabel(url,label,style,max){
	if(url == null || url == ''){
		var url = 'https://www.mohamed24119.com';
	}
	if(max == null || max == ''){
		var max = 5;
	}
	if(label == null || label == ''){
	
	}
	document.write('<div class="featured ' +style +'"><div class="articles"><script src="'+ url +'/feeds/posts/default/-/'+ label +'?alt=json-in-script&max-results='+ max +'&callback=lastPosts"></script></div></div>');
}

function getLastPostsSlide(url,style,slideId,max){
	if(url == null || url == ''){
		var url = 'https://www.mohamed24119.com';
	}

	if(max == null || max == ''){
		var max = 5;
	}
	
	if(slideId == null || slideId == ''){
	}
	document.write('<div class="featured '+ style +'"><div class="swiper-container" id="'+ slideId +'"><div class="articles swiper-wrapper"><script src="'+ url +'/feeds/posts/default/?alt=json-in-script&max-results='+ max +'&callback=lastPosts"></script></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div>');
}

function getLastPostsLabelSlide(url,label,style,slideId,max){
	if(url == null || url == ''){
		var url = 'https://www.mohamed24119.com';
	}

	if(max == null || max == ''){
		var max = 5;
	}
	
	if(slideId == null || slideId == ''){
	}
	if(label == null || label == ''){
	}
	document.write('<div class="featured '+ style +'"><div class="swiper-container" id="'+ slideId +'"><div class="articles swiper-wrapper"><script src="'+ url +'/feeds/posts/default/-/'+ label +'?alt=json-in-script&max-results='+ max +'&callback=lastPosts"></script></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div>');
}
