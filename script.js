let buttonActived = document.getElementById("button");
let loginUser = document.getElementById("login-user");
let loginPassword = document.getElementById("login-password");


const activeButton = () => {
    
    if(loginUser.value.length != 0 && loginPassword.value.length != 0) {
        buttonActived.disabled=false;
    } else {
        buttonActived.disabled=true;
    }
}


activeButton()
loginUser.oninput=activeButton
loginPassword.oninput=activeButton



