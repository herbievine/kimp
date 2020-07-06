const { kimp } = require('../dist/main/kimp');

describe('tests the format', () => {
    it('should be defined', () => {
        expect(kimp.hash() as string).toBeDefined();
    });
    it('should check length', () => {
        expect(kimp.hash().length as number).toBe(8);
        expect(kimp.hash(6).length as number).toBe(6);
        expect(kimp.hash(100).length as number).toBe(100);
    });
    it('should not have special chars', () => {
        expect(/\/-_£\$%\^&\*\(\)/g.test(kimp.hash())).toBeFalsy()
    });
});