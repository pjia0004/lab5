let express = require('express');
let app = express();
let path2views = __dirname + "/views/";
let bodyParser = require('body-parser');
app.engine("html",require("ejs").renderFile);
app.set('view engine','html');
let db = [];

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',function(req,res){
    res.sendFile(path2views+"index.html")
})

app.get('/addCustomerwk5tut2',function(req,res){
    res.sendFile(path2views + "newcustomer.html")
})

app.post('/newCustomerRecord',function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.sendFile(path2views+ "index.html");
})

app.get('/getallcustomers',function(req,res){
    res.render(path2views+ "showRecord.html",{
        customer:db
    });

})
app.listen(8080);