function nechetnye() {
    for (let i: number = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

function chetnye() {
    for (let i: number = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
chetnye()
nechetnye()


