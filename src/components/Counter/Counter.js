import React, {useEffect, useState} from 'react';
import {Observer, observer} from 'mobx-react';

const Counter = props => {
	const {counter, inc, dec, reset} = props;
	const [className, setClassName] = useState('');

	useEffect(() => {
		if (props.counter % 2 === 0) {
			setClassName('counter even');
		} else {
			setClassName('counter odd');
		}
	});

	return (
		<div className="counter-container">
			<div className={className}>{counter}</div>
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
};

export default Counter;
