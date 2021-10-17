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
	cosole.log(registros);
}

const tcaptcha = 5;
function validar_captcha(rcaptcha){
	if (tcaptcha === rcaptcha){
		return true;
	}else{
		return false;
	}
}

function iniciar_sesion(usuario, contrasena, rcaptcha){
	// Validar captcha;
	var matchCaptcha = validar_captcha(rcaptcha);
	// Validar usuario;
	var exist
	if(registros.some(registro => (registro.usuario === usuario && registro.contrasena === contrasena))){
        return (true && matchCaptcha);
    } else{
        return false;
    }
}

/*
module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.agregarRegistro = agregarRegistro;
*/