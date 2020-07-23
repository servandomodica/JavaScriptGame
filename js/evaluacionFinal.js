window.addEventListener("load", ocultar, false);
window.addEventListener("load", saludos, false);
window.addEventListener("load", iniciar, false);

function ocultar(){
	$(".divis").css("display","none");
}

function saludos(){
	$("h1").animate({width:"550px", opacity:"1"}, 2000);
	$("#horacio").slideUp(2000).slideDown(4000);
	$("#start").slideUp(2000).slideDown(4000);
};

function jugar(){
	var textoSaludo = "</br><h3>¿DE QUÉ <span>EQUIPO</span> ES CADA <span>ESCUDO</span>?</br></br><i>Seleccioná uno por uno y demostrá</br>cuánto sabés de la Superliga Argentina 2020</i></h3></br>";
	document.getElementById("saludos").innerHTML = textoSaludo;
	$("#saludos").show().animate({width:"450px", opacity:"1"}, 2000);
	$("#001").slideDown(1000);
	$("#play").css("display","none");
}

var puntajeAcum = 0;
var acertados = "";
var errados = "";

function comprobar1(){
	var Form01 = document.getElementById("form001");
	var Img01 = document.getElementById("td001");
	var Bot01 = document.getElementById("seleccion");
	$("#002").slideDown(1000);
	if(Form01.seleccion.options[Form01.seleccion.selectedIndex].value == "selecc"){
	Img01.src = "escudosJPGorig/afa.jpg";
	Img01.style.border = "2px solid #20ff20";
	Bot01.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = "Selección nacional. ";
	}else{
			Img01.style.border = "2px solid red";
			Bot01.style.display = "none";
			errados = "Selección nacional. ";
		}
};

function comprobar2(){
	var Form02 = document.getElementById("form002");
	var Img02 = document.getElementById("td002");
	var Bot02 = document.getElementById("defensa");
	$("#003").slideDown(1000);
	if(Form02.defensa.options[Form02.defensa.selectedIndex].value == "defensa"){
	Img02.src = "escudosJPGorig/defensa.jpg";
	Img02.style.border = "2px solid #20ff20";
	Bot02.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Defensa y Justicia. ";
	}else{
			Img02.style.border = "2px solid red";
			Bot02.style.display = "none";
			errados = errados + "Defensa y Justicia. ";
		}
};

function comprobar3(){
	var Form03 = document.getElementById("form003");
	var Img03 = document.getElementById("td003");
	var Bot03 = document.getElementById("lanus");
	$("#004").slideDown(1000);
	if(Form03.lanus.options[Form03.lanus.selectedIndex].value == "lanus"){
	Img03.src = "escudosJPGorig/lanus.jpg";
	Img03.style.border = "2px solid #20ff20";
	Bot03.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Lanús. ";
	}else{
			Img03.style.border = "2px solid red";
			Bot03.style.display = "none";
			errados = errados + "Lanús. ";
		}
};

function comprobar4(){
	var Form04 = document.getElementById("form004");
	var Img04 = document.getElementById("td004");
	var Bot04 = document.getElementById("colon");
	$("#005").slideDown(1000);
	if(Form04.colon.options[Form04.colon.selectedIndex].value == "colon"){
	Img04.src = "escudosJPGorig/colon.jpg";
	Img04.style.border = "2px solid #20ff20";
	Bot04.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Colón S.F. ";
	}else{
			Img04.style.border = "2px solid red";
			Bot04.style.display = "none";
			errados = errados + "Colón S.F. ";
		}
};

function comprobar5(){
	var Form05 = document.getElementById("form005");
	var Img05 = document.getElementById("td005");
	var Bot05 = document.getElementById("racing");
	$("#006").slideDown(1000);
	if(Form05.racing.options[Form05.racing.selectedIndex].value == "racing"){
	Img05.src = "escudosJPGorig/racing.jpg";
	Img05.style.border = "2px solid #20ff20";
	Bot05.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Racing Club. ";
	}else{
			Img05.style.border = "2px solid red";
			Bot05.style.display = "none";
			errados = errados + "Racing Club. ";
		}
};

