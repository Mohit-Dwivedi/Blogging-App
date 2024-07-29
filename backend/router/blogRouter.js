import express from 'express'
import { blogPost, deleteBlog, getAllBlogs, getMyBlogs, singleBlogs, updateBlogs } from '../controller/blogController.js'
import { isAuthenticated, isAuthorized } from '../middleware/auth.js'

const router = express.Router()

router.post('/post', isAuthenticated, isAuthorized("Author"), blogPost)
router.delete('/delete/:id', isAuthenticated, isAuthorized("Author"), deleteBlog)
router.get('/allblogs', getAllBlogs)
router.get('/singleblog/:id', isAuthenticated, singleBlogs)
router.get('/myblog', isAuthenticated, isAuthorized("Author"), getMyBlogs)
router.put('/update/:id', isAuthenticated, isAuthorized("Author"), updateBlogs)

export default router   