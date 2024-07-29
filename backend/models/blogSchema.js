import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLEngth: [10, "Blog title must contain at least 10 character"],
        maxLEngth: [32, "Blog title cannot exceed 40 character"]
    },
    mainImage: {
        public_id: { 
            type: String, 
        },
        url: {
            type: String, 
        }
    },
    intro: {
        type: String,
        required: true,
        minLEngth: [250, "Blog intro must contain at least 250 character"]
    },
    paraOneImage: {
        public_id: { 
            type: String, 
        }, 
        url: {
            type: String, 
        }
    },
    paraOneDescription: {
        type: String, 
        minLength: [50, "Blog intro must contain at least 50 character"]
    },
    paraOneTitle: {
        type: String, 
        minLength: [50, "Blog title must contain at least 50 character"]
    },
    paraTwoImage: {
        public_id: { 
            type: String, 
        },
        url: {
            type: String, 
        }
    },
    paraTwoDescription: {
        type: String, 
        minLength: [50, "Blog intro must contain at least 50 character"]
    },
    paraTwoTitle: {
        type: String, 
        minLength: [50, "Blog title must contain at least 50 character"]
    },
    paraThreeImage: {
        public_id: { 
            type: String, 
        },
        url: {
            type: String, 
        }
    },
    paraThreeDescription: { 
        type: String, 
        minLength: [50, "Blog intro must contain at least 50 character"]
    },
    paraThreeTitle: {
        type: String, 
        minLength: [50, "Blog title must contain at least 50 character"]
    },
    category: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    authorName:{
        type: String, 
    },
    authorAvatar: {
        type: String, 
    },
    published: {
        type: Boolean,
        default: false
    }
})
export const Blog = mongoose.model("Blog", blogSchema)
