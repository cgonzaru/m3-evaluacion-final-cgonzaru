import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getUserInput } = props;
  return (
    <div className="app__filters">
      <input type="text" className="userInput" onChange={getUserInput} />
    </div>  
  );
};

Filters.propTypes = {
  getUserInput: PropTypes.func.isRequired,
};

export default Filters;