const endpoint = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => {
  return fetch(endpoint).then(response => response.json());
};

export {fetchCharacters};