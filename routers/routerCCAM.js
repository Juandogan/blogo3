const { Router } = require('express');
const jwt = require('jsonwebtoken');
const articuloModel = require('../models/articuloModel');
 

const router = Router()

// ++++++++++++++++++++++   GET TODO EL ARREGLO ++++++++++++++++++++++++++++++++++++
                 //verifyToken
router.get('/' ,  async (req, res)=>{ 
    const articulo = await articuloModel.find({},{_id:1, titulo:1, imagen1:1, posicion:1, categoria:1, vistas:1, fecha:1, fechaMod:1, 
        correos:1, subtitulo:1, comentarios:1, contadorComentarios:1
        });
        res.json(articulo);
});

 // ++++++++++++++++++++++   POST NUEVO ARTICULO  ++++++++++++++++++++++++++++++++++++

 router.post('/' ,   async (req, res)=>{ 
    const articulos = new articuloModel({
      
  contadorComentarios:req.body.contadorComentarios,
  comentarios:req.body.comentarios, 
  correos:req.body.correos,
  id:req.body.id,
  marginLeft:req.body.marginLeft,

  fecha:req.body.fecha,
  fechaMod:req.body.fechaMod,

  art1:req.body.art1,
  art2:req.body.art2,
  art3:req.body.art3,
  art4:req.body.art4,
  art5:req.body.art5,
  art6:req.body.art6,
  posicion:req.body.posicion,
  
  
  titulo:req.body.titulo,
  tituloAlt:req.body.tituloAlt,
  subtitulo:req.body.subtitulo,
  hash:req.body.hash,
  nota:req.body.nota,
  imagen1:req.body.imagen1,
  imagen2:req.body.imagen2,
  imagen3:req.body.imagen3,
  fotografia:req.body.fotografia,
  edicionFotografia:req.body.edicionFotografia,
  autor:req.body.autor,

  categoria:req.body.categoria,
  likes:req.body.likes,
  vistas:req.body.vistas,
  tituloImagen:req.body.tituloImagen,
  
  resultadoID:req.body.resultadoID,
  resultadoID2:req.body.resultadoID2,
  resultadoID3:req.body.resultadoID3,
  resultadoID4:req.body.resultadoID4,
  resultadoID5:req.body.resultadoID5,
  resultadoID6:req.body.resultadoID6,



  resultadoCategoria:req.body.resultadoCategoria,
  resultadoCategoria2:req.body.resultadoCategoria2,
  resultadoCategoria3:req.body.resultadoCategoria3,
  resultadoCategoria4:req.body.resultadoCategoria4,
  resultadoCategoria5:req.body.resultadoCategoria5,
  resultadoCategoria6:req.body.resultadoCategoria6,


  resultadoImagen:req.body.resultadoImagen,
  resultadoImagen2:req.body.resultadoImagen2,
  resultadoImagen3:req.body.resultadoImagen3,
  resultadoImagen4:req.body.resultadoImagen4,
  resultadoImagen5:req.body.resultadoImagen5,
  resultadoImagen6:req.body.resultadoImagen6,
   
     
        

    });
       await articulos.save();
       res.json('Articulo creado!');

});


 // ++++++++++++++++++++++   GET ONEEEE  ++++++++++++++++++++++++++++++++++++
 
