/*
La función obtenerDatoPorParametro obtine la información de la url 
pasada por parametro y te devuelve los resultados obtenidos
*/
export const obtenerDatoPorParametro = async (url, campo, valor) => {
  try {
    const response = await axios.get(`${url}?${campo}=${valor}`);
    const obtenido = response.data.catalogo;
    return obtenido;
  } catch (error) {
    console.log(error);
  }
};
