/*
*Objetivo: Realizar a interação do aluno com o Banco de dados
*Data: 14/04/2023
*Author: guilherme
*versão :1
*/

// função para inserir um novo registro no banco de dados
const insertAluno = function (dadosAluno) {

}

// vai atualizar o registro existente n banco de dados
const updateAluno = function (dadosAluno) {

}

//excluir um registro no banco dedados
const deleteAluno = function (id) {

}

//retorna todos os registros do banco de dados
const selectAllAluno = async function () {
    //import da boblioteca do prisma client (responsavel por manipular dados no banco de dadeos); rodar script e etc
    let {PrismaClient} = require('@prisma/client');
    //instanciando classe do PrismaClient
    let prisma = new PrismaClient();

    //variavel com script sql para execultar banco de dados montando scritp
    let sql = 'select * from tbl_aluno';

    //execulrado script dentro do bando retur -> rs -> result
    let rsAluno = await prisma.$queryRawUnsafe(sql); // método que execulta script dentro do banco, coloco a variavel -> unsafe interpratar várivale


    //$queryRawUnsafe -> utilizado quando o script estáem uma variavel
    //$queryRaw -> script direto no metodo  $queryRaw('select * from tbl_aluno')

    //toda função retorna se deu certo ou não
    //valida se o banco de dados retornou algum registro, se retorna devolvo dados que lele trouxe

    if (rsAluno.length > 0) {
        return rsAluno
    }
    else {
        return false
    }
}

//retorna o registro do aluno filtrado pelo id
const selectByIdAluno = function (id) {

}

module.exports = {
selectAllAluno
}