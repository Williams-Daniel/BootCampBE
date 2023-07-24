import mongoose from "mongoose"
import { Request,Response } from "express"
import { envVariable } from "./envVariable"

const URL = envVariable.DB_URL2
export const dbConfig = ()=>{
    try {
        mongoose.connect(URL).then(()=>{
            console.log("Connected!")
        })
    } catch (error) {
        console.log(error)
    }
}
