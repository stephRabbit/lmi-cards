import styled from 'styled-components'

const Card = styled.div`
  background-color: whitesmoke;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, .5);
  border-radius: 3px;
  color: ${props => props.color === 'red' ? 'crimson' : 'black'};
  height: 100px;
  position: relative;
  width: 75px;

  .card__suit {
    display: block;
    width: 100%;
  }

  .card__suit--top {
    padding-left: 2px;
    text-align: left;
  }

  .card__suit--bottom {
    bottom: 0;
    position: absolute;
    right: 2px;
    text-align: left;
    transform: rotate(180deg);
  }

  .card__number {
    position: absolute;
    top: 38%;
    text-align: center;
    width: 100%;
  }
`

export default Card