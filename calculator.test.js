import calculator from './calculator'
const calc = new calculator();
describe('basic calculator functions',() => {
    test('it sums two numbers',() =>{
        expect(calc.sum(1,5)).toBe(6);
    });
    test('it subtracts two numbers',() =>{
        expect(calc.subtract(5,1)).toBe(4);
    });
    test('it multiplies two numbers',() =>{
        expect(calc.multiply(5,2)).toBe(10);
    });
    test('it divides two numbers',() =>{
        expect(calc.divide(10,2)).toBe(5);
    });
})