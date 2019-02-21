$(document).ready(function () {
	const turtlePower = $(".sewer-container");
	const turtleContent = $(".turtle-content");
	var pizzaBite = false;

	const pizzaSound = new Howl({
		src: ['../sounds/pizza-time-turtles-in-time.mp3'],
		volume: 0.6
	});

	// Set tweenmax properties
	TweenMax.set(".sewer-cover", {
		position: "absolute",
		left: '50%',
		top: '50%',
		xPercent: '-50',
		yPercent: '-50',
	});

	// Init timeline
	const turtleTimeline = new TimelineMax({
		paused: true
	});

	turtleTimeline
		.to(".sewer-cover", 1, {
			scale: 1.03,
			ease: Power4.easeInOut
		})
		.to(".sewer-cover", 1, {
			left: '40%',
			top: '50%',
			ease: Power4.easeInOut
		}, "-=0.7")
		.reverse(); //start in reversed state

	function trackPizzaCursor(e) {
		$(".turtle-content .cursor").css({
			top: (e.clientY - 80),
			left: (e.clientX - 20)
		});
		$(".sewer-hole").on('click', bitePizzaCursor);
	}

	function showPizzaCursor(e) {
		$(".turtle-content .cursor").css({
			opacity: 1
		});
	}

	function bitePizzaCursor(e) {
		if (!pizzaBite) {
			pizzaBite = true;
			pizzaSound.play();
			$(".full-slice").css({
				display: "none"
			});
		}
	}

	function hidePizzaCursor(e) {
		$(".turtle-content .cursor").css({
			opacity: 0
		});
	}

	// Bindings
	turtlePower.hover(function () {
		//set the reversed state equal to inverse of current reversed state (toggle direction)
		turtleTimeline.reversed(!turtleTimeline.reversed());
	});

	turtleContent.on('mousemove', trackPizzaCursor);
	turtleContent.on('mouseenter', showPizzaCursor);
	turtleContent.on('mouseleave touchend', hidePizzaCursor);

});