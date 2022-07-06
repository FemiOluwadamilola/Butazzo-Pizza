const express = require('express');
const Reservation = require('../model/reservation');
const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).render('./client/homepage')
})

router.post('/booking', async (req,res) => {
  const {name,email,phone,date,time,message} = req.body;
  try{
  	const newReservation = new Reservation({
  		name,
  		email,
  		phone,
  		date,
  		time,
  		message
  	})

  	const Reserved = await newReservation.save();

  	console.log(Reserved); 
  }catch(err){
  	res.status(500).json({error_msg:err.message})
  }
})

module.exports = router;