const hasUpperCase = (param: string): boolean => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const chopped = (word: string) => {
        let test = [];
        for(let i = 0; i < word.length; i++) {
            test.push(word[i])
        }
        return test
    }
    const word = chopped(param);
    const result = word.some((letter):boolean => alphabet.includes(letter))

    return result ? true : false
}

const hasNums = (param: string) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const chopped = (word: string) => {
        let test = [];
        for(let i = 0; i < word.length; i++) {
            let res = word[i].toString()
            test.push(res)
        }
        
        console.log(test)
        return test
    }

    const word = chopped(param);
    const result = word.some((letter):boolean => numbers.includes(letter))

    return result ? true : false
}

const hasSymbols = (param: string) => {
    // const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    // const chopped = (word: string) => {
    //     let test = [];
    //     for(let i = 0; i < word.length; i++) {
    //         let res = word[i].toString()
    //         test.push(res)
    //     }
        
    //     console.log(test)
    //     return test
    // }

    // const word = chopped(param);
    // const result = word.some((letter):boolean => numbers.includes(letter))

    // return result ? true : false
}

const formValidate = (body: any) => {

// check formatting
    // must contain valid characters (!@#$%...)
    
    hasUpperCase(body.username)
    hasNums(body.username)
    hasSymbols(body.username)

// sanitize
    // hasInvalidChars()



}

export default formValidate