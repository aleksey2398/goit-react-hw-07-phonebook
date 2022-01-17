import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "./ContactsList";
import { fetchContacts } from "../redux/phonebook/phonebook-operations";
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;