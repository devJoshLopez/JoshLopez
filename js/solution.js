$(document).ready(function () {
	const bttfContent = $(".bttf-content");
	const lightningButton = $("#lightning-button");
	const streak = $('.lightning-streak');
	const streakPathLength = $('.lightning-streak__path').get(0).getTotalLength();

	// Set tweenmax properties
	TweenMax.set(".delorean", {
		position: "absolute",
		left: '150%',
		bottom: '0',
		xPercent: '-50',
	});

	TweenMax.set(".fire", {
		position: "absolute",
		left: '42%',
		bottom: '0',
		xPercent: '-50',
		opacity: '0'
	});

	// Init timelines
	const lightningTimeline = new TimelineMax({
		paused: true // paused to be random later
	});

	const deloreanTimeline = new TimelineMax();

	lightningTimeline
		.set(streak, {
			opacity: 1,
			strokeWidth: 0.5,
			strokeDasharray: streakPathLength,
			strokeDashoffset: streakPathLength,
		})
		.staggerTo(streak, 0.25, {
			strokeDashoffset: 0,
			stroke: 'white',
			filter: 'drop-shadow( -1px -1px 1px #f9f175 )',
			ease: Linear.easeIn
		}, -0.1)
		.staggerTo(streak, 0.4, {
			opacity: 0,
			ease: Bounce.easeOut
		}, -0.02)
		.to(streak, 0.1, {
			opacity: 1,
			strokeWidth: '2px',
			filter: 'drop-shadow( -1px -1px 4px #6304c9 )',
			ease: Linear.easeOut
		})
		.to(streak, 0.2, {
			strokeWidth: '0.5px',
			filter: 'drop-shadow( -1px -1px 4px #4e2db7 )',
			ease: Linear.easeOut
		})
		.staggerTo(streak, 0.1, {
			opacity: 0,
			ease: Linear.easeOut
		}, -0.1);

	function randomLightning() {
		lightningTimeline.restart();
		setTimeout(randomLightning, Math.random() * 6000);
	}
	randomLightning();

	function showDelorean(e) {
		deloreanTimeline
			.to(".delorean", 1, {
				left: '50%',
				ease: Power4.easeInOut
			});
	}

	function hideDelorean(e) {
		deloreanTimeline
			.to(".delorean", 1, {
				left: '-150%',
				ease: Power4.easeInOut
			})
			.to(".fire", 1, {
				opacity: '1',
				ease: Back.easeOut.config(1.4)
			}, "-=0.65")
			.set(".delorean", {
				position: "absolute",
				left: '150%'
			})
			.to(".fire", 1, {
				opacity: '0',
				ease: Power4.easeInOut
			}, "+=0.9");
	}

	// Bindings
	bttfContent.on('mouseenter', showDelorean);
	bttfContent.on('mouseleave', hideDelorean);

	lightningButton.on('click', function () {
		$(".more-content").toggleClass("show");
	});

});