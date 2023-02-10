//https
//const fs = require('fs');
//const https = require('https');

const multipart = require ('connect-multiparty');
const bodyParser = require ('body-parser');
const path = require ('path')

const express = require ('express');
const app = express();
const user = require('./models/userModel')
const cors = require('cors')
require('./database')


const multiPartMiddleware = multipart({
    uploadDir: './subidas'

});


app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));


app.use(express.json()); //ojo la posicion tiene que estar antes del app.use('/api', require('./router'))
app.use(cors()); //ojo la posicion tiene que estar antes del app.use('/api', require('./router'))

app.use('/',express.static('client', {redirect:false}));
app.use('/api', require('./routers/router'))
app.use('/ccam', require('./routers/routerCCAM'))
app.use('/revista', require('./routers/routerRevista'))
app.use('/anunciante', require('./routers/routerAnunciante'))
app.use('/carousel', require('./routers/routerCarousel'))  //nuevo
app.use('/guia', require('./routers/routerGuia'))  //nuevo
app.use('/upload', express.static(path.resolve('./subidas')))
app.use('/portada', require('./routers/routerPortada'))  //nuevo

app.post('/upload', multiPartMiddleware, (req,res)=>{
   
    var link = req.files['archivos'].path
      
// var url = 'http://localhost:3000/upload/'+ link.slice(8) 
var url = 'http://localhost:3000/upload/'+ link.slice(8) 

console.log({'url': url })
    res.json({'url':url });
    
    
});

app.post('/upload2', multiPartMiddleware, (req,res)=>{   
    var link = req.files['upload'].path      
    var url = 'http://66.97.44.139:3000/upload/'+ link.slice(8) 
    console.log({'url': url })
    res.json({'url':url });
    
    
});

app.get('*', function(req, res, next){res.sendFile(path.resolve('client/index.html'));
}) 


app.listen(3000)
console.log("servidor en puerto", 3000)


