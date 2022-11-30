const { Schema, model } = require('mongoose');

const anuncianteSchema = new Schema({
    
    medio: String,

    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    img6: String,
    img7: String,
    img8: String,
    img9: String,
    img10: String,

    img11: String,
    img12: String,
    img13: String,
    img14: String,
    img15: String,
    img16: String,
    img17: String,
    img18: String,
    img19: String,
    img20: String,

    link1: String,
    link2: String,
    link3: String,
    link4: String,
    link5: String,
    link6: String,
    link7: String,
    link8: String,
    link9: String,
    link10: String,

    link11: String,
    link12: String,
    link13: String,
    link14: String,
    link15: String,
    link16: String,
    link17: String,
    link18: String,
    link19: String,
    link20: String,
    contador1: Number,
    contador2: Number,
    contador3: Number,
    contador4: Number,
    contador5: Number,
    contador6: Number,
    contador7: Number,
    contador8: Number,
    contador9: Number,
    contador10: Number,
    contador11: Number,
    contador12: Number,
    contador13: Number,
    contador14: Number,
    contador15: Number,
    contador16: Number,
    contador17: Number,
    contador18: Number,
    contador19: Number,
    contador20: Number,


    
},
{timestamps: true}
)


module.exports =  model('Anunciante', anuncianteSchema)