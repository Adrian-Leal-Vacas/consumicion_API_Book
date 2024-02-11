/*
La función pintarDatos se encarga de pintar los datos recogidos que tiene que 
ser un array y con el identificador de la tabla donde lo quieres añadir
*/
export const pintarDatos = (identificador, datos) => {
  // recogo el tbody con el identificador pasado como parametro
  const tbody = document.getElementById(identificador);
  // Antes de insertar limpio el HTML por si ha quedado código HTML de la consulta anterior
  tbody.innerHTML = "";
  // Recorro el array pasado y realizo la tabla con los datos y añado las clases necesarias para el estilo
  datos.forEach((catalogoLibro) => {
    const tr = document.createElement("tr");
    for (const key in catalogoLibro) {
      const td = document.createElement("td");
      td.classList.add("border");
      td.textContent = catalogoLibro[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
};
