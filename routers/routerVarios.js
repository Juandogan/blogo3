const { Router } = require('express');
const jwt = require('jsonwebtoken')
const Varios = require('../models/variosModel')
const router = Router()



router.get('/' , async(req, res)=> {

const varios = await Varios.find();
    res.json(varios);

});

 
router.get('/:_id' , async(req,res) => { 
    console.log(req.params._id)
    try {
        const varios = await Varios.findById(req.params._id)    
        
        res.json(varios)
               
      } catch (err) {
        res.json('ID no encontrado..')
      }

});

    

router.delete('/:_id', async (req,res) => {
    const { _id } = req.params;
      await Varios.findByIdAndDelete(_id);
        res.json("Eliminado!");
  });



router.post('/crear', async (req,res) => {
    console.log('categoria1')
    const varios = new Varios({
        categoria1:req.body.categoria1
        
              });
              
       await varios.save() ;
       res.json('DB Creado!');

});
    



router.put('/:_id', async (req,res) => {
    const { _id } = req.params;
    const varios = { 
                categoria1:req.body.categoria1,
                categoria2:req.body.categoria2,
                categoria3:req.body.categoria3,
                categoria4:req.body.categoria4,
                categoria5:req.body.categoria5,
                categoria6:req.body.categoria6,
                categoria7:req.body.categoria7,
                categoria8:req.body.categoria8,
                categoria9:req.body.categoria9,
                

              };
    
       await Varios.findByIdAndUpdate(_id, {$set: varios}, {new: true});
       res.json('DB modificado!');

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
