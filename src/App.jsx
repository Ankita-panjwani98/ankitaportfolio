import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { TypeAnimation } from "react-type-animation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import ankitaImage from '/ankita-remove.png';
import "./App.css";

function App() {
  return (
    <>
      <div>
        <section className="hero-section">
          <nav className="nav-bar-section">
            <p>DEVELOPED BY AP</p>
            <div className="resume-bar">
              <p className="dark-mode-symbol">
                <BsFillMoonStarsFill />
              </p>
              <p className="resume-download-btn">Resume</p>
            </div>
          </nav>
          <div className="ankita-info-section">
            <p className="name-text">Ankita Panjwani<span className="dancing-ball"></span></p>
        
            <TypeAnimation
              sequence={[
                "Software Engineer..", // Types 'One'
                1000, // Waits 1s
                "Front End Developer..", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "MERN Stack Developer..", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="repeat-text"
            
            />
            <p className="subheadline">
            Experienced in building full-stack applications, merging frontend and backend functionalities seamlessly.⚡️ 🚀
            </p>
            <p className="social-icons"><AiFillTwitterCircle/><AiFillLinkedin/><AiFillYoutube/></p>
          </div>

          <div className="profile-image-container">
            <img className="profile-image" src={ankitaImage}/>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
