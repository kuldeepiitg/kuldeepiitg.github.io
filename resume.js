
/**
 * Page Down.
 */
function pageDown() {
	var pageHeight = $(".page").innerHeight();
	var verticalScrollPosition = $(document).scrollTop();
	var shift = pageHeight - verticalScrollPosition % pageHeight;
	$('html, body').animate({
	    scrollTop : verticalScrollPosition + shift
	 }, 500);
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
	}, 500);
}

/**
 * On pressing down arrow key, page down
 * and up arrow key, page up
 */
$(window).keydown(function(event) {
	if (event.keyCode == 40) {
		event.preventDefault();
		pageDown();
	} else if (event.keyCode = 38) {
		event.preventDefault();
		pageUp();
	}
});

$(window).scroll(function(){
	event.preventDefault();
//	pageDown();
});

$(".page").innerHeight($(window).height()+ "px");
$(".page").css('padding-top', $(".header").height() + "px");
$(".oddPage").html("ODD PAGE");
$(".evenPage").html("Even PAGE");

