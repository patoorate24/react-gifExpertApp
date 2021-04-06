import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('games');
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length){
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('');
        }

        
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type = "text"
            value = {inputValue}
            onChange = { handleInputChange}
            />
            </form>
        </div>
    )

    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}