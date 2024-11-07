document.addEventListener("DOMContentLoaded", function() {

    runGame();
});

function runGame () {

    // create a random number for user to start with and add to HTML
    let num1 = Math.ceil(Math.random() * 100);
    document.getElementById("player-number").innerText = num1;

    // create initial num 2 ? and add to HTML
    let num2 = "?";
    document.getElementById("computer-number").innerText = num2;

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "higher") {
                higher();
            } else if (this.getAttribute("data-type") === "lower") {
                lower();
            }
        })
    }
}

function higher () {
    let num1 = document.getElementById("player-number");
    num1 = parseInt(num1.innerText);
    // console.log(num1);

    let num2 = document.getElementById("computer-number").value;
    num2 = Math.ceil(Math.random() * 100);
    document.getElementById("computer-number").innerText = num2;
    // console.log(num2);

    // need to add quality check to ensure number 2 is not the same as number 1

    calculateCorrectAnswer();
}

function lower () {

}

function calculateCorrectAnswer () {

    let num1 = document.getElementById("player-number");
    num1 = parseInt(num1.innerText);
    console.log(num1);

    let num2 = document.getElementById("computer-number");
    num2 = parseInt(num2.innerText);
    console.log(num2);

    // display message, add a little delay and start game again

    if (num1 > num2) {
        document.getElementById("message-area").innerHTML = "Well Done!!! You guessed correctly";
        setTimeout(runGame(), 2000);
    }
    
}

function CheckAnswer () {

}

function incrementScore () {

}

function displayHighScore () {

}