import { kimp } from "./kimp";
import {
    test,
    expect,
    describe
} from "@jest/globals";
const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: arr => crypto.randomBytes(arr.length)
    }
});

describe('Testing UUID', () => {
    test ('Test length', () => {
        expect(kimp.v4().split('-').length).toBe(5)
    });

    test ('Array check', () => {
        expect(kimp.v4().split('-').length).toBe(5)
    });

    test('Valid chars', () => {
        expect(/^[a-fA-F0-9\-]+$/g.test(kimp.v4())).toBe(true)
    });

    test ('Check if unique (against one million)', () => {
        let ids = [];
        const id = '123e4567-e89b-12d3-a456-426614174000';

        let i = 0;
        while (i < 1000000) {
            ids.push(kimp.v4());
            ++i;
        }

        let res = false;
        for (let j = 0; j < ids.length; ++j) {
            res = ids[i] === id;
        }

        expect(res).toBe(false)
    });
});

describe('Testing Hash', () => {
    test('Test length', () => {
        expect(kimp.hash().length).toBe(40);
        expect(kimp.hash(50).length).toBe(50);
    });

    test('Valid chars', () => {
        expect(/^[a-zA-Z0-9]+$/g.test(kimp.hash(100))).toBe(true)
    });
});