function index() {
  if (screen.width <= 800) {
    window.location.replace("M/index.html");
  }

  var imgslider = document.getElementById("imgcenter");
  var swiTch = 1;
  var slid = [
    "url(../images/building.jpg)",
    "url(../images/Computers.jpg)",
    "url(../images/Cat.jpg)",
    "url(../images/clients.jpg)"
  ];

  setInterval(function() {
    swiTch++;
    if (swiTch > slid.length - 1) {
      swiTch = 0;
    }
    imgslider.style.backgroundImage = slid[swiTch];
  }, 6000);
}

function start() {
  var task = document.getElementById("task");
  task.hidden = true;
  var next = "back";

  function hide() {
    if (next === "back") {
      task.hidden = false;
      next = "hide";
    } else {
      task.hidden = true;
      next = "back";
    }
  }
  var go = document.getElementById("go");
  go.addEventListener("click", hide);
  currentPage();
}

function slide() {
  var imgslider2 = document.getElementById("slidd");
  var swiTch = 1;
  var images = [
    "../images/client2.jpg",
    "../images/bracelet.jpg",
    "../images/Computers.jpg",
    "../images/Tv.jpg",
    "../images/drawing.jpg",
    "../images/gameConsole.jpg",
    "../images/Girraf.jpg"
  ];
  setInterval(function() {
    swiTch++;
    if (swiTch > images.length - 1) {
      swiTch = 0;
    }
    imgslider2.src = images[swiTch];
  }, 3000);
  currentPage();
}
function currentPage() {
  var path = document.getElementById("path");
  if (screen.width <= 800) {
    window.location.replace("/M/HTML/" + path.getAttribute("href"));
  }
}
