import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as R from "ramda";

import {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories,
  sortByPriceDown,
  sortByPriceUp
} from "../../actions/index";
import { getPhones } from "../../selectors";
import Layout from "../layout/index";

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
    this.props.fetchCategories();
  }

  renderPhone(phone, index) {
    const shortDescription = `${R.take(60, phone.description)}...`;
    const { addPhoneToBasket } = this.props;
    return (
      <div className="col-sm-6 col-lg-4 col-md-6 book-list mb-3" key={index}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          <div className="caption">
            <h4 className="pull-right phone-text">${phone.price}</h4>
            <h4 className="phone-text">
              <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
            </h4>
            <p>{shortDescription}</p>
            <p className="itemButton">
              <button
                className="btn btn-primary"
                onClick={() => addPhoneToBasket(phone.id)}
              >
                Buy Now!
              </button>
              <Link
                to={`/phones/${phone.id}`}
                className="btn btn-default btn-border"
              >
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      phones,
      loadMorePhones,
      sortByPriceUp,
      sortByPriceDown
    } = this.props;
    console.log(phones, "render");
    return (
      <Layout>
        {/* <div className="row">
          <span>Sorting by price</span>
          <button onClick={() => sortByPriceUp(phones)}>Price Up</button>
          <button onClick={() => sortByPriceDown(phones)}>Price Down</button>
        </div> */}
        <div className="books row">
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <button
              onClick={loadMorePhones}
              className="pull-right btn btn-primary"
            >
              Load More
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps)
});

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories,
  sortByPriceDown,
  sortByPriceUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
