import React from 'react'
import PropTypes from 'prop-types'

const Header = ({
  createDeck,
  cardCount,
  drawCard,
  shuffleDeck,
  shuffled,
}) => {
  return (
    <header className="cards-header">
      {cardCount > 0 && (
        <button
          className="cards-header__button cards-header__button--blue"
          onClick={shuffleDeck}
        >
        Shuffle
        </button>
      )}

      {shuffled && cardCount > 0 && (
        <button
          className="cards-header__button cards-header__button--purple"
          onClick={drawCard}
        >
          Draw
        </button>
      )}

      {shuffled && (
        <button
          className="cards-header__button cards-header__button--orange"
          onClick={createDeck}
        >
        Reset
        </button>
      )}
    </header>
  )
}

Header.propTypes = {
  createDeck: PropTypes.func.isRequired,
  cardCount: PropTypes.number.isRequired,
  drawCard: PropTypes.func.isRequired,
  shuffleDeck: PropTypes.func.isRequired,
  shuffled: PropTypes.bool.isRequired,
}

export default Header