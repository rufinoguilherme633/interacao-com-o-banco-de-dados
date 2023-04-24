/*********************
 * Objetivo: Api para interagir com com anco de dados (GET, POST, DELETE, PUT) 
 *Data: 14/04/2023
 *Author: Guilherme
  * version: 1
 * *************** */

// para realizar a conexão com o banco de dados iremosutilizar o PRISMA
// npm install prisma --save
//npx prisma
// npx prisma init
//npm install @prisma/client

// import das bibliotecas do projeto

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { request, response } = require('express');

//criar objeto app utiçizado a classe do express
const app = express();

app.use((request, response, next) => {
   //Permissão de métodos que seria utilizado da requisição
   response.header('Access-Control-Allow-Origin', '*');
   // Permissão de métodos que seria utilizado na api
   response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

   //definir as permissões para o cors
   app.use(cors());

   //continua para a leitura dos endpoits
   next();

});


//CRUD (Create, Read, Update, Delete)


/*********************
* EndPoint: Tabela do Aluno
*Versão: 1.0
*Data: 14/04/2023
* *************** */

//endpoit retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
   //import da controller do aluno
   let controllerAluno = require ('./controller/controller_aluno.js')
//solicita a controle que retorne todo os alunos do banco de dados
   let dados = await controllerAluno.selecionarTodosAlunos();
//valida se existem registros para retorna uma rquisição
   if (dados) {
      response.json(dados)
      response.status(200)
   }else {
      response.json();
      response.status(404) // quando nãoo se encontra
   }

})

//retorna dados do aluno pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


})

//inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), async function (request, response) {


})

//atualiza um aluno pelo is
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


})
//exclui aluno pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


})

app.listen(8080, function() {
   console.log('servidor aguardado requisições na porta 8080')
})