router.get('/:_id' , async(req,res) => { 

    try {
        const articulo = await articuloModel.findById(req.params._id)    
        res.json(articulo)
               
      } catch (err) {
        res.json('ID no encontrado..')
      }

});



 // ++++++++++++++++++++++  MODIFY  ++++++++++++++++++++++++++++++++++++

 router.put('/:_id', async (req,res) => {
    console.log("sasas")
    const { _id } = req.params;
    const articulo = { 
                contadorComentarios:req.body.contadorComentarios,
        comentarios:req.body.comentarios, 
        correos:req.body.correos,
        id:req.body.id,
        marginLeft:req.body.marginLeft,
      
        fecha:req.body.fecha,
        fechaMod:req.body.fechaMod,
      
        art1:req.body.art1,
        art2:req.body.art2,
        art3:req.body.art3,
        art4:req.body.art4,
        art5:req.body.art5,
        art6:req.body.art6,
        posicion:req.body.posicion,
        
        
        titulo:req.body.titulo,
        tituloAlt:req.body.tituloAlt,
        subtitulo:req.body.subtitulo,
        hash:req.body.hash,
        nota:req.body.nota,
        imagen1:req.body.imagen1,
        imagen2:req.body.imagen2,
        imagen3:req.body.imagen3,
        fotografia:req.body.fotografia,
        edicionFotografia:req.body.edicionFotografia,
        autor:req.body.autor,
      
        categoria:req.body.categoria,
        likes:req.body.likes,
        vistas:req.body.vistas,
        tituloImagen:req.body.tituloImagen,
        
        resultadoID:req.body.resultadoID,
        resultadoID2:req.body.resultadoID2,
        resultadoID3:req.body.resultadoID3,
        resultadoID4:req.body.resultadoID4,
        resultadoID5:req.body.resultadoID5,
        resultadoID6:req.body.resultadoID6,
      
      
      
        resultadoCategoria:req.body.resultadoCategoria,
        resultadoCategoria2:req.body.resultadoCategoria2,
        resultadoCategoria3:req.body.resultadoCategoria3,
        resultadoCategoria4:req.body.resultadoCategoria4,
        resultadoCategoria5:req.body.resultadoCategoria5,
        resultadoCategoria6:req.body.resultadoCategoria6,
      
      
        resultadoImagen:req.body.resultadoImagen,
        resultadoImagen2:req.body.resultadoImagen2,
        resultadoImagen3:req.body.resultadoImagen3,
        resultadoImagen4:req.body.resultadoImagen4,
        resultadoImagen5:req.body.resultadoImagen5,
        resultadoImagen6:req.body.resultadoImagen6,
              };
    
       await articuloModel.findByIdAndUpdate(_id, {$set: articulo}, {new: true});
       res.json('Articulo modificado!');

});


router.delete('/:_id', async (req,res) => {
  const { _id } = req.params;
    await articuloModel.findByIdAndDelete(_id);
      res.json("Eliminado!");
});





// router.post('/signup' , async (req, res)=>{ 

 
//  const { email, password } = req.body
//  const newUser = new User({ email, password })
//   await newUser.save() 

// const token = jwt.sign({_id: newUser._id}, 'secretKey' )
//  res.status(200).json({token})

// })

// router.post('/signin', async (req,res)=>{
// const {email, password} = req.body;
// const user = await User.findOne({email});
// if(!user) return res.status(400).send('No exite usuario');
// if(user.password  !== password) return res.status(401).send('Contraseña incorrecta');
// const token = jwt.sign({_id: user._id},'secretKey')
// console.log(token)
// return res.json(token)

// })
// router.get('tareas'){}; 


// router.get('public', (req,res)=>{
//     res.json([{
//         _id:'1' ,
//         name:'teste',
//         descripcion:'quepaso',
//         date:'Hoy es lunes'
    
//     }])

// });

// router.get('tareas'){};  ATENCION ACA EJEMPLO DE COMO VALIDAR PEDIR TOKEN EN UN GET , verifyToken,
// router.get('private', verifyToken, (req,res)=>{
//     res.json([{
//         _id:'1' ,
//         name:'teste',
//         descripcion:'quepaso',
//         date:'Hoy es lunes'
    
//     }])

// })
    


module.exports = router


function verifyToken(req, res, next){
    if(!req.headers.authorization) {
    return res.status(401).send('Sin autorizacion')
}
const token = req.headers.authorization.split(' ')[1]
        if (token === "null"){
            return res.status(401).send('Sin autorizacion')
        }

const payload = jwt.verify(token, 'secretKey')
            req.userID = payload._id
            next();

}
