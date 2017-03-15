// these are the cards on the board
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// this is an empty array. once the user selects the cards, they are put into this array.
var cardsInPlay = [];

// this function checks for a match from the array:cardsInPlay
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again");
	}
};

// this function will run output to the console the cards chose and their attributes
// addtionally, it will check for a match using the function:checkForMatch
var flipCard = function (cardId) {
	
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

// this is the user "choosing" the cards
flipCard(0);
flipCard(1);



