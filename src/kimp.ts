/**
 * Copyright 2020 Herbie Vine
 * https://herbievine.com
 *
 * See LICENSE in root directory for full license.
 */

import { classic } from "./functions/classic";
import { v4 } from "./functions/v4";
import { hash } from "./functions/hash";
import { digits } from "./functions/digits";
import { symbols } from "./functions/symbols";

type Kimp = {
    classic: Function
    v4: Function
    hash: Function
    digits: Function
    symbols: Function
};

const kimp: Kimp = {
    classic,
    v4,
    hash,
    digits,
    symbols
};

export { kimp };