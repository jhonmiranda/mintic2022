/* Sprint 3 */
let registros = [];

function agregarRegistro(){
	var username = document.getElementById("in_nombre_usuario").value;
	var pass = document.getElementById("in_contrasena").value;
	var confirm_pass = document.getElementById("in_confirmar_contrasena").value;
	
	var user = {
		usuario: username,
		contrasena: pass,
		confirmar_contrasena: confirm_pass
	};
	
	registros.push(user);
	
	console.log(registros.length);
}

function OrdenarArreglo(arreglo){
	arreglo.sort((a, b) => (a.usuario > b.usuario) ? 1 : -1);
	
	console.log(arreglo);
	
	return arreglo;
}

/*
module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
*/