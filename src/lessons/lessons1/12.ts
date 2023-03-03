function chetnye(chet: number = 1){
    for (chet; chet <= 100; chet++) {
        if (chet%2===0) {
            console.log(chet)
        }    
    }
    nechetnye()
}
chetnye()

function nechetnye(chet: number = 1){
    for (chet; chet <= 100; chet++) {
        if (chet%2!=0) {
            console.log(chet)
        }    
    }
}
