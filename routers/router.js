const { Router } = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const router = Router()



router.get('/' , async(req, res)=> {

const usuarios = await User.find();
    res.json(usuarios);

});

 
router.get('/:_id' , async(req,res) => { 
    console.log(req.params._id)
    try {
        const user = await User.findById(req.params._id)    
        
        res.json(user)
               
      } catch (err) {
        res.json('ID no encontrado..')
      }

});

    

router.delete('/:_id', async (req,res) => {
    const { _id } = req.params;
      await User.findByIdAndDelete(_id);
        res.json("Eliminado!");
  });



router.post('/signup' , async (req, res)=>{ 
     //res.send('llega') // si mandas un send aca despuescuando quires andar no anda
 
 const { email, password, role } = req.body
 const newUser = new User({ email, password, role })
  await newUser.save() 

const token = jwt.sign({_id: newUser._id, role: newUser.role}, 'secretKey' )
 res.status(200).json({token})

})

router.post('/signin', async (req,res)=>{
const {email, password} = req.body;
const user = await User.findOne({email});
if(!user) return res.status(400).send('errorUsuario');
if(user.password !== password) return res.status(400).send('errorPassword');
const token = jwt.sign({_id: user._id},'secretKey')
console.log(token, user.email)
return res.json(token)

})
// router.get('tareas'){}; 
router.get('public', (req,res)=>{
    res.json([{
        _id:'1' ,
        name:'teste',
        descripcion:'quepaso',
        date:'Hoy es lunes'
    
    }])

});

// router.get('tareas'){}; 
router.get('private', verifyToken, (req,res)=>{
    res.json([{
        _id:'1' ,
        name:'teste',
        descripcion:'quepaso',
        date:'Hoy es lunes'
    
    }])

})


router.put('/:_id', async (req,res) => {
    const { _id } = req.params;
    const articulo = { 
                email:req.body.email,
                password:req.body.password, 
                role:req.body.role

              };
    
       await User.findByIdAndUpdate(_id, {$set: articulo}, {new: true});
       res.json('Articulo modificado!');

});
    


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
