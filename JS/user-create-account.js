const imgDiv= document.querySelector('.profile-pic-div');
const img= document.querySelector('#prfphoto');
const file= document.querySelector('#file');
const uploadButton= document.querySelector('#uploadButton');

        file.addEventListener('change',function(){
        const choosedFile= this.files[0];

          if(choosedFile){
                    const reader = new FileReader();
                    
                    reader.addEventListener('load',function()
                    { 
                         img.setAttribute('src',reader.result);
                     });

                 reader.readAsDataURL(choosedFile);
               }
});


    function validateform(){

        if(document.frm1.fname.value.length<1){
            window.alert("Please Input First Name");
              }

        if(document.frm1.lname.value.length<1){
            window.alert("Please Input Last Name");
             }
           
        if(document.frm1.pass.value.length<9){
            window.alert("Your password should have at least 8 characters");
             } 
             //email validation
             var a=document.frm1.email.value.indexOf("@");
             var b=document.frm1.email.value.lastIndexOf(".");
             if(a<1 || b-a<2 || b+2>=email.length)
             {window.alert("Invalid Email address");
             }
          
            //password confirmation
            var password = document.getElementById("passid").value;
        var confirmPassword = document.getElementById("cpassid").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
	
    }

}
    
