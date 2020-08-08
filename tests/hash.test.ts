const { kimp } = require('../dist/main/kimp');

describe('tests the format', () => {
    it('should be defined', () => {
        expect(kimp.hash('example') as number).toBeDefined();
    });
    it('should not have special chars', () => {
        expect(/\/-_£\$%\^&\*\(\)/g.test(kimp.hash('test'))).toBeFalsy()
    });
});