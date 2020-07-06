const { kimp } = require('../dist/main/kimp');

const beBeOneOf = (expect: string, arr: Array<string>) => {
    let pass: boolean;

    for (let i = 0; i < arr.length; ++i) {
        if (!pass) {
            pass = expect === arr[i];
        } else {
            return pass as boolean
        }
    }

    return pass as boolean;
}

describe('tests the format', () => {
    it('should be defined', () => {
        expect(kimp.v4() as string).toBeDefined();
    });
    it('should be 36 chars long', () => {
        expect(kimp.v4().length as number).toBe(36);
    });
    it('should return 4 (RFC4122 compliant)', () => {
        expect(+kimp.v4().split('')[14] as number).toBe(4)
    });
    it('should match one of 4 chars (RFC4122 compliant)', () => {
        expect(
            beBeOneOf(
                kimp.v4().split('')[19] as string,
                ['8', '9', 'a', 'b'] as Array<string>
            )
        ).toBeTruthy();
    });
    it('should have 4 dashes', () => {
        let arr: Array<string> = [];
        const indexes = [8, 13, 18, 23]

        for (let i = 0; i < indexes.length; ++i) {
            arr.push(kimp.v4().split('')[indexes[i]])
        }

        expect([...arr]).toStrictEqual(['-', '-', '-', '-'])
    });
    it('should not have special chars', () => {
        expect(/\/_£\$%\^&\*\(\)/g.test(kimp.classic())).toBeFalsy()
    });
});