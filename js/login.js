//GERANDO DOIS OBJETOS NO LOCALTORAGE
const usuario1 = {
    nomeUsuaio:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuaio:"flavindopneu",
    senhaUsuario:"12345"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));



//VAMOS CRIAR UM OBJETO PARA AMAZENAR O NOSSO USUARIO
// const usuario = {
//     nomeUsuaio:"",
//     senhaUsuario:""
// }


addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;

        const h1Titulo = document.querySelector("#titulo");

        let lista = JSON.parse(localStorage.getItem("listaUser"));

        let userValidado = {};
        
        try{ 
            lista.forEach((usuario)=> {
            
            //VALIDAÇÂO
            if(inputUserValue == usuario.nomeUsuaio && inputPassValue == usuario.senhaUsuario){
            userValidado = usuario;
            throw "VALIDADO";
            }
            });
        
            throw "NÃO VALIDADO";

         }catch(msg){
            if(msg == "VALIDADO"){
                h1Titulo.innerHTML = "<span><strong>Login Validado com sucesso</strong></span>";
                h1Titulo.setAttribute("style","color:#00ff00;");

                userValidado["token"] = 
                //setando um novo objeto no localstorage
                localStorage.setItem("UserValidado", JSON.stringify(userValidado));

                window.location.href = "../suceso.html"
            }else{
                h1Titulo.innerHTML = "<span><strong>Login ou Senha incorretos</strong></span>";
                h1Titulo.setAttribute("style","color:#ff0000;");
                window.location.href = "../erro.html";
            }
         }

    }
    

});

try{
    const userbemvindo = document.querySelector("#userWelcome");
    userbemvindo.innerHTML = JSON.parse(localStorage.getItem("UserValidado")).nomeUsuario;
}catch(erro){                      

    if(userbemvindo != null){
        
    }

}