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

var originalGameBoard = document.getElementById('game-board');

// this is an empty array. once the user selects the cards, they are put into this array.
var cardsInPlay = [];

// this function checks for a match from the array:cardsInPlay
var checkForMatch = function () {
	
	console.log("cards selected\ncard 1: " + cardsInPlay[0] + "\ncard 2: " + cardsInPlay[1]);
	/* this if does not check if the same exact card was selected
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again");
	}
	*/

	// attempt to check if same card is selected. if so, doesn't not qualify as a matchg
	if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit){
			alert("Don't select the same card twice. Try again!")
		} else if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again!");
			//reloadBoard();
			//createBoard();
		}
};

// this function will run output to the console the cards chosen and their attributes
// addtionally, it will check for a match using the function:checkForMatch
var flipCard = function () {
	var cardId = this.getAttribute('data-id')

	cardsInPlay.push(cards[cardId]);

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

var reloadBoard = function () {
	gameBoard = document.querySelector('.boardClearFix');
	//this.parentNode.parentNode.removeChild(this.parentNode);
	document.querySelector('main').removeChild('div');
	createBoard();
};

// hides the gameboard and show contents of instruction
var showInstructions = function () {
	//gameBoard = document.querySelector('#game-board');
	document.querySelector('#game-board').style.display = 'none';
};
// calls the function:game-board to create a board wit the cards
createBoard();
//showInstructions();



