import s from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import contactsTodo from "./contactsTodo.json";
import "modern-normalize";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return contactsTodo;
  });

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

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

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
