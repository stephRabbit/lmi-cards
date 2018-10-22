import React from 'react'
import PropTypes from 'prop-types'

import CardStyled from './styles/Card'

const Card = ({ rank, suit }) => {
  let color = 'black';
  if (suit === '♥' || suit === '♦') {
    color = 'red';
  }

  return (
    <CardStyled color={color}>
      <span className="card__suit card__suit--top">{suit}</span>
      <span className="card__number">{rank}</span>
      <span className="card__suit card__suit--bottom">{suit}</span>
    </CardStyled>
  )
}

Card.propTypes = {
  rank: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
}

export default Card
