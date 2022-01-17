import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { filterContacts } from "../../redux/phonebook/phonebook-actions";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = (e) => dispatch(filterContacts(e.target.value));
  return (
    <label>
      Find contacts by name
      <input
        className={styles.Filter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;