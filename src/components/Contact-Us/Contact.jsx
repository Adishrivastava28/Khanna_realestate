import React from "react";
import a from "./contact.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
const Contact = () => {
  return (
    <div>
      <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="-mt-24 flex flex-col items-center justify-center md:h-screen">
        <img className="object-cover w-full h-full" src={a} alt="Full screen" />
        <div className="-mt-12  sm:-mt-16 md:absolute  md:bottom-0 md:left-0 md:right-0 bg-black bg-opacity-50 text-white text-center p-4">
          <p className=" md:text-3xl sm:text-xl  text-[8px] md:px-20 md:pb-6">
            CONTACT US
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {/* CONTACT US ON */}
        <div className="my-6 flex justify-center p-4">
          <p className="text-3xl font-mono border-4 border-gray-400 border-t-transparent border-r-transparent  border-l-transparent">
            CONTACT US ON: 123456789
          </p>
        </div>
        {/* "WHAT CAN WE HELP YOU WITH" TEXT */}
        <div className="flex justify-center  ">
          <p className="text-lg border-4 border-gray-400 border-t-transparent border-r-transparent  border-l-transparent ">
            WHAT CAN WE HELP YOU WITH ?
          </p>
        </div>
        {/* Select Button */}
        <div className="flex justify-center  ">
          <select className=" block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4 border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none ">
            <option>Select Option</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        {/* Name Input */}
        <div className="flex justify-center p-4">
          <input
            type="text"
            placeholder="Name"
            className="block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Email Input */}
        <div className="flex justify-center p-4">
          <input
            type="email"
            placeholder="Email"
            className="block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-whitebg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Location Input */}
        <div className="flex justify-center p-4">
          <input
            type="text"
            placeholder="Location"
            className="block w-full focus:border-b-slate-950 focus:scale-105 duration-1000 sm:w-1/2 bg-whitebg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Contact Number Input */}
        <div className="flex justify-center p-4">
          <input
            type="tel"
            placeholder="Contact Number"
            className="block w-full sm:w-1/2 focus:border-b-slate-950 focus:scale-105 duration-1000 bg-white border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none "
          />
        </div>
        {/* Message Textarea */}
        <div className="flex justify-center p-4">
          <textarea
            placeholder="Message"
            className="block w-full sm:w-1/2 bg-white  border-4  border-gray-400 border-t-transparent border-r-transparent  border-l-transparent rounded-md py-2 px-4 focus:outline-none focus:border-b-slate-950 focus:scale-105 duration-1000"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center p-4">
          <button className=" sm:w-52 bg-black hover:bg-stone-800 hover:scale-110 duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
