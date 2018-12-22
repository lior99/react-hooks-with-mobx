import {decorate, action, observable} from 'mobx';

class CounterStore {
	counter = 0;

	inc = () => {
		console.info('%cinc was fired', 'font-size: 18px; color:#00bfff');
		this.counter++;
	};

	dec = () => {
		console.log('%cdec fired', 'font-size:18px;color:#00bfff');
		this.counter--;
	};

	reset = () => {
		this.counter = 0;
	};
}

const withDecorate = decorate(CounterStore, {
	counter: observable,
	inc: action,
	dec: action,
	reset: action,
});

const counterStore = new withDecorate();
export default counterStore;
