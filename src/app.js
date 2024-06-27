import express from "express";
import cors from "cors"
import cookieParser  from "cookie-parser";

// created app
const app = express();

// seting up middle-ware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) // cors - Cross Origin Resource Sharing 
                    // -> basically to whom should this server serve

app.use(express.json({limit:'16kb'}))// for accepting json as req , res
app.use(express.urlencoded({extended:true,limit:'16kb'})) // for url to have object in object
app.use(express.static("public")) //storing assests
app.use(cookieParser()) // for using secure cookies (only accesible by server)


export { app };
