import React from 'react';
import {Observer, observer} from 'mobx-react';

const Counter = observer(props => {
	const {counter, inc, dec, reset} = props;

	return (
		<div className="counter-container">
			<div className="counter">{counter}</div>
			<button className="button" onClick={inc}>
				+
			</button>
			<button className="button" onClick={dec}>
				-
			</button>
			<button className="button" onClick={reset}>
				reset
			</button>
		</div>
	);
});

export default Counter;
