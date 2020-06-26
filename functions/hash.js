import { CHARACTERS } from "../utils/constants";

const hash = (limit = 40) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    return res;
};

export { hash }