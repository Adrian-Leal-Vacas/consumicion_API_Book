// Importación de la función de pintar datos
import { pintarDatos } from "./pintarDatos.js";
// Importación de la función de obtener datos de la API
import { obtenerDatoPorParametro } from "../model/obtenerDatoPorParametro.js";
// URL base de la API
const BASEURL = "http://localhost/DWES/API_Book/api/catalogoLibros.php";
// Identificador del tbody donde quiero insertar los datos
const idenTbody = "todosDatos";
// Ejecuto pintarDatos para que me pinte la tabla
pintarDatos(idenTbody, await obtenerDatoPorParametro(BASEURL, "", ""));
