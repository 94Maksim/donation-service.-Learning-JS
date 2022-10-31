import { Settings as currency } from "../core/constants/settings"

export class DonateForm {
	#donateForm
	#createNewDonate
	#totalAmountHTML
	#totalAmount
	#currency

	constructor(totalAmount, createNewDonate) {
		this.#donateForm = document.createElement('form');
		this.#donateForm.className = 'donate-form';
		this.#createNewDonate = createNewDonate;
		this.#totalAmount = totalAmount;
		this.#totalAmountHTML = document.createElement('h1');
		this.#totalAmountHTML.className = 'total-amount';
		this.#currency = currency.currency;
	}

	#onCreateNewDonate(event) {
		event.preventDefault();
        const newDonateValue = Number(event.target.amount.value);
        if (newDonateValue && this.#createNewDonate) {
            const newDonate = {
                date: new Date(),
                amount: newDonateValue,
            };
            this.#createNewDonate(newDonate);
            event.target.amount.value = '';
        }

	}

	updateTotalAmount(newAmount) {
		this.#totalAmountHTML.textContent = `Всего внесено: ${newAmount}${this.#currency}`;
	}
	
	render() {

		this.#donateForm.addEventListener('submit', this.#onCreateNewDonate.bind(this));

		this.updateTotalAmount(this.#totalAmount);

		const donateFormLabel = document.createElement('label');
		donateFormLabel.className = 'donate-form__input-label';
		donateFormLabel.textContent = `Введите сумму в ${this.#currency}`;

		const donateFormInput = document.createElement('input');
		donateFormInput.className = 'donate-form__donate-input';
		donateFormInput.name = 'amount';
		donateFormInput.type = 'number';
		donateFormInput.max = '100';
		donateFormInput.min = '1';
		donateFormInput.required = '';
		donateFormInput.placeholder = 'от 1 до 100';

		donateFormLabel.append(donateFormInput);

		const donateFormButton = document.createElement('button');
		donateFormButton.className = 'donate-form__submit-button';
		donateFormButton.type = 'submit';
		donateFormButton.textContent = 'Задонатить';

		this.#donateForm.append(this.#totalAmountHTML ,donateFormLabel,donateFormButton);
	
		return this.#donateForm;
	}
}