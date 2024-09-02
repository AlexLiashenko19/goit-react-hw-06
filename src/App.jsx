import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  apiGetAllContacts } from './redux/contactsOps';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBar from './components/SearchBar/SearchBar';
import { selectorLoading } from './redux/сontacts/contact.selector';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectorLoading);

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBar/>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContactList/>
      )}
    </div>
  );
};

export default App;