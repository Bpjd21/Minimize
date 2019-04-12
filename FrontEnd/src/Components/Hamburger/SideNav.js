import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SideNav.css";

const sideNav = props => (
    <nav className="side_nav">
      <ul>
        <li><Link to={`/`} className="link">
          GOALS
        </Link></li>
        <li><Link to={`/`} className="link">
          BADGES
        </Link></li>
        <li><Link to={"/profile"} className="link">
          PROFILE
        </Link></li>
        <li><Link to={"/ResourcePage"} className="link">
          RESOURCES
        </Link></li>
        </ul>  
    </nav>


);

export default sideNav;