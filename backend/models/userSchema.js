import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLEngth: [3, "Name Must contain atleast 3 character"],
        maxLEngth: [32, "Name cannot exceed 32 character"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email!"]
    },
    phone: {
        type: Number,
        required: true
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    education: {
        type: String,
        required: true
    },
    role: {
        type:String,
        required: true, 
        enum: ["Reader", "Author"]
    },
    password: {
        type: String,
        required: true,
        minLEngth: [8, "Password Must contain atleast 8 character"],
        maxLEngth: [32, "Password cannot exceed 32 character"],
        select: false
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
})

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

UserSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    })
}

export const Users = mongoose.model("Users", UserSchema)