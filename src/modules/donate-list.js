import { Settings } from "../core/constants/settings";
import * as Utils from '../core/utils/index';
export class DonateList {
	#donatesContainer
	#donates
	#containerDonates
	#currency

	constructor (donates) {
		this.#donatesContainer = document.createElement('div');
		this.#donatesContainer.className = 'donates-container';
		this.#donates = donates;
		this.#currency = Settings.currency;
	}

	renderDonates (container) {
		this.#containerDonates.innerHTML = '';
		this.#donates.forEach((donate) => {
			const donateItem = document.createElement('div');
			donateItem.className = 'donate-item';
			const creationTime = Utils.getFormattedTime(donate.date)
			donateItem.innerHTML = `${creationTime} - <b>${donate.amount}${this.#currency}</b>`;
			
			container.append(donateItem);
		})
	}

	updateDonates(updateDonates) {
		this.#donates = updateDonates;
		this.renderDonates(this.#containerDonates)
	}

	render () {
		const containerTitle = document.createElement('h2');
		containerTitle.className = 'donates-container__title';
		containerTitle.textContent = 'Список донатов';

		this.#containerDonates = document.createElement('div');
		this.#containerDonates.className = 'donates-container__donates';


		this.#donatesContainer.append(containerTitle, this.#containerDonates);
		this.renderDonates(this.#containerDonates)

		return this.#donatesContainer;

	}
}


