"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const envVariable_1 = require("./envVariable");
const URL = envVariable_1.envVariable.DB_URL2;
const dbConfig = () => {
    try {
        mongoose_1.default.connect(URL).then(() => {
            console.log("Connected!");
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.dbConfig = dbConfig;
