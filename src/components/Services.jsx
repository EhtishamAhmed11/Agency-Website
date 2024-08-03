import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "src/images/icons/Vector.png",
    },
    {
      id: 2,
      title: "National Associations",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "src/images/icons/vector 2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "src/images/icons/vector 3.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {/* logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="src\images\icons\c_logo1.png" alt="" />
          <img src="src\images\icons\c_logo2.png" alt="" />
          <img src="src\images\icons\c_logo3.png" alt="" />
          <img src="src\images\icons\c_logo4.png" alt="" />
          <img src="src\images\icons\c_logo5.png" alt="" />
          <img src="src\images\icons\c_logo6.png" alt="" />
          <img src="src\images\icons\c_logo7.png" alt="" />
        </div>
      </div>
      {/* service card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center  ">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralDGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
      {services.map((service) => (
        <div
          key={service.id}
          className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex flex-col items-center justify-center bg-white">
          <div className="bg-[#E8F5E9] mb-4 h-14 w-14 flex items-center justify-center rounded-full">
            <img src={service.image} className="h-8" alt="" />
          </div>
          <h4 className="text-2xl font-bold text-neutralDGrey mb-2">{service.title}</h4>
          <p className="text-sm text-neutralGrey px-4">{service.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
