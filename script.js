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



// Salvar estado do usuário - LocalStorage
const nightModeStorage = localStorage.getItem('gmtNightMode')
const nightMode = document.getElementById("night-mode")

if(nightModeStorage) {
    document.documentElement.classList.add('theme-dark')
    nightMode.checked = true
}

// Ativando/Desativar Modo Noturno
nightMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('theme-dark')

    if(document.documentElement.classList.contains('theme-dark')) {
        localStorage.setItem('gmtNightMode', true)
        return
    } else {
        localStorage.removeItem('gmtNightMode')
    }
})





