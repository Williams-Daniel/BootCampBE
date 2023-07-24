"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = exports.deleteProduct = exports.readProduct = exports.readProducts = exports.postProduct = void 0;
const ProductModel_1 = __importDefault(require("../Model/ProductModel"));
const AuthModel_1 = __importDefault(require("../Model/AuthModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shoeName, shoePrice, shoeSize, shoeColor } = req.body;
        const newProduct = yield ProductModel_1.default.create({
            shoeName,
            shoePrice,
            shoeSize,
            shoeColor
        });
        console.log(newProduct);
        res.status(201).json({
            message: "posted new product successfully",
            data: newProduct
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Cannot post product"
        });
    }
});
exports.postProduct = postProduct;
const readProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProduct = yield ProductModel_1.default.find();
        res.status(201).json({
            message: "Read all product successfully",
            data: allProduct
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Cannot read all product"
        });
    }
});
exports.readProducts = readProducts;
const readProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const oneProduct = yield ProductModel_1.default.findById(_id);
        res.status(201).json({
            message: "Reading one product successfully",
            data: oneProduct
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Cannot read one product"
        });
    }
});
exports.readProduct = readProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const deleteProduct = yield ProductModel_1.default.findByIdAndDelete({ _id });
        console.log(deleteProduct);
        res.status(201).json({
            message: "deleted product successfully",
            data: deleteProduct
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Cannot delete product"
        });
    }
});
exports.deleteProduct = deleteProduct;
// Add to cart,remove from cart,allSelection,oneSelection,updateSelection
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { _id } = req.params;
        const user = yield AuthModel_1.default.findById(_id);
        const product = yield ProductModel_1.default.findById(_id);
        const CART = (_a = user === null || user === void 0 ? void 0 : user.cart) === null || _a === void 0 ? void 0 : _a.push(new mongoose_1.default.Types.ObjectId(product === null || product === void 0 ? void 0 : product.id));
        user === null || user === void 0 ? void 0 : user.save();
        res.status(201).json({
            message: "User updated successfully",
            data: CART,
        });
    }
    catch (error) {
        res.status(401).json({
            message: "cannot push to cart!",
        });
    }
});
exports.addToCart = addToCart;
