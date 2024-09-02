import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "./redux/filter/filtersSlice";
import { apiAddContact, apiDeleteContact, apiGetAllContacts } from "./redux/contactsOps";
import { selectFilteredContacts, selectorLoading } from "./redux/сontacts/contact.selector";
import { selectFilter } from "./redux/filter/filter.select";

const App = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);
  const isLoading = useSelector(selectorLoading);
  const filteredContacts = useSelector(selectFilteredContacts)

  useEffect(() => {
    dispatch(apiGetAllContacts())
  }, [dispatch])

  const onAddContact = (profile) => {
    dispatch(apiAddContact(profile));
  };

  const onDeleteContact = (contactsId) => {
    dispatch(apiDeleteContact(contactsId));
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(setFilterValue(value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBar filterValue={filterValue} handleFilter={handleFilter} />
      {isLoading ? <p>Loading...</p> : <ContactsList onDeleteContact={onDeleteContact} contacts={filteredContacts} />}
    </div>
  );
};

export default App;