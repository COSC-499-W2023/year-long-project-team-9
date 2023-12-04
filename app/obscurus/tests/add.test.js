import addtest from '../src/testingfile/add';

test('adds 1 + 2 to equal 3', () => {
    expect(addtest(1, 2)).toBe(3);
});

test('adds 1 + 3 to equal 4', () => {
    expect(addtest(1, 3)).toBe(4);
});
