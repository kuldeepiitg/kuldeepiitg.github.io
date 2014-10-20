function greet() {
	console.log("Hello world");
	return "hello github";
	}
	

function pageUpDown(down) {
	var pageHeight = $(".page").height();
	var verticalScrollPosition = $(document).scrollTop();
	
	if (down = 1) {
		$(document).scrollTop(verticalScrollPosition + pageHeight);
	} else {
		$(document).scrollTop(verticalScrollPosition - pageHeight);
	}
}

$(window).keydown(function(event) {
	if (event.which == 40) {
		event.preventDefault();
		pageUpDown(1);
	} else if (event.which = 38) {
		event.preventDefault();
		pageUpDown(0);
	}
});
