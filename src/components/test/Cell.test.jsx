import React from 'react';
import ReactDOM from 'react-dom';
import { Cell } from '../Cell';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Cell value="3" />, div);
	ReactDOM.unmountComponentAtNode(div);
});
