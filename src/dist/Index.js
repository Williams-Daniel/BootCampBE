"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envVariable_1 = require("./Config/envVariable");
const DB_1 = require("./Config/DB");
const app_1 = require("./app");
const port = envVariable_1.envVariable.PORT;
const app = (0, express_1.default)();
(0, app_1.appConfig)(app);
const server = app.listen(process.env.PORT || port, () => {
    console.log("A server is connected on port: ", port);
    (0, DB_1.dbConfig)();
});
process.on("uncaughtException", (error) => {
    console.log("A server is shutting down because of uncaughtException", error);
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("A server is shutting sown because of unhandledRejection", reason);
    console.log("unhandledRejection");
    server.close(() => {
        process.exit(1);
    });
});
