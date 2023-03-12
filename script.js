class Player {
    constructor(name) {
        this.name = name;
        this.playerCards = []
        this.score = 0;
    }
}


class Card {
    constructor(suit, value, royalty) {
        this.suit = suit 
        this.value = value  
        this.royalty = royalty
        this.sortNumber = 0
    }
}


//creates and shuffles deck
class Deck {
    constructor() {
        this.cards = []
        this.makeDeck
        this.shuffleDeck
    }

    makeDeck() {
        let suit = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
        let position = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'Jack', 'Queen', 'King', 'Ace'];

        for(let i = 0; i < suit.length; i++){
            for(let j = 0; j < position.length; j++) {
                let newCard = new Card(suit[i], (j + 1), position[j]);
                newCard.sortNumber = Math.random();
                this.cards.push(newCard);
            }
        }
    }

    shuffleDeck() {
        this.cards.sort(compareSortNumber);
    }
}


class Game {
    constructor() {
        this.deck;
        this.players = [];
        this.runGame;
        this.dealCards;
    }

    //This method deals the deck evenly between two players
    dealCards() {
        let half = this.deck.cards.length / 2;
        this.players[0].playerCards = this.deck.cards.slice(0, half);
        this.players[1].playerCards = this.deck.cards.slice(-half);     
    }

    //this method utilizes all methods and classed to run the game
    runGame() {        
        this.players.push(new Player("Player 1"));
        this.players.push(new Player("Player 2"));
        
        this.deck = new Deck;
        this.deck.makeDeck();
        this.deck.shuffleDeck();
        this.dealCards();

        //This loop runs all the turns, and awards points accordingly
        for(let i = 0; i < this.players[0].playerCards.length; i++){
            console.log(`${this.players[0].name} drew the ${this.players[0].playerCards[i].royalty} of ${this.players[0].playerCards[i].suit}`);
            console.log(`${this.players[1].name} drew the ${this.players[1].playerCards[i].royalty} of ${this.players[1].playerCards[i].suit}`);
            if(this.players[0].playerCards[i].value > this.players[1].playerCards[i].value){
                this.players[0].score++;
                console.log(`${this.players[0].name} won the round.`);
            } else if(this.players[1].playerCards[i].value > this.players[0].playerCards[i].value){
                this.players[1].score++;
                console.log(`${this.players[1].name} won the round.`);
            } else {
                console.log(`TIE. No points awarded.`);            
            }
            console.log(`The score is...  ${this.players[0].name}:${this.players[0].score}     ${this.players[1].name}:${this.players[1].score}`);
        }

        //This if else statement prints winning/losing message at the conclusion of the game
        if(this.players[0].score > this.players[1].score){
            console.log(`CONGRATS!, ${this.players[0].name.toUpperCase()} WINS THE GAME!!!!`)
        } else if(this.players[1].score > this.players[0].score){
            console.log(`CONGRATS!, ${this.players[1].name.toUpperCase()} WINS THE GAME!!!!`)
        } else {
            console.log("IT'S A TIE!");
        }
    }    
}


function compareSortNumber( a, b ) {
    if ( a.sortNumber < b.sortNumber ){
      return -1;
    }
    if ( a.sortNumber > b.sortNumber ){
      return 1;
    }
    return 0;
}

let war = new Game
war.runGame();