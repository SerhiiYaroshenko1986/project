import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 footer-cop text-center">
          2020 All rights reserved &copy;.
        </div>
        <div className="col-md-8 footer-cop text-center">
          Made with love by Serhii Yaroshenko
        </div>
        <div className="col-md-5 text-center">
          <a className="pr-4" href="http://www.facebook.com" target="_blank">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a className="pr-4" href="http://www.twitter.com" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="pr-4" href="http://www.instagram.com">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
