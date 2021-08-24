const dbConnection = require('../routes/config/databaseCon');
const connection = dbConnection();
let getEstudiante = async (req,res)=>{
await connection.query("select * from estudiante", (err,result)=>{
    if (result)
        res.send(result);
    else
        res.status(500).send(err);
    });
}
let addEstudiante = async (req,res)=>{
const {idestudiante,nombre,apellido } = req.body
await connection.query(`INSERT INTO estudiante VALUES (${idestudiante}, '${nombre}','${apellido}')`, (err,result)=>{
    if (result)
        res.send({idestudiante,nombre,apellido});
    else
        res.status(500).send(err);
    });
}

let getEstudiantebyId = async(req, res) => {
    connection.query("SELECT nombre, apellido FROM estudiante WHERE idestudiante = " + [req.params.id], function(err, result){
        if (err){
            console.log("No se pudo encontrar al estudiante con id " + [req.params.id]);
        } else{
            res.send(result);
        }
    })
}

module.exports = {
    getEstudiante,
    addEstudiante,
    getEstudiantebyId
}