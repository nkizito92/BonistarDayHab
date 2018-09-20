
function contacts (){

'use strict'; 
    
    var submit = document.getElementById("submit");
    var email = document.getElementsByName("email").value;
    var message = document.getElementsByName("message").value;
   
    function submitting (){
    window.location.href = "thanks.html";
    }
    
    if (email === "" || message === "") {
     return false;
    } else {
       submit.addEventListener("click", submitting);
        }
    
}
function goback() {
function back () {
    
     window.location.href = "Contacts.html";
    }
    setTimeout(back, 4000);
}