function slide() {
    var imgslider2 = document.getElementById("slidd");
    var swiTch = 1;
    var images = ["../images/client2.jpg", "../images/bracelet.jpg", "../images/Computers.jpg", "../images/Tv.jpg", "../images/drawing.jpg", "../images/gameConsole.jpg", "../images/Girraf.jpg"]
    setInterval(function(){
        swiTch++;
        if(swiTch > images.length - 1){
            swiTch = 0;
        }
        imgslider2.src = images[swiTch];
    }, 2000);
    
}
