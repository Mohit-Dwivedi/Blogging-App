import React, { useContext, useEffect, useState } from "react"; 
import { Context } from "../../main"; 

const About = () => {
  const { mode} = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
     <h2>About</h2>

     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nulla maxime fugit minima. Totam corporis aliquam quia voluptatum? Perferendis iste impedit laudantium explicabo soluta quasi. Distinctio minima sapiente veniam reprehenderit, sint quo ipsam esse optio sunt autem molestiae sit cumque pariatur incidunt earum voluptas quisquam? Aliquid voluptatem nihil mollitia voluptatibus, minus optio, laborum enim placeat quo aperiam dignissimos nulla. Quibusdam ratione dignissimos quidem dicta adipisci porro! Et, cum? Quasi veritatis dignissimos reiciendis cumque, deserunt ducimus voluptas laborum laudantium aspernatur, aliquam ratione sunt. Itaque illum dicta soluta harum numquam quibusdam provident, voluptatum nulla commodi eos ipsum eius possimus illo magnam ullam perferendis animi explicabo quam? Dolorum ipsa in nostrum maiores magni earum autem laudantium cum. Ut quasi modi libero nihil? Dignissimos, illo! Sit aperiam iste ipsam nesciunt quam quisquam vero hic suscipit porro tenetur, dolorem ab ea earum quasi, odit harum.</p>

     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus dolorem ut placeat est quo eos, perferendis repudiandae ipsum doloremque obcaecati beatae sapiente neque error impedit dolores vero? Dolorum minima eveniet rerum aut corporis recusandae? Omnis delectus qui labore soluta quaerat, nostrum animi voluptatem aperiam veniam at molestias officia quis ipsum, voluptatum, sed maiores. Dolorem minus, sit omnis dolorum eveniet libero labore ipsam quaerat porro esse voluptatibus, itaque error ducimus!</p>

     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga repudiandae delectus nemo omnis et accusamus perspiciatis quo voluptatum, blanditiis, similique mollitia illo nam voluptatem officiis dolore. Exercitationem labore omnis, minima quod iste doloribus ipsa neque recusandae voluptas id ea quo magnam laborum reprehenderit eveniet rerum. Illo ipsa harum facilis?</p>

     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, placeat aut? Deleniti ut cumque accusamus commodi at. Velit, deserunt libero?</p>
     
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum quisquam tempora doloribus earum nemo tenetur laboriosam quia voluptates cum repellendus maxime, sapiente illo blanditiis vitae distinctio, alias aliquid ea aut explicabo nam modi. Eaque, repellat deserunt quos consectetur, ipsa beatae temporibus, neque veniam ullam accusamus voluptate? Dolores molestias, eius delectus sit minima earum quaerat quasi consequatur dicta incidunt dolor asperiores fugit facere atque eligendi blanditiis doloremque illo ex. Iure delectus velit magni doloribus nulla! Non explicabo ducimus sed animi aut quo, quos molestias deleniti adipisci eius iusto qui hic iure molestiae odio cupiditate incidunt nobis, delectus nemo. Consequuntur error voluptas eius, quia laudantium mollitia debitis nostrum cupiditate ab corporis quasi sint! Maiores deserunt beatae odit incidunt ad dolor. Omnis alias illo rem quaerat deserunt consectetur laudantium tempore illum, voluptate, vitae ratione voluptates molestiae dolorem qui minima aut? Optio eius dolores veniam aut, ullam excepturi beatae praesentium. Quae minima eveniet explicabo. Obcaecati incidunt illum vel accusantium in sapiente quisquam itaque enim omnis quibusdam amet adipisci voluptates placeat, animi laborum cum eveniet. Fugiat, tempora animi. Unde veniam accusantium consequatur eaque voluptatem vel. Quidem, commodi inventore doloremque vitae itaque accusantium dolor. Ducimus dignissimos reprehenderit rem et minima itaque quibusdam numquam facere nisi.</p>

     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, ipsam.</p>
     </div>

   </article>
  )
}

export default About
