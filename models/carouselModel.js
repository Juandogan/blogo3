
const { Schema, model } = require('mongoose');

const CarouselSchema = new Schema({
    

    id:Number,
    fecha: String,
    titulo:String,
    subtitulo:String,
    link:String,
    image:String,
    order:String,
    marginLeft:Number,  




},
{timestamps: true}
)


module.exports =  model('Carousel', CarouselSchema)


