"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v4 = void 0;
const getRandomValues_1 = require("../utils/getRandomValues");
const v4 = () => {
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ getRandomValues_1.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
};
exports.v4 = v4;
//# sourceMappingURL=v4.js.map