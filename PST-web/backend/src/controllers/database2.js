const fs = require('fs');
const db = {};

let PST = {};
function init() {
    try {
        //Intenta cargar el archivo JSON
        const json_text_PST = fs.readFileSync('./src/pstDatabase.json', 'utf-8')
        PST = JSON.parse(json_text_PST) //Transforma un String a objeto JSON
    } catch (e) {
        //Si no existe, crea el objeto JSON y lo guarda en un archivo .json
        PST = {
            estudiantes: [{ nombre: "kevin", id: 202034784 },
            { nombre: "carla", id: 201987462 }],
            profesores: {
                teoria: { nombre: "Msig. Adriana Collaguazo", edad: 20 },
                practica: [
                  { nombre: "Ing. Christopher Vaccaro", edad: 27 },
                  { nombre: "Ing. Stephano León", edad: 27 }
                ]
            }
        }
        //Transforma un objeto JSON a String y lo guarda en un archivo
        fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
    }
    //se crean variables para acceder a ciertos atributos
    db.teoria = PST.profesores.teoria;
    db.practica = PST.profesores.practica;
    db.profesores = PST.profesores;
    db.estudiantes = PST.estudiantes;
}
function updateDB(){
    //actualiza el archivo JSON
    fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
}

db.init = init;
db.updateDB = updateDB;

module.exports = db;
