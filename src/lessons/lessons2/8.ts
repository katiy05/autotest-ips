{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000)

        setTimeout(() => {
            reject('reject')
        }, 100)
    })

    promise
        .then(
            value => console.log(value),
            error => console.log(error)
        )
}
