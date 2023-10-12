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


  // console.log("set state : ", setState);

  return (
    <div id="instagram" className="max-w-[100vw] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Témoignages anonymes </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 p-4">


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

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 p-4">
        <InstagramImg
          socialImg="https://images.unsplash.com/photo-1672253290825-ea76ddc71e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          title="3 ans de harcèlement"
          description="Trois ans de ma vie engloutis dans les abysses du harcèlement, orchestré par celui qui aurait dû être un guide professionnel. Mon patron, source de mon cauchemar quotidien. Les sévices psychologiques, les commentaires dégradants, et le climat toxique m'ont dévastée. Chaque jour était une bataille pour préserver ma dignité, étouffée par la peur et la honte. L'impact sur ma santé mentale était dévastateur. La lutte pour la reconnaissance et la justice était épuisante, mais je persiste. Nous, les survivantes, devons briser le silence, éveiller les consciences, et exiger que chaque lieu de travail soit un sanctuaire, non un piège. Il est temps de mettre fin à cette tyrannie insidieuse et de construire un monde où le respect règne et où la voix de chaque victime est entendue."
          author="Ano #128"
        /> */}



        {/* <InstagramImg
          socialImg="https://images.unsplash.com/photo-1504447998170-f10353b5cb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          title="Le silence enfin brisé"
          description="Trois années de harcèlement insoutenable, tissées dans le quotidien par un patron abusif. Les mots dégradants, les gestes déplacés, une torture psychologique constante. Chaque journée était une lutte pour la dignité, perdue dans la peur et l'humiliation. Le silence pesait lourd, mais la résilience persistait. Briser le silence, un pas vers la guérison. Nous devons éclairer l'ombre du harcèlement, exiger justice, et édifier des lieux de travail exempts de toute tyrannie. Anonyme, mais pas silencieuse. #Survivante"
          author="Ano #27"
        />
        <InstagramImg
          socialImg="https://images.unsplash.com/photo-1424896041628-083a222840f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          title="Merci à nonCnon"
          description="Je tiens à exprimer ma gratitude envers SafeWork pour leur soutien inestimable. J'ai vécu une période difficile de harcèlement par une collègue, mais grâce à cette plateforme, j'ai trouvé l'aide nécessaire. Leur équipe dévouée m'a guidé à travers le processus, assurant confidentialité et professionnalisme. Enfin libéré de cette situation toxique, je suis reconnaissant envers SafeWork pour avoir restauré ma tranquillité d'esprit. Merci infiniment."
          author="Ano #76"
        />
        <InstagramImg
          socialImg="https://images.unsplash.com/photo-1672253290825-ea76ddc71e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          title="harcèlement"
          description="Trois ans de ma vie engloutis dans les abysses du harcèlement, orchestré par celui qui aurait dû être un guide professionnel. Mon patron, source de mon cauchemar quotidien. Les sévices psychologiques, les commentaires dégradants, et le climat toxique m'ont dévastée. Chaque jour était une bataille pour préserver ma dignité, étouffée par la peur et la honte. L'impact sur ma santé mentale était dévastateur. La lutte pour la reconnaissance et la justice était épuisante, mais je persiste. Nous, les survivantes, devons briser le silence, éveiller les consciences, et exiger que chaque lieu de travail soit un sanctuaire, non un piège. Il est temps de mettre fin à cette tyrannie insidieuse et de construire un monde où le respect règne et où la voix de chaque victime est entendue."
          author="Ano #18"
        /> */}

      {/* </div> */}


    </div>
  );
}



export default Instagram; 