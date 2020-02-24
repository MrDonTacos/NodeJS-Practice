const {crearArchivo, listarTabla} = require('./Multiplicacion/Multiplicacion')
const {argv} = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
    crearArchivo(argv.base, argv.limite).then((result) => {
        console.log(`${result} fue creado con exito hasta el limite ${argv.limite}`.yellow);
            }).catch((err) => {
        console.log(`${err} fue imposible de crear el archivo `);
            });
            break;

            default: console.log('No existe el comando');
         
}

// let argv2 = process.argv;
// console.log(argv2);
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];




