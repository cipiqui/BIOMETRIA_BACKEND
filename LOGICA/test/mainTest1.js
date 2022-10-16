// ........................................................
// mainTest1.js
// ........................................................
const Logica = require("../Logica.js") // Añadimos la clase Logica 
var assert = require("assert") // Añadimos assert para hacer pruebas
// ........................................................
// main ()
// ........................................................
describe("Test 1: Conectar, añadir, comprobar y cerrar", function () { // Test 1 
    // ....................................................
    // ....................................................
    var laLogica = null // La clase Logica vale null para poder asignarle un valor
    // ....................................................
    // ....................................................
    it("conectar a la base de datos", function (hecho) { // Conectar a la base de datos 
        laLogica = new Logica(
            "../bd/datos.bd", // Nombre de la base de datos
            function (err) { // Callback
                if (err) { // Si hay error
                    throw new Error("No he podido conectar con datos.db") // Lanza un error
                }
                hecho() // Sino, termina
            })
    }) // it
    // ....................................................
    // ....................................................
    it( "puedo insertar una muestra",
    async function() {
        await laLogica.insertarMedicion(
            {MedicionMajor: "1232", MedicionMinor: '233'}
        )
        var res = await laLogica.buscarMedicion( "1232" )
        assert.equal( res.length, 1, "¿no hay un resulado?" )
        assert.equal( res[0].MedicionMajor, "1232", "¿no es 1232?" )
        assert.equal( res[0].MedicionMinor, '233', "¿no es 233?" )
    }) // it
    // ....................................................
    // ....................................................
    it("cerrar conexión a la base de datos", // Cierra la conexión a la base de datos 
        async function () { // Función asíncrona para cerrar la conexión a la base de datos
            try { // Intenta cerrar la conexión a la base de datos
                await laLogica.cerrar() // Cierra la conexión a la base de datos
            } catch (err) { // Si hay error
                throw new Error("cerrar conexión a BD fallada: " + err) // Lanza un error
            }
        }) // it
}) // describe