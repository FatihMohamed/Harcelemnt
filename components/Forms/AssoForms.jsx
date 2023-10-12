import React from "react";
import Link from "next/link";


export const AssoForms = () => {
    return (
      <div className="max-w-md mx-auto bg-white p-8 my-10 rounded-md shadow-md backdrop-blur-lg bg-opacity-20">
        <h2 className="text-2xl font-semibold mb-6">Formulaire de contact de l'association</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Objet du message
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Ex: signalement d'un harcèlement"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Exprimez votre intérêt pour l'association..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900 focus:outline-none focus:ring focus:border-blue-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  };
  
  