$(document).ready(function() {
  var slider = $(".slider-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    cssEase: "ease-in",
    autoplay: false,
    dots: false,
    arrows: false
    // appendDots: document.getElementById("sliderDots")
  });
  var progressBar = $(".progress");
  var progressBarLabel = $(".slider__label");

  slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    var vid = $(slick.$slides[currentSlide]).find("video");
    if (vid.length > 0) {
      slider.slick("slickPause");
      vid.get(0).pause();
    }

    var iframeVid = $(slick.$slides[currentSlide]).find("iframe");
    if (iframeVid.length > 0) {
      document
        .getElementById("ekoVideo")
        .contentWindow.postMessage("eko.pause", "*");
    }

    var calc = (nextSlide / (slick.slideCount - 1)) * 100;
    progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    progressBarLabel.text(calc + "% completed");
  });

  slider.on("afterChange", function(event, slick, currentSlide) {
    var vid = $(slick.$slides[currentSlide]).find("video");
    if (vid.length > 0) {
      slider.slick("slickPause");
      $(vid)
        .get(0)
        .play();
    }

    var iframeVid = $(slick.$slides[currentSlide]).find("iframe");
    if (iframeVid.length > 0) {
      document
        .getElementById("ekoVideo")
        .contentWindow.postMessage("eko.play", "*");
    }
  });

  $("video").on("ended", function() {
    if (this.hasAttribute("autonext")) {
      slider.slick("slickNext");
    } else {
      // show buttons
      $(".button-group").show(300);
    }
    console.log("Video Complete");
  });

  $(".slick-dots li button").on("click", function(e) {
    e.stopPropagation();
  });

  $(".modal-exit").on("click", function(e) {
    $(".video-modal").removeClass("showing");
    $(".video-modal video")[0].pause();
  });

});

function nextSlide() {
  $(".slider-container").slick("slickNext");
}

function restartCurrentVideo() {
  var currentVid = $(".slick-slide.slick-current").find("video");

  if (currentVid.length > 0) {
    $(".slider-container").slick("slickPause");
    currentVid.get(0).pause();
    currentVid.get(0).currentTime = 0;
    currentVid.get(0).play();
  }
}

function showModalVideo(videoUrl) {
  console.log("show modal video" + videoUrl);
  $(".video-modal video source").attr( "src", videoUrl);
  $(".video-modal").addClass("showing");
  $(".video-modal video")[0].load();
  $(".video-modal video")[0].play();
}
