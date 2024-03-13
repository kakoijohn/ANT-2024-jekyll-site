$(document).ready(function() {
	var viewportHeight = $(window).height();
	var viewportWidth = $(window).width();

	console.log(viewportHeight);

	$(window).resize(function() { //when the window is resized, recalculate window height
		viewportHeight = $(window).height();
		viewportWidth = $(window).width();
	});

	$('.under_construction .exit').click(function() {
		$('.under_construction').css('display', 'none');
	});

	$('#drop_down_menu').click(function() {
		console.log("clicked drop down");
		$('.full_context_menu').toggleClass('full_context_menu--active', true);
	});
	
	$('#drop_only_menu').click(function() {
		$('.full_context_menu').toggleClass('full_context_menu--active', true);
	});	

	$('#drop_down_menu-exit').click(function() {
		$('.full_context_menu').toggleClass('full_context_menu--active', false);
	});
});