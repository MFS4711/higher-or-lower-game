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

}

function lower () {

}

function chackAnswer () {

}

function incrementScore () {

}

function displayHighScore () {

}