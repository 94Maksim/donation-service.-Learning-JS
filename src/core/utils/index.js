import moment from "moment";
import 'moment-precise-range-plugin';

export function calculateSumOfNumbers (numbers) {
	const sum = numbers.reduce((previous, current) =>previous + current)
	return sum;
}

export function getFormattedTime (date) {
	return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}