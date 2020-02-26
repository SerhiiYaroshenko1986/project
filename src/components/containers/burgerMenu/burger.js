import React from "react";
import { Link } from "react-router-dom";
import ReduxBurgerMenu from "../burgerMenu/index";

class Burger extends React.Component {
  render() {
    console.log(this.props.isOpen + " burger");
    return (
      <ReduxBurgerMenu
        isOpen={this.props.isOpen}
        pageWrapId={"page-wrap"}
        right
        noOverlay
        stack
      >
        <Link className="pr-3 header-link menu-item" to="/">
          Home
        </Link>
        <Link className="pr-3 header-link menu-item" to="/about">
          About
        </Link>
        <Link className="pr-3 header-link menu-item" to="/delivery">
          Delivery
        </Link>
        <Link className="header-link menu-item" to="/contacts">
          Contacts
        </Link>
      </ReduxBurgerMenu>
    );
  }
}

export default Burger;
