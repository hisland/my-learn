let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function() {
    // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  },
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
