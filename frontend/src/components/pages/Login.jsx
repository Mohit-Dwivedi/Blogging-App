import React, { useContext, useState } from 'react'
import axios from 'axios'
import {Context} from '../../main'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [password, setPassword] = useState("")

  const {mode, isAuthenticated, setisAuthenticated} = useContext(Context)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
     await axios.post("http://localhost:4000/api/v1/user/login", 
    {email, role, password},
        {
          withCredentials: true, 
          header: {"Content-type": 'application/json'}
        }).then((res) => {
          toast.success(res.data.message)
          setEmail("")
          setPassword("")
          setRole("")
          setisAuthenticated(true)
          navigate('/')
        }).catch(error => {
          toast.error(error.response.data.message)
        })
  }

  if(isAuthenticated){
    return navigate('/')
  }

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className="auth-form">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Reader">Reader</option>
            <option value="Author">Author</option>
          </select> 
          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email'/>
          </div> 
          <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password'/>
          </div>  
          <p>Don't have any account? <Link to={'/register'} style={{cursor: 'pointer', color: 'yellow'}}>Register Now</Link></p>
          <button type='submit' className='submit-btn' style={{cursor: 'pointer'}}>Login</button>
        </form>
      </section>
    </article>
  )
}

export default Login
