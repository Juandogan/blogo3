const { Schema, model } = require('mongoose');

const PortalSchema = new Schema({
    id:String,
    titulo: String,
    subtitulo: String, 
    altura:String,       
    provincia:String,
    imagen:String,
    pais:String,
    latitud:String,
    longitud:String,
    nota:String,
    googleMaps:String,
    relacionados:String, 
    videos:String,
    imagenes:String,
    comentarios:String,
    contadorComentarios:String,
    correos:String,
    vistas:Number



    
},
{timestamps: true}
)


module.exports =  model('Portal', PortalSchema)