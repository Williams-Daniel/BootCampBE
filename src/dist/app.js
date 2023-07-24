"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AuthRouter_1 = __importDefault(require("./Router/AuthRouter"));
const ProductRouter_1 = __importDefault(require("./Router/ProductRouter"));
const appConfig = (app) => {
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use("/api", AuthRouter_1.default)
        .use("/api", ProductRouter_1.default)
        .get("/", (req, res) => {
        try {
            res.status(200).json({
                message: "Connected  successfully"
            });
        }
        catch (error) {
            res.status(400).json({
                message: "error found"
            });
        }
    });
};
exports.appConfig = appConfig;
