import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = props => {
  const {characters, userInput} = props;
  return (
    <ul className="characters-list">
      {characters
        .filter(character => character.name.toUpperCase().includes(userInput.toUpperCase()))
        .map(item => {
          return (
            <li className="character" key={item.id}>
              <div className="character-card">
                <img src={item.image} alt={item.name} className="character-img" />
                <h2 className="character-name">{item.name}</h2>
                <p className="character-specie">{item.species}</p>
              </div>
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