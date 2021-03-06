const express=require('express');
const path=require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//Initilizations
const app= express();
require('./database');
//Settings

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');
//Middlewares
app.use(express.urlencoded({ extended:false}));
//para permitir enviar desde el formulario metodos delete y puth 
app.use(methodOverride('_method'));
//para loguear
app.use(session({
    secret: 'contrasena',
    resave:true,
    saveUninitialized:true
}));
//Global Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/animals'));
//Static files
app.use(express.static(path.join(__dirname,'public')));
//server is listening 
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});