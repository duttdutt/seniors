/* https://www.codewars.com/kata/5412509bd436bd33920011bc */
function maskify(cc) {
	let zz = cc.split("");

	for (let i = 0; i < zz.length - 4; i++) {
		zz[i] = "#";
	}

	return zz.join("");
}
