const express = require('express'); //Faz importação
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'query_modelofisico.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("./frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());


// Retorna todos registros (é o R do CRUD - Read)
app.get('/consultahabilidades', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM tb_habilidades';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});


// Insere um registro (é o C do CRUD - Create)
app.post('/inserehabilidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO tb_habilidades (nome_habilidade, descrição_habilidade, valor_habilidade) VALUES ('" + req.body.id_nome_habilidade + "', '" + req.body.descrição_formação + "', '" + req.body.valor_habilidade + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.send('<p>HABILIDADES INSERIDAS!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});


// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizahabilidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM tb_habilidades WHERE id_habilidades="+ req.query.id_habilidade;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizahabilidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE tb_habilidades SET nome_habilidade = '" + req.body.nome_habilidade + 
	                          "',descrição_habilidade='" + req.body.descrição_formação + 
							  "', valor_habilidade = '" + req.body.valor_habilidade + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>HABILIDADE ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});


// Exclui um registro (é o D do CRUD - Delete)
app.get('/removehabilidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM tb_habilidades WHERE id_habilidades='" + req.query.id_habilidades + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>HABILIDADES REMOVIDAS COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});


app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});