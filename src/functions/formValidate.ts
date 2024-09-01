const hasUpperCase = (param: string):boolean => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const chopped = (word: string) => {
        let test = [];
        for(let i = 0; i < word.length; i++) {
            test.push(word[i])
        }
        return test
    }
    const word = chopped(param);
    // sees if chopped up word has any letters in the capped alphabet array
    const result = word.some((letter):boolean => alphabet.includes(letter))
    // true if contains capped letter, false if no capped letter
    return result ? true : false
}

const formValidate = (body: any) => {

// check formatting
    // must contain valid characters (!@#$%...)
    
    hasUpperCase(body.username)
    // hasNums()
    // hasSymbols()

// sanitize
    // hasInvalidChars()



}

export default formValidate