import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productNumber: {
        type:Number,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required:true,
        maxlength: 50,
    },
    sku: {
        type:Number,
        required:true,
        min: 0,
    },
    description: {
        type:String,
        required: false,
    },
    type: {
        type:String,
        enum: ["Vegetable" , "Fruit" , "Field Crop"],
        required: true,
    },
    marketingDate: {
    type: Date,
    default: () => {
        const date = new Date();
        date.setDate(date.getDate() - 7); // one week ago
        return date;
    }},

})

export default mongoose.model("Products" , productSchema)
