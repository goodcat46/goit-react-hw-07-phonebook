import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilterAction } from 'redux/slices/sliceFilter';
import ContactList from 'components/ContactList/ContactList';

import { fetchAllContacts } from 'redux/contactThunk';

import css from './filter.module.css';

const Filter = () => {
  const [filterInput, setFilterInput] = useState('');

  const dispatch = useDispatch();

  function handleFilterChange(evt) {
    let { target } = evt;
    setFilterInput(target.value);
    dispatch(applyFilterAction(target.value.trim()));
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    
  }
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <div className={css.filter}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label} htmlFor="filter">
          Filter
        </label>
        <input
          className={css.input}
          name="filter"
          type="text"
          id="filter"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={filterInput}
          onChange={handleFilterChange}
        />
      </form>
      <ContactList />
    </div>
  );
};

export default Filter;
