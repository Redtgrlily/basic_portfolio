//Global
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/1.gif", "./assets/images/2.gif", "./assets/images/3.gif", "./assets/images/4.gif"];



//Functions

function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".crystal-images").append(crystal);
    }
}

function resetHTML () {
    $(".target-number").html(targetNumber);
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    $(".crystal-images").empty();
}

function totalReset () {
    randomTargetNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
}

function crystalClick () {
    //attr returns first value of selected html element
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};

$(document).on("click", ".crystal", crystalClick);

//Process

randomTargetNumber();
	resetHTML ();
resetCrystals ();