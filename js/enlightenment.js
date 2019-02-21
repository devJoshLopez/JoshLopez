$(document).ready(function () {

	const turtlePower = $(".sewer-container");
	const turtleTimeline = new TimelineMax();

	const pizzaSound = new Howl({
		src: ['../sounds/pizza-time-turtles-in-time.mp3'],
		volume: 0.6
	});

	TweenMax.set(".sewer-cover", {
		position: "absolute",
		left: '50%',
		top: '50%',
		xPercent: '-50',
		yPercent: '-50',
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
	//  .timeScale(4) //speed it up for testing

	turtlePower.hover(function () {
		//set the reversed state equal to inverse of current reversed state (toggle direction)
		turtleTimeline.reversed(!turtleTimeline.reversed());
	});


	var pizzaBite = false;

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

	$(".turtle-content").on('mousemove', trackPizzaCursor);
	$(".turtle-content").on('mouseenter', showPizzaCursor);
	$(".turtle-content").on('mouseleave', hidePizzaCursor);

});