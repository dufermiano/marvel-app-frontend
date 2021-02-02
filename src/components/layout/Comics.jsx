import React, { useEffect, useState } from 'react';
import './Comics.css';
import { getComics } from '../../services/comics';

const Comics = (props) => {
  const [comicsInformation, setComicsInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComics = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await getComics();

        setComicsInformation(result);
        console.log('INFORMAÇÃO', comicsInformation);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchComics();
  }, []);

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {comicsInformation.map((item) => (
            <li key={item.id}>
              <img src={item.imagePath} alt="" />
              <a href={item.resourceURI}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comics;
