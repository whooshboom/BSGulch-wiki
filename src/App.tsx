import React, { useState } from "react";
import { createBrowserRouter, BrowserRouter, Routes, Route, Link } from 'react-router';
import { glob } from "glob";
import './Common.css';
import BSLogo from "../public/bslogo.jpg";
import Bluespace from "./wiki-pages/technology/bluespace";
import Species from "./wiki-pages/species/species";
import { OOCwarn } from "./CommonBlocks";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSidebar() {
    setIsOpen(!isOpen);
    }
  const sidebarStyles: React.CSSProperties = {
    transform: isOpen
      ? 'translateX(0)'
      : 'translateX(calc(-100% + 10px))',
    transition: 'transform 0.3s ease-in-out',
  }
  //TODO: Make clicking in the area outside of the sidebar also close it.
  const sidebuttonStyles: React.CSSProperties = {
    transform: isOpen
      ? 'translateX(0)'
      : 'translateX(calc(-80vw + 10px))',
    transition: 'transform 0.3s ease-in-out',
  }

  return (
  <BrowserRouter>
    <div className='page-container'>
      <div className="header">
        <img src={BSLogo}></img>
        <div className='head-text-group'>
          <div className="header-sub">
            <h2>Bluestone Gulch</h2>
            <h3>Subterreanean Research Facility</h3>
          </div>
          <div className="header-sub">
            <h1>Internal Wiki</h1>
          </div>
        </div>
      </div>
      <div className="decor-divider"></div>
      <div className="unheaded-area">
        <div className="sidebar">
          <div className="sidebar-content" style={sidebarStyles}>
            <div className="emphasis-block">
              <Link to="/technology/bluespace">Bluespace</Link>
              <Link to="/species/species">Species</Link>
            </div>
          </div>
          <button className="sidebar-button" onClick={toggleSidebar} style={sidebuttonStyles}>
          |||
          </button>
        </div>
        <div className="route-container">
            <Routes>
              <Route path="/technology/bluespace" element={<Bluespace />}></Route>
              <Route path="/species/species" element={<Species />}></Route>
            </Routes>
        </div>
      </div>
      <div className="decor-divider"></div>
      <div className="footer">
        <h3>All listed information is subject to the indicated information security policy. Sharing of secured information to unauthorized personnel is punishable accordingly, <span className="redwarn">up to and including committee-ordained imprisonment.</span></h3>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
