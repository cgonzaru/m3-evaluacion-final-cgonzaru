import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getUserInput, getOrigin } = props;
  return (
    <div className="app__filters">
      <label htmlFor="input" className="input"><strong>Filtra a tus personajes favoritos</strong></label>
      <input placeholder="Nombre" id="input" type="text" className="userInput" onChange={getUserInput} />

      <label htmlFor="all" className="input"> All
        <input type="radio" id="all" name="origin" value="all" onClick={getOrigin} />
      </label>
      <label htmlFor="replacement" className="input"> Earth (Replacement Dimension)
        <input type="radio" id="replacement" name="origin" value="Earth (Replacement Dimension)" onClick={getOrigin} />
      </label>
      <label htmlFor="abadango" className="input"> Abadango
        <input type="radio" id="abadango" name="origin" value="Abadango" onClick={getOrigin} />
      </label>
      <label htmlFor="unknown" className="input"> unknown
        <input type="radio" id="unknown" name="origin" value="unknown" onClick={getOrigin} />
      </label>
      <label htmlFor="c137" className="input"> Earth (C-137)
        <input type="radio" id="c137" name="origin" value="Earth (C-137)" onClick={getOrigin} />
      </label>

    </div>


  );
};

Filters.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  getOrigin: PropTypes.func.isRequired,
  origin: PropTypes.string.isRequired
};

export default Filters;