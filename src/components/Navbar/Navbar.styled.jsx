import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const HeaderWrapper = styled.div`

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

export const OutletStyled = styled(Outlet)`
  
`;