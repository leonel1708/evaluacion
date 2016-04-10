//Armado Alejandro
//Derechos reservados

//++++++++++++++FUNCIONES
//escribir lista en pantalla

/*function printHTML(mensaje){
	var outputDiv=document.getElementById("cuerpo");
	outputDiv.innerHTML=mensaje;
}*/


//Recorre e imprime los datos del objeto
function recorrerObjeto(objeto){
	var listHTML = "<ul>";
	for (var dato in objeto){
		listHTML += "<li>" + dato + ": "+ objeto[dato] + "</li>";
	}
	listHTML+="</ul><hr>";
	return(listHTML);
	//print(listHTML);
}

//Recorre el arreglo
function printList(list){
	var listHTML = "";
	console.log(list.length);	
	for (var i = 0; i < list.length; i++) {
		listHTML+=recorrerObjeto(matrizEstudiantes[i]);
	}
	print(listHTML);
}

function print(HTML){
	var outputDiv=document.getElementById("infoEstudiantes");
	//alert(HTML);
	outputDiv.innerHTML=HTML;
	//document.write(HTML);
}

//Borra el contenido del documento html dandole id al body
function borrar(){
	var todo = document.getElementById('infoEstudiantes');
	todo.innerHTML = "";
	console.log("Se Borro todo el Doc!");
}


//++++++++++++++++++++Arreglo de objetos

var matrizEstudiantes=[
{
	nombre:"Leo",
	genero:"Masculino",
	edad:28,
	notas: [100,100,99,99],
	ciudad:"Santa Elena",
	lenguajeFavorito:"JavaScript",
	laborando: true
},

{
	nombre:"Hugo",
	genero:"Masculino",
	edad:5,
	notas: [100,95,99,100],
	ciudad:"Santa Elena",
	lenguajeFavorito:"C++",
	laborando: false
},

{
	nombre:"Miriam",
	genero:"Femenino",
	edad:25,
	notas: [100,100,75,94],
	ciudad:"Santa Elena",
	lenguajeFavorito:"Español",
	laborando: false
},

{
	nombre:"Karen",
	genero:"Femenino",
	edad:23,
	notas: [70,76,99,100],
	ciudad:"La Libertad",
	lenguajeFavorito:"Java",
	laborando: true
},

{
	nombre:"Luis",
	genero:"Masculino",
	edad:3,
	notas: [100,100,100,100],
	ciudad:"Santa Elena",
	lenguajeFavorito:"VB",
	laborando: false
},	

]




//Buscar Estudiante

while(true){
	var respuesta = prompt("Igrese estudiante a buscar. O a su vez L para listas o S para salir");
	//q para salir
	if (respuesta==="s" || respuesta==="S" ){
		alert("CHAO!!!!");		
		break;
	} else if (respuesta==="l" || respuesta==="L" ){ //l para listar
		borrar();
		printList(matrizEstudiantes);
	}else{
		var alerta = 0, posicion = 0;
		for (var i = 0; i < matrizEstudiantes.length; i++) {
			if (respuesta.toUpperCase()===matrizEstudiantes[i].nombre.toUpperCase()){
				alerta=1;
				posicion=i;
				var cadea = "";
				cadea+=recorrerObjeto(matrizEstudiantes[i]);
				print(cadea);
			}
		};
		if (alerta===0){
			alert("Nombre no encontrado!!!");				
		}
	}


}


		//console.log(matrizEstudiantes.length);





