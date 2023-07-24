import express, { Router } from "express"
import { RegisterUser, SignIn, deleteUser, getUser, getUsers, updateUser } from "../Controller/AuthController"


const router:Router = express.Router()

router.route("/register").post(RegisterUser)
router.route("/signin").post(SignIn)            
router.route("/users").get(getUsers)
router.route("/getone/:_id").get(getUser)
router.route("/delete/:_id").delete(deleteUser)
router.route("/update/:_id").patch(updateUser)

export default router