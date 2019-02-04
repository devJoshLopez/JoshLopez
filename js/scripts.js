$(document).ready(function () {

  var staticWrapper = $('.static-wrapper');
  var tvToggleButton = $('#tv-toggle');

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

});
