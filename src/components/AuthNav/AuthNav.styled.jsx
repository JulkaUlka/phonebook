import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
   
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;
export const WelcomeTitle = styled.p`
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
`;
export const NavLinkStyled = styled(NavLink)`
color: black;
font-size: 20px;
font-weight: 700;
text-transform: uppercase;
text-decoration: none;
&:hover,
&:focus {
  color: orange;
}

&.active {
  color: orange;
  padding: 6px 12px;
  border-radius: 4px;
  pointer-events: none;
  text-decoration: underline;
}

`;
export const Button = styled.button`
background: orange;
box-shadow: 0 3px 0 0 grey;
border-radius: 2px;
border: none;
color: #fff;
cursor: pointer;
outline: none;
padding: 10px 15px;
text-shadow: 0 1px #68b25b;
&:hover,
 &:focus {
 background-color :#5b9962 ;
 
}
`;
