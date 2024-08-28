import css from './ContactsList.module.css';
import Contacts from '../Contacts/Contacts';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.movieList}>
      {contacts.map((state) => (
        <li key={state.id}>
          <Contacts state={state} onDeleteContact={onDeleteContact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;