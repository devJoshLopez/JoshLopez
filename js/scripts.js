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
    textShadow: "0px -6px 0 #212121, 0px -6px 0 #212121, 0px 6px 0 #212121, 0px 6px 0 #212121, -6px 0px 0 #212121, 6px 0px 0 #212121, -6px 0px 0 #212121, 6px 0px 0 #212121, -6px - 6px 0 #212121, 6px -6px 0 #212121, -6px 6px 0 #212121, 6px 6px 0 #212121, -6px 18px 0 #212121, 0px 18px 0 #212121, 6px 18px 0 #212121, 0 19px 1px #000000"
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
    }, "secondDiv+=3")

});
