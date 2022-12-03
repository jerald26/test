import React from "react";

const Banner = () => {
  return (
    <section className="home" id="home">
      <div className="max-w-[650px] p-10">
        <h3 className="text-pink-600 text-2xl md:text-4xl mb-3 font-medium">We Don’t Just Create Bouquets… We Create Emotions.</h3>
        <p className="text-justify mb-5 text-zinc-500 text-sm md:text-lg">
          We Deliver In Our Nearby Municipalities And Provinces (Laguna,
          Batangas, Cavite And Metro Manila). We Also Cater Same Day Delivery
          And Pick Up At Kuya Rey Flower Shop, 137 Burgos St, Barangay Cinco
          Poblacion Calamba, 4027 Laguna
        </p>
        <a className="bg-gray-700 text-white px-5 py-2 rounded-full transition-colors duration-150 hover:bg-pink-600" href="#contact">
          Inquire Now
        </a>
      </div>
    </section>
  );
};

export default Banner;
