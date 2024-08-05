import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit:"50kb"}));
app.use(express.urlencoded({extended:true, limit:"15kb"}));
app.use(express.static("public"));


import router from "./routes/data.routes.js";
app.use("/" , router);

export {app};