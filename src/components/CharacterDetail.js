import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
	const { routerProps, characters } = props;
	const characterId = parseInt(routerProps.match.params.characterId);

	if (characterId > characters.length) {
		return (
			<div>
				<p>El número del detalle excede el número de personajes </p>
				<Link to="/" className="app__back">Vuelve al listado</Link>
			</div>
		);
	}

	const character = characters.filter(item => item.id === characterId);

	if (character[0]) {
		const { image, name, status, species, origin, episode } = character[0];
		return (
			<div className="character-detail">
				<Link to="/" className="app__back">Volver</Link>
				<div className="character-info">
					<img src={image} alt={name} className="character-img" />
					<div className="info">
						<h2 className="character-name">{name}</h2>
						<p className="character-status">Status: {status}</p>
						<p className="character-status">Species: {species}</p>
						<p className="character-status">Origin: {origin.name}</p>
						<p className="character-status">Episodes: {episode.length}</p>
					</div>
				</div>
			</div>
		);
	}



};

CharacterDetail.propTypes = {
	routerProps: PropTypes.object.isRequired,
	characters: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default CharacterDetail