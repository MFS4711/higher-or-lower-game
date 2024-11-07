// Things we want when page loads

document.addEventListener("DOMContentLoaded", function() {

    let num1 = Math.ceil(Math.random() * 100);
    document.getElementById("player-number").innerText = num1;

    let num2 = "?";
    document.getElementById("computer-number").innerText = num2;

    runGame();
});

function runGame () {

    // create a random number for user to start with and add to HTML

    // create initial num 2 ? and add to HTML


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

    // ensure num1 doesn't equal num2
    while (num1 === num2) {
        num2 = Math.ceil(Math.random() * 100);
    }

    if (num1 < num2) {
        document.getElementById("message-area").innerHTML = `<p>Well Done!!! You guessed correctly</p>`;
        incrementScore();
        setTimeout(continueGame, 3000);
    } else if (num1 > num2) {
        document.getElementById("message-area").innerHTML = `<p>Unfortunately you guessed wrong :(</p>`;
        displayHighScore();
        setTimeout(endGame, 3000);
    }

}

function lower () {

    let num1 = document.getElementById("player-number");
    num1 = parseInt(num1.innerText);
    // console.log(num1);

    let num2 = document.getElementById("computer-number").value;
    num2 = Math.ceil(Math.random() * 100);
    document.getElementById("computer-number").innerText = num2;
    // console.log(num2);

    // ensure num1 doesn't equal num2
    while (num1 === num2) {
        num2 = Math.ceil(Math.random() * 100);
    }

    if (num1 > num2) {
        document.getElementById("message-area").innerHTML = `<p>Well Done!!! You guessed correctly</p>`;
        incrementScore();
        setTimeout(continueGame, 3000);
    } else if (num1 < num2) {
        document.getElementById("message-area").innerHTML = `<p>Unfortunately you guessed wrong :(</p>`;
        displayHighScore();
        setTimeout(endGame, 3000);
    }

}

function incrementScore () {
    
    let oldScore = parseInt(document.getElementById("current-score").innerText);
    document.getElementById("current-score").innerText = ++oldScore;

}

function displayHighScore () {

    let highScore = parseInt(document.getElementById("high-score").innerText);
    let lastScore = parseInt(document.getElementById("current-score").innerText);

    if (highScore < lastScore) {
        highScore = lastScore;
    }

    document.getElementById("high-score").innerText = highScore;
    
}

function continueGame () {

    let num1 = document.getElementById("computer-number").innerText;
    document.getElementById("player-number").innerText = num1;

    let num2 = "?";
    document.getElementById("computer-number").innerText = num2;

    runGame();

}

function endGame () {

    document.getElementById("current-score").innerText = 0;

    let num1 = Math.ceil(Math.random() * 100);
    document.getElementById("player-number").innerText = num1;

    let num2 = "?";
    document.getElementById("computer-number").innerText = num2;

    runGame();

}