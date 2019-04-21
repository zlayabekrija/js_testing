import {arrAnalysis} from "./analysis";

let c = arrAnalysis([1, 2, 3, 4, 5, 6]);
describe('array analysis', function () {
  test('average', () => {
    expect(c.avg()).toBe(3.5);
  });
  test('minimum', () => {
    expect(c.minimum()).toBe(1);
  });
  test('maximum', () => {
    expect(c.maximum()).toBe(6);
  });
  test('length', () => {
    expect(c.len()).toBe(6);
  })
});