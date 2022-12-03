import React from "react";

const About = () => {
  return (
    <div className="pt-[91px]" id="about">
      <h1 className="w-full text-3xl font-bold text-center bg-pink-100 text-pink-600 py-2">
        <span>About</span>
      </h1>
      <section className="about">
        <div className="row">
          <div className="video-container">
            <video src="images/about-vid.mp4" loop autoPlay muted></video>
            <h3>Best Flower Sellers</h3>
          </div>
          <div className="content px-10">
            <h3 className="font-semibold">Why Choose Us?</h3>
            <p>
              We Deliver Quality Products, Where Quality Is Our Top Priority. We
              Ensure That We Exceed Beyond Our Customers Expectations. Great
              Design With A Reasonable Prices. We Provide The Best Care Of
              Delivery Service , Guaranteed Fresh And Long Lasting Products.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
