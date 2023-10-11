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
        <button className="px-8 mx-2 py-2 border hover:bg-slate-400">
          <Link href="/call">Oui</Link>
        </button>
        <button className="px-8 mx-2 py-2 border hover:bg-slate-400">
          <Link href="/agressionNature">Non</Link>
        </button>
      </div>
    </div>
  );
};

export const Call = ({ heading, message }) => {
  const handleButtonClick = () => {
    // Redirect to the external website
    window.location.href = 'https://www.masecurite.interieur.gouv.fr/fr/fiches-pratiques/famille-et-aides-aux-victimes/17-police-secours';
  };

  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button
          className="px-8 mx-2 py-2 border hover:bg-slate-400"
          onClick={handleButtonClick}
        >
          Passer un appel
        </button>
      </div>
    </div>
  );
};

export const AgressionNature = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 mx-2 py-2 border hover:bg-slate-400">
          <Link href="/call">Physique</Link>
        </button>
        <button className="px-8 mx-2 py-2 border hover:bg-slate-400">
          <Link href="/call">Verbale</Link>
        </button>
        <button className="px-8 mx-2 py-2 border hover:bg-slate-400">
          <Link href="/call">écrit</Link>
        </button>
        <button className="px-8 mx-2 py-2 border color-fill-white hover:bg-slate-400">
          <Link href="/call">Suivant</Link>
        </button>
      </div>
    </div>
  );
};


export default Danger;