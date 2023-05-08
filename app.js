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
//criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisoção
const bodyJson = bodyParser.json();

//import da controller do aluno
var controllerAluno = require('./controller/controller_aluno.js')
var message = require('./controller/modulo/config.js')

//endpoit retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

   //solicita a controle que retorne todo os alunos do banco de dados
   let dados = await controllerAluno.selecionarTodosAlunos();
   //valida se existem registros para retorna uma rquisição
   if (dados) {
      response.json(dados)
      response.status(200)
   } else {
      response.json();
      response.status(404) // quando nãoo se encontra
   }

})

//retorna dados do aluno pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


})

//inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyJson, async function (request, response) {

     //chega como array
     let contentType = request.headers['content-type'];
       if(String(contentType).toLowerCase() == 'application/json'){
  //recebe os dados encaminhados no body da requisição
  let dadosBody = request.body;
  // console.log(dadosBody)
     let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);
   console.log(resultInsertDados)
     response.status(resultInsertDados.status)// pegar o status que a controler e mandar no response
     response.json(resultInsertDados)
      }
    else {
      response.status (message.ERROR_INVALID_CONTENT_TYPE.status);
       response.json(message.ERROR_INVALID_CONTENT_TYPE)
   }

 
})

//atualiza um aluno pelo is
app.put('/v1/lion-school/aluno/:id', cors(),bodyJson, async function (request, response) {
   //receber dados do body preciso do body parser que está acima como bodyJso
let dadosBody = request.body;

 // o id vai vir como parametro
 let idAluno = request.params.id;

 let resultUpdateDados  = await controllerAluno.atualizarAluno(dadosBody, idAluno)
console.log(resultUpdateDados)
 response.status(resultUpdateDados.status)
 response.json(resultUpdateDados)


})
//exclui aluno pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
   let idAluno = request.params.id;
   let resultDeleteDados  = await controllerAluno.deletarAluno(idAluno)

   response.status(resultDeleteDados.status)
 response.json(resultDeleteDados)

})

app.listen(8080, function () {
   console.log('servidor aguardado requisições na porta 8080')
})