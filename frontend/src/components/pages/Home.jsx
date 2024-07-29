import React, { useContext, useState } from "react";
import LatestBlogs from "../minicomponents/LatestBlog";
import HeroSection from "../minicomponents/HeroSection"
import TrendingBlogs from "../minicomponents/TrendingBLogs";
import PopularAuthors from "../minicomponents/PopularAuthor";
import { Context } from "../../main";

const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs;

  return (
    <>
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <HeroSection />
        <TrendingBlogs />
        <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
        <PopularAuthors title={"Popular Authors"}/>
      </article>
    </>
  );
};

export default Home;