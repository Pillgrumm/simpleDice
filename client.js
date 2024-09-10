// Initialize total sum
var totalSum = 0;

// Function to update the displayed total
function updateTotal() {
    $("#diceSum").text("Total sum: " + totalSum);
}

// Generic dice roll function
function rollDice(sides, elementId) {
    var value = 1 + Math.floor(Math.random() * sides);
    $(elementId).text("You rolled: " + value + " ");
    totalSum += value;
    updateTotal();
}

// d20 dice
$("#d20").on("click", function () {
    rollDice(20, "#d20-value");
});

// d12 dice
$("#d12").on("click", function () {
    rollDice(12, "#d12-value");
});

// d10 dice
$("#d10").on("click", function () {
    rollDice(10, "#d10-value");
});

// d8 dice
$("#d8").on("click", function () {
    rollDice(8, "#d8-value");
});

// d6 dice
$("#d6").on("click", function () {
    rollDice(6, "#d6-value");
});

// d4 dice
$("#d4").on("click", function () {
    rollDice(4, "#d4-value");
});

// Reset button
$("#reset").on("click", function () {
    $(".dice-value").empty();
    // Reset total sum and update the display
    totalSum = 0;
    updateTotal();
});
