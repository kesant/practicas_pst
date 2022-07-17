const db = require("./database.js");
const estControl = {};

estControl.getEstudiantes = (req,res)=>{
    db.query("Select * FROM estudiantes", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

estControl.getEstudiante = (req,res)=>{
    if(isNaN(req.params.id)){
        res.status(400).send("No es un id numérico");
        return;
    }
    db.query("SELECT * FROM estudiantes WHERE id="+req.params.id, 
    //db.query("SELECT * FROM estudiantes WHERE apellido='"+req.params.apellido+"'",
    (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}


estControl.postEstudiante = (req,res)=>{
    const {id,nombre,apellido} = req.body;
    if(!nombre || !apellido){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    let SQLbody = {};
    if(!id) SQLbody = {nombre,apellido};
    else    SQLbody = {id,nombre,apellido};
    
    db.query("INSERT INTO estudiantes SET ?", [SQLbody],
    (err,result)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send('Estudiante insertado con id: '+result.insertId);
    });
}


estControl.putEstudiante = (req,res)=>res.json({mensaje: "Estudiante actualizado"});
estControl.deleteEstudiante = (req,res)=>{
    const index = db.estudiantes.findIndex(
        (est)=>est.id == req.params.id
    );
    if(index < 0){
        res.status(400).send("Id de estudiante no encontrado");
        return;
    }
    db.estudiantes.splice(index,1);
    db.updateDB();
    res.send('Estudiante eliminado');
}


module.exports = estControl;