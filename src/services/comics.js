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

const getComics = async () => {
  const url = `${process.env.REACT_APP_API_MARVEL_PATH}/comics`;

  try {
    const {
      data: { comics },
    } = await get(encodeURI(url), options);
    return comics;
  } catch (error) {
    console.log(error);
  }
};

export { getComics };
