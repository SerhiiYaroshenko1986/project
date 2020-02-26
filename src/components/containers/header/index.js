import React from "react";

import Burger from "../burgerMenu/burger";

const Header = () => {
  return (
    <div className="header container mb-3 mt-3">
      <div className="row justify-content-between m-0">
        <div className="col-md-4 header-logo">CARPHONE WAREHOUSE</div>
        <div className="col-md-8 d-flex justify-content-end menu">
          <Burger />
        </div>
      </div>
    </div>
  );
};
export default Header;
