 function init()
 {
     'use strict';
    if(document && document.getElementById)
    {
        var loginForm= document.getElementById("loginForm");
        loginForm.onsubmit= validateForm;

    }
 }


 /**
  * function validate data of login form
  * @returns {boolean}
  */
 function validateForm()
 {
    'use strict';
    var email=document.getElementById("email");
    var password=document.getElementById("pw");

    if((email.value.length>0) && (email.value.length>0))
    {
        return true;
    }
    else
    {
        alert("please complete the form");
        return false;
    }
 }

 //klsjkjklsjakldjlksajk
