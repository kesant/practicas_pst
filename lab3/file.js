const fs = require('fs')

fs.writeFile('archivo.txt','Archivo Vacío',function(err){
    if (err) {
        console.log(err)
    } else {
        console.log('Archivo creado')
    }
})
console.log('Última línea')
