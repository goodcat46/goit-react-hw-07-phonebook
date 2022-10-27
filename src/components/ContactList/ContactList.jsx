import React from 'react';
import { useSelector } from 'react-redux';
import { getAllContacts, getFilter, getIsLoading } from 'redux/selectors';
import Contact from './Contact/Contact';

import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);

  function applyFilter() {
    return contacts.filter(
      ({ name }) =>
        !(filter && !name.toLowerCase().includes(filter.toLowerCase()))
    );
  }

  return (
    <ul className={css.contactList}>
      {isLoading && (
        <li className={css.notification}>
          <span className={css.donate}>{`Loading...`}</span>
        </li>
      )}
      {applyFilter().map(el => (
        <Contact key={el.id} id={el.id} name={el.name} phone={el.phone} />
      ))}
      {contacts.length === 0 && (
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
