
// ---------------------------------------------------------------------
// LogicaFake.js
// ---------------------------------------------------------------------

const IP_PUERTO = "http://localhost:8080";
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
export default class LogicaFake {

    async init() {
        var metodo = this;
    }

    async buscarMedicion() {
        console.log("EMPIEZA LA EJECUCION DE: buscarMedicion()")

		var metodo = this;
        //Se crea la peticion /muestra
		var url = IP_PUERTO + '/medicion'
		await fetch(url , {
            method: 'GET',
            headers: new Headers(
            //Partes del header que se han añadido para 
            //posibilitar la comunicacion con el servidor REST
            { 'Users-Agent' : 'Carlos',
            //'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'}),
            //mode: "cors"


        }) 
        //Se recoge el JSON de la cabecera de la respuesta 
        .then(response => response.json())
        //Una vez recogida se pasa la muestra
        .then(datos_medicion =>
            this.cargarMedicion(datos_medicion[0].MedicionMajor,datos_medicion[0].MedicionMinor))
            //)
        .catch(err => console.error(err));
         
		console.log("ACABA LA EJECUCION DE: buscarMedicion()")
    }

    async insertarMedicion() {
		var metodo = this;
        console.log("EMPIEZA LA EJECUCION DE: insertarMedicion()")
        //Se recogen los valores de MedicionMajor y MedicionMinor
        var MedicionMajor = document.getElementById("valorMedicionMajorInput").value
        var MedicionMinor = document.getElementById("MedicionMinorValorInput").value
        //Se formatean para pasarlo como JSON en la cabecera de la peticion
        var datos_medicion = {MedicionMajor: MedicionMajor, MedicionMinor: MedicionMinor}
        console.log(datos_medicion)
        //Se crea la peticion /alta para introducir la medida 
		var url = IP_PUERTO + '/alta'
		await fetch(url , {
            method: 'POST',
            headers: new Headers(
            //Partes del header que se han añadido para 
            //posibilitar la comunicacion con el servidor REST
            { 'Users-Agent' : 'Carlos',
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'}),
            body: JSON.stringify(datos_medicion),
            

        })  
        .catch(err => console.error(err));
         
		console.log("ACABA LA EJECUCION DE: insertarMedicion()")
    }
	
    // .................................................................
    // ID, Medicion
    // -->
    // cargarMuestra() -->
    // .................................................................
    cargarMedicion( muestra, muestra2 ){
        console.log("EMPIEZA LA EJECUCION DE: cargarMuestra()")

        var metodo = this
        var muestra_txt = document.getElementById("valorMuestraTxt").textContent
		document.getElementById("valorMuestraTxt").textContent = " Valor de la muestra: " + muestra + " || " + muestra2;
	}
}
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

