
AOS.init();

$(document).ready(function(){
    $("#contactform").validate({
        rules:{

            fname:{
                required:true,
                minlength:4
            },
           femail:{
               required:true,
               email:true 
           }, 
           msg:{
            required:true,
            minlength:10
           }
        },
        messages:{
            fname:{
            required:"Enter Your Name",
            minlength :"Enter Atleast 4 charecters"
        },
        femail:{
            required:"Enter Your Email",
            email:"Enter  Valied Email" 
        }, 

    }
       
    })
})