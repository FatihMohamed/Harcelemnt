import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import { useState, useEffect } from 'react';

import InstagramImg from './InstagramImg';

const Instagram = (props) => {

  const [state, setState] = useState(false);

  useEffect(() => {
    newTemoignage()
  }, [])

  const newTemoignage = () => {
    fetch("/api/temoins")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('API Data:', data); // Log data for debugging
        setState(data.harcelementList);
      })
      .catch(error => {
        console.error('Fetch Error:', error);
      });
  };

  return (
    <div id="instagram" className="max-w-[100vw] mx-auto text-center py-24">
      <p className="text-2xl font-bold mb-16">Témoignages anonymes </p>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 p-4">

        {Array.isArray(state) && state.map((item, index) => (
          <InstagramImg
            key={index}
            title={item.title}
            socialImg={item.imageUrl}
            description={item.text}
            author={item.name}
          />
        ))}
        
      </div>

    </div>
  );
}



export default Instagram; 