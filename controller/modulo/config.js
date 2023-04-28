/***************************************************************************************************
 * Objetivo: Arquivo responsaveis pelas variáveis, constantes e funções globais do projeto
 * DATA: 28/04/2023 
 *  Autor: Guilherme
 * Versão;1.0
 *****************************************************************************************************/

 //--------------------------------------------------- Constantes de erro ________________________________________________________________________
 const ERROR_REQUIRED_DATA = {status:400, message:'Existem dados obrigatórios que não foram preenchidos' };// const é em letra maiscula


  const ERROR_INTERNAL_SERVER = {status:500, message:'ERRO interno no servidor de Banco de dados' };// const é em letra maiscula
 //--------------------------------------------------- CONSTANTEDS DE SUCESSO ________________________________________________________________________
 const CREATED_ITEM = {status:201, message:'Registro criado com sucesso'} // 201 sucesso e novo recurso foi inserido


module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM

}