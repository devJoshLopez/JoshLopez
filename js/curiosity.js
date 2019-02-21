$(document).ready(function () {
  const staticWrapper = $('.static-wrapper');
  const tvToggleButton = $('#tv-toggle');
  var isTurnedOn = true;

  // Set tweenmax properties
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
  const tvTimeline = new TimelineMax({
    paused: true
  });

  tvTimeline
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

  function toggleTV() {
    if (isTurnedOn) {
      tvTimeline.restart();
    }
    if (!isTurnedOn) {
      tvTimeline.reverse();
    }
    isTurnedOn = !isTurnedOn;
  }

  // Bindings
  tvToggleButton.on('click', function () {
    tvToggleButton.toggleClass("off");
    toggleTV();
  });

  // Init timeline
  const flyInTimeline = new TimelineMax({
    repeat: -1,
    repeatDelay: 2
  });

  flyInTimeline
    .to(".fly-in div:nth-child(1)", 1, {
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

});