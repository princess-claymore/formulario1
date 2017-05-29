window.onload=function(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
  var mail = document.getElementById("mail");
	var contras = document.getElementById("passw");

	var alumna = JSON.parse(localStorage.getItem("nuevaAlumna"));
/*variable nombre,apellido y contras son de este documento*/
	nombre.innerText=alumna.nombre;/*este lo traigo desde el formularioRegistro*/
	apellido.innerText=alumna.apellido;
	mail.innerText=alumna.mail;
	contras.innerText=alumna.password;

	function alumnaNueva(nombreA,apellidoA,mailA,contrasA) {
		this.nombre = nombreA;
		this.apellido = apellidoA;
		this.mail = mailA;
		this.contras = contrasA;

	};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	})
};
