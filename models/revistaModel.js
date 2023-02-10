
const { Schema, model } = require('mongoose');

const revistaSchema = new Schema({
    
    estado:Boolean,
    fecha:String,
    fechaMod:String,
    marginLeft:Number,        
    titulo:String,
    subtitulo:String,
    imgPortada:String,
    imgPromo:String,
    editorial:String,
    mes:String,
    anio:String,
    numero:String,
    vistas:Number,
   
    art1:String,
    art2:String,
    art3:String,
    art4:String,
    art5:String,
    art6:String,
    art7:String,
    art8:String,
    art9:String,
    art10:String,
    art11:String,
    art12:String,
    
    resultadoID:String,
    resultadoID2:String,
    resultadoID3:String,
    resultadoID4:String,
    resultadoID5:String,
    resultadoID6:String,
    resultadoID7:String,
    resultadoID8:String,
    resultadoID9:String,
    resultadoID10:String,
    resultadoID11:String,
    resultadoID12:String,

    resultadoCategoria:String,
    resultadoCategoria2:String,
    resultadoCategoria3:String,
    resultadoCategoria4:String,
    resultadoCategoria5:String,
    resultadoCategoria6:String,
    resultadoCategoria7:String,
    resultadoCategoria8:String,
    resultadoCategoria9:String,
    resultadoCategoria10:String,
    resultadoCategoria11:String,
    resultadoCategoria12:String,

    resultadoImagen:String,
    resultadoImagen2:String,
    resultadoImagen3:String,
    resultadoImagen4:String,
    resultadoImagen5:String,
    resultadoImagen6:String,
    resultadoImagen7:String,
    resultadoImagen8:String,
    resultadoImagen9:String,
    resultadoImagen10:String,
    resultadoImagen11:String,
    resultadoImagen12:String,

    autor1: String,
    autor2: String,
    autor3: String,
    autor4: String,
    autor5: String,
    autor6: String,
    autor7: String,
    autor8:String,
    autor9:String,
    autor10:String,
    autor11:String,
    autor12:String,
          

},
{timestamps: true}
)


module.exports =  model('Revista', revistaSchema)


