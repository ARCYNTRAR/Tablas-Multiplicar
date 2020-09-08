const argv   = require('./config/yargs').argv;
const colors = require('colors'); 
const colores = require('colors/safe');

const { crearArchivo, multiplicarBaseLimite } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        multiplicarBaseLimite(argv.base, argv.limite); 
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then( archivo => {
            console.log(`Archivo creado: ${ colores.green(archivo) }`)
        }).catch(console.log);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}





