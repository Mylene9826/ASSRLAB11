const { Router } = require("express");
const router = Router();
const dbConnection = require('../routes/config/databaseCon');
const connection = dbConnection();
const { getEstudiante, addEstudiante } = require("../controller/estudiante.controller");
router.get('/', getEstudiante);
//router.post('/',addEstudiante);
module.exports = app => {

    app.post('/', (req, res) => {

        console.log(req.body);
        const { idestudiante, nombre, apellido } = req.body;
        connection.query("INSERT INTO estudiante SET?", {
            idestudiante,
            nombre,
            apellido,
            edad

        }, (err, result) => {
            res.redirect("/");

        });





    });
}

module.exports = router;