const {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit
} = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

<<<<<<< HEAD
<<<<<<< HEAD
tset('This should fail', () => {
=======
test('This should fail', () => {
>>>>>>> 6f3cd30 (add test directory)
    throw new Error('Failure')
=======
test('should calculate default total tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
<<<<<<< HEAD
>>>>>>> d73d341 (Add tests to test function for math.js)
=======
})

test('should convert 32F to 0C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('should convert 0C to 32F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
>>>>>>> 67c2b1a (Add more tests)
})