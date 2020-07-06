const { kimp } = require('../dist/main/kimp');

describe('tests the format', () => {
    it('should be defined', () => {
        expect(kimp.classic() as string).toBeDefined();
    });
    it('should be between 15 and 60 chars long', () => {
        expect(kimp.classic().length as number).toBeGreaterThan(15);
        expect(kimp.classic().length as number).toBeLessThan(60)
    });
    it('should contain dashes', () => {
        expect(kimp.classic().search(/-/g)).not.toBe(-1)
    });
    it('should not have special chars', () => {
        expect(/\/_£\$%\^&\*\(\)/g.test(kimp.classic())).toBeFalsy()
    });
});