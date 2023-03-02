import { logOut } from 'redux/user/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Wrapper, WelcomeTitle, NavLinkStyled, Button } from './AuthNav.styled';

export const AuthNav = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Wrapper>
      <NavLinkStyled to="contacts">Phonebook</NavLinkStyled>
      <WelcomeTitle>Welcome, {user.name}</WelcomeTitle>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};
