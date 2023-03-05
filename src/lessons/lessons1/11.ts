function calc(a: number, b: number, c: string) {
    if (c === '+') {
        console.log(a + b)
    }
    if (c === '-') {
        console.log(a - b)
    }
    if (c === '*') {
        console.log(a * b)
    }
    if (c === '/' && b != 0) {
        console.log(a / b)
    }
    else if (c === '/' && b === 0) {
        console.log('Делаить на 0 нельзя')
    }
}
calc(5, 0, '/')
