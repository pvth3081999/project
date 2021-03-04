import React from 'react';
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="header_left ">LOGO</div>
      <div className="header_center">Blogs</div>
      <div className="header_right">
        <img src="avatar.png" alt="Smiley face" width="80px"/>
        <span className="header_right_span"> Admin</span>
      </div>
    </div>
  )
}
