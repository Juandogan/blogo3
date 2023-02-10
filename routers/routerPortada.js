const { Router } = require('express');
const jwt = require('jsonwebtoken');
const portadaModel = require('../models/portada');
const router = Router()


// ++++++++++++++++++++++   GET TODO EL ARREGLO ++++++++++++++++++++++++++++++++++++
                 //verifyToken
router.get('/' ,  async (req, res)=>{ 
    const portal = await portadaModel.find();
        res.json(portal);
        console.log('test')
});

 // ++++++++++++++++++++++   POST NUEVO ARTICULO  ++++++++++++++++++++++++++++++++++++

 router.post('/' ,   async (req, res)=>{ 
    const portal = new portadaModel({
 
    // medio:req.body.medio,
    // link1:req.body.link1,
   
    categoria1: req.body.categoria1,
    titulo1: req.body.titulo1,
    subtitulo1: req.body.subtitulo1, 
    imagen1: req.body.imagen1,
    link:req.body.link,

    categoria2: req.body.categoria2,
    titulo2: req.body.titulo2,
    subtitulo2: req.body.subtitulo2, 
    imagen2: req.body.imagen2,

    categoria3: req.body.categoria3,
    titulo3: req.body.titulo3,
    subtitulo3: req.body.subtitulo3, 
    imagen3: req.body.imagen3,

    categoria4: req.body.categoria4,
    titulo4: req.body.titulo4,
    subtitulo4: req.body.subtitulo4, 
    imagen4: req.body.imagen4,

    categoria5: req.body.categoria5,
    titulo5: req.body.titulo5,
    subtitulo5: req.body.subtitulo5, 
    imagen5: req.body.imagen5,

    categoria6: req.body.categoria6,
    titulo6: req.body.titulo6,
    subtitulo6: req.body.subtitulo6, 
    imagen6: req.body.imagen6,

    categoria7: req.body.categoria7,
    titulo7: req.body.titulo7,
    subtitulo7: req.body.subtitulo7, 
    imagen7: req.body.imagen7,

    categoria8: req.body.categoria8,
    titulo8: req.body.titulo8,
    subtitulo8: req.body.subtitulo8, 
    imagen8: req.body.imagen8,

    categoria9: req.body.categoria9,
    titulo9: req.body.titulo9,
    subtitulo9: req.body.subtitulo9, 
    imagen9: req.body.imagen9,

    categoria10: req.body.categoria10,
    titulo10: req.body.titulo10,
    subtitulo10: req.body.subtitulo10, 
    imagen10: req.body.imagen10,

    categoria11: req.body.categoria11,
    titulo11: req.body.titulo11,
    subtitulo11: req.body.subtitulo11, 
    imagen11: req.body.imagen11,

    categoria12: req.body.categoria12,
    titulo12: req.body.titulo12,
    subtitulo12: req.body.subtitulo12, 
    imagen12: req.body.imagen12,

    categoria13: req.body.categoria13,
    titulo13: req.body.titulo13,
    subtitulo13: req.body.subtitulo13, 
    imagen13: req.body.imagen13,

    categoria14: req.body.categoria14,
    titulo14: req.body.titulo14,
    subtitulo14: req.body.subtitulo14, 
    imagen14: req.body.imagen14,

    categoria15: req.body.categoria15,
    titulo15: req.body.titulo15,
    subtitulo15: req.body.subtitulo15, 
    imagen15: req.body.imagen15,

             

    });
       await portal.save();
       res.json('Anunciante creado!');

});


 // ++++++++++++++++++++++   GET ONEEEE  ++++++++++++++++++++++++++++++++++++
 
router.get('/:_id' , async(req,res) => { 

    try {
        const portal = await portadaModel.findById(req.params._id)    
        res.json(portal)
               
      } catch (err) {
        res.json('ID no encontrado..')
      }

});



 // ++++++++++++++++++++++  MODIFY  ++++++++++++++++++++++++++++++++++++

 router.put('/:_id', async (req,res) => {
    console.log("sasas")
    const { _id } = req.params;
    const portal = { 
      _id:req.body._id,      
      categoria1: req.body.categoria1,
      titulo1: req.body.titulo1,
      subtitulo1: req.body.subtitulo1, 
      imagen1: req.body.imagen1,
      id:req.body.id,
      
      
      categoria2: req.body.categoria2,
      titulo2: req.body.titulo2,
      subtitulo2: req.body.subtitulo2, 
      imagen2: req.body.imagen2,
  
      categoria3: req.body.categoria3,
      titulo3: req.body.titulo3,
      subtitulo3: req.body.subtitulo3, 
      imagen3: req.body.imagen3,
  
      categoria4: req.body.categoria4,
      titulo4: req.body.titulo4,
      subtitulo4: req.body.subtitulo4, 
      imagen4: req.body.imagen4,
  
      categoria5: req.body.categoria5,
      titulo5: req.body.titulo5,
      subtitulo5: req.body.subtitulo5, 
      imagen5: req.body.imagen5,
  
      categoria6: req.body.categoria6,
      titulo6: req.body.titulo6,
      subtitulo6: req.body.subtitulo6, 
      imagen6: req.body.imagen6,
  
      categoria7: req.body.categoria7,
      titulo7: req.body.titulo7,
      subtitulo7: req.body.subtitulo7, 
      imagen7: req.body.imagen7,
  
      categoria8: req.body.categoria8,
      titulo8: req.body.titulo8,
      subtitulo8: req.body.subtitulo8, 
      imagen8: req.body.imagen8,
  
      categoria9: req.body.categoria9,
      titulo9: req.body.titulo9,
      subtitulo9: req.body.subtitulo9, 
      imagen9: req.body.imagen9,
  
      categoria10: req.body.categoria10,
      titulo10: req.body.titulo10,
      subtitulo10: req.body.subtitulo10, 
      imagen10: req.body.imagen10,
  
      categoria11: req.body.categoria11,
      titulo11: req.body.titulo11,
      subtitulo11: req.body.subtitulo11, 
      imagen11: req.body.imagen11,
  
      categoria12: req.body.categoria12,
      titulo12: req.body.titulo12,
      subtitulo12: req.body.subtitulo12, 
      imagen12: req.body.imagen12,
  
      categoria13: req.body.categoria13,
      titulo13: req.body.titulo13,
      subtitulo13: req.body.subtitulo13, 
      imagen13: req.body.imagen13,
  
      categoria14: req.body.categoria14,
      titulo14: req.body.titulo14,
      subtitulo14: req.body.subtitulo14, 
      imagen14: req.body.imagen14,
  
      categoria15: req.body.categoria15,
      titulo15: req.body.titulo15,
      subtitulo15: req.body.subtitulo15, 
      imagen15: req.body.imagen15,
  


              };
    
       await portadaModel.findByIdAndUpdate(_id, {$set: portal}, {new: true});
       res.json('Articulo modificado!');

});


router.delete('/:_id', async (req,res) => {
  const { _id } = req.params;
    await portadaModel.findByIdAndDelete(_id);
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
