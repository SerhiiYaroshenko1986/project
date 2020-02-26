import React from "react";
import MyForm from "./form";
import MapContainer from "./maps";

const Contacts = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mt-5 p-0 map-container">
          <MapContainer />
        </div>
      </div>
      <div className="mt-5 row justify-content-around">
        <div className="col-md-5 col-sm-6 text-center">
          <MyForm />
        </div>
        <div className="col-md-5 col-sm-6 contacts-text">
          <h2 className="contacts-title mb-3 text-md-center">
            Customer service
          </h2>
          <p>
            <i className="pr-2 fa fa-phone-square" aria-hidden="true"></i>0370
            111 6565
          </p>
          <p>
            Our expert customer service team are ready to help with all customer
            service queries.
          </p>
          <p>
            <span className="pr-2">Monday - Friday:</span>
            <span>8am - 7pm</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
