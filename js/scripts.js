$(document).ready(function () {

  var staticWrapper = $('.static-wrapper');
  var tvToggleButton = $('#tv-toggle');
  // var flyIn = $('.fly-in');

  var isTurnedOn = true;

  var timeline;

  function buildTimeline() {
    timeline = new TimelineMax({
      paused: true
    });

    timeline
      .to(staticWrapper, 0.2, {
        width: '100%',
        height: '2px',
        background: '#ffffff',
        ease: Power2.easeOut
      })
      .to(staticWrapper, 0.2, {
        width: '0',
        height: '0',
        background: '#ffffff'
      });
  }

  function toggleTV() {
    if (isTurnedOn) {
      timeline.restart();
    }

    if (!isTurnedOn) {
      timeline.reverse();
    }

    isTurnedOn = !isTurnedOn;
  }

  // Initialize
  $(document).ready(buildTimeline);

  // Bindings
  tvToggleButton.on('click', function () {
    tvToggleButton.toggleClass("off");
    toggleTV();
  });



  // Set properties
  TweenMax.set(".fly-in", {
    perspective: 400
  });
  TweenMax.set(".fly-in div", {
    rotationY: -10,
    rotationX: 10,
    rotation: 5,
    scale: 0.2,
    opacity: 0,
    position: "absolute",
    left: '50%',
    top: '50%',
    xPercent: '-50',
    yPercent: '-50',
  });

  // Init timeline
  var tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 2
  });

  tl.to(".fly-in div:nth-child(1)", 1, {
      scale: 1.1,
      ease: Power4.easeIn
    }, "firstDiv")
    .to(".fly-in div:nth-child(1)", 1, {
      opacity: 1,
      ease: Power4.easeIn
    }, "firstDiv")
    .to(".fly-in div:nth-child(1)", 1, {
      rotationY: 0,
      rotationX: -7,
      rotation: -10,
      ease: Power4.easeIn
    }, "firstDiv")
    .to(".fly-in div:nth-child(1)", 1, {
      opacity: 0,
    }, "firstDiv+=3")

    .to(".fly-in div:nth-child(2)", 1, {
      scale: 1.1,
      ease: Power4.easeIn
    }, "secondDiv")
    .to(".fly-in div:nth-child(2)", 1, {
      opacity: 1,
      ease: Power4.easeIn
    }, "secondDiv")
    .to(".fly-in div:nth-child(2)", 1, {
      rotationY: 0,
      rotationX: -7,
      rotation: -15,
      ease: Power4.easeIn
    }, "secondDiv")
    .to(".fly-in div:nth-child(2)", 1, {
      opacity: 0,
    }, "secondDiv+=3");


  var turtlePower = $(".sewer-container");
  var turtleTimeline = new TimelineMax();

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



  const pizzaSound = new Howl({
    src: ['../sounds/pizza-time-turtles-in-time.mp3'],
    volume: 0.6
  });



  const lightning = new TimelineMax({
    paused: true
  });
  lightning.add(startLightning());

  function startLightning() {
    const tl = new TimelineMax();
    const bg = document.querySelector('.bg');
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
    TweenMax.to("#lightning-button", duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to("#lightning-button", duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to("#lightning-button", duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });

  });


  // add glitch effect on img on hover and remove when not
  $('.card-item').hover(
    function () {
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
    },
    function () {
      $(this).find('.card-item-image').removeClass("glitch-img");
      $(this).find('.card-item-image').mgGlitch({
        destroy: true
      });
    }
  );

  // show cards when scrolling
  ScrollReveal({
    reset: true
  }).reveal('.card-item');



});
