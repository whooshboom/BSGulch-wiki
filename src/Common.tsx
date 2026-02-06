import React, { useState, Suspense, lazy } from "react";
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router';
import './Common.css';
import BSLogo from "../public/bslogo.png";

import { pageLinks, NavTree } from "./linkage";

/* TODO:
  - add loading, 404 pages.
  - Redirect to the welcome page on entry.
  - Fix animated parts on resize/slide.
  - Fix header/footer not covering everything on slide.
*/
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
      : 'translateX(calc(-80vw + 10px))'
  }

  console.log(pageLinks)

  return (
  <HashRouter>
    <div className='page-container'>
      <div className="header">
        <Link to="/welcome">
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
              <div className="sidebar-category">
                <div className="nav-category">
                  Important Resources:
                </div>
                <div className="nav-link-container"><Link className="nav-link" to={"./welcome"}>Welcome & About Bluestone</Link></div>
                <div className="nav-link-container"><Link className="nav-link" to={"./contributing"}>Contributing</Link></div>
                <div className="nav-link-container"><Link className="nav-link" to={"./welcome"}>Rules (unmade)</Link></div>
              </div>
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
              <Route path="/" element={<Navigate to="/welcome" replace />} />
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
