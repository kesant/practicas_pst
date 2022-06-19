const db = require("./database.js");
const estControl = {};

estControl.getEstudiantes = (req,res)=>res.json(db.estudiantes);

module.exports = estControl;