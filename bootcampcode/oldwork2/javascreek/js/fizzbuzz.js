//52 cards in a deck and 1 card is missing, how do you find the card? 
/*
set an array with the correct card set of 13

split the suits into 4 arrays representing each suits

get the length of each of the 4 array suits

if one of the 4 arrays has less than 13, compare the correct card array with the 12 set array and get the index of the different card number/symbol


OR*****
Divide the cards into the 4 suits
Count the number of cards per suit
If 13 cards for a given suit = full suit
Suit with 12 cards sort numerically to determine missing card
*/


//fizzbuzz interview
/*
If a number is divisible by 3 and 5, show the word FizzBuzz in replacement of the number. If the number is divisible by 3, show the word Fizz, 
if the word is divisible by 5 show the word buzz. else show the number. 

or 

make a loop to go from 1 to 100 
create variable to store fizzbuzz string
check if the number is divisible by 3 and add fizz string in the variable
do the same for the number is divisible by 5, then log the word buzz (add the buzz string in the variable)
else display the number
*/
// for (i = 1; i<100; i++) {
//     var fizzBuzzer = "";
//     if ((i % 3 == 0) && (i % 5 == 0))console.log("FizzBuzz");
//     else if (i % 3 == 0 ) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }
// for (i = 1; i<100; i++) {
//     var fizzBuzzer = "";
//     if (i%3 ==0) {
//         fizzBuzzer += 'fizz';
//     }
//     if (i%5 == 0) {
//         fizzBuzzer += 'buzz';
//     }
//     if (fizzBuzzer.length >0){
//         console.log(fizzBuzzer);
//     } else {
//         console.log(i);
//     }
// }
//prime numbers display 
//for loop from 1 to 1000
//where index = index
//for loop from 2 to index-1
//check if modulus of 2 to index - 1
//if no remainder, it is not a prime number .
// function isPrime(num) {
//     for ( var i = 2; i < num; i++ ) {
//         if ( num % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

// function display(n) {
//     var arr = [2];
//     for ( var i = 3; i < n; i+=2 ) {
//         if ( isPrime(i) ) {
//             arr.push(i);
//         }
//     }
//     console.log(arr); // use arr result on your own
// }

// display(100);

// //or
// for (var index = 1; i <= 1000; i++){
//     for (var j= 2; j <index; i++) {
//         if (index % 2 !== 0);
//         break;
//     }
// }


//categorize the file extensions into their own arrays: 
/*
Loop through files
Grab the extension file types
determine if image or video
Push to appropriate array(image, video)
publish result

https://www.w3schools.com/jsref/jsref_obj_string.asp

*/
// var files = [
//     "pavans_first_birthday.mov",
//     "owens_asleep_at_the_computer.jpg",
//     "michael_fights_a_polar_bear.mp4",
//     "nate_road_rage.avi",
//     "ruby_skydiving.jpeg",
//     "ken_getting_his_black_belt.png",
//     "dan_winning_underground_street_race.mov",
//     "its_hard_to_come_up_with_file_names.gif",
//     "seriously_this_is_taking_too_long.mpg",
//     "i_wonder_how_many_of_these_i_should_have.png",
//     "probably_a_few_more.avi",
//     "nutmeg_is_clawing_my_sneakers_again.mp4",
//     "cat_i_will_destroy_you.gif",
//     "i_wish_we_had_a_dog.jpeg",
//     "stop_looking_at_me_like_that_nutmeg.mpeg",
//     "aww_i_cant_hate_you.png",
//     "omg_my_sneakers.avi",
//     "cat_you_are_the_worst.mp4"
//   ];
//   var img = [];
//   var video = [];

//  var fileExt = fileArray[i].split(".").pop();

//  if (imageExtensions.indexOf(fileExt) !== -1) {
//      images.push(fileArray[i])
//  }

//bubblesort tool helps visualize the code as it takes place in the site. 

