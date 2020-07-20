import { isEmpty, checkIfEmpty, setValidationRes } from './utilityFunctions';
import { TestScheduler } from 'jest';

let result;
test('My First Jest Test', () => {
    result = 2 * 3;
    expect(result).toBe(6);
    result = true;
    expect(result).toBe(true);
});


test('isEmpty()', () => {
    result = isEmpty('');
    expect(result).toBeTruthy();
    result = isEmpty(' ');
    expect(result).toBeFalsy();
});


test('CheckIfEmpty', () => {
    result = checkIfEmpty(' ');
    let expectedResult = { valid: false, error: 'Must not be empty' };
    expect(result).toEqual(expectedResult);
    result = checkIfEmpty('John Doe');
    expect(result).toEqual({ valid: true });
    result = checkIfEmpty('John');
    expect(result.error).toBeUndefined();
});


