import { Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex items-center">
        <Carousel className="w-full h-full">
          <div className="h-full flex items-center justify-center">
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 w-full">
              <div>
                <img src="src/images/Illustration.png" alt="" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  Lessons and insights{" "}
                  <span className="text-brandPrimary leading-snug">from 8 years</span>
                </h1>
                <p className="text-neutralGrey text-base mb-8">
                  Where to grow your business as a photographer: site or social media?
                </p>
                <button className="btn_primary">Register</button>
              </div>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
};

export default Home;
