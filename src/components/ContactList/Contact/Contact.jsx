import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { deleteContactAction } from 'redux/slices/sliceContacts';

import css from './contact.module.css';

const Contact = ({ id, name, number,  }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <span className={css.contactData}>
        <span className={css.name}>{name}</span>
        <span className={css.number}>{number}</span>
      </span>
      <button
        className={css.button}
        onClick={() => {
          // dispatch(deleteContactAction(id))
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
