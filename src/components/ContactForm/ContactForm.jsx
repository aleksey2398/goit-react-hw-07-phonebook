import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import InputField from "../InputField/InputField";
import inputAttr from "../InputField/InputAttr";
import { addContact } from "../../redux/phonebook/phonebook-operations";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts?.map((contact) => contact.name).includes(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        {...inputAttr.name}
        value={name}
        onChange={handleNameChange}
      />
      <InputField
        {...inputAttr.number}
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;