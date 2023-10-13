import { useRouter } from "next/router";
import React, { useState } from "react";

const TestimonyForm = () => {
  const [dataForm, setDataForm] = useState({
    title: "",
    text: "",
    name: "",
    imageUrl: ""
  });
  const [message, setMessage] = useState("");
  
  const router = useRouter(); // Make sure to call hooks at the top level
  
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/temoins', {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.message);
      router.push('/#instagram');  // Now router is already defined, and this should work.
    })
    .catch(error => {
      console.error('Error:', error);
      setMessage("Error submitting form.");
    });
  };

  return (


    <div className="min-w-[35rem] max-w-md mx-auto bg-white p-8 py-10 rounded-md shadow-md backdrop-blur-lg bg-opacity-20">
      <h2 className="text-2xl font-semibold mb-6">Fournir son témoignage</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600"
            htmlFor="name">Prénom :</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            value={dataForm.name}
            onChange={handleChange}
            required
          />
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600"
            htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={dataForm.title}
            onChange={handleChange}
            required
          />
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600"
            htmlFor="text">Description :</label>
          <textarea
            type="text"
            id="text"
            name="text"
            className="min-h-[12rem] mt-1 p-2 w-full border rounded-md"
            value={dataForm.text}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600"
            htmlFor="imageUrl">Image :</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="mt-1 p-2 w-full border rounded-md"
            value={dataForm.imageUrl}
            onChange={handleChange}
            required
          />
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

export default TestimonyForm