// import './styles/App.css'
import React, { useState } from 'react'

const Education = () => {
    const [details, setDetails] = useState({
        school: '',
        title: '',
        date: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDetails((prev) => {
            return{...prev, [name]: value}
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // print this on new page
        console.log(details);
    }

    return (
        <form onSubmit = {handleSubmit} >
            <label> School: </label>
                <input
                    name = 'school'
                    type = 'text'
                    onChange = {handleChange} />
            <label> Title of Study: </label>
                <input
                    name = 'title'
                    type = 'text'
                    onChange = {handleChange} />
            <label> Date of Study: </label>
                <input
                    name = 'date'
                    type = 'date'
                    onChange = {handleChange} />
            <button type = 'submit'> Save </button>
        </form>
    )
}


export default Education