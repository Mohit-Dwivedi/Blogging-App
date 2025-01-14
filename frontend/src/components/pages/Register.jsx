import React, { useContext, useState } from 'react'
import {Context} from '../../main'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [password, setPassword] = useState("")
  const [education, setEducation] = useState("")
  const [avatar, setAvatar] = useState("")
  const [avatarPreview, setAvatarPreview] = useState("")

  const avatarHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setAvatarPreview(reader.result)
      setAvatar(file)
    }
  }

  const {mode, isAuthenticated} = useContext(Context)
  const navigate = useNavigate()

  const handleRegister = async(e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("role", role)
    formData.append("password", password)
    formData.append("education", education)
    formData.append("avatar", avatar)

    try {
      const {data} = await axios.post("http://localhost:4000/api/v1/user/register", formData,
        {
          withCredentials: true, 
          header: {"Content-type": 'multipart/form-data'}
        }
      )
      setName("")
      setEmail("")
      setEducation("")
      setAvatar("")
      setAvatarPreview("")
      setPassword("")
      setRole("")
      setPhone("") 
      toast.success(data.message)
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  if(isAuthenticated){
    return navigate('/')
  }

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className="auth-form">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Reader">Reader</option>
            <option value="Author">Author</option>
          </select>
          <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name'/>
          </div>
          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email'/>
          </div>
          <div>
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your Phone Number'/>
          </div>
          <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password'/>
          </div>
          <select value={education} onChange={(e) => setEducation(e.target.value)}>
            <option value="">Select Your Education</option>
            <option value="Matric">Matric</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Masters">Masters</option>
            <option value="PHD">PHD</option>
            <option value="Fiploma">Diploma</option>
            <option value="Software Enginner">Software Enginner</option>
          </select>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div className="avatar">
              <img src={avatarPreview ? `${avatarPreview}` : "/pic.jpg"} alt="avatar" />
            </div>
            <input type="file" onChange={avatarHandler} className='avatar_input_tag' style={{border: "none", cursor: 'pointer'}}/>
          </div>
          <p>Already Register? <Link to={'/login'} style={{cursor: 'pointer', color: 'yellow'}}>Login Now</Link></p>
          <button type='submit' className='submit-btn' style={{cursor: 'pointer'}}>Register</button>
        </form>
      </section>
    </article>
  )
}

export default Register
