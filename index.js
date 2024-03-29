import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { todosRouter } from './backend/routers/todosRouter.js'

const port = 3075
const app = express()

app.use(express.json())
app.use(cors())

app.use('/todos', todosRouter)

const dbUrl = process.env.DB_URL

const connectToDb = async () => {
    try {
        await mongoose.connect(dbUrl)
    } catch (e) {
        console.error(e)
    }
}

connectToDb().then(
    app.listen(
        port,
        console.log(`server is running on following port: ${port} `)
    )
)
