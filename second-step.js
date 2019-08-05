var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var stylus = require('stylus')
var nib = require('nib')
var expressLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//stylus
function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}

// tell node to compile.styl-files to normal css-files
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))


app.get('/', function(req, res){ 
 	res.render('index',{user: "Great User",title:"homepage"});
}); 


app.get('/foreach', function(req, res){ 
 	res.render('forloop',{
        people :[
            {name: "Danny"},
            {name: "Alex"},
            {name: "Matt"},
            {name: "Matt"},
            {name: "Matt"},
            {name: "Manny"}
            ]
    });
});

app.get('/foreachloop', function(req, res) {
    var posts = [
    {title: "Post 1", name1: "Danny"},
    {title: "Post 2", name1: "Alex"},
    {title: "Post 3", name1: "Matt"},
    {title: "Post 4", name1: "Manny"}
    ];
    res.render("eachloop", {posts: posts});
}); 

app.get('/about', function(req, res) {
    res.render("about");
});

app.get('/:conditional', function(req, res) {
    var conditional = req.params.conditional;
    // just type on url Alex or danny
    //var users = 'conditional';
    res.render("conditional", {username: conditional});
});





app.listen(4000, function() {
 console.log('Server is start');
});

