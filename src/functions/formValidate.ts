const isUpperCase = (param: string) => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const word = param.split(',')
    const result = alphabet.includes(param)
    // 
    // need to split up the given string into a comma separed array so each value can be tested
    // 
    console.log(result, word)
}

const formValidate = (body: any) => {
    // take form input body
    // sanitize
    


    // check formatting
    // must contain valid characters (!@#$%...)
    isUpperCase(body.username)
    // body.username.includes("a") ? console.log("true") : console.log("false")
}

export default formValidate