// this is the script to control the behavior of the elements on the about page
// when the user scrolls it into view.
// copyright: Matthew Melton

// This solved the problem so that the about section would not flicker
// for the user over the home div
$(document).ready(function () {
	$('#about-horizontal-container').css('visibility', 'visible');
});

$.fn.IsInViewport = function(){
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).offset().bottom;

	var windowTop = $(this).offset().top;
	var windowBottom = elementTop + $(this).offset().bottom;

	if((elementBottom > windowTop) && (elementTop < windowBottom)){ return true; }
	else { return false; }
}

$.fn.SlideFromLeft = function(){
	var frames = 120;
	var spaceToMove = 200;
	var step = spaceToMove / frames;
	for(var i=0; i<frames; i+step){
		$(this).css('left', toString(step) + 'px');
	}
}

$(window).on('scroll resize', function () {
	if($('#about-header').IsInViewport()){
		$('#about-header').SlideFromLeft();
	}
});