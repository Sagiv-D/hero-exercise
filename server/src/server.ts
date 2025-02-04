import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors';
import clientsRouter from './routes/clients/clientRoutes';
const app = express()
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5176',
  credentials: true,
}));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

//DB
const dbUrl = process.env.DB_URL;
const database = process.env.DATABASE;

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
app.use("/api/clients", clientsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})