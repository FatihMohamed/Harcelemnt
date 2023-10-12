import React from "react";
import Link from "next/link";

const Contact = ({ title, message, imgLink }) => {
  return (
    <div
      id="contactGrid"
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="https://harcelement-france.com/">
        <img
          className="rounded-t-lg"
          src={imgLink}
          alt="Description de l'image"
        />
      </a>
      <div className="p-5">
        <a href="https://notreaccord.com/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {message}
        </p>
        <a
          href="https://notreaccord.com/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contacter
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export const ContactGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Répétez le composant Contact pour chaque carte */}
      <Contact
        title="notreaccord"
        message="Particulier ou entreprise, réglez votre conflit avec un médiateur certifié et spécialisé près de chez vous."
        imgLink="https://blog.notreaccord.com/wp-content/uploads/2020/07/Logo_notre_accord_1-copie.png"
      />
      <Contact
        title="ASSOCIATION LE CAP"
        message="L’association a pour objet : • L’accueil, l’écoute, l’information et l’accompagnement de toute personne victime d'infraction liée aux violences au sein du couple, familiales et aux violences sexuelles et sexistes, que ces violences soient dans la sphère privé, publique, au travail "
        imgLink="https://harcelement-france.com/wp-content/uploads/2019/10/Le-Cap.png"
      />
      <Contact
        title="Care"
        message="CARE est une association de solidarité internationale qui lutte contre les inégalités dans des situations d'urgence et de développement."
        imgLink="https://www.carefrance.org/wp-content/uploads/2022/01/logo-care.svg"
      />
      {/* Ajoutez plus de composants Contact selon le nombre de cartes que vous voulez afficher */}
    </div>
  );
};


export default Contact;

