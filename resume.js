
/**
 * Page up or down.
 * 
 * @param down if 1 then take page down, else if -1 then up.
 */
function pageUpDown(down) {
	var pageHeight = $(".page").height();
	var verticalScrollPosition = $(document).scrollTop();
	
	if (down == 1) {
		var shift = pageHeight - verticalScrollPosition % pageHeight;
		$('html, body').animate({
		    scrollTop : verticalScrollPosition + shift
		 }, 500);
	} else if (down == -1){
		var shift = verticalScrollPosition % pageHeight;
		if (shift == 0) {
			shift = pageHeight;
		}
		$('html, body').animate({
		    scrollTop : verticalScrollPosition - shift
		 }, 500);
	}
}

/**
 * On pressing down arrow key, page down
 * and up arrow key, page up
 */
$(window).keydown(function(event) {
	if (event.keyCode == 40) {
		event.preventDefault();
		pageUpDown(1);
	} else if (event.keyCode = 38) {
		event.preventDefault();
		pageUpDown(-1);
	}
});

$(".page").height($(window).height()-$(".header").height() + "px");
$(".page").css('padding-top', $(".header").height() + "px")

