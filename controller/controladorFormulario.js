// Importación de la función de pintar datos
import { pintarDatos } from "./pintarDatos.js";
// Importación de la función de obtener datos de la API
import { obtenerDatoPorParametro } from "../model/obtenerDatoPorParametro.js";
// URL base de la API
const BASEURL = "http://localhost/DWES/API_Book/api/catalogoLibros.php";
// Identificador del tbody donde quiero insertar los datos
const idenTbody = "busqueda";
// Variables del DOM
const campoEnviado = document.getElementById("parametroBusqueda");
const valorEnviado = document.getElementById("valorBusqueda");
const formulario = document.getElementById("formularioBusqueda");
// Añado un evento de escucha en este caso de cuando envias datos del formulario y lo que realizo es la ejecución de pintarDatos donde pinto los datos en el identificador del tbody asignado arriba en las variables
formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  pintarDatos(
    idenTbody,
    await obtenerDatoPorParametro(
      BASEURL,
      campoEnviado.value,
      valorEnviado.value
    )
  );
  valorEnviado.value = "";
});
