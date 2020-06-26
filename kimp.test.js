import { kimp } from "./kimp";
import { againstOneMillion } from "./utils/functions";
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
        expect(kimp.v4().split('')[19]).toMatch(/[a-b8-9]/g)
    });

    test('Valid chars', () => {
        expect(kimp.v4()).toMatch(/^[a-fA-F0-9\-]+$/g)
    });

    test ('Check if unique (against one million)', () => {
        const res = againstOneMillion('v4')
        expect(res).toBe(false)
    });
});

describe('Testing Hash', () => {
    test('Check format', () => {
        expect(kimp.hash()).toMatch(/^[a-zA-Z0-9]+$/g)
        expect(kimp.hash().length).toBe(40);
        expect(kimp.hash(50).length).toBe(50);
    });

    test ('Check if unique (against one million)', () => {
        const res = againstOneMillion('hash')
        expect(res).toBe(false)
    });
});

describe('Testing digits', () => {
    test('Check format', () => {
        expect(typeof parseInt(kimp.digits())).toBe('number')
        expect(typeof kimp.digits()).toBe('string')
        expect(kimp.digits()).toMatch(/^[0-9]+$/g)
        expect(kimp.digits().length).toBe(8)
        expect(kimp.digits(50).length).toBe(50)
    });

    test ('Check if unique (against one million)', () => {
        const res = againstOneMillion('digits')
        expect(res).toBe(false)
    });
});