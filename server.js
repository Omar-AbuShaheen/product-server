import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/products.js'; 

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json()); 

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
  res.send("Welcome to Omar's first API server!!!");
});


app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
