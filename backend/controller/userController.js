import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/error.js";
import {Users} from '../models/userSchema.js'
import { sendToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary"
   
export const register = catchAsyncError(async (req,res,next) => {
 
    if(!req.files || Object.keys(req.files).length === 0){
        return next(new ErrorHandler("User Avtar Required!", 400)) 
    }

    const {avatar} = req.files
    //const allowedFormat = ["image/png", "image/jpeg", "image/webp"]
    // if(!allowedFormat.includes(Avtar.mimetype)){
    //     return next(new ErrorHandler("File Format Not Supported!", 400))
    // }
    
    const {name, email, password, phone, role, education} = req.body
    if(!name || !email || !password || !phone || !role || !education || !avatar){
        return next(new ErrorHandler("Please Fill Deatils", 400))
    }
    let user = await Users.findOne({email})
    if(user){
        return next(new ErrorHandler(`User already exists with this email: ${email}`, 400))
    }
 
    const cloudinaryResponse = await cloudinary.uploader.upload(avatar.tempFilePath)
    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.log("cloudinary Error", cloudinaryResponse.error || "Unkown  Cloudinary Error")
    }

    user = await Users.create({name, email, phone, password, role, education, avatar:{public_id: cloudinaryResponse.public_id, url: cloudinaryResponse.secure_url}})
    sendToken(user, 200, "User Register", res)
})

export const login = catchAsyncError(async (req,res,next) => {
    const {email, password, role} = req.body
    if(!email || !password || !role){
        return next(new ErrorHandler("Please Fill Deatils", 400))
    }
    const user = await Users.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Invalid Password or Email!", 400))
    }
     const isPasswordMatched = await user.comparePassword(password)
     if(!isPasswordMatched){
         return next(new ErrorHandler("Invalid Password or Email", 400))
     }
     if(user.role !== role){
        return next(new ErrorHandler(`User with provided role ${role} not found`, 400))
     }
     sendToken(user, 200, "User Loged In", res) 
})

export const logOut = catchAsyncError(async (req,res,next) => {
        res.status(200).cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "UserLoged Out!"
    })
})    

export const getMyProfile = catchAsyncError(async (req,res,next) => {
    const user = req.user
    res.status(200).json({
        success: true,
        user
    })
})

export const getAllAuthor = catchAsyncError(async (req,res,next) => {
    const authors = await Users.find({role: "Author"})
    res.status(200).json({
        success: true, 
        authors
    })
})
