"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../Controller/AuthController");
const router = express_1.default.Router();
router.route("/register").post(AuthController_1.RegisterUser);
router.route("/signin").post(AuthController_1.SignIn);
router.route("/users").get(AuthController_1.getUsers);
router.route("/getone/:_id").get(AuthController_1.getUser);
router.route("/delete/:_id").delete(AuthController_1.deleteUser);
router.route("/update/:_id").patch(AuthController_1.updateUser);
exports.default = router;
