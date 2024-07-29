import express from 'express'
import { getMyProfile, logOut, login, register, getAllAuthor } from '../controller/userController.js'  
import { isAuthenticated } from '../middleware/auth.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', isAuthenticated, logOut) 
router.get('/myprofile', isAuthenticated, getMyProfile) 
router.get('/allauthor', getAllAuthor)

export default router  