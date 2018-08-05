function slide() {
    var imgslider2 = document.getElementById("slidd");
    var swiTch = 1;
    var images = ["../Pics/client2.jpg", "../Pics/bracelet.jpg", "../Pics/Computers.jpg", "../Pics/Tv.jpg", "../Pics/drawing.jpg", "../Pics/gameConsole.jpg", "../Pics/Girraf.jpg"]
    setInterval(function(){
        swiTch++;
        if(swiTch > images.length - 1){
            swiTch = 0;
        }
        imgslider2.src = images[swiTch];
    }, 2000);
    
}
