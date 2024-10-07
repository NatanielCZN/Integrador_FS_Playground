const express = require(`express`);
const path = require(`path`);
const mainRoutes = require(`./routes/main.routes`);
const app = express();

/** CONFIGURACION EJS */
app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `./views`));

/** CONFIGURACION ESTATICAS */
const publicPath = path.join(__dirname, `../public`);
app.use(express.static(publicPath));

/** CONFIGURACION DE PUERTO */
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/** CONFIGURACION DE RUTAS */
app.use('/', mainRoutes);