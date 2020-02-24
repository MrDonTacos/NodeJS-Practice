const fs = require('fs')
let listarTabla = (base, limite=10) => {
    
        for (let i = 0; i <= limite; i++) {
           console.log(`${base} x ${i} = ${base*i}`);
        }
    
}
let data = [];

let crearArchivo = async (base, limite=10) => {
    return new Promise ((resolve, reject) => {

        let data = [];

        for (let i = 0; i <= limite; i++) {
            data[i] = `${base} * ${i} = ${base*i} \n`; 
         }

         fs.writeFile(`Tablas/tabla_del_${base}.txt`, data, (err) => {
        if(!Number(base)){
            reject('No es un número', err);
            return;
        }
        else
        resolve(`Tabla_del_${base}.txt`);
    })
         
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}