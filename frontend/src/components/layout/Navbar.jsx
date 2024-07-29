import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Context} from '../../main' 
import {CiLight} from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import axios from 'axios'
import toast from 'react-hot-toast'

const Navbar = () => {
  const [show, setShow] = useState(true);
  
  const handleNavbar = () => {
    setShow(!show)
  }

  const isDashboard = useLocation("http://localhost:5173/dashboard")

  const {mode, setMode, isAuthenticated, user, setisAuthenticated} = useContext(Context)

  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.get("http://localhost:4000/api/v1/user/logout",
       {
         withCredentials: true,
       })
          toast.success(data.message)
          setisAuthenticated(false)
          navigate('/')
    } catch (error) {
      toast.error(error.response.data.message) 
    }
}


  return (
    <section className={isDashboard.pathname === '/dashboard' ? 'hideNavbar' : mode === "light" ? "header light-navbar" : "header dark-navbar"}>
      <nav>
        <div className="logo">
          Zeta<span>log</span>
        </div>
        <div className={show ? "links show" : "links"}>
          <ul>
            <li>
              <Link to={'/'} onClick={handleNavbar}>Home</Link>
            </li>
            <li>
              <Link to={'/blogs'} onClick={handleNavbar}>Blogs</Link>
            </li>
            <li>
              <Link to={'/authors'} onClick={handleNavbar}>All Author</Link>
            </li>
            <li>
              <Link to={'/about'} onClick={handleNavbar}>About</Link>
            </li>
          </ul>
          <div className="btns">
            <button onClick={() => mode === "light" ? setMode("dark") : setMode("light")} className={mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"}>
              {
                mode === "light" ? ( 
                  <CiLight className='light-icons' />
                ) : (<MdDarkMode className='dark-icons'/>)
              }
            </button> 
            {isAuthenticated && user.role === "Author" ? (
              <Link
                to={"/dashboard"}
                onClick={handleNavbar}
                className="dashboard-btn"
              >
                DASHBOARD
              </Link>
            ) : (
              ""
            )}
            {
              !isAuthenticated ? (<Link to={'/login'} onClick={handleNavbar} className='login-btn' style={{cursor: "pointer"}}>Login</Link>) : 
              ( <div> <button onClick={handleLogout} className='logout-btn' style={{cursor: "pointer"}}>LogOut</button>
              </div>
              )
            }
          </div>
        </div>
        <RxHamburgerMenu className='hamburger' onClick={handleNavbar}/>
      </nav>
    </section>
  )
}

export default Navbar