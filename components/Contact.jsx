import React from "react";
import Link from "next/link";
const Contact = ({ title, message, imgLink }) => {
  return (
    <div
      id="contactGrid"
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="/assoForm">
        <img
          className="rounded-t-lg"
          src={imgLink}
          alt="Description de l'image"
        />
      </a>
      <div className="p-5">
        <a href="/assoForm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {message}
        </p>
        <a
          href="/assoForm"
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
        title="Association1"
        message="Cette Association a pour but de ve lutter contre les agressions physiques"
        imgLink="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <Contact
        title="Association2"
        message="Cette Association a pour but de ve lutter contre les cas de harcellements sexuels"
        imgLink="https://images.unsplash.com/photo-1643321613180-68d62b93cb79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <Contact
        title="Association3"
        message="Cette Association a pour but de ve lutter contre les viols/tentatives de viols"
        imgLink="https://plus.unsplash.com/premium_photo-1681492071459-3a45f4289743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />
      {/* Ajoutez plus de composants Contact selon le nombre de cartes que vous voulez afficher */}
    </div>
  );
};


export default Contact;


