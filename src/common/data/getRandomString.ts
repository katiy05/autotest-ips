function getRandomString(length: number): string {
    const abc: string = "abcdefghijklmnopqrstuvwxyz"
    let randomString: string = ''
    while (randomString.length < length) {
        randomString += abc[Math.floor(Math.random() * abc.length)]
    }
    return randomString
}

export {
    getRandomString,
}