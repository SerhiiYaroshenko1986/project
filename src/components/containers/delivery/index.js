import React from "react";

const Delivery = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-5 delivery-title">
        <div className="col-md-6 col-lg-5  text-center">
          <h2>All about deliveries</h2>
        </div>
      </div>
      <div className="row delivery-items">
        <div className="col-md-6 col-lg-3 text-center p-0">
          <img src="/uploads/deliveryOrder.png" alt="order" />
          <h4>Where's my order</h4>
          <ul className="delivery-list text-left">
            <li>
              <a href="#">Track my DPD order</a>
            </li>
            <li>
              <a href="#">I didn't get an email confirming my order</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 text-center p-0">
          <img src="/uploads/deliveryAbout.png" alt="about" />
          <h4>About deliveries</h4>
          <ul className="delivery-list  text-left">
            <li>
              <a href="#">Where we deliver to</a>
            </li>
            <li>
              <a href="#">Delivery costs</a>
            </li>
            <li>
              <a href="#">Delivery options available</a>
            </li>
            <li>
              <a href="#">Do I need to sign for my delivery?</a>
            </li>
            <li>
              <a href="#">What time of day do DPD deliver?</a>
            </li>
            <li>
              <a href="#">Will all my items arrive together?</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 text-center p-0">
          <img src="/uploads/deliveryTrouble.png" alt="troubleshooting" />
          <h4>Troobleshooting</h4>
          <ul className="delivery-list  text-left">
            <li>
              <a href="#">Can I change a delivery address?</a>
            </li>
            <li>
              <a href="#">How do I cancel or change an order?</a>
            </li>
            <li>
              <a href="#">
                There's something missing from my order, what can I do?
              </a>
            </li>
            <li>
              <a href="#">It won't fit through the letterbox</a>
            </li>
            <li>
              <a href="#">I missed my delivery, what can I do?</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-3 text-center p-0">
          <img src="/uploads/deliveryClick.png" alt="order" />
          <h4>Click &#38; Collect</h4>
          <ul className="delivery-list text-left">
            <li>
              <a href="#">
                Having an order delivered to a store using Click &#38; Collect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
