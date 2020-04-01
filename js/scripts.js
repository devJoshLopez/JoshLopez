// Script for anchor links
document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
	anchor.addEventListener("click", function (ev) {
		ev.preventDefault();
		let href = this.getAttribute('href');

		if (href === "#contact") {
			toggleContactModalAnimation(ev);
		} else {
			const targetElement = document.querySelector(this.getAttribute("href"));
			targetElement.scrollIntoView({
				block: "start",
				alignToTop: true,
				behavior: "smooth"
			});
		}

	});
});

// Script for contact modal
const contactModal = document.getElementById("contactModal");
const contactModalBody = document.getElementById("contactModalBody");
const contactModalCloseBackground = document.getElementById("contactModalCloseBackground");
const contactModalCloseBtn = document.getElementById("contactModalCloseBtn");
const contactModalFirstName = document.getElementById("mce-FNAME");
const contactModalLastName = document.getElementById("mce-LNAME");
const contactModalEmail = document.getElementById("mce-EMAIL");
const contactModalMessage = document.getElementById("mce-MESSAGE");
const contactModalShowAnimation = new TimelineMax({
	paused: true,
	reversed: true
});

TweenLite.set(contactModalBody, {
	transformStyle:"preserve-3d",
	rotateX:-60,
	backfaceVisibility:"hidden"
 });

contactModalShowAnimation
	.to(contactModal, .3, {
		autoAlpha: 1
	}, "show")
	.to(contactModalCloseBtn, .3, {
		rotation: 180,
		ease: Power2.easeInOut
	}, "show")
	.fromTo(contactModalBody, .3, {
        translateY: 0,
        rotationX: -40,
        y: '50%', 
        scale: .7,
        transformOrigin: "50% 150px -100px"
      }, {
        translateY: 0,
        rotationX: 0,
        y: '0%',
        ease: Power3.easeInOut,
		scale: 1,
		autoAlpha: 1
      });

let gameListners = false;

function toggleContactModalAnimation(event) {
	event.stopPropagation();
	// contactModalFirstName.value = "";
	// contactModalLastName.value = "";
	// contactModalEmail.value = "";
	// contactModalMessage.value = "";
	contactModalShowAnimation.reversed() ? contactModalShowAnimation.play() : contactModalShowAnimation.reverse();
	gameListners ? removeGameEventListners() : addGameEventListners();
}

contactModalCloseBtn.addEventListener("click", toggleContactModalAnimation);
contactModalCloseBackground.addEventListener("click", toggleContactModalAnimation);

// Script for nav menu
// navBtn
// navLst
const navBtn = document.getElementById("navBtn");
const navBurg1 = document.getElementById("navBurg1");
const navBurg2 = document.getElementById("navBurg2");
const navBurg3 = document.getElementById("navBurg3");
const navLst = document.getElementById("navLst");
const navShowAnimation = new TimelineMax({
	paused: true,
	reversed: true
});

navShowAnimation
	.set(navLst, {
		height: 0
	})
	.to(navBurg1, .3, {
		rotation: 45,
		y: "7.5px",
		x: "0",
		transformOrigin: "50%",
		ease: Power2.easeInOut
	}, "cross")
	.to(navBurg2, .3, {
		autoAlpha: 0
	}, "cross")
	.to(navBurg3, .3, {
		rotation: -45,
		y: "-8.5px",
		x: "0",
		transformOrigin: "50%",
		ease: Power2.easeInOut
	}, "cross")
	.to(navLst, 0.3, {
		height: "auto",
	})
	.to(navLst, 0.6, {
		autoAlpha: 1,
	}, "-=0.3");

function toggleNavAnimation() {
	navShowAnimation.reversed() ? navShowAnimation.play() : navShowAnimation.reverse();
}

navBtn.addEventListener("click", toggleNavAnimation);

// Script for random background images

// array of images
const backgroundImageUrls = ["images/small-line.svg", "images/medium-line.svg", "images/bottom-left-arrow.svg"]
const backgroundAnimSpeed = 0.5;
const backgroundImagesContainer = document.getElementById("backgroundImagesContainer");
let interval;
let backgroundImagesContainerWidth;
let backgroundImagesContainerHeight;

const backgroundRO = new ResizeObserver(entries => {
	for (let entry of entries) {
		const cr = entry.contentRect;
		backgroundImagesContainerWidth = backgroundImagesContainer.offsetWidth;
		backgroundImagesContainerHeight = backgroundImagesContainer.offsetHeight;
	}
});
backgroundRO.observe(backgroundImagesContainer);

function animateImages(posx, posy) {
	const css = "position: absolute; left: " + posx + "px; top: " + posy + "px";

	const randomBackgroundImageUrl = backgroundImageUrls[Math.floor(Math.random() * backgroundImageUrls.length)];

	const backgroundImage = document.createElement("img");
	backgroundImage.src = randomBackgroundImageUrl;

	const backgroundImageWrapper = document.createElement("div");
	backgroundImageWrapper.classList.add("backgroundImageWrapper");
	backgroundImageWrapper.setAttribute("style", css);

	backgroundImageWrapper.appendChild(backgroundImage);
	backgroundImagesContainer.appendChild(backgroundImageWrapper);

	setTimeout(function() {
		backgroundImageWrapper.classList.add("remove");
	}, 7000);

	setTimeout(function() {
		backgroundImageWrapper.remove();
	}, 8000);
}

function initbackgroundImages() {
	clearInterval(interval);
	backgroundImagesContainerWidth = backgroundImagesContainer.offsetWidth;
	backgroundImagesContainerHeight = backgroundImagesContainer.offsetHeight;

	if (backgroundAnimSpeed != 0) {
		speed = 200 / backgroundAnimSpeed;
		interval = setInterval(function() {
			//Generate Random position
			const posx = Math.ceil(Math.random() * backgroundImagesContainerWidth);
			const posy = Math.ceil(Math.random() * backgroundImagesContainerHeight);
			animateImages(posx, posy);
		}, speed);
	} else {
	}
}
initbackgroundImages();

// Script for game

//  Setup the canvas.
var canvas = document.getElementById("gameCanvas");
var heightRatio = 0.5;
canvas.width = 800;
canvas.height = canvas.width * heightRatio;
// canvas.width = 767;
// canvas.height = 390;

//  Create the game.
var game = new Game();

//  Initialise it with the game canvas.
game.initialise(canvas);

//  Start the game.
game.start();

//  Listen for keyboard events.
var pressedKeys = [];

var handler = function() {
	document.write(param);
}; 

function keydown(e) {
	var keycode = window.event.keycode || e.which;
	if (!pressedKeys[keycode])
		pressedKeys[keycode] = true;
	//  Supress further processing of left/right/space (37/29/32)
	if (keycode == 37 || keycode == 39 || keycode == 32) {
		e.preventDefault();
	}
	game.keyDown(keycode);
};

function keyup(e) {
	var keycode = window.event.keycode || e.which;
	if (pressedKeys[keycode])
		delete pressedKeys[keycode];
	game.keyUp(keycode);
};

addGameEventListners();

function addGameEventListners() {
	window.addEventListener("keydown", keydown);
	window.addEventListener("keyup", keyup);
	gameListners = true;
};

function removeGameEventListners() {
	window.removeEventListener("keydown", keydown);
	window.removeEventListener("keyup", keyup);
	gameListners = false;
};
