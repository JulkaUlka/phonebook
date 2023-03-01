
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavBar, NavLinkStyled, OutletStyled } from './Navbar.styled';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
    <NavBar>
     
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn ? <AuthNav /> : <UserMenu />}
      </NavBar>
      <OutletStyled />
      </>
  
  );
};
