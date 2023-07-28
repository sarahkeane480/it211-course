// Class for Card objects
class Card {
    constructor(value, suit) {
        this.suit = suit;
        this.value = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        // Set rank of card
        if (value == 1) {
            // If value is 1, the card is an ace
            this.rank = 'Ace'
        } else if (value > 10) {
            // If value is greater than 10, it's a Jack, Queen or King
            this.rank = ['Jack', 'Queen', 'King'][value - 11]
        } else {
            // Otherwise, the rank is the value
            this.rank = String(value)
        }

        // Set value
        this._value = value;
    }

    get name() {
        // Return the rank and suit of the card
        return `${this.rank} of ${this.suit}`
    }
}


function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    let deck = [];

    for (let suit of suits) {
        for (let i = 0; i < 13; i++) {
            deck.push(new Card(i + 1, suit))
        }
    }
    return deck
}


function drawCard(deck) {
    // pick random card out of deck
    let key = Math.floor(Math.random() * deck.length);

    // take and remove the card from the deck
    let card = deck[key]
    deck.splice(key, 1)

    // return the card
    return card
}


function dealHand(deck) {
    hand = []

    // Draw 5 cards from the deck
    for (let i = 0; i < 5; i++){
        // ...only if cards remain
        if (deck.length != 0) {
            hand.push(`<li>${drawCard(deck).name}</li>`)
        }
    }
    
    // Clear and display new hand
    $("#card_hand").html("").append(...hand);

    // Display cards remaining in deck
    $("#cards_left").html(`Cards remaining: ${deck.length}`)


    return false; // prevent page reload
}



// Create the deck :)
deck = createDeck()


