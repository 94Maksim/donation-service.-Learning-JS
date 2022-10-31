import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import * as Utils from '../core/utils/index';

const mockDonates = [
	{ amount: 4, date: new Date() },
	{ amount: 20, date: new Date()},
	{ amount: 3, date: new Date() },
	{ amount: 5, date: new Date() },
	{ amount: 28, date: new Date() },
	{ amount: 2, date: new Date() },
	{ amount: 5, date: new Date() },
	{ amount: 8, date: new Date() },
	{ amount: 10, date: new Date() },
	{ amount: 10, date: new Date() },
	{ amount: 15, date: new Date() },

];


export default class App {
	#donateForm
	#donateList
	#state

	constructor() {
		this.#state = {
			donates: mockDonates,
			totalAmount: 0,
		}
		this.#state.totalAmount = Utils.calculateSumOfNumbers(this.#state.donates.map((donate) => donate.amount))
		this.#donateForm = new DonateForm(this.#state.totalAmount, this.#createNewDonate.bind(this));
		this.#donateList = new DonateList(this.#state.donates);

	}

	#createNewDonate(newDonate) {
		this.#state.donates.unshift(newDonate);
		this.#state.totalAmount += newDonate.amount;
		this.#donateList.updateDonates(this.#state.donates);
		this.#donateForm.updateTotalAmount(this.#state.totalAmount);
	}

	run() {
		const donateFormToHTML = this.#donateForm.render();
		const DonateListToHTML = this.#donateList.render();
		document.body.append(donateFormToHTML, DonateListToHTML);
	}
}



