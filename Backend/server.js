const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mySqlpool = require("./config/db");



dotenv.config();


const app = express();

// var corsOptions = {
//     origin:['https://localhost:4200','http://localhost:3000']
// }

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use(express.json())

app.use(express.urlencoded({extended:true}));


//testing api 

app.get('/',(req,res)=>{
    res.json({message :"Hello world from api"});
})


app.use('/api/v1/user',require('./routes/userRoutes'));


//Port 
const PORT = process.env.PORT

//conditional listen 
mySqlpool.query('SELECT 1').then(()=>{
    console.log("Mysql is connected")


 app.listen(PORT,()=>{
     console.log(`Port is Running on Port ${PORT}`);
})

})
.catch((error)=>{
    console.log(error);
})