import { NOUNS } from '../../constants/nouns';
import { ADJECTIVES } from '../../constants/adjectives';
import { characters } from './characters';

type Options = {
	start?: string,
	end?: string
}

const classic = (options: Options = {}) => {
	const start: string = options.start || characters(8);
	const end: string = options.end || characters(12);

	const noun = NOUNS[Math.round(Math.random() * NOUNS.length)];
	const adjective = ADJECTIVES[Math.round(Math.random() * ADJECTIVES.length)];

	const res = `${start}-${adjective}-${noun}-${end}`;

	return res.toLowerCase() as string;
}

export { classic }