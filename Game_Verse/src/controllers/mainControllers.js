const juegos = require(`../utils/juegos`);

const mainControllers = {
  home: (req, res) => {
    res.render(`index.ejs`, { title: `Home`, css: `css/index.css` });
  },
  tienda: (req, res) => {
    res.render(`products/tienda.ejs`, { title: `Tienda`, css: `css/tienda.css` });
  },
  login: (req, res) => {
    res.render(`users/login.ejs`, { title: `Login`, css: `css/login_registro.css` });
  },
  registro: (req, res) => {
    res.render(`users/registro.ejs`, { title: `Registro`, css: `css/login_registro.css` });
  },
  producto: (req, res) => {
    const id = req.params.id;
    const juego = juegos.find((juego) => juego.id == id);
    res.render(`products/producto.ejs`, { title: `Juego`, css: `css/producto.css`, juego });

    // res.render(`products/producto.ejs`, { title: `Juego ${juego.name}`, css: `css/producto.css`, juego });
  }
}

module.exports = mainControllers;