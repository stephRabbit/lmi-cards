import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.color ? props.color : 'dodgerblue'};
  border: 1px solid transparent;
  border-radius: 3px;
  color: whitesmoke;
  cursor: pointer;
  display: inline-block;
  font-size: .85rem;
  font-weight: 500;
  padding: .5rem 1.5rem;
  margin: .25rem;
  min-width: 100px;
  transition: background-color 0.5s ease;
  vertical-align: middle;

  &:hover {
    background-color: transparent;
    border: 1px solid whitesmoke;
    color: whitesmoke;
  }
`

export default Button