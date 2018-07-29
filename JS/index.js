function index() {

    var imgslider = document.getElementById("imgcenter");
    var swiTch = "image2";

    function slide() {
        switch (swiTch) {
            case 'image1':
                imgslider.style.backgroundImage = "url(../Pics/building.jpg)";
                swiTch = "image2";
                break;
            case 'image2':
                imgslider.style.backgroundImage = "url(../Pics/Computers.jpg)";
                swiTch = "image3";
                break;
            case 'image3':
                imgslider.style.backgroundImage = "url(../Pics/Cat.jpg)";
                swiTch = "image4";
                break;
             case 'image4':
                imgslider.style.backgroundImage = "url(../Pics/clients.jpg)";
                swiTch = "image1";
                break;
        }
    }

    setInterval(slide, 6000);

}
