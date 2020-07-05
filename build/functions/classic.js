import { NOUNS } from '../utils/constants/nouns';
import { ADJECTIVES } from '../utils/constants/adjectives';
import { hash } from './hash';
const classic = (options = {}) => {
    const start = options.start || hash(8);
    const end = options.end || hash(12);
    const noun = NOUNS[Math.round(Math.random() * NOUNS.length)];
    const adjective = ADJECTIVES[Math.round(Math.random() * ADJECTIVES.length)];
    return `${start}-${adjective}-${noun}-${end}`.toLowerCase();
};
export { classic };
