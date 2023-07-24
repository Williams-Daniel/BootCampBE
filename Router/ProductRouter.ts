import express, { Router } from "express"
import { addToCart, deleteProduct, postProduct, readProduct, readProducts } from "../Controller/ProductController"

const router:Router = express.Router()

router.route("/postproduct").post(postProduct)
router.route("/readproducts").get(readProducts)
router.route("/readproduct/:_id").get(readProduct)
router.route("/deleteProduct/:_id").delete(deleteProduct)


router.route("/tocart/:_id").post(addToCart)

export default router