function comprobar6(){
	var Form06 = document.getElementById("form006");
	var Img06 = document.getElementById("td006");
	var Bot06 = document.getElementById("arsenal");
	$("#007").slideDown(1000);
	if(Form06.arsenal.options[Form06.arsenal.selectedIndex].value == "arsenal"){
	Img06.src = "escudosJPGorig/arsenal.jpg";
	Img06.style.border = "2px solid #20ff20";
	Bot06.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Arsenal. ";
	}else{
			Img06.style.border = "2px solid red";
			Bot06.style.display = "none";
			errados = errados + "Arsenal. ";
		}
};

function comprobar7(){
	var Form07 = document.getElementById("form007");
	var Img07 = document.getElementById("td007");
	var Bot07 = document.getElementById("independiente");
	$("#008").slideDown(1000);
	if(Form07.independiente.options[Form07.independiente.selectedIndex].value == "independiente"){
	Img07.src = "escudosJPGorig/independiente.jpg";
	Img07.style.border = "2px solid #20ff20";
	Bot07.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Independiente. ";
	}else{
			Img07.style.border = "2px solid red";
			Bot07.style.display = "none";
			errados = errados + "Independiente. ";
		}
};

function comprobar8(){
	var Form08 = document.getElementById("form008");
	var Img08 = document.getElementById("td008");
	var Bot08 = document.getElementById("rosario");
	$("#009").slideDown(1000);
	if(Form08.rosario.options[Form08.rosario.selectedIndex].value == "rosario"){
	Img08.src = "escudosJPGorig/rosario.jpg";
	Img08.style.border = "2px solid #20ff20";
	Bot08.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Rosario Central. ";
	}else{
			Img08.style.border = "2px solid red";
			Bot08.style.display = "none";
			errados = errados + "Rosario Central. ";
		}
};

function comprobar9(){
	var Form09 = document.getElementById("form009");
	var Img09 = document.getElementById("td009");
	var Bot09 = document.getElementById("banfield");
	$("#010").slideDown(1000);
	if(Form09.banfield.options[Form09.banfield.selectedIndex].value == "banfield"){
	Img09.src = "escudosJPGorig/banfield.jpg";
	Img09.style.border = "2px solid #20ff20";
	Bot09.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Banfield. ";
	}else{
			Img09.style.border = "2px solid red";
			Bot09.style.display = "none";
			errados = errados + "Banfield. ";
		}
};

function comprobar10(){
	var Form10 = document.getElementById("form010");
	var Img10 = document.getElementById("td010");
	var Bot10 = document.getElementById("huracan");
	$("#011").slideDown(1000);
	if(Form10.huracan.options[Form10.huracan.selectedIndex].value == "huracan"){
	Img10.src = "escudosJPGorig/huracan.jpg";
	Img10.style.border = "2px solid #20ff20";
	Bot10.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Huracán. ";
	}else{
			Img10.style.border = "2px solid red";
			Bot10.style.display = "none";
			errados = errados + "Huracán. ";
		}
};

function comprobar11(){
	var Form11 = document.getElementById("form011");
	var Img11 = document.getElementById("td011");
	var Bot11 = document.getElementById("aldosivi");
	$("#012").slideDown(1000);
	if(Form11.aldosivi.options[Form11.aldosivi.selectedIndex].value == "aldosivi"){
	Img11.src = "escudosJPGorig/aldosivi.jpg";
	Img11.style.border = "2px solid #20ff20";
	Bot11.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Aldosivi. ";
	}else{
			Img11.style.border = "2px solid red";
			Bot11.style.display = "none";
			errados = errados + "Aldosivi. ";
		}
};

function comprobar12(){
	var Form12 = document.getElementById("form012");
	var Img12 = document.getElementById("td012");
	var Bot12 = document.getElementById("newells");
	$("#013").slideDown(1000);
	if(Form12.newells.options[Form12.newells.selectedIndex].value == "newells"){
	Img12.src = "escudosJPGorig/newells.jpg";
	Img12.style.border = "2px solid #20ff20";
	Bot12.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Newell's Old Boys. ";
	}else{
			Img12.style.border = "2px solid red";
			Bot12.style.display = "none";
			errados = errados + "Newell's Old Boys. ";
		}
};

