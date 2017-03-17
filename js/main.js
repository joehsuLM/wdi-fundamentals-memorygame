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
	
	console.log("cards selected: " + cardsInPlay);
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again");
	}
};

// this function will run output to the console the cards chosen and their attributes
// addtionally, it will check for a match using the function:checkForMatch
var flipCard = function () {
	var cardId = this.getAttribute('data-id')
	//console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	//console.log(cards[cardId].suit);
	//console.log(cards[cardId].cardImage);

	// loads the image of the card face when clicked
	this.setAttribute('src', cards[cardId].cardImage);

	// checks if there are two cards selected
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

// creates game board
var createBoard = function () {
	for (i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.querySelector('#game-board').appendChild(cardElement);
	}
};


// calls the function:game-board to create a board wit the cards
createBoard();



