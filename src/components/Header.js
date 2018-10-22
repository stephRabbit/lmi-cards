import React from 'react'
import PropTypes from 'prop-types'

import HeaderStyled from './styles/Header'
import Button from './styles/Button'

const Header = ({
  createDeck,
  cardCount,
  drawCard,
  shuffleDeck,
  shuffled,
}) => {
  return (
    <HeaderStyled>
      {cardCount > 0 && (
        <Button
          onClick={shuffleDeck}
        >
          Shuffle
        </Button>
      )}

      {shuffled && cardCount > 0 && (
        <Button
          color="mediumpurple"
          onClick={drawCard}
        >
          Draw
        </Button>
      )}

      {shuffled && (
        <Button
          color="darkorange"
          onClick={createDeck}
        >
          Reset
        </Button>
      )}
    </HeaderStyled>
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