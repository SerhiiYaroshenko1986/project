import React from "react";
import Mycarousel from "../carousel";
import Sidebar from "../../sidebar";

const Layout = ({ children }) => (
  <div id="page-wrap" className="view-container">
    <div className="containe-fluid mb-3">
      <Mycarousel />
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </div>
  </div>
);

export default Layout;
