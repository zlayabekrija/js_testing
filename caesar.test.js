import {Caesar} from "./caesar";

let wrapTest = Caesar('this is a cat', 1);
let sameCaseTest = Caesar('This is a cat', 1);
let punctuationTest = Caesar('This is a cat.', 1);

describe('encrypting caesar', function () {
  test('wrapping from z to a', () => {
    expect(wrapTest.encryptStr()).toBe('uijt jt b dbu');
  });
  test('same case', function () {
    expect(sameCaseTest.encryptStr()).toBe('Uijt jt b dbu');
  });
  test('punctuation', function () {
    expect(punctuationTest.encryptStr()).toBe('Uijt jt b dbu.');
  })
});

describe('decrypting caesar', function () {
  test('wrapping from z to a', () => {
    expect(wrapTest.decryptStr()).toBe('sghr hr z bzs');
  });
  test('same case', function () {
    expect(sameCaseTest.decryptStr()).toBe('Sghr hr z bzs');
  });
  test('punctuation', function () {
    expect(punctuationTest.decryptStr()).toBe('Sghr hr z bzs.');
  })
});