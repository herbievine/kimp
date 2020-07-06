import { SYMBOLS } from "../constants/symbols";
import { DIGITS } from "../constants/digits";
import { CHARACTERS } from "../constants/characters";

const elements = `${SYMBOLS}${DIGITS}${CHARACTERS.split('').slice(0, 8).join('')}`;

type Limit = Number;

const symbols = (limit: Limit = 8) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += elements.charAt(Math.floor(Math.random() * elements.length))
    }

    return res;
};

export { symbols }