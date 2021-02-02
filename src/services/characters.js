import { get } from 'axios';

const options = {
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    accepts: 'application/json',
    'content-type': 'application/json',
    'x-api-key': process.env.REACT_APP_API_KEY,
    'x-access-token': process.env.REACT_APP_ACCESS_KEY,
  },
  timeout: process.env.REACT_APP_TIMEOUT_DEFAULT,
};

const getCharacters = async () => {
  const url = `${process.env.REACT_APP_API_MARVEL_PATH}/characters`;

  try {
    const {
      data: { characters },
    } = await get(encodeURI(url), options);
    return characters;
  } catch (error) {
    console.log(error);
  }
};

export { getCharacters };
