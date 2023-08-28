const mongoose =  require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product Name"],
        trim:true
    },
    description:{
        type:String,
        require:[true,"Please enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product Price"],
        maxLength:[8, "Price Cannot Exceed 8 figure"],

    },
    ration:{
        type:Number,
        default:0
    },
    images:[
        {  public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true, "please enter product category"],
        
    },
    stock:{
        type:Number,
        required:[true, "please enter product Stock"],
        maxLength:[4,"stock cannot exceed the 4 character"]
    },
    numOfReview:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("Product", productSchema);