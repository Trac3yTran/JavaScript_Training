try {
    throw "This is an error!";
} catch (error) {
    console.log(`Error: ${error}`);
} finally {
    console.log("Finally!");
}

function subtract(numOne, numTwo) {
    let answer;

    try {
        answer = numOne - numTwo;
        if (isNaN(answer)) {
            throw "Invalid Input"
        }
        return answer
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

console.log(subtract("twenty", 15));
