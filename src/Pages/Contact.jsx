import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewslatterBox from "../Components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl border-t pt-10">
        <Title text1={"CONTACT "} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            406, Scarlet Gateway, Corporate Rd,Prahlad Nagar, Ahmedabad, Gujarat
          </p>
          <p className="text-gray-500">
            Tel: (123) 456 789 <br /> Email: admin@gmail.com
          </p>
          <p className="font-semibold text-gray-600 text-xl">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-tr-full rounded-bl-full ">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewslatterBox />
    </div>
  );
};

export default Contact;
