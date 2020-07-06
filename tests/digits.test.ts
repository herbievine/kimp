const { kimp } = require('../dist/main/kimp');

describe('tests the format', () => {
    it('should be defined', () => {
        expect(kimp.digits() as string).toBeDefined();
    });
    it('should check length', () => {
        expect(kimp.digits().length as number).toBe(8);
        expect(kimp.digits(6).length as number).toBe(6);
        expect(kimp.digits(100).length as number).toBe(100);
    });
    it('should not have special chars', () => {
        expect(/\/-_£\$%\^&\*\(\)/g.test(kimp.digits())).toBeFalsy()
    });
});