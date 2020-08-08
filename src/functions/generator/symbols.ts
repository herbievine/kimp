import { SYMBOLS } from "../../constants/symbols";

type Limit = Number;

const symbols = (limit: Limit = 8) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length))
    }

    return res;
};

export { symbols }