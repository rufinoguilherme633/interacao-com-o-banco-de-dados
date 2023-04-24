/***************************************************************
 * Objetivo: Implementar a regra de negócios entre o app e model
 * Data: 24/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 **************************************************************/

//função para receber os dados do app e enviar para o model para inserir novo item
const inserirAluno = function(dadosAluno){

};

//função para receber os dados do app e enviar para o model para atualizar um item existente
const atualizarAluno = function(dadosAluno){

};

//função para excluir um aluno filtrado pelo id, será encaminhado para o model
const deletarAluno = function(id){

};

//função para retornar todos os itens da tabela recebidos do model
const selecionarTodosAlunos =  async function(){
    //import do arquivo de acesso ao banco de dados
let alunoDAO = require('../model/DAO/alunoDAO.js');

let dadosAlunos = await alunoDAO.selectAllAluno()
//soliciat aao dao todos os alunos do bd

//cria um objeto tipo json
let dadosJson = {}

//valida se tem
if (dadosAlunos){
    //adiciona o array alunos e um jason para o app
    dadosJson.alunos = dadosAlunos
    return dadosJson 
}else {
    return false
}
};

//função para buscar um item filtrando pelo id, será enchaminhado para o model
const buscarIdAluno = function(id){

};


module.exports = {
    selecionarTodosAlunos
}