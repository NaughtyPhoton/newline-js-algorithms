const CARD_NAMES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
const CARD_SUITS = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

class Card {
    constructor(name, suit) {
        this.name = name;
        this.suit = suit;
        this.value = CARD_NAMES.indexOf(this.name) + 1;
    }

    toString(callback = null) {
        return callback ? callback(this) : `${this.name} - ${this.suit}`;
    }
}

class Deck {
    constructor() {
        /**
         * @type {Card[]}
         * @private
         */
        this._deck = [];

        for (let name of CARD_NAMES) {
            for (let suit of CARD_SUITS) {
                this._deck.push(new Card(name, suit));
            }
        }
    }

    shuffle() {
        const result = [];
        const deck = [...this._deck];
        for (let i = 0; i < deck.length; i++) {
            const randomIndex = Math.floor(deck.length * Math.random());
            result.push(deck[randomIndex]);
            deck.slice(randomIndex, 1);
        }
        return this._deck = result;
    }

    toString(callback) {
        return this._deck.map(card => card.toString(callback)).toString();
    }

    peek() {
        return this._deck[this._deck.length - 1];
    }

    pop() {
        return this._deck.pop();
    }

    push(card) {
        return this._deck.push(card);
    }

    /**
     * @returns {Generator<Card, void, *>}
     */
    * [Symbol.iterator]() {
        while (this._deck.length) yield this.pop();
    }
}

const deck = new Deck();

console.log(deck.toString(card => `${card.value}`));
deck.shuffle();
console.log(deck.toString(card => `${card.value}`));

const players = [{name: 1, hand: []}, {name: 2, hand: []}, {name: 3, hand: []}, {name: 4, hand: []}]

function deal(players, deck) {
    let playerIndex = 0;
    for (let card of deck) {
        players[playerIndex].hand.push(card);
        playerIndex = (playerIndex < players.length - 1) ? playerIndex + 1 : 0;
    }
}

deal(players, deck);
console.log(players)
