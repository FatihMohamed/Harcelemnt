import React from "react";
import Link from "next/link";

const Danger = ({ heading, message }) => {
    return (
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-10rem]">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <button className="px-8 mx-2 py-2 border ">
            <Link href="/call">Oui</Link>
          </button>
          <button className="px-8 mx-2 py-2 border ">
            <Link href="/protectform">Non</Link>
          </button>
        </div>
      </div>
    );
  };
  

  export default Danger;

  export const Call = ({ heading, message }) => {
    return (
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-10rem]">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <button className="px-8 mx-2 py-2 border ">
            <Link href="/call">call</Link>
          </button>
          <br />
          <button className="px-8 mx-2 py-2 border ">
            <Link href="/protectform">Non</Link>
          </button>
        </div>
      </div>
    );
  };