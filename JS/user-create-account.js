
function validate(){
         if(document.frm1.fname.value.length<1){
             alert("Please enter First name");
              }
        if(document.frm1.lname.value.length<1){
             alert("Please enter Last name");
              }
              if(document.frm1.email.value.length<1){
             alert("Please enter a email");
              }
              var a=document.frm1.email.value.indexOf("@");
	          var b=document.frm1.email.value.lastIndexOf(".");
	        if(a<1 || b-a<2 || b+2>=email.length)
	         {
                 alert("Invalid Email address");
	         }

         if(document.frm1.pass.value.length<1){
             alert("Please enter Password");
              }
}

    
    const imgDiv= document.querySelector('.profile-pic-div');
    const img= document.querySelector('#photo');
    const file= document.querySelector('#file');
    const uploadButton= document.querySelector('#uploadButton');
    
    
    //image showing functionality when we choose an image to upload
    //when we choose a photo to upload
    
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
    