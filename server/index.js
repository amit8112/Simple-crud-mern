import express from "express";
const app = express();
import UserRoutes from "./routes/User.js";
import connectToMongo from "./config/db.js";
const PORT= process.env.PORT || 8000;
import cors from 'cors'
connectToMongo();

//apply middleware

app.use(express.json());

//cors error 
app.use(cors())

app.get("/", (req, res) => {
    res.send("Api is Running");
})


// routes

//use middleware routes
app.use('/api/v1', UserRoutes);


app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`);
})