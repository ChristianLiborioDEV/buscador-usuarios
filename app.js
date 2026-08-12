const entradaNumero = document.getElementById("inputEntrada");
const clickBotao = document.querySelector("#buscador button");
const divLoading = document.getElementById("loading");
const divErro = document.getElementById("erro");
const divUsuario = document.getElementById("card");

const mostrar = (elemento) => {
    elemento.classList.remove("escondido");
}

const esconder = (elemento) => {
    elemento.classList.add("escondido");
}

const mostrarUsuario = (elemento, arrayUsuarios) => {
    elemento.classList.remove("escondido");
    elemento.innerHTML = ` 
    <h2>Nome: ${arrayUsuarios.name}</h2>
    <p><b>Username:</b> ${arrayUsuarios.username}<p>
    <p><b>Email:</b> ${arrayUsuarios.email}<p>
    <p><b>Telefone:</b> ${arrayUsuarios.phone}<p>
    <p><b>Site:</b> ${arrayUsuarios.website}<p>
    `
}

const buscarUsuario = async (id) => {
    mostrar(divLoading)
    try{
        const buscaApi = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!buscaApi.ok) {
            throw new Error(`Usuário não encontrado — status: ${buscaApi.status}`)
        }
        const resultado = await buscaApi.json();
        esconder(divLoading)
        mostrarUsuario(divUsuario, resultado)


    } catch (erro){
        esconder(divLoading);
        divErro.querySelector("h2").textContent = erro.message;
        mostrar(divErro);
    }
} 


clickBotao.addEventListener("click", () => {
    const input = entradaNumero.value
    
    esconder(divLoading)
    esconder(divErro)
    esconder(divUsuario)
    if(!input){
        alert("Digite um numero")
    } else {
        buscarUsuario(input)
    }
}) 
    



