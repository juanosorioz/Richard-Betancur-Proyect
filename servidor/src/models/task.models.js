import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    description:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default : Date.now
    }
},{
    timestamps : true
})

export default mongoose.model('Task',taskSchema)