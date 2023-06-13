const mongoose= require('mongoose');
const express= require('express')
const app=express()
const cors=require("cors")
app.use(express.json({extended: true}))
app.use('/api/schedule', require('./routes/schedule'))
app.use('/api/admin', require('./routes/admin'))
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT"]

}))
const start=async()=>{
    try{
        await mongoose.connect('mongodb+srv://admin:556677@cluster0.wkohydr.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(5000, ()=>{
            console.log('bob')
        })
    }
    catch(e){
        console.log('blya')
        process.exit(1)
    }
}
start()
