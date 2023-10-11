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


export const Physique = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        
        {/* Question 1: Description des incidents de harcèlement physique */}
        <label className="text-lg" htmlFor="descriptionPhysique">
          Pouvez-vous décrire en détail les incidents de harcèlement physique que vous avez subis ?
        </label>
        <textarea
          id="descriptionPhysique"
          name="descriptionPhysique"
          className="w-full p-2 border rounded"
        ></textarea>
        
        {/* Question 2: Auteur des actes de harcèlement physique */}
        <label className="text-lg" htmlFor="auteurPhysique">
          Qui était l'auteur de ces actes de harcèlement physique ?
        </label>
        <input
          id="auteurPhysique"
          name="auteurPhysique"
          type="text"
          className="w-full p-2 border rounded"
        />
        
        {/* Question 3: Lieu et date des incidents */}
        <label className="text-lg" htmlFor="lieuDatePhysique">
          Où et quand ces incidents de harcèlement physique ont-ils eu lieu ?
        </label>
        <input
          id="lieuDatePhysique"
          name="lieuDatePhysique"
          type="text"
          className="w-full p-2 border rounded"
        />
        
        {/* Vous pouvez ajouter d'autres questions ici en suivant le même modèle */}
        
        <button className="px-8 mx-2 py-2 border hover:bg-slate-400">
          <Link href="/call">J'ai été touché dans</Link>
        </button>
        <button className="px-8 mx-2 py-2 border hover-bg-slate-400">
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
        <button className="px-8 mx-2 py-2 border hover:bg-slate-400" onClick={handleButtonClick}>
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
          <Link href="/physiqueType">Physique</Link>
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
