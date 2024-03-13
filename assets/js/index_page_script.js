var viewportHeight;
var viewportWidth;

$(document).ready(function() {
	viewportHeight = $(window).height();
	viewportWidth = $(window).width();
	$('.homepage_splash_screen').height(viewportHeight);

	$(window).resize(function() { //when the window is resized, recalculate window height
		viewportHeight = $(window).height();
		viewportWidth = $(window).width();

		$('.homepage_splash_screen').height(viewportHeight);
	});

	$(document).scroll(function() {
		if ($(document).scrollTop() <= viewportHeight || $(document).scrollTop() + viewportHeight + 300 >= $(document).height()) {
			$('.main_menu').toggleClass('main_menu--active', false);
			$('.logo').toggleClass('logo--inactive', true);
		} else {
			$('.main_menu').toggleClass('main_menu--active', true);
			$('.logo').toggleClass('logo--inactive', false);
		}
	});
});

$(window).load(function() {
	if ($(document).scrollTop() <= viewportHeight || $(document).scrollTop() + viewportHeight + 300 >= $(document).height()) {
		$('.main_menu').toggleClass('main_menu--active', false);
		$('.logo').toggleClass('logo--inactive', true);
	} else {
		$('.main_menu').toggleClass('main_menu--active', true);
		$('.logo').toggleClass('logo--inactive', false);
	}
});
