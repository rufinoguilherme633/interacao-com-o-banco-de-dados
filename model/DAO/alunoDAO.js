/*
*Objetivo: Realizar a interação do aluno com o Banco de dados
*Data: 14/04/2023
*Author: guilherme
*versão :1
******************************/



    //import da boblioteca do prisma client (responsavel por manipular dados no banco de dadeos); rodar script e etc
    var {PrismaClient} =  require('@prisma/client');
    //instanciando classe do PrismaClient
    var prisma = new PrismaClient();

// função para inserir um novo registro no banco de dados
const insertAluno = async function (dadosAluno) {

    //scrip sql para inserir os dados no banco de dados
let sql = `insert into tbl_aluno(   nome,
                                    cpf,
                                    rg,
                                    data_nascimento,
                                    email)
                                    values
                                    ('${dadosAluno.nome}',
                                    '${dadosAluno.cpf}',
                                    '${dadosAluno.rg}',
                                    '${dadosAluno.data_nascimento}',
                                    '${dadosAluno.email}'
                                      ) `;

                                      console.log(sql)
//Execulta o script no BD e recebemos o retorno se deu certo ou não
                              let result = await prisma.$executeRawUnsafe(sql);
// console.log(result)

                              if(result) {
                                  return true;
                              }
                              else{
                                 return false;

                              }
}

// vai atualizar o registro existente n banco de dados
const updateAluno = async function (dadosAluno) {

let sql = `update tbl_aluno set 
            nome = '${dadosAluno.nome}',
            rg   = '${dadosAluno.rg}',
            cpf  = '${dadosAluno.cpf}',
            data_nascimento   = '${dadosAluno.data_nascimento}',
            email   = '${dadosAluno.email}'
            where id = ${dadosAluno.id}`;
//execulta o script no banco
let result = await prisma.$executeRawUnsafe(sql);

if(result) {
    return true;
}
else{
   return false;

}
    
}

//excluir um registro no banco dedados
const deleteAluno = async function (id) {
    let sql = `delete from tbl_aluno where id = ${id}`;
  
    

    let result = await prisma.$executeRawUnsafe(sql);

if(result) {
    return true;
}
else{
   return false;

}

}

//retorna todos os registros do banco de dados
const selectAllAluno = async function () {


    //variavel com script sql para execultar banco de dados montando scritp
    let sql = 'select * from tbl_aluno';

    //execulrado script dentro do bando retur -> rs -> result
    let rsAluno = await prisma.$queryRawUnsafe(sql); // método que execulta script dentro do banco, coloco a variavel -> unsafe interpratar várivale, fazer select no banco


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
selectAllAluno, 
insertAluno,
updateAluno,
deleteAluno
}