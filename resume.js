
animationTime = 500;
quitePeriod = 500;
lastAnimation = 0;

/**
 * Page Down.
 */
function pageDown() {
	var pageHeight = $(".page").innerHeight();
	var verticalScrollPosition = $(document).scrollTop();
	var shift = pageHeight - verticalScrollPosition % pageHeight;
	$('html, body').animate({
	    scrollTop : verticalScrollPosition + shift
	 }, animationTime);
}

/**
 * Page Up.
 */
function pageUp() {
	var pageHeight = $(".page").innerHeight();
	var verticalScrollPosition = $(document).scrollTop();
	var shift = verticalScrollPosition % pageHeight;
	if (shift == 0) {
		shift = pageHeight;
	}
	$('html, body').animate({
	    scrollTop : verticalScrollPosition - shift
	}, animationTime);
}

/**
 * On pressing down arrow key, page down
 * and up arrow key, page up
 */
$(window).keydown(function(event) {
	if (event.keyCode == 40) {
		event.preventDefault();
		pageDown();
	} else if (event.keyCode == 38) {
		event.preventDefault();
		pageUp();
	} else if (event.keyCode == 32) {
		event.preventDefault();
	}
});

$(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    event.preventDefault();
    var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    
    var timeNow = new Date().getTime();
    if (timeNow - lastAnimation < quitePeriod + animationTime) {
    	event.preventDefault();
        return;
    }
    
    if (delta < 0) {
        pageDown()
      } else {
        pageUp()
      }
      lastAnimation = timeNow;
});

setTimeout(function(){
	$(".page").innerHeight($(window).height()+ "px");
	$(".page").css('padding-top', $(".header").height() + "px");
//	$(".oddPage").html("ODD PAGE");
//	$(".evenPage").html("Even PAGE");
},100);
