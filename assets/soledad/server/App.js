const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');

const { getProductosAll, getProductosById, newProduct, login } = require('./funciones/getProductosAll');


const app = express();

app.set('port', 3000);
app.set('json spaces', 2);

//Middlewar
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Nuestro primer WS Get
app.get('/productos', cors(), getProductosAll);
app.get('/productos/:id', cors(), getProductosById);
app.post('/productos', cors(), newProduct);


app.get('/login/:pass/:user', cors(), login);


//Iniciando el servior
app.listen(app.get('port'), ()=>{
	console.log(`Server listening on port ${app.get('port')}`);
});