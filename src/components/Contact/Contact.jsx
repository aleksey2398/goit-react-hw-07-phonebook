import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <li key={id} className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;