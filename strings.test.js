import {capitalize,reverseString} from './strings'

describe('functions for string manipulation',()=>{
    test('capitalizes first letter', () => {
        expect(capitalize('test')).toBe('Test');
      });
      test('reveses the string',() => {
          expect(reverseString('This is text')).toBe('txet si sihT')
      })
});