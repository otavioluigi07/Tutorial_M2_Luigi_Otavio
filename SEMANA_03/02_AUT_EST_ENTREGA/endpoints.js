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
app.get('/consultaFormacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM tb_formação';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});


// Insere um registro (é o C do CRUD - Create)
app.post('/insereFormacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO tb_formação (id_formação, nomecurso_formação, dinicio_formação, dfim_formação, descrição_formação, id_curriculo) VALUES ('" + req.body.id_formação + "', '" + req.body.nomecurso_formação + "', '" + req.body.dinicio_formação + "', '" + req.body.dfim_formação + "', '" + req.body.descrição_formação +"', '" + req.body.id_curriculo + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.send('<p>FORMAÇÃO INSERIDAS!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});


// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaFormacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM tb_formação WHERE userId="+ req.query.id_formação;
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
app.post('/atualizaFormacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE tb_formação SET id_formação = '" + req.body.id_formação + 
	                          "',nomecurso_formação='" + req.body.nomecurso_formação + 
							  "', dinicio_formação = '" + req.body.dinicio_formação + 
							  "' , dfim_formação='" + req.body.dfim_formação +  
							  "' , descrição_formação='" + req.body.descrição_formação + 
							   "', id_curriculo='" + req.body.id_curriculo + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>FORMAÇÃO ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});


// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeFormacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM tb_formação WHERE userId='" + req.query.id_formação + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>FORMAÇÃO REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});


app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});