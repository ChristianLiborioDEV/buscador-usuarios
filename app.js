const entradaNumero = document.getElementById("inputEntrada");
const clickBotao = document.querySelector("#buscador button");
const divLoading = document.getElementById("loading");
const divErro = document.getElementById("erro");
const divUsuario = document.getElementById("card");

const mostrar = (elemento, mensagem) => {
    elemento.classList.remove("escondido");
}

const esconder = (elemento, mensagem) => {
    elemento.classList.add("escondido");
}


const buscarUsuario = async (id) => {
    mostrar(divLoading)
    try{
        const buscaApi = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!buscaApi.ok) {
            throw new Error
        }
        const resultado = await buscaApi.json();
        esconder(divLoading)
        mostrar(divUsuario, `${resultado.name}`)
        console.log(resultado)
    } catch (erro){
        esconder(divLoading)
        mostrar(divErro)
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
    



