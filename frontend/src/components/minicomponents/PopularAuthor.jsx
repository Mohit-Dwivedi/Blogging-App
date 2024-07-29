import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const PopularAuthors = ({title}) => {
  const [authors, setAuthors] = useState([]);
   
  useEffect(() => {
    const fetchAuthors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/allauthor",
        { withCredentials: true } 
      );
      setAuthors(data.authors);
    };
    fetchAuthors();
  }, []);

  return (
    <section className="popularAuthors">
      <h3>{title}</h3>
      <div className="container">
        {authors && authors.length > 0 ? (
          authors.slice(0, 4).map((element) => {
            return (
              <div className="card" key={element._id}>
                <img src={element.avatar.url} alt="author" />
                <p>{element.name}</p>
                <p>{element.role}</p>
              </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={30} />
        )}
      </div>
    </section>
  );
};

export default PopularAuthors;