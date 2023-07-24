import {Request,Response} from "express"
import ProductModel from "../Model/ProductModel"
import AuthModel from "../Model/AuthModel"
import mongoose from "mongoose"


export const postProduct = async(req:Request,res:Response)=>{
    try {
        
        const {shoeName,shoePrice,shoeSize,shoeColor} = req.body
        const  newProduct = await ProductModel.create(
            {
                shoeName,
                shoePrice,
                shoeSize,
                shoeColor
            }
        )
        console.log(newProduct)

        res.status(201).json({
            message:"posted new product successfully",
            data:newProduct
        })

    } catch (error) {
     res.status(400).json(
        {
            message:"Cannot post product"
        }
     )   
    }
}
export const readProducts = async(req:Request,res:Response)=>{
    try {
        
        const  allProduct = await ProductModel.find()

        res.status(201).json({
            message:"Read all product successfully",
            data: allProduct
        })

    } catch (error) {
     res.status(400).json(
        {
            message:"Cannot read all product"
        }
     )   
    }
}
export const readProduct = async(req:Request,res:Response)=>{
    try {
        
        const {_id} = req.params
        const  oneProduct = await ProductModel.findById(_id)

        res.status(201).json({
            message:"Reading one product successfully",
            data: oneProduct
        })

    } catch (error) {
     res.status(400).json(
        {
            message:"Cannot read one product"
        }
     )   
    }
}
export const deleteProduct = async(req:Request,res:Response)=>{
    try {
        
        const {_id} = req.params
        const  deleteProduct = await ProductModel.findByIdAndDelete({_id})
        console.log(deleteProduct)

        res.status(201).json({
            message:"deleted product successfully",
            data:deleteProduct
        })

    } catch (error) {
     res.status(400).json(
        {
            message:"Cannot delete product"
        }
     )   
    }
}

// Add to cart,remove from cart,allSelection,oneSelection,updateSelection

export const addToCart = async (req: Request, res: Response) => {
    try {

        const {_id} = req.params
      const user = await AuthModel.findById(_id)
      const product = await ProductModel.findById(_id)
    const CART =   user?.cart?.push( new mongoose.Types.ObjectId(product?.id!))
    user?.save()
      res.status(201).json({
        message: "User updated successfully",
        data: CART,
      });
    } catch (error) {
      res.status(401).json({
        message: "cannot push to cart!",
      });
    }
  };