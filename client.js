//d20 dice
var d20 = {
    dice: roll = {
        value: 0,
    }
}

$("#d20").on("click", function () {
    d20.dice.value = 1 + Math.floor(Math.random() * 20);
    $("#d20-value").empty();
    $("#d20-value").append("You rolled: " + d20.dice.value + " ");
});


//d12 dice
var d12 = {
    dice: roll = {
        value: 0,
    }
}

$("#d12").on("click", function () {
    d12.dice.value = 1 + Math.floor(Math.random() * 12);
    $("#d12-value").empty();
    $("#d12-value").append("You rolled: " + d12.dice.value + " ");
});

//d10 dice
var d10 = {
    dice: roll = {
        value: 0,
    }
}

$("#d10").on("click", function () {
    d10.dice.value = 1 + Math.floor(Math.random() * 10);
    $("#d10-value").empty();
    $("#d10-value").append("You rolled: " + d10.dice.value + " ");
});

//d8 dice
var d8 = {
    dice: roll = {
        value: 0,
    }
}

$("#d8").on("click", function () {
    d8.dice.value = 1 + Math.floor(Math.random() * 8);
    $("#d8-value").empty();
    $("#d8-value").append("You rolled: " + d8.dice.value + " ");
});

// d6 dice
var d6 = {
    dice: roll = {
        value: 0,
    }
}

$("#d6").on("click", function () {
    d6.dice.value = 1 + Math.floor(Math.random() * 6);
    $("#d6-value").empty();
    $("#d6-value").append("You rolled: " + d6.dice.value + " ");
});

// d4 dice
var d4 = {
    dice: roll = {
        value: 0,
    }
}

$("#d4").on("click", function () {
    d4.dice.value = 1 + Math.floor(Math.random() * 4);
    $("#d4-value").empty();
    $("#d4-value").append("You rolled: " + d4.dice.value + " ");
});

$("#reset").on("click", function () {
    $("#d4-value").empty();
    $("#d6-value").empty();
    $("#d8-value").empty();
    $("#d10-value").empty();
    $("#d12-value").empty();
    $("#d20-value").empty();
});
//let htmlImageOutput = "<img src='images/dice/dice-" + diceNumber + ".png' class='dice-image'>";