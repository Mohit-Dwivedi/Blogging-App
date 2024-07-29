import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import cookieParser from 'cookie-parser'
import fileUpload from "express-fileupload"
import { dbconnection } from './connectionDb/dbConnection.js'
import { errormiddleware } from './middleware/error.js'
import userRouter from './router/userRouter.js'
import blogRouter from './router/blogRouter.js'

const app = express()
dotenv.config({path: './config/config.env'})

// const cors = require('cors'); 

const corsOptions = {
  origin: 'http://localhost:5173', // Specify the allowed origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}; 

app.use(cors(corsOptions));

// app.use(cors({
//     origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//     method: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
// }))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/"
}))

app.use('/api/v1/user', userRouter)
app.use('/api/v1/blog', blogRouter)

dbconnection()

app.use(errormiddleware)

export default app