import { DIGITS } from "../constants/digits";

type Limit = Number;

const digits = (limit: Limit = 8) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += DIGITS.charAt(Math.floor(Math.random() * DIGITS.length))
    }

    return res;
};

export { digits }