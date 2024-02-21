import calculator from "./calculator";

test("3 plus 2 is 5", () => {
    expect(calculator.add(3, 2)).toBe(5)
})

test("3 minus 2 is 1", () => {
    expect(calculator.subtract(3, 2)).toBe(1)
})

test("3 divided by 2 is 1.5", () => {
    expect(calculator.divide(3, 2)).toBe(1.5)
})

test("3 multiplied by 2 is 6", () => {
    expect(calculator.multiply(3, 2)).toBe(6)
})