var mysql = require('mysql');
const express = require('express');
const app = express();
app.listen(9000,(req,res)=>{
  console.log('Running..')
});//start the server

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb1"
});

app.get('/',(req,res)=>{
    const token = req.query.token;
    con.connect(function(err) {
        if (err) throw err;
        const qu1="SELECT "+token+" FROM students";
        con.query(qu1, function (err, result, fields) {
        if (err) throw err;
        //console.log(fields)
        const obj = JSON.stringify(result);
        res.send(obj);
        });
    });
});
app.get('/1',(req,res)=>{
  con.connect(function(err) {
      if (err) throw err;
      const qu1="SELECT * FROM students";
      con.query(qu1, function (err, result, fields) {
      if (err) throw err;
      //console.log(fields)
      const obj = JSON.stringify(result[0]);
      res.send(obj);
      });
  });
});
app.get('/2',(req,res)=>{
  con.connect(function(err) {
      if (err) throw err;
      const qu1="SELECT * FROM students";
      con.query(qu1, function (err, result, fields) {
      if (err) throw err;
      //console.log(fields)
      const obj = JSON.stringify(result[1]);
      res.send(obj);
      });
  });
});
