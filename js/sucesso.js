if(JSON.parse(localStorage.getItem("user-token")) != null){
    const userBemVindo = document.querySelector("#userWelcome");
    let usuario = JSON.parse(localStorage.getItem("user-validado"));
    
    userBemVindo.innerHTML = usuario.nomeCompleto;
    const botaoLogout = document.querySelector("#btnLogout");

    const userDados = document.querySelector("#userNome");
    userDados.innerHTML = usuario.nomeUsuario;

    let userFoto = document.querySelector("#userFoteneo");
    userFoto.innerHTML = usuario.avatarUsuario;

    
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });
}else{
    window.location.href = "../login.html";
}