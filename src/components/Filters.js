import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getUserInput, getGender, getOrigin } = props;
  return (
    <div className="app__filters">
      <label htmlFor="input" className="input"><strong>Filtra a tus personajes favoritos</strong></label>
      <input placeholder="Nombre" id="input" type="text" className="userInput" onChange={getUserInput} />
      <select name="gender" id="" onChange={getGender}>
        <option name="gender" value="all">All</option>
        <option name="gender" value="Female">Female</option>
        <option name="gender" value="Male">Male</option>
      </select>
      <div>
        <label htmlFor="all">All</label>
        <input id="all" type="radio" value="all" onClick={getOrigin}/>
        <label htmlFor="earth(C-137)">Earth (C-137)</label>
        <input id="earth(C-137)" type="radio" value="Earth (C-137)" onClick={getOrigin}/>
        <label htmlFor="earth(Replacement Dimension)">Earth (Replacement Dimension)</label>
        <input id="earth(Replacement Dimension)" type="radio" value="Earth (Replacement Dimension)" onClick={getOrigin}/>
        <label htmlFor="Abadango">Abadango</label>
        <input id="Abadango" type="radio" value="Abadango" onClick={getOrigin}/>
        <label htmlFor="unknown">unknown</label>
        <input id="unknown" type="radio" value="unknown" onClick={getOrigin}/>
      </div>
    </div>  
  );
};

Filters.propTypes = {
  getUserInput: PropTypes.func.isRequired,
  getGender: PropTypes.func.isRequired,
  getOrigin: PropTypes.func.isRequired
};

export default Filters;