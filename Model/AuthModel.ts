import mongoose from "mongoose"



export interface iAuth{
    firstname?:string,
    lastname?:string,
    email?:string,
    password?:string,
    cart?:{}[]
}

interface iAuthData extends iAuth,mongoose.Document{}

const AuthModel = new mongoose.Schema(
    {
        firstname:{
            type:String,
            trim:true,
            required:true
        },
        lastname:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            unique:true
        },
        cart:[
            {
                type:mongoose.Types.ObjectId,
                ref:"product"
            }
        ]
    },
    {timestamps:true}
)

export default mongoose.model<iAuthData>("BootCampAuth",AuthModel)