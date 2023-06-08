const pMod= require("../models/Model");
const mongoose=require('mongoose');
const fs=require('fs');
const dotenv = require('dotenv').config();
const Stripe = require('stripe');
/////////////////////////////////////////
//sign up
const singup=  async (req, res) => {
  console.log(req.body);
 const  mail = req.body;
 
  pMod.userSchema.findOne({ email: mail })
      .then(result => res.send({ message: "Email déjà enregistré", alert: false }))
      .catch(err => {
           pMod.userSchema(mail).save();
          res.send({ message: "Inscription avec succès", alert: true });
      })
}

//Login
const login=(req, res) => {
  console.log(req.body);
  const { email } = req.body;
  pMod.userSchema.findOne({ email: email })
        .then(result => {
                        const dataSend = {
                          _id: result._id,
                          firstName: result.firstName,
                          lastName: result.lastName,
                          email: result.email,
                          image: result.image,
                        };
                        console.log(dataSend);
                        res.send({
                          message: "Connexion avec succès",
                          alert: true,
                          data: dataSend,
                        });
                      }
              )
        .catch(err => res.send({
                            message: " Email n'est pas disponible, veuillez vous inscrire",
                            alert: false,
                           }))
};

//Upload product
const uploadproduct= async(req,res)=>{
  console.log(req.body);
  const data = await pMod.productSchema(req.body);
  const datasave = await data.save();
  console.log(datasave);
   res.send({message : "Chargement avec succès"});
};

//Get product
const getproduct= async(req,res)=>{
  const data = await  pMod.productSchema.find({})
  res.send(JSON.stringify(data))
};

//Get product
const getuser= async(req,res)=>{
  const data = await  pMod.userSchema.find({})
  res.send(JSON.stringify(data))
};

//Paiement getway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const checkoutpayement = async(req,res) => {
  console.log(req.body)
  
  try{
    const params = {
      submit_type : 'pay',
      mode : "payment",
      payment_method_types : ['card'],
      billing_address_collection : "auto",
      shipping_options : [{shipping_rate : "shr_1N6TwsJmzya4DzxyHZjdrR63"}],
                                            
      line_items : req.body.map((item)=>{
        return{
          price_data : {
            currency : "MAD",
            product_data : {
              name : item.name,
              // images : [item.image]
            },
            unit_amount : item.price * 100,
          },
          adjustable_quantity : {
            enabled : true,
            minimum : 1,
          },
          quantity : item.qty
        }
      }),

      success_url : `${process.env.FRONTEND_URL}/success`,
      cancel_url : `${process.env.FRONTEND_URL}/cancel`,

  }

  
  const session = await stripe.checkout.sessions.create(params)
  console.log(session)
  res.status(200).json(session.id)
  }
  catch(err){
        res.status(err.statusCode || 500).json(err.message)
  }
}

//Supprimer le produit
const deleteproduct= async(req,res) => {
  try{
      const {id}= req.params;
      const product = await pMod.productSchema.findByIdAndDelete(id);
      if(!product)
    {
      return res.status(404).json({message : `Pas de produit avec ID ${id}`});
    }
    res.status(200).json({message : `Suppression avec succès avec ID = ${id}`});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
 }

 //Supprimer l'utilisateur
const deleteuser= async(req,res) => {
  try{
      const {id}= req.params;
      const u = await pMod.userSchema.findByIdAndDelete(id);
      if(!u)
    {
      return res.status(404).json({message : `Pas de user avec ID ${id}`});
    }
    res.status(200).json({message : `Suppression avec succès avec ID = ${id}`});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
 }
// Mettre à jour le produit 

const updateproduct = async(req,res) => {
  try{
    const {id} =req.params;
    const product= await pMod.productSchema.findByIdAndUpdate(id,req.body);
    if(!product)
    {
      return res.status(404).json({message : `Pas de produit avec ID ${id}`});
    }
    const updateprd= await pMod.productSchema.findById(id);
    res.status(200).json({message : `Mise à jour avec succès avec ID = ${id}`});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
}

  module.exports={
                    singup,login,
                    uploadproduct,getproduct,
                    checkoutpayement,deleteproduct,
                    updateproduct,getuser,deleteuser
                };