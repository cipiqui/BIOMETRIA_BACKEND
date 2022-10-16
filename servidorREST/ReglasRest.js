// .....................................................................
// ReglasREST.js
// .....................................................................

module.exports.cargar = function (servidorExpress, laLogica) {
  // .......................................................
  // GET /prueba
  // .......................................................
  servidorExpress.get("/prueba/", function (peticion, respuesta) {
    console.log(" * GET /prueba ");
    respuesta.send("¡Funciona!");
  }); // get /prueba
  // .......................................................
  // .......................................................
  servidorExpress.get("/medicion", async function (peticion, respuesta){
    console.log(" * GET / Medicion");
    var error = null
    //Llamada a la funcion buscarMedicion() para recoger
    //la muestra introducida en la DB
    try{
      var res = await laLogica.buscarMedicion()
    }

    catch (e){
      error = e
    }


    if (error != null){
      if( res.length == 0 ) {
        // 404: not found
        respuesta.status(404).send( "No encontré la muestra" )
        return
      }
    }

    console.log(res)
    respuesta.send( JSON.stringify( res ) )

  }) // get / prueba
  // .......................................................
  // .......................................................
  // POST /alta
  // .......................................................
  servidorExpress.post("/alta", async function (peticion, respuesta) {
    console.log(" * POST /alta ");
    var datos = JSON.parse(peticion.body);
    console.log("Major: " + datos.MedicionMajor);
    console.log("Minor: " + datos.MedicionMinor);

    try{

      await laLogica.insertarMedicion(datos);
      console.log("Termina el metodo");
      //done()
      //console.log("tiempo?");
    }
    catch (e){
      error = e
      console.log(e);
    } 
  }); // get /dividir

}; // ()
// .....................................................................
// .....................................................................
