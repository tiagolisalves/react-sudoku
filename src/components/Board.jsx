import React from 'react';
import { Grid } from './Grid';

class Board extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Grid rows={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} />;
	}
}

export { Board };
