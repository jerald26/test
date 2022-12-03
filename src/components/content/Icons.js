import React from "react";

const Icons = () => {
  return (
      <section className="icons-container">
        <div className="icons">
          <img src="images/icon-1.png" alt="" />
          <div className="info">
            <h3>Free Delivery</h3>
            <span>Within Calamba Bayan</span>
          </div>
        </div>
        <div className="icons">
          <img src="images/icon-3.png" alt="" />
          <div className="info">
            <h3>Free Card & Foil Balloon</h3>
            <span>With Minimum Order of ₱2,000</span>
          </div>
        </div>
        <div className="icons">
          <img src="images/icon-4.png" alt="" />
          <div className="info">
            <h3>Mode of Payment</h3>
            <span>
              G-Cash, Paymaya, Palawan, Cebuana, RCBC Online, Union Bank, BPI
              Bank
            </span>
          </div>
        </div>
      </section>
  );
};

export default Icons;
