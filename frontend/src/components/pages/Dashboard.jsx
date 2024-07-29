import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import Sidebar from '../layout/Sidebar'
import MyProfile from '../minicomponents/MyProfiles'
import CreateBlog from '../minicomponents/CreateBlog'
import Chart from '../minicomponents/Chart'
import MyBlogs from '../minicomponents/MyBlogs' 

const Dashboard = () => {
  const { mode, isAuthenticated } = useContext(Context); 
  const [component, setComponent] = useState("MyBlogs")

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }


  return (
    <article  className={mode === "dark" ? "dark-bg dashboard" : "light-bg dashboard"}>
      <Sidebar component={component} setComponent={setComponent}/>
      {
        component === "My Profile" ? (<MyProfile />) : component === "Create Blog" ? (<CreateBlog />) : component === "Chart" ? (<Chart />) : ((<MyBlogs />))
      }
    </article>
  )
}

export default Dashboard