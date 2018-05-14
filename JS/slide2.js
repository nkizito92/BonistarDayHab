function slide() {
    var imgslider2 = document.getElementById("slidd");
    var swiTch = "image2";

    function slide2() {

        switch (swiTch) {
            case 'image1':
                imgslider2.src = "../Pics/Girraf.jpg";
                swiTch = "image2";
                break;
            case 'image2':
                imgslider2.src = "../Pics/bracelet.jpg";
                swiTch = "image3";
                break;
            case 'image3':
                imgslider2.src = "../Pics/Computers.jpg";
                swiTch = "image4";
                break;
            case 'image4':
                imgslider2.src = "../Pics/Tv.jpg";
                swiTch = "image5";
                break;
            case 'image5':
                imgslider2.src = "../Pics/drawing.jpg";
                swiTch = "image1";
                break;
        }


    }
    setInterval(slide2, 6000);
}
