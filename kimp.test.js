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

describe('Testing v4', () => {
    test ('Test length', () => {
        expect(kimp.v4().split('-').length).toBe(5)
        expect(kimp.v4().length).toBe(36)
    });

    test('RFC 4122 compliant', () => {
        expect(kimp.v4().split('')[14]).toBe('4')
        expect(/[a-b8-9]/g.test(kimp.v4().split('')[19])).toBe(true)
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

describe('Testing digits', () => {
    test('Check format', () => {
        expect(typeof parseInt(kimp.digits())).toBe('number')
        expect(typeof kimp.digits()).toBe('string')
        expect(kimp.digits().length).toBe(8)
        expect(kimp.digits(50).length).toBe(50)
    });
});