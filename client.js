// Initialize total sum
var totalSum = 0;

// Function to update the displayed total
function updateTotal() {
    $("#diceSum").empty();
    $("#diceSum").append("Total sum: " + totalSum);
}

// Function to roll multiple dice
function rollDice(dieType, numDice) {
    let sum = 0;
    let results = [];
    for (let i = 0; i < numDice; i++) {
        let roll = 1 + Math.floor(Math.random() * dieType);
        results.push(roll);
        sum += roll;
    }
    return { sum, results };
}

// Roll d20 dice
$("#d20").on("click", function () {
    let numDice = parseInt($("#d20-quantity").val());
    let { sum, results } = rollDice(20, numDice);
    $("#d20-value").empty();
    $("#d20-value").append("You rolled: " + results.join(", ") + " (Sum: " + sum + ")");
    console.log(results);

    totalSum += sum;
    updateTotal();
});

// Roll d12 dice
$("#d12").on("click", function () {
    let numDice = parseInt($("#d12-quantity").val());
    let { sum, results } = rollDice(12, numDice);
    $("#d12-value").empty();
    $("#d12-value").append("You rolled: " + results.join(", ") + " (Sum: " + sum + ")");
    console.log(results);

    totalSum += sum;
    updateTotal();
});

// Roll d10 dice
$("#d10").on("click", function () {
    let numDice = parseInt($("#d10-quantity").val());
    let { sum, results } = rollDice(10, numDice);
    $("#d10-value").empty();
    $("#d10-value").append("You rolled: " + results.join(", ") + " (Sum: " + sum + ")");
    console.log(results);

    totalSum += sum;
    updateTotal();
});

// Roll d8 dice
$("#d8").on("click", function () {
    let numDice = parseInt($("#d8-quantity").val());
    let { sum, results } = rollDice(8, numDice);
    $("#d8-value").empty();
    $("#d8-value").append("You rolled: " + results.join(", ") + " (Sum: " + sum + ")");
    console.log(results);

    totalSum += sum;
    updateTotal();
});

// Roll d6 dice
$("#d6").on("click", function () {
    let numDice = parseInt($("#d6-quantity").val());
    let { sum, results } = rollDice(6, numDice);
    $("#d6-value").empty();
    $("#d6-value").append("You rolled: " + results.join(", ") + " (Sum: " + sum + ")");
    console.log(results);

    totalSum += sum;
    updateTotal();
});

// Roll d4 dice
$("#d4").on("click", function () {
    let numDice = parseInt($("#d4-quantity").val());
    let { sum, results } = rollDice(4, numDice);
    $("#d4-value").empty();
    $("#d4-value").append("You rolled: " + results.join(", ") + " (Sum: " + sum + ")");
    console.log(results);

    totalSum += sum;
    updateTotal();
});

// Reset button
$("#reset").on("click", function () {
    $("#d4-value").empty();
    $("#d6-value").empty();
    $("#d8-value").empty();
    $("#d10-value").empty();
    $("#d12-value").empty();
    $("#d20-value").empty();

    // Reset the input values to 1
    $("#d4-quantity").val(1);
    $("#d6-quantity").val(1);
    $("#d8-quantity").val(1);
    $("#d10-quantity").val(1);
    $("#d12-quantity").val(1);
    $("#d20-quantity").val(1);

    // Reset total sum and update the display
    totalSum = 0;
    updateTotal();
});
