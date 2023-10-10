import { useDispatch } from 'react-redux'
import css from './Filter.module.css'
import { filterContacts } from 'redux/slice.Filter'


export const Filter = () => {
const dispatch = useDispatch()
const handleFilter = (event) => {
    const value = event.target.value
   dispatch(filterContacts(value))
    }
   
    return (
        <div className={css.filter_form}>
            <label className={css.filter_label}>Find contacts by name
                <input className={css.filter_input} type="text" name="filter"
                     onChange={handleFilter}></input>
            </label>
        </div>
    )
}  