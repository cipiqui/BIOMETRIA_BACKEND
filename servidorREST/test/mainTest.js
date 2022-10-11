// ........................................................
// mainTest1.js
// ........................................................
var request = require("request");
var assert = require("assert");
// ........................................................
// ........................................................
const IP_PUERTO = "http://localhost:8080";
// ........................................................
// main ()
// ........................................................
describe("Test 1 : Recuerda arrancar el servidor", function () {
  // ....................................................
  // ....................................................
  it("probar que GET /prueba responde ¡Funciona!", function (hecho) {
    request.get(
      { url: IP_PUERTO + "/prueba", headers: { "User-Agent": "carlos" } },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        assert.equal(carga, "¡Funciona!", "¿La carga no es ¡Funciona!?");
        hecho();
      } // callback()
    ); // .get
  }); // it
  // ....................................................
  // ....................................................
  // ....................................................
  it("probar POST /alta", function (hecho) { // Probar Post
    var datosMedicion = { // Datos de la medicion a enviar al servidor REST
      ID: "19",
      Medicion: 7.5, 
    };
    request.post(
      {
        headers: { "User-Agent": "carlos", "Content-Type": "application/json" },
        url: IP_PUERTO + "/alta",
        body: JSON.stringify(datosMedicion),
      }, 
      function (err, respuesta, carga) {
        console.log("asserts");
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        assert.equal(carga, "OK", "¿La carga no es OK");
        hecho();
      } // callback
    ); // .post
    console.log("llega?");
  })//it

}); // describe
