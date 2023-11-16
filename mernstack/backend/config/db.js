const mongoose=require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://surya:8124685183@cluster0.vsup8.mongodb.net/mernapp?retryWrites=true&w=majority')

        console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline);
    }
    catch(error){
        console.log(error);
        process.exit(1)
    }
}



module.exports= connectDB