import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({ socialImg, title, description, author }) => {
  const wordCount = description.split(/\s+/).length;
  const width = `${Math.min(150, wordCount) * 10}px`; // Ajustez selon vos besoins

  return (
    
    <div className="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-auto" style={{ width }}>
      <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={socialImg} alt="" />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">{author}</a>
      </div>
    </div>
  );
};


export default InstagramImg;
