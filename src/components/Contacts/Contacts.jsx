import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/sliceContacts';
import css from './Contacts.module.css';
import { getContacts, getFilter } from "redux/selectors";

export const Contacts = () => {
   
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch()

    const deleteElement = (event) => {
       dispatch(deleteContact(event.target.id))  
    } 
    
    const filter = useSelector(getFilter)
       const filterContacts = () => {
           return contacts.filter((el) =>
               el.name.toLowerCase().includes(filter.toLowerCase()))
  }
    
    return (
        <>
            <ul className={css.cont_list}>
                {filterContacts().map(({id, name, number}) => {
                    return (
                    <li className={css.cont_item} key={id}>
                            <p>{name}: {number}</p>
                            <button className={css.cont_btn} type="button"
                                 id={id} onClick={deleteElement}>Delete</button>
                    </li>
                    )
                })}
            </ul>
        </> 
    )
}