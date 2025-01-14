import {catchAsyncError} from './catchAsyncError.js'
import {Users} from '../models/userSchema.js'
import ErrorHandler from './error.js'
import jwt from 'jsonwebtoken'
 
//AUTHENTICATION
export const isAuthenticated = catchAsyncError(async(req,res,next) => {
    const {token} = req.cookies
    if(!token){ 
        return next(new ErrorHandler("User is not authenticated", 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = await Users.findById(decoded.id)
    next()
})

//AUTHORIZATION
export const isAuthorized = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`user with this role(${req.user.role}) not allowed to access this resoures!`))
        }
        next()
    }
}