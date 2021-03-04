const express = require ("express")
const mongoose =require("mongoose")

const app = express()
//Parse Data :
app.use(express.json());

const connectDB=require("./config/connectDB")



//run server: 
const port = process.env.PORT || 8000;

app.listen (port, (err) => {
    err
      ? console.log(err)
      : console.log(`the server is running on http://localhost:${port}`);
  });

//connect db :
connectDB();

//routes 

app.use("/api/users",require("./routes/user"))



