
/*const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
} */
// DOM Events

document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', main)
document.getElementById('dealBtn').addEventListener('click', playGame)
document.getElementById('hitBtn').addEventListener('click', goToHit)
document.getElementById('standBtn').addEventListener('click', userStands)
document.getElementById('resetBtn').addEventListener('click', resetGame)
const playerSum = document.getElementById('player-sum')
const dealerSum = document.getElementById('dealer-sum')
const writeResults = document.getElementById('results-box')
const winsCounter = document.getElementById('wins-counter')
const playerCards = document.getElementById('player1-hand')
const dealerCards = document.getElementById('dealer-hand')

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

let numberOfCardsPlayer = 0

let numberOfCardsDealer = 0

let numOfWins = 0

/*let deck = []

let numberOfCardsInDeck = 65
cardsInDeck[0] = '2_of_clubs'
cardsInDeck[1] = '2_of_diamonds'
cardsInDeck[2] = '2_of_hearts'
cardsInDeck[3] = '2_of_spades'
cardsInDeck[4] = '3_of_clubs' */


const main = () => {
  // call function to build CardObject
  buildCard()
  // call function to create deck on page load
  buildDeck()
  // call function to shuffle deck
  shuffleDeck()
}

// Build CardObject by defining properties for each card

const buildCard = () => {
  for (let i = 0; i < cardsSuit.length; i++) {
    // console.log(deck)
    for (let j = 0; j < cardsValue.length; j++) {
      // let value = cardsValue[value]
      // let suit = cardsSuit[suits]
      deck.push('the ' + valuesOfCards[j] + ' of ' + suitsOfCards[i]) 
      //console.log(deck push)
    }
  }

  // Build Deck and Display Cards
  
  const buildDeck = () => {
   /*const displayCards = () => { */
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
        console.log (cards-show)
      }
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

   return sum
  let playerSum = document.getElementById('player-sum')
  let dealerSum = document.getElementById('dealer-sum')
  }

// Hit Card

const hitCard = () => {
  let lastCard = []
  let extraCard = deck.push(PlayingDeck.deck.pop())
  lastCard.push(deck[extraCard - 1]) 
  // push only last card and display
  displayCards(lastCard)
  if (hitCard === mainPlayer) {
    checkIfBust()
  }
  }
/*
const main = () => {
  shuffleDeck() 
} */

// Shuffle Deck

const shuffleDeck = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
// Swap card at position shuffle with the card at position random
//J is temp
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

// Deal Card 
const dealCard = () => {
  let newCard = deck.splice(0, 1)
  if (deck.length > 0) {
    // const _li = document.createElement('li')
    // li.textContent = newCard
    document.querySelector('.dealers-hand').textContent = newCard
    return newCard
  }
  let nextNewCard = deck.splice(0, 1)
  //from original shuffle assignment
  if (deck.length > 0) {
    // const _li = document.createElement('li')
    // li.textContent = newCard
    document.querySelector('.player-1').textContent = nextNewCard
    return nextNewCard

  }
}

//Player and Dealer

const player = () => {
  let mainPlayer = []
  mainPlayer.deck.push(PlayingDeck.deck.pop()), playingDeck.deck.pop())
  mainPlayer.displayCards(mainPlayer.deck)
  playerSum.value = mainPlayer.sumCards(mainPlayer.deck)
}

const dealer = () => {
  let mainDealer = []
  mainDealer.deck.push(PlayingDeck.deck.pop()), playingDeck.deck.pop())
  mainDealer.displayCards(mainDealer.deck)
  dealerSum.value = mainDealer.sumCards(mainDealer.deck)
}

// Bust Checker

const checkIfBust = () => {
  let playerScore = mainPlayer.sumCards(mainPlayer.deck)
  let dealerScore = mainDealer.sumCards(mainDealer.deck)
  playerSum.value = playerScore
  dealerSum.value = dealerScore
  if (playerScore > 21) {
    writeResult.value = 'BUST !'
    numberOfWins -= 1
    winsCounter.value = numberOfWins
    disableHitStand()
    } else if (playerScore === 21) {
      textContent.value = '21! You Win !!'
      numberOfWins += 1
      winsCounter.value = numberOfWins
      disableHitStand()
    }
}

// Hit Function

goToHit = () => {
  mainPlayer.hitCard(mainPlayer.deck)
}

// Stands Function

userStands = () => {
  let playerScore = mainPlayer.sumCards(mainPlayer.deck)
  let dealerScore = mainDealer.sumCards(mainDealer.deck)
  playerSum.value = playerScore
while (dealScore < 17) {
  mainDealer.hitCard(mainDealer.deck)
  dealerScore = mainDealer.sumCards(mainDealer.deck)
  dealerSum.value = dealerScore
} 
if (dealerScore > playerScore && dealerScore <= 21) {
  writeResult.value = 'Dealer wins with' + dealerScore
  numberOfWins -= 1
  winsCounter.value = numberOfWins
  disableHitStand()
} else if (playerScore > dealerScore || dealerScore > 21) {
  if (playerScore === 21) {
    writeResult.value = 'BLACKJACK !'
    numberOfWins += 1
    winsCounter.value = numberOfWins
    disableHitStand()
  }
} else {
  writeResult.value = 'Hands Tie with ' + playerScore
  disableHitStand()
}
}

// Disable Hit and Stand

disableHitStand = () => {
  stand.disabled = true
  hit.disabled = true
}

// Play on Deal

playGame = () => {
  player()
  dealer()
  deal.disabled = true
  stand.disabled = false
  hit.disabled = false
}

// Game Reset

resetGame = () => {
  writeResult.value = ''
  dealerSum.value = ''
  playerSum.value = ''
  deal.disabled = false;
  removeImages = () => {
    let playerCardImages = playerCards.childNodes
    let dealerCardImages = dealerCard.childNodes
for (let i = numberOfCardsPlayer; i > 0; i--){
  playerCardImages[i].parentNode.removeChild(playerCardImages[i]) 
}
for (let j = numberOfCardsDealer; j > 0; j--) {
  dealerCardImages[j].parentNode.removeChild(dealerCardImages[j])
}
  }
mainPlayer.deck = []
mainDealer.deck = []
numberOfCardsDealer = 0
numberOfCardsPlayer = 0
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



/*
  // Get Card Value

const getCardValue = () => {
  if (cardNumber === 'jack' || cardNumber === 'queen' || cardNumber === 'king') {
    return 10
  } else if (cardNumber === 'ace') {
  return 11
} else {
  return cardNumber
}
}  */
