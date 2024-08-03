import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// app config 
const app = express()
const port = 4000

// middleware
app.use(express.json()) // parse json
app.use(cors()) // allow cross-origin resource sharing

// db connection 
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("API Working!")
})

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`) 
})


