import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../components/CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = props => {
  const {characters, userInput} = props;
  return (
    <ul className="characters-list">
      {characters
        .filter(character => character.name.toUpperCase().includes(userInput.toUpperCase()))
        .map(item => {
          return (
            <li className="character" key={item.id}>
              <Link to={`/detail/${item.id}/`} className="character-link"></Link>
              <CharacterCard 
                name={item.name}
                image={item.image}
                species={item.species}
              />
            </li>
          );
        })}
    </ul>
  );
};

CharacterList.propTypes = {
  userInput: PropTypes.string.isRequired,
};

export default CharacterList;