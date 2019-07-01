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
  var slideProgressBar = $(".progress.slide");
  var slideProgressBarLabel = $(".slider__label");
  var videoProgressBar = $(".progress.video");
  var videoProgressBarLabel = $(".video__label");

  document.getElementById("ekoVideo").contentWindow.postMessage("eko.pause", "*");

  slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    var currentVid = $(".slick-slide.slick-current").find("video")[0];
    if (currentVid && !currentVid.hasAttribute("autoplay")) {
      slider.slick("slickPause");
      currentVid.pause();
      currentVid.removeEventListener('timeupdate', videoProgressUpdate, false);
    }

    var iframeVid = $(".slick-slide.slick-current").find("iframe")[0];
    if (iframeVid) {
      document.getElementById("ekoVideo").contentWindow.postMessage("eko.pause", "*");
    }

    var calc = (nextSlide / (slick.slideCount - 1)) * 100;
    slideProgressBar.css("background-size", calc + "% 100%").attr("aria-valuenow", calc);
    slideProgressBarLabel.text(calc + "% completed");

    $(".button-group").hide(300);
    $(".slick-slide.slick-current").find(".button.pause").text('Pause');
  });

  slider.on("afterChange", function(event, slick, currentSlide) {
    var currentVid = $(".slick-slide.slick-current").find("video")[0];
    if (currentVid) {
      slider.slick("slickPause");
      currentVid.pause();
      currentVid.currentTime = 0;
      currentVid.play();
      videoProgressBar.show(300);
      currentVid.addEventListener('timeupdate', videoProgressUpdate, false);
    } else {
      videoProgressBar.hide(300);
    }

    var iframeVid = $(".slick-slide.slick-current").find("iframe")[0];
    if (iframeVid) {
      document.getElementById("ekoVideo").contentWindow.postMessage("eko.play", "*");
    }

    $(".slick-slide.slick-current video").on("ended", function() {
      if (this.hasAttribute("autonext")) {
        slider.slick("slickNext");
      } else {
        // show buttons
        $(".button-group").show(300);
      }
      console.log("Video Complete");
    });
  });



  $(".slick-dots li button").on("click", function(e) {
    e.stopPropagation();
  });

  $(".modal-exit").on("click", function(e) {
    $(".video-modal").removeClass("showing");
    $(".video-modal video")[0].pause();
  });

  function videoProgressUpdate() {
    var currentVid = $(".slick-slide.slick-current").find("video")[0];
    const percent = (currentVid.currentTime / currentVid.duration) * 100;
    videoProgressBar.css("background-size", percent + "% 100%").attr("aria-valuenow", percent);
    videoProgressBarLabel.text(percent + "% completed");
  }

});


function previousSlide() {
  $(".slider-container").slick("slickPrev");
}

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

function pauseCurrentVideo(el) {
  var currentVid = $(".slick-slide.slick-current").find("video")[0];
  if (currentVid) {
    $(".slider-container").slick("slickPause");
    if (currentVid.paused == false) {
      currentVid.pause();
      $(el).text('Play');
    } else {
      currentVid.play();
      $(el).text('Pause');
    }
  }
}

function showModalVideo(videoUrl) {
  console.log("show modal video" + videoUrl);
  $(".video-modal video source").attr( "src", videoUrl);
  $(".video-modal").addClass("showing");
  $(".video-modal video")[0].load();
  $(".video-modal video")[0].play();
}

function showOption(optionNumber) {
  console.log("Show option " + optionNumber);
  $(".slider-container").slick("slickNext");

}
