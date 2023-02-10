const { Router } = require('express');
const jwt = require('jsonwebtoken');
const revistaModel = require('../models/revistaModel');
 

const router = Router()

// ++++++++++++++++++++++   GET TODO EL ARREGLO ++++++++++++++++++++++++++++++++++++
                 //verifyToken
router.get('/' ,  async (req, res)=>{ 
    const revista = await revistaModel.find({});
        res.json(revista);
});

 // ++++++++++++++++++++++   POST NUEVO REVISTA  ++++++++++++++++++++++++++++++++++++

 router.post('/' ,   async (req, res)=>{ 
    const revista = new revistaModel({
      

        estado:req.body.estado,
        fecha:req.body.fecha,
        fechaMod:req.body.fechaMod,
        marginLeft:req.body.marginLeft,        
        titulo:req.body.titulo,
        subtitulo:req.body.subtitulo,
        imgPortada:req.body.imgPortada,
        imgPromo:req.body.imgPromo,
        editorial:req.body.editorial,
        mes:req.body.mes,
        anio:req.body.anio,
        numero:req.body.numero,
        vistas:req.body.vistas,


  art1:req.body.art1,
  art2:req.body.art2,
  art3:req.body.art3,
  art4:req.body.art4,
  art5:req.body.art5,
  art6:req.body.art6,
  art7:req.body.art7,
  art8:req.body.art8,
  art7:req.body.art7,
  art8:req.body.art8,
  art9:req.body.art9,
  art10:req.body.art10,
  art11:req.body.art11,
  art12:req.body.art12,

  resultadoID:req.body.resultadoID,
  resultadoID2:req.body.resultadoID2,
  resultadoID3:req.body.resultadoID3,
  resultadoID4:req.body.resultadoID4,
  resultadoID5:req.body.resultadoID5,
  resultadoID6:req.body.resultadoID6,
  resultadoID7:req.body.resultadoID7,
  resultadoID8:req.body.resultadoID8,
  resultadoID9:req.body.resultadoID9,
  resultadoID10:req.body.resultadoID10,
  resultadoID11:req.body.resultadoID11,
  resultadoID12:req.body.resultadoID12,

  resultadoCategoria:req.body.resultadoCategoria,
  resultadoCategoria2:req.body.resultadoCategoria2,
  resultadoCategoria3:req.body.resultadoCategoria3,
  resultadoCategoria4:req.body.resultadoCategoria4,
  resultadoCategoria5:req.body.resultadoCategoria5,
  resultadoCategoria6:req.body.resultadoCategoria6,
  resultadoCategoria7:req.body.resultadoCategoria7,
  resultadoCategoria8:req.body.resultadoCategoria8,
  resultadoCategoria7:req.body.resultadoCategoria7,
  resultadoCategoria8:req.body.resultadoCategoria9,
  resultadoCategoria9:req.body.resultadoCategoria10,
  resultadoCategoria10:req.body.resultadoCategoria11,
  resultadoCategoria11:req.body.resultadoCategoria12,
  resultadoCategoria12:req.body.resultadoCategoria12,


  resultadoImagen:req.body.resultadoImagen,
  resultadoImagen2:req.body.resultadoImagen2,
  resultadoImagen3:req.body.resultadoImagen3,
  resultadoImagen4:req.body.resultadoImagen4,
  resultadoImagen5:req.body.resultadoImagen5,
  resultadoImagen6:req.body.resultadoImagen6,
  resultadoImagen7:req.body.resultadoImagen7,
  resultadoImagen8:req.body.resultadoImagen8,
  resultadoImagen7:req.body.resultadoImagen7,
  resultadoImagen8:req.body.resultadoImagen8,
  resultadoImagen9:req.body.resultadoImagen9,
  resultadoImagen10:req.body.resultadoImagen10,
  resultadoImagen11:req.body.resultadoImagen11,
  resultadoImagen12:req.body.resultadoImagen12,
   
  autor1:req.body.autor1,
  autor2:req.body.autor2,
  autor3:req.body.autor3,
  autor4:req.body.autor4,
  autor5:req.body.autor5,
  autor6:req.body.autor6,
  autor7:req.body.autor7,
  autor8:req.body.autor8,
  autor9:req.body.autor9,
  autor10:req.body.autor10,
  autor11:req.body.autor11,
  autor12:req.body.autor12,
        

    });
       await revista.save();
       res.json('Edicion revista creado!');

});


 // ++++++++++++++++++++++   GET ONEEEE  ++++++++++++++++++++++++++++++++++++
 
