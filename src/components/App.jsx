import React from 'react';

import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <div className={css.appContainer}>
        <Title title="Add contact" />
        <ContactForm />
        <Title title="Find contact" />
        <Filter />
      </div>
    </div>
  );
};
