window.onload=function(){
	document.getElementsByTagName("form")[0].onsubmit=function(e){
		e.preventDefault();
	}
	var alumna= JSON.parse(localStorage.getItem("nuevaAlumna"));
	var inputsEditar = document.getElementsByClassName("input-editar");
	inputsEditar[0].value = alumna.nombre;/*esta alumna es un objeto del archivo registrar.js*/
	inputsEditar[1].value = alumna.apellido;
	inputsEditar[2].value = alumna.mail;
	inputsEditar[3].value = alumna.password;
  document.getElementsByTagName("button")[0].addEventListener("click",function(){
  		if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0 ){
  			alumna.nombre=inputsEditar[0].value;
  			alumna.apellido= inputsEditar[1].value
  			alumna.mail = inputsEditar[2].value;
  			alumna.password = inputsEditar[3].value;

  			localStorage.setItem("nuevaAlumna",JSON.stringify(alumna));
  			window.location="alumna.html"
  		}
  		else{
  			alert("Todos los campos son obligatorios");
  		}
  	})
  };