router.get('/:_id' , async(req,res) => { 

    try {
        const revista = await revistaModel.findById(req.params._id)    
        res.json(revista)
               
      } catch (err) {
       const revista = new revistaModel({titulo:'',imgPortada:'', _id:'nuevo'})

              res.json(revista)
      }

});



 // ++++++++++++++++++++++  MODIFY  ++++++++++++++++++++++++++++++++++++

 router.put('/:_id', async (req,res) => {
   console.log('llega')
    const { _id } = req.params;
    const revista = { 
        _id:req.body._id,
        estado:req.body.estado,
        fecha:req.body.fecha,
        fechaMod:req.body.fechaMod,
        marginLeft:req.body.marginLeft,        
        titulo:req.body.titulo,
        subtitulo:req.body.subtitulo,
        imgPortada:req.body.imgPortada,
        imgPromo:req.body.imgPromo,
        editorial:req.body.editorial,
        mes:req.body.mes,
        anio:req.body.anio,
        numero:req.body.numero,
        vistas:req.body.vistas,


  art1:req.body.art1,
  art2:req.body.art2,
  art3:req.body.art3,
  art4:req.body.art4,
  art5:req.body.art5,
  art6:req.body.art6,
  art7:req.body.art7,
  art8:req.body.art8,
  art9:req.body.art9,
  art10:req.body.art10,
  art11:req.body.art11,
  art12:req.body.art12,

  resultadoID:req.body.resultadoID,
  resultadoID2:req.body.resultadoID2,
  resultadoID3:req.body.resultadoID3,
  resultadoID4:req.body.resultadoID4,
  resultadoID5:req.body.resultadoID5,
  resultadoID6:req.body.resultadoID6,
  resultadoID7:req.body.resultadoID7,
  resultadoID8:req.body.resultadoID8,
  resultadoID7:req.body.resultadoID7,
  resultadoID8:req.body.resultadoID8,
  resultadoID9:req.body.resultadoID9,
  resultadoID10:req.body.resultadoID10,
  resultadoID11:req.body.resultadoID11,
  resultadoID12:req.body.resultadoID12,

  resultadoCategoria:req.body.resultadoCategoria,
  resultadoCategoria2:req.body.resultadoCategoria2,
  resultadoCategoria3:req.body.resultadoCategoria3,
  resultadoCategoria4:req.body.resultadoCategoria4,
  resultadoCategoria5:req.body.resultadoCategoria5,
  resultadoCategoria6:req.body.resultadoCategoria6,
  resultadoCategoria7:req.body.resultadoCategoria7,
  resultadoCategoria8:req.body.resultadoCategoria9,
  resultadoCategoria9:req.body.resultadoCategoria10,
  resultadoCategoria10:req.body.resultadoCategoria11,
  resultadoCategoria11:req.body.resultadoCategoria12,
  resultadoCategoria12:req.body.resultadoCategoria12,

  resultadoImagen:req.body.resultadoImagen,
  resultadoImagen2:req.body.resultadoImagen2,
  resultadoImagen3:req.body.resultadoImagen3,
  resultadoImagen4:req.body.resultadoImagen4,
  resultadoImagen5:req.body.resultadoImagen5,
  resultadoImagen6:req.body.resultadoImagen6,
  resultadoImagen7:req.body.resultadoImagen7,
  resultadoImagen8:req.body.resultadoImagen8,
  resultadoImagen9:req.body.resultadoImagen9,
  resultadoImagen10:req.body.resultadoImagen10,
  resultadoImagen11:req.body.resultadoImagen11,
  resultadoImagen12:req.body.resultadoImagen12,

  autor1:req.body.autor1,
  autor2:req.body.autor2,
  autor3:req.body.autor3,
  autor4:req.body.autor4,
  autor5:req.body.autor5,
  autor6:req.body.autor6,
  autor7:req.body.autor7,
  autor8:req.body.autor8
        
     
              };
    
       await revistaModel.findByIdAndUpdate(_id, {$set: revista}, {new: true});
       res.json('Articulo modificado!');

});


router.delete('/:_id', async (req,res) => {
  const { _id } = req.params;
     await revistaModel.findByIdAndDelete(_id);
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
