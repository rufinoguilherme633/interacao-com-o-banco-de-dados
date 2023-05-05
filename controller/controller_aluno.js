/***************************************************************
 * Objetivo: Implementar a regra de negócios entre o app e model
 * Data: 24/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 **************************************************************/

const { response } = require('express');


//import do arquivo de acesso ao banco de dados
var alunoDAO = require('../model/DAO/alunoDAO.js');

var message = require('./modulo/config.js')
// import do arquivo de global de configuração do projeto


//-------------------------------------------------------------------------------

var erro = {}

//função para receber os dados do app e enviar para o model para inserir novo item
const inserirAluno = async function (dadosAluno) {


    // import do arquivo de global de configuração do projeto


    //-------------------------------------------------------------------------------

    let erro = {}


    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 250
    ) {

        return message.ERROR_REQUIRED_DATA

    } else {
        //envia os dados para a model a ser inserdos no banco de dados

        let status = await alunoDAO.insertAluno(dadosAluno)
        //    console.log(status);
        if (status) {
            return message.CREATED_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER
        }

    }

};

//função para receber os dados do app e enviar para o model para atualizar um item existente
const atualizarAluno = async function (dadosAluno, idAluno) { // recebe dois argumentos

    //validacao para os dados
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 250
    ) {

        return message.ERROR_REQUIRED_DATA

        //Validaão para o id
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_REQUIRED_ID
    } else {
        //adiciona o id no json com todos os dados, acresentando o id 
        dadosAluno.id = idAluno
        //encaminha para a Dao os dados para serem alterados
        let status = await alunoDAO.updateAluno(dadosAluno);
        if (status) {
            return message.UPDATED_ITEM;
        } else {
            return message.ERROR_INTERNAL_SERVER;
        }
    }

};

//função para excluir um aluno filtrado pelo id, será encaminhado para o model
const deletarAluno = async function (idAluno) {

    if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_REQUIRED_ID
    } else {
            //adiciona o id no json com todos os dados, acresentando o id 
          
            //encaminha para a Dao os dados para serem alterados
            let status = await alunoDAO.deleteAluno(idAluno);
            if (status) {
                return message.DELETE_ITEM;
            } else {
                return message.ERROR_INTERNAL_SERVER;
            }
        }
    

};

//função para retornar todos os itens da tabela recebidos do model
const selecionarTodosAlunos = async function () {


    let dadosAlunos = await alunoDAO.selectAllAluno()
    //soliciat aao dao todos os alunos do bd

    //cria um objeto tipo json
    let dadosJson = {}

    //valida se tem
    if (dadosAlunos) {
        //adiciona o array alunos e um jason para o app
        dadosJson.alunos = dadosAlunos
        return dadosJson
    } else {
        return false
    }
};

//função para buscar um item filtrando pelo id, será enchaminhado para o model
const buscarIdAluno = function (id) {

};


module.exports = {
    selecionarTodosAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}