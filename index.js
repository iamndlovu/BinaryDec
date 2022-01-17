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
	return false;
};
