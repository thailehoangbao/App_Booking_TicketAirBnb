import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <div className="loader"></div>
    </div>
  )
}
