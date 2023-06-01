const fs = require('fs')
const colors = require('colors');


const crearArchivo = async (base, flag, multiplo) => {

    try { 
        const nombreArchivo = `./salida/tabla-${base}.txt`;
        
        let salida = '';
        for (let i = 1; i <= multiplo; i++) {
            salida += `${base} x ${i} = ${base*i} \n`
        }
        
        if( flag ){
            console.log(colors.green(`****** Tabla del ${base} ******`));
            console.log(salida);
        }
       
        fs.writeFileSync(nombreArchivo, salida)

        return nombreArchivo;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}