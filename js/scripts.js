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
    .to(".sewer-cover", 1, {scale: 1.03, ease:Power4.easeInOut})
   .to(".sewer-cover", 1, {left: '40%', top: '50%', ease:Power4.easeInOut}, "-=0.7")
   .reverse(); //start in reversed state
  //  .timeScale(4) //speed it up for testing

  turtlePower.hover(function(){
  //set the reversed state equal to inverse of current reversed state (toggle direction)
  turtleTimeline.reversed(!turtleTimeline.reversed());
}); 


var pizzaBite = false;

function showPizzaCursor(e) {
  $(".turtle-content .cursor").css({
    top : (e.screenY - 150),
    left: (e.screenX - 10),
    opacity: 1
  });
  $(".sewer-hole").on('click' , bitePizzaCursor);
};


function bitePizzaCursor(e) {
  if (!pizzaBite) {
    pizzaBite = true;
    pizzaSound.play();
    $(".full-slice").css({
      display : "none"
    });
  };
};

function hidePizzaCursor(e) {
  $(".turtle-content .cursor").css({
    opacity: 0
  });
};

$(".turtle-content").on('mousemove' , showPizzaCursor);
$(".turtle-content").on('mouseout' , hidePizzaCursor);


const pizzaSound = new Howl({
  src: ['../sounds/pizza-time-turtles-in-time.mp3'],
  volume: 0.6
});


});
