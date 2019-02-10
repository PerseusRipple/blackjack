// DOM Events

document.addEventListener('DOMContentLoaded', main)
document.getElementById('dealBtn').addEventListener('click', playGame)
document.getElementById('hitBtn').addEventListener('click', goToHit)
document.getElementById('standBtn').addEventListener('click', userStands)
document.getElementById('resetBtn').addEventListener('click', resetGame)
const playerSum = document.getElementById('player-sum')
const dealerSum = document.getElementById('dealer-sum')
const writeResults = document.getElementById('results-box')
const winsCounter = document.getElementById('wins-counter')
const playerCards = document.getElementById('player-cards')
const dealerCards = document.getElementById('dealer-cards')

let deck = []

const cardsValue = [
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

const cardsSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

let numberOfCardsPlayer = 0

let numberOfCardsDealer = 0

let numOfWins = 0

const main = () => {
  // call function to create deck on page load
  buildDeck()
  // call function to shuffle deck
  shuffleDeck()
}

// Build Deck

const buildDeck = () => {
  for (let i = 0; i < cardsSuit.length; i++) {
    // console.log(deck)
    for (let j = 0; j < cardsValue.length; j++) {
      // let value = cardsValue[value]
      // let suit = cardsSuit[suit]
      deck.push('the ' + cardsValue[j] + ' of ' + cardsSuit[i])
    }
  }

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

  //Display Card

  const displayCards = () => {
    for (let i = 0; i < deck.length; i++) {
      let imgElement = document.createElement('img')
      imgElement.src =
        'images/' + deck[i].cardsValue + '_of_' + deck[i].cardSuit + '.svg'
      imgElement.style.height = '120px'
      imgElement.style.width = '100px'
      if (displayCards === mainPlayer) {
        numberOfCardsPlayer++
        playerCards.appendChild(imgElement)
      } else {
        numberOfCardsDealer++
        dealerCards.appendChild(imgElement)
        console.log('cards')
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
}
writeResults.value = sum

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

const hitCard = () => {
  let lastCard = []
  let extraCard = deck.push(newCard.deck.pop())
  lastCard.push(deck[extraCard - 1])
  // push only last card and display
  displayCards(lastCard)
  if (hitCard === mainPlayer) {
    checkIfBust()
  }
}

//Player and Dealer

const player = () => {
  let mainPlayer = []
  mainPlayer.deck.push(PlayingDeck.deck.pop()), playingDeck.deck.pop()
  mainPlayer.displayCards(mainPlayer.deck)
  playerSum.value = mainPlayer.sumCards(mainPlayer.deck)
}

const dealer = () => {
  let mainDealer = []
  mainDealer.deck.push(PlayingDeck.deck.pop()), playingDeck.deck.pop()
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
    writeResults.value = 'BUST !'
    numberOfWins -= 1
    winsCounter.value = numberOfWins
    disableHitStand()
  } else if (playerScore === 21) {
    writeResults.value = '21! You Win !!'
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
    writeResults.value = 'Dealer wins with' + dealerScore
    numberOfWins -= 1
    winsCounter.value = numberOfWins
    disableHitStand()
  } else if (playerScore > dealerScore || dealerScore > 21) {
    if (playerScore === 21) {
      writeResults.value = 'BLACKJACK !'
      numberOfWins += 1
      winsCounter.value = numberOfWins
      disableHitStand()
    }
  } else {
    writeResults.value = 'Hands Tie with ' + playerScore
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
  writeResults.value = ''
  dealerSum.value = ''
  playerSum.value = ''
  deal.disabled = false
  removeImages = () => {
    let playerCardImages = playerCards.childNodes
    let dealerCardImages = dealerCard.childNodes
    for (let i = numberOfCardsPlayer; i > 0; i--) {
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

/*
  document.getElementById('player-sum').return = sum
  document.getElementById('dealer-sum').return = sum */

// Hit Card
