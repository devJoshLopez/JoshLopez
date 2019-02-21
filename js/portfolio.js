$(document).ready(function () {

	const portfolioCardItem = $('.card-item');
	const hackersWrapper = $('.hackers-wrapper');
	const gibsonCanvas = $('#gibson');

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

	// use threejs for the background animation
	var scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2(0x111111, 0.13); // distance background color
	
	var camera = new THREE.PerspectiveCamera(42, hackersWrapper.innerWidth() / hackersWrapper.innerHeight(), 0.1, 2000);

	var renderer = new THREE.WebGLRenderer({
		antialias: true
	});

	renderer.setClearColor(0x111111); // background color
	renderer.setSize(hackersWrapper.innerWidth(), hackersWrapper.innerHeight());
	renderer.domElement.id = 'gibson';
	hackersWrapper.append(renderer.domElement);

	function onWindowResize() {
		camera.aspect = hackersWrapper.innerWidth() / hackersWrapper.innerHeight();
		camera.updateProjectionMatrix();
		renderer.setSize(hackersWrapper.innerWidth(), hackersWrapper.innerHeight());
	}
	$(window).resize(onWindowResize);

	//Floor
	var floorG = new THREE.BoxGeometry(20, 0.10, 20);
	var floorM = new THREE.MeshLambertMaterial({
		color: 0x111111
	});
	var floor = new THREE.Mesh(floorG, floorM);
	scene.add(floor);

	//Buildings
	var cube = [];
	for (var i = 0; i < 800; ++i) {
		var rHeight = (Math.random() * 5) + 0.25;
		var geometry = new THREE.BoxGeometry(0.25, rHeight, 0.25);
		var material = new THREE.MeshLambertMaterial({
			color: 0x65eee9
		});
		material.transparent = true;
		material.opacity = 0.2;
		cube[i] = new THREE.Mesh(geometry, material);
		floor.add(cube[i]);

		var x = (Math.random() * (10.00 - (-10)) + -10).toFixed(2);
		var y = 0;
		var z = (Math.random() * (10.00 - (-10)) + -10).toFixed(2);
		cube[i].position.set(x, y, z);
	}

	//camera
	camera.position.set(0, 2, 1);

	//lights
	var light1 = new THREE.DirectionalLight(0xffffff, 1);
	scene.add(light1);
	light1.position.set(1.5, 2, 1);

	var light2 = new THREE.DirectionalLight(0xffffff, 0.5);
	scene.add(light2);
	light2.position.set(-1.5, 2, 1);

	var distance = 0;
	var floorRotation = 1;
	var cameraPosition = 1;
	var easingAmount = 0.001;

	function render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);

		//move camera and city to mouse movement slowly
		var xDistance = floorRotation - floor.rotation.y;
		var yDistance = cameraPosition - camera.position.z;
		distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
		if (distance > 0) {
			floor.rotation.y += xDistance * easingAmount;
			camera.position.z += yDistance * easingAmount;
		}
	}
	render();

	// binding
	gibsonCanvas.on('mousemove', function (e) {
		var rotateDamper = 600;
		var cameraDamper = 70;

		floorRotation = -((e.clientX - gibsonCanvas.width()) / rotateDamper);
		cameraPosition = ((e.clientY) / cameraDamper);
	});

});