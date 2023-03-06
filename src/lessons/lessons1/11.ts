const sum = (a: number, b: number) => a + b
const difference = (a: number, b: number) => a - b
const multiplication = (a: number, b: number) => a * b
const division = (a: number, b: number) => a / b

function calc(a: number, b: number, callback: (a: number, b: number) => number) {
    // else if (c === '/' && b === 0) {
    //     console.log('Делаить на 0 нельзя')
    // }
    const result: number = callback(a, b)
    console.log(result)
}

calc(5, 7, difference)
