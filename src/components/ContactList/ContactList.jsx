import React from 'react';
import { useSelector,  } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import Contact from './Contact/Contact';

import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const { filter } = useSelector(state => state.filter);
  
  function applyFilter() {
    return contacts.filter(
      ({ name }) =>
        !(filter && !name.toLowerCase().includes(filter.toLowerCase()))
    );
  }

  

  return (
    <ul className={css.contactList}>
      {applyFilter().map(el => (
        <Contact key={el.id} id={el.id} name={el.name} number={el.number} />
      ))}
      {contacts.length === 0 && (
        <li className={css.notification}>
          <span
            className={css.span}
          >{`Not founded any contacts on your request - "${filter}". Please try again. `}</span>
          <span className={css.donate}>{`or donate ua army`}</span>
        </li>
      )}
    </ul>
  );
};

export default ContactList;
