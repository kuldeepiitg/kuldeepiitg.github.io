function greet() {
	console.log("Hello world");
	return "hello github";
	}
	
function pagedown() {
	var height = $(window).height();
	
	height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	console.log(height);
	var scrollTop = $(document).scrollTop();
	console.log(scrollTop);
	
	$(document).scrollTop(scrollTop + height);
}

$(window).keydown(function(event) {
	if (event.which == 40) {
		pagedown();
	}
});