function comprobar13(){
	var Form13 = document.getElementById("form013");
	var Img13 = document.getElementById("td013");
	var Bot13 = document.getElementById("river");
	$("#014").slideDown(1000);
	if(Form13.river.options[Form13.river.selectedIndex].value == "river"){
	Img13.src = "escudosJPGorig/river.jpg";
	Img13.style.border = "2px solid #20ff20";
	Bot13.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "River Plate. ";
	}else{
			Img13.style.border = "2px solid red";
			Bot13.style.display = "none";
			errados = errados + "River Plate. ";
		}
};

function comprobar14(){
	var Form14 = document.getElementById("form014");
	var Img14 = document.getElementById("td014");
	var Bot14 = document.getElementById("talleres");
	$("#015").slideDown(1000);
	if(Form14.talleres.options[Form14.talleres.selectedIndex].value == "talleres"){
	Img14.src = "escudosJPGorig/talleres.jpg";
	Img14.style.border = "2px solid #20ff20";
	Bot14.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Talleres de Córdoba. ";
	}else{
			Img14.style.border = "2px solid red";
			Bot14.style.display = "none";
			errados = errados + "Talleres de Córdoba. ";
		}
};

function comprobar15(){
	var Form15 = document.getElementById("form015");
	var Img15 = document.getElementById("td015");
	var Bot15 = document.getElementById("argentinos");
	$("#016").slideDown(1000);
	if(Form15.argentinos.options[Form15.argentinos.selectedIndex].value == "argentinos"){
	Img15.src = "escudosJPGorig/argentinos.jpg";
	Img15.style.border = "2px solid #20ff20";
	Bot15.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Argentinos Jrs. ";
	}else{
			Img15.style.border = "2px solid red";
			Bot15.style.display = "none";
			errados = errados + "Argentinos Jrs. ";
		}
};

function comprobar16(){
	var Form16 = document.getElementById("form016");
	var Img16 = document.getElementById("td016");
	var Bot16 = document.getElementById("godoy");
	$("#017").slideDown(1000);
	if(Form16.godoy.options[Form16.godoy.selectedIndex].value == "godoy"){
	Img16.src = "escudosJPGorig/godoy.jpg";
	Img16.style.border = "2px solid #20ff20";
	Bot16.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Godoy Cruz. ";
	}else{
			Img16.style.border = "2px solid red";
			Bot16.style.display = "none";
			errados = errados + "Godoy Cruz. ";
		}
};

function comprobar17(){
	var Form17 = document.getElementById("form017");
	var Img17 = document.getElementById("td017");
	var Bot17 = document.getElementById("velez");
	$("#018").slideDown(1000);
	if(Form17.velez.options[Form17.velez.selectedIndex].value == "velez"){
	Img17.src = "escudosJPGorig/velez.jpg";
	Img17.style.border = "2px solid #20ff20";
	Bot17.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Vélez Sarsfield. ";
	}else{
			Img17.style.border = "2px solid red";
			Bot17.style.display = "none";
			errados = errados + "Vélez Sarsfield. ";
		}
};

function comprobar18(){
	var Form18 = document.getElementById("form018");
	var Img18 = document.getElementById("td018");
	var Bot18 = document.getElementById("atletico");
	$("#019").slideDown(1000);
	if(Form18.atletico.options[Form18.atletico.selectedIndex].value == "atletico"){
	Img18.src = "escudosJPGorig/atletico.jpg";
	Img18.style.border = "2px solid #20ff20";
	Bot18.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Atlético T. ";
	}else{
			Img18.style.border = "2px solid red";
			Bot18.style.display = "none";
			errados = errados + "Atlético T. ";
		}
};

function comprobar19(){
	var Form19 = document.getElementById("form019");
	var Img19 = document.getElementById("td019");
	var Bot19 = document.getElementById("union");
	$("#020").slideDown(1000);
	if(Form19.union.options[Form19.union.selectedIndex].value == "union"){
	Img19.src = "escudosJPGorig/union.jpg";
	Img19.style.border = "2px solid #20ff20";
	Bot19.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Unión S.F. ";
	}else{
			Img19.style.border = "2px solid red";
			Bot19.style.display = "none";
			errados = errados + "Unión S.F. ";
		}
};

