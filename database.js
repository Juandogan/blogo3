const mongoose = require('mongoose')

// 'mongodb+srv://quepasa:UNdianuevo.12@cluster0.c96lb.mongodb.net/?retryWrites=true&w=majority' 'mongodb+srv://ccamAdmin:UNdianuevo.12@cluster0.tejbp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://ccamAdmin:UNdianuevo.12@ccam.qpdpzqh.mongodb.net/?retryWrites=true&w=majority',
//mongodb+srv://quepasa:UNdianuevo.12@cluster0.c96lb.mongodb.net/?retryWrites=true&w=majority
{

    useNewUrlParser: true,
    useUnifiedTopology :true
 })

.then(db => console.log("Mongo ok!"))
.catch(err => console.log(err));