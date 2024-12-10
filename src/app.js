import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))//configure cors

app.use(express.json({
    limit: "16kb"
}))//handle data in json format

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))//handle data in url

app.use(express.static("public"))//handle data in various formats like pdf

app.use(cookieParser())//configure cookies

export { app }