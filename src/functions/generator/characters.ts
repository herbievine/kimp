import { CHARACTERS } from "../../constants/characters";

const characters = (limit: number = 8) => {
    let res = '';

    for (let i = 0; i < limit; ++i) {
        res += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    return res as string;
};

export { characters }