function index() {

    var imgslider = document.getElementById("imgcenter");
    var swiTch = 1;
    var slid = ["url(assets/images/building.jpg)", "url(assets/images/Computers.jpg)", "url(assets/images/Cat.jpg)", "url(assets/images/clients.jpg)"]
    
    setInterval(function() {
        swiTch++;
        if(swiTch > slid.length -1){
            swiTch = 0;
        }
        imgslider.style.backgroundImage = slid[swiTch];
    }, 6000);

}
