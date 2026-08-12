# Buscador de Usuários
Projeto desenvolvido para praticar JavaScript, promise, async e await, consiste em um sistema de busca de usuario com API e tratamento de erro.

## Funcionalidades
- Busca usuario pelo id na API

## Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)

## Como rodar o projeto

1. Clone o repositório:

git clone https://github.com/ChristianLiborioDEV/buscador-usuarios.git
2. Abra a pasta no VS Code

3. Abra o arquivo `index.html` com a extensão *Live Server*

Não é necessário instalar dependências, o projeto usa JavaScript puro.

## Conceitos aplicados
- Arrow Functions - usadas em todas as funções
- Promises - sistema assincrono JavaScript
- Async/Await - consumo da API de forma legível e moderna
- Manipulação do DOM - exibição dinâmica dos resultados na tela
- Fetch API — requisição HTTP para API externa (JSONPlaceholder)
- Tratamento de erros — throw new Error e try/catch para erros HTTP e de rede


## Exemplos de uso 
```javascript
// Buscar usuário pelo id
buscarUsuario(1);
// Exibe: Nome, Username, Email, Telefone e Site

// Id inválido — exibe mensagem de erro
buscarUsuario(9999);
// Exibe: "Usuário não encontrado — status: 404"
```
