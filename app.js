//requires
//const fs = require('express');
//const fs = require('./miArchivo');
// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(argv.limite);
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo }`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}