const express = require('express')
const app = express()
const port = 3000
const conf = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
};

const mysql = require('mysql')

const sqlCreateTable =`CREATE TABLE IF NOT EXISTS People (
   id int auto_increment not null,
   name varchar(50) not null,
   primary key(id))`

const connection = mysql.createConnection(conf)

connection.query(sqlCreateTable)
connection.end()


app.get('/', (req, res) => {
   
   let response = '<h1> Full cycle Rocks!!</h1> \n'
   
   try { 
      const connection = mysql.createConnection(conf)
      const sql = `insert into People(name) values ('Full cycle access')` 
      
      connection.query(sql)
      connection.end()

   } catch (err) {
      console.log(err)
   }

   res.send(response) 
})

app.listen(port, () => {
	console.log('rodando na porta ' + port) 
}) 
