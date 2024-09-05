import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewlatterBox from "../Components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-3/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto
            inventore explicabo similique ipsum numquam nemo et cupiditate.
            Architecto aperiam exercitationem reprehenderit dolore esse
            laudantium, aspernatur nesciunt soluta deserunt veritatis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            quisquam doloremque eius dolorem, placeat veritatis! Animi, itaque?
            Exercitationem, ipsum quis.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            minima. Sapiente sunt voluptatem veritatis facilis, quia assumenda
            delectus totam consequuntur distinctio nisi dolor ducimus ad magni
            amet minus? Cumque, numquam?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-5">
        <div className="border px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5  shadow-md hover:scale-105">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5  shadow-md hover:scale-105">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8  sm:py-20 flex flex-col gap-5  shadow-md hover:scale-105">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in.
          </p>
        </div>
      </div>
      <NewlatterBox />
    </div>
  );
};

export default About;
