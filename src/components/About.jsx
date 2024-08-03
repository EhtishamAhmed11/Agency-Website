import React from "react";

const About = () => {
  return (
    <div >
      <div className="px-4 lg:px-14 max-w-screen-2xl my-8 mx-auto" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src="src\images\Frame 35.png" alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit debitis adipisci sint voluptatem nihil quo rerum
              exercitationem labore. Aspernatur, architecto consectetur. Odio
              distinctio quo aliquid. Consequatur earum enim deleniti
              consequuntur!
            </p>
            <button className="btn_primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit debitis adipisci sint voluptatem nihil quo rerum
              exercitationem labore. Aspernatur, architecto consectetur. Odio
              distinctio quo aliquid. Consequatur earum enim deleniti
              consequuntur!
            </p>
          </div>
          {/*  */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12" >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="src\images\icons\s_Icon.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    46,328
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="src\images\icons\s_Icon1.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    828,862
                  </h4>
                  <p>Event Booking</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="src\images\icons\s_Icon2.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="src\images\icons\s_Icon3.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,924,341
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
