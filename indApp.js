const exp = require('express')
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb1"
  });
con.connect(function(err) {
    if (err) throw err;
    });

const app = exp()
app.use(exp.static('../library'))
//app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','pug')
app.get('/',(req,res)=>{
res.sendFile('index.html',{root:__dirname})
});
app.post('/submit',(req,res)=>{
    const sql="insert into students values('"+req.body.name+"','"+req.body.address+"')";
    con.query(sql,(err)=>{
        if(err) throw err;
        res.render('index',{
            title:'Data saved',
            message:'Data saved successfully..'
        })
    })
});
app.listen(3001,(req,res)=>{
    console.log('Running..')
  });//start the server
con.end();