import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const getNavClass = ({ isActive }) =>
    isActive ? "side-nav-links active" : "side-nav-links";

  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <div className="side-nav-head">
          <p className="side-nav-eyebrow">Workspace</p>
          <h3>Explore</h3>
        </div>

        <button onClick={() => handleSlideIn?.()} className="nav-btn">
          <NavLink to="/" className={getNavClass}>
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div className="side-nav-section-title-wrap">
            <p className="side-nav-section-title">Public</p>
          </div>
          <button onClick={() => handleSlideIn?.()} className="nav-btn">
            <NavLink to="/Questions" className={getNavClass}>
              <img src={Globe} alt="Globe" />
              <p className="side-nav-link-text">Questions</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn?.()} className="nav-btn">
            <NavLink to="/Tags" className={getNavClass}>
              <p>Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn?.()} className="nav-btn">
            <NavLink to="/Users" className={getNavClass}>
              <p>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
