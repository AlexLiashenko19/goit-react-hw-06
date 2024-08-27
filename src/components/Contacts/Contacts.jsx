import css from "./Contacts.module.css"

const Contacts = ({ state, onDeleteContact }) => {
  return (
    <div className={css.contacts}>
      <span>Name: {state.name}</span>
      <span>Number: {state.number}</span>
      <button onClick={() => onDeleteContact(state.id)} type="button" >Delete</button>
    </div>
  );
};

export default Contacts;