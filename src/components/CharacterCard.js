import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  const {name, species, image} = props;

  return (
    <div className="character-card">
      <img src={image} alt={name} className="character-img" />
      <h2 className="character-name">{name}</h2>
      <p className="character-specie">{species}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;