function comprobar20(){
	var Form20 = document.getElementById("form020");
	var Img20 = document.getElementById("td020");
	var Bot20 = document.getElementById("patronato");
	$("#021").slideDown(1000);
	if(Form20.patronato.options[Form20.patronato.selectedIndex].value == "patronato"){
	Img20.src = "escudosJPGorig/patronato.jpg";
	Img20.style.border = "2px solid #20ff20";
	Bot20.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Patronato. ";
	}else{
			Img20.style.border = "2px solid red";
			Bot20.style.display = "none";
			errados = errados + "Patronato. ";
		}
};

function comprobar21(){
	var Form21 = document.getElementById("form021");
	var Img21 = document.getElementById("td021");
	var Bot21 = document.getElementById("sanlorenzo");
	$("#022").slideDown(1000);
	if(Form21.sanlorenzo.options[Form21.sanlorenzo.selectedIndex].value == "sanlorenzo"){
	Img21.src = "escudosJPGorig/sanlorenzo.jpg";
	Img21.style.border = "2px solid #20ff20";
	Bot21.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "San Lorenzo. ";
	}else{
			Img21.style.border = "2px solid red";
			Bot21.style.display = "none";
			errados = errados + "San Lorenzo. ";
		}
};

function comprobar22(){
	var Form22 = document.getElementById("form022");
	var Img22 = document.getElementById("td022");
	var Bot22 = document.getElementById("gimnasia");
	$("#023").slideDown(1000);
	if(Form22.gimnasia.options[Form22.gimnasia.selectedIndex].value == "gimnasia"){
	Img22.src = "escudosJPGorig/gimnasia.jpg";
	Img22.style.border = "2px solid #20ff20";
	Bot22.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Gimnasia L.P. ";
	}else{
			Img22.style.border = "2px solid red";
			Bot22.style.display = "none";
			errados = errados + "Gimnasia L.P. ";
		}
};

function comprobar23(){
	var Form23 = document.getElementById("form023");
	var Img23 = document.getElementById("td023");
	var Bot23 = document.getElementById("central");
	$("#024").slideDown(1000);
	if(Form23.central.options[Form23.central.selectedIndex].value == "central"){
	Img23.src = "escudosJPGorig/central.jpg";
	Img23.style.border = "2px solid #20ff20";
	Bot23.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Central Córdoba S.E. ";
	}else{
			Img23.style.border = "2px solid red";
			Bot23.style.display = "none";
			errados = errados + "Central Córdoba S.E. ";
		}
};

function comprobar24(){
	var Form24 = document.getElementById("form024");
	var Img24 = document.getElementById("td024");
	var Bot24 = document.getElementById("estudiantes");
	$("#025").slideDown(1000);
	if(Form24.estudiantes.options[Form24.estudiantes.selectedIndex].value == "estudiantes"){
	Img24.src = "escudosJPGorig/estudiantes.jpg";
	Img24.style.border = "2px solid #20ff20";
	Bot24.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Estudiantes L.P. ";
	}else{
			Img24.style.border = "2px solid red";
			Bot24.style.display = "none";
			errados = errados + "Estudiantes L.P. ";
		}
};

function comprobar25(){
	var Form25 = document.getElementById("form025");
	var Img25 = document.getElementById("td025");
	var Bot25 = document.getElementById("boca");
	$("#026").slideDown(1000);
	if(Form25.boca.options[Form25.boca.selectedIndex].value == "boca"){
	Img25.src = "escudosJPGorig/boca.jpg";
	Img25.style.border = "2px solid #20ff20";
	Bot25.style.display = "none";
	puntajeAcum = puntajeAcum + 1;
	acertados = acertados + "Boca Jrs.";
	}else{
			Img25.style.border = "2px solid red";
			Bot25.style.display = "none";
			errados = errados + "Boca Jrs.";
		}
};

