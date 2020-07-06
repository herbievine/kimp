"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classic = void 0;
const nouns_1 = require("../constants/nouns");
const adjectives_1 = require("../constants/adjectives");
const hash_1 = require("./hash");
const classic = (options) => {
    var _a, _b;
    if (options && !options.start)
        console.log('options but no start');
    const optn = {
        start: (_a = options.start) !== null && _a !== void 0 ? _a : hash_1.hash(8),
        end: (_b = options.end) !== null && _b !== void 0 ? _b : hash_1.hash(12),
    };
    const noun = nouns_1.NOUNS[Math.round(Math.random() * nouns_1.NOUNS.length)];
    const adjective = adjectives_1.ADJECTIVES[Math.round(Math.random() * adjectives_1.ADJECTIVES.length)];
    return `${optn.start}-${adjective}-${noun}-${optn.end}`.toLowerCase();
};
exports.classic = classic;
//# sourceMappingURL=classic.js.map