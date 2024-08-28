import { useMemo } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import SearchBar from "./components/SearchBar/SearchBar";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilterValue } from "./redux/filtersSlice";

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.contacts);
  const filterValue = useSelector((state) => state.filter.filterValue);

  const onAddContact = (profile) => {
    const finalProfile = { ...profile, id: nanoid() };
    dispatch(addContact(finalProfile));
  };

  const onDeleteContact = (contactsId) => {
    dispatch(deleteContact(contactsId));
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(setFilterValue(value));
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }, [contacts, filterValue]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBar filterValue={filterValue} handleFilter={handleFilter} />
      <ContactsList onDeleteContact={onDeleteContact} contacts={filteredContacts} />
    </div>
  );
};

export default App;