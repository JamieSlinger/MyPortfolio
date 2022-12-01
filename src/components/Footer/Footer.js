import React from "react";
import CV from "../../assets/JamieSlingerCV1.pdf";
import {saveAs} from 'file-saver'
import "./Footer.css";
import { AiFillGithub, AiFillPhone, AiOutlineMail } from "react-icons/ai";


const STATIC_LINKS = [
  {
    name: "Email",
    icon: <AiOutlineMail color="inherit" />,
    link: "mailto:slingerjamie123@gmail.com",
  },

  {
    name: "Github",
    icon: <AiFillGithub color="inherit" />,
    link: "https://github.com/JamieSlinger",
  },

  {
    name: "Call",
    icon: <AiFillPhone color="inherit" />,
    link: "tel:0624037728",
  },
];

function Footer() {

  const onClickHandler = () => {
    saveAs(CV, 'JamieSlingerCV.pdf')
  }
  
  return (
    <div className="contact_section">
      <ul className="social_links">
        {STATIC_LINKS.map((staticLink) => (
          <li key={staticLink.name}>
            {staticLink.icon}
            <a href={staticLink.link} target="_blank" className="social_links-text">
              {staticLink.name}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={onClickHandler}>Download CV</button>
    </div>
  );
}

export default Footer;
