/**
 * Copyright 2020 Herbie Vine
 * https://herbievine.com
 *
 * See LICENSE in root directory for full license.
 */

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const kimp = {
	v4: () => {
		return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
			(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		)
	},
	hash: (limit = 40) => {
		let res = '';

		for (let i = 0; i < limit; ++i) {
			res += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
		}

		return res;
	},
};

export { kimp };