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

    if(evento.target.id == "btnSubmit");{
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;

        const h1Titulo = document.querySelector("#titulo");
        let lista = JSON.parse(localStorage.getItem("listaUser"));
        

        lista.forEach((usuario)=> {
            
            //VALIDAÇÂO
            if(inputUserValue == usuario.nomeUsuaio && inputPassValue == usuario.senhaUsuario){
                console.log("VALIDADO!");
                h1Titulo.innerHTML = "Bem Vindo : " + usuario.nomeUsuaio;
                
            }else{
                console.log("NÃO VALIDOU!");
                h1Titulo.innerHTML = "";
                
            }
           
        });
        
    }

});