const mongoose = require ("mongoose")
const newProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Products Name!"],
        trim:true
    },
    descCard:{
        type:String,
        required:[true, "Please Enter Products Card Description!"]
    },
    descBanner:{
        type:String,
        required:[true, "Please Enter Products Card Description!"]
    },
    imgCard:[
        {
            public_id:{
                type:String,
                required:[true, "Please Enter Products Card Image!"]
            },
            url:{
                type:String,
                required:[true, "Please Enter Products Banner Image!"]
            }
        }
    ],
    imgBanner:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    price:{
        type:Number,
        required:[true, "Please Enter Products Price!"],
        maxLenght:[5, "Price can't be more than 5 characters long!"]
    },
    category:{
        type:String,
        required:[true, "Please Enter Products Category!"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter the Product Stock!"],
        maxLenght:[4, "Stock can't be more than 5 characters long!"],
        default:1
    }
})
module.exports = mongoose.model("newProducts", newProductSchema)