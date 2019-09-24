import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getUserInput } = props;
  return (
    <div className="app__filters">
      <label htmlFor="input" className="input"><strong>Filtra a tus personajes favoritos</strong></label>
      <input placeholder="Nombre" id="input" type="text" className="userInput" onChange={getUserInput} />
    </div>  
  );
};

Filters.propTypes = {
  getUserInput: PropTypes.func.isRequired,
};

export default Filters;