import React from "react";

const Contact = () => {
  return (
    <div className="pt-[91px]" id="contact">
      <h1 className="w-full text-3xl font-bold text-center bg-pink-100 text-pink-600 py-2">
        <span>Contact</span>
      </h1>
      <section className="contact">
        <div className="row">
          <form action="">
            <input type="text" placeholder="Name" className="box" />
            <input type="email" placeholder="Email Address" className="box" />
            <input type="number" placeholder="Contact Number" className="box" />
            <textarea
              name="Number"
              className="box"
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="Send Message.."
              className="cursor-pointer bg-gray-700 text-white px-5 py-2 rounded-full transition-colors duration-150 hover:bg-pink-600"
            />
          </form>
          <div className="image">
            <img src="/images/contact-img.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
