import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors';
import clientsRouter from './routes/clients/clientRoutes';
import productsRouter from './routes/products/productRoute';
import commentsRouter from './routes/comments/commentsRoute';
import todoRouter from './routes/todo/todoRoutes';
import Purchase from "./routes/purchase/purchaseRouter";

const app = express()
const port = 3000;

app.use(cors());
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
app.use("/api/products", productsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/purchase", Purchase);
app.use("/api/todo", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})