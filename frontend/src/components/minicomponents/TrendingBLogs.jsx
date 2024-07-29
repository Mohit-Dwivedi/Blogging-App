import React, {useContext} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Context } from '../../main';
import { Link } from 'react-router-dom';
import {BeatLoader} from 'react-spinners'

const TrendingBlogs = () => {
  const {blogs} = useContext(Context)
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1324 },
    items: 4,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 1324, min: 1005 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1005, min: 700 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

return (
  <div className="trending">
    <h3>Trending</h3>
    <div responsive={responsive}>
   {
    blogs && blogs.length > 0 ? (
      blogs.slice(0,6).map(element => {
        return (
          <Link to={`blog/${element._id}`} className='card' key={element._id}>
            <img src={element.mainImage.url} alt="" className='blogImg'/>
            <span className='category'>{element.category}</span>
            <h4>{element.title}</h4>
            <div className="writer_section">
              <div className="author">
              <img src={element.authorAvatar} alt="" />
              <p>{element.authorName}</p>
              </div>
            </div>
          </Link>
        )
      })
    ) :  (
     <BeatLoader size={9} color='gray'/>
  )
   }
</div>
  </div>
)
}

export default TrendingBlogs