window.onload=function(){

	document.getElementById("form").onsubmit=function(e){
		e.preventDefault();
	}
	function alumna(nombreAl, apellidoAl,mailAl,passAl) {
		this.nombre = nombreAl;
		this.apellido = apellidoAl;
		this.mail = mailAl;
		this.password = passAl;

	};
	var arrAlumnas = [];

	document.getElementById("registrar").addEventListener("click",function(){
		var nombre = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		var mail = document.getElementById("Correo").value;
		var password = document.getElementById("passw").value;
    var regexm=  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


		if(nombre.length==0 || apellido.length==0 || mail.length==0 || password.length==0){
						 var indicacion=document.getElementById("indicacion");
						 indicacion.innerText = "Todos los campos son obligatorios";
			}

     if(regexm.test(mail)==false){
				alert("ingresa el correo en el formato requerido, con arroba");
				return false;
			}
		 else if(password.length<6 || password.length>20){
				alert("El tamaño mínimo de la contraseña aceptado es de 6 caracteres y máximo de 20");
       return false;
			 }


     if(nombre.length!=0 && apellido.length!=0 && mail.length!=0 && password.length!=0){

		  localStorage.setItem("nuevaAlumna",JSON.stringify(new alumna(nombre,apellido,mail,password)));

		  document.getElementById("form").reset();
		  window.location="alumna.html";
		  }


      });

	  var nombre = document.getElementById("nombre");
	  var apellido = document.getElementById("apellido");

    var soloLetras = function(e){
	  var codigoTecla = e.keyCode;
	  if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32){
		this.nextElementSibling.nextElementSibling.innerText = "";
		return true;
	  }else{
		this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras"
		return false;
	 }
 }
  nombre.onkeypress=soloLetras;
 apellido.onkeypress=soloLetras;

  var inputs = document.getElementsByClassName("input-registro");
  var validacionInput = function(){
	if(this.value.trim().length==0){
		this.value ="";
		this.nextElementSibling.nextElementSibling.innerText= "*Este campo es obligatorio";
	}else{
		this.nextElementSibling.nextElementSibling.innerText= "";
	}

	if(this.getAttribute("type")=="text"){
		var arrDato = this.value.split(" ");
		var datoConMayusculas = "";
		for(var i = 0; i<arrDato.length;i++){
			datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
		}
		this.value=datoConMayusculas.trim();
	}
}

 for(var i = 0; i<inputs.length;i++){
	inputs[i].onblur=validacionInput;
 }

 }
