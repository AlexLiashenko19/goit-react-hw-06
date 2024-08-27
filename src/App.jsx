import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import SearchBar from "./components/SearchBar/SearchBar";
import contacts from "./db/contacts.json"
import { nanoid } from "nanoid";

const App = () => {
  const [contactState, setContactsState] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : contacts;
  });
  const [filterValue, setFilterValue] = useState("")

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactState));
  }, [contactState]);

 const onAddProfile = (profile) => {
  const finallProfile = {
    ...profile, 
    id: nanoid()
  }
  setContactsState([finallProfile, ...contactState])
 }

 const onDeleteContact = (profileId) => {
  setContactsState(contactState.filter(item => item.id !== profileId))
 }

 const handleFilter = (event) => {
  const value = event.target.value;
  setFilterValue(value)
 }

 const filteredProfile = contactState.filter((profile) => profile.name.toLowerCase().includes(filterValue.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddProfile={onAddProfile}/>
      <SearchBar filterValue={filterValue} handleFilter={handleFilter}/>
      <ContactsList contactState={filteredProfile} onDeleteContact={onDeleteContact}/>
    </div>
  );
};

export default App;