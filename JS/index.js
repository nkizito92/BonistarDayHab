function index() {

    var imgslider = document.getElementById("imgcenter");
    var swiTch = 1;
    var slid = ["url(../Pics/building.jpg)", "url(../Pics/Computers.jpg)", "url(../Pics/Cat.jpg)", "url(../Pics/clients.jpg)"]
    
    setInterval(function() {
        swiTch++;
        if(swiTch > slid.length -1){
            swiTch = 0;
        }
        imgslider.style.backgroundImage = slid[swiTch];
    }, 6000);

}
