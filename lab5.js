let express = require('express');
let app = express();
let path2views = __dirname + "/views/";
let bodyParser = require('body-parser');
let db = [];

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('images'));
app.use(express.static('css'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
    res.sendFile(path2views+'logo.html');
});

app.get('/addNewTask',function(req,res){
    res.sendFile(path2views+"addnewtask.html")
});

app.post('/newTaskRecord',function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.sendFile(path2views+"logo.html")
});

app.get('/listTasks',function(req,res){
    res.render(path2views+"showtasklist.html",{
        task:db})
        
});

app.listen(8080);