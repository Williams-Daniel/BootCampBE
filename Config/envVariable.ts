import env from "dotenv"

env.config()
export const envVariable = ({
    PORT : process.env.PORT!,
    DB_URL2 : process.env.DB_STRING2!
})