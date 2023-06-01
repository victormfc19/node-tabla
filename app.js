const { log } = require('console');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))


