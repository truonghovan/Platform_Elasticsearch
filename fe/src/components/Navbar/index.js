import React from "react";

import { CDBNavbar, CDBInput } from "cdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Navbar = () => {
  return (
    <div
      style={{
        background: "#FFF",
        color: "#fff",
      }}
      className="header"
    >
      <CDBNavbar
        right
        dark
        expand="md"
        scrolling
        className="justify-content-center"
      >
        <CDBInput
          type="search"
          size="md"
          hint="Search"
          className="mb-n4 mt-n3 input-nav"
        />
        <div className="ml-auto ">
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-alt mx-4"></i>
          <img
            alt="panelImage"
            src="img/pane/pane4.png"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      </CDBNavbar>
    </div>
  );
};

export default Navbar;