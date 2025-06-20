import express from 'express'
import cors from 'cors'


const app = express();

var corsOptions = {
    origin:'https://localhost:3000'
}

app.use(cors(corsOptions));

app.use(express.json())

app.use(express.urlencoded({extended:true}));

//testing api 

app.get('/',(req,res)=>{
    res.json({message :"Hello world from api"});
})

//Port 

const PORT = process.env.PORT||3000


//server
app.listen(PORT,()=>{
     console.log(`Port is Running on Port ${PORT}`);
})