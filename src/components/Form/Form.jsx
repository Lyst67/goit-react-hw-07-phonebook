import React from 'react';
import css from './Form.module.css';
import { addContact } from 'redux/sliceContacts';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const Form = () => {
 
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)
      
     const handleSubmit = (event) => {
       event.preventDefault()
       const form = event.currentTarget
       const name = form.elements.name.value
       const number = form.elements.number.value
       const id = nanoid()
       const newContact = { id, name, number }
       const existName = contacts.find(contact =>
         contact.name.toLowerCase() === name.toLowerCase().trim())
       if (existName) { alert(`${name} is already in contacts!`)
         return
       }
       dispatch(addContact(newContact))
       form.reset()
      }

      return (
        <form className={css.form_thumb} onSubmit={handleSubmit}>
        <label  className={css.form_label}>Name
            <input className={css.form_input} type="text" name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name"
                required
              />
            </label>
            <label  className={css.form_label}>Number
            <input className={css.form_input} type="tel" name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number"
                required
              />
            </label>
        <button type="submit" className={css.form_btn}>Add contact</button>
        </form> 
      ) 
}


