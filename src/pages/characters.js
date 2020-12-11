import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

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
      {characters.map((character) => {
        return (
          <div key={character.name}>
            <span>{character.name}</span>
          </div>
        );
      })}
    </Layout>
  );
};

export default Characters;
