"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("../Controller/ProductController");
const router = express_1.default.Router();
router.route("/postproduct").post(ProductController_1.postProduct);
router.route("/readproducts").get(ProductController_1.readProducts);
router.route("/readproduct/:_id").get(ProductController_1.readProduct);
router.route("/deleteProduct/:_id").delete(ProductController_1.deleteProduct);
router.route("/tocart/:_id").post(ProductController_1.addToCart);
exports.default = router;
