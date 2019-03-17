$(document).ready(function () {

	const portfolioCardItem = $('.card-item');

	// show portfolio cards when scrolling using scroll reveal
	ScrollReveal({
		reset: true
	}).reveal(portfolioCardItem);

	// add glitch effect when hovering portfolio cards and remove when not
	portfolioCardItem.hover(function () {
		$(this).find('.card-item-image').addClass("glitch-img");
		$(this).find('.card-item-image').mgGlitch({
			destroy: false,
			glitch: true,
			scale: true,
			blend: true,
			blendModeType: 'hue',
			glitch1TimeMin: 200,
			glitch1TimeMax: 400,
			glitch2TimeMin: 10,
			glitch2TimeMax: 100,
		});
	}, function () {
		$(this).find('.card-item-image').removeClass("glitch-img");
		$(this).find('.card-item-image').mgGlitch({
			destroy: true
		});
	});

});