import React from "react";

const FeaturedProduct = () => {
  return (
    <div className="pt-[91px]" id="products">
      <h1 className="w-full text-3xl font-bold text-center bg-pink-100 text-pink-600 py-2">
        <span>
          <span className="text-gray-800">Best</span> Seller
        </span>
      </h1>
      <section className="flex flex-wrap gap-5 justify-center items-center p-10">
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/a4.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Lovely White
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/g2.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Red Romance
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/h1.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Dazzling Red
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/j3.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Sunrise
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/j2.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Hello
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/i5.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Heaven Scent
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/e3.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Felicity
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/d1.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              You're a Star
            </h3>
          </div>
        </div>
        <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/d4.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Mellow Yellow
            </h3>
          </div>
        </div>
        {/* <div className="group w-[350px] h-[370px] bg-white flex flex-col items-center relative cursor-pointer">
          <div className="w-[300px]">
            <img
              className="mt-1 w-full transition-all duration-300 scale-75 group-hover:scale-100"
              src="images/flowers/e4.png"
            />
          </div>
          <div className="absolute bottom-5">
            <h3 className="text-3xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-pink-600">
              Cool Blue
            </h3>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default FeaturedProduct;
