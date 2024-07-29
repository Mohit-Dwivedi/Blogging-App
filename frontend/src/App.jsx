import React, { useContext, useEffect } from 'react' 
import {Context} from './main' 
import './App.css'
import{BrowserRouter, Route, Routes} from "react-router-dom" 
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Blogs from './components/pages/Blogs'
import SingleBlog from './components/pages/SingleBlog'
import About from './components/pages/About'
import AllAuthors from './components/pages/AllAuthors'
import Dashboard from './components/pages/Dashboard'
import UpdateBlog from './components/pages/UpdateBlog'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const {isAuthenticated, setisAuthenticated, setBlogs, user, setUser} = useContext(Context)

  useEffect(() => {
     const fecthUser = async () => {
       try {
         const {data} = await axios.get("http://localhost:4000/api/v1/user/myprofile",
         {withCredentials: true}) 
         setisAuthenticated(true) 
         setUser(data.user)
       } catch (error) {
         setisAuthenticated(false)
         setUser({})
       }
     }
     const fetchBlogs = async() => {
       try {
         const {data} = await axios.get("http://localhost:4000/api/v1/blog/allblogs", 
           {withCredentials: true},  
          )           
          setBlogs(data.allblog)
       } catch (error) {
         setBlogs({})
       }
     }
     fecthUser()
     fetchBlogs()
   }, [isAuthenticated, user])

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>    
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/blog/:id' element={<SingleBlog />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/authors' element={<AllAuthors />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='blogs/update/:id' element={<UpdateBlog />} />
      </Routes> 
      <Footer />
      <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App
// https://xhamster.desi/videos/what-her-name-actress-xhwjVZy