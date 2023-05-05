#Cria um database
create database db_lion_school_turma_manha;

#Visualiza todos os databases existentes no banco de dados
show databases;

# Seleciona o database que será utilizado
use db_lion_school_turma_manha;


#Visualiza todas as tabelas existentes em um database
show tables;

#Cria a tabela de aluno
create table tbl_aluno (
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(18) not null,
    rg varchar(15) not null,
    data_nascimento date not null,
    email varchar(255) not null,
    unique index(id)
);

#Mostra a descrição da tabela, mostrando os atributos e suas características
desc tbl_aluno;


#Insere dados na tabela de alunos
insert into tbl_aluno (
			nome, 
            cpf, 
            rg, 
            data_nascimento, 
            email
)
values (
		'José da Silva', 
        '300.400.458-10', 
        '22.700.123-7', 
        '2000-05-20', 
        'jose@gmail.com'
);

insert into tbl_aluno (
			nome, 
            cpf, 
            rg, 
            data_nascimento, 
            email
)
values (
		'Maria da Silva', 
        '320.950.432-07', 
        '18.690.124-8', 
        '2002-04-18', 
        'maria@gmail.com'
);


#Visualizar o conteúdo de uma tabela
select * from tbl_aluno;

#Atualiza informações na tabela (não esquecer do critério de busca - where)
update tbl_aluno set email = 'jose@hotmail.com' where id = 1;

#Exclui um registro da tabela (não esquecer do critério de busca - where)
delete from tbl_aluno where id = 2;


show databases; 
drop database db_lion_school_turma_manha;
drop database db_lion_schoool_turma_manha;
