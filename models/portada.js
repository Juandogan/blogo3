const { Schema, model } = require('mongoose');

const PortadaSchema = new Schema({
    id:String,

    categoria1: String,
    titulo1: String,
    subtitulo1: String, 
    imagen1: String,
    link:String,

    categoria2: String,
    titulo2: String,
    subtitulo2: String, 
    imagen2: String,

    categoria3: String,
    titulo3: String,
    subtitulo3: String, 
    imagen3: String,

    categoria4: String,
    titulo4: String,
    subtitulo4: String, 
    imagen4: String,

    categoria5: String,
    titulo5: String,
    subtitulo5: String, 
    imagen5: String,

    categoria6: String,
    titulo6: String,
    subtitulo6: String, 
    imagen6: String,

    categoria7: String,
    titulo7: String,
    subtitulo7: String, 
    imagen7: String,

    categoria8: String,
    titulo8: String,
    subtitulo8: String, 
    imagen8: String,

    categoria9: String,
    titulo9: String,
    subtitulo9: String, 
    imagen9: String,

    categoria10: String,
    titulo10: String,
    subtitulo10: String, 
    imagen10: String,

    categoria11: String,
    titulo11: String,
    subtitulo11: String, 
    imagen11: String,

    categoria12: String,
    titulo12: String,
    subtitulo12: String, 
    imagen12: String,

    categoria13: String,
    titulo13: String,
    subtitulo13: String, 
    imagen13: String,

    categoria14: String,
    titulo14: String,
    subtitulo14: String, 
    imagen14: String,

    categoria15: String,
    titulo15: String,
    subtitulo15: String, 
    imagen15: String,


    
},
{timestamps: true}
)


module.exports =  model('Portada', PortadaSchema)