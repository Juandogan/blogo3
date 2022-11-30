const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://quepasa:UNdianuevo.12@cluster0.c96lb.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology :true
 })

.then(db => console.log("Mongo ok!"))
.catch(err => console.log(err));