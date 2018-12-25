let validateForm = function(){
    let name = document.authorizationForm.userName.value;
    let password = document.authorizationForm.userPassword.value;

    if ((name!="") && (password!="")) {

        window.location = "index.html";
        return [name,password];
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
    }
}