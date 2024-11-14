var numberOfBeams = function(bank) {
    let result = 0
    let prev = 0
    for(let i=0; i < bank.length; i++){
        let count = 0
        for(let c=0; c < bank[i].length; c++){
            if(bank[i][c] === '1') count++
        }
        if(count > 0){
            result += (count * prev)
            prev = count
        }
    }

    return result
};