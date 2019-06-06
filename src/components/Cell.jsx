import React from 'react';
import './styles/Cell.css';

/**
 * Responsible for render the number if received, else shows nothing
 * @param {*} props
 */
const Cell = props => {
	if (!props.value) {
		throw new Error('Missing cell value');
	}
	return <div className="cell">{props.value || ''}</div>;
};

export { Cell };
