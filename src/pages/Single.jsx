import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" alt="" />
        <div className="user">
          <img
            src="https://dpemoji.com/wp-content/uploads/2023/02/Spiderman-DP-2.png"
            alt=""
          />
          <div className="info">
            <span>Srikanth</span>
            <p>Posted 2 days ago</p>
          </div>
      
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img  src={Delete} alt="" />
            </div>
        </div>
        <h1>People use Spiderman DPs on WhatsApp to show their love</h1>
        <p>A Spiderman DP, Images, and Photos for WhatsApp is a popular choice among fans of the web-slinging superhero. It typically features an image of Spiderman in his iconic red and blue costume, striking a pose or in action. People use Spiderman DPs on WhatsApp to show their love and admiration for the character, as well as to showcase their fandom.

Some users may also choose to use Spiderman DPs as a way to express their personality or mood. There are countless options for Spiderman DPs available online, making it easy for fans to find the perfect one to suit their preferences.
</p>  
<p>Marvel has featured Spider-Man in several comic book series, the first and longest-lasting of which is The Amazing Spider-Man. Over the years, the Peter Parker character developed from a shy, nerdy New York City high school student to a troubled but outgoing college student, then a married high school teacher, and, in the late 2000s, a single freelance photographer. In the 2000s, he joins the Avengers. Doctor Octopus also took on the identity for a story arc spanning 2012–2014, following a body swap plot in which Peter appears to die.[9] Marvel has also published comic books featuring alternate versions of Spider-Man, including Spider-Man 2099, which features the adventures of Miguel O'Hara, the Spider-Man of the future; Ultimate Spider-Man, which features the adventures of a teenage Peter Parker in the alternate universe; and Ultimate Comics: Spider-Man, which depicts a teenager named Miles Morales who takes up the mantle of Spider-Man after Ultimate Peter Parker's apparent death. Miles later became a superhero in his own right and was brought into mainstream continuity, where he sometimes works alongside Peter.</p>  
<p>Spider-Man is one of the most popular and commercially successful superheroes.[10] He has appeared in countless forms of media, including several animated TV series: the first original animated series Spider-Man, with Paul Soles voicing the titular character, a live-action television series, syndicated newspaper comic strips, and multiple series of films. Spider-Man was first portrayed in live-action by Danny Seagren in Spidey Super Stories, a recurring skit on The Electric Company from 1974 to 1977.[11] In live-action films, Spider-Man has been portrayed by actors Tobey Maguire in Sam Raimi's Spider-Man trilogy, by Andrew Garfield in two films directed by Marc Webb,[12] and in the Marvel Cinematic Universe by Tom Holland. Reeve Carney originally starred as Spider-Man in the 2010 Broadway musical Spider-Man: Turn Off the Dark.[13] Spider-Man was also voiced by Jake Johnson and Chris Pine in the animated film Spider-Man: Into the Spider-Verse. Spider-Man has been well-received as a superhero and comic book character; he is often ranked as one of the most popular and iconic comic book superheroes of all time and in all of fiction.

</p>  </div>
      <Menu/>
    </div>
  );
};

export default Single;
