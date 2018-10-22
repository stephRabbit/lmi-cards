import React, { Component } from 'react'

import { shuffleArray } from './utils'
import Card from './components/Card'
import Header from './components/Header'

class App extends Component {
  state = {
    cards: [],
    picked: null,
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['♥','♦','♠','♣'],
    shuffled: false,
  }

  componentDidMount() {
    this.createDeck()
  }

  createDeck = () => {
    const { ranks, suits } = this.state
    const cards = []
    let id = 1

    for(let s = 0; s < suits.length; s++) {
      for(let r = 0; r < ranks.length; r++) {
        let card = {
          id,
          rank: ranks[r],
          suit: suits[s],
        }

        cards.push(card)
        id++
      }
    }

    this.setState(() => ({
      cards,
      picked: null,
      shuffled: false,
    }))
  }

  drawCard = () => {
    const { cards } = this.state
    const randomCard = Math.floor(Math.random() * cards.length)
    const findCard = cards[randomCard]
    const filterCards = cards.filter(card => findCard !== card)

    this.setState(() => ({
      cards: filterCards,
      picked: findCard,
    }))
  }

  renderDeck = () => {
    const { cards } = this.state
    return cards.length && cards.map(card => <Card {...card} key={card.id} />)
  }

  shuffleDeck = () => {
    const cards = shuffleArray(this.state.cards)

    this.setState(() => ({
      cards,
      shuffled: true,
    }))
  }

  render() {
    const { cards, picked, shuffled, } = this.state

    return (
      <div className="cards">
        <Header
          createDeck={this.createDeck}
          cardCount={cards.length}
          drawCard={this.drawCard}
          shuffled={shuffled}
          shuffleDeck={this.shuffleDeck}
        />
        {picked && (
          <div className="cards-grid cards-grid--dark">
            <Card {...picked} />
            <div className="cards-drawn">
              <span className="cards-drawn__count">{cards.length}</span><br />Cards remaining
            </div>
          </div>
        )}
        {cards.length > 0 && (
          <div className="cards-grid">
            {this.renderDeck()}
          </div>
        )}
      </div>
    )
  }
}

export default App
