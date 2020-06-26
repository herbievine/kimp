import { DIGITS } from "../utils/constants";

const digits = (limit = 8) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += DIGITS.charAt(Math.floor(Math.random() * DIGITS.length))
    }

    return res;
};

export { digits }