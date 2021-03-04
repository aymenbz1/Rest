const express = require("express")
const router = express.Router();
const bodyParser = require('body-parser')
const User = require ("../models/user")

router.post("/",(req,res)=>{
   const newUser = new User ({...req.body}) 
   newUser.save()
   .then((user)=>res.status(200).json(user))
   .catch((err)=>res.json(err))
})

router.get("/", (req, res) => {
    User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.send(err));
  });


  router.delete("/:_id", (req, res) => {
    let { _id } = req.params;
    User.findByIdAndDelete({ _id })
      .then(() => res.send("User has been deleted"))
      .catch((err) => res.send(err));
  });


  router.put("/:_id", (req, res) => {
    let { _id } = req.params;
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("User has been updated"))
      .catch((err) => res.send(err));
  });



module.exports = router;