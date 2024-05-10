import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { mapScrapper } from "./controller";
dotenv.config({
    path: './.env'
})

const PORT = 9000;

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.get("/api/v1/home/healthtest", (req, res) => {
    res.send('all good')
  })
app.post("/api/v1/home/datascrape", mapScrapper)

app.listen(() => {
    console.log(`⚙️ Server is running at port `);
})

// http://localhost:8000/api/v1/home/

export {app}