import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/user/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

export const AuthNav = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink to="contacts">Phonebook</NavLink>
        </li>
      </ul>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
