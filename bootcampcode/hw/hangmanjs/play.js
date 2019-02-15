/*
OICE


*/
var wordGuessGame = {
    wordsToPick: {
        vineyard: {
            definition: "wikiarticlereflink"
        },
        gallaudet: {
            definition: "link"
        },
        signing: {
            definition: "link"
        },
        cochlear: {
            definition: "link"
        },
        community: {
            definition: "link"
        }
    },

    //Variables for the beginning of the game
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [], 
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,

    //setting up the game for the first time
    setupGame: function() {
        //random word to pick
        var objKeys = Object.keys(this.wordsToPick);
        this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

        //show each letter
        this.lettersOfTheWord = this.wordInPlay.split("");

        this.rebuildWordView();

        this.processUpdateTotalGuesses();
    },

    //When user guesses a letter
    updatePage: function(letter) {
        //no guesses? start over
        if (this.guessesLeft === 0) {
            this.restartGame();
        }
        //continue..
        else {
            this.updateGuesses(letter);

            this.updateMatchedLetters(letter);

            this.rebuildWordView();

            if (this.updateWins() === true) {
                this.restartGame();
            }
        }
    },

    updateGuesses: function(letter) {

        if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter)=== -1)) {

            this.guessedLetters.push(letter);

            this.guessesLeft--;

            document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
            document.querySelector("#guesses-letters").innerHTML = this.guessedLetters.join(", ");
        }
    },

    processUpdateTotalGuesses: function() {

        this.totalGuesses = this.lettersOfTheWord.length + 5;
        this.guessesLeft = this.totalGuesses;

        document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    },

    updateMatchedLetters: function(letter) {
        
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                this.matchedLetters.push(letter);
            }
        }
    },

    rebuildWordView: function() {
        var wordView = "";

        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
                wordview += this.lettersOfTheWord[i];
            }
            else {
                wordview += "&nbsp;_&nbsp;";
            }
        }

        document.querySelector("#current-word").innerHTML = wordview;
    },

    restartGame: function() {
        document.querySelector("#guessed-letters").innerHTML = "";
        this.wordInPlay = null;
        this.lettersOfTheWord = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.setupGame();
        this.rebuildWordView();
    },

    updateWins: function() {
        var win;

        if (this.matchedLetters.length === 0) {
            win = false;
        }
        else {
            win = true;
        }

        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
                win = false;
            }
        }

        if (win) {

            this.wins = this.wins + 1;

            document.querySelector("#wins").innerHTML = this.wins;
            
            document.querySelector("#blah").innerHTML = this.wordsToPick[this.wordInPlay].song + " By " + this.wordInPlay;

            document.querySelector("#bandDiv").innerHTML = 
            "<img class ='band-image' src='../images/" +
            this.wordsToPick[this.wordInPlay].definition + "' alt='" +
            this.wordsToPick[this.wordInPlay].whatever + "'>";

            var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
            audio.play();

            return true;
        }
        return false;
    }

};

wordGuessGame.setupGame();