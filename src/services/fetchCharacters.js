const endpoint = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';
/* https://rickandmortyapi.com/api/character/ */

const fetchCharacters = () => {
  return fetch(endpoint).then(response => response.json());
};

export {fetchCharacters};