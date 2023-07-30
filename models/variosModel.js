const { Schema, model } = require('mongoose');

const variosSchema = new Schema({
    categoria1: String,
    categoria2: String,
    categoria3: String,
    categoria4: String,
    categoria5: String,
    categoria6: String,
    categoria7: String,
    categoria8: String,
    categoria9: String,
    categoria10: String,
    categoria11: String,
    categoria12: String,
    categoria13: String,
    categoria14: String,
    categoria15: String,
    categoria16: String,
    categoria17: String,
    categoria18: String,
    categoria19: String,
    categoria20: String,
    categoria21: String,
    categoria22: String,
    categoria23: String,
    categoria24: String,
    categoria25: String,    
    categoria26: String,
    categoria27: String,
    categoria28: String,
    categoria29: String,
    categoria30: String,


    
},
{timestamps: true}
)


module.exports =  model('Varios', variosSchema)