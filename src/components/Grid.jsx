import React from 'react';
import { Cell } from './Cell';
import './styles/Grid.css';

/**
 * Receives an array of rows and cols : [[1,2,3],[4,5,6],[7,8,9]]
 * @param {*} props
 */
const Grid = props => {
	const Row = prop => {
		return (
			<div className="grid-row">
				{prop.value.map(cellValue => {
					return <Cell value={cellValue} />;
				})}
			</div>
		);
	};

	const Rows = prop => {
		return (
			<div>
				{prop.value.map(row => (
					<Row value={row} />
				))}
			</div>
		);
	};

	return (
		<div className="grid">
			<Rows value={props.rows} />
		</div>
	);
};

export { Grid };
