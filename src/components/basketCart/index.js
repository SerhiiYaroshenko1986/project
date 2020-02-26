import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTotalBasketCount, getTotalBasketPrice } from "../selectors";

const BasketCart = ({ totalBasketCount, totalPrice }) => {
  return (
    <div className="cart">
      <div className="dropdown">
        <Link
          to="/basket"
          id="dLabel"
          className="btn btn-inverse btn-block btn-lg"
        >
          <span>
            {totalBasketCount} item(s) - ${totalPrice}
          </span>
          <i class="pl-3 cart-size fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalBasketPrice(state)
  };
};

export default connect(mapStateToProps, null)(BasketCart);
