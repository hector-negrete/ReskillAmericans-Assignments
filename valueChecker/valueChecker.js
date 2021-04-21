function valueChecker(firstNumber, secondNumber) {
    let result = (firstNumber === secondNumber)
    return result;
}
    //calling the function with arguments

    let result = valueChecker (12, "12")

    console.log(result); //false

    //calling the same function but with different argurments

    let result2 = valueChecker (12, 12)

    console.log(result2); //true

