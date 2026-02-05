import React, { useState, Suspense, lazy } from "react";
import { createHashRouter, HashRouter, Routes, Route, Link } from 'react-router';
import { glob } from "glob";
import './Common.css';
import BSLogo from "../public/bslogo.png";

import { pageLinks, NavTree } from "./linkage";

import Bluespace from "./wiki-pages/technology/bluespace";
import Species from "./wiki-pages/species/species";
import Welcome from "./wiki-pages/welcome";
import Contributing from "./wiki-pages/contributing";
import Information_Security from "./wiki-pages/policy-and-paperwork/information-security";

import { OOCwarn } from "./CommonBlocks";

const Common = () => {
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

  console.log(pageLinks)

  return (
  <HashRouter>
    <div className='page-container'>
      <div className="header">
        <Link to="/">
          <img src={BSLogo} className="bslogo"></img>
        </Link>
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
          <div className="sidebar-area" style={sidebarStyles}>
            <div className="sidebar-content">
              <NavTree />
            </div>
          </div>
          <button className="sidebar-button" onClick={toggleSidebar} style={sidebuttonStyles}>
          |||
          </button>
        </div>
        <div className="route-container">
          <Suspense fallback={<div>Loading Page...</div>}>
            <Routes>
              {Object.entries(pageLinks).map(([path, Component]) => (
                <Route 
                  key={path} 
                  path={`/${path}`} 
                  element={<Component />}
                  />
              ))}
              <Route path='*' element={<div>shits fucked my guy</div>}></Route>
            </Routes>
          </Suspense>
        </div>
      </div>
      <div className="decor-divider"></div>
      <div className="footer">
        <h3>All listed information is subject to the indicated information security policy. Sharing of secured information to unauthorized personnel is punishable accordingly, <span className="redwarn">up to and including committee-ordained imprisonment.</span></h3>
      </div>
    </div>
    </HashRouter>
  );
};

export default Common;
