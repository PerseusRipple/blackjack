/*const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
} */

/*document.addEventListener('DOMContentLoaded', main) */

/*let deck = []

const valuesOfCards = [
  'Ace',
  'King',
  'Queen',
  'Jack',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10'
]
const suitsOfCards = ['Clubs', 'Diamonds', 'Hearts', 'Spades'] */
let deck = []

let cardsInDeck = 5
cardsInDeck[0] = '2_of_clubs'
cardsInDeck[1] = '2_of_diamonds'
cardsInDeck[2] = '2_of_hearts'
cardsInDeck[3] = '2_of_spades'
cardsInDeck[4] = '3_of_clubs'

/*const main = () => {
  // call function to create deck on page load
 /* buildDeck() */
// call function
shuffleDeck() /*
}

/*
// Build Deck
const buildDeck = () => {
  for (let i = 0; i < suitsOfCards.length; i++) {
    // console.log(deck)
    for (let j = 0; j < valuesOfCards.length; j++) {
      // let values = valuesOfCards[value]
      // let suit = suitsOfCards[suits]
      deck.push('the ' + valuesOfCards[j] + ' of ' + suitsOfCards[i])
    }
  } }

  console.log(deck) */
const main = () => {
  shuffleDeck()
}

// Shuffle Deck

const shuffleDeck = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    // Swap card at position shuffle with the card at position random

    let cardAtPositionI = deck[i]
    let cardAtPositionJ = deck[j]

    // Put the card at position shuffle at position random
    deck[i] = cardAtPositionJ

    // Put the card at position random at position shuffle
    deck[j] = cardAtPositionI

    // console.log(deck)
  }
  console.log(deck)
}

// Deal Card

const dealCard = () => {
  if (numberOfCardsInDeck == 0) return false
  const img = document.createElement('img')
  img.src = 'public/images' + numberOfCardsInDeck[i] + '.svg'

  document.body.appendChild(img)
  document.removeCard(i)
}

/*
// console.log(deck)

// Deal Card (org)
const dealCard = () => {
  let newCard = deck.splice(0, 1)
  if (deck.length > 0) {
    // const _li = document.createElement('li')
    // li.textContent = newCard
    document.querySelector('.dealers-hand').textContent = newCard
  }
  let nextNewCard = deck.splice(0, 1)


  //from original shuffle assignment
  if (deck.length > 0) {
    // const _li = document.createElement('li')
    // li.textContent = newCard
    document.querySelector('.player-1').textContent = nextNewCard
  }
} */

// console.log('return')

/* for(let deck = Math.floor(Math.random() * cardAtPositionShuffle.length)
    return cardAtPositionShuffle.splice(card, 1)[0] */

/*
 const mySection = document.createElement('section')
mySection.textContent = 'Hello, World'
document.querySelector('.container').appendChild(mySection) */

// i = shuffle
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deal').addEventListener('click', dealCard)
