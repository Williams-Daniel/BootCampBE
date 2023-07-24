import mongoose from "mongoose";

export interface iProduct {
    shoeName?:string,
    shoePrice?:string,
    shoeSize?:string,
    shoeColor?:string
}

interface iProductData extends iProduct,mongoose.Document{}


const productModel = new mongoose.Schema(
    {
        shoeName:{
            type:String,
            trim:true
        },
        shoePrice:{
            type:String,
        },
        shoeSize:{
            type:String
        },
        shoeColor:{
            type:String
        }
    },
    {timestamps:true}
)

export default mongoose.model<iProductData>("products",productModel)