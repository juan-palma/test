

function ponerTodo(productos){
	//const contenedor = document.getElementById('box');
	productos.forEach(p => {
		const padre = document.createElement('div');
		padre.innerHTML = `
			<img src="" />
			<h3>${p.nombre}</h3>
		`;

		console.log(padre);
	});
}

const url = "http://localhost:3000/productos";
fetch(url)
.then( res => { return res.json() } )
.then( data => { ponerTodo(data.productos); } );




function ponerUno(productos){
	//const contenedor = document.getElementById('box');
	const padre = document.createElement('div');
	padre.innerHTML = `
		<img src="" />
		<h3>${productos.nombre}</h3>
	`;

	console.log(padre);
}

const urlUser = window.location.search;
const parameters = new URLSearchParams(urlUser);
const id_producto = parameters.get("id_producto");

const urlUno = `http://localhost:3000/productos/${id_producto}`;
fetch(urlUno)
.then( res => { return res.json() } )
.then( data => { ponerUno(data.elProducto); } );
