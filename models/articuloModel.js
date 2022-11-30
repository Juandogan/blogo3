
const { Schema, model } = require('mongoose');


const articuloSchema = new Schema({
    
  
  
  
  
  contadorComentarios:{type: String, required : false},
  comentarios:{type: String, required : false},
  correos:{type: String, required : false},
  id:{type: Number, required : false},
  marginLeft:{type: Number, required : false},
  fecha:{type: String, required : false},
  fechaMod:{type: String, required : false},
  art1:{type: String, required : false},
  art2:{type: String, required : false},
  art3:{type: String, required : false},
  art4:{type: String, required : false},
  art5:{type: String, required : false},
  art6:{type: String, required : false},
  posicion:{type: Number, required : false},  
  titulo:{type: String, required : false},
  tituloAlt:{type: String, required : false},
  subtitulo:{type: String, required : false},
  hash:{type: String, required : false},
  nota:{type: String, required : false},
  imagen1:{type: String, required : false},
  imagen2:{type: String, required : false},
  imagen3:{type: String, required : false},
  fotografia:{type: String, required : false},
  edicionFotografia:{type: String, required : false},
  autor:{type: String, required : false},
  categoria:{type: String, required : false},
  likes:{type: Number, required : false},
  vistas:{type: Number, required : false},
  tituloImagen:{type: String, required : false},
  resultadoID:{type: String, required : false},
  resultadoID2:{type: String, required : false},
  resultadoID3:{type: String, required : false},
  resultadoID4:{type: String, required : false},
  resultadoID5:{type: String, required : false},
  resultadoID6:{type: String, required : false},
  resultadoCategoria:{type: String, required : false},
  resultadoCategoria2:{type: String, required : false},
  resultadoCategoria3:{type: String, required : false},
  resultadoCategoria4:{type: String, required : false},
  resultadoCategoria5:{type: String, required : false},
  resultadoCategoria6:{type: String, required : false},
  resultadoImagen:{type: String, required : false},
  resultadoImagen2:{type: String, required : false},
  resultadoImagen3:{type: String, required : false},
  resultadoImagen4:{type: String, required : false},
  resultadoImagen5:{type: String, required : false},
  resultadoImagen6:{type: String, required : false},
})


module.exports =  model('articuloSchema', articuloSchema)


