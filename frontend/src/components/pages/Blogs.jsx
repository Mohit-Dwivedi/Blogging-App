import React, { useContext, useState } from "react"; 
import { Context } from "../../main";
import LatestBlogs from "../minicomponents/LatestBlog";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);
  
  return (
   <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
    <LatestBlogs blogs={blogs} title={"blogs"}/>
   </article>
  )
}

export default Blogs
