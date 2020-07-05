"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = void 0;
const characters_1 = require("../utils/constants/characters");
const hash = (limit = 40) => {
    let res = '';
    for (let i = 0; i < limit; ++i) {
        res += characters_1.CHARACTERS.charAt(Math.floor(Math.random() * characters_1.CHARACTERS.length));
    }
    return res;
};
exports.hash = hash;
//# sourceMappingURL=hash.js.map