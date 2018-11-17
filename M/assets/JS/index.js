function index() {
  var imgslider = document.getElementById("imgcenter"),
    swiTch = 1,
    slid = [
      "url(assets/images/building.jpg)",
      "url(assets/images/Computers.jpg)",
      "url(assets/images/Cat.jpg)",
      "url(assets/images/clients.jpg)"
    ];
  //hamburger Menu
  $(".hamMenu").click(function() {
    $("nav ul").slideToggle(500);
    $(".hamMenu div:nth-child(1)").toggleClass(".first");
    $(".hamMenu div:nth-child(2)").toggleClass(".second");
    $(".hamMenu div:nth-child(3)").toggleClass(".third");
  });

  setInterval(function() {
    swiTch++;
    if (swiTch > slid.length - 1) {
      swiTch = 0;
    }
    imgslider.style.backgroundImage = slid[swiTch];
  }, 6000);
}

function slide() {
  var imgslider2 = document.getElementById("slidd"),
    swiTch = 1,
    images = [
      "../assets/images/client2.jpg",
      "../assets/images/bracelet.jpg",
      "../assets/images/Computers.jpg",
      "../assets/images/Tv.jpg",
      "../assets/images/drawing.jpg",
      "../assets/images/gameConsole.jpg",
      "../assets/images/Girraf.jpg"
    ];
  setInterval(function() {
    swiTch++;
    if (swiTch > images.length - 1) {
      swiTch = 0;
    }
    imgslider2.src = images[swiTch];
  }, 3000);
}
