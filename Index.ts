import express, { Application } from "express"
import { envVariable } from "./Config/envVariable"
import { dbConfig } from "./Config/DB"
import { appConfig } from "./app"

const port = envVariable.PORT

const app:Application = express()
appConfig(app)

const server = 
app.listen(process.env.PORT || port,()=>{
    console.log("A server is connected on port: ",port)
    dbConfig()
})


process.on("uncaughtException",(error)=>{
    console.log("A server is shutting down because of uncaughtException",error)
    console.log(error)
    process.exit(1)
})

process.on("unhandledRejection",(reason)=>{
    console.log("A server is shutting sown because of unhandledRejection",reason)
    console.log("unhandledRejection")
    server.close(()=>{
        process.exit(1)
    })
})