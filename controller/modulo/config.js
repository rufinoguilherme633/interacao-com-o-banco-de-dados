/***************************************************************************************************
 * Objetivo: Arquivo responsaveis pelas variáveis, constantes e funções globais do projeto
 * DATA: 28/04/2023 
 *  Autor: Guilherme
 * Versão;1.0
 *****************************************************************************************************/

 //--------------------------------------------------- Constantes de erro ________________________________________________________________________
 const ERROR_REQUIRED_DATA = {status:400, message:'Existem dados obrigatórios que não foram preenchidos' };// const é em letra maiscula

 const ERROR_REQUIRED_ID = {status:400, message:'o atributo id é obrigatórios que não na requisição' };// 

  const ERROR_INTERNAL_SERVER = {status:500, message:'ERRO interno no servidor de Banco de dados' };//

  const ERROR_INVALID_CONTENT_TYPE = {status:415, message:'O tipo de midia contentType da solicitaçã não é compativel com o servidor, {aplication/json}'}
 //--------------------------------------------------- CONSTANTEDS DE SUCESSO ________________________________________________________________________
 const CREATED_ITEM = {status:201, message:'Registro criado com sucesso'} // 201 sucesso e novo recurso foi inserido
 const UPDATED_ITEM = {status:200, message:'Registro atualizado'}
 const DELETE_ITEM = {status:200, message:'Registro deletado'}


module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_ID,
    CREATED_ITEM,
    UPDATED_ITEM,
    DELETE_ITEM,
    ERROR_INVALID_CONTENT_TYPE
}