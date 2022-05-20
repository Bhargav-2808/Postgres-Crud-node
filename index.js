import express from 'express';
import BodyParser from 'body-parser'
import cors from 'cors'
import {pool,cli} from './Database/database.js';
import route from './Routes/route.js';


const app =express();
const PORT = 5555;
app.use(BodyParser.json());
app.use(cors());
app.use(BodyParser.urlencoded({
    extended:true,
}))
app.use(express.json());


app.use("/",route);

cli.connect( ()=>{
    console.log("Database connected");
})
// pool.on("connect",()=>{
//     console.log("Database is connected");
// })

app.listen(PORT, ()=>{
    console.log("express is running! ");
} )
