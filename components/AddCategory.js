import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log("handleChange llamado");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('HandleSubmit',inputValue );
        if (inputValue.trim().length > 2) {
            setCategories(categ => [inputValue, ...categ]);
            setInputValue('');
        }
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <p> { inputValue } </p>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.defaultProps = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;