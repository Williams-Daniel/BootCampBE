"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AuthModel = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    cart: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: "product"
        }
    ]
}, { timestamps: true });
exports.default = mongoose_1.default.model("BootCampAuth", AuthModel);
