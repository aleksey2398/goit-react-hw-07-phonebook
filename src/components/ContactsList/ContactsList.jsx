import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact";
import { getFilteredContacts } from "../../redux/phonebook/phonebook-selectors";
import styles from "./ContactsList.module.css";
import { fetchContacts } from "../../redux/phonebook/phonebook-operations";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const list = contacts?.map(({ id, name, number }) => (
    <Contact key={id} name={name} number={number} id={id} />
  ));
  return <ul className={styles.contactsList}>{list}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;