function index() {

    var imgslider = document.getElementById("slideImg");
    var imgslider2 = document.getElementById("slidd");
    var swiTch = "image2";
    var page = document.getElementById("active");

    function slide() {
        switch (swiTch) {
            case 'image1':
                imgslider.src = "../Pics/Cat.jpg";
                swiTch = "image2";
                break;
            case 'image2':
                imgslider.src = "../Pics/Computers.jpg";
                swiTch = "image3";
                break;
            case 'image3':
                imgslider.src = "../Pics/Girraf.jpg";
                swiTch = "image1";
                break;
        }
    }
// take this to another js type
 function slide2(){
        switch (swiTch) {
            case 'image1':
                imgslider2.src = "../Pics/Girraf.jpg";
                swiTch = "image2";
                break;
            case 'image2':
                imgslider2.src = "../Pics/cat.jpg";
                swiTch = "image3";
                break;
            case 'image3':
                imgslider2.src = "../Pics/Computers.jpg";
                swiTch = "image1";
                break;
        }
    }
    setInterval(slide2, 6000);
    setInterval(slide, 6000);

    
}
