import React, { useContext } from 'react'
import {Context} from '../../main'
import { Link } from 'react-router-dom'
import {BeatLoader} from 'react-spinners'
import '../../index.css'

const HeroSection = () => {
  const {blogs} = useContext(Context)

  return (
    <section className='hero'>
      {
        blogs && blogs.length > 0 ? blogs.map((element) => {
          return (
            <Link to={`/blog/${element._id}`} className='card' key={element._id}>
              <img src={element.mainImage.url} alt="" className='blogImg' />
              <h1>{element.title}</h1>
              <div className='writer-section'>
                <img src={element.autorAvatar} alt="" />
                <p>{element.authorName}</p>
              </div>
            </Link>
          )
        }) : (
           <BeatLoader size={9} color='gray'/>
        )
      }
    </section>
  )
}

export default HeroSection
