function validar(){
		var nombre, apellidos, email, expresion;
		nombre = document.getElementById('nombre').value;
		apellidos = document.getElementById('apellidos').value;
		correo = document.getElementById('correo').value;

		expresion = /\w+@\w+\.+[a-z]/;


		if (nombre === "" || apellidos === "" || correo === "" ) {
 			alert("Todos los campos son obligatorios");
 			return false;
 		}

 		else if (nombre.length>25) {
 		alert("Supero el maximo de caracteres permitidos en el nombre");
 		return false;
	 	}
	 	else if (apellidos.length>25) {
	 		alert("Supero el maximo de caracteres permitidos en los apellidos");
	 		return false;
	 	}
	 	else if (correo.length>70) {
	 		alert("Supero el maximo de caracteres permitidos en el Email");
	 		return false;
	 	}
	 	else if (!expresion.test(correo)) {
	 		alert("El correo no es valido");
	 		return false;
 		}

	};