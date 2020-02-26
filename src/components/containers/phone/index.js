import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPhoneById, addPhoneToBasket } from "../../actions/index";
import { getPhoneById } from "../../selectors";

import BasketCart from "../../basketCart";

class Phone extends Component {
  componentDidMount() {
    const phoneId = this.props.match.params.id;
    this.props.fetchPhoneById(phoneId);
  }
  renderContent() {
    const { phone } = this.props;
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />

            <div className="caption-full">
              <h4>{phone.price}$</h4>
              <h4>{phone.name}</h4>
              <p>{phone.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <span className="phone-details-title">Proccesor</span>
              <span className="phone-details-text">{phone.cpu}</span>
            </div>
            <div className="mb-3">
              <span className="phone-details-title">Memory</span>
              <span className="phone-details-text"> {phone.memory}</span>
            </div>
            <div className="mb-3">
              <span className="phone-details-title">Size</span>
              <span className="phone-details-text">{phone.size}</span>
            </div>
            <div className="mb-3">
              <span className="phone-details-title">Weight</span>
              <span className="phone-details-text">{phone.weight}</span>
            </div>
            <div className="mb-3">
              <span className="phone-details-title">Memory</span>
              <span className="phone-details-text"> {phone.memory}</span>
            </div>
            <div className="mb-3">
              <span className="phone-details-title">Battery</span>
              <span className="phone-details-text"> {phone.battery}</span>
            </div>
            <div>
              <span className="phone-details-title">Camera </span>
              <span className="phone-details-text">{phone.camera}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderSidebar() {
    const { phone, addPhoneToBasket } = this.props;

    return (
      <div>
        <p className="lead">Quick Shop</p>
        <BasketCart />
        <div className="form-group">
          <h1 className="phone-name">{phone.name}</h1>
          <h2>{phone.price}$</h2>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Back to store
        </Link>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={() => addPhoneToBasket(phone.id)}
        >
          Add to cart
        </button>
      </div>
    );
  }
  render() {
    const { phone } = this.props;
    console.log(this.props.phone);
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">{phone && this.renderContent()}</div>
            <div className="col-md-3">{phone && this.renderSidebar()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  };
};

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
