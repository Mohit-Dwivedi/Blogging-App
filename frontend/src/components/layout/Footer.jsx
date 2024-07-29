import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link, useLocation } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const rafce = () => {
  const {mode, setMode} = useContext(Context)

  const isDashboard = useLocation("http://localhost:5173/dashboard")

  return ( 
    <footer className={isDashboard.pathname === '/dashboard' ? 'hideFooter' : mode === "light" ? "light-footer" : "dark-footer"}>
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, facere quisquam? Error ducimus nihil id hic blanditiis beatae quas doloribus suscipit reiciendis maxime, qui dicta nam doloremque! Accusantium rerum dolorum eum ducimus expedita est ut.
          </p>
          <p>
            <span>Email:</span>md8932537@gmail.com 
          </p>
          <p>
            <span>91+ 8299639914</span>
          </p>
        </div>
        <div className="quick_links">
          <h3>Quicks Links</h3>
          <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/about'}>About</Link> 
            <Link to={'/dashboard'}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>DifeStyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Bussiness</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly NewsLetter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder='Your Email'/>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">Zeta <span>Blog</span></div>
        <div className="links">
          <Link to={'/'} target="_blank"><AiFillInstagram /></Link>
          
          <Link to={'/'} target="_blank"><FaGitSquare /></Link>
          
          <Link to={'/'} target="_blank"><AiFillYoutube /></Link>
          
          <Link to={'/'} target="_blank"><AiFillLinkedin /></Link>
        </div>
      </div>
    </footer>
  )
}

export default rafce
