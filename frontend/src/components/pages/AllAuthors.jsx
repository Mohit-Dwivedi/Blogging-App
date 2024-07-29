import React, { useContext, useEffect, useState } from "react"; 
import { Context } from "../../main"; 
import axios from "axios";
import { BeatLoader } from "react-spinners";
import PopularAuthors from "../minicomponents/PopularAuthor";

const AllAuthors = () => { 
  const { mode} = useContext(Context); 

  return (
    <article className={mode === "dark" ? "dark-bg-all-authors" : "light-bg-all-authors"}>
     <PopularAuthors title={"All Authors"} />
   </article>
  )
}

export default AllAuthors
