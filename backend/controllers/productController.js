const Product =  require("../models/productModel");



//Create Product
exports.createProduct =async (req, res, next)=>{
    const product =  await Product.create(req.body);
    // console.log("api working");

    res.status(201).json({
        success:true,
        product
    })
}




exports.getAllProducts = (req, res)=>{
res.status(200).json({message:"Routes is Working Fine"});
}