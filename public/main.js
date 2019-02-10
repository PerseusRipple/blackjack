import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'

/*const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
} */

document.addEventListener('DOMContentLoaded', main)

let deck = []

const cardsValue = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'jack',
  'queen',
  'king',
  'ace'
]

const cardsSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

let numOfCardsPlayer = 0

let numOfCardsDealer = 0

let numOfWins = 0

/*let deck = []

let numberOfCardsInDeck = 65
cardsInDeck[0] = '2_of_clubs'
cardsInDeck[1] = '2_of_diamonds'
cardsInDeck[2] = '2_of_hearts'
cardsInDeck[3] = '2_of_spades'
cardsInDeck[4] = '3_of_clubs' */

const main = () => {
  // call function to create deck on page load
  buildDeck()
  // call function
  shuffleDeck()
}

// Build New Deck

const buildDeck = () => {
  for (let i = 0; i < cardsSuit.length; i++) {
    // console.log(deck)
    for (let j = 0; j < cardsValue.length; j++) {
      // let value = cardsValue[value]
      // let suit = cardsSuit[suits]
      /*deck.push('the ' + valuesOfCards[j] + ' of ' + suitsOfCards[i])) */
      //console.log(deck push)
    }
  }

  // Display Cards

  const displayCards = () => {
    for (let i = 0; i < deck.length; i++) {
      let imgElement = document.createElement('img')
      imgElement.src =
        'images/' + deck[i].cardsValue + '_of_' + deck[i].cardSuit + '.svg'
      imgElement.style.height = '120px'
      imgElement.style.width = '100px'
      if (displayCards === mainPlayer) {
        numberOfCardsPlayer++
        player1Hand.appendChild(imgElement)
      } else {
        numberOfCardsDealer++
        dealerHand.appendChild(imgElement)
      }
    }
  }

  // Get Card Sum by adding numeric values of dealt cards

  let sum = 0
  let aces = 0
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].getCardValue() === 11) {
      aces += 1
      sum = sum + deck[i].getCardValue()
    } else {
      sum = sum + deck[i].getCardValue()
    }
  }
  while (aces > 0 && sum > 21) {
    aces -= 1
    sum -= 10
  }
  return sum
}

// Get Card Value
/*
const getCardValue = () => {
  if (cardNumber === 'jack' || cardNumber === 'queen' || cardNumber === 'king') {
    return 10
  } else if (cardNumber === 'ace') {
  return 11
} else {
  return cardNumber
}
} */

console.log(deck)
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

// Get Values

const getValues = () => {
  for (let i = deck.length; (counter = 0); count_1 = false) {}
}

// Deal Card
/*
const dealCard = () => {
  if (cardsInDeck == 0) return false
  const img = document.createElement('img')
  img.src = 'public/images' + deck + '.svg'

  document.body.appendChild(img)
  document.removeCard 
} */

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
}

// console.log('return')
/*
 for(let deck = Math.floor(Math.random() * cardAtPositionShuffle.length)
    return cardAtPositionShuffle.splice(card, 1)[0] */

/*
 const mySection = document.createElement('section')
mySection.textContent = 'Hello, World'
document.querySelector('.container').appendChild(mySection) */

// i = shuffle
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deal').addEventListener('click', dealCard)
