const Demo = {}
function imprimir(nombre){
    console.log("Mi primer código en JS por ",nombre);
}


function imprimirSalto(nombre){
    console.log("Mi primer código en JS por %s\r\n",nombre);
}

Demo.print = imprimir
Demo.println = imprimirSalto

module.exports = Demo
