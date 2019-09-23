import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = props => {

	return (
		<div className="detail">
			Soy el detalle
			<Link to="/" className="home">Vuelve al listado</Link>
    </div>
	);

};

export default CharacterDetail