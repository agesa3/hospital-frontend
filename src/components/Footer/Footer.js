import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <br />
            <br />
            <p className="text-center">
              &copy; {new Date().getFullYear()} - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
