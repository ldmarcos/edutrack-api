import express from "express" 
import cors from 'cors'
import connectInDataBase from "./config/dbConnection.js"
import mongoose from "mongoose";
import usuarioRoute from './routes/usuarioRoutes.js'
const app = express();
app.use(cors())
app.use(express.json());
app.use('/usuarios', usuarioRoute)

app.get('/', (req, res)=>{
    res.status(200).send('API EDUTRACK')
})

await connectInDataBase();
mongoose.connection.on("open", ()=>{
    console.log('Conexao com o banco de dados feita com sucesso')
})

export default app;