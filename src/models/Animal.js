const mongoose = require('mongoose');
const {Schema}=mongoose;

//para decirle a mongo como va a quedar el esquema de datos
const AnimalSchema=new Schema({ 
    especie:{type:String,required:true},
    cantidad:{type:Number,required:true},
    valor:{type:Number,required:true},
    fecha:{type:Date,required:true}
});

//para utilizar este modelo en otras partes
module.exports = mongoose.model('Animal',AnimalSchema);