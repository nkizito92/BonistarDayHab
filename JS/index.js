function index() {

    var imgslider = document.getElementById("slideImg");
    var swiTch = "image2";

    function slide() {
        switch (swiTch) {
            case 'image1':
                imgslider.src = "../Pics/building.jpg";
                swiTch = "image2";
                break;
            case 'image2':
                imgslider.src = "../Pics/Computers.jpg";
                swiTch = "image3";
                break;
            case 'image3':
                imgslider.src = "../Pics/Cat.jpg";
                swiTch = "image1";
                break;
        }
    }

    setInterval(slide, 6000);

}
