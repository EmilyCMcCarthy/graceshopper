import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 0;
`
export const Header = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 background-image: url('/ep_naturalblack.png');
 width: 100vw;
`
export const Title = styled.h1`
  font-size: 40px;
  padding: 20px;
  color: white;
`
export const Menu = styled.div`
  padding: 15px;
  background: white;
  border: 1px solid grey;
  box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.75);
`
export const StyledLink = styled(Link) `
  padding: 0 15px;
  color: black;
  cursor: pointer;
  &:hover{
    color: darkblue;
  }
`