import React from 'react';
import { MdStarOutline } from 'react-icons/md';
import { FaMapMarkerAlt, FaLeaf } from 'react-icons/fa'; 
export default function Qualities() {
  return (
    <div className="flex flex-col mb-16 md:flex-row justify-around items-center bg-cover bg-center bg-fixed min-h-[70vh] p-6 md:p-12" 
         style={{ backgroundImage: "url('/images/coffee2.jpg')" }}>
      <div className="bg-white rounded-md shadow-sm p-6 text-center w-full h-72 md:w-96 flex flex-col justify-center items-center mb-6 md:mb-0">
        <MdStarOutline className="text-5xl mb-8" /> 
        <p className="text-4xl font-bold mb-8 text-secondary">2%</p>
        <h4 className="text-lg font-semibold">Handpicked for Quality</h4>
      </div>
      <div className="bg-white rounded-md shadow-lg p-6 text-center w-full h-72 md:w-96 flex flex-col justify-center items-center mb-6 md:mb-0">
        <FaLeaf className="text-5xl mb-8" /> 
        <p className="text-4xl font-bold mb-8 text-secondary">25+</p>
        <h4 className="text-lg font-semibold">Distinct Flavor Profiles</h4>
      </div>
      <div className="bg-white rounded-md shadow-lg p-6 text-center w-full h-72 md:w-96 flex flex-col justify-center items-center">
        <FaMapMarkerAlt className="text-5xl mb-8" />
        <p className="text-4xl font-bold mb-8 text-secondary">1</p>
        <h4 className="text-lg font-semibold">Single-Origin Ethiopian Coffee</h4>
      </div>
    </div>
  );
}
