const doc = require('./employees');

test('manager data', () => {
    expect(doc.newEmployee.name.toBe('zach'));
})