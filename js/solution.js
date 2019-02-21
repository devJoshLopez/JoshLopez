$(document).ready(function () {

	const lightning = new TimelineMax({
		paused: true
	});
	lightning.add(startLightning());

	function startLightning() {
		const tl = new TimelineMax();
		const streak = document.querySelectorAll('.lightning-streak');
		const pathLength = document.querySelector('.lightning-streak__path').getTotalLength();

		tl.set(streak, {
			opacity: 1,
			strokeWidth: 0.5,
			strokeDasharray: pathLength,
			strokeDashoffset: pathLength,
		});

		tl.staggerTo(streak, 0.25, {
			strokeDashoffset: 0,
			stroke: 'white',
			filter: 'drop-shadow( -1px -1px 1px #f9f175 )',
			ease: Linear.easeIn
		}, -0.1);

		tl.staggerTo(streak, 0.4, {
			opacity: 0,
			ease: Bounce.easeOut
		}, -0.02);

		tl.to(streak, 0.1, {
			opacity: 1,
			strokeWidth: '2px',
			filter: 'drop-shadow( -1px -1px 4px #6304c9 )',
			ease: Linear.easeOut
		});

		tl.to(streak, 0.2, {
			strokeWidth: '0.5px',
			filter: 'drop-shadow( -1px -1px 4px #4e2db7 )',
			ease: Linear.easeOut
		});

		tl.staggerTo(streak, 0.1, {
			opacity: 0,
			ease: Linear.easeOut
		}, -0.1);

		return tl;
	}

	$("#lightning-button").on('click', function () {
		lightning.restart();
	});

	function randomLightning() {
		lightning.restart();
		setTimeout(randomLightning, Math.random() * 6000);
	}
	randomLightning();





	var deloreanTimeline = new TimelineMax();

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

	$(".bttf-content").on('mouseenter', showDelorean);
	$(".bttf-content").on('mouseleave', hideDelorean);

	$("#lightning-button").on('click', function () {
		$(".more-content").toggleClass("show");
		var duration = 0.3,
			delay = 0.08;

		TweenMax.to("#lightning-button", duration, {
			scaleY: 1.6,
			ease: Expo.easeOut
		});

		TweenMax.to("#lightning-button", duration, {
			scaleX: 1.2,
			scaleY: 1,
			ease: Back.easeOut,
			easeParams: [3],
			delay: delay
		});

		TweenMax.to("#lightning-button", duration * 1.25, {
			scaleX: 1,
			scaleY: 1,
			ease: Back.easeOut,
			easeParams: [6],
			delay: delay * 3
		});

	});

});