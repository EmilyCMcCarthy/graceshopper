import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 0;
`
export const Header = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 background-image: url('/ep_naturalblack.png');
 width: 100vw;
 box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.75);
`
export const Title = styled.h1`
  font-size: 35px;
  letter-spacing: 10px;
  font-family: 'Oswald', sans-serif;
  padding: 0 50px;
  color: white;
`
export const Menu = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledLink = styled(Link) `
  padding: 41px;
  height: 100%;
  color: black;
  cursor: pointer;
  &:hover{
    color: white;
    background: #0E121B
  }
`