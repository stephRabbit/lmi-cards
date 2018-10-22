import styled from 'styled-components'

const CardGrid = styled.div`
  background-color: ${props => props.dark ? 'rgba(0, 0, 0, .25)' : 'transparent'};
  display: grid;
  grid-gap: .5rem;
  grid-auto-rows: 100px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, 75px);
  justify-content: center;
  padding: 1.5rem .5rem;
  .cards-drawn {
    border-radius: 3px;
    color: whitesmoke;
    font-weight: 500;
    grid-column-start: 2;
    grid-column-end: 5;
    padding: .5rem;
  }
  .cards-drawn__count {
    font-size: 3rem;
  }
`

export default CardGrid