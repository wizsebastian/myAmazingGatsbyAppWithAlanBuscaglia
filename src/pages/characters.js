import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  CharacterCard,
  CharacterImage,
  CharacterName,
  CharacterData,
} from '../styles'

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
      setCharacters(data.results);
    } catch (error) {}
  };
  console.log('DATA', characters);
  return (
    <Layout>
      {/* {characters.map((character) => {
        return (
          <div key={character.name}>
            <span>{character.name}</span>
          </div>
        );
      })} */}
       <div>
           <div className="container">
             <div className="row">
               {characters && characters.map((data) => (
                   <div className="col-sm-4">
                     <CharacterCard>
                     <span className="badge badge-secondary">{data.gender}</span>
                       <CharacterImage>
                         <img src={data.image} alt={data.name} />
                       </CharacterImage>
                       <div className="row mt-2">
                        
                         <div className="col-12 text-center">
                           <CharacterName>{data.name}</CharacterName>
                         </div>
  
                         <div className="col-3"><b>Specie:</b></div>
                         <div className="col-9">
                           <CharacterData>{data.species}</CharacterData>
                         </div>
                         <div className="col-3"><b>Status</b></div>
                         <div className="col-9">
                           <CharacterData>Status: {data.status}</CharacterData>
                         </div>
                       </div>
                     </CharacterCard>
                   </div>
                 ))}
             </div>
           </div>
         </div>
    </Layout>
  );
};

export default Characters;
