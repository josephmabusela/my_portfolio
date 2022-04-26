import React from 'react'
import ReactDOM from 'react-dom'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">logo.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+27 658 4915 39</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mabuselakopano@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

    </div>
  )
}
