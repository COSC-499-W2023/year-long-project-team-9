// when importing a fucntion, it should be a different name
import addTest from '../src/testingfile/add';

test('adds 1 + 3 to equal 4', () => {
    expect(addTest(1, 3)).toBe(4);
});
