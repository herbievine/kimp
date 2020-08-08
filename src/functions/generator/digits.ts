import { DIGITS } from "../../constants/digits";

const digits = (limit: number = 8) => {
    let res: string = '';

    for (let i = 0; i < limit; ++i) {
        res += DIGITS.charAt(Math.floor(Math.random() * DIGITS.length))
    }

    return res as string;
};

export { digits }