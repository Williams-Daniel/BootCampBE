import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AuthModel from "../Model/AuthModel";

export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await AuthModel.create({
      firstname,
      lastname,
      email,
      password: hash,
    });

    res.status(201).json({
      message: "Registration successful",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "cannot register user!",
    });
  }
};
export const SignIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const User = await AuthModel.findOne({ email });
    if (User) {
      const passed = await bcrypt.compare(password, User!.password!);
      if (passed) {
        res.status(200).json({
          message: "Welcome back!",
          data: User._id,
        });
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("can't find user");
    }
  } catch (error) {
    res.status(401).json({
      message: "cannot find user!",
    });
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const User = await AuthModel.find().sort({ createdAt: -1 });
    res.status(201).json({
      message: "Gotten all users",
      data: User,
    });
  } catch (error) {
    res.status(401).json({
      message: "cannot get users!",
    });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const User = await AuthModel.findById({ userId });
    res.status(200).json({
      message: "Gotten User successfully",
      data: User,
    });
  } catch (error) {
    res.status(401).json({
      message: "cannot find user!",
    });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const User = await AuthModel.findByIdAndDelete({_id});
    res.status(200).json({
      message: "Deleted User successfully",
      data: User,
    });
  } catch (error) {
    res.status(401).json({
      message: "cannot delete user!",
    });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { firstname, lastname } = req.body;
    const User = await AuthModel.findByIdAndUpdate(
      _id,
      { firstname, lastname },
      { new: true }
    );
    res.status(201).json({
      message: "User updated successfully",
      data: User,
    });
  } catch (error) {
    res.status(401).json({
      message: "cannot update user!",
    });
  }
};






