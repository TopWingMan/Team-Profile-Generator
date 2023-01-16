const doc = require('./index');

test('tests if we got input from manager questions function', () =>
{
    console.log('data.managerName');
    expect(AskManagerQuestions().toBe("sweet"))
})