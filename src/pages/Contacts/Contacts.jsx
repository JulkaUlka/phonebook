import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { getIsloading } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm /ContactForm ';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

function Contacts() {
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <h2>Contact-list</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
export default Contacts;