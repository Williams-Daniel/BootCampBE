import express, { Application,Request,Response } from "express"
import cors from "cors"
import Auth from "./Router/AuthRouter"
import Product from "./Router/ProductRouter"


export const appConfig = (app:Application)=>{
    app
    .use(express.json())
    .use(cors())
    .use("/api",Auth)
    .use("/api",Product)


    .get("/",(req:Request,res:Response)=>{
        try {
            res.status(200).json({
                message:"Connected  successfully"
            })
        } catch (error) {
            res.status(400).json(
                {
                    message:"error found"
                }
            )
        }
    })
} 

