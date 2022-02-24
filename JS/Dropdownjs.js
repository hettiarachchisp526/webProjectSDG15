function profile() {
    let confirmAction = confirm("Do you use this as a normal user-press=OK,  or as a resercher press=cancel");
    if (confirmAction) {
      window.open("user-create-account-reasearch.html");
    } 
    
    else {
      window.open("user-create-account.html");
    }
  }