import s from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import contactsTodo from "./contactsTodo.json";
import "modern-normalize";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(contactsTodo);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewContact = (values) => {
    const newContact = { ...values, id: nanoid() };
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  const deleteContact = (id) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.header}>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