function resultados(){
	var fallas = 25 - puntajeAcum;
	var puntajeee = puntajeAcum*4;
	var recomend = "";
	if(puntajeee<=48){
		recomend = "¡AÚN TENÉS MUCHO POR CONOCER!";
		}else if(puntajeee>48 && puntajeee<=72){
			recomend = "TENÉS UN CONOCIMIENTO PROMEDIO.";
			}else if(puntajeee>72 && puntajeee<=88){
				recomend = "¡TENÉS MUY BUEN CONOCIMIENTO!";
				}else if(puntajeee>88 && puntajeee<=100){
					recomend = "¡TENÉS EXCELENTE CONOCIMIENTO!";};
	var textoRes = "<h3>ACERTASTE EN <span>" + puntajeAcum + "</span> EQUIPOS:</br>" + acertados + "</br></br>TE EQUIVOCASTE <span>" + fallas + "</span> VECES:</br>" + errados + "</h3></br></br><h2><i><span>TU PUNTAJE FINAL ES " + puntajeee + "%</span></i></br>" + recomend + "</h2></br>";
	document.getElementById("resultados").innerHTML = textoRes;
	$("#resultados").slideDown(3500);
	$("#formuFinal").slideDown(3500);
	$("#026").css("display","none");
};



function Aviso(){
	$("#agregado").show("slow");
	document.getElementById("agregado").innerHTML = "<span>*</span>Debés completar este campo, es obligatorio";
};

function AvisoFecha(){
	$("#agregado").show("slow");
	document.getElementById("agregado").innerHTML = "**Tu fecha de nacimiento es opcional, no obligatoria";
};

function AvisoComment(){
	$("#agregado").show("slow");
	document.getElementById("agregado").innerHTML = "**Tu comentario es opcional, no obligatorio";
};


function Limpiar(){
	$("#agregado").hide("slow");
	$("#errores").hide("slow");
	$("#informacion").slideUp("slow").slideDown("slow");
	
	var nombre = document.getElementById("nombre");
	nombre.style.background = "#FFFFFF";
	var apellido = document.getElementById("apellido");
	apellido.style.background = "#FFFFFF";
	var casilla = document.getElementById("casilla");
	casilla.style.background = "#FFFFFF";
};

function iniciar(){
	document.getElementById("enviar").addEventListener("click",enviar,false);
	document.informacion.addEventListener("invalid",validacion,true);
	document.informacion.addEventListener("input",controlar,false);
};

function enviar(){
	var valido = document.informacion.checkValidity();
	if(valido){
		document.informacion.submit();}
		else{
			$("#errores").show("slow");
			var errores = "";
			if(nombre.validity.valueMissing || nombre.validity.typeMismatch || nombre.validity.patternMismatch || nombre.validity.tooLong || nombre.validity.rangeUnderflow || nombre.validity.rangeOverflow)
			{errores += "<span>> </span>El NOMBRE ingresado no es correcto.</br>Ingresá sólo letras, entre 5 y 65, sin números ni espacio/s.</br></br>";};
			if(apellido.validity.valueMissing || apellido.validity.typeMismatch || apellido.validity.patternMismatch || apellido.validity.tooLong || apellido.validity.rangeUnderflow || apellido.validity.rangeOverflow)
			{errores += "<span>> </span>El APELLIDO ingresado no es correcto.</br>Ingresá sólo letras, entre 5 y 65, sin números ni espacio/s.</br></br>";};
			if(casilla.validity.valueMissing || casilla.validity.typeMismatch || casilla.validity.patternMismatch || casilla.validity.tooLong || casilla.validity.rangeUnderflow || casilla.validity.rangeOverflow)
			{errores += "<span>> </span>La CASILLA DE EMAIL ingresada no es correcta.</br>Ejemplo correcto: ab@cd.com</br>Podés ingresar entre 2 y 65 caracteres en total, sin espacio/s.</br></br>";};
			document.getElementById("errores").innerHTML = errores;
		}
};

function validacion(e){
	var elemento = e.target;
	elemento.style.background ="#FFDDDD";
};

function controlar(e){
	var elemento = e.target;
	if(elemento.validity.valid){
		elemento.style.background="#FFFFFF";
	}
		else{
			elemento.style.background="#FFDDDD";
		}
};




/*Evaluación Final Integradora:
Un formulario con validación personalizada (utilizando la API trabajada).
Un juego (que utilice al menos 2 de los temas trabajados. Ej. funciones / DOM / eventos / condicionales).
Una función asociada a un botón.
*/