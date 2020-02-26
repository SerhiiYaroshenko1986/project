import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Link } from "react-router-dom";

import { removePhoneFromBasket, cleanBasket } from "../../actions";
import { getBasketPhonesWithCount, getTotalBasketPrice } from "../../selectors";

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,

  cleanBasket
}) => {
  const isBasketEmpty = R.isEmpty(phones);
  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>Your shopping cart is empty</div>}
      <div className="table-responsive">
        <table className="table-bordered table-striped table-condensed cf">
          <tbody>
            {phones.map((phones, index) => (
              <tr key={index} className="item-checout">
                <td className="first-column-checkout">
                  <img
                    className="img-thumbnail"
                    src={phones.image}
                    alt={phones.name}
                  />
                </td>
                <td>{phones.name}</td>
                <td>{phones.price}$</td>
                <td>{phones.count}</td>
                <td>
                  <span
                    onClick={() => removePhoneFromBasket(phones.id)}
                    className="delete-cart"
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {R.not(isBasketEmpty) && (
        <div className="row justify-content-end">
          <div className="pull-right total-user-checkout">
            <strong>Total:</strong>
            {totalPrice}$
          </div>
        </div>
      )}
    </div>
  );
  const renderSideBar = () => (
    <div>
      <Link to="/" className="btn-info btn">
        <span className="glyphicon glyphicon-info-sign"></span>
        <span>Continue shopping!</span>
      </Link>
      {R.not(isBasketEmpty) && (
        <div>
          <button onClick={cleanBasket} className="btn btn-danger">
            <span className="glypchicon glyphicon-trash"></span>
            Clean cart
          </button>
          <button
            className="btn btn-success"
            onClick={() => alert(JSON.stringify(phones))}
          >
            <span className="glyphicon glyphicon-envelop"></span>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSideBar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  };
};

const mapDispatchToProps = {
  removePhoneFromBasket,
  cleanBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
