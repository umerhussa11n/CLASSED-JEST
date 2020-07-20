import { validateName, 
         validateConfirmPassword, 
         validateEmail }
         from './validators';
let result;

test('validateName()', () => {
        result =  validateName('Jon Doe');
        expect(result).not.toEqual({
            "error": 'Must not be empty',
            "valid": true,
        });
});