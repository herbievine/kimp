import { kimp } from "../kimp";

const againstOneMillion = method => {
    let ids = [],
        i = 0,
        res = false,
        id = '';

    switch (method) {
        case 'v4':
            id = kimp.v4();

            while (i < 1000000) {
                ids.push(kimp.v4());
                ++i;
            }

            for (let j = 0; j < ids.length; ++j) {
                res = ids[i] === id;
            }

            break;
        case 'hash':
            id = kimp.hash();

            while (i < 1000000) {
                ids.push(kimp.hash());
                ++i;
            }

            for (let j = 0; j < ids.length; ++j) {
                res = ids[i] === id;
            }

            break;
        case 'digits':
            id = kimp.digits();

            while (i < 1000000) {
                ids.push(kimp.digits());
                ++i;
            }

            for (let j = 0; j < ids.length; ++j) {
                res = ids[i] === id;
            }

            break;
    }

    return res;
}

export { againstOneMillion }