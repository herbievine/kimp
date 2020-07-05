import { CHARACTERS } from "../utils/constants/characters";

type Limit = Number;

const hash = (limit: Limit = 40) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    return res;
};

export { hash }