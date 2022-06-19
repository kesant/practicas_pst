const http = require("http");
const colors = require("colors");
const fs = require('fs')
const handler = function(req,res){
    res.write("<h1>Hola mundo</h1>");
    res.end();
}
const server = http.createServer(handler);
const meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ]
  
var date = new Date()
var dia = date.getDate()
var mes = date.getMonth()
var ano = date.getFullYear()
var hora = date.getHours()
  
var fecha_formateada=(`${dia} de ${meses[mes]} del ${ano},hora ${hora} :${date.getMinutes}`)
fs.appendFile('archivo.txt', fecha_formateada ,function(err){
    if (err) {
        console.log(err)
    } else {
        console.log('Archivo creado')
    }
})
server.listen(8080,function(){

    console.log("Iniciar Página web con http://localhost:8080".cyan);
});
