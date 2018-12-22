import React, {useEffect} from 'react';
import Counter from './components/Counter/Counter';
import CounterStore from './store/CounterStore';
import {Observer} from 'mobx-react';
import './style.scss';

const App = () => {
	const {counter, inc, dec} = CounterStore;

	return (
		<div className="App">
			<Observer>
				{() => {
					const {counter, inc, dec, reset} = CounterStore;
					return <Counter counter={counter} inc={inc} dec={dec} reset={reset} />;
				}}
			</Observer>
		</div>
	);
};

export default App;
