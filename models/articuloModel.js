
const { Schema, model } = require('mongoose');


const articuloSchema = new Schema({ 
  
   
  indice:{type: String, required : false},
  contadorComentarios:{type: String, required : false},
  comentarios:{type: String, required : false},
  correos:{type: String, required : false},
  id:{type: Number, required : false},
  marginLeft:{type: Number, required : false},
  fecha:{type: String, required : false},
  fechaMod:{type: String, required : false},
  popup:{type: String, required : false},

  art1:{type: String, required : false},
  art2:{type: String, required : false},
  art3:{type: String, required : false},
  art4:{type: String, required : false},
  art5:{type: String, required : false},
  art6:{type: String, required : false},
  art7:{type: String, required : false},
  art8:{type: String, required : false},
  art9:{type: String, required : false},
  art10:{type: String, required : false},
  art11:{type: String, required : false},
  art12:{type: String, required : false},

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
  resultadoID7:{type: String, required : false},
  resultadoID8:{type: String, required : false},
  resultadoID9:{type: String, required : false},
  resultadoID10:{type: String, required : false},
  resultadoID11:{type: String, required : false},
  resultadoID12:{type: String, required : false},

  autor1:{type: String, required : false},
  autor2:{type: String, required : false},
  autor3:{type: String, required : false},
  autor4:{type: String, required : false},
  autor5:{type: String, required : false},
  autor6:{type: String, required : false},
  autor7:{type: String, required : false},
  autor8:{type: String, required : false},
  autor9:{type: String, required : false},
  autor10:{type: String, required : false},
  autor11:{type: String, required : false},
  autor12:{type: String, required : false},


  resultadoCategoria:{type: String, required : false},
  resultadoCategoria2:{type: String, required : false},
  resultadoCategoria3:{type: String, required : false},
  resultadoCategoria4:{type: String, required : false},
  resultadoCategoria5:{type: String, required : false},
  resultadoCategoria6:{type: String, required : false},
  resultadoCategoria7:{type: String, required : false},
  resultadoCategoria8:{type: String, required : false},
  resultadoCategoria9:{type: String, required : false},
  resultadoCategoria10:{type: String, required : false},
  resultadoCategoria11:{type: String, required : false},
  resultadoCategoria12:{type: String, required : false},

  resultadoImagen:{type: String, required : false},
  resultadoImagen2:{type: String, required : false},
  resultadoImagen3:{type: String, required : false},
  resultadoImagen4:{type: String, required : false},
  resultadoImagen5:{type: String, required : false},
  resultadoImagen6:{type: String, required : false},
  resultadoImagen7:{type: String, required : false},
  resultadoImagen8:{type: String, required : false},
  resultadoImagen9:{type: String, required : false},
  resultadoImagen10:{type: String, required : false},
  resultadoImagen11:{type: String, required : false},
  resultadoImagen12:{type: String, required : false},
})


module.exports =  model('articuloSchema', articuloSchema)


