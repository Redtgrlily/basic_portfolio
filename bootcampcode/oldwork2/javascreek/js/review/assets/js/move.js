var computerGuess = "";
var Guess = "";
var wordBank = ["vegan", "cat", "Mew", "central","brownsville","blue","elmond"];

computerGuess = Math.floor(Math.random()*(wordBank.length))


for (var i = 0; i<wordBank[computerGuess].length; i++) {
    document.getElementById("spaces").innerHTML+="_ ";    
}

document.onkeydown = function(event) {

    document.getElementById("win").innerHTML="";
    document.getElementById("lose").innerHTML="";
}

// document.onkeyup("click", function(){




// });