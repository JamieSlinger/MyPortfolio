import React from "react";
import Picture from "../../assets/pic.jpeg";

import "./Main.css";

function Main() {
  return (
    <div className="content">
        <div className='about_section'>
          <img src={Picture} alt="Avatar" className='avatar'/>
          <div  className='about_section-text'>
            <h2>Welcome to my portfolio.</h2>
            <p className="p1">
              I’m Jamie, a 22-year-old Btech Computer Engineer graduate living in
              Cape Town and currently working part time at Woolworths. Working at
              Woolworths taught me the power of teamwork and how much a great team
              can accomplish together, it also improved my interpersonal skills.
              During my studies I was exposed to many programming languages,
              databases, electronic communications and more. In my spare time I
              enjoy spending time with my family and training at the gym. Training
              at the gym has been very beneficial to me because it requires
              discipline and is goal oriented. Being physically active during the
              day also increases energy levels as well as self-esteem. It is also a
              great place to meet new people with similar goals as your own, which
              creates a very supportive environment.
            </p>
          </div>
        </div>
        <h3>Why Sovtech?</h3>
        <p className="p2">
          I have a strong interest in software development, seeking for a
          graduate program to develop my potentials and create a strong
          foundation for my future career. I am interested in getting placed at
          Sovtech because I have heard many great things about the company, and
          I will gain experience in creating and contributing to applications
          that will be used by clients. I will also be working and gaining
          experience with frameworks that are hot and trending. Another great
          attribute to Sovtechs graduate program is that graduates get guidance
          and exposed to experienced developers who has implemented in amazing
          architecture solutions, which is also great for networking.
        </p>
        <h3>Contact Information</h3>
      </div>
  );
}
export default Main;
