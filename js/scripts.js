$(document).ready(function () {
  //   var canvas = document.createElement("canvas");
  //   c = canvas.getContext('2d');

  //   canvas.width = innerWidth;
  //   canvas.height = innerHeight;

  //   var imageData = c.createImageData(canvas.width, canvas.height);
  //   $(".static-wrapper").append(canvas);

  //   (function loop() {

  //     for (var i = 0, a = imageData.data.length; i < a; i++) {
  //       imageData.data[i] = (Math.random() * 255) | 0;
  //     }

  //     c.putImageData(imageData, 0, 0);
  //     requestAnimationFrame(loop);

  //   })();


  (function () {
    var SELECTOR_SCREEN_ELEMENT = '.static-wrapper';
    var SELECTOR_SWITCHER_TV = '#switcher-tv';

    var isTurnedOn = true;

    var timeline;

    function buildTimeline() {
      timeline = new TimelineMax({
        paused: true
      });

      timeline
        .to(SELECTOR_SCREEN_ELEMENT, 0.2, {
          width: '100%',
          height: '2px',
          background: '#ffffff',
          ease: Power2.easeOut
        })
        .to(SELECTOR_SCREEN_ELEMENT, 0.2, {
          width: '0',
          height: '0',
          background: '#ffffff'
        });
    }

    function toggleSwitcherTV() {
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
    $(document).on('click', SELECTOR_SWITCHER_TV, function () {
      toggleSwitcherTV();
    });
  })();



});
