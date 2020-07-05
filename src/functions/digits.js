"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digits = void 0;
const digits_1 = require("../utils/constants/digits");
const digits = (limit = 8) => {
    let res = '';
    for (let i = 0; i < limit; ++i) {
        res += digits_1.DIGITS.charAt(Math.floor(Math.random() * digits_1.DIGITS.length));
    }
    return res;
};
exports.digits = digits;
//# sourceMappingURL=digits.js.map