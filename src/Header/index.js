import React from "react";
import "./Header.scss";
import Logo from "./Logo";

function header() {
  return (
    <div>
      <div className="header">
        <Logo />
      </div>
    </div>
  );
}

export default header;
