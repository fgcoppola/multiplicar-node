const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log('================='.red);
        console.log(`table de la ${base}`.green)
        console.log('================='.red)
        for (let i = 1; i <= limite; i++) {

            console.log(`${ base * i}\n `);
        }
    });
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El parametro pasado en la base no es un numero');
            return;
        }
        let data = '';
        if (!limite) {
            limite = 10;
        }

        for (let i = 1; i <= limite; i++) {

            data += `${ base * i}\n `;
        }


        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.yct`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}