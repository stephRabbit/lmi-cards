import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ rank, suit }) => {
  let className = "card"
  if (suit === '♥' || suit === '♦') {
    className += ' card--red';
  }
  else {
    className += ' card--black';
  }

  return (
    <div className={className}>
      <span className="card__suit card__suit--top">{suit}</span>
      <span className="card__number">{rank}</span>
      <span className="card__suit card__suit--bottom">{suit}</span>
    </div>
  )
}

Card.propTypes = {
  rank: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
}

export default Card
