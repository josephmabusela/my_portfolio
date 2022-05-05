import "./intro.scss";
import profile from './profile.jpg';
import { init } from 'ityped'
import {useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 2000,
      backSpeed: 60,
      strings: ['Freelancer', 'Designer', 'Content Creator'], 
    })
  },[])

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Kopano Joseph. M</h1>
            <h3>Web Developer <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
          </a>
         
        </div>
    </div>
  )
}
