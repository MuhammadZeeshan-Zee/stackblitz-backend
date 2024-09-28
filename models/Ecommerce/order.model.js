import mongoose from "mongoose";
const orderIteamSchema=mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema=mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderItems:{
        type:[orderIteamSchema]
    },
    status:{
        type:String,
        emun:['Pending','Canceled','Delivered'],
        default:'Pending'
    },

},{timestamps:true})
export const Order=mongoose.model('Order',orderSchema)
