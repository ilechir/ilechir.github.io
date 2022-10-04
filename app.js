document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'sol', 
        img: 'assets/sol.png'
    },
    {
        name: 'sol', 
        img: 'assets/sol.png'
    },
    {
        name: 'luna', 
        img: 'assets/luna.png'
    },
    {
        name: 'luna', 
        img: 'assets/luna.png'
    },
    {
        name: 'tierra', 
        img: 'assets/tierra.png'
    },
    {
        name: 'tierra', 
        img: 'assets/tierra.png'
    },
    {
        name: 'marte', 
        img: 'assets/marte.png'
    },
    {
        name: 'marte', 
        img: 'assets/marte.png'
    },
    {
        name: 'planeta', 
        img: 'assets/planeta.png'
    },
    {
        name: 'planeta', 
        img: 'assets/planeta.png'
    },
    {
        name: 'planetas', 
        img: 'assets/planetas.png'
    },
    {
        name: 'planetas', 
        img: 'assets/planetas.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardChosen = []
var cardChosenId = []
var cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'assets/tapa.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
 
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]) { 
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'assets/blanca.png')
        cards[optionTwoId].setAttribute('src', 'assets/blanca.png')
        cardsWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'assets/tapa.png')
        cards[optionTwoId].setAttribute('src', 'assets/tapa.png')
        alert('Sorry, try again')
    }    
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = '  Felicitaciones!! Los Encotraste a Todos!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2 ) { 
        setTimeout(checkForMatch, 400)
    }
  }
 
 createBoard()

})