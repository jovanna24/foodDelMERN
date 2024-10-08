import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app config 
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json()) // parse json
app.use(cors()) // allow cross-origin resource sharing

// db connection 
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

// app.get("/", (req, res) => {
//     res.send("API Working!")
// })

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.use(express.static(path.join(__dirname, '../admin/dist')));
  
    app.get('/admin', (req, res) =>{
      res.sendFile(path.join(__dirname, '../admin/dist/index.html'));
    });

    app.get('*', (req, res) =>{
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });

  }

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`) 
})


