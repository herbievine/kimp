/**
 * Copyright 2020 Herbie Vine
 * https://herbievine.com
 *
 * See LICENSE in root directory for full license.
 */

import { v4 } from "./functions/generator/v4";
import { classic } from "./functions/generator/classic";
import { characters } from "./functions/generator/characters";
import { digits } from "./functions/generator/digits";
import { hash } from "./functions/generator/hash";
import { symbols } from "./functions/generator/symbols";

const kimp = {
    v4,
    classic,
    characters,
    digits,
    hash,
    symbols
};

export { kimp };