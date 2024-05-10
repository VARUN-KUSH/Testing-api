import express from "express"
import cors from "cors"
import { mapScrapper } from "../controller.js";


const PORT = 9000;

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors({
    origin: ['https://google-map-s-scrapper-frontend.vercel.app/'],
    credentials: true
}))

app.get("/api/v1/home/healthtest", (req, res) => {
    res.send('all good')
  })
app.post("/api/v1/home/datascrape", mapScrapper)

app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port ${PORT}`);
})

// http://localhost:8000/api/v1/home/

export {app}