import React from "react";

const CustomerReview = () => {
  return (
    <div className="pt-[91px]" id="reviews">
      <h1 className="w-full text-3xl font-bold text-center bg-pink-100 text-pink-600 py-2">
        <span>
          <span className="text-gray-700">Customer's</span> Review
        </span>
      </h1>
      <section className="flex flex-wrap gap-5 justify-center items-center p-10">
        <div className="relative w-[400px] h-[250px] bg-gray-800 flex flex-col items-center rounded-md">
          <p className="text-zinc-200 text-md text-justify px-5 mt-5">
            <span className="text-pink-600 font-bold text-xl">" </span>Two thumbs up for Sir Rey. great service and great arrangement.
              kahit sabi nung isa flower shop near SM Calamba na hindi sila
              kilala but still SUPERB and highly recommended ko sila. last
              minute nagpakuha sya ng flower sa dangwa just to accommodate me
              despite of my late notice. God speed po. THE BEST!
            <span className="text-pink-600 font-bold text-xl"> "</span>
          </p>
          <h3 className="text-pink-600 text-xl font-bold absolute bottom-2 right-5">Jing Florante</h3>
        </div>
        <div className="relative w-[400px] h-[250px] bg-gray-800 flex flex-col items-center rounded-md">
          <p className="text-zinc-200 text-md text-justify px-5 mt-5">
            <span className="text-pink-600 font-bold text-xl">" </span>Super highly recommended 💯 your expectations through their
              pictures is what you can see in reality! What you see is what you
              get plus they will add awesome service pa! ☺️ Keep it up! More
              power to your business po!
            <span className="text-pink-600 font-bold text-xl"> "</span>
          </p>
          <h3 className="text-pink-600 text-xl font-bold absolute bottom-2 right-5">Paula Perez</h3>
        </div>
        <div className="relative w-[400px] h-[250px] bg-gray-800 flex flex-col items-center rounded-md">
          <p className="text-zinc-200 text-md text-justify px-5 mt-5">
            <span className="text-pink-600 font-bold text-xl">" </span>Thank po kuya rey flowers shop sa pag accommodate sa order nmin sa
              Willis medical aesthetic highly recommend po tlga super like po ng
              aming mga ambassadors 😊😊
            <span className="text-pink-600 font-bold text-xl"> "</span>
          </p>
          <h3 className="text-pink-600 text-xl font-bold absolute bottom-2 right-5">Marie Cris Felicia - Dondonilla</h3>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
