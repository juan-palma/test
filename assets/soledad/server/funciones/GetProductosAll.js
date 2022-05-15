const db = require("../db_productos.json");




function getProductosAll(req, res){
	res.json({ "productos": db });
}




//Funcione para obtner productos por ID
function getProductosById(req, res){
	let productoEncontrado = "";
	db.forEach(p => {
		if(p.id == req.params.id){
			productoEncontrado = p;
		}
	});

	res.json({"elProducto": productoEncontrado});
}





//Funcione para obtner productos por ID
function newProduct(req, res){
	db.push(req.body);
	res.json({"productoNuevo":db});
	console.log(req.body);
}





function login(req, res){
	res.json({"usuario":req.params.user, "pass": req.params.pass})
}






//module.exports.getProductosAll = getProductosAll;
module.exports = { getProductosAll, getProductosById, newProduct, login };