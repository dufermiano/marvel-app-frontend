import React, { useEffect, useState } from 'react';
import './Characters.css';
import { getCharacters } from '../../services/characters';

const Characters = (props) => {
  const [characterInformation, setCharacterInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await getCharacters();

        setCharacterInformation(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {characterInformation.map((item) => (
            <li key={item.id}>
              <a href={item.resourceURI}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Characters;
