const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve')
    }, 1000)

    setTimeout(() => {
        reject('reject')
    }, 100)
})

async function print(): Promise<void> {
    try {
        console.log(await promis)
    } catch (error) {
        console.log(error)
    }
}
print()