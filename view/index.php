<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="module" src="../controller/controladorPrincipal.js"></script>
    <script type="module" src="../controller/controladorFormulario.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Listado libros</title>
</head>
<body>
    <div class="container">
        <table class="table table-striped border border-secondary text-center m-2">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">AUTOR</th>
                    <th scope="col">TITULO</th>
                    <th scope="col">GENERO</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">AÑO DE PUBLICACIÓN</th>
                    <th scope="col">DESCRIPCIÓN</th>
                </tr>
            </thead>
            <tbody id="todosDatos">
            </tbody>
        </table>
        <form class="m-2" id="formularioBusqueda">
            <select name="parametroBusqueda" id="parametroBusqueda">
                <option value="id">ID</option>
                <option value="genero">Genero</option>
                <option value="autor">Autor</option>
                <option value="pagina">Página</option>
            </select>
            <label class="form-label" for="valorBusqueda">Escribe el valor del parametro seleccionado</label>
            <input type="text" name="valorBusqueda" id="valorBusqueda">
            <button class="btn btn-secondary" type="submit">Buscar</button>
        </form>
        <table class="table table-striped border border-secondary text-center m-2">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">AUTOR</th>
                    <th scope="col">TITULO</th>
                    <th scope="col">GENERO</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">AÑO DE PUBLICACIÓN</th>
                    <th scope="col">DESCRIPCIÓN</th>
                </tr>
            </thead>
            <tbody id="busqueda">
            </tbody>
        </table>
    </div>
</body>
</html>