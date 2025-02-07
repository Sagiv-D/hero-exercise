import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors';
import authRouter from './routes/auth/authRoutes';
import heroesRouter from './routes/heroes/heroesRoutes';

const app = express()
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

//DB
const dbUrl = "mongodb+srv://adhcsvi1:sagiv123@cluster0.qyh2p.mongodb.net";
const database = "LandingPage";

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
app.use("/api/auth", authRouter);
app.use("/api/heroes", heroesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})