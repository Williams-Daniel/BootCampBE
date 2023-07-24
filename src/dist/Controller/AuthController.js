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
exports.updateUser = exports.deleteUser = exports.getUser = exports.getUsers = exports.SignIn = exports.RegisterUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const AuthModel_1 = __importDefault(require("../Model/AuthModel"));
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const newUser = yield AuthModel_1.default.create({
            firstname,
            lastname,
            email,
            password: hash,
        });
        res.status(201).json({
            message: "Registration successful",
            data: newUser,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "cannot register user!",
        });
    }
});
exports.RegisterUser = RegisterUser;
const SignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const User = yield AuthModel_1.default.findOne({ email });
        if (User) {
            const passed = yield bcrypt_1.default.compare(password, User.password);
            if (passed) {
                res.status(200).json({
                    message: "Welcome back!",
                    data: User._id,
                });
            }
            else {
                console.log("wrong password");
            }
        }
        else {
            console.log("can't find user");
        }
    }
    catch (error) {
        res.status(401).json({
            message: "cannot find user!",
        });
    }
});
exports.SignIn = SignIn;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const User = yield AuthModel_1.default.find().sort({ createdAt: -1 });
        res.status(201).json({
            message: "Gotten all users",
            data: User,
        });
    }
    catch (error) {
        res.status(401).json({
            message: "cannot get users!",
        });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const User = yield AuthModel_1.default.findById({ userId });
        res.status(200).json({
            message: "Gotten User successfully",
            data: User,
        });
    }
    catch (error) {
        res.status(401).json({
            message: "cannot find user!",
        });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const User = yield AuthModel_1.default.findByIdAndDelete({ _id });
        res.status(200).json({
            message: "Deleted User successfully",
            data: User,
        });
    }
    catch (error) {
        res.status(401).json({
            message: "cannot delete user!",
        });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { firstname, lastname } = req.body;
        const User = yield AuthModel_1.default.findByIdAndUpdate(_id, { firstname, lastname }, { new: true });
        res.status(201).json({
            message: "User updated successfully",
            data: User,
        });
    }
    catch (error) {
        res.status(401).json({
            message: "cannot update user!",
        });
    }
});
exports.updateUser = updateUser;
