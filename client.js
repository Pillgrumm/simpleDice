// Initialize total sum
let totalSum = 0;

// Function to update the displayed total
function updateTotal() {
    $("#diceSum").text(`Total sum: ${totalSum}`);
}

// Function to roll multiple dice
function rollDice(dieType, numDice) {
    const results = Array.from({ length: numDice }, () => 1 + Math.floor(Math.random() * dieType));
    const sum = results.reduce((acc, roll) => acc + roll, 0);
    return { sum, results };
}

// Function to handle dice rolling
function rollDie(dieType, selector) {
    const numDice = parseInt($(`${selector}-quantity`).val());
    const { sum, results } = rollDice(dieType, numDice);
    $(`${selector}-value`).text(`You rolled: ${results.join(", ")} (Sum: ${sum})`);
    console.log(results);

    totalSum += sum;
    updateTotal();
}

// Roll d20 dice
$("#d20").on("click", () => rollDie(20, "#d20"));

// Roll d12 dice
$("#d12").on("click", () => rollDie(12, "#d12"));

// Roll d10 dice
$("#d10").on("click", () => rollDie(10, "#d10"));

// Roll d8 dice
$("#d8").on("click", () => rollDie(8, "#d8"));

// Roll d6 dice
$("#d6").on("click", () => rollDie(6, "#d6"));

// Roll d4 dice
$("#d4").on("click", () => rollDie(4, "#d4"));

// Reset button
$("#reset").on("click", function () {
    $(".dice-value").empty();
    $(".dice-quantity").val(1);
    
    totalSum = 0;
    updateTotal();
});
