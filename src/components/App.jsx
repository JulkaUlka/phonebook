import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar/Navbar';

import { refreshUser } from 'redux/user/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return  (
    <>
     <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
    </Suspense>
    </>
  );
};
