
const express	 = require('express'); // npm run dev || npm start
const app 		 = express();
const morgan 	 = require('morgan');
const path 		 = require('path');
const bodyParser = require('body-parser');
const mysql		 = require('mysql');
const myConn	 = require('express-myconnection');


// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('PORT', process.env.PORT || 8080);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));// pa que pesque el req.body :/
app.use('/', require('./routes/customerRoutes'));

app.use(myConn(mysql, {
      host: 'localhost'
    , user: 'root'
    , password: '123'
    , port: 3306
    , database: 'crud-nodejs'
}, 'single')); // ??


// server
app.listen(app.get('PORT'), () => {
	console.log('escuchando por el puerto '+ app.get('PORT') +'...');
});