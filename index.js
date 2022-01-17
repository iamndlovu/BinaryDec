const binaryToDec = bin => {
	const binString = String(bin);
	const binArray = binString.split('');

	if (binArray.some(dig => isNaN(Number(dig)))) throw new Error('Not a number');
	else if (binArray.some(dig => Number(dig) > 1))
		throw new Error('Not a binary number');
	else {
		binArray.reverse();
		let dec = 0;
		for (let power = binArray.length - 1; power >= 0; power--) {
			dec += binArray.pop() * Math.pow(2, power);
		}

		return Number(dec);
	}
};

const decToBinary = dec => {
	if (dec === true || dec === false)
		throw new Error(
			'Expected a decimal number but instead got a Boolean value'
		);

	dec = Number(dec);

	if (isNaN(dec)) throw new Error('Not a number.');
	else if (dec === 0) return 0;

	let remArray = [],
		ans = dec,
		remString = '';
	while (ans !== 0) {
		remArray.push(ans % 2);
		ans = Math.floor(ans / 2);
	}

	while (remArray.length > 0) {
		remString += String(remArray.pop());
	}

	return remString;
};

module.exports = {
	decToBinary,
	binaryToDec,
};
