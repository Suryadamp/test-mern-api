const mongoose=require('mongoose')

const  goalSchema =mongoose.Schema({

    text:{
        type:String,
        required:[true, 'please  add atext value']
    }
},{
    timestamps: true,
})

module.exports= mongoose.model('Goal',goalSchema)