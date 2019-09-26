import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../components/CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = props => {
  const {characters, userInput, origin} = props;
  return (
    <ul className="characters-list">
      {characters
        .filter(character => character.name.toUpperCase().includes(userInput.toUpperCase()))
        .filter(character => {
          if (origin === 'all') {
            return true;
          } else {
            return origin === character.origin.name;
          }
        })
        .map(item => {
          return (
            <li className="character" key={item.id}>
              <Link to={`/detail/${item.id}/`} className="character-link">
                <CharacterCard 
                  name={item.name}
                  image={item.image}
                  species={item.species}
                />
              </Link>
              
            </li>
          );
        })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  userInput: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired

};

export default CharacterList;