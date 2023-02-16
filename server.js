import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import mongoose from 'mongoose'
import userRouter from './Route/userRoute.js'
import personaldetailRouter from './Route/personaldetailRoute.js'

const app = express()
dotenv.config()

app.use(express.json())

app.use('/api/v1/user',userRouter)
app.use('/api/v1/user/personaldata', personaldetailRouter )

mongoose.set('strictQuery',false)

app.get('/', (req,res) => {
    res.send('route working')
})

const port = process.env.PORT || 5000

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`server is working on ${port}`)
        })
    } catch (error) {
            console.log(error)
    }
}

start()