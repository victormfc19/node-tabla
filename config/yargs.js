const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'define el limite del multiplo'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un numero'
                    }

                    return true;
                }) 
                .argv;



module.exports = argv;