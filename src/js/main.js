let clock;
let flscrnIcon = document.getElementById("fullscreenIcon");
var format = "TwentyFourHourClock";

document.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      // if checked, 12hr
      $(document).ready(function () {
        clock = $(".clock").FlipClock({
          clockFace: format,
        });
      });
      return (format = "TwelveHourClock");
    } else {
      $(document).ready(function () {
        clock = $(".clock").FlipClock({
          clockFace: format,
        });
      });
      // if not checked, 24hr
      return (format = "TwentyFourHourClock");
    }
  });
});

// load clock
$(document).ready(function () {
  clock = $(".clock").FlipClock({
    clockFace: format,
  });
  setInterval(reloadClock, 60000);
});

//reload clock function
function reloadClock() {
  clock = $(".clock").FlipClock({
    clockFace: format,
  });
}

// toggle fullscreen
var fullscrn = document.getElementById("fc");

fullscrn.onclick = toggle;

function toggle() {
  toggleFullScreen();
  toggleIcon();
}

function toggleFullScreen() {
  if (
    !document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function toggleIcon() {
  let notflscrn = flscrnIcon.classList.contains("bi-fullscreen");
  if (notflscrn === true) {
    flscrnIcon.classList.remove("bi-fullscreen");
    flscrnIcon.classList.add("bi-fullscreen-exit");
  } else{
    flscrnIcon.classList.remove("bi-fullscreen-exit");
    flscrnIcon.classList.add("bi-fullscreen");
  }
}

//hide buttons when no mousemove
let justHidden = false;

$(document).ready(function () {
  setTimeout("hide();", 3000);
  let j;
  $(document).mousemove(function () {
    if (!justHidden) {
      justHidden = false;
      clearTimeout(j);
      $(".btn").removeClass("hidden");
      j = setTimeout("hide();", 3000);
    }
  });
});

function hide() {
  $(".btn").addClass("hidden");
}

// check if fullscreen and change icon accordingly ***(fullScreen works perfectly only on firefox)
// function checkFullScrren() {
//   if (
//     window.fullScreen ||
//     (window.innerWidth == screen.width &&
//       window.innerHeight == screen.height)
//   ) {
//     console.log("fullscreen");
//     flscrnIcon.classList.remove("bi-fullscreen");
//     flscrnIcon.classList.add("bi-fullscreen-exit");
//   } else {
//     console.log("not fullscreen");
//     flscrnIcon.classList.remove("bi-fullscreen-exit");
//     flscrnIcon.classList.add("bi-fullscreen");
//   }
// }

//change fullscreen icon if keys are used to toggle fullscreen
// setInterval(checkFullScrren, 3000);