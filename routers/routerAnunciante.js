const { Router } = require('express');
const jwt = require('jsonwebtoken');
const anuncianteModel = require('../models/anuncianteModel');
 

const router = Router()

// ++++++++++++++++++++++   GET TODO EL ARREGLO ++++++++++++++++++++++++++++++++++++
                 //verifyToken
router.get('/' ,  async (req, res)=>{ 
    const anunciante = await anuncianteModel.find();
        res.json(anunciante);
});

 // ++++++++++++++++++++++   POST NUEVO ARTICULO  ++++++++++++++++++++++++++++++++++++

 router.post('/' ,   async (req, res)=>{ 
    const anunciante = new anuncianteModel({

    medio:req.body.medio,
    link1:req.body.link1,
    link2:req.body.link2,
    link3:req.body.link3,
    link4:req.body.link4,
    link5:req.body.link5,
    link6:req.body.link6,
    link7:req.body.link7,
    link8:req.body.link8,
    link9:req.body.link9,
    link10:req.body.link10,

    link11:req.body.link11,
    link12:req.body.link12,
    link13:req.body.link13,
    link14:req.body.link14,
    link15:req.body.link15,
    link16:req.body.link16,
    link17:req.body.link17,
    link18:req.body.link18,
    link19:req.body.link19,
    link20:req.body.link20,

    
    
    link21:req.body.link21,
    link22:req.body.link22,
    link23:req.body.link23,
    link24:req.body.link24,
    link25:req.body.link25,
    link26:req.body.link26,
    link27:req.body.link27,
    link28:req.body.link28,
    link29:req.body.link29,
    link30:req.body.link30,


    img1:req.body.img1,
    img2:req.body.img2,
    img3:req.body.img3,
    img4:req.body.img4,
    img5:req.body.img5,
    img6:req.body.img6,
    img7:req.body.img7,
    img8:req.body.img8,
    img9:req.body.img9,

    img10:req.body.img10,
    img11:req.body.img11,
    img12:req.body.img12,
    img13:req.body.img13,
    img14:req.body.img14,
    img15:req.body.img15,
    img16:req.body.img16,
    img17:req.body.img17,
    img18:req.body.img18,
    img19:req.body.img19,
    img20:req.body.img20,
    
    img21:req.body.img21,
    img22:req.body.img22,
    img23:req.body.img23,
    img24:req.body.img24,
    img25:req.body.img25,
    img26:req.body.img26,
    img27:req.body.img27,
    img28:req.body.img28,
    img29:req.body.img29,
    img30:req.body.img30,

 

    contador1: req.body.contador1,
    contador2: req.body.contador2,
    contador3: req.body.contador3,
    contador4: req.body.contador4,
    contador5: req.body.contador5,
    contador6: req.body.contador6,
    contador7: req.body.contador7,
    contador8: req.body.contador8,
    contador9: req.body.contador9,

    contador10: req.body.contador10,
    contador11: req.body.contador11,
    contador12: req.body.contador12,
    contador13: req.body.contador13,
    contador14: req.body.contador14,
    contador15: req.body.contador15,
    contador16: req.body.contador16,
    contador17: req.body.contador17,
    contador18: req.body.contador18,
    contador19: req.body.contador19,
    contador20: req.body.contador20,
    
    contador21: req.body.contador21,
    contador22: req.body.contador22,
    contador23: req.body.contador23,
    contador24: req.body.contador24,
    contador25: req.body.contador25,
    contador26: req.body.contador26,
    contador27: req.body.contador27,
    contador28: req.body.contador28,
    contador29: req.body.contador29,
    contador30: req.body.contador30,
             

    });
       await anunciante.save();
       res.json('Anunciante creado!');

});


 // ++++++++++++++++++++++   GET ONEEEE  ++++++++++++++++++++++++++++++++++++
 
router.get('/:_id' , async(req,res) => { 

    try {
        const anunciante = await anuncianteModel.findById(req.params._id)    
        res.json(anunciante)
               
      } catch (err) {
        res.json('ID no encontrado..')
      }

});



 // ++++++++++++++++++++++  MODIFY  ++++++++++++++++++++++++++++++++++++

 router.put('/:_id', async (req,res) => {
    console.log("sasas")
    const { _id } = req.params;
    const anunciante = { 
      _id:req.body._id,    
    medio:req.body.medio,
    link1:req.body.link1,
    link2:req.body.link2,
    link3:req.body.link3,
    link4:req.body.link4,
    link5:req.body.link5,
    link6:req.body.link6,
    link7:req.body.link7,
    link8:req.body.link8,
    link9:req.body.link9,
    link10:req.body.link10,

    link11:req.body.link11,
    link12:req.body.link12,
    link13:req.body.link13,
    link14:req.body.link14,
    link15:req.body.link15,
    link16:req.body.link16,
    link17:req.body.link17,
    link18:req.body.link18,
    link19:req.body.link19,
    link20:req.body.link20,

    
    link21:req.body.link21,
    link22:req.body.link22,
    link23:req.body.link23,
    link24:req.body.link24,
    link25:req.body.link25,
    link26:req.body.link26,
    link27:req.body.link27,
    link28:req.body.link28,
    link29:req.body.link29,
    link30:req.body.link30,

   

    img1:req.body.img1,
    img2:req.body.img2,
    img3:req.body.img3,
    img4:req.body.img4,
    img5:req.body.img5,
    img6:req.body.img6,
    img7:req.body.img7,
    img8:req.body.img8,
    img9:req.body.img9,
    img10:req.body.img10,

    img11:req.body.img11,
    img12:req.body.img12,
    img13:req.body.img13,
    img14:req.body.img14,
    img15:req.body.img15,
    img16:req.body.img16,
    img17:req.body.img17,
    img18:req.body.img18,
    img19:req.body.img19,
    img20:req.body.img20,

    img21:req.body.img21,
    img22:req.body.img22,
    img23:req.body.img23,
    img24:req.body.img24,
    img25:req.body.img25,
    img26:req.body.img26,
    img27:req.body.img27,
    img28:req.body.img28,
    img29:req.body.img29,
    img30:req.body.img30,

 

    
    contador1: req.body.contador1,
    contador2: req.body.contador2,
    contador3: req.body.contador3,
    contador4: req.body.contador4,
    contador5: req.body.contador5,
    contador6: req.body.contador6,
    contador7: req.body.contador7,
    contador8: req.body.contador8,
    contador9: req.body.contador9,

    contador10: req.body.contador10,
    contador11: req.body.contador11,
    contador12: req.body.contador12,
    contador13: req.body.contador13,
    contador14: req.body.contador14,
    contador15: req.body.contador15,
    contador16: req.body.contador16,
    contador17: req.body.contador17,
    contador18: req.body.contador18,
    contador19: req.body.contador19,
    contador20: req.body.contador20,

    contador21: req.body.contador21,
    contador22: req.body.contador22,
    contador23: req.body.contador23,
    contador24: req.body.contador24,
    contador25: req.body.contador25,
    contador26: req.body.contador26,
    contador27: req.body.contador27,
    contador28: req.body.contador28,
    contador29: req.body.contador29,
    contador30: req.body.contador30,
              };
    
       await anuncianteModel.findByIdAndUpdate(_id, {$set: anunciante}, {new: true});
       res.json('Articulo modificado!');

});


router.delete('/:_id', async (req,res) => {
  const { _id } = req.params;
    await anuncianteModel.findByIdAndDelete(_id);
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
