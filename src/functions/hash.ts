import { CHARACTERS } from "../constants/characters";

type Limit = Number;

const hash = (limit: Limit = 8) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    return res;
};

export { hash }