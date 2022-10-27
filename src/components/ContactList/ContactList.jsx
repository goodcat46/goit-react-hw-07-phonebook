import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllContacts, getFilter, getIsLoading } from 'redux/selectors';
import Contact from './Contact/Contact';

import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const [filteredContacts, setFilteredContacts] = useState([]);

  function applyFilter() {
    setFilteredContacts(
      contacts.filter(
        ({ name }) =>
          !(filter && !name.toLowerCase().includes(filter.toLowerCase()))
      )
    );
  }
  useEffect(() => {
    applyFilter();
  });
  return (
    <ul className={css.contactList}>
      {isLoading && (
        <li className={css.notification}>
          <span className={css.donate}>{`Loading...`}</span>
        </li>
      )}

      {filteredContacts.map(el => (
        <Contact key={el.id} id={el.id} name={el.name} phone={el.phone} />
      ))}
      {contacts.length === 0 && (
        <li className={css.notification}>
          <span
            className={css.span}
          >{`Database is empty, please add new contact.`}</span>
        </li>
      )}
      {(filteredContacts.length === 0) && (
        <li className={css.notification}>
          {filter !== '' && (
            <span
              className={css.span}
            >{`Not founded any contacts on your request - "${filter}". Please try again. `}</span>
          )}
          {filter === '' && (
            <span
              className={css.span}
            >{`Please type any name and apply filter. `}</span>
          )}
          <span className={css.donate}>{`or donate ua army`}</span>
        </li>
      )}
    </ul>
  );
};

export default ContactList;
